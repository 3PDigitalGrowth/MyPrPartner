"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Wraps a wide table in a horizontal scroller with clear "there's more to
 * the right" affordances: a mobile swipe hint and a right-edge fade that
 * both disappear once you reach the end. Pair with a sticky first column
 * (CSS on the cells) so the row labels stay pinned while the plans scroll.
 */
export default function ScrollHintTable({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canRight, setCanRight] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanRight(max > 1 && el.scrollLeft < max - 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  return (
    <div className={className}>
      <div
        className={`mb-3 flex items-center justify-center gap-1.5 text-[12px] font-medium text-teal transition-opacity duration-200 md:hidden ${
          canRight ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      >
        <Chevron dir="left" />
        Swipe to compare programs
        <Chevron dir="right" />
      </div>

      <div className="relative">
        <div ref={ref} onScroll={update} className="overflow-x-auto">
          {children}
        </div>
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 flex w-14 items-center justify-end bg-gradient-to-l from-white via-white/80 to-transparent pr-1.5 transition-opacity duration-200 ${
            canRight ? "opacity-100" : "opacity-0"
          }`}
        >
          <Chevron dir="right" />
        </div>
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-teal"
      aria-hidden
    >
      {dir === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}
