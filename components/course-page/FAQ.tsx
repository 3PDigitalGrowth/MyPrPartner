"use client";

import type { FaqContent } from "./types";
import { FAQItem, SectionEyebrow, SectionHeading } from "./shared";
import { MT, copyText } from "@/components/editable";
import { useCopyId } from "./copy-base";

export default function FAQ({ content }: { content: FaqContent }) {
  const cid = useCopyId();
  return (
    <section id="faq" className="scroll-mt-28 mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>
        <MT id={cid("faq.eyebrow")}>{content.eyebrow}</MT>
      </SectionEyebrow>
      <SectionHeading>
        <MT id={cid("faq.heading")}>{content.heading}</MT>
      </SectionHeading>
      <div className="mt-7 space-y-3">
        {content.items.map((f, i) => {
          // FAQItem.question (shared.tsx) is typed as a plain string, so it
          // can't take the <MT> element directly; copyText resolves the same
          // CMS override id but returns a string, matching that prop type.
          const qId = cid(`faq.items.${i}.q`);
          const question = qId ? copyText(qId, f.q) : f.q;
          return (
            <FAQItem
              key={typeof f.q === "string" ? f.q : i}
              question={question}
              answer={
                typeof f.a === "string" ? (
                  <MT id={cid(`faq.items.${i}.a`)}>{f.a}</MT>
                ) : (
                  f.a
                )
              }
              defaultOpen={i === 0}
            />
          );
        })}
      </div>
    </section>
  );
}
