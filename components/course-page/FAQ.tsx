"use client";

import type { FaqContent } from "./types";
import { FAQItem, SectionEyebrow, SectionHeading } from "./shared";

export default function FAQ({ content }: { content: FaqContent }) {
  return (
    <section id="faq" className="scroll-mt-28 mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
      <SectionHeading>{content.heading}</SectionHeading>
      <div className="mt-7 space-y-3">
        {content.items.map((f, i) => (
          <FAQItem key={typeof f.q === "string" ? f.q : i} question={f.q} answer={f.a} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}
