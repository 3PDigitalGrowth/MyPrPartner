"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
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

export function useActiveAnchor(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const handler = () => {
      const offset = 200;
      const isDesktop = desktopQuery.matches;
      // On desktop, "pricing" anchors the sticky sidebar at the top of the
      // body grid, so exclude it from the normal scroll loop and only light
      // it up once the user has scrolled past the last content section. On
      // mobile the card sits mid-page after CareerValue, so treat it like any
      // other section.
      const sectionIds =
        isDesktop && ids.includes("pricing") ? ids.filter((id) => id !== "pricing") : [...ids];
      let current = sectionIds[0] ?? ids[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = id;
      }
      if (isDesktop && ids.includes("pricing")) {
        const desktopSectionIds = ids.filter((id) => id !== "pricing");
        const lastSectionId = desktopSectionIds[desktopSectionIds.length - 1];
        const lastEl = lastSectionId ? document.getElementById(lastSectionId) : null;
        if (lastEl) {
          const lastBottom = lastEl.getBoundingClientRect().bottom;
          if (lastBottom - offset <= 0) current = "pricing";
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    desktopQuery.addEventListener("change", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
      desktopQuery.removeEventListener("change", handler);
    };
  }, [ids]);
  return active;
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-teal">{children}</p>
  );
}

export function SectionHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-32 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[32px]"
    >
      {children}
    </h2>
  );
}

export function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-card border border-[#E5E7EB] bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 px-6 py-5 text-left"
      >
        <span className="font-heading text-[15px] font-semibold text-text-dark md:text-[16px]">
          {question}
        </span>
        <ChevronDown
          className={`mt-1 h-4 w-4 flex-shrink-0 text-text-medium transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <div className="px-6 pb-6 text-[14px] leading-relaxed text-text-medium">{answer}</div>
        </div>
      </div>
    </div>
  );
}
