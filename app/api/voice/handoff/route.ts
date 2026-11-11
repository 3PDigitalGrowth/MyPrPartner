import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { clip, replyMessage, sendHandoff } from "@/lib/voice-handoff";

// The Crisis Masterclass voice assistant (ElevenLabs, built from
// automation/voice-agent/) calls this mid-call through its send_to_course_team
// webhook tool. Each call emails Lyall and Barbara what the person asked, what
// was missing from the site and any call they want booked, so the team can
// write back or ring them. Email building and test-traffic routing live in
// lib/voice-handoff.ts.
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

  const result = await sendHandoff({
    fields: body,
    source: clip(body.source, 60),
    conversationId: clip(body.conversation_id, 80),
    dryRun: request.headers.get("x-voice-dry-run") === "1",
  });
  if (result.status === "error") {
    console.error("[api/voice/handoff]", result.error);
    return NextResponse.json({ ok: false, error: result.error }, { status: result.code });
  }
  // The agent tells the caller what this says, so keep it short and true.
  return NextResponse.json({ ok: true, message: replyMessage(clip(body.request_type, 40)) });
}
