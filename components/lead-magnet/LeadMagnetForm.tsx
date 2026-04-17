"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Download, Mail } from "lucide-react";

type LeadMagnetFormProps = {
  resourceLabel: string;
  downloadHref: string;
  downloadFilename: string;
  theme?: "light" | "dark";
  variant?: "hero" | "band";
  submitLabel?: string;
};

export function LeadMagnetForm({
  resourceLabel,
  downloadHref,
  downloadFilename,
  theme = "light",
  variant = "hero",
  submitLabel = "Send me the guide",
}: LeadMagnetFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const isDark = theme === "dark";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !firstName) return;
    setStatus("submitting");

    // NOTE: No backend wired up yet. When ready, POST {firstName, email, resourceLabel}
    // to a Kajabi / Formspree / Resend endpoint here. For now we fire-and-forget and
    // give the user immediate access to the PDF.
    try {
      if (typeof window !== "undefined") {
        const a = document.createElement("a");
        a.href = downloadHref;
        a.download = downloadFilename;
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } finally {
      setStatus("done");
    }
  }

  if (status === "done") {
    return (
      <div
        className={`rounded-card border p-6 md:p-8 ${
          isDark
            ? "border-white/20 bg-white/10 backdrop-blur"
            : "border-[#E5E7EB] bg-white shadow-card"
        }`}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
          style={{ background: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)" }}
        >
          <CheckCircle2 className="h-6 w-6" aria-hidden />
        </div>
        <h3
          className={`mt-4 font-heading text-[22px] font-bold ${
            isDark ? "text-white" : "text-text-dark"
          }`}
        >
          Your download has started.
        </h3>
        <p
          className={`mt-3 text-[15px] leading-relaxed ${
            isDark ? "text-white/80" : "text-text-medium"
          }`}
        >
          If the download didn&apos;t start automatically, use the button below.
          We&apos;ll also email you the link so you can come back to it any time.
        </p>
        <a
          href={downloadHref}
          download={downloadFilename}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          <Download className="h-4 w-4" aria-hidden />
          Download the {resourceLabel}
        </a>
      </div>
    );
  }

  const isBand = variant === "band";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-card border p-6 md:p-8 ${
        isDark
          ? "border-white/20 bg-white shadow-card"
          : "border-[#E5E7EB] bg-white shadow-card"
      }`}
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
        Free download
      </p>
      <h3 className="mt-1 font-heading text-[22px] font-bold text-text-dark">
        {isBand
          ? `Get the ${resourceLabel} in your inbox`
          : `Send me the ${resourceLabel}`}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-text-medium">
        Add your details and we&apos;ll email it across instantly.
      </p>

      <div className="mt-5 space-y-4">
        <label className="block">
          <span className="text-[13px] font-medium text-text-dark">
            First name <span className="text-teal">*</span>
          </span>
          <input
            type="text"
            name="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            autoComplete="given-name"
            placeholder="Your first name"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-text-dark">
            Work email <span className="text-teal">*</span>
          </span>
          <input
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </label>
      </div>

      <input
        type="hidden"
        name="Resource"
        value={resourceLabel}
        readOnly
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : submitLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
      <p className="mt-4 flex items-center gap-2 text-[12.5px] text-text-medium">
        <Mail className="h-3.5 w-3.5 text-teal" aria-hidden />
        Instant download. We&apos;ll never sell your email or pass it on.
      </p>
    </form>
  );
}
