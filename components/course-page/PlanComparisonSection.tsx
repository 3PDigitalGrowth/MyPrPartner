"use client";

import { ListChecks } from "lucide-react";
import type { PlanComparisonContent, PricingTier } from "./types";
import { usePlanSelection } from "./PlanSelection";
import PlanComparison from "./PlanComparison";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function PlanComparisonSection({
  comparison,
  tiers,
}: {
  comparison: PlanComparisonContent;
  tiers: PricingTier[];
}) {
  const { selectedTierId, setSelectedTierId, openCompare } = usePlanSelection();
  const anchorId = comparison.anchorId ?? "compare";

  return (
    <section className="mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>{comparison.eyebrow}</SectionEyebrow>
      <SectionHeading id={anchorId}>{comparison.heading}</SectionHeading>
      {comparison.intro ? (
        <p className="mt-4 text-[15px] leading-relaxed text-text-medium md:text-[16px]">
          {comparison.intro}
        </p>
      ) : null}
      {comparison.compareButtonLabel ? (
        <button
          type="button"
          onClick={openCompare}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-teal bg-transparent px-6 py-3 text-[14px] font-semibold text-teal transition-colors hover:bg-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        >
          <ListChecks className="h-4 w-4" aria-hidden />
          {comparison.compareButtonLabel}
        </button>
      ) : null}
      <div className="mt-7">
        <PlanComparison
          tiers={tiers}
          features={comparison.features}
          selectedTierId={selectedTierId}
          onSelect={setSelectedTierId}
        />
      </div>
    </section>
  );
}
