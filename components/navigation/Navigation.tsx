"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Menu,
} from "lucide-react";
import { NavTrigger } from "./NavTrigger";
import { DropdownLink } from "./DropdownLink";
import { MobileDrawer } from "./MobileDrawer";
import { useReducedMotion } from "./useReducedMotion";
import {
  programsBySector,
  aboutLinks,
  resourceLinks,
  crisisMasterclassProgramLink,
} from "./nav-data";
import { FlagshipBadge, FreeBadge } from "./badges";

export type OpenDropdown = "programs" | "about" | "resources" | null;

export default function Navigation() {
  const reducedMotion = useReducedMotion();
  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [displayed, setDisplayed] = useState<Exclude<OpenDropdown, null> | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"programs" | "about" | "resources" | null>(null);

  const openTimer = useRef<ReturnType<typeof setTimeout>>();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const programsTriggerRef = useRef<HTMLButtonElement>(null);
  const aboutTriggerRef = useRef<HTMLButtonElement>(null);
  const resourcesTriggerRef = useRef<HTMLButtonElement>(null);

  const programsPanelRef = useRef<HTMLDivElement>(null);
  const aboutPanelRef = useRef<HTMLDivElement>(null);
  const resourcesPanelRef = useRef<HTMLDivElement>(null);

  /** Only clears the delayed close — never the pending open (hover uses a 150ms open delay). */
  const cancelPendingClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = undefined;
    }
  }, []);

  const scheduleOpen = useCallback(
    (key: Exclude<OpenDropdown, null>) => {
      cancelPendingClose();
      if (openTimer.current) {
        clearTimeout(openTimer.current);
        openTimer.current = undefined;
      }
      openTimer.current = setTimeout(() => {
        setOpenDropdown(key);
      }, 150);
    },
    [cancelPendingClose]
  );

  const scheduleClose = useCallback(() => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = undefined;
    }
    cancelPendingClose();
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  }, [cancelPendingClose]);

  useEffect(() => {
    if (openDropdown) {
      setDisplayed(openDropdown);
      if (reducedMotion) {
        setPanelOpen(true);
      } else {
        requestAnimationFrame(() => setPanelOpen(true));
      }
    } else {
      setPanelOpen(false);
    }
  }, [openDropdown, reducedMotion]);

  useEffect(() => {
    if (!panelOpen && displayed) {
      const ms = reducedMotion ? 0 : 150;
      const id = setTimeout(() => setDisplayed(null), ms);
      return () => clearTimeout(id);
    }
  }, [panelOpen, displayed, reducedMotion]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navShellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape" || !openDropdown) return;
      e.preventDefault();
      const ref =
        openDropdown === "programs"
          ? programsTriggerRef
          : openDropdown === "about"
            ? aboutTriggerRef
            : resourcesTriggerRef;
      setOpenDropdown(null);
      queueMicrotask(() => ref.current?.focus());
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openDropdown]);

  useEffect(() => {
    if (!openDropdown) return;
    function onDocMouseDown(e: MouseEvent) {
      const shell = navShellRef.current;
      if (!shell || shell.contains(e.target as Node)) return;
      setOpenDropdown(null);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [openDropdown]);

  useEffect(() => {
    if (!openDropdown) return;
    function onTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const panel =
        openDropdown === "programs"
          ? programsPanelRef.current
          : openDropdown === "about"
            ? aboutPanelRef.current
            : resourcesPanelRef.current;
      if (!panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")).filter(
        (el) => el.tabIndex !== -1
      );
      if (items.length === 0) return;
      const active = document.activeElement as HTMLElement | null;
      const idx = items.indexOf(active as HTMLElement);
      if (idx === -1) return;
      if (e.shiftKey) {
        if (idx === 0) {
          e.preventDefault();
          items[items.length - 1]?.focus();
        }
      } else if (idx === items.length - 1) {
        e.preventDefault();
        items[0]?.focus();
      }
    }
    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [openDropdown]);

  function handlePanelKeyDown(e: React.KeyboardEvent, panelRef: React.RefObject<HTMLDivElement | null>) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    const root = panelRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(
      (el) => el.tabIndex !== -1
    );
    if (items.length === 0) return;
    e.preventDefault();
    const active = document.activeElement as HTMLElement | null;
    let idx = items.indexOf(active as HTMLElement);
    if (idx === -1) idx = 0;
    if (e.key === "ArrowDown") {
      items[(idx + 1) % items.length]?.focus();
    } else {
      items[(idx - 1 + items.length) % items.length]?.focus();
    }
  }

  function onDesktopTriggerClick(key: Exclude<OpenDropdown, null>) {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }

  const animClass =
    panelOpen && openDropdown
      ? reducedMotion
        ? "opacity-100 translate-y-0"
        : "opacity-100 translate-y-0 transition-all duration-200 ease-out"
      : reducedMotion
        ? "opacity-0 -translate-y-2 pointer-events-none"
        : "opacity-0 -translate-y-2 pointer-events-none transition-all duration-150 ease-in";

  return (
    <>
      <div ref={navShellRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="My PR Partner" width={200} height={65} priority className="h-[65px] w-auto" />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-7">
            <div
              className="relative z-[46]"
              onMouseEnter={() => scheduleOpen("programs")}
              onMouseLeave={scheduleClose}
            >
              <NavTrigger
                ref={programsTriggerRef}
                id="nav-trigger-programs"
                label="Online Courses & Programs"
                isOpen={openDropdown === "programs"}
                onMouseEnter={cancelPendingClose}
                onMouseLeave={() => {}}
                onClick={() => onDesktopTriggerClick("programs")}
              />
            </div>

            <div className="relative z-[45]" onMouseEnter={() => scheduleOpen("resources")} onMouseLeave={scheduleClose}>
              <NavTrigger
                ref={resourcesTriggerRef}
                id="nav-trigger-resources"
                label="Resources"
                isOpen={openDropdown === "resources"}
                onMouseEnter={cancelPendingClose}
                onMouseLeave={() => {}}
                onClick={() => onDesktopTriggerClick("resources")}
              />
            </div>

            <div className="relative z-[45]" onMouseEnter={() => scheduleOpen("about")} onMouseLeave={scheduleClose}>
              <NavTrigger
                ref={aboutTriggerRef}
                id="nav-trigger-about"
                label="About"
                isOpen={openDropdown === "about"}
                onMouseEnter={cancelPendingClose}
                onMouseLeave={() => {}}
                onClick={() => onDesktopTriggerClick("about")}
              />
            </div>

            <Link
              href="/contact"
              className="rounded-full border border-teal bg-transparent px-[18px] py-2 text-[14px] font-medium text-teal transition-all duration-200 ease-out hover:bg-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              Contact
            </Link>

            <Link
              href="/programs"
              className="rounded-full bg-teal px-5 py-2 text-[14px] font-medium text-white transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              Explore Programs
            </Link>
          </div>

          <button
            type="button"
            className="p-2 text-text-dark lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {displayed === "programs" && (
          <div
            className="absolute left-0 right-0 top-full z-40 -mt-px hidden lg:block"
            onMouseEnter={() => {
              cancelPendingClose();
              setOpenDropdown("programs");
            }}
            onMouseLeave={scheduleClose}
          >
            <div
              ref={programsPanelRef}
              role="menu"
              className={`rounded-b-2xl bg-white px-8 pb-8 pt-8 shadow-[0_12px_32px_rgba(0,0,0,0.08)] ${animClass}`}
              onKeyDown={(e) => handlePanelKeyDown(e, programsPanelRef)}
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
                <div>
                  <p className="mb-5 font-heading text-[13px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">Programs by sector</p>
                  <div className="flex flex-col gap-4">
                    {programsBySector.map((item) => (
                      <DropdownLink key={item.href} {...item} onNavigate={() => setOpenDropdown(null)} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-5 font-heading text-[13px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">Specialist programs</p>
                  <DropdownLink
                    href={crisisMasterclassProgramLink.href}
                    icon={crisisMasterclassProgramLink.icon}
                    label={crisisMasterclassProgramLink.label}
                    descriptor={crisisMasterclassProgramLink.descriptor}
                    badge={<FlagshipBadge />}
                    onNavigate={() => setOpenDropdown(null)}
                  />
                  <div className="mt-5 rounded-xl bg-bg-grey p-5">
                    <div className="flex items-center gap-2 text-teal">
                      <Sparkles className="h-4 w-4" aria-hidden />
                      <span className="text-[10px] font-medium uppercase tracking-[0.12em]">Coming soon</span>
                    </div>
                    <p className="mt-2 text-[14px] font-medium text-text-dark">New courses launching soon</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-text-medium">
                      Standalone courses on LinkedIn strategy, media training, personal branding and more.
                    </p>
                    <Link
                      href="/waitlist"
                      className="mt-3 inline-block text-[13px] font-medium text-teal outline-none focus-visible:ring-2 focus-visible:ring-teal"
                      onClick={() => setOpenDropdown(null)}
                      role="menuitem"
                    >
                      Join the waitlist →
                    </Link>
                  </div>
                </div>
                <ProgramsFeaturedCard onNavigate={() => setOpenDropdown(null)} />
              </div>
              <div className="mt-8 border-t border-[#E5E7EB] pt-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[14px] text-text-medium">Not sure which program fits your organisation?</p>
                  <div className="flex flex-wrap items-center gap-2 text-[14px] font-medium">
                    <Link href="/contact" className="text-teal hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal" onClick={() => setOpenDropdown(null)} role="menuitem">
                      Book a call with our team →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {displayed === "about" && (
          <div
            className="absolute top-full z-40 -mt-px hidden w-[320px] lg:block"
            style={{
              left: aboutTriggerRef.current && navShellRef.current
                ? `${aboutTriggerRef.current.getBoundingClientRect().left - navShellRef.current.getBoundingClientRect().left}px`
                : "0",
            }}
            onMouseEnter={() => {
              cancelPendingClose();
              setOpenDropdown("about");
            }}
            onMouseLeave={scheduleClose}
          >
            <div
              ref={aboutPanelRef}
              role="menu"
              className={`rounded-b-xl bg-white px-6 pb-6 pt-6 shadow-[0_12px_32px_rgba(0,0,0,0.08)] ${animClass}`}
              onKeyDown={(e) => handlePanelKeyDown(e, aboutPanelRef)}
            >
              <p className="mb-4 font-heading text-[13px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">About My PR Partner</p>
              <div className="flex flex-col gap-3.5">
                {aboutLinks.map((item) => (
                  <DropdownLink key={item.href} {...item} onNavigate={() => setOpenDropdown(null)} />
                ))}
              </div>
              <div className="mt-5 border-t border-[#E5E7EB] pt-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[12px] font-medium text-[#9CA3AF]">Powered by CRC Public Relations</span>
                  <a
                    href="https://crcpr.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[12px] font-medium text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                    role="menuitem"
                  >
                    Visit CRC PR
                    <ExternalLink className="h-3 w-3" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {displayed === "resources" && (
          <div
            className="absolute top-full z-40 -mt-px hidden w-[min(640px,calc(100vw-3rem))] lg:block"
            style={{
              left: resourcesTriggerRef.current && navShellRef.current
                ? `${resourcesTriggerRef.current.getBoundingClientRect().left - navShellRef.current.getBoundingClientRect().left}px`
                : "0",
            }}
            onMouseEnter={() => {
              cancelPendingClose();
              setOpenDropdown("resources");
            }}
            onMouseLeave={scheduleClose}
          >
            <div
              ref={resourcesPanelRef}
              role="menu"
              className={`rounded-b-2xl bg-white px-6 pb-6 pt-6 shadow-[0_12px_32px_rgba(0,0,0,0.08)] ${animClass}`}
              onKeyDown={(e) => handlePanelKeyDown(e, resourcesPanelRef)}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-4 font-heading text-[13px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">Resources & learning</p>
                  <div className="flex flex-col gap-4">
                    {resourceLinks.map((item) => (
                      <DropdownLink
                        key={item.href}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                        descriptor={item.descriptor}
                        badge={item.badges?.includes("free") ? <FreeBadge /> : undefined}
                        onNavigate={() => setOpenDropdown(null)}
                      />
                    ))}
                  </div>
                </div>
                <ResourcesLeadCard onNavigate={() => setOpenDropdown(null)} />
              </div>
              <div className="mt-5 border-t border-[#E5E7EB] pt-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[13px] text-text-medium">Looking for something specific?</span>
                  <Link
                    href="/contact"
                    className="text-[13px] font-medium text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                    onClick={() => setOpenDropdown(null)}
                    role="menuitem"
                  >
                    Contact us →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false);
          setMobileExpanded(null);
        }}
        expanded={mobileExpanded}
        setExpanded={setMobileExpanded}
      />
    </>
  );
}

function ProgramsFeaturedCard({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl text-white">
      <Image src="/images/hero-masterclass.jpg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 320px, 100vw" />
      <div
        className="absolute inset-0 flex flex-col justify-between p-8"
        style={{
          background: "linear-gradient(135deg, rgba(7, 175, 187, 0.88) 0%, rgba(30, 115, 190, 0.8) 100%)",
        }}
      >
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em]">Most popular</p>
          <p className="mt-3 font-heading text-2xl font-bold leading-tight">Crisis Masterclass</p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/90">
            12-month expert-led program featuring the exclusive Crisis Ready® course with Melissa Agnes. Built for Australia&apos;s communications professionals and business leaders.
          </p>
        </div>
        <Link
          href="/crisis-masterclass"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-[14px] font-medium text-teal transition-colors hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={onNavigate}
          role="menuitem"
        >
          Explore Masterclass
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}

function ResourcesLeadCard({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex flex-col rounded-xl bg-bg-grey p-6 text-center">
      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-teal">Most popular download</p>
      <div className="mx-auto mt-3 flex h-[140px] w-[120px] items-center justify-center rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
        <div className="px-2 text-center">
          <p className="font-heading text-[10px] font-bold text-teal">My PR Partner</p>
          <p className="mt-1 text-[11px] font-medium text-text-dark">PR Guide</p>
        </div>
      </div>
      <p className="mt-4 font-heading text-base font-bold leading-snug text-text-dark">Free PR & Crisis Readiness Guide</p>
      <p className="mt-2 text-[13px] leading-relaxed text-text-medium">
        5 steps to building a stronger public profile and protecting your reputation.
      </p>
      <Link
        href="/resources/pr-guide"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-teal py-2.5 text-[13px] font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        onClick={onNavigate}
        role="menuitem"
      >
        Download Free
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    </div>
  );
}
