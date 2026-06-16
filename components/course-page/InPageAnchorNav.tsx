"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Anchor } from "./types";
import { useActiveAnchor } from "./shared";

export default function InPageAnchorNav({ anchors }: { anchors: Anchor[] }) {
  const ids = anchors.map((a) => a.id);
  const active = useActiveAnchor(ids);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const activeRef = useRef<HTMLLIElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  // Show the left/right fade hints only when there is actually more to scroll.
  const updateHints = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 1);
    setCanRight(el.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    updateHints();
    window.addEventListener("resize", updateHints);
    return () => window.removeEventListener("resize", updateHints);
  }, [updateHints, anchors.length]);

  // As the page scrolls and the active section changes, slide the strip
  // horizontally so the active pill stays in view (horizontal scroll only,
  // never the page). This is what makes the bar "follow" you on mobile.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const li = activeRef.current;
    if (!scroller || !li) return;
    const liLeft = li.getBoundingClientRect().left - scroller.getBoundingClientRect().left + scroller.scrollLeft;
    const target = liLeft - scroller.clientWidth / 2 + li.offsetWidth / 2;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    scroller.scrollTo({ left: Math.max(0, Math.min(target, maxScroll)), behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="Course sections"
      className="sticky top-[72px] z-30 border-b border-[#E5E7EB] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          ref={scrollerRef}
          onScroll={updateHints}
          className="flex gap-1 overflow-x-auto py-2 no-scrollbar"
        >
          {anchors.map((a) => (
            <li key={a.id} ref={active === a.id ? activeRef : undefined}>
              <a
                href={`#${a.id}`}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  active === a.id
                    ? "bg-teal text-white"
                    : "text-text-medium hover:bg-[#F7F8FA] hover:text-text-dark"
                }`}
              >
                {a.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Edge fades: a soft cue that the strip scrolls sideways for the
            sections that don't fit on narrow screens. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 left-0 flex items-center bg-gradient-to-r from-white via-white/85 to-transparent pl-4 pr-6 transition-opacity duration-200 sm:pl-6 lg:pl-8 ${
            canLeft ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronLeft />
        </div>
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end bg-gradient-to-l from-white via-white/85 to-transparent pl-6 pr-4 transition-opacity duration-200 sm:pr-6 lg:pr-8 ${
            canRight ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronRight />
        </div>
      </div>
    </nav>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
