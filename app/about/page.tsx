import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Check,
  Mail,
  Globe2,
  Users,
  Award,
  Quote,
  Briefcase,
  MapPin,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Story - My PR Partner, Powered by CRC Public Relations",
  description:
    "My PR Partner is the training platform powered by CRC Public Relations - a boutique senior-adviser firm with 25+ years of crisis, reputation and corporate communications experience across Australia and the Pacific.",
  alternates: { canonical: "https://myprpartner.com/about" },
  openGraph: {
    title: "Our Story - My PR Partner, Powered by CRC Public Relations",
    description:
      "Meet the founders behind My PR Partner and the senior-led boutique firm that powers every program - CRC Public Relations.",
    url: "https://myprpartner.com/about",
    type: "website",
    images: ["/images/crisis-masterclass/hero-portrait-crisis.jpg"],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story - My PR Partner, Powered by CRC Public Relations",
    description:
      "Senior counsel, not account managers. The boutique firm behind My PR Partner, 25+ years advising at the highest levels.",
    images: ["/images/crisis-masterclass/hero-portrait-crisis.jpg"],
  },
};

// ──────────────────────────────────────────────────────────────────────────────
// Static content blocks
// ──────────────────────────────────────────────────────────────────────────────

const whyPillars = [
  {
    icon: Handshake,
    eyebrow: "Built from the boardroom",
    heading: "Not theory - tested judgement",
    body: "Every framework, case study and warning in our programs comes from real CRC Public Relations engagements with boards, executives and governments under genuine pressure. You get what actually works, not what a textbook says should work.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Senior-led end to end",
    heading: "No junior course creators",
    body: "You don't get an instructional designer's interpretation of a crisis framework. You get the senior advisers who sit in the room when the crisis is actually happening - teaching what they'd do, in their own words.",
  },
  {
    icon: MapPin,
    eyebrow: "Top-tier counsel, team-wide",
    heading: "Experience usually behind a retainer",
    body: "CRC Public Relations' clients pay top-tier rates for this level of counsel. My PR Partner puts the same experience into self-paced, team-ready programs you can roll out across every leader in your organisation.",
  },
];

const stats = [
  { figure: "25+", label: "Years of senior advisory behind every program" },
  { figure: "Global Reach", label: "Support Businesses Everywhere" },
  { figure: "100%", label: "CRC Public Relations client satisfaction rating" },
  { figure: "500+", label: "Professionals trained through our programs" },
];

type Leader = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  image?: string;
  initials: string;
  palette: "navy" | "teal" | "ocean" | "plum";
};

const leadershipTeam: Leader[] = [
  {
    slug: "lyall-mercer",
    name: "Lyall Mercer",
    role: "Co-founder & Principal Adviser",
    tagline:
      "Former journalist and Australasia's leading crisis communications adviser.",
    bio: [
      "Lyall Mercer began his career as a journalist before building one of Australasia's most respected crisis communications and reputation advisory practices. His media background shapes how he reads pressure, understands the story behind the story, and prepares leaders for scrutiny that can move faster than their internal decision-making.",
      "Over more than 25 years, he has advised companies, governments, associations, schools, and senior executives across Australia, the Pacific, and internationally. Clients engage Lyall when the matter requires senior judgement, calm counsel, and direct access to someone who has seen how high-stakes situations actually unfold.",
    ],
    image: "/images/instructors/lyall-mercer.png",
    initials: "LM",
    palette: "navy",
  },
  {
    slug: "barbara-gorogh",
    name: "Barbara Gorogh",
    role: "Co-founder, My PR Partner",
    tagline:
      "Senior communications strategist focused on training, practitioner development, and workshop delivery.",
    bio: [
      "Barbara Gorogh is the co-founder of My PR Partner, CRC Public Relations' training platform for communications practitioners and spokesperson development. Her work sits at the intersection of communications capability, practical training design, and the delivery of programs that help leaders perform more confidently under pressure.",
      "She brings deep experience in communications education, practitioner support, and the translation of crisis and media strategy into practical development programs. Barbara plays a central role in how CRC Public Relations turns senior advisory experience into structured training for organisations and professionals across Australia.",
    ],
    image: "/images/instructors/barbara-gorogh.png",
    initials: "BG",
    palette: "teal",
  },
];

const enquiryBenefits = [
  "Program guidance from experienced senior advisers, not a sales funnel",
  "Group, team and enterprise enrolment options across every program",
  "A direct line to CRC Public Relations if your matter warrants it",
];

// Kept identical to the avatar system on /about/expert-trainers for visual
// consistency across the two about pages.
const paletteGradients: Record<Leader["palette"], string> = {
  navy: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
  teal: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
  ocean: "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
  plum: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
};

// ──────────────────────────────────────────────────────────────────────────────
// Small atoms
// ──────────────────────────────────────────────────────────────────────────────

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
      {children}
    </h2>
  );
}

function LeaderAvatar({ leader, size = 104 }: { leader: Leader; size?: number }) {
  if (leader.image) {
    return (
      <div
        className="relative flex-shrink-0 overflow-hidden rounded-2xl"
        style={{ width: size, height: size }}
      >
        <Image
          src={leader.image}
          alt={`${leader.name}, ${leader.role}`}
          fill
          sizes={`${size}px`}
          className="object-cover object-top"
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`${leader.name}, ${leader.role}`}
      className="flex flex-shrink-0 items-center justify-center rounded-2xl font-heading font-bold text-white shadow-inner"
      style={{
        width: size,
        height: size,
        background: paletteGradients[leader.palette],
        fontSize: Math.round(size * 0.34),
        letterSpacing: "0.02em",
      }}
    >
      {leader.initials}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
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
              className="object-cover opacity-35"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.92) 0%, rgba(7,175,187,0.78) 60%, rgba(30,115,190,0.82) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                  <Briefcase className="h-3.5 w-3.5" aria-hidden />
                  Our story
                </div>
                <h1 className="font-heading text-[34px] font-bold leading-[1.08] text-white sm:text-[44px] md:text-[54px]">
                  My PR Partner is powered by{" "}
                  <span className="text-teal-light">CRC Public Relations</span>
                </h1>
                <p className="mt-5 max-w-[640px] text-[16px] leading-relaxed text-white/85 md:text-[18px]">
                  My PR Partner is the online training platform built and
                  delivered by the senior advisers at CRC Public Relations
                  - the boutique Australian firm that has spent 25+ years
                  inside real boardrooms, real crises, and real high-stakes
                  decisions. We built My PR Partner because that experience
                  doesn&apos;t belong behind a consulting-firm paywall.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/programs"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:bg-white/95"
                  >
                    Explore programs
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href="/about/expert-trainers"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Users className="h-4 w-4" aria-hidden />
                    Meet our trainers
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-[12px] text-white/70">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/powered-by-crc-badge-light.svg"
                      alt="Powered by CRC Public Relations"
                      width={200}
                      height={26}
                      className="h-6 w-auto opacity-90"
                    />
                  </div>
                  <span aria-hidden className="text-white/30">|</span>
                  <span>Built from real engagements</span>
                  <span aria-hidden className="text-white/30">|</span>
                  <span>Not your average online course</span>
                </div>
              </div>
              <div className="hidden lg:col-span-5 lg:block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/images/crisis-masterclass/hero-portrait-crisis.jpg"
                    alt="Senior Australian communications adviser in a professional setting"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 p-4 backdrop-blur">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal">
                      Every program you enrol in
                    </p>
                    <p className="mt-1 font-heading text-[15px] font-bold text-text-dark">
                      Designed and delivered by senior CRC Public Relations
                      advisers who still do this work every day - for
                      real clients, under real pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CRC (3 PILLARS) ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <SectionEyebrow>What makes us different</SectionEyebrow>
              <SectionHeading>
                Online training designed by practitioners, not by marketers
              </SectionHeading>
              <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                Most online PR courses are built by content teams summarising
                what a textbook says. Every My PR Partner program is built
                from - and delivered with - the same senior-adviser
                experience CRC Public Relations uses to counsel boards and
                governments at the highest level.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {whyPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <article
                    key={p.heading}
                    className="rounded-card border border-[#E5E7EB] bg-white p-7 shadow-sm transition-shadow hover:shadow-card"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                      style={{ background: paletteGradients.teal }}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                      {p.eyebrow}
                    </p>
                    <h3 className="mt-1 font-heading text-[22px] font-bold text-text-dark">
                      {p.heading}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-text-medium">
                      {p.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── THE FIRM NARRATIVE ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <SectionEyebrow>Why this matters for your team</SectionEyebrow>
                <SectionHeading>
                  The training you buy is only as good as the experience
                  behind it
                </SectionHeading>
                <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                  <p>
                    CRC Public Relations - the firm that powers every
                    My PR Partner program - was founded on a simple
                    principle: that organisations facing their most
                    significant communications challenges deserve direct
                    access to experienced senior advisers, not account
                    managers or junior staff.
                  </p>
                  <p>
                    For 25+ years CRC Public Relations has honoured that
                    principle for a deliberately short list of clients. My PR
                    Partner carries the same principle into online training:
                    no recycled content, no off-the-shelf templates from
                    overseas course libraries - every module is shaped
                    by the same senior team that advises CRC Public
                    Relations&apos; clients through their most sensitive
                    moments.
                  </p>
                  <p>
                    Those clients include national and international
                    companies, Federal and State Government departments,
                    industry associations, independent schools, faith-based
                    organisations, health and aged care providers, and
                    Pacific governments and NGOs. When you enrol in a My PR
                    Partner program, you&apos;re tapping into the same
                    experience that shaped every one of those engagements.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-card">
                  <Image
                    src="/images/associations/associations-hero-bg.jpg"
                    alt="Senior communications advisers in a boardroom setting"
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(26,43,74,0) 40%, rgba(26,43,74,0.85) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-5 bottom-5 rounded-xl bg-white/95 p-5 backdrop-blur">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal">
                      Who we advise
                    </p>
                    <p className="mt-1 font-heading text-[15px] font-bold text-text-dark">
                      Companies, Federal and State Governments, associations,
                      schools, faith-based bodies, health &amp; aged care, and
                      Pacific organisations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAND ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center rounded-card border border-[#EEF0F3] bg-[#F7F8FA] p-6"
                >
                  <p className="font-heading text-[32px] font-bold leading-none text-text-dark md:text-[42px]">
                    {s.figure}
                  </p>
                  <p className="mt-2 text-[13px] text-text-medium md:text-[14px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR MISSION (QUOTE CALLOUT) ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[880px] rounded-card border border-[#E5E7EB] bg-white p-8 shadow-card md:p-12">
              <div
                className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                style={{ background: paletteGradients.teal }}
              >
                <Quote className="h-5 w-5" aria-hidden />
              </div>
              <SectionEyebrow>Our mission</SectionEyebrow>
              <p className="mt-4 font-heading text-[22px] font-medium leading-[1.35] text-text-dark md:text-[28px]">
                CRC Public Relations can only advise so many clients directly.
                My PR Partner is how 25+ years of senior-level judgement -
                real boardrooms, real crises, real decisions - becomes a
                program your team can enrol in today.
              </p>
              <p className="mt-6 text-[15.5px] leading-relaxed text-text-medium md:text-[16.5px]">
                So you&apos;re not learning from a course creator or a generic
                training library. You&apos;re learning from a boutique firm
                that was hired for the exact situations we teach - with the
                same senior advisers who take a genuine, long-term interest in
                the organisations they work with.
              </p>
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP TEAM ── */}
        <section id="leadership" className="scroll-mt-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <SectionEyebrow>Leadership team</SectionEyebrow>
              <SectionHeading>
                The people who shape the advice also shape the training
              </SectionHeading>
              <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                My PR Partner isn&apos;t run by course creators. It&apos;s
                run by the same senior CRC Public Relations advisers who lead
                client engagements at the highest level - and who
                shape, review and deliver every program you enrol in.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {leadershipTeam.map((leader) => (
                <article
                  key={leader.slug}
                  className="flex h-full flex-col rounded-card border border-[#E5E7EB] bg-white p-7 shadow-sm md:p-8"
                >
                  <header className="flex items-start gap-5">
                    <LeaderAvatar leader={leader} size={104} />
                    <div className="min-w-0 pt-1">
                      <h3 className="font-heading text-[22px] font-bold leading-tight text-text-dark md:text-[24px]">
                        {leader.name}
                      </h3>
                      <p className="mt-1 text-[13.5px] font-semibold text-teal">
                        {leader.role}
                      </p>
                    </div>
                  </header>
                  <p className="mt-5 text-[15.5px] font-medium leading-relaxed text-text-dark">
                    {leader.tagline}
                  </p>
                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-medium">
                    {leader.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center text-[14px] text-text-medium">
              Want to meet the 10+ expert trainers who deliver each program?{" "}
              <Link
                href="/about/expert-trainers"
                className="font-semibold text-teal underline hover:text-teal-dark"
              >
                See the full panel of presenters
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── CRC DIRECT ENQUIRY BAND ── */}
        <section
          id="enquiry"
          className="relative scroll-mt-28 overflow-hidden bg-text-dark"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/associations/associations-final-cta-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.95) 0%, rgba(30,115,190,0.88) 70%, rgba(7,175,187,0.82) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                  <Shield className="h-3.5 w-3.5" aria-hidden />
                  Enquiry
                </p>
                <h2 className="mt-5 font-heading text-[28px] font-bold leading-tight text-white md:text-[38px]">
                  Have a question about a program or your team?
                </h2>
                <p className="mt-5 max-w-[540px] text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                  Whether you&apos;re picking the right program for your
                  sector, planning a team or group enrolment, or navigating
                  something more sensitive, drop us a note. Every enquiry is
                  reviewed by a senior adviser - and escalated to
                  CRC Public Relations directly when the matter warrants it.
                </p>
                <ul className="mt-7 space-y-2.5">
                  {enquiryBenefits.map((b) => (
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

              <div className="lg:col-span-6">
                <form
                  action="mailto:info@myprpartner.com"
                  method="post"
                  encType="text/plain"
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
                        name="Full name"
                        required
                        placeholder="Your name"
                        className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-[13px] font-medium text-text-dark">
                        Organisation
                      </span>
                      <input
                        type="text"
                        name="Organisation"
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
                        name="Email"
                        required
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
                        name="Phone"
                        required
                        placeholder="Best number"
                        className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] text-text-dark placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-[13px] font-medium text-text-dark">
                        Brief context
                      </span>
                      <textarea
                        name="Brief context"
                        rows={4}
                        placeholder="Tell us what you're trying to solve - picking a program, a group or team enrolment, or a more sensitive matter we can escalate."
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
            </div>
          </div>
        </section>

        {/* ── FINAL CTA / PROGRAMS LINK ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
            <div className="mx-auto max-w-[760px] rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-8 text-center md:p-12">
              <SectionEyebrow>Learn from the firm</SectionEyebrow>
              <SectionHeading>
                Want CRC Public Relations&apos; senior advisory experience,
                in a program you can enrol in today?
              </SectionHeading>
              <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                My PR Partner is how CRC Public Relations opens up 25+ years of
                corporate, crisis and reputation experience to organisations
                that can&apos;t all engage the firm directly. Pick the program
                built for your sector.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-teal-dark"
                >
                  Explore programs
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/crisis-masterclass"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-8 py-4 text-[16px] font-semibold text-text-dark transition-colors hover:border-teal hover:text-teal"
                >
                  <Shield className="h-4 w-4" aria-hidden />
                  Crisis Masterclass
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-text-medium">
                <span className="inline-flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-teal" aria-hidden />
                  Powered by CRC Public Relations
                </span>
                <span aria-hidden className="text-text-medium/40">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe2 className="h-3.5 w-3.5 text-teal" aria-hidden />
                  Trusted across Australia and the Pacific
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
