import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Shield,
  Briefcase,
  Mic,
  Star,
  User,
  Newspaper,
  Check,
  ArrowUpRight,
  Compass,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { CoursesInterestForm } from "@/components/courses/CoursesInterestForm";

export const metadata: Metadata = {
  title: "Upcoming Courses - My PR Partner",
  description:
    "Standalone courses on LinkedIn strategy, media training, personal branding, customer experience and more - launching 2026. Register your interest to be first to enrol, with a founding-member discount.",
  alternates: { canonical: "https://myprpartner.com/courses" },
  openGraph: {
    title: "Upcoming Courses - My PR Partner",
    description:
      "Short, focused courses launching soon - delivered by senior practitioners. Register your interest and be first to enrol.",
    url: "https://myprpartner.com/courses",
    type: "website",
    images: ["/images/crisis-masterclass/hero-bg-crisis.jpg"],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming Courses - My PR Partner",
    description:
      "Short, focused courses launching soon - LinkedIn, media training, personal branding, and more. Register your interest today.",
    images: ["/images/crisis-masterclass/hero-bg-crisis.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

type UpcomingCourse = {
  slug: string;
  title: string;
  category: string;
  icon: LucideIcon;
  accent: string;
  oneLiner: string;
  body: string;
  trainerName: string;
  trainerRole: string;
  status: string;
};

const upcomingCourses: UpcomingCourse[] = [
  {
    slug: "linkedin-sales-mastery",
    title: "LinkedIn Sales Mastery",
    category: "Growth & profile",
    icon: Briefcase,
    accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
    oneLiner: "Turn your LinkedIn profile into a sales asset that works around the clock.",
    body: "A focused, practical course covering profile strategy, content rhythm, lead generation and outreach - built for founders, leaders and sales teams who want LinkedIn to earn its keep.",
    trainerName: "Julie Mason",
    trainerRole: "LinkedIn Sales Strategist",
    status: "Launching 2026",
  },
  {
    slug: "media-training-intensive",
    title: "Media Training Intensive",
    category: "Reputation",
    icon: Mic,
    accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
    oneLiner: "Walk into an interview with a clear message, a calm voice and a plan for the hard question.",
    body: "Core message design, bridging, the killer question, body language on camera and what to do when the reporter has already made up their mind - built for spokespeople, executives and communications leads.",
    trainerName: "Lyall Mercer",
    trainerRole: "Co-founder, My PR Partner · Lead Strategist, CRC Public Relations",
    status: "Launching 2026",
  },
  {
    slug: "personal-branding-for-leaders",
    title: "Personal Branding for Leaders",
    category: "Profile & reputation",
    icon: User,
    accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
    oneLiner: "Build a personal brand that opens doors - without becoming an influencer.",
    body: "Positioning, narrative, public presence and LinkedIn strategy for executives, founders and specialists who want to be known for the right things in their industry.",
    trainerName: "Petra Zink",
    trainerRole: "Founder · impaCCCt",
    status: "Launching 2026",
  },
  {
    slug: "customer-experience-and-reviews",
    title: "5-Star Customer Experience",
    category: "Growth",
    icon: Star,
    accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
    oneLiner: "Turn happy clients into a steady stream of 5-star reviews and referrals.",
    body: "Client experience design, review-generation systems, handling negative feedback, and turning testimonials into a sales engine - from a business that has earned a 5-star rating on 1,300+ Google reviews.",
    trainerName: "Karl Schwantes",
    trainerRole: "Founder - Reputable Academy",
    status: "Launching 2026",
  },
];

const waitlistBenefits = [
  "First access to enrol before public release",
  "Founding-member pricing - 10% off your first course",
  "Monthly updates on new course drops only - no marketing noise",
  "Cancel any time, no subscription required",
];

const programFunnelCards = [
  {
    href: "/crisis-masterclass",
    icon: Shield,
    eyebrow: "Available now",
    title: "Crisis Masterclass",
    body: "Don't want to wait? Australia's premier crisis communications program is live today - built in partnership with the Crisis Ready Institute.",
    cta: "See the masterclass",
    accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
  },
  {
    href: "/programs",
    icon: Compass,
    eyebrow: "Sector programs",
    title: "All programs by sector",
    body: "Full-year programs for Schools, Industry Associations, Business and Charity - each built for a specific sector and leadership team.",
    cta: "Browse programs",
    accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
  },
  {
    href: "/articles",
    icon: Newspaper,
    eyebrow: "Free reading",
    title: "Articles & insights",
    body: "Practical PR tips and senior-adviser commentary - start building capability today while you wait for the courses to launch.",
    cta: "Read the articles",
    accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function CoursesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://myprpartner.com/" },
          { name: "Courses", url: "https://myprpartner.com/courses" },
        ]}
      />
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src="/images/crisis-masterclass/hero-bg-crisis.jpg"
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
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[820px] text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Launching 2026
              </div>
              <h1 className="font-heading text-[34px] font-bold leading-[1.08] text-white sm:text-[44px] md:text-[52px]">
                Short, focused courses -{" "}
                <span className="text-teal-light">
                  coming to My PR Partner soon
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-[660px] text-[16px] leading-relaxed text-white/85 md:text-[18px]">
                Standalone courses on social media, LinkedIn strategy,
                media training, personal branding, content strategy and
                more - each delivered by a senior practitioner, built for
                a specific outcome, and available on its own (no annual
                subscription required).
              </p>
              <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-relaxed text-white/75">
                Register your interest to be first to enrol when each course
                opens - with founding-member pricing locked in.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Link
                  href="#register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:bg-white/95"
                >
                  Register your interest
                  <ArrowDown className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="#courses"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  See the pipeline
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── UPCOMING COURSES GRID ── */}
        <section id="courses" className="scroll-mt-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                The pipeline
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                Four courses in development - with more to follow
              </h2>
              <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                Each course is short, focused, self-paced, and delivered by a
                specialist practitioner whose day job is the subject
                they&apos;re teaching.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
              {upcomingCourses.map((c) => {
                const Icon = c.icon;
                return (
                  <article
                    key={c.slug}
                    className="flex h-full flex-col rounded-card border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow hover:shadow-card md:p-7"
                  >
                    <header className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-inner"
                        style={{ background: c.accent }}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F8FA] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-teal"
                      >
                        <Sparkles className="h-3 w-3" aria-hidden />
                        {c.status}
                      </span>
                    </header>
                    <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                      {c.category}
                    </p>
                    <h3 className="mt-1 font-heading text-[20px] font-bold leading-snug text-text-dark">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[15px] font-medium leading-relaxed text-text-dark">
                      {c.oneLiner}
                    </p>
                    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-text-medium">
                      {c.body}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-[#F1F2F5] pt-4 text-[13px]">
                      <div>
                        <p className="font-semibold text-text-dark">
                          {c.trainerName}
                        </p>
                        <p className="text-text-medium">{c.trainerRole}</p>
                      </div>
                      <Link
                        href="#register"
                        className="inline-flex flex-shrink-0 items-center gap-1.5 font-semibold text-teal hover:text-teal-dark"
                      >
                        Register interest
                        <ArrowDown className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mt-8 text-center text-[14px] text-text-medium">
              Want to know who&apos;s behind the courses?{" "}
              <Link
                href="/about/expert-trainers"
                className="font-semibold text-teal underline hover:text-teal-dark"
              >
                Meet the full panel of expert trainers
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── REGISTER INTEREST (waitlist form) ── */}
        <section
          id="register"
          className="relative scroll-mt-28 overflow-hidden bg-text-dark"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/associations/associations-final-cta-bg.jpg"
              alt=""
              fill
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
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Register your interest
                </p>
                <h2 className="mt-5 font-heading text-[28px] font-bold leading-tight text-white md:text-[38px]">
                  Be first to enrol - and save 10% as a founding member
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                  Add your name and we&apos;ll email you when a course
                  you&apos;ve flagged opens for enrolment, plus the occasional
                  update. No subscription required - just first access to the
                  courses you actually want.
                </p>
                <ul className="mt-7 space-y-2.5">
                  {waitlistBenefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-white/90"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white text-teal-dark"
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <CoursesInterestForm
                  courses={upcomingCourses.map((c) => ({
                    slug: c.slug,
                    title: c.title,
                    trainerName: c.trainerName,
                  }))}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── DON'T WAIT - START NOW FUNNEL ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                Don&apos;t want to wait?
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                You don&apos;t have to wait for the course library to start
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                The full sector programs and the Crisis Masterclass are
                already live - senior-led training your team can enrol
                in today.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {programFunnelCards.map((card) => {
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
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FINAL CROSS-LINK ROW ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
            <div className="mx-auto max-w-[760px] rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-8 text-center md:p-12">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                Have a specific need?
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[34px]">
                Want a course we haven&apos;t announced yet?
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                If your team has a specific training need that isn&apos;t on
                the pipeline above, tell us. Every enquiry is reviewed - and
                genuinely shapes what we build next.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-teal-dark"
                >
                  Contact the team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/articles"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-8 py-4 text-[16px] font-semibold text-text-dark transition-colors hover:border-teal hover:text-teal"
                >
                  <Newspaper className="h-4 w-4" aria-hidden />
                  Read the articles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
