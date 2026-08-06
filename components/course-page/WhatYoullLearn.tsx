import type { WhatYoullLearnContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";
import { MT } from "@/components/editable";
import { useCopyId } from "./copy-base";

export default function WhatYoullLearn({ content }: { content: WhatYoullLearnContent }) {
  const cid = useCopyId();
  return (
    <section id="what-youll-learn" className="scroll-mt-28 mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>
        <MT id={cid("whatYoullLearn.eyebrow")}>{content.eyebrow}</MT>
      </SectionEyebrow>
      <SectionHeading>
        <MT id={cid("whatYoullLearn.heading")}>{content.heading}</MT>
      </SectionHeading>
      <p className="mt-4 text-[16px] leading-relaxed text-text-medium">
        <MT id={cid("whatYoullLearn.intro")}>{content.intro}</MT>
      </p>
      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {content.tiles.map((t, i) => (
          <div
            key={t.title}
            className="rounded-card border border-[#E5E7EB] bg-white p-6 transition-shadow hover:shadow-card"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10">
              <t.icon className="h-5 w-5 text-teal" aria-hidden />
            </div>
            <h3 className="mt-4 font-heading text-[17px] font-bold text-text-dark">
              <MT id={cid(`whatYoullLearn.tiles.${i}.title`)}>{t.title}</MT>
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-text-medium">
              <MT id={cid(`whatYoullLearn.tiles.${i}.body`)}>{t.body}</MT>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
