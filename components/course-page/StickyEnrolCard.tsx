"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Download, ShieldCheck } from "lucide-react";
import type { CheckoutConfig, PricingBullet, SidebarContent } from "./types";
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

  return (
    <div
      className={`rounded-card border border-[#E5E7EB] bg-white shadow-card ${
        placement === "sidebar" ? "lg:sticky lg:top-40" : ""
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

        {tiers && tiers.length > 0 ? (
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
