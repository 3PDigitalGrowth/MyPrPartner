import type { WhatYoullLearnContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function WhatYoullLearn({ content }: { content: WhatYoullLearnContent }) {
  return (
    <section id="what-youll-learn" className="scroll-mt-28 mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
      <SectionHeading>{content.heading}</SectionHeading>
      <p className="mt-4 text-[16px] leading-relaxed text-text-medium">{content.intro}</p>
      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {content.tiles.map((t) => (
          <div
            key={t.title}
            className="rounded-card border border-[#E5E7EB] bg-white p-6 transition-shadow hover:shadow-card"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10">
              <t.icon className="h-5 w-5 text-teal" aria-hidden />
            </div>
            <h3 className="mt-4 font-heading text-[17px] font-bold text-text-dark">{t.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-text-medium">{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
