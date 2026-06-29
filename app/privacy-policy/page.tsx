import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy - My PR Partner",
  description:
    "How My PR Partner and CRC Public Relations collect, use, share and retain your information when you use our site, products and services.",
  alternates: { canonical: "https://myprpartner.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy - My PR Partner",
    description:
      "How My PR Partner and CRC Public Relations collect, use, share and retain your information.",
    url: "https://myprpartner.com/privacy-policy",
    siteName: "My PR Partner",
    type: "website",
    locale: "en_AU",
  },
  twitter: { card: "summary" },
};

export default function PrivacyPolicyPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "content/legal/privacy-policy.html"),
    "utf8"
  );
  return <LegalDoc title="Privacy Policy" html={html} />;
}
