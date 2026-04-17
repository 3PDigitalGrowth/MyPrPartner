"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Download, ShieldCheck, Sparkles } from "lucide-react";
import type { CheckoutConfig, PricingBullet, SidebarContent, WaitlistContent } from "./types";
import { getCourseCheckoutUrl } from "@/lib/checkout";

function normaliseBullet(b: PricingBullet): { text: string; highlighted: boolean } {
  return typeof b === "string" ? { text: b, highlighted: false } : { text: b.text, highlighted: !!b.highlighted };
}

function InclusionItem({ text, highlighted }: { text: string; highlighted: boolean }) {
  return (
    <li
      className={`flex items-start gap-2 text-[13px] ${
        highlighted ? "font-medium text-teal" : "text-text-medium"
      }`}
    >
      <Check
        className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${highlighted ? "text-teal" : "text-teal"}`}
        aria-hidden
      />
      <span>{text}</span>
    </li>
  );
}

function getTimeParts(targetMs: number, nowMs: number) {
  let diff = Math.max(0, targetMs - nowMs);
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  diff -= days * 24 * 60 * 60 * 1000;
  const hours = Math.floor(diff / (60 * 60 * 1000));
  diff -= hours * 60 * 60 * 1000;
  const minutes = Math.floor(diff / (60 * 1000));
  diff -= minutes * 60 * 1000;
  const seconds = Math.floor(diff / 1000);
  return { days, hours, minutes, seconds, done: targetMs - nowMs <= 0 };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function WaitlistBlock({
  waitlist,
  checkout,
}: {
  waitlist: WaitlistContent;
  checkout: CheckoutConfig;
}) {
  const hasCountdown = !!waitlist.countdown;
  const targetMs = useMemo(
    () => (waitlist.countdown ? new Date(waitlist.countdown.endsAt).getTime() : 0),
    [waitlist.countdown]
  );
  // SSR-safe: initialise to targetMs so first paint shows 00:00:00 consistently
  // between server and client; useEffect then kicks off the live ticker.
  const [now, setNow] = useState<number>(targetMs);

  useEffect(() => {
    if (!hasCountdown) return;
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [hasCountdown]);

  const liveParts = hasCountdown ? getTimeParts(targetMs, now) : null;

  const waitlistUrl = useMemo(() => {
    return getCourseCheckoutUrl(
      { ...checkout, baseUrl: waitlist.signupUrl || checkout.baseUrl },
      { utm_content: "sidebar" }
    );
  }, [waitlist.signupUrl, checkout]);

  const spots = waitlist.spots;
  const pct =
    spots && spots.capacity > 0
      ? Math.min(100, Math.max(0, (spots.claimed / spots.capacity) * 100))
      : 0;
  const spotsRemaining = spots ? Math.max(0, spots.capacity - spots.claimed) : 0;

  return (
    <div>
      {waitlist.discountPill ? (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-teal">
          <Sparkles className="h-3 w-3" aria-hidden />
          {waitlist.discountPill}
        </span>
      ) : null}

      <h3 className="mt-3 font-heading text-[22px] font-bold leading-tight text-text-dark md:text-[24px]">
        {waitlist.headline}
      </h3>
      {waitlist.subheadline ? (
        <p className="mt-2 text-[14px] leading-relaxed text-text-medium">{waitlist.subheadline}</p>
      ) : null}

      {spots ? (
        <div className="mt-5">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-text-medium">
              {spots.label ?? "Founding member spots"}
            </p>
            <p className="text-[12px] font-semibold text-text-dark">
              <span className="text-teal">{spotsRemaining}</span>
              <span className="text-text-medium"> / {spots.capacity} left</span>
            </p>
          </div>
          <div
            role="progressbar"
            aria-valuenow={spots.claimed}
            aria-valuemin={0}
            aria-valuemax={spots.capacity}
            aria-label={`${spots.claimed} of ${spots.capacity} founding member spots claimed`}
            className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#F1F2F5]"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-teal to-teal-dark transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      ) : null}

      {liveParts ? (
        <div className="mt-5">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-text-medium">
            {waitlist.countdown!.label}
          </p>
          <div className="mt-2 flex items-stretch gap-1.5" aria-live="polite">
            {[
              { v: liveParts.days, l: "Days" },
              { v: liveParts.hours, l: "Hrs" },
              { v: liveParts.minutes, l: "Min" },
              { v: liveParts.seconds, l: "Sec" },
            ].map((p) => (
              <div
                key={p.l}
                className="flex-1 rounded-lg border border-[#E5E7EB] bg-[#F7F8FA] px-1 py-2 text-center"
              >
                <p className="font-heading text-[18px] font-bold leading-none text-text-dark tabular-nums">
                  {pad(p.v)}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.1em] text-text-medium">
                  {p.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <a
        href={waitlistUrl}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
      >
        {waitlist.ctaLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>

      {waitlist.benefits.length > 0 ? (
        <ul className="mt-5 space-y-2">
          {waitlist.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[13px] text-text-medium">
              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-teal" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {waitlist.footnote ? (
        <p className="mt-4 text-[12px] leading-relaxed text-text-medium">{waitlist.footnote}</p>
      ) : null}
    </div>
  );
}

export default function StickyEnrolCard({
  sidebar,
  checkout,
  placement,
}: {
  sidebar: SidebarContent;
  checkout: CheckoutConfig;
  placement: "sidebar" | "inline";
}) {
  const tiers = sidebar.tiers;
  const initialTierId =
    sidebar.defaultTierId ?? (tiers && tiers.length > 0 ? tiers[0].id : undefined);
  const [selectedTierId, setSelectedTierId] = useState<string | undefined>(initialTierId);

  const selectedTier = useMemo(
    () => (tiers ? tiers.find((t) => t.id === selectedTierId) ?? tiers[0] : undefined),
    [tiers, selectedTierId]
  );

  const displayPrice = selectedTier?.price ?? sidebar.price;
  const displayCurrencyNote = selectedTier?.priceCurrencyNote ?? sidebar.priceCurrencyNote;
  const displayPlanNote = selectedTier?.pricePlanNote ?? sidebar.pricePlanNote;

  const displayInclusionsTitle = selectedTier?.inclusionsTitle ?? sidebar.inclusionsTitle;
  const baseInclusions: PricingBullet[] =
    selectedTier?.inclusions ?? (sidebar.inclusions as PricingBullet[]);
  const plusHeading = selectedTier?.plusHeading;
  const plusInclusions = selectedTier?.plusInclusions;

  const checkoutUrl = getCourseCheckoutUrl(checkout, {
    utm_content: placement,
    ...(selectedTier ? { utm_term: selectedTier.id } : {}),
  });

  const BadgeIcon = sidebar.badgeIcon;
  const waitlist = sidebar.waitlist;
  const showPricing = !waitlist;

  return (
    <div
      className={`rounded-card border border-[#E5E7EB] bg-white shadow-card ${
        placement === "sidebar"
          ? "lg:sticky lg:top-32 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto"
          : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-card">
        <Image
          src={sidebar.thumbImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="object-cover"
        />
        {sidebar.badge ? (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-teal">
            {BadgeIcon ? <BadgeIcon className="h-3 w-3" aria-hidden /> : null}
            {sidebar.badge}
          </div>
        ) : null}
      </div>

      <div className="p-6">
        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">{sidebar.eyebrow}</p>

        {waitlist ? (
          <div className="mt-4">
            <WaitlistBlock waitlist={waitlist} checkout={checkout} />
          </div>
        ) : null}

        {showPricing && tiers && tiers.length > 0 ? (
          <div className="mt-4">
            {sidebar.tierSelectorLabel ? (
              <p className="mb-2 font-heading text-[13px] font-semibold text-text-dark">
                {sidebar.tierSelectorLabel}
              </p>
            ) : null}
            <div role="radiogroup" aria-label={sidebar.tierSelectorLabel ?? "Pricing tier"} className="space-y-2">
              {tiers.map((t) => {
                const active = t.id === selectedTier?.id;
                return (
                  <button
                    type="button"
                    role="radio"
                    aria-checked={active}
                    key={t.id}
                    onClick={() => setSelectedTierId(t.id)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      active
                        ? "border-teal bg-teal/5"
                        : "border-[#E5E7EB] bg-white hover:border-teal/50"
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block font-heading text-[13px] font-semibold text-text-dark">
                        {t.label}
                      </span>
                      {t.description ? (
                        <span className="mt-0.5 block text-[12px] text-text-medium">
                          {t.description}
                        </span>
                      ) : null}
                    </span>
                    <span
                      aria-hidden
                      className={`ml-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                        active ? "border-teal" : "border-[#D0D5DD]"
                      }`}
                    >
                      {active ? <span className="h-2 w-2 rounded-full bg-teal" /> : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        {showPricing ? (
          <>
            <div className="mt-4 flex items-baseline gap-2">
              <p className="font-heading text-[28px] font-bold text-text-dark">{displayPrice}</p>
              <span className="text-[12px] text-text-medium">{displayCurrencyNote}</span>
            </div>
            <p className="mt-1 text-[13px] text-text-medium">{displayPlanNote}</p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={checkoutUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              >
                {sidebar.primaryCtaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              {sidebar.secondaryCta ? (
                <Link
                  href={sidebar.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-teal bg-transparent px-6 py-3 text-[14px] font-semibold text-teal transition-colors hover:bg-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  {sidebar.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </>
        ) : sidebar.secondaryCta ? (
          <div className="mt-5">
            <Link
              href={sidebar.secondaryCta.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-teal bg-transparent px-6 py-3 text-[14px] font-semibold text-teal transition-colors hover:bg-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              <Download className="h-4 w-4" aria-hidden />
              {sidebar.secondaryCta.label}
            </Link>
          </div>
        ) : null}

        <div className="mt-6 border-t border-[#F1F2F5] pt-5">
          <p className="font-heading text-[13px] font-semibold text-text-dark">{displayInclusionsTitle}</p>
          <ul className="mt-3 space-y-2">
            {baseInclusions.map((b, i) => {
              const item = normaliseBullet(b);
              return <InclusionItem key={`base-${i}-${item.text}`} {...item} />;
            })}
          </ul>
          {plusHeading && plusInclusions && plusInclusions.length > 0 ? (
            <>
              <p className="mt-4 font-heading text-[13px] font-semibold text-teal">{plusHeading}</p>
              <ul className="mt-3 space-y-2">
                {plusInclusions.map((b, i) => {
                  const item = normaliseBullet(b);
                  return <InclusionItem key={`plus-${i}-${item.text}`} {...item} />;
                })}
              </ul>
            </>
          ) : null}
        </div>

        {sidebar.trustBadges ? (
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#F1F2F5] pt-4 text-[12px] text-text-medium">
            {sidebar.trustBadges.poweredByCrcLogo ? (
              <div className="flex items-center gap-2">
                <Image
                  src="/images/powered-by-crc-badge.svg"
                  alt="Powered by CRC Public Relations"
                  width={120}
                  height={18}
                  className="h-4 w-auto"
                />
              </div>
            ) : <span />}
            {sidebar.trustBadges.crisisReadyBadge ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F8FA] px-2.5 py-1 text-[11px] font-medium text-text-dark">
                <ShieldCheck className="h-3 w-3 text-teal" aria-hidden />
                Crisis Ready<sup className="ml-0.5 align-super text-[8px]">®</sup>
              </span>
            ) : null}
          </div>
        ) : null}

        {sidebar.callbackHref && sidebar.callbackLinkLabel ? (
          <Link
            href={sidebar.callbackHref}
            className="mt-4 inline-block text-[13px] font-medium text-teal hover:text-teal-dark"
          >
            {sidebar.callbackLinkLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
