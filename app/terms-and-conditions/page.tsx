import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Terms and Conditions - My PR Partner",
  description:
    "The terms and conditions covering subscriptions, automatic renewal, event registration, products and services from My PR Partner and CRC Public Relations.",
  alternates: { canonical: "https://myprpartner.com/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "content/legal/terms-and-conditions.html"),
    "utf8"
  );
  return <LegalDoc title="Terms and Conditions" html={html} />;
}
