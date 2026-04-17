import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  FileText,
  Info,
  Newspaper,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArticlesGrid } from "@/components/articles/ArticlesGrid";
import { FeaturedArticle } from "@/components/articles/FeaturedArticle";
import { NewsletterForm } from "@/components/articles/NewsletterForm";
import { ARTICLE_CATEGORIES, getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles & Insights - My PR Partner",
  description:
    "Practical PR writing from senior advisers - crisis, reputation, media and strategy. Short, useful pieces for leaders and communications professionals, powered by CRC Public Relations.",
  alternates: { canonical: "https://myprpartner.com/articles" },
  openGraph: {
    title: "Articles & Insights - My PR Partner",
    description:
      "Senior-adviser perspective on crisis, reputation, media and strategy - practical pieces for leaders and communications teams.",
    url: "https://myprpartner.com/articles",
    type: "website",
    images: ["/images/hero-programs.jpg"],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles & Insights - My PR Partner",
    description:
      "Practical PR articles from senior CRC Public Relations advisers.",
    images: ["/images/hero-programs.jpg"],
  },
};

export default async function ArticlesPage() {
  const articles = await getAllArticles();
  const featured = articles.find((a) => a.featured);
  const rest = featured
    ? articles.filter((a) => a.slug !== featured.slug)
    : articles;

  return (
    <>
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-programs.jpg"
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
                <Newspaper className="h-3.5 w-3.5" aria-hidden />
                Articles &amp; insights
              </div>
              <h1 className="font-heading text-[34px] font-bold leading-[1.08] text-white sm:text-[44px] md:text-[52px]">
                Practical PR writing{" "}
                <span className="text-teal-light">
                  from senior advisers, not marketers.
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-[680px] text-[16px] leading-relaxed text-white/85 md:text-[18px]">
                Short, useful pieces on crisis, reputation, media and strategy -
                written by the people who sit in the room when the decisions
                get made. Free, no sign-up required.
              </p>
            </div>
          </div>
        </section>

        {/* ── LAUNCH STATUS NOTE ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[880px] items-start gap-4 rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-5 md:p-6">
              <div
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-white"
                style={{ background: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)" }}
              >
                <Info className="h-4 w-4" aria-hidden />
              </div>
              <div>
                <p className="font-heading text-[16px] font-bold text-text-dark md:text-[17px]">
                  Article previews below. Full reads rolling out across 2026.
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-text-medium">
                  Each piece is written, edited and senior-reviewed before it
                  goes live in full. The summaries below give you the useful
                  take today -{" "}
                  <Link
                    href="#subscribe"
                    className="font-semibold text-teal underline-offset-4 hover:text-teal-dark hover:underline"
                  >
                    subscribe
                  </Link>{" "}
                  to get each complete article the day it drops.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED ARTICLE ── */}
        {featured && (
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 md:pt-16 lg:px-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-teal" aria-hidden />
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                  Featured read
                </p>
              </div>
              <div className="mt-5">
                <FeaturedArticle article={featured} />
              </div>
            </div>
          </section>
        )}

        {/* ── ARTICLES GRID (with category filter) ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[620px]">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                  The library
                </p>
                <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                  Browse the full library
                </h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-text-medium md:text-[16px]">
                  Filter by the lens you need - crisis response, reputation
                  work, media craft, or senior-level strategy.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <ArticlesGrid articles={rest} categories={ARTICLE_CATEGORIES} />
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER SIGNUP BAND ── */}
        <section
          id="subscribe"
          className="relative scroll-mt-28 overflow-hidden bg-text-dark"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/lead-magnet-bg.jpg"
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
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 lg:items-center">
              <div className="lg:col-span-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Stay close to the work
                </p>
                <h2 className="mt-5 font-heading text-[28px] font-bold leading-tight text-white md:text-[38px]">
                  Get new articles in your inbox, the day they go live.
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                  One thoughtful email, fortnightly at most, with the full
                  article and any practical templates that come with it. No
                  drip, no promos, and you can unsubscribe with one click.
                </p>
              </div>
              <div className="lg:col-span-6">
                <NewsletterForm theme="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CROSS-SELL: LEAD MAGNETS + PROGRAMS ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                When reading is not enough
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                Ready to go from reading to capability?
              </h2>
              <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                Articles get you thinking. These take you further - free tools
                you can use today, or the senior-led programs we&apos;re best
                known for.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {crossSells.map((card) => {
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
                    <h3 className="mt-1 font-heading text-[18px] font-bold leading-snug text-text-dark">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-medium">
                      {card.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-teal transition-colors group-hover:text-teal-dark">
                      {card.cta}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FINAL CONTACT CTA ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
            <div className="mx-auto max-w-[780px] rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-8 text-center md:p-12">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                Something more specific?
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[34px]">
                If your situation is bigger than an article, start a conversation.
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                Every enquiry is reviewed by a senior adviser - not a sales
                funnel - and escalated to CRC Public Relations when the matter
                warrants it.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark"
                >
                  Contact the team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-7 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:border-teal hover:text-teal"
                >
                  <Compass className="h-4 w-4 text-teal" aria-hidden />
                  Browse all programs
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

type CrossSell = {
  href: string;
  icon: typeof Shield;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  accent: string;
};

const crossSells: CrossSell[] = [
  {
    href: "/resources/pr-guide",
    icon: FileText,
    eyebrow: "Free download",
    title: "5-Step PR Guide",
    body: "The foundational framework senior advisers use with new clients. Instant PDF, no credit card required.",
    cta: "Get the guide",
    accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
  },
  {
    href: "/resources/crisis-checklist",
    icon: ShieldCheck,
    eyebrow: "Free download",
    title: "Crisis Readiness Checklist",
    body: "The 10-point assessment CRC Public Relations runs with new clients. Score your org in 10 minutes.",
    cta: "Get the checklist",
    accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
  },
  {
    href: "/crisis-masterclass",
    icon: Shield,
    eyebrow: "Most popular",
    title: "Crisis Masterclass",
    body: "Australia's premier crisis communications program - built with Melissa Agnes and delivered by senior advisers.",
    cta: "See the masterclass",
    accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
  },
  {
    href: "/programs",
    icon: BookOpen,
    eyebrow: "All programs",
    title: "Programs by sector",
    body: "Full-year programs for Schools, Industry Associations, Business and Charity - sector-matched, senior-led.",
    cta: "Browse programs",
    accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
  },
];
