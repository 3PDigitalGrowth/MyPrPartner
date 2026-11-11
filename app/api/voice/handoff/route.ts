import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// The Crisis Masterclass voice assistant (ElevenLabs, built from
// automation/voice-agent/) calls this mid-call through its send_to_course_team
// webhook tool. Each call emails Lyall and Barbara what the person asked, what
// was missing from the site and any call they want booked, so the team can
// write back or ring them.
//
// Required env: VOICE_HANDOFF_SECRET (same value as the agent's workspace
// secret, sent as the x-voice-secret header), VOICE_HANDOFF_EMAILS (Lyall
// and Barbara, comma-separated; kept out of this public repo), RESEND_API_KEY.
// Optional env: ADMIN_NOTIFICATION_BCC, RESEND_FROM.
//
// Test traffic never reaches the client unannounced. The agent passes its
// `source` dynamic variable through:
//   simulation     automated test runs: nothing is emailed, the call is logged
//   internal-test  3P's own test link, and the x-voice-dry-run: 1 header:
//                  emailed to the BCC list (Alex) only
//   review-link    the link Lyall and Barbara test with: emailed to them as
//                  normal, subject marked [Test call]

const RECIPIENTS = list(process.env.VOICE_HANDOFF_EMAILS || "");
const BCC = list(process.env.ADMIN_NOTIFICATION_BCC || "alex@3pdigital.com.au");
const FROM = (process.env.RESEND_FROM || "My PR Partner <onboarding@resend.dev>").replace(/\\n/g, "").trim();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TYPES: Record<string, string> = {
  call_request: "Call requested",
  questions: "Questions to answer by email",
  group_enrolment: "Group enrolment enquiry",
  urgent_crisis: "URGENT: active crisis",
  opt_out: "Asked not to be contacted again",
};

function list(value: string): string[] {
  return value.split(",").map((e) => e.trim()).filter(Boolean);
}

function clip(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function secretMatches(given: string, expected: string): boolean {
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#4A4A68;font-size:14px;white-space:nowrap;">${esc(label)}</td><td style="padding:6px 0;vertical-align:top;color:#1A1A2E;font-size:15px;line-height:22px;">${esc(value).replace(/\n/g, "<br>")}</td></tr>`;
}

export async function POST(request: Request) {
  const expected = process.env.VOICE_HANDOFF_SECRET;
  if (!expected || !RECIPIENTS.length) {
    console.error("[api/voice/handoff] VOICE_HANDOFF_SECRET or VOICE_HANDOFF_EMAILS is not set");
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
  const label = TYPES[type] || "Course enquiry";
  const name = clip(body.contact_name, 120);
  const organisation = clip(body.organisation, 160);
  const email = clip(body.email, 200);
  const source = clip(body.source, 60);
  const isTest = /test|review/i.test(source);

  const details = [
    row("Name", name),
    row("Organisation", organisation),
    row("Role", clip(body.role, 160)),
    row("Email", email),
    row("Phone", clip(body.phone, 60)),
    row("Call time asked for", clip(body.preferred_call_time, 200)),
    row("Questions to answer", clip(body.questions, 3000)),
    row("Missing from the website", clip(body.missing_information, 2000)),
    row("What's holding them back", clip(body.hesitation, 1000)),
    row("Team or group size", clip(body.group_size, 200)),
    row("Call summary", clip(body.summary, 3000)),
    row("Promised on the call", clip(body.promised, 500)),
  ].join("");

  if (!details) {
    return NextResponse.json({ ok: false, error: "Nothing to send" }, { status: 400 });
  }

  const conversationId = clip(body.conversation_id, 80);
  const subject =
    `${isTest ? "[Test call] " : ""}Crisis Masterclass assistant: ${label}` +
    (name ? ` - ${name}` : "") +
    (organisation ? `, ${organisation}` : "");

  const html = `<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#F7F8FA;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #E5E7EB;">
<tr><td style="padding:24px 28px 8px;font-size:13px;color:#07AFBB;text-transform:uppercase;letter-spacing:1px;">Crisis Masterclass course assistant</td></tr>
<tr><td style="padding:0 28px 8px;font-size:22px;font-weight:bold;color:#1A2B4A;">${esc(label)}</td></tr>
<tr><td style="padding:0 28px 16px;font-size:15px;line-height:22px;color:#1A1A2E;">${
    isTest
      ? "This came from a test of the course assistant, not a real prospect."
      : "The AI course assistant spoke with this person and told them Lyall or Barbara would follow up."
  }</td></tr>
<tr><td style="padding:0 28px 24px;"><table role="presentation" cellpadding="0" cellspacing="0">${details}</table></td></tr>
<tr><td style="padding:16px 28px;border-top:1px solid #E5E7EB;font-size:12px;color:#4A4A68;">${
    email ? "Reply to this email to write straight back to them. " : ""
  }Call reference: ${esc(conversationId || "not recorded")}${source ? ` (${esc(source)})` : ""}. Sent by 3P Digital's voice assistant for My PR Partner.</td></tr>
</table></body></html>`;

  // The agent tells the caller what this says, so keep it short and true.
  const reply = {
    ok: true,
    message:
      type === "opt_out"
        ? "Passed to Lyall and Barbara so this person is not contacted again."
        : type === "urgent_crisis"
          ? "Passed to Lyall and Barbara marked urgent. No callback time can be promised."
          : "Passed to Lyall and Barbara. They aim to reply within one business day.",
  };
  if (source === "simulation") {
    console.log("[api/voice/handoff] simulation, not emailed", { type, conversationId, subject });
    return NextResponse.json(reply);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[api/voice/handoff] RESEND_API_KEY is not set");
    return NextResponse.json({ ok: false, error: "Email service is not configured" }, { status: 503 });
  }

  const dryRun = request.headers.get("x-voice-dry-run") === "1" || source === "internal-test";
  const to = dryRun ? BCC : RECIPIENTS;
  const result = await new Resend(apiKey).emails.send({
    from: FROM,
    to,
    ...(!dryRun && BCC.length ? { bcc: BCC } : {}),
    ...(EMAIL_RE.test(email) ? { replyTo: name ? `${name} <${email}>` : email } : {}),
    subject,
    html,
  });
  if (result.error) {
    console.error("[api/voice/handoff] Resend rejected the email:", result.error);
    return NextResponse.json({ ok: false, error: "Email failed" }, { status: 502 });
  }

  console.log("[api/voice/handoff] sent", { type, conversationId, dryRun, test: isTest });
  return NextResponse.json(reply);
}
