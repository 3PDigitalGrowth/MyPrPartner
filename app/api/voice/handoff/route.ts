import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { clip, replyMessage, sendHandoff } from "@/lib/voice-handoff";

// The Crisis Masterclass voice assistant (ElevenLabs, built from
// automation/voice-agent/) calls this mid-call through its send_to_course_team
// webhook tool. An urgent crisis is emailed to Lyall and Barbara straight
// away. Everything else is acknowledged here and goes out in the one call
// report the post-call route sends a minute after the call ends, which reads
// these same details back out of the transcript (Alex, 12 Nov 2026: one
// email per call, with summary, sentiment and suggested follow-ups). Email
// building and test-traffic routing live in lib/voice-handoff.ts.
//
// Required env: VOICE_HANDOFF_SECRET (same value as the agent's workspace
// secret, sent as the x-voice-secret header), VOICE_HANDOFF_EMAILS,
// RESEND_API_KEY. x-voice-dry-run: 1 sends to the BCC list only.

function secretMatches(given: string, expected: string): boolean {
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  const expected = process.env.VOICE_HANDOFF_SECRET;
  if (!expected) {
    console.error("[api/voice/handoff] VOICE_HANDOFF_SECRET is not set");
    return NextResponse.json({ ok: false, error: "Not configured" }, { status: 503 });
  }
  if (!secretMatches(request.headers.get("x-voice-secret") || "", expected)) {
    return NextResponse.json({ ok: false, error: "Unauthorised" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const type = clip(body.request_type, 40);
  const conversationId = clip(body.conversation_id, 80);
  const dryRun = request.headers.get("x-voice-dry-run") === "1";
  if (type !== "urgent_crisis" && !dryRun) {
    console.log("[api/voice/handoff] recorded; goes out in the call report", { type, conversationId });
    return NextResponse.json({ ok: true, message: replyMessage(type) });
  }

  const result = await sendHandoff({
    fields: body,
    source: clip(body.source, 60),
    conversationId,
    dryRun,
  });
  if (result.status === "error") {
    console.error("[api/voice/handoff]", result.error);
    return NextResponse.json({ ok: false, error: result.error }, { status: result.code });
  }
  // The agent tells the caller what this says, so keep it short and true.
  return NextResponse.json({ ok: true, message: replyMessage(type) });
}
