import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HandHeart,
  Check,
  ExternalLink,
  Sprout,
  HeartPulse,
  Droplets,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowDown,
  ArrowUpRight,
  Quote,
  Globe2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { T, copySrc, imgBind } from "@/components/editable";

export const metadata: Metadata = {
  title: "Giving Back - Compassion × My PR Partner",
  description:
    "My PR Partner partners with Compassion Australia so that every subscription helps fund real, measurable projects - income generation in Ethiopia, mental health services in Peru, and clean water and sanitation in Thailand.",
  alternates: { canonical: "https://myprpartner.com/about/giving-back" },
  openGraph: {
    title: "Giving Back - Compassion × My PR Partner",
    description:
      "A portion of every subscription is donated to the work of Compassion Australia. When you join My PR Partner, you are also part of making someone's life better in a tangible way.",
    url: "https://myprpartner.com/about/giving-back",
    type: "website",
    images: ["/images/charity/charity-hero-portrait.jpg"],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giving Back - Compassion × My PR Partner",
    description:
      "Every My PR Partner subscription helps fund real Compassion projects - income generation, mental health, and clean water across three countries.",
    images: ["/images/charity/charity-hero-portrait.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Static content
// ─────────────────────────────────────────────────────────────────────────────

const howItWorksSteps = [
  {
    number: "01",
    icon: Users,
    title: "You enrol in a My PR Partner program",
    body: "Pick the program built for your sector - Crisis Masterclass, Schools, Industry Associations, Business or Charity - and start building senior-led communications capability inside your organisation.",
  },
  {
    number: "02",
    icon: HandHeart,
    title: "A portion of your subscription is set aside",
    body: "A portion of your first month's subscription (or the annual equivalent for subscribers who pay annually) is earmarked for the work of Compassion.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Compassion delivers measurable impact",
    body: "Those funds go to specific, funded Compassion projects across Ethiopia, Peru and Thailand - so your decision to invest in your team also changes someone else's life.",
  },
];

type Project = {
  slug: string;
  icon: typeof Sprout;
  country: string;
  category: string;
  headline: string;
  body: string;
  metricFigure: string;
  metricLabel: string;
  image: string;
  imageAlt: string;
  accent: string;
};

const projects: Project[] = [
  {
    slug: "income-generation",
    icon: Sprout,
    country: "Ethiopia",
    category: "Income generation",
    headline:
      "Helping 120 Ethiopian caregivers become economically self-sufficient",
    body: "This intervention will help 120 Ethiopian caregivers living in poverty to become economically self-sufficient so they can provide for their families' daily needs.",
    metricFigure: "120",
    metricLabel: "caregivers supported",
    image: "/images/compassion-ethiopia-income-generation.png",
    imageAlt:
      "Ethiopian woman caregiver with child, smiling with hope and dignity",
    accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
  },
  {
    slug: "health",
    icon: HeartPulse,
    country: "Peru",
    category: "Health",
    headline:
      "Providing mental health services to 2,000 Compassion participants across Peru",
    body: "This health intervention will promote and provide mental health services to 2,000 Compassion participants across Peru.",
    metricFigure: "2,000",
    metricLabel: "participants reached",
    image: "/images/compassion-peru-mental-health.png",
    imageAlt:
      "Peruvian counsellor and young person in supportive conversation",
    accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
  },
  {
    slug: "water-sanitation",
    icon: Droplets,
    country: "Thailand",
    category: "Water and sanitation",
    headline:
      "Safe access to water for six communities in Thailand",
    body: "This water and sanitation intervention will help to provide safe access to water in Thailand, transforming six communities and hundreds of children's lives through the gift of clean water.",
    metricFigure: "6",
    metricLabel: "communities transformed",
    image: "/images/compassion-thailand-water-sanitation.png",
    imageAlt:
      "Thai children collecting and drinking clean water at community facility",
    accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
  },
];

const impactStats = [
  { figure: "3", label: "Countries supported" },
  { figure: "2,120+", label: "Lives directly impacted" },
  { figure: "6", label: "Communities transformed" },
  { figure: "100%", label: "Of commitment honoured" },
];

const COMPASSION_DONATE_URL = "https://www.compassion.com.au/";

// ─────────────────────────────────────────────────────────────────────────────
// Small atoms (kept consistent with /about and /about/expert-trainers)
// ─────────────────────────────────────────────────────────────────────────────

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

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function GivingBackPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://myprpartner.com/" },
          { name: "About", url: "https://myprpartner.com/about" },
          { name: "Giving back", url: "https://myprpartner.com/about/giving-back" },
        ]}
      />
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src={copySrc("givingback.hero.background", "/images/giving-back-hero-banner.png")}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35"
              {...imgBind("givingback.hero.background")}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.92) 0%, rgba(11,122,88,0.72) 55%, rgba(7,175,187,0.80) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                  <HandHeart className="h-3.5 w-3.5" aria-hidden />
                  <T id="givingback.hero.badge">Compassion × My PR Partner</T>
                </div>
                <h1 className="font-heading text-[34px] font-bold leading-[1.08] text-white sm:text-[44px] md:text-[54px]">
                  <T id="givingback.hero.title.prefix">When you invest in your team,</T>{" "}
                  <span className="text-teal-light">
                    <T id="givingback.hero.title.highlight">someone else&apos;s life changes too</T>
                  </span>
                </h1>
                <p className="mt-4 max-w-[560px] text-[15px] font-medium leading-relaxed text-white/90 md:text-[17px]">
                  <T id="givingback.hero.subtitle">
                    My PR Partner believes in communicating in a way that elevates others, rather than tears them down.
                  </T>
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={COMPASSION_DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:bg-white/95"
                  >
                    <T id="givingback.hero.cta.primary">Donate directly to Compassion</T>
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                  <Link
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <ArrowDown className="h-4 w-4" aria-hidden />
                    <T id="givingback.hero.cta.secondary">See the projects we fund</T>
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-[12px] text-white/70">
                  <span className="inline-flex items-center gap-1.5">
                    <Globe2 className="h-3.5 w-3.5 text-teal-light" aria-hidden />
                    <T id="givingback.hero.trust.item1">Ethiopia · Peru · Thailand</T>
                  </span>
                  <span aria-hidden className="text-white/30">|</span>
                  <span><T id="givingback.hero.trust.item2">Every subscription contributes</T></span>
                  <span aria-hidden className="text-white/30">|</span>
                  <span><T id="givingback.hero.trust.item3">Powered by CRC Public Relations</T></span>
                </div>
              </div>
              <div className="hidden lg:col-span-5 lg:block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <Image
                    src={copySrc("givingback.hero.image", "/compassionhero.png")}
                    alt="Hopeful scene representing community impact and giving back"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    {...imgBind("givingback.hero.image")}
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 p-4 backdrop-blur">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal">
                      <T id="givingback.hero.caption.eyebrow">Compassion Australia</T>
                    </p>
                    <p className="mt-1 font-heading text-[15px] font-bold text-text-dark">
                      <T id="givingback.hero.caption.text">
                        Part of Compassion International, releasing children
                      from poverty across 29 countries.
                      </T>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR BELIEF PULL-QUOTE ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[880px] rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-8 shadow-sm md:p-12">
              <div
                className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                style={{
                  background: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
                }}
              >
                <Quote className="h-5 w-5" aria-hidden />
              </div>
              <SectionEyebrow>
                <T id="givingback.belief.eyebrow">Our belief</T>
              </SectionEyebrow>
              <p className="mt-4 font-heading text-[22px] font-medium leading-[1.35] text-text-dark md:text-[28px]">
                <T id="givingback.belief.quote">
                  We also believe that as a company, we have a responsibility to use a portion of our revenue for the greater good. That&apos;s why we&apos;ve partnered with Compassion Australia.
                </T>
              </p>
              <p className="mt-6 text-[15.5px] leading-relaxed text-text-medium md:text-[16.5px]">
                <T id="givingback.belief.body">
                  So when you join the My PR Partner community, you are also
                part of making someone&apos;s life better in a tangible way.
                It&apos;s not a marketing slogan - it&apos;s a line item in
                how we run the business.
                </T>
              </p>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS (3 STEPS) ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <SectionEyebrow>
                <T id="givingback.howitworks.eyebrow">How it works</T>
              </SectionEyebrow>
              <SectionHeading>
                <T id="givingback.howitworks.heading">
                  Every subscription becomes part of someone else&apos;s story
                </T>
              </SectionHeading>
              <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                <T id="givingback.howitworks.body">
                  A portion of your first month&apos;s subscription (or the
                annual equivalent for subscribers who pay annually) is donated
                directly to the work of Compassion.
                </T>
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {howItWorksSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.number}
                    className="rounded-card border border-[#E5E7EB] bg-white p-7 shadow-sm transition-shadow hover:shadow-card"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="font-heading text-[28px] font-bold leading-none text-teal"
                      >
                        {step.number}
                      </span>
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
                        }}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                    </div>
                    <h3 className="mt-5 font-heading text-[20px] font-bold leading-snug text-text-dark">
                      <T id={`givingback.steps.${index}.title`}>{step.title}</T>
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-text-medium">
                      <T id={`givingback.steps.${index}.body`}>{step.body}</T>
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROJECTS WE SUPPORT ── */}
        <section id="projects" className="scroll-mt-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <SectionEyebrow>
                <T id="givingback.projects.eyebrow">Projects we support</T>
              </SectionEyebrow>
              <SectionHeading>
                <T id="givingback.projects.heading">
                  Three funded Compassion projects across three countries
                </T>
              </SectionHeading>
              <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                <T id="givingback.projects.intro">
                  Here are some of the Compassion projects My PR Partner
                supports - specific, measurable, already in motion.
                </T>
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map((p, index) => {
                const Icon = p.icon;
                return (
                  <article
                    key={p.slug}
                    className="flex h-full flex-col overflow-hidden rounded-card border border-[#E5E7EB] bg-white shadow-sm transition-shadow hover:shadow-card"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={copySrc(`givingback.projects.${index}.image`, p.image)}
                        alt={p.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                        {...imgBind(`givingback.projects.${index}.image`)}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(26,43,74,0.85) 100%)",
                        }}
                      />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-dark backdrop-blur">
                        <Globe2 className="h-3 w-3 text-teal" aria-hidden />
                        <T id={`givingback.projects.${index}.country`}>{p.country}</T>
                      </div>
                      <div
                        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md"
                        style={{ background: p.accent }}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                        <T id={`givingback.projects.${index}.category`}>{p.category}</T>
                      </p>
                      <h3 className="mt-2 font-heading text-[20px] font-bold leading-snug text-text-dark">
                        <T id={`givingback.projects.${index}.headline`}>{p.headline}</T>
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-text-medium">
                        <T id={`givingback.projects.${index}.body`}>{p.body}</T>
                      </p>
                      <div className="mt-5 flex items-baseline gap-3 border-t border-[#F1F2F5] pt-5">
                        <span className="font-heading text-[28px] font-bold leading-none text-text-dark">
                          <T id={`givingback.projects.${index}.metricfigure`}>{p.metricFigure}</T>
                        </span>
                        <span className="text-[13px] text-text-medium">
                          <T id={`givingback.projects.${index}.metriclabel`}>{p.metricLabel}</T>
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
              {impactStats.map((s, index) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center rounded-card border border-[#EEF0F3] bg-[#F7F8FA] p-5 text-center"
                >
                  <p className="font-heading text-[28px] font-bold leading-none text-text-dark md:text-[34px]">
                    <T id={`givingback.impactstats.${index}.figure`}>{s.figure}</T>
                  </p>
                  <p className="mt-2 text-[12.5px] text-text-medium md:text-[13.5px]">
                    <T id={`givingback.impactstats.${index}.label`}>{s.label}</T>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT COMPASSION ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-card">
                  <Image
                    src={copySrc("givingback.partnership.image", "/images/compassion-partnership.jpg")}
                    alt="Compassion Australia field work - a community-focused charity"
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover"
                    {...imgBind("givingback.partnership.image")}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(26,43,74,0) 45%, rgba(26,43,74,0.85) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-5 bottom-5 rounded-xl bg-white/95 p-5 backdrop-blur">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal">
                      <T id="givingback.partnership.caption.eyebrow">Who we partner with</T>
                    </p>
                    <p className="mt-1 font-heading text-[15px] font-bold text-text-dark">
                      <T id="givingback.partnership.caption.text">Compassion Australia - part of Compassion International</T>
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <SectionEyebrow>
                  <T id="givingback.partnership.eyebrow">About the partnership</T>
                </SectionEyebrow>
                <SectionHeading>
                  <T id="givingback.partnership.heading">
                    Why we chose Compassion, and why it matters
                  </T>
                </SectionHeading>
                <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                  <p>
                    <T id="givingback.partnership.body.1">
                      Compassion Australia is part of Compassion International -
                    one of the world&apos;s most respected child-focused
                    development organisations, with more than seven decades of
                    experience releasing children from poverty.
                    </T>
                  </p>
                  <p>
                    <T id="givingback.partnership.body.2">
                      We chose Compassion because they don&apos;t just
                    distribute aid. They fund specific, local, long-running
                    projects with measurable outcomes - in health, education,
                    water and sanitation, and economic self-sufficiency - and
                    they report back honestly on what happens.
                    </T>
                  </p>
                  <p>
                    <T id="givingback.partnership.body.3">
                      It means every dollar we contribute on behalf of our
                    subscribers has a trackable destination. No vague
                    promises. Just real work, in real communities.
                    </T>
                  </p>
                </div>
                <ul className="mt-7 space-y-2.5">
                  {[
                    "Specific, funded projects - not general fundraising",
                    "Measurable outcomes in health, water and income generation",
                    "70+ years of child-focused development experience",
                    "Transparent reporting on how funds are used",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-text-dark"
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
                      <T id={`givingback.partnership.list.${index}`}>{item}</T>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-[14px] text-text-medium">
                  <T id="givingback.partnership.footer.text">Learn more about Compassion Australia&apos;s work at</T>{" "}
                  <a
                    href={COMPASSION_DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-teal underline hover:text-teal-dark"
                  >
                    <T id="givingback.partnership.footer.linktext">compassion.com.au</T>
                    <ExternalLink className="h-3 w-3" aria-hidden />
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DUAL CTA BAND ── */}
        <section
          id="donate"
          className="relative scroll-mt-28 overflow-hidden bg-text-dark"
        >
          <div className="absolute inset-0">
            <Image
              src={copySrc("givingback.dualcta.background", "/images/charity/charity-final-cta-bg.jpg")}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-30"
              {...imgBind("givingback.dualcta.background")}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.95) 0%, rgba(11,122,88,0.80) 60%, rgba(7,175,187,0.82) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <HandHeart className="h-3.5 w-3.5" aria-hidden />
                <T id="givingback.dualcta.badge">Two ways to help</T>
              </p>
              <h2 className="mt-5 font-heading text-[30px] font-bold leading-tight text-white md:text-[40px]">
                <T id="givingback.dualcta.heading">Enrol in a program, donate directly - or both</T>
              </h2>
              <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                <T id="givingback.dualcta.body">
                  Every My PR Partner subscription already contributes to the
                work of Compassion. If you also want to donate directly, you
                can do that through Compassion Australia in a few clicks.
                </T>
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              <article className="rounded-card bg-white p-7 shadow-card md:p-8">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
                  }}
                >
                  <HandHeart className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-heading text-[22px] font-bold text-text-dark">
                  <T id="givingback.dualcta.card1.heading">Donate directly to Compassion</T>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-medium">
                  <T id="givingback.dualcta.card1.body">
                    Want to go further? You can sponsor a child, give a gift, or
                  contribute to specific critical-needs appeals directly with
                  Compassion Australia.
                  </T>
                </p>
                <ul className="mt-5 space-y-2 text-[14px] leading-relaxed text-text-medium">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal" aria-hidden />
                    <T id="givingback.dualcta.card1.list.1">One-off gifts or ongoing child sponsorship</T>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal" aria-hidden />
                    <T id="givingback.dualcta.card1.list.2">Tax-deductible within Australia</T>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal" aria-hidden />
                    <T id="givingback.dualcta.card1.list.3">100% handled by Compassion Australia directly</T>
                  </li>
                </ul>
                <a
                  href={COMPASSION_DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-text-dark px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-text-dark/90 sm:w-auto"
                >
                  <T id="givingback.dualcta.card1.cta">Donate now</T>
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </article>

              <article className="rounded-card border border-white/20 bg-white/10 p-7 shadow-card backdrop-blur md:p-8">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #1E73BE 0%, #07AFBB 100%)",
                  }}
                >
                  <ShieldCheck className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-heading text-[22px] font-bold text-white">
                  <T id="givingback.dualcta.card2.heading">Become a subscriber - every enrolment contributes</T>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/85">
                  <T id="givingback.dualcta.card2.body">
                    The easiest way to support Compassion through My PR Partner
                  is to join a program. Your subscription builds capability in
                  your organisation and funds real work overseas.
                  </T>
                </p>
                <ul className="mt-5 space-y-2 text-[14px] leading-relaxed text-white/90">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal-light" aria-hidden />
                    <T id="givingback.dualcta.card2.list.1">Five program options - pick your sector</T>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal-light" aria-hidden />
                    <T id="givingback.dualcta.card2.list.2">Senior-led, powered by CRC Public Relations</T>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal-light" aria-hidden />
                    <T id="givingback.dualcta.card2.list.3">A portion of every subscription goes to Compassion</T>
                  </li>
                </ul>
                <Link
                  href="/programs"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:bg-white/95 sm:w-auto"
                >
                  <T id="givingback.dualcta.card2.cta">Explore programs</T>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA / CROSS-LINK ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
            <div className="mx-auto max-w-[760px] rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-8 text-center md:p-12">
              <SectionEyebrow>
                <T id="givingback.finalcta.eyebrow">Keep exploring</T>
              </SectionEyebrow>
              <SectionHeading>
                <T id="givingback.finalcta.heading">
                  Meet the firm and the trainers behind every subscription
                </T>
              </SectionHeading>
              <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                <T id="givingback.finalcta.body">
                  My PR Partner is powered by CRC Public Relations - a boutique
                senior-adviser firm with 15+ years advising across Australia
                and the Pacific. Every subscription funds capability in your
                team and projects like these on behalf of Compassion.
                </T>
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-teal-dark"
                >
                  <T id="givingback.finalcta.cta.primary">Our story</T>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/about/expert-trainers"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-8 py-4 text-[16px] font-semibold text-text-dark transition-colors hover:border-teal hover:text-teal"
                >
                  <Users className="h-4 w-4" aria-hidden />
                  <T id="givingback.finalcta.cta.secondary">Meet our trainers</T>
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
