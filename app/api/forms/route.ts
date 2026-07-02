import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  adminNotificationEmail,
  clientConfirmationEmail,
  type FormSubmission,
  type FormType,
} from "@/lib/email";

// All website forms (contact, resource downloads, newsletter signups) POST
// here. Each valid submission sends two emails via Resend:
//   1. a branded confirmation to the submitter
//   2. an internal notification to the team
//
// Required env: RESEND_API_KEY
// Optional env: RESEND_FROM (verified-domain sender), ADMIN_NOTIFICATION_EMAILS

const ADMIN_RECIPIENTS = (
  process.env.ADMIN_NOTIFICATION_EMAILS ||
  "info@myprpartner.com"
)
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

// BCC'd on every admin notification (kept off the visible To line).
const ADMIN_BCC = (
  process.env.ADMIN_NOTIFICATION_BCC ||
  "alex@3pdigital.com.au"
)
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

// Until myprpartner.com is verified in Resend, fall back to Resend's shared
// onboarding sender (which can only deliver to the Resend account owner).
const FROM = process.env.RESEND_FROM || "My PR Partner <onboarding@resend.dev>";

const VALID_TYPES: FormType[] = ["contact", "resource", "newsletter", "waitlist", "invoice"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clip(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, max) : undefined;
}

// Reads the requested lead-magnet PDF from public/downloads and returns it as a
// Resend attachment. Locked to the /downloads/ folder so an arbitrary path can
// never be read off disk. Returns an empty array (and the email still sends
// with its download button) if anything is off.
async function buildResourceAttachments(
  sub: FormSubmission
): Promise<Array<{ filename: string; content: Buffer }>> {
  if (sub.formType !== "resource" || !sub.downloadHref) return [];

  const href = sub.downloadHref;
  if (
    !href.startsWith("/downloads/") ||
    !href.toLowerCase().endsWith(".pdf") ||
    href.includes("..")
  ) {
    return [];
  }

  const downloadsDir = path.join(process.cwd(), "public", "downloads");
  const filePath = path.join(process.cwd(), "public", href);
  // Final guard: the resolved path must stay inside public/downloads.
  if (!filePath.startsWith(downloadsDir)) return [];

  try {
    const content = await readFile(filePath);
    const cleanName = (sub.downloadFilename || path.basename(href)).replace(
      /[^\w.\- ]/g,
      ""
    );
    const filename = cleanName.toLowerCase().endsWith(".pdf")
      ? cleanName
      : `${cleanName}.pdf`;
    return [{ filename, content }];
  } catch (err) {
    console.error("[api/forms] Could not attach resource PDF:", href, err);
    return [];
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: real users never see/fill this field. Pretend success for bots.
  if (clip(body.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const formType = body.formType as FormType;
  const email = clip(body.email, 200);

  if (!VALID_TYPES.includes(formType)) {
    return NextResponse.json({ ok: false, error: "Unknown form type" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required" }, { status: 400 });
  }

  // Organisation is compulsory on every form that collects it (contact,
  // invoice, waitlist) so we always know which company the enquiry is from.
  const ORG_REQUIRED_TYPES: FormType[] = ["contact", "invoice", "waitlist"];
  const organisation = clip(body.organisation, 200);
  if (ORG_REQUIRED_TYPES.includes(formType) && !organisation) {
    return NextResponse.json(
      { ok: false, error: "Organisation is required" },
      { status: 400 }
    );
  }

  const submission: FormSubmission = {
    formType,
    email,
    name: clip(body.name, 200),
    organisation,
    abn: clip(body.abn, 60),
    phone: clip(body.phone, 60),
    address1: clip(body.address1, 200),
    address2: clip(body.address2, 200),
    city: clip(body.city, 100),
    state: clip(body.state, 100),
    postcode: clip(body.postcode, 20),
    country: clip(body.country, 100),
    organisationSize: clip(body.organisationSize, 60),
    industry: clip(body.industry, 120),
    position: clip(body.position, 120),
    topic: clip(body.topic, 200),
    message: clip(body.message, 5000),
    resourceLabel: clip(body.resourceLabel, 200),
    downloadHref: clip(body.downloadHref, 300),
    downloadFilename: clip(body.downloadFilename, 200),
    source: clip(body.source, 100),
    pagePath: clip(body.pagePath, 300),
    pageName: clip(body.pageName, 120),
  };

  // Only allow site-relative download paths into the confirmation email.
  if (submission.downloadHref && !submission.downloadHref.startsWith("/")) {
    submission.downloadHref = undefined;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[api/forms] RESEND_API_KEY is not set - submission not emailed:", {
      formType,
      email,
      source: submission.source,
    });
    return NextResponse.json(
      { ok: false, error: "Email service is not configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const admin = adminNotificationEmail(submission);
  const confirmation = clientConfirmationEmail(submission);

  // For resource downloads, attach the PDF so it goes out with the
  // confirmation email (the email also carries a download button as a backup).
  const attachments = await buildResourceAttachments(submission);

  const [adminResult, clientResult] = await Promise.allSettled([
    resend.emails.send({
      from: FROM,
      to: ADMIN_RECIPIENTS,
      ...(ADMIN_BCC.length ? { bcc: ADMIN_BCC } : {}),
      replyTo: submission.name ? `${submission.name} <${email}>` : email,
      subject: admin.subject,
      html: admin.html,
    }),
    resend.emails.send({
      from: FROM,
      to: email,
      replyTo: "info@myprpartner.com",
      subject: confirmation.subject,
      html: confirmation.html,
      ...(attachments.length ? { attachments } : {}),
    }),
  ]);

  const failures: string[] = [];
  for (const [label, result] of [
    ["admin", adminResult],
    ["client", clientResult],
  ] as const) {
    if (result.status === "rejected") {
      failures.push(label);
      console.error(`[api/forms] ${label} email failed:`, result.reason);
    } else if (result.value.error) {
      failures.push(label);
      console.error(`[api/forms] ${label} email rejected:`, result.value.error);
    }
  }

  // The submission itself succeeded as long as the team was notified; a failed
  // confirmation email shouldn't surface as an error to the visitor.
  if (failures.includes("admin")) {
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please email info@myprpartner.com." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
