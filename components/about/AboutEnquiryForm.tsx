"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { currentPagePath } from "@/lib/page-context";

export function AboutEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          name,
          organisation,
          email,
          phone,
          message,
          topic: "Confidential enquiry",
          source: "about-page",
          pageName: "About page (confidential enquiry)",
          pagePath: currentPagePath(),
          website,
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-card border border-white/20 bg-white p-6 shadow-card md:p-8">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
          style={{ background: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)" }}
        >
          <CheckCircle2 className="h-6 w-6" aria-hidden />
        </div>
        <h3 className="mt-4 font-heading text-[22px] font-bold text-text-dark">
          Your message is with us.
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-text-medium">
          One of our experienced advisers will read it personally and reply
          within 24 hours on Australian business days. We&apos;ve also sent a
          confirmation to your inbox.
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-text-medium">
          If it&apos;s urgent, reply to that confirmation email with URGENT in
          the subject line.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-white/20 bg-white p-6 shadow-card md:p-8"
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
        Confidential enquiry
      </p>
      <h3 className="mt-1 font-heading text-[22px] font-bold text-text-dark">
        Send a secure message to My PR Partner
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-[13px] font-medium text-text-dark">
            Full name <span className="text-teal">*</span>
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            placeholder="Your name"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[13px] font-medium text-text-dark">
            Organisation <span className="text-teal">*</span>
          </span>
          <input
            type="text"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            required
            autoComplete="organization"
            placeholder="Organisation"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-text-dark">
            Email <span className="text-teal">*</span>
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-text-dark">
            Phone <span className="text-teal">*</span>
          </span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            autoComplete="tel"
            placeholder="Best number"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[13px] font-medium text-text-dark">
            Brief context
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Tell us what you're trying to solve - picking a program, a group or team enrolment, or a more sensitive matter we can escalate."
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </label>
      </div>

      {/* Honeypot - hidden from real users, catches naive bots */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {status === "error" ? (
        <p className="mt-4 rounded-lg border border-[#F0C9C9] bg-[#FDF3F3] px-4 py-3 text-[13.5px] leading-relaxed text-[#9B3535]">
          Something went wrong sending your message. Please try again, or email
          us directly at{" "}
          <a href="mailto:info@myprpartner.com" className="font-semibold underline">
            info@myprpartner.com
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
      <p className="mt-4 flex items-center gap-2 text-[12.5px] text-text-medium">
        <Mail className="h-3.5 w-3.5 text-teal" aria-hidden />
        Confidential and read personally by our team.
      </p>
    </form>
  );
}
