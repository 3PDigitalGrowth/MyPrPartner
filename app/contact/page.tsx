import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageSquare,
  Shield,
  Users,
  Newspaper,
  FileText,
  ShieldCheck,
  Check,
  Compass,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - My PR Partner",
  description:
    "Have a question about a program, a group or team enrolment, or a more sensitive matter? Send the My PR Partner team a note - every enquiry is reviewed by a senior adviser.",
  alternates: { canonical: "https://myprpartner.com/contact" },
  openGraph: {
    title: "Contact Us - My PR Partner",
    description:
      "Send the My PR Partner team a note about a program, team enrolment, or a sensitive communications matter. Reviewed by a senior adviser - not a sales funnel.",
    url: "https://myprpartner.com/contact",
    type: "website",
    images: ["/images/crisis-masterclass/hero-portrait-crisis.jpg"],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - My PR Partner",
    description:
      "Reach out about a program, team enrolment, or a more sensitive matter. Reviewed by a senior adviser.",
    images: ["/images/crisis-masterclass/hero-portrait-crisis.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const topicOptions = [
  "Choosing the right program",
  "Group or team enrolment",
  "Enterprise or sector partnership",
  "Media, speaking or partnership enquiry",
  "Something more sensitive (for senior escalation)",
  "Other",
];

const trustBullets = [
  "Every enquiry is reviewed by a senior adviser - not a sales funnel",
  "Escalated to CRC Public Relations when the matter warrants it",
  "We aim to respond within one Australian business day",
];

type FunnelCard = {
  href: string;
  icon: typeof Shield;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  accent: string;
};

const funnelCards: FunnelCard[] = [
  {
    href: "/programs",
    icon: Compass,
    eyebrow: "Start here",
    title: "Not sure which program fits?",
    body: "Five programs, one sector-matched approach. Browse the program overview to find the one built for your team before you send a message.",
    cta: "Explore programs",
    accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
  },
  {
    href: "/crisis-masterclass",
    icon: Shield,
    eyebrow: "Most popular",
    title: "Crisis Masterclass",
    body: "Australia's premier crisis communications training - built with Melissa Agnes and delivered by senior CRC Public Relations advisers.",
    cta: "See the masterclass",
    accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
  },
  {
    href: "/articles",
    icon: Newspaper,
    eyebrow: "Read first, write later",
    title: "Articles & insights",
    body: "Before you send an enquiry, there's a good chance we've already written about it. Practical PR tips and senior-adviser commentary.",
    cta: "Read the articles",
    accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
  },
];

const resourceCards: FunnelCard[] = [
  {
    href: "/resources/pr-guide",
    icon: FileText,
    eyebrow: "Free resource",
    title: "5-Step PR Guide",
    body: "Learn the secrets PR professionals use to build and protect a brand. No cost, no catch.",
    cta: "Get the guide",
    accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
  },
  {
    href: "/resources/crisis-checklist",
    icon: ShieldCheck,
    eyebrow: "Free resource",
    title: "Crisis Readiness Checklist",
    body: "Evaluate your organisation's crisis preparedness in 10 minutes - the same lens CRC Public Relations applies to new clients.",
    cta: "Get the checklist",
    accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        {/* ── COMPACT HERO ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src="/images/associations/associations-final-cta-bg.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.92) 0%, rgba(7,175,187,0.78) 60%, rgba(30,115,190,0.82) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <MessageSquare className="h-3.5 w-3.5" aria-hidden />
                Contact us
              </div>
              <h1 className="font-heading text-[32px] font-bold leading-[1.1] text-white sm:text-[40px] md:text-[48px]">
                Let&apos;s talk about what you&apos;re trying to solve
              </h1>
              <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                Send the team a note. Whether you&apos;re picking the right
                program, planning a team enrolment, or navigating something
                more sensitive, we&apos;ll read it carefully and come back to
                you with a useful reply - not a sales pitch.
              </p>
            </div>
          </div>
        </section>

        {/* ── FORM + SIDEBAR ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Form */}
              <div className="lg:col-span-7">
                <form
                  action="mailto:info@myprpartner.com"
                  method="post"
                  encType="text/plain"
                  className="rounded-card border border-[#E5E7EB] bg-white p-6 shadow-card md:p-8"
                >
                  <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                    Send us a message
                  </p>
                  <h2 className="mt-1 font-heading text-[24px] font-bold text-text-dark md:text-[28px]">
                    Tell us what you need
                  </h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-medium">
                    Fill out the form and we&apos;ll be in touch. Required
                    fields are marked with an asterisk.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block sm:col-span-2">
                      <span className="text-[13px] font-medium text-text-dark">
                        Full name <span className="text-teal">*</span>
                      </span>
                      <input
                        type="text"
                        name="Full name"
                        required
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
                        name="Email"
                        required
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
                        name="Organisation"
                        placeholder="Your organisation"
                        className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-[13px] font-medium text-text-dark">
                        What&apos;s this about?{" "}
                        <span className="text-teal">*</span>
                      </span>
                      <select
                        name="Topic"
                        required
                        defaultValue=""
                        className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      >
                        <option value="" disabled>
                          Choose a topic
                        </option>
                        {topicOptions.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-[13px] font-medium text-text-dark">
                        Your message <span className="text-teal">*</span>
                      </span>
                      <textarea
                        name="Message"
                        rows={5}
                        required
                        placeholder="Tell us what you're trying to solve - the more context you share, the more useful our reply will be."
                        className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark sm:w-auto"
                  >
                    Send message
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                  <p className="mt-4 flex items-center gap-2 text-[12.5px] text-text-medium">
                    <Mail className="h-3.5 w-3.5 text-teal" aria-hidden />
                    Confidential and reviewed by a senior adviser.
                  </p>
                </form>
              </div>

              {/* Sidebar trust + why us */}
              <aside className="lg:col-span-5">
                <div className="rounded-card border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-7">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
                    }}
                  >
                    <ShieldCheck className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-heading text-[20px] font-bold text-text-dark">
                    What happens after you hit send
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {trustBullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[14.5px] leading-relaxed text-text-medium"
                      >
                        <span
                          aria-hidden
                          className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white"
                          style={{
                            background:
                              "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
                          }}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-card border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-7">
                  <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                    Before you write
                  </p>
                  <h3 className="mt-1 font-heading text-[20px] font-bold text-text-dark">
                    The answer might already be here
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-text-medium">
                    Most questions we get are answered faster by browsing a
                    program page or our articles library. Worth a 60-second
                    look before you wait on a reply.
                  </p>
                  <div className="mt-5 flex flex-col gap-2.5">
                    <Link
                      href="/programs"
                      className="inline-flex items-center justify-between gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] font-semibold text-text-dark transition-colors hover:border-teal hover:text-teal"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Compass className="h-4 w-4 text-teal" aria-hidden />
                        Browse all programs
                      </span>
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="/articles"
                      className="inline-flex items-center justify-between gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] font-semibold text-text-dark transition-colors hover:border-teal hover:text-teal"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Newspaper className="h-4 w-4 text-teal" aria-hidden />
                        Articles &amp; insights
                      </span>
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="/about/expert-trainers"
                      className="inline-flex items-center justify-between gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] font-semibold text-text-dark transition-colors hover:border-teal hover:text-teal"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Users className="h-4 w-4 text-teal" aria-hidden />
                        Meet the trainers
                      </span>
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── FUNNEL-BACK CARDS ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                While you&apos;re here
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                Keep exploring - most answers are one click away
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                If you&apos;d rather dig in yourself before you send a
                message, these are the places people usually head next.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {funnelCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group flex h-full flex-col rounded-card border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow hover:shadow-card md:p-7"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                      style={{ background: card.accent }}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-1 font-heading text-[20px] font-bold leading-snug text-text-dark">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-text-medium">
                      {card.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-teal transition-colors group-hover:text-teal-dark">
                      {card.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {resourceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group flex h-full flex-col rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-6 transition-shadow hover:shadow-card md:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white"
                        style={{ background: card.accent }}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                          {card.eyebrow}
                        </p>
                        <h3 className="mt-1 font-heading text-[18px] font-bold leading-snug text-text-dark">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-text-medium">
                          {card.body}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-semibold text-teal transition-colors group-hover:text-teal-dark">
                          {card.cta}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
