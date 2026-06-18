"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { PlanComparisonContent, PricingTier } from "./types";
import { usePlanSelection } from "./PlanSelection";
import PlanComparison from "./PlanComparison";

export default function PlanCompareModal({
  tiers,
  comparison,
}: {
  tiers: PricingTier[];
  comparison: PlanComparisonContent;
}) {
  const { compareOpen, closeCompare, selectedTierId, setSelectedTierId } = usePlanSelection();

  useEffect(() => {
    if (!compareOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCompare();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [compareOpen, closeCompare]);

  if (!compareOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="plan-compare-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={closeCompare}
        className="absolute inset-0 cursor-default bg-text-dark/60 backdrop-blur-sm"
      />
      <div className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:max-w-3xl sm:rounded-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#F1F2F5] bg-white px-6 py-5">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
              {comparison.eyebrow}
            </p>
            <h2
              id="plan-compare-title"
              className="mt-1 font-heading text-[22px] font-bold leading-tight text-text-dark"
            >
              {comparison.heading}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCompare}
            aria-label="Close"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-text-medium transition-colors hover:bg-[#F1F2F5] hover:text-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="p-6">
          <PlanComparison
            tiers={tiers}
            features={comparison.features}
            selectedTierId={selectedTierId}
            onSelect={(id) => {
              setSelectedTierId(id);
              closeCompare();
            }}
          />
        </div>
      </div>
    </div>
  );
}
