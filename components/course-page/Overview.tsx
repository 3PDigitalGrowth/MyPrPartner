import { Check } from "lucide-react";
import type { OverviewContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function Overview({ content }: { content: OverviewContent }) {
  return (
    <section id="overview" className="scroll-mt-28 animate-fade-in-up">
      <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
      <SectionHeading>{content.heading}</SectionHeading>
      <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-text-medium">
        {content.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-7 rounded-card bg-[#F7F8FA] p-6 md:p-7">
        {content.keyLearningsTitle ? (
          <p className="font-heading text-[15px] font-semibold text-text-dark">
            {content.keyLearningsTitle}
          </p>
        ) : null}
        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {content.keyLearnings.map((l) => (
            <li key={l} className="flex items-start gap-2.5 text-[14px] text-text-medium">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" aria-hidden />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
