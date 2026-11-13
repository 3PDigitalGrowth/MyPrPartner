"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Check, FileText, Lock, ShieldCheck } from "lucide-react";
import type {
  CheckoutConfig,
  CourseContent,
  FoundersWelcomeContent,
  HeroContent,
  Testimonial,
} from "../types";
import { getCourseCheckoutUrl } from "@/lib/checkout";
import { MT } from "@/components/editable";
import { CopyBaseProvider, useCopyId } from "../copy-base";
import { SectionEyebrow, SectionHeading, useScrollReveal } from "../shared";
import StatMetaBar from "../StatMetaBar";
import InPageAnchorNav from "../InPageAnchorNav";
import Overview from "../Overview";
import WhatYoullLearn from "../WhatYoullLearn";
import CourseStructure from "../CourseStructure";
import Personas from "../Personas";
import Instructors from "../Instructors";
import Testimonials from "../Testimonials";
import FAQ from "../FAQ";
import StickyEnrolCard from "../StickyEnrolCard";
import GroupEnrolmentBand from "../GroupEnrolmentBand";
import FinalCtaBand from "../FinalCtaBand";
import MobileEnrolBar from "../MobileEnrolBar";
import { WaitlistModalProvider } from "../WaitlistModal";
import { PlanSelectionProvider } from "../PlanSelection";
import GoDeeper from "@/components/shared/GoDeeper";
import { LeadMagnetForm } from "@/components/lead-magnet/LeadMagnetForm";
import {
  altLeadTestimonial,
  crisisMasterclassAltContent as content,
} from "@/content/courses/crisis-masterclass-alt";

/**
 * The Crisis Masterclass page (/crisis-masterclass). Reviewed as a draft at
 * /crisis-masterclass/alt, approved by Lyall on 11 Nov 2026, live 14 Nov 2026.
 * Same content as the old page; what changed is the first two screens:
 *   1. hero names the instructors and shows them (no stock portrait), leads
 *      with a promise, and puts the price next to Enrol
 *   2. one testimonial and the partner line straight under the hero
 *   3. Lyall's note moved up from the bottom of the page and trimmed
 *   4. key learnings and career value merged into one list
 *   5. the course outline collects a name and email before it downloads
 */

const COPY_BASE = "course.crisis-masterclass-alt";

const OUTLINE = {
  label: "Crisis Masterclass course outline",
  href: "/downloads/crisis-masterclass-outline.pdf",
  filename: "Crisis Masterclass course outline.pdf",
};

const CTA_HERO =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 font-heading text-[17px] font-bold text-text-dark shadow-[0_14px_40px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-text-dark motion-reduce:transition-none motion-reduce:hover:translate-y-0";
const CTA_GHOST_DARK =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-[15px] text-[16px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

const straight = (s: string) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');

function track(name: string, params: Record<string, unknown>) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", name, params);
}

function AltHero({ hero, checkout }: { hero: HeroContent; checkout: CheckoutConfig }) {
  const cid = useCopyId();
  const enrolUrl = getCourseCheckoutUrl(checkout, { utm_content: "hero" });

  return (
    <section className="relative overflow-hidden bg-text-dark">
      <div className="absolute inset-0">
        <Image src={hero.bgImage} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,43,74,0.94) 0%, rgba(26,43,74,0.86) 38%, rgba(7,175,187,0.78) 78%, rgba(30,115,190,0.82) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-10 sm:px-6 md:py-16 lg:grid-cols-12 lg:items-stretch lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            <MT id={cid("hero.eyebrow")}>{hero.eyebrow}</MT>
          </div>
          <h1 className="font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.01em] text-white text-balance sm:text-[46px] lg:text-[58px]">
            <MT id={cid("hero.headline")}>{hero.headline}</MT>
          </h1>
          <p className="mt-4 font-heading text-[20px] font-medium text-teal-light md:text-[23px]">
            <MT id={cid("hero.tagline")}>{hero.tagline}</MT>
          </p>
          <p className="mt-4 hidden max-w-[600px] text-[16px] leading-relaxed text-white/85 sm:block md:text-[17px]">
            <MT id={cid("hero.intro")}>{hero.intro}</MT>
          </p>

          {/* Faces on small screens; the portrait pair takes over from lg */}
          <div className="mt-5 flex items-center gap-3 lg:hidden">
            <div className="flex -space-x-3">
              <Image src="/images/expert-melissa-real.png" alt="" width={96} height={96} className="h-12 w-12 rounded-full object-cover ring-2 ring-white" />
              <Image src="/images/founders-2026/lyall-crisis.jpg" alt="" width={96} height={144} className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-white" />
            </div>
            <p className="text-[14px] leading-snug text-white/85">
              Taught by <span className="font-semibold text-white">Melissa Agnes</span> and{" "}
              <span className="font-semibold text-white">Lyall Mercer</span>, 12 months online
            </p>
          </div>

          {/* The four outcomes stay as they are (CRC's call, 5 Nov 2026). On phones they sit
              below the buttons so Enrol and the price land on the first screen. */}
          <ul className="mt-7 grid max-w-[640px] gap-y-3 max-lg:order-1">
            {hero.outcomes.map((item, i) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] leading-snug text-white/90">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
                </span>
                <MT id={cid(`hero.outcomes.${i}`)}>{item}</MT>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-9">
            <a href={enrolUrl} className={CTA_HERO}>
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
              <span className="font-semibold text-white">$340 a month ex GST.</span>{" "}
              Pay annually and get one month free, and month one opens the day you enrol.
            </span>
          </p>
        </div>

        {/* Portrait pair, sized by the text column so it never sits half empty */}
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
  );
}

function ProofStrip({ t }: { t?: Testimonial }) {
  if (!t) return null;
  return (
    <section className="border-b border-[#E5E7EB] bg-bg-grey">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-8 sm:px-6 md:py-10 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <figure className="lg:col-span-8">
          <blockquote className="font-heading text-[19px] font-medium leading-snug text-text-dark md:text-[22px]">
            &quot;{straight(t.quote)}&quot;
          </blockquote>
          <figcaption className="mt-3 text-[14px] text-text-medium">
            <span className="font-semibold text-text-dark">{t.name}</span>
            {t.title ? `, ${t.title}` : ""}
          </figcaption>
        </figure>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:col-span-4 lg:justify-end">
          <Image
            src="/images/powered-by-crc-badge.svg"
            alt="Powered by CRC Public Relations"
            width={280}
            height={36}
            className="h-9 w-auto"
          />
          <p className="text-[13px] leading-snug text-text-medium">
            In partnership with
            <br />
            <span className="font-semibold text-text-dark">Crisis Ready Institute (USA)</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function FoundersNote({ content: c }: { content: FoundersWelcomeContent }) {
  const cid = useCopyId();
  const people = [
    { src: c.images?.[0], name: "Lyall Mercer", pos: "object-[50%_20%]" },
    { src: c.images?.[1], name: "Melissa Agnes", pos: "object-[50%_25%]" },
  ];
  return (
    <section className="bg-white pb-4 pt-14 md:pb-6 md:pt-20">
      <div className="mx-auto grid max-w-7xl animate-fade-in-up items-center gap-10 px-4 sm:px-6 md:grid-cols-12 md:gap-14 lg:px-8">
        <div className="grid grid-cols-2 gap-3 md:col-span-5">
          {people.map((p) =>
            typeof p.src === "string" ? (
              <figure key={p.name}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                  <Image src={p.src} alt={p.name} fill sizes="(min-width: 768px) 22vw, 50vw" className={`object-cover ${p.pos}`} />
                </div>
                <figcaption className="mt-2 text-[13px] font-medium text-text-dark">{p.name}</figcaption>
              </figure>
            ) : null
          )}
        </div>
        <div className="md:col-span-7">
          <SectionEyebrow>
            <MT id={cid("foundersWelcome.eyebrow")}>{c.eyebrow}</MT>
          </SectionEyebrow>
          <SectionHeading>
            <MT id={cid("foundersWelcome.heading")}>{c.heading}</MT>
          </SectionHeading>
          <blockquote className="mt-6 space-y-4 border-l-[3px] border-teal pl-6 text-[17px] leading-relaxed text-text-medium">
            {c.paragraphs.map((p, i) =>
              typeof p === "string" ? (
                <p key={i}>
                  <MT id={cid(`foundersWelcome.paragraphs.${i}`)}>{p}</MT>
                </p>
              ) : (
                <p key={i}>{p}</p>
              )
            )}
          </blockquote>
          <p className="mt-6 text-[14px] font-medium text-text-dark">
            <MT id={cid("foundersWelcome.signoff")}>{c.signoff}</MT>
          </p>
        </div>
      </div>
    </section>
  );
}

/** BodyWithSidebar without CareerValue (merged into the key learnings list). */
function AltBody({ content: c }: { content: CourseContent }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Explicit rows so the sticky card's row-span-full reaches the FAQ row */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:[grid-template-rows:repeat(2,auto)]">
          <div className="order-1 lg:order-none lg:col-span-8 lg:col-start-1">
            <Overview content={c.overview} />
            <WhatYoullLearn content={c.whatYoullLearn} />
            <CourseStructure content={c.courseStructure} />
            <Personas content={c.personas} />
            <Instructors content={c.instructors} />
            {c.testimonials && c.testimonials.items.length > 0 ? <Testimonials content={c.testimonials} /> : null}
          </div>

          <aside
            id="pricing"
            className="order-2 scroll-mt-28 lg:order-none lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-full"
          >
            <StickyEnrolCard
              sidebar={c.sidebar}
              checkout={c.checkout}
              placement="sidebar"
              courseName={c.mobileBar.label}
              slug={c.slug}
            />
          </aside>

          <div className="order-3 lg:order-none lg:col-span-8 lg:col-start-1">
            <FAQ content={c.faq} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OutlineBand() {
  return (
    <section id="outline" className="relative scroll-mt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/crisis-masterclass/sticky-card-thumb.jpg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, rgba(26,43,74,0.96) 0%, rgba(7,175,187,0.88) 100%)" }}
        />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-12 lg:px-8">
        <div className="animate-fade-in-up text-white lg:col-span-6">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-teal-light">Not ready to enrol yet?</p>
          <h2 className="font-heading text-[30px] font-bold leading-tight md:text-[40px]">Get the full course outline</h2>
          <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-white/85">
            All twelve modules and everything included, in one PDF. Handy if you need sign-off from your manager or board
            before you start.
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
            onLead={() => track("generate_lead", { lead_type: "course_outline", program: "crisis-masterclass", page_variant: "nov-2026" })}
          />
        </div>
      </div>
    </section>
  );
}

export default function CrisisMasterclassAltPage() {
  const revealRef = useScrollReveal();
  return (
    <CopyBaseProvider base={COPY_BASE}>
      <WaitlistModalProvider enabled={!!content.sidebar.waitlist} courseName={content.mobileBar.label} slug={content.slug}>
        <PlanSelectionProvider defaultTierId={content.sidebar.defaultTierId} hasComparison={false}>
          <div ref={revealRef}>
            <AltHero hero={content.hero} checkout={content.checkout} />
            <ProofStrip t={altLeadTestimonial} />
            <StatMetaBar stats={content.statBar} />
            <FoundersNote content={content.foundersWelcome} />
            <InPageAnchorNav anchors={content.anchors} />
            <AltBody content={content} />
            <OutlineBand />
            {content.groupBand ? <GroupEnrolmentBand content={content.groupBand} /> : null}
            {content.goDeeper ? (
              <GoDeeper content={content.goDeeper} copyBase={`${COPY_BASE}.goDeeper`} tone="grey" />
            ) : null}
            <FinalCtaBand content={content.finalCta} checkout={content.checkout} />
            <MobileEnrolBar bar={content.mobileBar} />
          </div>
        </PlanSelectionProvider>
      </WaitlistModalProvider>
    </CopyBaseProvider>
  );
}
