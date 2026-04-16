"use client";

import type { Anchor } from "./types";
import { useActiveAnchor } from "./shared";

export default function InPageAnchorNav({ anchors }: { anchors: Anchor[] }) {
  const ids = anchors.map((a) => a.id);
  const active = useActiveAnchor(ids);
  return (
    <nav
      aria-label="Course sections"
      className="sticky top-[72px] z-30 border-b border-[#E5E7EB] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-1 overflow-x-auto py-2 no-scrollbar">
          {anchors.map((a) => (
            <li key={a.id}>
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
      </div>
    </nav>
  );
}
