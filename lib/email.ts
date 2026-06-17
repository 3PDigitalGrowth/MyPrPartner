// ─────────────────────────────────────────────────────────────────────────────
// Email templates for all website form submissions, sent via Resend from
// app/api/forms/route.ts.
//
// Two emails go out per submission:
//   1. clientConfirmationEmail - branded, section-relevant confirmation to the
//      person who submitted the form (Lyall's voice per CRC-Voice-Guide).
//   2. adminNotificationEmail  - plain, scannable internal alert.
//
// Templates are table-based HTML with inline styles only - the lowest common
// denominator that renders correctly in Outlook, Gmail and Apple Mail.
// ─────────────────────────────────────────────────────────────────────────────

export type FormType = "contact" | "resource" | "newsletter" | "waitlist";

export type FormSubmission = {
  formType: FormType;
  email: string;
  /** First name (resource forms) or full name (contact form). */
  name?: string;
  organisation?: string;
  topic?: string;
  message?: string;
  /** e.g. "Trusted Public Voice guide", "Crisis Vulnerability Checklist" */
  resourceLabel?: string;
  /** Site-relative PDF path for resource deliveries, e.g. "/downloads/pr-guide.pdf" */
  downloadHref?: string;
  /** Where on the site the form lives, e.g. "contact-page", "footer", "homepage" */
  source?: string;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://myprpartner.com";

// Brand palette (mirrors tailwind.config.ts)
const NAVY = "#1A2B4A";
const TEAL = "#07AFBB";
const BLUE = "#1E73BE";
const TEXT_DARK = "#1A1A2E";
const TEXT_MEDIUM = "#4A4A68";
const BG_GREY = "#F7F8FA";
const BORDER = "#E5E7EB";

const FONT =
  "'Plus Jakarta Sans','DM Sans',-apple-system,'Segoe UI',Arial,sans-serif";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function firstNameOf(name?: string): string {
  if (!name) return "";
  return name.trim().split(/\s+/)[0];
}

// ── Shared building blocks ───────────────────────────────────────────────────

/** Three-cell brand accent bar - gradient-safe for every email client. */
const accentBar = `
  <tr>
    <td style="padding:0;line-height:0;font-size:0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="34%" height="4" style="background-color:${NAVY};line-height:0;font-size:0;">&nbsp;</td>
          <td width="33%" height="4" style="background-color:${TEAL};line-height:0;font-size:0;">&nbsp;</td>
          <td width="33%" height="4" style="background-color:${BLUE};line-height:0;font-size:0;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>`;

function button(label: string, href: string): string {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0;">
    <tr>
      <td style="border-radius:999px;background-color:${TEAL};">
        <a href="${href}" target="_blank"
           style="display:inline-block;padding:14px 32px;font-family:${FONT};font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:999px;">
          ${label}
        </a>
      </td>
    </tr>
  </table>`;
}

function clientShell(opts: {
  preheader: string;
  heading: string;
  bodyHtml: string;
  footerReason: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My PR Partner</title>
</head>
<body style="margin:0;padding:0;background-color:${BG_GREY};">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(opts.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BG_GREY};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${BORDER};">
          ${accentBar}
          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 0 40px;">
              <p style="margin:0;font-family:${FONT};font-size:20px;font-weight:800;letter-spacing:0.04em;color:${NAVY};">
                MY&nbsp;PR&nbsp;<span style="color:${TEAL};">PARTNER</span>
              </p>
              <p style="margin:6px 0 0 0;font-family:${FONT};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${TEXT_MEDIUM};">
                Powered by CRC Public Relations
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:28px 40px 36px 40px;">
              <h1 style="margin:0 0 18px 0;font-family:${FONT};font-size:26px;line-height:1.25;font-weight:700;color:${TEXT_DARK};">
                ${opts.heading}
              </h1>
              ${opts.bodyHtml}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:${BG_GREY};border-top:1px solid ${BORDER};">
              <p style="margin:0;font-family:${FONT};font-size:12px;line-height:1.6;color:${TEXT_MEDIUM};">
                My PR Partner · Powered by CRC Public Relations<br />
                <a href="${SITE_URL}" style="color:${TEAL};text-decoration:none;">myprpartner.com</a>
              </p>
              <p style="margin:10px 0 0 0;font-family:${FONT};font-size:11px;line-height:1.6;color:${TEXT_MEDIUM};">
                ${opts.footerReason}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function paragraph(html: string): string {
  return `<p style="margin:0 0 16px 0;font-family:${FONT};font-size:15px;line-height:1.65;color:${TEXT_MEDIUM};">${html}</p>`;
}

function calloutBox(titleHtml: string, itemsHtml: string[]): string {
  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;">
    <tr>
      <td style="background-color:${BG_GREY};border-left:4px solid ${TEAL};border-radius:0 12px 12px 0;padding:20px 24px;">
        <p style="margin:0 0 10px 0;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${TEAL};">${titleHtml}</p>
        ${itemsHtml
          .map(
            (item) =>
              `<p style="margin:0 0 8px 0;font-family:${FONT};font-size:14px;line-height:1.6;color:${TEXT_DARK};">${item}</p>`
          )
          .join("")}
      </td>
    </tr>
  </table>`;
}

// ── 1. Client confirmation (section-relevant) ────────────────────────────────

export function clientConfirmationEmail(sub: FormSubmission): {
  subject: string;
  html: string;
} {
  const firstName = escapeHtml(firstNameOf(sub.name));
  const greetName = firstName ? `, ${firstName}` : "";

  if (sub.formType === "contact") {
    const topicLine = sub.topic
      ? paragraph(
          `You told us it's about: <strong style="color:${TEXT_DARK};">${escapeHtml(sub.topic)}</strong>.`
        )
      : "";
    return {
      subject: "We've received your message",
      html: clientShell({
        preheader:
          "Your message is with us. An experienced adviser will reply within 24 hours.",
        heading: `Thanks${greetName}. Your message is with us.`,
        bodyHtml: `
          ${paragraph(
            "Your enquiry has arrived and it will be read personally by one of our experienced advisers. Not a bot, not a ticket queue. A person."
          )}
          ${topicLine}
          ${calloutBox("What happens next", [
            `<strong>1.</strong> Your message goes straight to the adviser best placed to help.`,
            `<strong>2.</strong> We reply within 24 hours on Australian business days.`,
            `<strong>3.</strong> You get a useful answer, not a sales pitch.`,
          ])}
          ${paragraph(
            `<strong style="color:${TEXT_DARK};">Need us sooner?</strong> Reply to this email with URGENT in the subject line and we'll prioritise it. If the matter is sensitive or already in the media, say so. We'll treat it accordingly.`
          )}
          ${paragraph(
            `While you wait, you may find something useful in our <a href="${SITE_URL}/articles" style="color:${TEAL};text-decoration:none;font-weight:600;">articles</a> or the <a href="${SITE_URL}/programs" style="color:${TEAL};text-decoration:none;font-weight:600;">program overview</a>.`
          )}
          ${paragraph(`Talk soon,<br /><strong style="color:${TEXT_DARK};">The My PR Partner team</strong>`)}`,
        footerReason:
          "You're receiving this because you contacted us through myprpartner.com. We'll never sell your email or pass it on.",
      }),
    };
  }

  if (sub.formType === "resource") {
    const label = escapeHtml(sub.resourceLabel || "guide");
    const downloadUrl = sub.downloadHref
      ? `${SITE_URL}${sub.downloadHref}`
      : `${SITE_URL}/resources/pr-guide`;
    return {
      subject: `Your ${sub.resourceLabel || "guide"} is ready`,
      html: clientShell({
        preheader: `Your copy of the ${sub.resourceLabel || "guide"} is ready to download.`,
        heading: `Good move${greetName}. Here's your ${label}.`,
        bodyHtml: `
          ${paragraph(
            "If your download didn't start on the site, the button below will get it for you. Keep it somewhere your whole team can find it."
          )}
          ${button(`Download the ${label}`, downloadUrl)}
          ${calloutBox("One tip from our advisers", [
            "Don't just file it away. Pick one item, put it to work this week, and you'll already be ahead of most organisations.",
          ])}
          ${paragraph(
            `<strong style="color:${TEXT_DARK};">Questions about anything in it?</strong> Reply to this email. An experienced adviser reads every reply, and we aim to come back to you within 24 hours on Australian business days. Need us sooner? Put URGENT in the subject line.`
          )}
          ${paragraph(
            `And when you're ready to go further, our <a href="${SITE_URL}/programs" style="color:${TEAL};text-decoration:none;font-weight:600;">sector programs</a> take your whole team from aware to genuinely ready.`
          )}
          ${paragraph(`Talk soon,<br /><strong style="color:${TEXT_DARK};">The My PR Partner team</strong>`)}`,
        footerReason: `You're receiving this because you requested the ${label} at myprpartner.com. We'll never sell your email or pass it on.`,
      }),
    };
  }

  if (sub.formType === "waitlist") {
    // Topic arrives as "<Program> waitlist"; strip the suffix for clean copy.
    // programRaw is for plain-text fields (subject, preheader, which clientShell
    // escapes itself); program is pre-escaped for inlining into the HTML body.
    const programRaw =
      (sub.topic || "program").replace(/\s*waitlist$/i, "").trim() || "program";
    const program = escapeHtml(programRaw);
    return {
      subject: `You're on the ${programRaw} waitlist`,
      html: clientShell({
        preheader: `You're on the founding-member waitlist for the ${programRaw}. We'll be in touch the moment enrolments open.`,
        heading: `You're on the list${greetName}.`,
        bodyHtml: `
          ${paragraph(
            `Thanks for putting your hand up for the <strong style="color:${TEXT_DARK};">${program}</strong>. You're now on the founding-member waitlist, which means you'll hear from us before enrolments open to the public.`
          )}
          ${calloutBox("What happens next", [
            `<strong>1.</strong> We'll email you the moment enrolments open, ahead of the public.`,
            `<strong>2.</strong> As a founding member, you lock in 10% off your first year.`,
            `<strong>3.</strong> Nothing to pay now, and no obligation to go ahead.`,
          ])}
          ${paragraph(
            `<strong style="color:${TEXT_DARK};">Want to tell us more about your team, or ask a question first?</strong> Just reply to this email. A person reads every reply, and we aim to come back to you within 24 hours on Australian business days.`
          )}
          ${paragraph(
            `While you wait, you might find something useful in our <a href="${SITE_URL}/articles" style="color:${TEAL};text-decoration:none;font-weight:600;">articles</a> or the <a href="${SITE_URL}/programs" style="color:${TEAL};text-decoration:none;font-weight:600;">program overview</a>.`
          )}
          ${paragraph(`Talk soon,<br /><strong style="color:${TEXT_DARK};">The My PR Partner team</strong>`)}`,
        footerReason:
          "You're receiving this because you joined a program waitlist at myprpartner.com. We'll never sell your email or pass it on.",
      }),
    };
  }

  // newsletter
  return {
    subject: "You're on the list",
    html: clientShell({
      preheader:
        "New articles, program launches and practical templates. Fortnightly at most.",
      heading: `Welcome aboard${greetName}.`,
      bodyHtml: `
        ${paragraph(
          "You're on the My PR Partner list. Here's what that actually means, because we hate inbox clutter as much as you do."
        )}
        ${calloutBox("What you'll get", [
          "New articles with practical PR, reputation and crisis advice.",
          "Program launches and early-access offers.",
          "Templates and resources you can put to work the same day.",
          "Fortnightly at most. Unsubscribe in one click, any time.",
        ])}
        ${paragraph(
          `<strong style="color:${TEXT_DARK};">Got a question you want answered?</strong> Reply to this email. A person reads every reply, and we aim to come back to you within 24 hours on Australian business days.`
        )}
        ${paragraph(
          `In the meantime, grab our free resources: <a href="${SITE_URL}/resources/pr-guide" style="color:${TEAL};text-decoration:none;font-weight:600;">Becoming a Trusted Public Voice</a> and the <a href="${SITE_URL}/resources/crisis-checklist" style="color:${TEAL};text-decoration:none;font-weight:600;">Crisis Vulnerability Checklist</a>.`
        )}
        ${paragraph(`Talk soon,<br /><strong style="color:${TEXT_DARK};">The My PR Partner team</strong>`)}`,
      footerReason:
        "You're receiving this because you subscribed at myprpartner.com. We'll never sell your email or pass it on.",
    }),
  };
}

// ── 2. Admin notification ────────────────────────────────────────────────────

const FORM_TYPE_LABELS: Record<FormType, string> = {
  contact: "Contact enquiry",
  resource: "Resource download",
  newsletter: "Newsletter signup",
  waitlist: "Waitlist signup",
};

export function adminNotificationEmail(sub: FormSubmission): {
  subject: string;
  html: string;
} {
  const typeLabel = FORM_TYPE_LABELS[sub.formType];
  const who = sub.name ? `${sub.name} <${sub.email}>` : sub.email;

  const subject =
    sub.formType === "contact"
      ? `[myprpartner.com] Contact enquiry from ${sub.name || sub.email}${sub.topic ? ` · ${sub.topic}` : ""}`
      : sub.formType === "resource"
        ? `[myprpartner.com] ${sub.resourceLabel || "Resource"} download · ${who}`
        : sub.formType === "waitlist"
          ? `[myprpartner.com] Waitlist signup · ${sub.name || sub.email}${sub.topic ? ` · ${sub.topic}` : ""}`
          : `[myprpartner.com] Newsletter signup · ${sub.email}`;

  const rows: Array<[string, string | undefined]> = [
    ["Type", typeLabel],
    ["Name", sub.name],
    ["Email", sub.email],
    ["Organisation", sub.organisation],
    ["Topic", sub.topic],
    ["Resource", sub.resourceLabel],
    ["Source", sub.source],
    [
      "Received",
      new Date().toLocaleString("en-AU", {
        timeZone: "Australia/Brisbane",
        dateStyle: "full",
        timeStyle: "short",
      }) + " (AEST)",
    ],
  ];

  const fieldRows = rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 16px;border-bottom:1px solid ${BORDER};font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${TEXT_MEDIUM};white-space:nowrap;vertical-align:top;">${k}</td>
        <td style="padding:10px 16px;border-bottom:1px solid ${BORDER};font-family:${FONT};font-size:14px;color:${TEXT_DARK};">${escapeHtml(v!)}</td>
      </tr>`
    )
    .join("");

  const messageBlock = sub.message
    ? `
    <p style="margin:24px 0 8px 0;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${TEXT_MEDIUM};">Message</p>
    <div style="background-color:${BG_GREY};border:1px solid ${BORDER};border-radius:12px;padding:18px 20px;font-family:${FONT};font-size:14px;line-height:1.65;color:${TEXT_DARK};white-space:pre-wrap;">${escapeHtml(sub.message)}</div>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background-color:${BG_GREY};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BG_GREY};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${BORDER};">
          ${accentBar}
          <tr>
            <td style="padding:28px 32px;">
              <p style="margin:0 0 4px 0;font-family:${FONT};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${TEAL};font-weight:700;">New website submission</p>
              <h1 style="margin:0 0 20px 0;font-family:${FONT};font-size:21px;font-weight:700;color:${TEXT_DARK};">${typeLabel}</h1>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BORDER};border-radius:12px;border-collapse:separate;overflow:hidden;">
                ${fieldRows}
              </table>
              ${messageBlock}
              <p style="margin:24px 0 0 0;font-family:${FONT};font-size:13px;line-height:1.6;color:${TEXT_MEDIUM};">
                Reply to this email to respond directly to ${escapeHtml(sub.name || sub.email)}.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;background-color:${BG_GREY};border-top:1px solid ${BORDER};">
              <p style="margin:0;font-family:${FONT};font-size:11px;color:${TEXT_MEDIUM};">Sent automatically by myprpartner.com via Resend.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}
