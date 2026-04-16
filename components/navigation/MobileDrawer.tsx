"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import {
  X,
  ChevronDown,
  Phone,
  Mail,
  ExternalLink,
  UserCircle,
  ArrowRight,
  Sparkles,
  ArrowRight as ArrowRightIcon,
} from "lucide-react";
import { DropdownLink } from "./DropdownLink";
import {
  programsBySector,
  aboutLinks,
  resourceLinks,
  crisisMasterclassProgramLink,
} from "./nav-data";
import { FlagshipBadge, FreeBadge } from "./badges";

function SocialLinkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function SocialFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function SocialInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
    </svg>
  );
}

const SOCIAL = [
  { href: "https://www.linkedin.com/company/my-pr-partner", label: "LinkedIn", Icon: SocialLinkedin },
  { href: "https://www.facebook.com/people/My-PR-Partner/100093729961913/", label: "Facebook", Icon: SocialFacebook },
  { href: "https://www.instagram.com/myprpartner/", label: "Instagram", Icon: SocialInstagram },
] as const;

type Section = "programs" | "about" | "resources" | null;

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  expanded: Section;
  setExpanded: Dispatch<SetStateAction<Section>>;
};

export function MobileDrawer({ open, onClose, expanded, setExpanded }: MobileDrawerProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!open) {
      setEntered(false);
      return;
    }
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  function toggle(section: Exclude<Section, null>) {
    setExpanded((prev) => (prev === section ? null : section));
  }

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-white transition-transform duration-300 ease-out lg:hidden ${
        entered ? "translate-x-0" : "translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      <div className="flex shrink-0 items-center justify-between border-b border-[#E5E7EB] px-5 py-5">
        <Link href="/" onClick={onClose}>
          <Image src="/logo.png" alt="My PR Partner" width={200} height={65} className="h-10 w-auto" />
        </Link>
        <button type="button" className="p-2 text-text-dark outline-none focus-visible:ring-2 focus-visible:ring-teal" onClick={onClose} aria-label="Close menu">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="shrink-0 bg-bg-grey px-5 py-5">
        <a href="tel:1300000000" className="flex items-center gap-2 text-[14px] text-text-dark">
          <Phone className="h-4 w-4 text-teal" aria-hidden />
          1300 XXX XXX
        </a>
        <a href="mailto:info@myprpartner.com" className="mt-3 flex items-center gap-2 text-[14px] text-text-dark">
          <Mail className="h-4 w-4 text-teal" aria-hidden />
          info@myprpartner.com
        </a>
        <a href="#" className="mt-3 flex items-center justify-between text-[14px] text-text-dark">
          <span className="flex items-center gap-2">
            <UserCircle className="h-4 w-4 text-teal" aria-hidden />
            Member Login
          </span>
          <ExternalLink className="h-4 w-4 text-text-medium" aria-hidden />
        </a>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-48">
        <MobileRow
          label="Online Courses & Programs"
          isExpandable
          expanded={expanded === "programs"}
          onToggle={() => toggle("programs")}
        />
        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded === "programs" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="space-y-3 border-b border-[#F7F8FA] py-3 pl-4">
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">Programs by sector</p>
              {programsBySector.map((item) => (
                <DropdownLink key={item.href} {...item} variant="plain" onNavigate={onClose} />
              ))}
              <p className="pt-2 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">Specialist programs</p>
              <DropdownLink
                href={crisisMasterclassProgramLink.href}
                icon={crisisMasterclassProgramLink.icon}
                label={crisisMasterclassProgramLink.label}
                descriptor={crisisMasterclassProgramLink.descriptor}
                badge={<FlagshipBadge />}
                variant="plain"
                onNavigate={onClose}
              />
              <div className="rounded-xl bg-bg-grey p-5">
                <div className="flex items-center gap-2 text-teal">
                  <Sparkles className="h-4 w-4" aria-hidden />
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em]">Coming soon</span>
                </div>
                <p className="mt-2 text-[14px] font-medium text-text-dark">New courses launching soon</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-text-medium">
                  Standalone courses on LinkedIn strategy, media training, personal branding and more.
                </p>
                <Link href="/waitlist" className="mt-3 inline-block text-[13px] font-medium text-teal" onClick={onClose}>
                  Join the waitlist →
                </Link>
              </div>
              <ProgramsFeaturedMobile onNavigate={onClose} />
              <div className="border-t border-[#E5E7EB] pt-4 text-[13px] text-text-medium">
                <p>Not sure which program fits your organisation?</p>
                <div className="mt-2 flex flex-col gap-2">
                  <Link href="/contact" className="font-medium text-teal" onClick={onClose}>
                    Book a call with our team →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileStandalone href="/crisis-masterclass" label="Crisis Masterclass" onNavigate={onClose} showDot />

        <MobileRow label="Resources" isExpandable expanded={expanded === "resources"} onToggle={() => toggle("resources")} />
        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded === "resources" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="space-y-3 border-b border-[#F7F8FA] py-3 pl-4">
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">Resources & learning</p>
              {resourceLinks.map((item) => (
                <DropdownLink
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  descriptor={item.descriptor}
                  badge={item.badges?.includes("free") ? <FreeBadge /> : undefined}
                  variant="plain"
                  onNavigate={onClose}
                />
              ))}
              <ResourcesLeadMobile onNavigate={onClose} />
              <div className="border-t border-[#E5E7EB] pt-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[13px]">
                  <span className="text-text-medium">Looking for something specific?</span>
                  <Link href="/contact" className="font-medium text-teal" onClick={onClose}>
                    Contact us →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileRow label="About" isExpandable expanded={expanded === "about"} onToggle={() => toggle("about")} />
        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded === "about" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="space-y-3 border-b border-[#F7F8FA] py-3 pl-4">
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">About My PR Partner</p>
              {aboutLinks.map((item) => (
                <DropdownLink key={item.href} {...item} variant="plain" onNavigate={onClose} />
              ))}
              <div className="border-t border-[#E5E7EB] pt-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[12px] font-medium text-[#9CA3AF]">Powered by CRC Public Relations</span>
                  <a
                    href="https://crcpr.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[12px] font-medium text-teal"
                  >
                    Visit CRC PR
                    <ExternalLink className="h-3 w-3" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileStandalone href="/contact" label="Contact" onNavigate={onClose} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-[101] border-t border-[#E5E7EB] bg-white px-5 py-5">
        <Link
          href="/programs"
          className="flex w-full items-center justify-center rounded-full bg-teal py-3 text-[16px] font-medium text-white outline-none transition-colors hover:bg-teal-dark focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          onClick={onClose}
        >
          Explore Programs
        </Link>
        <div className="mt-4 flex justify-center gap-4">
          {SOCIAL.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#9CA3AF] outline-none transition-colors hover:text-teal focus-visible:ring-2 focus-visible:ring-teal"
            >
              <Icon className="h-5 w-5 text-current" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileRow({
  label,
  isExpandable,
  expanded,
  onToggle,
}: {
  label: string;
  isExpandable: boolean;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between border-b border-[#F7F8FA] py-4 text-left font-heading text-[18px] font-medium text-text-dark outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-inset"
      onClick={onToggle}
      aria-expanded={isExpandable ? expanded : undefined}
    >
      {label}
      {isExpandable ? <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} aria-hidden /> : null}
    </button>
  );
}

function MobileStandalone({
  href,
  label,
  onNavigate,
  showDot,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
  showDot?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between border-b border-[#F7F8FA] py-4 font-heading text-[18px] font-medium text-text-dark outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-inset"
      onClick={onNavigate}
    >
      <span className="relative inline-flex items-center">
        {label}
        {showDot ? (
          <span className="flagship-indicator absolute -right-2 -top-1 h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
        ) : null}
      </span>
      <ArrowRight className="h-5 w-5 shrink-0 text-text-medium" aria-hidden />
    </Link>
  );
}

function ProgramsFeaturedMobile({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="relative min-h-[200px] overflow-hidden rounded-2xl bg-text-dark">
      <Image src="/images/hero-masterclass.jpg" alt="" fill className="object-cover" sizes="100vw" />
      <div
        className="absolute inset-0 flex flex-col justify-between p-6"
        style={{
          background: "linear-gradient(135deg, rgba(7, 175, 187, 0.88) 0%, rgba(30, 115, 190, 0.8) 100%)",
        }}
      >
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white">Most popular</p>
          <p className="mt-3 font-heading text-2xl font-bold leading-tight text-white">Crisis Masterclass</p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/90">
            12-month expert-led program featuring the exclusive Crisis Ready® course with Melissa Agnes. Built for Australia&apos;s communications professionals and business leaders.
          </p>
        </div>
        <Link
          href="/crisis-masterclass"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-[14px] font-medium text-teal outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={onNavigate}
        >
          Explore Masterclass
          <ArrowRightIcon className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}

function ResourcesLeadMobile({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="rounded-xl bg-bg-grey p-6 text-center">
      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-teal">Most popular download</p>
      <GuideMockupSmall />
      <p className="mt-4 font-heading text-base font-bold leading-snug text-text-dark">Free PR & Crisis Readiness Guide</p>
      <p className="mt-2 text-[13px] leading-relaxed text-text-medium">
        5 steps to building a stronger public profile and protecting your reputation.
      </p>
      <Link
        href="/resources/pr-guide"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-teal py-2.5 text-[13px] font-medium text-white"
        onClick={onNavigate}
      >
        Download Free
        <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden />
      </Link>
    </div>
  );
}

function GuideMockupSmall() {
  return (
    <div className="mx-auto mt-3 flex h-[140px] w-[120px] items-center justify-center rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
      <div className="px-2 text-center">
        <p className="font-heading text-[10px] font-bold text-teal">My PR Partner</p>
        <p className="mt-1 text-[11px] font-medium text-text-dark">PR Guide</p>
      </div>
    </div>
  );
}
