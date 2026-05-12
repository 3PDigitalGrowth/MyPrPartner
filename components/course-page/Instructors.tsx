import Image from "next/image";
import type { InstructorsContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function Instructors({ content }: { content: InstructorsContent }) {
  const isSingle = content.items.length === 1;

  return (
    <section id="instructors" className="scroll-mt-28 mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
      <SectionHeading>{content.heading}</SectionHeading>
      <p className="mt-4 text-[16px] leading-relaxed text-text-medium">{content.intro}</p>

      {isSingle ? (
        <div className="mt-7">
          {content.items.map((i) => (
            <div
              key={i.name}
              className="overflow-hidden rounded-card border border-[#E5E7EB] bg-white"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr]">
                <div className="relative aspect-square w-full sm:aspect-auto sm:h-full sm:min-h-[240px]">
                  <Image
                    src={i.image}
                    alt={i.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 640px) 200px, 100vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-teal">
                    Lead presenter
                  </div>
                  <h3 className="mt-3 font-heading text-[22px] font-bold leading-tight text-text-dark">
                    {i.name}
                  </h3>
                  <p className="mt-1.5 text-[14px] font-medium text-text-medium">
                    {i.title}
                  </p>
                  <div className="mt-4 text-[14.5px] leading-relaxed text-text-medium">
                    {i.bio}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
      )}

      {content.footnote ? (
        <p className="mt-4 text-[14px] italic text-text-medium">{content.footnote}</p>
      ) : null}
    </section>
  );
}
