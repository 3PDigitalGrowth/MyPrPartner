import { Check, ChevronDown } from "lucide-react";
import type { CourseStructureContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function CourseStructure({ content }: { content: CourseStructureContent }) {
  return (
    <section id="structure" className="scroll-mt-28 mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
      <SectionHeading>{content.heading}</SectionHeading>
      <p className="mt-4 text-[16px] leading-relaxed text-text-medium">{content.intro}</p>

      <div className="mt-7 space-y-4">
        {content.groups.map((g, i) => (
          <details
            key={g.label}
            className="group rounded-card border border-[#E5E7EB] bg-white open:shadow-card"
            open={i === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <div className="min-w-0">
                <p className="font-heading text-[16px] font-bold text-text-dark md:text-[17px]">
                  {g.label}
                </p>
                <p className="mt-0.5 text-[13px] text-text-medium">{g.count}</p>
              </div>
              <ChevronDown
                className="h-5 w-5 flex-shrink-0 text-text-medium transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <div className="border-t border-[#F1F2F5] px-6 py-5">
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-text-medium">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
