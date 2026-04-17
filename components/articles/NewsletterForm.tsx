"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

type NewsletterFormProps = {
  theme?: "light" | "dark";
};

export function NewsletterForm({ theme = "dark" }: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [email, setEmail] = useState("");

  const isDark = theme === "dark";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");

    // NOTE: No backend wired up yet. When ready, POST {email, source: "articles"}
    // to a Kajabi form / Formspree / Resend endpoint here. For now we simulate a
    // successful subscription so the UX is complete.
    await new Promise((r) => setTimeout(r, 400));
    setStatus("done");
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
          You&apos;re on the list.
        </h3>
        <p
          className={`mt-3 text-[15px] leading-relaxed ${
            isDark ? "text-white/80" : "text-text-medium"
          }`}
        >
          We&apos;ll email you when new articles go live - never more than once
          a fortnight, and only with work you&apos;ll actually want to read.
        </p>
      </div>
    );
  }

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
        Articles newsletter
      </p>
      <h3 className="mt-1 font-heading text-[22px] font-bold text-text-dark">
        New articles in your inbox - nothing else.
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-text-medium">
        Add your email to get each new piece as it drops. No marketing drip, no
        promos, no re-targeting.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label className="block flex-1">
          <span className="sr-only">Work email</span>
          <input
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-[14.5px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </label>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Subscribe"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
      <p className="mt-4 flex items-center gap-2 text-[12.5px] text-text-medium">
        <Mail className="h-3.5 w-3.5 text-teal" aria-hidden />
        Fortnightly at most. Unsubscribe any time.
      </p>
    </form>
  );
}
