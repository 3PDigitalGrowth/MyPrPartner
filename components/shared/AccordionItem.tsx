"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
};

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`rounded-xl border bg-white px-6 py-5 transition-all ${
        open
          ? "border-l-[3px] border-l-teal border-t-[#E5E7EB] border-r-[#E5E7EB] border-b-[#E5E7EB]"
          : "border-[#E5E7EB]"
      }`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[16px] font-medium text-text-dark">{question}</span>
        <ChevronDown
          className={`h-[18px] w-[18px] shrink-0 text-[#9CA3AF] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-4 text-[15px] leading-[1.7] text-text-medium">{answer}</div>
        </div>
      </div>
    </div>
  );
}
