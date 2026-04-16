"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqCardProps = {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
};

export function FaqCard({ question, answer, defaultOpen = false }: FaqCardProps) {
  const [expanded, setExpanded] = useState(defaultOpen);

  return (
    <div className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-shadow hover:shadow-md">
      <h3 className="text-[15px] font-semibold leading-snug text-text-dark">
        {question}
      </h3>

      <div className="relative mt-3 flex-1">
        <div
          className={`text-[14px] leading-[1.65] text-text-medium transition-all duration-300 ease-in-out ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {answer}
        </div>

        {!expanded && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mt-3 inline-flex items-center gap-1 self-start text-[13px] font-medium text-teal transition-colors hover:text-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Read more"}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}
