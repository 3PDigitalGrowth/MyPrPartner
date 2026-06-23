"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { MobileBarContent } from "./types";
import { useWaitlistModal } from "./WaitlistModal";

const CTA_CLASS =
  "inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal";

function scrollToPricingCard() {
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useShowMobileEnrolBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handler = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const past = window.innerHeight * 0.7;
      const nearBottom = total - scrolled < 160;
      setShow(scrolled > past && !nearBottom);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);
  return show;
}

export default function MobileEnrolBar({ bar }: { bar: MobileBarContent }) {
  const show = useShowMobileEnrolBar();
  const waitlist = useWaitlistModal();
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#E5E7EB] bg-white/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal">{bar.label}</p>
          <p className="font-heading text-[14px] font-semibold text-text-dark">{bar.priceShort}</p>
        </div>
        {waitlist.enabled ? (
          <button
            type="button"
            onClick={waitlist.open}
            tabIndex={show ? 0 : -1}
            className={CTA_CLASS}
          >
            {bar.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        ) : (
          <button
            type="button"
            onClick={scrollToPricingCard}
            tabIndex={show ? 0 : -1}
            className={CTA_CLASS}
          >
            {bar.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        )}
      </div>
    </div>
  );
}
