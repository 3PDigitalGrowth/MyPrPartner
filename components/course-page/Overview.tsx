import { Check } from "lucide-react";
import type { OverviewContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";
import { MT } from "@/components/editable";
import { useCopyId } from "./copy-base";

export default function Overview({ content }: { content: OverviewContent }) {
  const cid = useCopyId();
  return (
    <section id="overview" className="scroll-mt-28 animate-fade-in-up">
      <SectionEyebrow>
        <MT id={cid("overview.eyebrow")}>{content.eyebrow}</MT>
      </SectionEyebrow>
      <SectionHeading>
        <MT id={cid("overview.heading")}>{content.heading}</MT>
      </SectionHeading>
      <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-text-medium">
        {content.paragraphs.map((p, i) =>
          typeof p === "string" ? (
            <p key={i}>
              <MT id={cid(`overview.paragraphs.${i}`)}>{p}</MT>
            </p>
          ) : (
            <div key={i}>{p}</div>
          )
        )}
      </div>

      <div className="mt-7 rounded-card bg-[#F7F8FA] p-6 md:p-7">
        {content.keyLearningsTitle ? (
          <p className="font-heading text-[15px] font-semibold text-text-dark">
            <MT id={cid("overview.keyLearningsTitle")}>{content.keyLearningsTitle}</MT>
          </p>
        ) : null}
        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {content.keyLearnings.map((l, i) => (
            <li key={l} className="flex items-start gap-2.5 text-[14px] text-text-medium">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" aria-hidden />
              <span>
                <MT id={cid(`overview.keyLearnings.${i}`)}>{l}</MT>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
