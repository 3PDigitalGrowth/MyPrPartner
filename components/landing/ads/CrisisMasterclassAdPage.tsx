"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Check, FileText, Lock, ShieldCheck, Users } from "lucide-react";
import { crisisMasterclassContent as content } from "@/content/courses/crisis-masterclass";
import { getCourseCheckoutUrl } from "@/lib/checkout";
import { LeadMagnetForm } from "@/components/lead-magnet/LeadMagnetForm";
import { AccordionItem } from "@/components/shared/AccordionItem";
import InvoiceRequestModal from "@/components/course-page/InvoiceRequestModal";
import { useScrollReveal } from "@/components/course-page/shared";

// Headline per ad group, chosen with ?t= on the final URL so the page repeats
// the words the person searched for.
const HEADLINES: Record<string, string> = {
  communication: "The crisis communication course built for Australian leaders",
  management: "The crisis management course built for Australian leaders",
  leadership: "The crisis leadership course built for Australian leaders",
  media: "Crisis communication training for spokespeople and leaders",
};

const OUTLINE = {
  label: "Crisis Masterclass course outline",
  href: "/downloads/crisis-masterclass-outline.pdf",
  filename: "Crisis Masterclass course outline.pdf",
};

const CLICK_IDS = ["gclid", "gbraid", "wbraid"] as const;

const CTA_HERO =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-9 py-[18px] font-heading text-[18px] font-bold text-text-dark shadow-[0_14px_40px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-crc-navy motion-reduce:transition-none motion-reduce:hover:translate-y-0";
const CTA_TEAL =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-teal px-9 py-[18px] font-heading text-[18px] font-bold text-white shadow-[0_12px_32px_rgba(7,175,187,0.35)] transition hover:-translate-y-0.5 hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0";
const CTA_GHOST_DARK =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-8 py-[17px] text-[16px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

const straight = (s: string) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');

function track(event: string, params: Record<string, unknown>) {
  (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.("event", event, params);
}

/** Kajabi checkout links carry the ad's click id and keyword through, and keep
 *  utm_medium as the program slug so the GA4 begin_checkout listener in
 *  app/layout.tsx still reports the right program. */
function useCheckout() {
  const params = useSearchParams();
  return useMemo(() => {
    const term = params.get("utm_term") || undefined;
    const ids = CLICK_IDS.flatMap((k) => (params.get(k) ? [[k, params.get(k) as string]] : []));
    return (location: string) => {
      const url = getCourseCheckoutUrl(content.checkout, {
        utm_source: params.get("utm_source") || "google-ads",
        utm_content: `lp-${location}`,
        ...(term ? { utm_term: term } : {}),
      });
      if (!ids.length) return url;
      return `${url}&${new URLSearchParams(ids).toString()}`;
    };
  }, [params]);
}

function useShowAfterHero() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const nearBottom = doc.scrollHeight - window.innerHeight - window.scrollY < 200;
      setShow(window.scrollY > window.innerHeight * 0.75 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return show;
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-3 text-[12px] font-medium uppercase tracking-[0.14em] ${dark ? "text-teal-light" : "text-teal"}`}>
      {children}
    </p>
  );
}

function Reg() {
  return <sup className="ml-0.5 align-super text-[0.55em]">®</sup>;
}

export default function CrisisMasterclassAdPage() {
  const params = useSearchParams();
  const checkout = useCheckout();
  const revealRef = useScrollReveal();
  const showBar = useShowAfterHero();
  const [invoiceOpen, setInvoiceOpen] = useState(false);

  const headline = HEADLINES[params.get("t") ?? ""] ?? HEADLINES.communication;
  const [lead, ...more] = content.testimonials?.items ?? [];
  const modules = content.courseStructure?.modules ?? [];
  const faq = [
    {
      q: "Is there a free trial?",
      a: "Yes. There is a ten-day free trial, so your payment is not processed until you have seen the first session.",
    },
    ...content.faq.items.filter((i) =>
      ["Who is the Crisis Masterclass for?", "Is it really 100% online?", "How long does enrolment last?", "How is payment handled?", "Can I enrol my team or board?"].includes(i.q)
    ),
  ];

  return (
    <div ref={revealRef} className="bg-white font-body text-text-dark">
      {/* Top bar: logo and one action, no menu */}
      <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          <Image
            src="/my-pr-partner-logo-horz.png"
            alt="My PR Partner"
            width={2362}
            height={893}
            priority
            className="h-10 w-auto lg:h-[48px]"
          />
          <div className="flex items-center gap-4">
            <span className="hidden text-[14px] text-text-medium md:inline">Ten-day free trial · $340/mo ex GST</span>
            <a
              href={checkout("header")}
              className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              Enrol now
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image src={content.hero.bgImage} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.94) 0%, rgba(26,43,74,0.86) 38%, rgba(7,175,187,0.78) 78%, rgba(30,115,190,0.82) 100%)",
              }}
            />
          </div>

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-12 lg:items-stretch lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                Crisis Masterclass · 100% online
              </div>
              <h1 className="font-heading text-[32px] font-bold leading-[1.06] tracking-[-0.01em] text-white text-balance sm:text-[46px] lg:text-[56px]">
                {headline}
              </h1>
              <p className="mt-4 font-heading text-[20px] font-medium text-teal-light md:text-[23px]">
                This course doesn&apos;t build plans. It builds you.
              </p>
              <p className="mt-4 max-w-[600px] text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                Twelve months of crisis communication training with Melissa Agnes, creator of the Crisis Ready<Reg /> Model,
                and Lyall Mercer of CRC Public Relations. One new module every month, at your own pace.
              </p>

              {/* Instructors on small screens; the large portrait pair takes over from lg */}
              <div className="mt-6 flex items-center gap-3 lg:hidden">
                <div className="flex -space-x-3">
                  <Image src="/images/expert-melissa-real.png" alt="" width={96} height={96} className="h-12 w-12 rounded-full object-cover ring-2 ring-white" />
                  <Image src="/images/founders-2026/lyall-crisis.jpg" alt="" width={96} height={144} className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-white" />
                </div>
                <p className="text-[14px] leading-snug text-white/85">
                  Taught by <span className="font-semibold text-white">Melissa Agnes</span> and{" "}
                  <span className="font-semibold text-white">Lyall Mercer</span>
                </p>
              </div>

              {/* Same four outcomes as the top of /crisis-masterclass (CRC's call, 5 Nov 2026) */}
              <ul className="mt-7 grid max-w-[640px] gap-y-3 max-lg:order-1">
                {content.hero.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] leading-snug text-white/90">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-9">
                <a href={checkout("hero")} className={CTA_HERO}>
                  Enrol now
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </a>
                <a href="#outline" className={CTA_GHOST_DARK}>
                  <ArrowDown className="h-4 w-4" aria-hidden />
                  Get the course outline
                </a>
              </div>
              <p className="mt-5 flex items-start gap-2 text-[14px] leading-relaxed text-white/80">
                <Lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-light" aria-hidden />
                <span>
                  <span className="font-semibold text-white">$340 a month ex GST, with a ten-day free trial.</span> You&apos;re
                  not charged until you&apos;ve seen the first session. Pay annually and get one month free.
                </span>
              </p>
            </div>

            {/* Portrait pair, sized by the text column so the column never sits half empty */}
            <div className="relative hidden min-h-[560px] lg:col-span-5 lg:block">
              <figure className="absolute right-0 top-0 h-[76%] w-[70%] overflow-hidden rounded-card shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/melissa-agnes-stage.webp"
                  alt="Melissa Agnes presenting on stage"
                  fill
                  priority
                  sizes="30vw"
                  className="object-cover object-[50%_30%]"
                />
                <figcaption className="absolute inset-x-3 top-3 rounded-xl bg-white/95 px-4 py-3 backdrop-blur">
                  <p className="font-heading text-[15px] font-bold text-text-dark">Melissa Agnes</p>
                  <p className="text-[12px] leading-snug text-text-medium">Founder and CEO, Crisis Ready Institute (USA)</p>
                </figcaption>
              </figure>
              <figure className="absolute bottom-0 left-0 h-[58%] w-[56%] overflow-hidden rounded-card border-4 border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <Image
                  src="/images/founders-2026/lyall-crisis.jpg"
                  alt="Lyall Mercer"
                  fill
                  priority
                  sizes="25vw"
                  className="object-cover object-[50%_20%]"
                />
                <figcaption className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 px-4 py-3 backdrop-blur">
                  <p className="font-heading text-[15px] font-bold text-text-dark">Lyall Mercer</p>
                  <p className="text-[12px] leading-snug text-text-medium">Lead Strategist, CRC Public Relations</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-b border-[#E5E7EB] bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-5 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
            {content.statBar.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" aria-hidden />
                <div>
                  <p className="font-heading text-[14px] font-bold text-text-dark">{title}</p>
                  <p className="text-[12.5px] leading-snug text-text-medium">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social proof */}
        <section className="bg-bg-grey py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up max-w-3xl">
              <Eyebrow>What former students say about the Crisis Ready<Reg /> course</Eyebrow>
              <h2 className="font-heading text-[30px] font-bold leading-tight md:text-[40px]">
                Communications directors, founders and CMOs have taken this course
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <figure className="animate-fade-in-up relative overflow-hidden rounded-card bg-crc-navy p-8 text-white md:p-12 lg:col-span-7">
                <span aria-hidden className="absolute -top-6 left-6 font-heading text-[180px] leading-none text-teal/30">
                  &ldquo;
                </span>
                <blockquote className="relative font-heading text-[22px] font-medium leading-[1.4] md:text-[28px]">
                  {straight(lead.quote)}
                </blockquote>
                <figcaption className="relative mt-8 border-t border-white/15 pt-5">
                  <p className="font-heading text-[16px] font-bold">{lead.name}</p>
                  <p className="text-[14px] text-white/70">{lead.title}</p>
                </figcaption>
              </figure>
              <div className="grid gap-6 lg:col-span-5">
                {more.map((t) => (
                  <figure key={t.name} className="animate-fade-in-up rounded-card border border-[#E5E7EB] bg-white p-7 shadow-card">
                    <blockquote className="text-[17px] leading-relaxed text-text-dark">&ldquo;{straight(t.quote)}&rdquo;</blockquote>
                    <figcaption className="mt-5">
                      <p className="font-heading text-[15px] font-bold">{t.name}</p>
                      <p className="text-[13px] text-text-medium">{t.title}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-card border border-[#E5E7EB] bg-white p-6">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">Melissa Agnes</p>
                <p className="mt-2 text-[16px] leading-relaxed">
                  Has worked with ministries of foreign affairs and defence, NATO and many other leading organisations.
                </p>
              </div>
              <div className="rounded-card border border-[#E5E7EB] bg-white p-6">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">Lyall Mercer</p>
                <p className="mt-2 text-[16px] leading-relaxed">
                  Former journalist with a 25+ year PR career spanning six continents, advising companies, governments and executives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for + what you get */}
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="animate-fade-in-up lg:col-span-5">
              <Eyebrow>Who it&apos;s for</Eyebrow>
              <h2 className="font-heading text-[30px] font-bold leading-tight md:text-[38px]">
                For the people who carry the reputation load when something goes wrong
              </h2>
              <ul className="mt-8 space-y-5">
                {content.personas.items.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-teal/10">
                      <Icon className="h-5 w-5 text-teal" aria-hidden />
                    </span>
                    <div>
                      <p className="font-heading text-[16px] font-bold">{title}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-text-medium">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="animate-fade-in-up">
                <Eyebrow>What you&apos;ll get</Eyebrow>
                <h2 className="font-heading text-[30px] font-bold leading-tight md:text-[38px]">
                  A program you work through, not a video library
                </h2>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {content.whatYoullLearn.tiles.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="animate-fade-in-up rounded-card border border-[#E5E7EB] bg-white p-6 shadow-card">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10">
                      <Icon className="h-5 w-5 text-teal" aria-hidden />
                    </span>
                    <p className="mt-4 font-heading text-[16px] font-bold leading-snug">{straight(title)}</p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-text-medium">{straight(body)}</p>
                  </div>
                ))}
              </div>
              <a href={checkout("what-you-get")} className={`${CTA_TEAL} mt-8 w-full sm:w-auto`}>
                Enrol now
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </section>

        {/* The year, month by month */}
        <section className="relative overflow-hidden bg-crc-navy py-16 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <Eyebrow dark>The Crisis Ready<Reg /> course, month by month</Eyebrow>
                <h2 className="font-heading text-[30px] font-bold leading-tight md:text-[40px]">
                  Twelve months. A new module each month.
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-white/75">
                  Month one opens the day you enrol. Each session comes with exercises, a workbook and a Q&A.
                </p>
              </div>
              <a href={checkout("year")} className={`${CTA_HERO} w-full lg:w-auto`}>
                Start month one
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </div>

            <ol className="relative mt-12 grid gap-0 md:grid-cols-3 md:gap-y-10 lg:grid-cols-6">
              {modules.map((m) => (
                <li key={m.month} className="relative flex gap-4 pb-7 md:block md:pb-0 md:pr-5">
                  {/* Rail: vertical on phones, horizontal from md */}
                  <span
                    aria-hidden
                    className={`absolute left-[17px] top-9 h-full w-px bg-teal/40 md:left-9 md:right-0 md:top-[17px] md:h-px md:w-auto ${
                      m.month === modules.length
                        ? "hidden"
                        : `${m.month % 3 === 0 ? "md:hidden" : ""} ${m.month % 6 === 0 ? "lg:hidden" : "lg:block"}`
                    }`}
                  />
                  <span
                    className={`relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-heading text-[14px] font-bold ${
                      m.month === 1 ? "bg-teal text-white ring-4 ring-teal/30" : "border border-teal/60 bg-crc-navy text-teal-light"
                    }`}
                  >
                    {m.month}
                  </span>
                  <div className="md:mt-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/50">Month {m.month}</p>
                    <p className="mt-1 font-heading text-[15px] font-bold leading-snug">{m.title}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Instructors */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up max-w-3xl">
              <Eyebrow>Your instructors</Eyebrow>
              <h2 className="font-heading text-[30px] font-bold leading-tight md:text-[40px]">
                Taught by people who do this work every day
              </h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {[
                {
                  img: "/images/melissa-agnes-stage.webp",
                  pos: "object-[50%_15%]",
                  name: "Melissa Agnes",
                  role: "Founder and CEO, Crisis Ready Institute (USA)",
                  bio: (
                    <>
                      Best-selling author of Crisis Ready: Building an Invincible Brand in an Uncertain World and creator of the Crisis
                      Ready<Reg /> Model. Melissa presents every session of the Crisis Masterclass, available in Australasia only through
                      My PR Partner.
                    </>
                  ),
                },
                {
                  img: "/images/founders-2026/lyall-crisis.jpg",
                  pos: "object-[50%_20%]",
                  name: "Lyall Mercer",
                  role: "Co-founder, My PR Partner · Lead Strategist, CRC Public Relations",
                  bio: content.instructors.items[0].bio,
                },
              ].map((p) => (
                <article key={p.name} className="animate-fade-in-up grid overflow-hidden rounded-card border border-[#E5E7EB] bg-white shadow-card sm:grid-cols-5">
                  <div className="relative aspect-[4/3] sm:col-span-2 sm:aspect-auto sm:min-h-[300px]">
                    <Image src={p.img} alt={p.name} fill sizes="(min-width: 640px) 20vw, 100vw" className={`object-cover ${p.pos}`} />
                  </div>
                  <div className="p-6 sm:col-span-3 md:p-8">
                    <p className="font-heading text-[22px] font-bold">{p.name}</p>
                    <p className="mt-1 text-[13px] font-medium text-teal">{p.role}</p>
                    <p className="mt-4 text-[15px] leading-relaxed text-text-medium">{p.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Outline capture for people not ready to buy today */}
        <section id="outline" className="relative scroll-mt-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/crisis-masterclass/sticky-card-thumb.jpg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(120deg, rgba(26,43,74,0.96) 0%, rgba(7,175,187,0.88) 100%)" }}
            />
          </div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-12 lg:px-8">
            <div className="animate-fade-in-up text-white lg:col-span-6">
              <Eyebrow dark>Not ready to enrol yet?</Eyebrow>
              <h2 className="font-heading text-[30px] font-bold leading-tight md:text-[40px]">Get the full course outline</h2>
              <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-white/85">
                All twelve modules and everything included, in one PDF. Handy if you need sign-off from your manager or board before
                you start.
              </p>
              <ul className="mt-6 space-y-2.5">
                {["Every module, month by month", "What's included in your 12 months", "Sent to your inbox straight away"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-[15px] text-white/90">
                    <FileText className="h-4 w-4 text-teal-light" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in-up lg:col-span-5 lg:col-start-8">
              <LeadMagnetForm
                resourceLabel={OUTLINE.label}
                downloadHref={OUTLINE.href}
                downloadFilename={OUTLINE.filename}
                theme="dark"
                variant="band"
                submitLabel="Send me the outline"
                onLead={() => track("generate_lead", { lead_type: "course_outline", program: "crisis-masterclass" })}
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 bg-bg-grey py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
            <div className="animate-fade-in-up lg:col-span-6">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="font-heading text-[30px] font-bold leading-tight md:text-[40px]">
                One plan, with everything in it
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {/* CRC asked for "Bonus content" off this page (5 Nov 2026) */}
                {content.sidebar.inclusions.filter((i) => i !== "Bonus content").map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[15px] leading-snug">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" strokeWidth={3} aria-hidden />
                    {straight(i)}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-start gap-3 rounded-card border border-[#E5E7EB] bg-white p-5">
                <Users className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" aria-hidden />
                <p className="text-[15px] leading-relaxed text-text-medium">
                  <span className="font-semibold text-text-dark">Training a team or board?</span> Group rates are available for
                  organisations of any size.{" "}
                  <Link href="/contact" className="font-semibold text-teal underline-offset-2 hover:underline">
                    Ask about group enrolment
                  </Link>
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up lg:col-span-5 lg:col-start-8">
              <div className="overflow-hidden rounded-card border border-[#E5E7EB] bg-white shadow-[0_20px_50px_rgba(26,43,74,0.12)]">
                <div className="bg-crc-navy px-7 py-4 text-white">
                  <p className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-teal-light">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                    Crisis Masterclass
                  </p>
                </div>
                <div className="p-7 md:p-8">
                  <p className="flex items-end gap-2">
                    <span className="font-heading text-[56px] font-bold leading-none">$340</span>
                    <span className="pb-1.5 text-[15px] text-text-medium">a month, ex GST</span>
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-medium">
                    Annual subscription, paid monthly. Pay upfront and get one month free.
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal/10 px-3.5 py-1.5 text-[13px] font-semibold text-teal-dark">
                    <Lock className="h-3.5 w-3.5" aria-hidden />
                    Ten-day free trial
                  </p>
                  <a href={checkout("pricing")} className={`${CTA_TEAL} mt-6 w-full`}>
                    Enrol now
                    <ArrowRight className="h-5 w-5" aria-hidden />
                  </a>
                  <button
                    type="button"
                    onClick={() => setInvoiceOpen(true)}
                    className="mt-3 w-full rounded-full border border-teal/40 px-6 py-3.5 text-[15px] font-semibold text-teal transition-colors hover:bg-teal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  >
                    Pay by invoice instead
                  </button>
                  <p className="mt-4 text-center text-[13px] leading-relaxed text-text-medium">
                    Your payment isn&apos;t processed until you&apos;ve seen the first session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="animate-fade-in-up lg:col-span-4">
              <Eyebrow>Questions</Eyebrow>
              <h2 className="font-heading text-[30px] font-bold leading-tight md:text-[38px]">Before you enrol</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-medium">
                Something we haven&apos;t covered?{" "}
                <Link href="/contact" className="font-semibold text-teal underline-offset-2 hover:underline">
                  Talk to our team
                </Link>
                . We reply within one business day.
              </p>
            </div>
            <div className="space-y-3 lg:col-span-8">
              {faq.map((i, n) => (
                <AccordionItem key={i.q} question={i.q} answer={typeof i.a === "string" ? straight(i.a) : i.a} defaultOpen={n === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* Final call to action */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image src={content.finalCta.bgImage} alt="" fill sizes="100vw" className="object-cover opacity-35" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(26,43,74,0.94) 0%, rgba(7,175,187,0.8) 70%, rgba(30,115,190,0.85) 100%)" }}
            />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:items-center lg:px-8">
            <div className="animate-fade-in-up lg:col-span-7">
              <h2 className="font-heading text-[34px] font-bold leading-[1.1] text-white md:text-[48px]">
                Don&apos;t wait until you&apos;re already in a crisis
              </h2>
              <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-white/85">
                Start month one today for $340 a month ex GST. The ten-day free trial means you see the first session before you
                pay.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href={checkout("final")} className={CTA_HERO}>
                  Enrol now
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </a>
                <a href="#outline" className={CTA_GHOST_DARK}>
                  <ArrowDown className="h-4 w-4" aria-hidden />
                  Get the course outline
                </a>
              </div>
            </div>
            <div className="animate-fade-in-up rounded-card border border-white/20 bg-white/10 p-7 text-white backdrop-blur md:p-8 lg:col-span-5">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <Image src="/images/expert-melissa-real.png" alt="" width={112} height={112} className="h-14 w-14 rounded-full object-cover ring-2 ring-white" />
                  <Image src="/images/founders-2026/lyall-crisis.jpg" alt="" width={112} height={168} className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-white" />
                </div>
                <p className="font-heading text-[16px] font-bold leading-snug">Melissa Agnes and Lyall Mercer, for twelve months</p>
              </div>
              <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                {[
                  "A new Crisis Ready® module every month",
                  "Monthly Q&A with Melissa and Lyall",
                  "Workbooks, exercises and practical resources",
                  "Fortnightly Spotlight emails between sessions",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[15px] leading-snug text-white/90">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-light" strokeWidth={3} aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-baseline gap-2 border-t border-white/15 pt-5">
                <span className="font-heading text-[34px] font-bold leading-none">$340</span>
                <span className="text-[14px] text-white/75">a month ex GST · ten-day free trial</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E5E7EB] bg-white pb-24 pt-8 lg:pb-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-[13px] text-text-medium sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} My PR Partner. Powered by CRC Public Relations and Crisis Ready Institute.{" "}
            <a href="https://www.3pdigital.com.au" target="_blank" rel="noopener" className="transition-colors hover:text-teal">
              Proudly supported by 3P Digital
            </a>
          </p>
          <nav aria-label="Legal" className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-teal">Privacy policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-teal">Terms</Link>
          </nav>
        </div>
      </footer>

      {/* Phone enrol bar once the hero has scrolled away */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#E5E7EB] bg-white/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${
          showBar ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!showBar}
      >
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal">Ten-day free trial</p>
            <p className="font-heading text-[14px] font-bold">$340/mo ex GST · annual plan</p>
          </div>
          <a
            href={checkout("mobile-bar")}
            tabIndex={showBar ? 0 : -1}
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-teal px-5 py-3 text-[15px] font-semibold text-white hover:bg-teal-dark"
          >
            Enrol now
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>

      {invoiceOpen ? (
        <InvoiceRequestModal program="Crisis Masterclass" slug={content.slug} onClose={() => setInvoiceOpen(false)} />
      ) : null}
    </div>
  );
}
