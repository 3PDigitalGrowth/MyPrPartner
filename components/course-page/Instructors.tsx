import Image from "next/image";
import type { InstructorsContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function Instructors({ content }: { content: InstructorsContent }) {
  return (
    <section id="instructors" className="scroll-mt-28 mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
      <SectionHeading>{content.heading}</SectionHeading>
      <p className="mt-4 text-[16px] leading-relaxed text-text-medium">{content.intro}</p>

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {content.items.map((i) => (
          <div key={i.name} className="rounded-card border border-[#E5E7EB] bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                <Image src={i.image} alt={i.name} fill className="object-cover object-top" sizes="80px" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-[17px] font-bold text-text-dark">{i.name}</h3>
                <p className="mt-1 text-[13px] font-medium text-teal">{i.title}</p>
              </div>
            </div>
            <div className="mt-4 text-[14px] leading-relaxed text-text-medium">{i.bio}</div>
          </div>
        ))}
      </div>
      {content.footnote ? (
        <p className="mt-4 text-[14px] text-text-medium">{content.footnote}</p>
      ) : null}
    </section>
  );
}
