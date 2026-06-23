// Renders every email variant (visitor confirmation + page-aware admin
// notification) to static HTML so the copy and design can be reviewed without
// needing a Resend API key. Run with:  npx tsx scripts/preview-emails.ts
// Output: public/preview-output/index.html (served at /preview-output/ in
// production, but marked noindex via a meta tag here and an X-Robots-Tag
// header in next.config.mjs).
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import {
  adminNotificationEmail,
  clientConfirmationEmail,
  type FormSubmission,
} from "../lib/email";

type Sample = { label: string; sub: FormSubmission };

const samples: Sample[] = [
  {
    label: "Contact form (contact page)",
    sub: {
      formType: "contact",
      name: "Jane Doe",
      email: "jane@example.org",
      organisation: "Example Association",
      topic: "Group or team enrolment",
      message:
        "We have a comms team of six and a board that gets nervous about media. Where should we start?",
      source: "contact-page",
      pageName: "Contact page",
      pagePath: "/contact",
    },
  },
  {
    label: "About confidential enquiry",
    sub: {
      formType: "contact",
      name: "Michael Tan",
      email: "michael@example.com",
      organisation: "Grace College",
      phone: "0400 123 456",
      topic: "Confidential enquiry",
      message:
        "A sensitive staffing matter is likely to attract media attention next week. Can we talk today?",
      source: "about-page",
      pageName: "About page (confidential enquiry)",
      pagePath: "/about",
    },
  },
  {
    label: "Courses register interest",
    sub: {
      formType: "contact",
      name: "Priya Nair",
      email: "priya@example.com",
      organisation: "Northbridge Group",
      topic: "Upcoming courses interest",
      message:
        "Courses of interest: LinkedIn for Leaders, Media Training.\n\nNotes: Team of 12, keen for early 2026.",
      source: "courses-hub",
      pageName: "Courses (register interest)",
      pagePath: "/courses",
    },
  },
  {
    label: "Lead magnet - PR guide (hero)",
    sub: {
      formType: "resource",
      name: "Sam",
      email: "sam@example.com",
      resourceLabel: "Becoming a Trusted Public Voice guide",
      downloadHref: "/downloads/pr-guide.pdf",
      source: "lead-magnet-hero",
      pageName: "Becoming a Trusted Public Voice guide download",
      pagePath: "/resources/pr-guide",
    },
  },
  {
    label: "Lead magnet - Crisis checklist (band)",
    sub: {
      formType: "resource",
      name: "Alex",
      email: "alex@example.com",
      resourceLabel: "Crisis Vulnerability Checklist",
      downloadHref: "/downloads/crisis-checklist.pdf",
      source: "lead-magnet-band",
      pageName: "Crisis Vulnerability Checklist download",
      pagePath: "/resources/crisis-checklist",
    },
  },
  {
    label: "Homepage guide offer (email only)",
    sub: {
      formType: "resource",
      email: "lead@example.com",
      resourceLabel: "Becoming a Trusted Public Voice guide",
      downloadHref: "/downloads/pr-guide.pdf",
      source: "homepage",
      pageName: "Homepage guide offer",
      pagePath: "/",
    },
  },
  {
    label: "Newsletter (footer)",
    sub: {
      formType: "newsletter",
      email: "subscriber@example.com",
      source: "footer",
      pageName: "Footer newsletter",
      pagePath: "/programs/schools",
    },
  },
  {
    label: "Newsletter (articles)",
    sub: {
      formType: "newsletter",
      email: "reader@example.com",
      source: "articles",
      pageName: "Articles newsletter",
      pagePath: "/articles",
    },
  },
  {
    label: "Waitlist - Business",
    sub: {
      formType: "waitlist",
      name: "Dana Lee",
      email: "dana@example.com",
      organisation: "Lee & Co",
      message: "Team of four, launching a new brand in March.",
      topic: "Business Program waitlist",
      source: "business-waitlist",
      pageName: "Business Program (waitlist)",
      pagePath: "/programs/business",
    },
  },
  {
    label: "Waitlist - Associations",
    sub: {
      formType: "waitlist",
      name: "Robert Cole",
      email: "robert@example.org",
      organisation: "National Trades Association",
      topic: "Industry Associations Program waitlist",
      source: "associations-waitlist",
      pageName: "Industry Associations Program (waitlist)",
      pagePath: "/programs/industry-associations",
    },
  },
  {
    label: "Waitlist - Charity",
    sub: {
      formType: "waitlist",
      name: "Helen Ward",
      email: "helen@example.org",
      organisation: "Hope Foundation",
      topic: "Charity Program waitlist",
      source: "charity-waitlist",
      pageName: "Charity Program (waitlist)",
      pagePath: "/programs/charity",
    },
  },
];

const outDir = join(process.cwd(), "public", "preview-output");
mkdirSync(outDir, { recursive: true });

// Keep these review pages out of search indexes. Injected into every rendered
// email (the live emails themselves are untouched).
const NOINDEX_META = `<meta name="robots" content="noindex, nofollow" />`;
function withNoindex(html: string): string {
  return html.replace("<head>", `<head>\n  ${NOINDEX_META}`);
}

const indexRows: string[] = [];

samples.forEach((s, i) => {
  const n = String(i + 1).padStart(2, "0");
  const client = clientConfirmationEmail(s.sub);
  const admin = adminNotificationEmail(s.sub);

  const clientFile = `${n}-${s.sub.formType}-client.html`;
  const adminFile = `${n}-${s.sub.formType}-admin.html`;

  writeFileSync(join(outDir, clientFile), withNoindex(client.html), "utf8");
  writeFileSync(join(outDir, adminFile), withNoindex(admin.html), "utf8");

  indexRows.push(`
    <tr>
      <td style="padding:10px 14px;border-bottom:1px solid #E5E7EB;">${n}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #E5E7EB;"><strong>${s.label}</strong></td>
      <td style="padding:10px 14px;border-bottom:1px solid #E5E7EB;font-size:13px;color:#4A4A68;">${s.sub.pagePath}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #E5E7EB;">
        <div><a href="./${clientFile}">Visitor confirmation</a></div>
        <div style="margin-top:4px;color:#4A4A68;font-size:13px;">Subject: ${client.subject}</div>
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #E5E7EB;">
        <div><a href="./${adminFile}">Admin notification</a></div>
        <div style="margin-top:4px;color:#4A4A68;font-size:13px;">Subject: ${admin.subject}</div>
      </td>
    </tr>`);
});

const index = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8" /><meta name="robots" content="noindex, nofollow" /><title>My PR Partner - email previews</title></head>
<body style="font-family:-apple-system,Segoe UI,Arial,sans-serif;max-width:1000px;margin:40px auto;padding:0 16px;color:#1A1A2E;">
  <h1>My PR Partner - email previews</h1>
  <p style="color:#4A4A68;">Every form variant rendered exactly as the live system would build it. Two emails go out per submission: a visitor confirmation and a page-aware admin notification (to info@myprpartner.com and alex@3pdigital.com.au).</p>
  <table style="border-collapse:collapse;width:100%;font-size:14px;border:1px solid #E5E7EB;border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:#F7F8FA;text-align:left;">
        <th style="padding:10px 14px;border-bottom:1px solid #E5E7EB;">#</th>
        <th style="padding:10px 14px;border-bottom:1px solid #E5E7EB;">Form</th>
        <th style="padding:10px 14px;border-bottom:1px solid #E5E7EB;">Page</th>
        <th style="padding:10px 14px;border-bottom:1px solid #E5E7EB;">Visitor email</th>
        <th style="padding:10px 14px;border-bottom:1px solid #E5E7EB;">Admin email</th>
      </tr>
    </thead>
    <tbody>${indexRows.join("")}</tbody>
  </table>
</body></html>`;

writeFileSync(join(outDir, "index.html"), index, "utf8");

console.log(`Wrote ${samples.length * 2 + 1} files to ${outDir}`);
console.log(`Open: ${join(outDir, "index.html")}`);
