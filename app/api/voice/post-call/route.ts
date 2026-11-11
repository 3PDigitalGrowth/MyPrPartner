import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { clip, sendHandoff } from "@/lib/voice-handoff";

// One call report per finished call of the Crisis Masterclass voice assistant.
// ElevenLabs posts each call here once its analysis is done (a post-call
// webhook set on this agent only, not the 3P workspace). The report goes to
// Lyall and Barbara: a short summary, the caller's sentiment with the reason,
// suggested follow-ups, any request the caller made, and the transcript.
//
// Requests come from the agent's send_to_course_team call when it made one
// (the details the caller confirmed), otherwise from the call analysis. If the
// analysis records a request the agent never passed on (the caller hung up
// mid-booking: Alex's first browser test, 11 Nov 2026), the report says so.
// Alex, 12 Nov 2026: every call gets an overview, not only the ones with a
// request.
//
// Required env: ELEVENLABS_WEBHOOK_SECRET (the webhook's HMAC secret),
// VOICE_AGENT_ID, plus VOICE_HANDOFF_EMAILS and the Resend settings. Answers
// 200 for anything that needs nothing, so ElevenLabs doesn't retry it.

const TOLERANCE_SECS = 30 * 60;
const ACTIONABLE = new Set([
  "coordinator_call",
  "email_answers",
  "group_enquiry",
  "urgent_crisis",
  "callback_later",
  "opt_out",
]);

type Turn = {
  role?: string;
  message?: string | null;
  tool_calls?: { tool_name?: string; params_as_json?: string; request_id?: string }[] | null;
  tool_results?: { tool_name?: string; is_error?: boolean; request_id?: string }[] | null;
};

/** ElevenLabs-Signature: t=<unix secs>,v0=<hex HMAC-SHA256 of "<t>.<raw body>">. */
function signatureValid(header: string, raw: string, secret: string): boolean {
  const parts = Object.fromEntries(
    header.split(",").map((p) => {
      const i = p.indexOf("=");
      return [p.slice(0, i).trim(), p.slice(i + 1).trim()];
    })
  );
  const t = Number(parts.t);
  if (!parts.v0 || !Number.isFinite(t)) return false;
  if (Math.abs(Date.now() / 1000 - t) > TOLERANCE_SECS) return false;
  const expected = createHmac("sha256", secret).update(`${parts.t}.${raw}`).digest("hex");
  const a = Buffer.from(parts.v0);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function requestType(nextStep: string, optOut: boolean, questions: string): string {
  if (optOut || nextStep === "opt_out") return "opt_out";
  if (nextStep === "urgent_crisis") return "urgent_crisis";
  if (nextStep === "group_enquiry") return "group_enrolment";
  if (nextStep === "coordinator_call" || nextStep === "callback_later") return "call_request";
  return questions ? "questions" : "call_request";
}

/** The details the agent passed to send_to_course_team, if that call succeeded. */
function handoffParams(transcript: Turn[]): Record<string, unknown> | null {
  let params: Record<string, unknown> | null = null;
  for (const t of transcript) {
    for (const call of t.tool_calls || []) {
      if (call.tool_name !== "send_to_course_team") continue;
      try {
        params = JSON.parse(call.params_as_json || "{}");
      } catch {
        params = {};
      }
    }
    for (const res of t.tool_results || []) {
      if (res.tool_name === "send_to_course_team" && res.is_error) params = null;
    }
  }
  return params;
}

export async function POST(request: Request) {
  const secret = process.env.ELEVENLABS_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[api/voice/post-call] ELEVENLABS_WEBHOOK_SECRET is not set");
    return NextResponse.json({ ok: false, error: "Not configured" }, { status: 503 });
  }
  const raw = await request.text();
  if (!signatureValid(request.headers.get("elevenlabs-signature") || "", raw, secret)) {
    return NextResponse.json({ ok: false, error: "Bad signature" }, { status: 401 });
  }

  let event: { type?: string; data?: Record<string, unknown> };
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  const skip = (reason: string) => {
    console.log("[api/voice/post-call] skipped:", reason);
    return NextResponse.json({ ok: true, skipped: reason });
  };

  if (event.type !== "post_call_transcription" || !event.data) return skip(`event ${event.type}`);
  const data = event.data;
  const conversationId = clip(data.conversation_id, 80);
  const agentId = process.env.VOICE_AGENT_ID;
  if (agentId && data.agent_id !== agentId) return skip(`other agent ${String(data.agent_id)}`);

  const transcript = (Array.isArray(data.transcript) ? data.transcript : []) as Turn[];
  if (!transcript.some((t) => t.role === "user" && clip(t.message, 10))) {
    return skip(`caller never spoke (${conversationId})`);
  }

  const analysis = (data.analysis || {}) as Record<string, unknown>;
  const dc = (analysis.data_collection_results || {}) as Record<string, { value?: unknown }>;
  const val = (k: string) => dc[k]?.value;
  const client = (data.conversation_initiation_client_data || {}) as Record<string, unknown>;
  const vars = (client.dynamic_variables || {}) as Record<string, unknown>;
  const metadata = (data.metadata || {}) as Record<string, unknown>;

  const handoff = handoffParams(transcript);
  const nextStep = clip(val("next_step"), 40);
  const optOut = val("opt_out") === true;
  const questions = clip(val("questions"), 3000);
  const analysisRequest = optOut || ACTIONABLE.has(nextStep);
  const type = clip(handoff?.request_type, 40) || (analysisRequest ? requestType(nextStep, optOut, questions) : "");

  // What the agent confirmed on the call wins over what the analysis inferred.
  const pick = (fromHandoff: unknown, fromAnalysis: unknown) =>
    clip(fromHandoff, 3000) || (typeof fromAnalysis === "string" ? fromAnalysis : "");
  const lines = transcript
    .filter((t) => clip(t.message, 2000))
    .map((t) => `${t.role === "agent" ? "Assistant" : "Caller"}: ${clip(t.message, 2000).replace(/\[[a-z ]+\]\s*/gi, "")}`);

  const result = await sendHandoff({
    fields: {
      request_type: type,
      contact_name: pick(handoff?.contact_name, clip(vars.first_name, 120)),
      organisation: pick(handoff?.organisation, clip(vars.organisation, 160)),
      role: pick(handoff?.role, val("role")),
      email: pick(handoff?.email, clip(val("contact_email"), 200) || clip(vars.email, 200)),
      phone: pick(handoff?.phone, val("contact_phone")),
      preferred_call_time: pick(handoff?.preferred_call_time, val("call_time")),
      questions: pick(handoff?.questions, questions),
      missing_information: pick(handoff?.missing_information, val("missing_information")),
      hesitation: pick(handoff?.hesitation, val("hesitation")),
      group_size: pick(handoff?.group_size, val("team_size")),
      prep_notes: val("prep_notes"),
      promised: clip(handoff?.promised, 500),
      summary: clip(val("call_summary"), 3000) || clip(analysis.transcript_summary, 3000),
    },
    source: clip(vars.source, 60),
    conversationId,
    lateNote:
      analysisRequest && !handoff
        ? "These details come from the call analysis, so check them against the transcript below. The email shown is the one confirmed on the call, or the address on file if none was."
        : undefined,
    transcript: lines.join("\n"),
    report: {
      sentiment: clip(val("sentiment"), 20),
      sentimentReason: clip(val("sentiment_reason"), 400),
      followUps: clip(val("follow_up_actions"), 2000).split("|").map((x) => x.trim()).filter(Boolean),
      durationSecs: Number(metadata.call_duration_secs) || undefined,
      requestedInCall: !!handoff,
      urgentAlertSent: handoff?.request_type === "urgent_crisis",
    },
  });
  if (result.status === "error") {
    console.error("[api/voice/post-call]", result.error, conversationId);
    // 5xx so ElevenLabs retries when the email side is down.
    return NextResponse.json({ ok: false, error: result.error }, { status: result.code >= 500 ? result.code : 200 });
  }
  console.log("[api/voice/post-call] report", { conversationId, status: result.status, type: type || "none" });
  return NextResponse.json({ ok: true, sent: result.status });
}
