"use client";

import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

type NavTriggerProps = {
  id: string;
  label: string;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
};

export const NavTrigger = forwardRef<HTMLButtonElement, NavTriggerProps>(function NavTrigger(
  { id, label, isOpen, onMouseEnter, onMouseLeave, onClick, onKeyDown },
  ref
) {
  return (
    <button
      ref={ref}
      id={id}
      type="button"
      className="flex items-center gap-1 text-[15px] font-medium text-text-dark outline-none transition-colors hover:text-teal focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
      aria-expanded={isOpen}
      aria-haspopup="true"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {label}
      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden />
    </button>
  );
});
