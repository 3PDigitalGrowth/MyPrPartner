import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollHintTable from "@/components/programs/ScrollHintTable";
import {
  ArrowRight,
  ArrowDown,
  Shield,
  GraduationCap,
  Briefcase,
  Users2,
  Compass,
  Check,
  Calendar,
  Target,
  Star,
  MessageCircle,
  Newspaper,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { T, copySrc, imgBind } from "@/components/editable";

export const metadata: Metadata = {
  title: "All Programs - Find the Right One for Your Team | My PR Partner",
  description:
    "Five sector-matched PR, reputation and crisis training programs - for schools, industry associations, businesses, charities, and anyone serious about crisis communications. Compare every program and pick the one built for your team.",
  alternates: { canonical: "https://myprpartner.com/programs" },
  openGraph: {
    title: "All Programs - My PR Partner",
    description:
      "Compare five sector-matched training programs and pick the one built for your team.",
    url: "https://myprpartner.com/programs",
    type: "website",
    images: ["/images/crisis-masterclass/group-enrolment-bg.jpg"],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Programs - My PR Partner",
    description:
      "Five sector-matched training programs. Pick the one built for your team.",
    images: ["/images/crisis-masterclass/group-enrolment-bg.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

type PersonaTile = {
  href: string;
  label: string;
  sublabel: string;
  image: string;
  icon: LucideIcon;
};

const personaTiles: PersonaTile[] = [
  {
    href: "/programs/schools",
    label: "I'm a school leader",
    sublabel: "Principals, executive teams, comms staff",
    image: "/images/schools/schools-sticky-thumb.jpg",
    icon: GraduationCap,
  },
  {
    href: "/programs/business",
    label: "I run or lead a business or charity",
    sublabel: "Owners, founders, executive teams",
    image: "/images/business/business-sticky-thumb.jpg",
    icon: Briefcase,
  },
  {
    href: "/programs/industry-associations",
    label: "I lead an industry association",
    sublabel: "CEOs, comms leads, peak body teams",
    image: "/images/associations/associations-sticky-thumb.jpg",
    icon: Users2,
  },
  {
    href: "/crisis-masterclass",
    label: "I need elite crisis training",
    sublabel: "Any sector · built for high-stakes moments",
    image: "/images/crisis-masterclass/sticky-card-thumb.jpg",
    icon: Shield,
  },
];

type Program = {
  slug: string;
  href: string;
  sector: string;
  icon: LucideIcon;
  iconAccent: string;
  title: string;
  lede: string;
  audience: string;
  image: string;
  imageAlt: string;
  /** Optional object-position class when the default centre crop cuts off the subject. */
  imagePosition?: string;
  status: { label: string; tone: "live" | "waitlist" };
  pricing: string;
  outcomes: string[];
  cta: string;
};

const programs: Program[] = [
  {
    slug: "crisis-masterclass",
    href: "/crisis-masterclass",
    sector: "For leaders and PR professionals",
    icon: Shield,
    iconAccent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
    title: "Crisis Masterclass",
    lede:
      "Australia's premier crisis communications program, built with Melissa Agnes, CEO of the Crisis Ready Institute and the senior team at CRC Public Relations.",
    audience:
      "Executives, PR and communications professionals, spokespeople and leadership teams serious about being crisis ready.",
    image: "/images/crisis-masterclass/Crisisallprograms.png",
    imageAlt:
      "An Australian executive preparing for a high-stakes communications moment.",
    status: { label: "Available now", tone: "live" },
    pricing: "$340 / month",
    outcomes: [
      "12-month self-paced program, fortnightly Spotlight emails and monthly Q&A",
      "Crisis Ready® modules from Melissa Agnes plus Australian case studies",
      "Certificate on completion, backed by CRC Public Relations",
    ],
    cta: "See the masterclass",
  },
  {
    slug: "schools",
    href: "/programs/schools",
    sector: "For Australian schools",
    icon: GraduationCap,
    iconAccent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
    title: "Schools Program",
    lede:
      "School-specific content – including effective communication to school communities, media strategies, and handling the hardest allegations.",
    audience:
      "Principals, executive leadership, comms staff and crisis response teams - training together.",
    image: "/images/schools/schools-persona-principal.jpg",
    imageAlt:
      "An Australian school principal leading a confident, prepared leadership team.",
    status: { label: "Available now", tone: "live" },
    pricing: "From $440 / month",
    outcomes: [
      "Monthly training video, workbook and ready-to-use resources",
      "Sector-specific content - from effective media strategies to the hardest allegations",
      "Optional multi-school enrolments for whole-group training",
    ],
    cta: "See the Schools Program",
  },
  {
    slug: "business",
    href: "/programs/business",
    sector: "For Australian businesses and charities",
    icon: Briefcase,
    iconAccent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
    title: "Business & NFP Program",
    lede:
      "A 12-month online PR, profile, reputation and crisis communications program for Australian business owners and leadership teams.",
    audience:
      "Owners, founders and leadership teams - from local businesses to national brands and not for profits.",
    image: "/images/business/programsright.png",
    imageAlt:
      "An Australian business owner working through a leadership team planning session.",
    status: { label: "Launching 2026 · join waitlist", tone: "waitlist" },
    pricing: "Founding-member discount - first 50 save 10%",
    outcomes: [
      "PR, profile and reputation building across 12 focused monthly modules",
      "Establish your organisation as the trusted public voice of your industry",
      "Franchise, multi-location and group enrolments available at bulk rates",
    ],
    cta: "See the Business & NFP Program",
  },
  {
    slug: "industry-associations",
    href: "/programs/industry-associations",
    sector: "For industry & professional associations",
    icon: Users2,
    iconAccent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
    title: "Industry Associations Program",
    lede:
      "A 12-month online PR, advocacy and membership program for Australian industry, trade and professional association leadership teams.",
    audience:
      "CEOs, comms leads and peak body teams shaping the voice of their sector.",
    image: "/images/associations/associations-persona-ceo.jpg",
    imageAlt:
      "The CEO of an Australian industry association leading a board advocacy session.",
    status: { label: "Launching 2026 · join waitlist", tone: "waitlist" },
    pricing: "Founding-member discount - first 20 members save 10%",
    outcomes: [
      "Advocacy, media campaigns and member-trust building across 12 modules",
      "Crisis readiness for sector-defining issues and board-level moments",
      "Protect and strengthen your industry's reputation",
    ],
    cta: "See the Associations Program",
  },
];

type ComparisonRow = {
  label: string;
  icon: LucideIcon;
  values: string[]; // must match programs order: crisis, schools, business, charity, associations
};

const comparisonRows: ComparisonRow[] = [
  {
    label: "Built for",
    icon: Target,
    values: [
      "Any leader serious about crisis readiness",
      "School leadership, comms and marketing teams",
      "Owners, founders & executive teams",
      "CEOs & association leadership teams",
    ],
  },
  {
    label: "Duration",
    icon: Calendar,
    values: [
      "12 months · self-paced",
      "12 months · self-paced",
      "12 months · self-paced",
      "12 months · self-paced",
    ],
  },
  {
    label: "Status",
    icon: Sparkles,
    values: [
      "Available now",
      "Available now",
      "Waitlist · Launching 2026",
      "Waitlist · Launching 2026",
    ],
  },
  {
    label: "Pricing",
    icon: Star,
    values: [
      "From $340/mo · annual plan · ex GST",
      "From $440/mo · annual plan · ex GST",
      "Founding-member 10% off",
      "Founding-member 10% off",
    ],
  },
];

const finalFunnel = [
  {
    href: "/contact",
    icon: MessageCircle,
    eyebrow: "Still weighing it up?",
    title: "Book a call with our team",
    body: "Send us a short message about your team and your goals - we will reply within one business day.",
    cta: "Contact the team",
    accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
  },
  {
    href: "/articles",
    icon: Newspaper,
    eyebrow: "Read first",
    title: "Articles & insights",
    body: "Practical PR tips and senior-adviser commentary on reputation, media, crisis and brand - built up over 15+ years.",
    cta: "Read the articles",
    accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
  },
  {
    href: "/courses",
    icon: Compass,
    eyebrow: "Coming soon",
    title: "Upcoming standalone courses",
    body: "Social media, personal branding, media training, content strategy and more – short, focused courses launching through 2026.",
    cta: "See the pipeline",
    accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function ProgramsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://myprpartner.com/" },
          { name: "Programs", url: "https://myprpartner.com/programs" },
        ]}
      />
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src={copySrc("programs.hero.bg-image", "/images/crisis-masterclass/group-enrolment-bg.jpg")}
              {...imgBind("programs.hero.bg-image")}
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
            <div className="mx-auto max-w-[860px] text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <Compass className="h-3.5 w-3.5" aria-hidden />
                <T id="programs.hero.badge">Our programs</T>
              </div>
              <h1 className="font-heading text-[34px] font-bold leading-[1.08] text-white sm:text-[44px] md:text-[52px]">
                <T id="programs.hero.title-line1">Four programs.</T>{" "}
                <span className="text-teal-light">
                  <T id="programs.hero.title-line2">One built for your team.</T>
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-[680px] text-[16px] leading-relaxed text-white/85 md:text-[18px]">
                <T id="programs.hero.subtitle">
                  Every My PR Partner program is designed by the senior advisers
                  at CRC Public Relations for a specific sector and a specific
                  kind of leadership team. Find the one built for yours in under
                  two minutes.
                </T>
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Link
                  href="#match"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:bg-white/95"
                >
                  <T id="programs.hero.cta-primary">Help me find mine</T>
                  <ArrowDown className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="#programs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <T id="programs.hero.cta-secondary">See every program</T>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── "MATCH YOUR TEAM" PERSONA SELECTOR ── */}
        <section id="match" className="scroll-mt-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                <T id="programs.match.eyebrow">Match your team</T>
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                <T id="programs.match.title">Which of these sounds most like you?</T>
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                <T id="programs.match.subtitle">
                  Tap the persona closest to your role. We&apos;ll take you to
                  the program built specifically for your sector and leadership
                  team.
                </T>
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {personaTiles.map((p, index) => {
                const Icon = p.icon;
                return (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="group relative flex flex-col overflow-hidden rounded-card border border-[#E5E7EB] bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-[#F7F8FA]">
                      <Image
                        src={copySrc(`programs.personas.${index}.image`, p.image)}
                        {...imgBind(`programs.personas.${index}.image`)}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-teal shadow-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="font-heading text-[15.5px] font-bold leading-snug text-text-dark">
                        <T id={`programs.personas.${index}.label`}>{p.label}</T>
                      </p>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-text-medium">
                        <T id={`programs.personas.${index}.sublabel`}>{p.sublabel}</T>
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-teal transition-colors group-hover:text-teal-dark">
                        <T id="programs.personas.cta-label">See the program</T>
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FULL PROGRAMS GRID ── */}
        <section id="programs" className="scroll-mt-28 bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                <T id="programs.grid.eyebrow">Every program, side by side</T>
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                <T id="programs.grid.title">All four programs at a glance</T>
              </h2>
              <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                <T id="programs.grid.subtitle">
                  Each card links to the full program page. Start with the one
                  that fits your sector and leadership team.
                </T>
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {programs.map((p, index) => {
                const Icon = p.icon;
                return (
                  <article
                    key={p.slug}
                    className="group flex h-full flex-col overflow-hidden rounded-card border border-[#E5E7EB] bg-white shadow-sm transition-shadow hover:shadow-card"
                  >
                    <div className="relative h-56 w-full overflow-hidden bg-[#EEF0F3] md:h-64">
                      <Image
                        src={copySrc(`programs.cards.${index}.image`, p.image)}
                        {...imgBind(`programs.cards.${index}.image`)}
                        alt={p.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${p.imagePosition ?? ""}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] ${
                            p.status.tone === "live"
                              ? "bg-teal text-white"
                              : "bg-white/95 text-teal"
                          }`}
                        >
                          {p.status.tone === "live" ? (
                            <Check className="h-3 w-3" aria-hidden />
                          ) : (
                            <Sparkles className="h-3 w-3" aria-hidden />
                          )}
                          <T id={`programs.cards.${index}.status`}>{p.status.label}</T>
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-start gap-3">
                        <div
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-lg"
                          style={{ background: p.iconAccent }}
                        >
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/85">
                            <T id={`programs.cards.${index}.sector`}>{p.sector}</T>
                          </p>
                          <h3 className="font-heading text-[22px] font-bold leading-snug text-white">
                            <T id={`programs.cards.${index}.title`}>{p.title}</T>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <p className="text-[15.5px] font-medium leading-relaxed text-text-dark">
                        <T id={`programs.cards.${index}.lede`}>{p.lede}</T>
                      </p>
                      <p className="mt-2 text-[14px] leading-relaxed text-text-medium">
                        <span className="font-semibold text-text-dark">
                          <T id="programs.cards.built-for-label">Built for:</T>
                        </span>{" "}
                        <T id={`programs.cards.${index}.audience`}>{p.audience}</T>
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {p.outcomes.map((o, oi) => (
                          <li
                            key={o}
                            className="flex items-start gap-2.5 text-[14px] leading-relaxed text-text-medium"
                          >
                            <span
                              aria-hidden
                              className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal"
                            >
                              <Check className="h-2.5 w-2.5" />
                            </span>
                            <T id={`programs.cards.${index}.outcomes.${oi}`}>{o}</T>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex flex-col gap-3 border-t border-[#F1F2F5] pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-text-medium">
                            <T id="programs.cards.pricing-label">Pricing</T>
                          </p>
                          <p className="mt-0.5 font-heading text-[15.5px] font-bold text-text-dark">
                            <T id={`programs.cards.${index}.pricing`}>{p.pricing}</T>
                          </p>
                        </div>
                        <Link
                          href={p.href}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-teal-dark"
                        >
                          <T id={`programs.cards.${index}.cta`}>{p.cta}</T>
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── AT-A-GLANCE COMPARISON ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                <T id="programs.comparison.eyebrow">Compare at a glance</T>
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                <T id="programs.comparison.title">Programs side by side</T>
              </h2>
            </div>

            <ScrollHintTable className="mt-10">
              <table className="w-full min-w-[820px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="sticky left-0 z-20 w-[150px] bg-white p-4 text-[12px] font-medium uppercase tracking-[0.12em] text-text-medium shadow-[2px_0_5px_-2px_rgba(16,24,40,0.08)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#E5E7EB] sm:w-[160px]">
                      &nbsp;
                    </th>
                    {programs.map((p, index) => {
                      const Icon = p.icon;
                      return (
                        <th
                          key={p.slug}
                          className="border-b border-[#E5E7EB] p-4 align-bottom"
                        >
                          <Link
                            href={p.href}
                            className="group inline-flex flex-col items-start gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                          >
                            <span
                              className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                              style={{ background: p.iconAccent }}
                            >
                              <Icon className="h-4 w-4" aria-hidden />
                            </span>
                            <span className="font-heading text-[14px] font-bold leading-snug text-text-dark group-hover:text-teal">
                              <T id={`programs.cards.${index}.title`}>{p.title}</T>
                            </span>
                          </Link>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, ri) => {
                    const RowIcon = row.icon;
                    return (
                      <tr
                        key={row.label}
                        className="border-b border-[#F1F2F5] last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="sticky left-0 z-10 bg-white p-4 align-top shadow-[2px_0_5px_-2px_rgba(16,24,40,0.08)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#F1F2F5]"
                        >
                          <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-text-dark">
                            <RowIcon
                              className="h-4 w-4 text-teal"
                              aria-hidden
                            />
                            <T id={`programs.comparison.rows.${ri}.label`}>{row.label}</T>
                          </span>
                        </th>
                        {row.values.map((v, i) => (
                          <td
                            key={i}
                            className="p-4 align-top text-[13.5px] leading-relaxed text-text-medium"
                          >
                            <T id={`programs.comparison.rows.${ri}.values.${i}`}>{v}</T>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </ScrollHintTable>
            <p className="mt-6 text-center text-[13px] text-text-medium">
              <T id="programs.comparison.footnote">
                Every program is designed and delivered by senior advisers at
                CRC Public Relations.
              </T>{" "}
              <Link
                href="/about"
                className="font-semibold text-teal underline hover:text-teal-dark"
              >
                <T id="programs.comparison.footnote-cta">How we build our programs</T>
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── "STILL NOT SURE" FINAL BAND ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                <T id="programs.final.eyebrow">Still not sure?</T>
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                <T id="programs.final.title">Three ways to work out the right next step</T>
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                <T id="programs.final.subtitle">
                  Have a quick conversation, read a few articles, or see
                  what&apos;s coming next - whichever works best for you.
                </T>
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {finalFunnel.map((f, index) => {
                const Icon = f.icon;
                return (
                  <Link
                    key={f.href}
                    href={f.href}
                    className="group flex h-full flex-col rounded-card border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow hover:shadow-card md:p-7"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                      style={{ background: f.accent }}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                      <T id={`programs.final.cards.${index}.eyebrow`}>{f.eyebrow}</T>
                    </p>
                    <h3 className="mt-1 font-heading text-[20px] font-bold leading-snug text-text-dark">
                      <T id={`programs.final.cards.${index}.title`}>{f.title}</T>
                    </h3>
                    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-text-medium">
                      <T id={`programs.final.cards.${index}.body`}>{f.body}</T>
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-teal transition-colors group-hover:text-teal-dark">
                      <T id={`programs.final.cards.${index}.cta`}>{f.cta}</T>
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
      </main>
      <Footer />
    </>
  );
}
