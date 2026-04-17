import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Download,
  Newspaper,
  Quote,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LeadMagnetForm } from "./LeadMagnetForm";
import type { LeadMagnetConfig } from "./types";

type LeadMagnetPageProps = {
  config: LeadMagnetConfig;
};

export function LeadMagnetPage({ config }: LeadMagnetPageProps) {
  const EyebrowIcon = config.hero.eyebrowIcon;

  return (
    <>
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        {/* ── HERO with inline form ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src={config.hero.backgroundImage}
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
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                  <EyebrowIcon className="h-3.5 w-3.5" aria-hidden />
                  {config.hero.eyebrow}
                </div>
                <h1 className="mt-5 font-heading text-[34px] font-bold leading-[1.08] text-white sm:text-[42px] md:text-[50px]">
                  {config.hero.title}{" "}
                  <span className="text-teal-light">
                    {config.hero.titleHighlight}
                  </span>
                </h1>
                <p className="mt-5 max-w-[580px] text-[16px] leading-relaxed text-white/85 md:text-[18px]">
                  {config.hero.subhead}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {config.hero.trustBadges.map((b) => (
                    <li
                      key={b}
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12.5px] font-medium text-white/90 backdrop-blur"
                    >
                      <Check className="h-3.5 w-3.5" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 hidden sm:block">
                  <Link
                    href="#inside"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
                  >
                    See what&apos;s inside
                    <ArrowDown className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5" id="download">
                <LeadMagnetForm
                  resourceLabel={config.resourceLabel}
                  downloadHref={config.downloadHref}
                  downloadFilename={config.downloadFilename}
                  theme="dark"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INSIDE (steps grid) ── */}
        <section id="inside" className="scroll-mt-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                {config.stepsSection.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                {config.stepsSection.title}
              </h2>
              <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                {config.stepsSection.subhead}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {config.stepsSection.steps.map((s, idx) => {
                const Icon = s.icon;
                const stepNumber = String(idx + 1).padStart(2, "0");
                return (
                  <article
                    key={s.title}
                    className="flex h-full flex-col rounded-card border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow hover:shadow-card md:p-7"
                  >
                    <header className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-inner"
                        style={{ background: s.accent }}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <span className="font-heading text-[32px] font-bold leading-none text-[#E5E7EB]">
                        {stepNumber}
                      </span>
                    </header>
                    <h3 className="mt-5 font-heading text-[20px] font-bold leading-snug text-text-dark">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-text-medium">
                      {s.teaser}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                <Download className="h-4 w-4" aria-hidden />
                Send me the full {config.resourceLabel}
              </Link>
            </div>
          </div>
        </section>

        {/* ── AUTHORITY / WHY TRUST US ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                  {config.authority.eyebrow}
                </p>
                <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                  {config.authority.title}
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                  {config.authority.body}
                </p>
                <ul className="mt-7 space-y-3">
                  {config.authority.bullets.map((b) => (
                    <li
                      key={b}
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
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-[13px] text-text-medium shadow-sm">
                  <Image
                    src="/images/powered-by-crc-badge.svg"
                    alt="Powered by CRC Public Relations"
                    width={22}
                    height={22}
                    className="h-5 w-5"
                  />
                  Powered by CRC Public Relations
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                  {config.authority.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-card border border-[#E5E7EB] bg-white p-5 text-center shadow-sm"
                    >
                      <p className="font-heading text-[30px] font-bold leading-none text-text-dark md:text-[36px]">
                        {s.value}
                      </p>
                      <p className="mt-2 text-[13px] leading-snug text-text-medium md:text-[13.5px]">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL QUOTE ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
            <figure className="mx-auto max-w-[860px] rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-8 md:p-12">
              <Quote
                className="h-8 w-8 text-teal opacity-60"
                aria-hidden
              />
              <blockquote className="mt-5 font-heading text-[22px] font-medium leading-[1.4] text-text-dark md:text-[28px]">
                {config.testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-[14px]">
                <div
                  aria-hidden
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-heading text-[14px] font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
                  }}
                >
                  {config.testimonial.name
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w.charAt(0))
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-text-dark">
                    {config.testimonial.name}
                  </p>
                  <p className="text-text-medium">{config.testimonial.title}</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── CROSS-SELL: EXPERT-LED TRAINING ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                {config.crossSells.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                {config.crossSells.title}
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                {config.crossSells.subhead}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {config.crossSells.cards.map((card) => {
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

        {/* ── RELATED ARTICLES ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[620px]">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                  {config.articles.eyebrow}
                </p>
                <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[34px]">
                  {config.articles.title}
                </h2>
              </div>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-teal hover:text-teal-dark"
              >
                <Newspaper className="h-4 w-4" aria-hidden />
                See all articles
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {config.articles.items.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="group flex h-full flex-col rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-6 transition-shadow hover:shadow-card md:p-7"
                >
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                    {a.eyebrow}
                  </p>
                  <h3 className="mt-2 font-heading text-[19px] font-bold leading-snug text-text-dark">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-text-medium">
                    {a.body}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#E5E7EB] pt-4 text-[13px]">
                    <span className="inline-flex items-center gap-1.5 text-text-medium">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      {a.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-teal transition-colors group-hover:text-teal-dark">
                      Read article
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA BAND ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src="/images/cta-background.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-30"
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
            <div className="mx-auto max-w-[780px] text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                {config.contactCta.eyebrow}
              </div>
              <h2 className="mt-5 font-heading text-[28px] font-bold leading-tight text-white md:text-[38px]">
                {config.contactCta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                {config.contactCta.body}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:bg-white/95"
                >
                  Contact the team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Browse all programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL DOWNLOAD BAND ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-8 md:p-12 lg:grid-cols-12 lg:gap-10 lg:items-center">
              <div className="lg:col-span-6">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                  Still here?
                </p>
                <h2 className="mt-3 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[32px]">
                  Grab the {config.resourceLabel} before you close the tab.
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-text-medium">
                  One email. Instant download. No drip campaign, no credit card,
                  no follow-up call.
                </p>
              </div>
              <div className="lg:col-span-6">
                <LeadMagnetForm
                  resourceLabel={config.resourceLabel}
                  downloadHref={config.downloadHref}
                  downloadFilename={config.downloadFilename}
                  variant="band"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
