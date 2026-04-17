"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export function FooterNewsletter() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");

    // NOTE: No backend wired up yet. When ready, POST {email, source: "footer"}
    // to a Kajabi form / Formspree / Resend endpoint here.
    await new Promise((r) => setTimeout(r, 400));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="flex items-start gap-4 rounded-card border border-[#D5E3DA] bg-[#F1F9F4] p-5 md:p-6">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white"
          style={{ background: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)" }}
        >
          <CheckCircle2 className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <p className="font-heading text-[16px] font-bold text-text-dark">
            You&apos;re on the list.
          </p>
          <p className="mt-1 text-[14px] leading-relaxed text-text-medium">
            We&apos;ll email you when new articles and programs go live. No
            spam, unsubscribe any time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
    >
      <label className="block flex-1">
        <span className="sr-only">Work email</span>
        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-medium/60"
            aria-hidden
          />
          <input
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-full border border-[#E5E7EB] bg-white px-11 py-3 text-[14.5px] text-text-dark placeholder:text-text-medium/70 shadow-sm transition-shadow focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </div>
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-[14.5px] font-semibold text-white shadow-sm transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Subscribe"}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
