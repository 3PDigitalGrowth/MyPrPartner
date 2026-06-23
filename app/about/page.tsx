import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Check,
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
import { AboutEnquiryForm } from "@/components/about/AboutEnquiryForm";

export const metadata: Metadata = {
  title: "Our Story - My PR Partner, Powered by CRC Public Relations",
  description:
    "My PR Partner is the training platform powered by CRC Public Relations - a boutique senior-adviser firm with 15+ years of crisis, reputation and corporate communications experience across Australia and the Pacific.",
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
      "Senior counsel, not account managers. The boutique firm behind My PR Partner, 15+ years advising at the highest levels.",
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
    body: "The teaching, advice, and framework in our programs come from real CRC Public Relations engagements with boards, executives, associations, schools and governments under genuine pressure. You get what actually works, not what a textbook says should work.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Senior-led end to end",
    heading: "Experienced course creators",
    body: "Every program and course has been developed through the experience of positioning companies and organisations as public voices of authority, leading through issues, consulting to leaders and being on the front line of public relations and crisis communications.",
  },
  {
    icon: MapPin,
    eyebrow: "Value that makes a difference",
    heading: "Rarely accessible, affordable training",
    body: "Public Relations agency clients pay top-tier rates for this level of counsel. My PR Partner puts the same experience into self-paced, team-ready programs you can roll out across every leader in your organisation.",
  },
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
    role: "Co-founder & principal adviser",
    tagline:
      "Former journalist; one of Australasia's leading public relations and crisis communications strategists.",
    bio: [
      "For more than 25 years, Lyall has advised national and international companies and organisations, governments, senior executives, politicians, celebrities and sporting figures across Australia, the Pacific, and internationally. He has coordinated international media conferences, walked clients through issues that have generated intense national and global media exposure, and has been a keynote speaker and presenter at corporate, industry and faith-based conferences across Australia and the USA. As an expert commentator in the area of crisis communications, Lyall has been quoted or interviewed by news organisations from around the world.",
      "Clients engage Lyall when the matter requires senior judgement, calm counsel, and direct access to someone who has seen how high-stakes situations actually unfold.",
    ],
    image: "/images/instructors/lyall-mercer.png",
    initials: "LM",
    palette: "navy",
  },
  {
    slug: "barbara-gorogh",
    name: "Barbara Gorogh",
    role: "Co-founder and director",
    tagline:
      "Senior communications strategist focused on client relations, media relations and practitioner development.",
    bio: [
      "Barbara has worked across Australia and the Pacific region for more than a decade, dealing with companies, organisations and governments in the area of corporate communications and reputation management. She has overseen major online corporate and government communications campaigns designed to achieve vital client objectives, and developed a specialty area in reputation management in the B2C environment. Barbara also oversees digital and social media strategies for our clients - which form an important part of every public relations, reputation and crisis strategy - and the development of our digital team based across Australia and the Pacific.",
      "Barbara's work in the media monitoring space ensures our clients are ahead of the stories that matter.",
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
                  - the boutique Australian firm that has spent 15+ years
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
                  
                  <span aria-hidden className="text-white/30">|</span>
                  <span>Built from real engagements</span>
                  <span aria-hidden className="text-white/30">|</span>
                  <span>Not your average online course</span>
                </div>
              </div>
              <div className="hidden lg:col-span-5 lg:block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/images/MyPrPartnerHeadshots2025-12.jpg"
                    alt="Lyall Mercer and Barbara Gorogh, co-founders of My PR Partner"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 p-4 backdrop-blur">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal">
                      Our founders
                    </p>
                    <p className="mt-1 font-heading text-[15px] font-bold text-text-dark">
                      Lyall Mercer and Barbara Gorogh, co-founders of My PR Partner.
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
                Every My PR Partner program is built
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
                    For 15+ years CRC Public Relations has honoured that
                    principle for its clients. My PR Partner carries the same
                    principle into online training: no recycled content, no
                    off-the-shelf templates from overseas course libraries -
                    every module is shaped by the same senior team that advises
                    CRC Public Relations&apos; clients through their most
                    sensitive moments.
                  </p>
                  <p>
                    Those clients include national and international
                    companies, governments, industry associations, independent
                    schools, faith-based organisations, child care and aged
                    care providers, NGOs, heads of state, and high profile
                    leaders and personalities. When you enrol in a My PR
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
                      Companies, governments, professional and industry
                      associations, schools, faith-based bodies, child &amp;
                      aged care, and Pacific organisations.
                    </p>
                  </div>
                </div>
              </div>
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
                CRC Public Relations can only advise a finite number of clients
                directly. My PR Partner is how 15+ years of senior-level
                judgement - real boardrooms, real results, real decisions -
                becomes a program your team can enrol in today.
              </p>
              <p className="mt-6 text-[15.5px] leading-relaxed text-text-medium md:text-[16.5px]">
                You&apos;re not learning from a course creator or a generic
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
                <AboutEnquiryForm />
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
                My PR Partner is how CRC Public Relations opens up 15+ years of
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
