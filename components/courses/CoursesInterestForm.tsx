"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { currentPagePath } from "@/lib/page-context";

type CourseOption = {
  slug: string;
  title: string;
  trainerName: string;
};

export function CoursesInterestForm({ courses }: { courses: CourseOption[] }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  function toggleCourse(title: string) {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const interestLine = selected.length
      ? `Courses of interest: ${selected.join(", ")}.`
      : "No specific course flagged yet.";
    const message = notes.trim() ? `${interestLine}\n\nNotes: ${notes.trim()}` : interestLine;

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          name,
          email,
          organisation,
          message,
          topic: "Upcoming courses interest",
          source: "courses-hub",
          pageName: "Courses (register interest)",
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
          You&apos;re on the list.
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-text-medium">
          Thanks {name.split(" ")[0] || "there"}. We&apos;ve noted your interest
          and emailed you a confirmation. We&apos;ll be in touch the moment the
          courses you flagged open for enrolment, with your founding-member
          discount locked in.
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
        Courses waitlist
      </p>
      <h3 className="mt-1 font-heading text-[22px] font-bold text-text-dark">
        Tell us which courses you want first
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
            Organisation
          </span>
          <input
            type="text"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            autoComplete="organization"
            placeholder="Your organisation"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-[13px] font-medium text-text-dark">
          Which courses interest you most?{" "}
          <span className="font-normal text-text-medium">(tick any that apply)</span>
        </legend>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {courses.map((c) => (
            <label
              key={c.slug}
              className="flex items-start gap-2.5 rounded-lg border border-[#E5E7EB] bg-[#F7F8FA] px-3 py-2.5 text-[13.5px] leading-snug text-text-dark transition-colors hover:border-teal hover:bg-white"
            >
              <input
                type="checkbox"
                checked={selected.includes(c.title)}
                onChange={() => toggleCourse(c.title)}
                className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-[#E5E7EB] text-teal focus:ring-teal"
              />
              <span>
                <span className="font-semibold">{c.title}</span>
                <span className="block text-[12px] text-text-medium">
                  with {c.trainerName}
                </span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block">
        <span className="text-[13px] font-medium text-text-dark">
          Anything else we should know?
        </span>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Optional - tell us about your team, your goals, or a specific topic you'd love to see."
          className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
        />
      </label>

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
          Something went wrong. Please try again, or email us directly at{" "}
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
        {status === "submitting" ? "Sending..." : "Register my interest"}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
      <p className="mt-4 flex items-center gap-2 text-[12.5px] text-text-medium">
        <Mail className="h-3.5 w-3.5 text-teal" aria-hidden />
        We&apos;ll only email you when a course you flagged opens for enrolment.
      </p>
    </form>
  );
}
