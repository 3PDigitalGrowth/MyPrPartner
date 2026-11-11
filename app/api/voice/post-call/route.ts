import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { clip, sendHandoff } from "@/lib/voice-handoff";

// Safety net for the Crisis Masterclass voice assistant. ElevenLabs posts every
// finished call here (a post-call webhook set on this agent only, not the 3P
// workspace). If the person asked for something (a call, answers by email, a
// group quote, an opt-out, urgent help) but the call ended before the agent's
// send_to_course_team tool ran, this emails Lyall and Barbara from the call
// analysis, with the transcript. Found on Alex's first browser test, 11 Nov
// 2026: he booked a call, then closed the tab mid-booking and nothing was sent.
//
// Required env: ELEVENLABS_WEBHOOK_SECRET (the webhook's HMAC secret),
// VOICE_AGENT_ID, plus the handoff route's VOICE_HANDOFF_EMAILS and Resend
// settings. Always answers 200 once the signature checks out, so ElevenLabs
// doesn't retry calls that need nothing.

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
  tool_calls?: { tool_name?: string }[] | null;
  tool_results?: { tool_name?: string; is_error?: boolean }[] | null;
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
  const handedOff = transcript.some((t) =>
    (t.tool_results || []).some((r) => r.tool_name === "send_to_course_team" && !r.is_error)
  );
  if (handedOff) return skip(`handoff already sent (${conversationId})`);

  const analysis = (data.analysis || {}) as Record<string, unknown>;
  const dc = (analysis.data_collection_results || {}) as Record<string, { value?: unknown }>;
  const val = (k: string) => dc[k]?.value;
  const nextStep = clip(val("next_step"), 40);
  const optOut = val("opt_out") === true;
  const questions = clip(val("questions"), 3000);
  if (!optOut && !ACTIONABLE.has(nextStep) && !questions) {
    return skip(`nothing requested (${conversationId}, next_step ${nextStep || "none"})`);
  }

  const client = (data.conversation_initiation_client_data || {}) as Record<string, unknown>;
  const vars = (client.dynamic_variables || {}) as Record<string, unknown>;
  const lines = transcript
    .filter((t) => clip(t.message, 2000))
    .map((t) => `${t.role === "agent" ? "Assistant" : "Caller"}: ${clip(t.message, 2000).replace(/\[[a-z ]+\]\s*/gi, "")}`);

  const result = await sendHandoff({
    fields: {
      request_type: requestType(nextStep, optOut, questions),
      contact_name: clip(vars.first_name, 120),
      organisation: clip(vars.organisation, 160),
      role: val("role"),
      email: clip(val("contact_email"), 200) || clip(vars.email, 200),
      phone: val("contact_phone"),
      preferred_call_time: val("call_time"),
      questions,
      missing_information: val("missing_information"),
      hesitation: val("hesitation"),
      group_size: val("team_size"),
      prep_notes: val("prep_notes"),
      summary: analysis.transcript_summary,
    },
    source: clip(vars.source, 60),
    conversationId,
    lateNote:
      "These details come from the call analysis, so check them against the transcript below. The email shown is the one confirmed on the call, or the address on file if none was.",
    transcript: lines.join("\n"),
  });
  if (result.status === "error") {
    console.error("[api/voice/post-call]", result.error, conversationId);
    // 5xx so ElevenLabs retries (if retries are on) when the email side is down.
    return NextResponse.json({ ok: false, error: result.error }, { status: result.code >= 500 ? result.code : 200 });
  }
  console.log("[api/voice/post-call] safety net fired", { conversationId, status: result.status });
  return NextResponse.json({ ok: true, sent: result.status });
}
