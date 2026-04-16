"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type DropdownLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  descriptor: string;
  badge?: React.ReactNode;
  onNavigate?: () => void;
  /** Row hover: icon circle + label slide (Programs / About / Resources columns) */
  variant?: "row-hover" | "plain";
  target?: string;
  rel?: string;
};

export function DropdownLink({
  href,
  icon: Icon,
  label,
  descriptor,
  badge,
  onNavigate,
  variant = "row-hover",
  target,
  rel,
}: DropdownLinkProps) {
  const inner = (
    <>
      <span
        className={
          variant === "row-hover"
            ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0FDFD] text-teal transition-all duration-200 ease-out group-hover:bg-teal group-hover:text-white"
            : "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0FDFD] text-teal"
        }
        aria-hidden
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-x-2">
          <span
            className={
              variant === "row-hover"
                ? "text-[15px] font-medium text-text-dark transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:text-teal"
                : "text-[15px] font-medium text-text-dark"
            }
          >
            {label}
          </span>
          {badge}
        </span>
        <span className="mt-0.5 block text-[13px] font-normal leading-snug text-text-medium">{descriptor}</span>
      </span>
    </>
  );

  const className =
    variant === "row-hover"
      ? "group flex gap-4 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
      : "flex gap-4 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2";

  if (target) {
    return (
      <a href={href} className={className} target={target} rel={rel} onClick={onNavigate} role="menuitem">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onNavigate} role="menuitem">
      {inner}
    </Link>
  );
}
