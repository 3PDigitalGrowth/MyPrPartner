import { Resend } from "resend";

// Shared by the Crisis Masterclass voice assistant's two routes:
//   app/api/voice/handoff    the agent's send_to_course_team tool, mid-call.
//                            Emails straight away for an urgent crisis only.
//   app/api/voice/post-call  ElevenLabs' post-call webhook: one call report per
//                            finished call (summary, sentiment, suggested
//                            follow-ups, any request, transcript). Alex, 12 Nov
//                            2026: Lyall and Barbara get an overview of every
//                            call, not only the ones with a request.
// Both email VOICE_HANDOFF_EMAILS (Lyall and Barbara; env only, this repo is
// public) through Resend, BCC ADMIN_NOTIFICATION_BCC.
//
// The call's `source` dynamic variable decides where test traffic goes:
//   simulation     automated test runs: nothing is emailed
//   internal-test  3P's own test link (or dryRun): BCC list (Alex) only
//   review-link    the link Lyall and Barbara test with: sent to them, [Test call]
//   anything else  a real call: sent to them, reply-to set to the prospect

const RECIPIENTS = list(process.env.VOICE_HANDOFF_EMAILS || "");
const BCC = list(process.env.ADMIN_NOTIFICATION_BCC || "alex@3pdigital.com.au");
const FROM = (process.env.RESEND_FROM || "My PR Partner <onboarding@resend.dev>").replace(/\\n/g, "").trim();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const REQUEST_TYPES: Record<string, string> = {
  call_request: "Call requested",
  questions: "Questions to answer by email",
  group_enrolment: "Group enrolment enquiry",
  urgent_crisis: "URGENT: active crisis",
  opt_out: "Asked not to be contacted again",
};

const SENTIMENT_COLOURS: Record<string, string> = {
  positive: "#1B873F",
  neutral: "#4A4A68",
  negative: "#C0392B",
};

export type CallReport = {
  sentiment?: string;
  sentimentReason?: string;
  followUps?: string[];
  durationSecs?: number;
  /** The agent passed a request on during the call (so the person was told to expect contact). */
  requestedInCall?: boolean;
  /** An urgent alert already went out mid-call. */
  urgentAlertSent?: boolean;
};

export type Handoff = {
  fields: Record<string, unknown>;
  source: string;
  conversationId: string;
  /** Send to the BCC list only, whatever the source. */
  dryRun?: boolean;
  /** Set when the caller asked for something but hung up before the agent passed it on. */
  lateNote?: string;
  /** Plain-text transcript. */
  transcript?: string;
  /** Present on post-call reports. */
  report?: CallReport;
};

export type HandoffResult =
  | { status: "sent"; id?: string }
  | { status: "simulation" }
  | { status: "error"; code: number; error: string };

function list(value: string): string[] {
  return value.split(",").map((e) => e.trim()).filter(Boolean);
}

export function clip(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#4A4A68;font-size:14px;white-space:nowrap;">${esc(label)}</td><td style="padding:6px 0;vertical-align:top;color:#1A1A2E;font-size:15px;line-height:22px;">${esc(value).replace(/\n/g, "<br>")}</td></tr>`;
}

function duration(secs?: number): string {
  if (!secs || !Number.isFinite(secs)) return "";
  const m = Math.floor(secs / 60);
  const s = Math.round(secs % 60);
  return m ? `${m} min ${s} s` : `${s} s`;
}

/** What the agent tells the caller after it hands over. */
export function replyMessage(type: string): string {
  if (type === "opt_out") return "Passed to Lyall and Barbara so this person is not contacted again.";
  if (type === "urgent_crisis") return "Passed to Lyall and Barbara marked urgent. No callback time can be promised.";
  return "Passed to Lyall and Barbara. They aim to reply within one business day.";
}

export async function sendHandoff(h: Handoff): Promise<HandoffResult> {
  if (!RECIPIENTS.length) {
    return { status: "error", code: 503, error: "VOICE_HANDOFF_EMAILS is not set" };
  }
  const f = h.fields;
  const r = h.report;
  const type = clip(f.request_type, 40);
  const label = REQUEST_TYPES[type] || (r ? "Call report" : "Course enquiry");
  const name = clip(f.contact_name, 120);
  const organisation = clip(f.organisation, 160);
  const email = clip(f.email, 200);
  const source = clip(h.source, 60);
  const isTest = /test|review/i.test(source);
  const sentiment = clip(r?.sentiment, 20).toLowerCase();

  const details = [
    row("Name", name),
    row("Organisation", organisation),
    row("Role", clip(f.role, 160)),
    row("Email", email),
    row("Phone", clip(f.phone, 60)),
    row("Call time asked for", clip(f.preferred_call_time, 200)),
    row("Questions to answer", clip(f.questions, 3000)),
    row("Missing from the website", clip(f.missing_information, 2000)),
    row("What's holding them back", clip(f.hesitation, 1000)),
    row("Team or group size", clip(f.group_size, 200)),
    row("To help prepare", clip(f.prep_notes, 1000)),
    row("Promised on the call", clip(f.promised, 500)),
    row("Call length", duration(r?.durationSecs)),
  ].join("");
  const summary = clip(f.summary, 3000);
  if (!details && !summary) return { status: "error", code: 400, error: "Nothing to send" };

  const subject =
    `${isTest ? "[Test call] " : ""}Crisis Masterclass assistant: ${label}` +
    (h.lateNote ? " (call ended early)" : "") +
    (name ? ` - ${name}` : "") +
    (organisation ? `, ${organisation}` : "") +
    (sentiment ? ` (${sentiment})` : "");

  if (source === "simulation") {
    console.log("[voice-handoff] simulation, not emailed", { subject, conversationId: h.conversationId });
    return { status: "simulation" };
  }

  const intro = isTest
    ? "This came from a test of the course assistant, not a real prospect."
    : h.lateNote
      ? "The AI course assistant spoke with this person, but the call ended before it passed their request on."
      : r && !type
        ? "The AI course assistant spoke with this person. They didn't ask for anything, so here's how the call went."
        : r?.urgentAlertSent
          ? "The urgent alert went out during the call. This is the full report."
          : "The AI course assistant spoke with this person and told them Lyall or Barbara would follow up.";

  const sentimentBlock = sentiment
    ? `<tr><td style="padding:0 28px 16px;font-size:15px;line-height:22px;color:#1A1A2E;"><span style="display:inline-block;padding:3px 10px;border-radius:999px;background:${SENTIMENT_COLOURS[sentiment] || "#4A4A68"};color:#ffffff;font-size:13px;font-weight:bold;text-transform:capitalize;">${esc(sentiment)}</span>${
        r?.sentimentReason ? ` &nbsp;${esc(clip(r.sentimentReason, 400))}` : ""
      }</td></tr>`
    : "";
  const summaryBlock = summary
    ? `<tr><td style="padding:0 28px 16px;font-size:15px;line-height:22px;color:#1A1A2E;">${esc(summary).replace(/\n/g, "<br>")}</td></tr>`
    : "";
  const followUps = (r?.followUps || []).map((x) => clip(x, 400)).filter(Boolean);
  const followUpBlock = followUps.length
    ? `<tr><td style="padding:0 28px 20px;"><div style="font-size:13px;color:#07AFBB;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Suggested follow-up</div><table role="presentation" cellpadding="0" cellspacing="0">${followUps
        .map(
          (x, i) =>
            `<tr><td style="padding:4px 10px 4px 0;vertical-align:top;color:#1A2B4A;font-size:15px;font-weight:bold;">${i + 1}.</td><td style="padding:4px 0;vertical-align:top;color:#1A1A2E;font-size:15px;line-height:22px;">${esc(x)}</td></tr>`
        )
        .join("")}</table></td></tr>`
    : "";
  const transcript = h.transcript
    ? `<tr><td style="padding:0 28px 24px;"><div style="font-size:13px;color:#4A4A68;margin-bottom:6px;">Transcript</div><div style="font-size:13px;line-height:20px;color:#1A1A2E;background:#F7F8FA;padding:12px;">${esc(h.transcript.slice(0, 8000)).replace(/\n/g, "<br>")}</div></td></tr>`
    : "";

  const html = `<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#F7F8FA;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #E5E7EB;">
<tr><td style="padding:24px 28px 8px;font-size:13px;color:#07AFBB;text-transform:uppercase;letter-spacing:1px;">Crisis Masterclass course assistant</td></tr>
<tr><td style="padding:0 28px 8px;font-size:22px;font-weight:bold;color:#1A2B4A;">${esc(label)}</td></tr>
<tr><td style="padding:0 28px 16px;font-size:15px;line-height:22px;color:#4A4A68;">${esc(intro)}${
    h.lateNote ? `<br><br>${esc(h.lateNote)}` : ""
  }</td></tr>
${sentimentBlock}
${summaryBlock}
${followUpBlock}
<tr><td style="padding:0 28px 24px;"><table role="presentation" cellpadding="0" cellspacing="0">${details}</table></td></tr>
${transcript}
<tr><td style="padding:16px 28px;border-top:1px solid #E5E7EB;font-size:12px;color:#4A4A68;">${
    email && !isTest ? "Reply to this email to write straight back to them. " : ""
  }Call reference: ${esc(h.conversationId || "not recorded")}${source ? ` (${esc(source)})` : ""}. Sent by 3P Digital's voice assistant for My PR Partner.</td></tr>
</table></body></html>`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { status: "error", code: 503, error: "RESEND_API_KEY is not set" };

  const bccOnly = h.dryRun || source === "internal-test";
  const result = await new Resend(apiKey).emails.send({
    from: FROM,
    to: bccOnly ? BCC : RECIPIENTS,
    ...(!bccOnly && BCC.length ? { bcc: BCC } : {}),
    // Test personas carry made-up addresses on real-looking domains: never reply-to those.
    ...(!isTest && EMAIL_RE.test(email) ? { replyTo: name ? `${name} <${email}>` : email } : {}),
    subject,
    html,
  });
  if (result.error) {
    console.error("[voice-handoff] Resend rejected the email:", result.error);
    return { status: "error", code: 502, error: "Email failed" };
  }
  const id = result.data?.id;
  console.log("[voice-handoff] sent", { id, type, report: !!r, sentiment, conversationId: h.conversationId, bccOnly, test: isTest, late: !!h.lateNote });
  return { status: "sent", id };
}
