"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

import { SectorTabs } from "@/components/pricing/SectorTabs";
import type { Sector } from "@/components/pricing/SectorTabs";
import { TierColumn } from "@/components/pricing/TierColumn";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { ValueAddCard } from "@/components/pricing/ValueAddCard";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { FaqCard } from "@/components/shared/FaqCard";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const VALID_SECTORS: Sector[] = ["business", "charity", "association", "school"];

const PRICING: Record<Sector, Record<string, { monthly: string; annual: string }>> = {
  business: {
    resource: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    train: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    support: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    partner: { monthly: "$[INSERT]", annual: "$[INSERT]" },
  },
  charity: {
    resource: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    train: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    support: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    partner: { monthly: "$[INSERT]", annual: "$[INSERT]" },
  },
  association: {
    resource: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    train: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    support: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    partner: { monthly: "$[INSERT]", annual: "$[INSERT]" },
  },
  school: {
    resource: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    train: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    support: { monthly: "$[INSERT]", annual: "$[INSERT]" },
    partner: { monthly: "$[INSERT]", annual: "$[INSERT]" },
  },
};

type TierInfo = {
  key: string;
  name: string;
  descriptor: string;
  features: string[];
  ctaVariant: "filled" | "outline";
  isHighlighted: boolean;
};

const TIERS: TierInfo[] = [
  {
    key: "resource",
    name: "Resource",
    descriptor: "Get started with the PR fundamentals",
    features: [
      "Weekly Spotlight email",
      "Monthly video & audio training resource",
      "Choose Growth Focus or Reputation Focus",
      "Quarterly mentoring sessions",
      "Two major webinar events per year",
      "Monthly group Q&A sessions",
      "Crisis Communications Australia summit — 50% off",
    ],
    ctaVariant: "outline",
    isHighlighted: false,
  },
  {
    key: "train",
    name: "Train",
    descriptor: "Deeper training across both content focuses",
    features: [
      "Everything in Resource, plus:",
      "Two video & audio resources per month",
      "Both Growth AND Reputation focus",
      "Sector-specific Spotlight email",
      "Sector-specific Q&A sessions",
      "Sector-specific monthly bonus content",
    ],
    ctaVariant: "outline",
    isHighlighted: false,
  },
  {
    key: "support",
    name: "Support",
    descriptor: "Training plus personal CRC PR support",
    features: [
      "Everything in Train, plus:",
      "On-call crisis PR assistance (6 hours/year)",
      "Personal email PR support (1 hour/month)",
      "Reputation vulnerability checklist (valued at $700)",
      "Crisis communications plan template (valued at $5,000)",
      "One-hour consultation on your crisis plan (valued at $350)",
      "Crisis Communications Australia summit — 50% off",
      "Discounted PR consultancy rates (10% off)",
    ],
    ctaVariant: "filled",
    isHighlighted: true,
  },
  {
    key: "partner",
    name: "Partner",
    descriptor: "Your dedicated PR relationship",
    features: [
      "Everything in Support, plus:",
      "Personal phone, video & email PR support (2 hours/month)",
      "Personalised half-day media training (valued at $3,000)",
      "On-call issues and crisis management assistance",
      "Crisis Communications Australia summit — FREE",
      "Priority access to CRC PR consultants",
      "10% discount on additional PR consultancy hours",
    ],
    ctaVariant: "outline",
    isHighlighted: false,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
    name: "Peter White AM",
    title: "Managing Director, Finance Brokers Association of Australia",
  },
  {
    quote:
      "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
    name: "Hamish Watson",
    title: "Director, Cafe 63",
  },
  {
    quote:
      "CRC Public Relations has developed a crisis communications plan for Christian schools and has assisted many of our member schools across Australia to effectively communicate when issues have arisen.",
    name: "Vanessa Cheng",
    title: "Executive Officer, Australian Association of Christian Schools",
  },
];

const FAQ_ITEMS: { question: string; answer: React.ReactNode }[] = [
  {
    question: "How does the annual subscription work?",
    answer:
      "My PR Partner is an annual subscription-based service. Your plan continues for 12 months from the start date. You can pay annually upfront or in monthly instalments. You can cancel auto-renewal at any time, however your plan will continue for the remainder of your 12-month subscription.",
  },
  {
    question: "Can I pay annually by invoice?",
    answer:
      "Yes — but only on the Support and Partner levels. Annual payments on the Resource and Train levels must be made through the website via credit or debit card.",
  },
  {
    question: "Can I upgrade my level later?",
    answer:
      "Yes, you can upgrade at any time. An upgrade is treated as the commencement of a new 12-month subscription, since each level offers different resources over the year. We\u2019ll credit any unused portion of your original subscription pro-rata against the new level.",
  },
  {
    question: "Can I downgrade to a lower level?",
    answer:
      "Downgrades take effect from your next annual renewal. You\u2019re unable to downgrade mid-subscription because higher-level benefits may have already been delivered (such as the crisis comms plan template or media training session).",
  },
  {
    question: "Who owns My PR Partner and what experience do they have?",
    answer:
      "My PR Partner is part of CRC Public Relations, a respected national PR company established in 2010. CRC PR has worked with organisations across more than 15 industries including schools, industry associations, government, legal, health, and corporate sectors. The platform is led by Lyall Mercer (former journalist, 25+ years in PR) and Barbara Gorogh.",
  },
  {
    question: "Are the Support and Partner levels similar to engaging a PR consultancy?",
    answer:
      "Yes. Both levels include a personal relationship with CRC Public Relations and regular, ongoing PR support. These levels are ideal for organisations that want a relationship with a PR company without the usual retainer costs. For an affordable monthly budget, you get access to CRC PR\u2019s expertise through your subscription.",
  },
  {
    question: "Can multiple staff members access the content?",
    answer:
      "Subscriptions are per-individual. If you\u2019d like multiple team members to access the content, please contact us for group licensing options — particularly suited to schools, industry associations and corporate teams.",
  },
  {
    question: "What happens at the end of my 12-month subscription?",
    answer:
      "Your subscription will automatically renew at the end of the annual period unless you\u2019ve cancelled auto-renewal. You\u2019ll receive reminder emails 15 days and 3 days before renewal. To stop renewal, notify us at least 10 business days before the renewal date.",
  },
  {
    question: "Can I subscribe under my company name for tax purposes?",
    answer:
      "Yes — your company name will appear on the subscription details. Please seek your own taxation advice on how this applies to your situation.",
  },
  {
    question: "Where can I find your full terms and conditions?",
    answer: (
      <>
        Our complete terms and conditions are available on our{" "}
        <a href="/terms-and-conditions" className="font-medium text-teal hover:text-teal-dark transition-colors underline">
          Terms &amp; Conditions
        </a>{" "}
        page.
      </>
    ),
  },
];

const VALUE_ADD_CARDS = [
  {
    imageSrc: "/images/plans-pricing/value-add-checklist.jpg",
    valuePill: "VALUED AT $700",
    title: "Reputation Vulnerability Checklist",
    description:
      "A detailed plan to help you evaluate and identify your reputational vulnerabilities. Covers policies, HR issues, data security, media and social media, board and executive leadership, and hot button issues.",
    delivered: "Delivered in month 2 of your subscription",
  },
  {
    imageSrc: "/images/plans-pricing/value-add-template.jpg",
    valuePill: "VALUED AT $5,000",
    title: "Crisis Communications Plan Template",
    description:
      "A comprehensive crisis communications plan template that helps you plan across all areas and be prepared for any adverse situation. Includes a one-hour consultation with our team about your organisation\u2019s specific needs (valued at $350).",
    delivered: "Delivered in month 4 of your subscription",
  },
  {
    imageSrc: "/images/plans-pricing/value-add-media-training.jpg",
    valuePill: "VALUED AT $3,000",
    title: "Personalised Media Training (Partner Level)",
    description:
      "An exclusive personalised half-day media training session for your spokespeople or group, delivered online. More than one person may be trained during this session.",
    delivered: "Delivered after month 3 of your subscription",
  },
];

/* ------------------------------------------------------------------ */
/*  Scroll-reveal hook                                                 */
/* ------------------------------------------------------------------ */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const targets = el.querySelectorAll(".animate-fade-in-up");
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PlanPricingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const revealRef = useScrollReveal();

  const sectorParam = searchParams.get("sector") as Sector | null;
  const [selectedSector, setSelectedSector] = useState<Sector>(
    sectorParam && VALID_SECTORS.includes(sectorParam) ? sectorParam : "business"
  );
  const handleSectorChange = useCallback(
    (sector: Sector) => {
      setSelectedSector(sector);
      const params = new URLSearchParams(searchParams.toString());
      params.set("sector", sector);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  const prices = PRICING[selectedSector];

  return (
    <div ref={revealRef}>
      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/plans-pricing/hero-bg-pricing.jpg')" }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,26,46,0.75) 0%, rgba(26,26,46,0.65) 60%, rgba(26,26,46,0.8) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[720px] px-4 pb-12 pt-16 text-center sm:pb-20 sm:pt-[100px]">
          <div className="animate-fade-in-up">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-[13px] font-medium text-white/70">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>&rsaquo;</li>
                <li className="text-white/90">Plans &amp; Pricing</li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
              CHOOSE YOUR LEVEL
            </p>

            {/* H1 */}
            <h1 className="mt-3 font-heading text-[32px] font-bold leading-[1.15] text-white md:text-[48px]">
              Choose the level of PR capability your organisation needs
            </h1>

            {/* Subtext */}
            <p className="mx-auto mt-4 max-w-[600px] text-[19px] text-white/90">
              Four subscription levels. Tailored content for your sector. Expert-led training and resources backed by 15 years of CRC Public Relations consulting experience.
            </p>

            {/* Quick-fact pills */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {[
                "Annual subscription, billed monthly or annually",
                "Cancel auto-renewal anytime",
                "Tailored for your sector",
              ].map((fact) => (
                <span
                  key={fact}
                  className="flex items-center gap-2 rounded-full border border-white/30 px-3.5 py-1.5 text-[13px] font-medium text-white"
                >
                  <Check className="h-3.5 w-3.5 shrink-0" />
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — SECTOR CATEGORY SELECTOR
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white pb-8 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
              STEP 1
            </p>
            <h2 className="mt-2 font-heading text-[28px] font-bold text-text-dark">
              Select your sector
            </h2>
            <p className="mt-2 text-[15px] text-text-medium">
              Each sector receives tailored content and (where applicable) sector-specific pricing.
            </p>
          </div>

          <div className="mt-8 animate-fade-in-up">
            <SectorTabs selectedSector={selectedSector} onSelect={handleSectorChange} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — THE FOUR SUBSCRIPTION LEVELS
      ══════════════════════════════════════════════════════════════ */}
      <section id="choose-level" className="bg-bg-grey py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in-up">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
              STEP 2
            </p>
            <h2 className="mt-2 font-heading text-[32px] font-bold text-text-dark">
              Choose your level
            </h2>
            <p className="mx-auto mt-2 max-w-[600px] text-[15px] text-text-medium">
              Pricing shown for {selectedSector === "business" ? "Business" : selectedSector === "charity" ? "Charity & NFP" : selectedSector === "association" ? "Industry Association" : "School"}. Schools and Industry Associations receive a $50/month discount on all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier, i) => (
              <div key={tier.key} className="animate-fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <TierColumn
                  name={tier.name}
                  descriptor={tier.descriptor}
                  price={prices[tier.key].monthly}
                  annualTotal={prices[tier.key].annual}
                  features={tier.features}
                  ctaHref="#contact"
                  ctaVariant={tier.ctaVariant}
                  isHighlighted={tier.isHighlighted}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center animate-fade-in-up">
            <p className="text-[13px] italic text-[#9CA3AF]">
              All prices exclude GST. Annual subscriptions can be paid annually or in monthly instalments. Sector-specific pricing applies to selected category.
            </p>
            <p className="mt-3 text-[14px] text-text-medium">
              Need a custom quote for multiple seats or a team licence?{" "}
              <Link href="#contact" className="font-medium text-teal transition-colors hover:text-teal-dark">
                Contact us for group pricing &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — COMPARISON TABLE
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
              STEP 3
            </p>
            <h2 className="mt-2 font-heading text-[32px] font-bold text-text-dark">
              Compare every feature side by side
            </h2>
            <p className="mx-auto mt-2 max-w-[560px] text-[15px] text-text-medium">
              Every feature, every level. Tap any row to see more detail.
            </p>
          </div>

          <div className="animate-fade-in-up">
            <ComparisonTable selectedSector={selectedSector} />
          </div>

          {/* Scroll back to tiers */}
          <div className="mt-10 text-center animate-fade-in-up">
            <button
              type="button"
              onClick={() => {
                document.getElementById("choose-level")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-teal px-6 py-3 text-[14px] font-medium text-teal transition-colors hover:bg-teal hover:text-white"
            >
              Compare Levels Again
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — VALUE-ADD CALLOUT
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-grey py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
              INCLUDED IN SUPPORT &amp; PARTNER LEVELS
            </p>
            <h2 className="mx-auto mt-2 max-w-[720px] font-heading text-[36px] font-bold text-text-dark">
              Premium resources worth over $9,000 — included in your subscription
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[16px] text-text-medium">
              When you subscribe to Support or Partner, you receive these high-value resources as part of your annual subscription — no extra cost.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 animate-fade-in-up">
            {VALUE_ADD_CARDS.map((card) => (
              <ValueAddCard key={card.title} {...card} />
            ))}
          </div>

          <div className="mt-8 text-center animate-fade-in-up">
            <p className="font-heading text-[24px] font-bold text-text-dark">
              Total included value: over $9,050
            </p>
            <p className="mt-2 text-[15px] text-text-medium">
              Plus everything else in your chosen subscription level.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — TESTIMONIALS
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in-up">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
              TRUSTED BY AUSTRALIAN ORGANISATIONS
            </p>
            <h2 className="mx-auto mt-2 max-w-[720px] font-heading text-[32px] font-bold text-text-dark">
              My PR Partner can help you achieve these same results
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 animate-fade-in-up">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} title={t.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-grey pb-16 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in-up">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
              BEFORE YOU ENROL
            </p>
            <h2 className="mt-2 font-heading text-[32px] font-bold text-text-dark">
              Frequently asked questions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
            {FAQ_ITEMS.map((item) => (
              <FaqCard
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          <p className="mt-10 text-center text-[15px] text-text-medium animate-fade-in-up">
            Have another question?{" "}
            <Link href="#contact" className="font-medium text-teal transition-colors hover:text-teal-dark">
              Contact us &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-cover bg-center bg-no-repeat py-24" style={{ backgroundImage: "url('/images/plans-pricing/cta-bg-pricing.jpg')" }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(7,175,187,0.92) 0%, rgba(30,115,190,0.85) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[720px] px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            {/* Headshot */}
            <div className="mx-auto mb-5 h-16 w-16 overflow-hidden rounded-full border-[3px] border-white">
              <Image
                src="/images/expert-lyall-real.png"
                alt="Lyall Mercer, Co-founder of My PR Partner"
                width={64}
                height={64}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <h2 className="font-heading text-[26px] font-bold leading-[1.2] text-white md:text-[36px]">
              Not sure which level is right for your organisation?
            </h2>
            <p className="mt-4 text-[18px] text-white/90">
              Get in touch and we&apos;ll help you find the right fit. We answer most enquiries within one business day.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-text-dark transition-colors hover:bg-gray-100"
              >
                Contact Us
              </Link>
              <button
                type="button"
                onClick={() => {
                  document.getElementById("choose-level")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full border border-white px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
              >
                Compare Levels Again
              </button>
            </div>

            <p className="mt-6 text-[14px] text-white/70">
              — Lyall Mercer &amp; Barbara Gorogh, Co-founders
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
