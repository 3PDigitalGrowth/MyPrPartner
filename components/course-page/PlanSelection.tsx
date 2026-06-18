"use client";

import { createContext, useCallback, useContext, useState } from "react";

type PlanSelectionContextValue = {
  /** Currently selected tier id, or undefined for non-tiered courses. */
  selectedTierId: string | undefined;
  setSelectedTierId: (id: string) => void;
  /** Whether a plan comparison exists for this course. */
  hasComparison: boolean;
  /** Lightbox state for the "Compare all plans" experience. */
  compareOpen: boolean;
  openCompare: () => void;
  closeCompare: () => void;
};

const PlanSelectionContext = createContext<PlanSelectionContextValue | null>(null);

export function usePlanSelection() {
  const ctx = useContext(PlanSelectionContext);
  if (!ctx) {
    throw new Error("usePlanSelection must be used within a PlanSelectionProvider");
  }
  return ctx;
}

export function PlanSelectionProvider({
  defaultTierId,
  hasComparison,
  children,
}: {
  defaultTierId?: string;
  hasComparison: boolean;
  children: React.ReactNode;
}) {
  const [selectedTierId, setSelectedTierId] = useState<string | undefined>(defaultTierId);
  const [compareOpen, setCompareOpen] = useState(false);
  const openCompare = useCallback(() => setCompareOpen(true), []);
  const closeCompare = useCallback(() => setCompareOpen(false), []);

  return (
    <PlanSelectionContext.Provider
      value={{
        selectedTierId,
        setSelectedTierId,
        hasComparison,
        compareOpen,
        openCompare,
        closeCompare,
      }}
    >
      {children}
    </PlanSelectionContext.Provider>
  );
}
