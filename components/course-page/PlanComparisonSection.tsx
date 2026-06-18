"use client";

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
  const { selectedTierId, setSelectedTierId } = usePlanSelection();
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
