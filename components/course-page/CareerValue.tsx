import type { CareerValueContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";
import { MT } from "@/components/editable";
import { useCopyId } from "./copy-base";

export default function CareerValue({ content }: { content: CareerValueContent }) {
  const cid = useCopyId();
  return (
    <section className="mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>
        <MT id={cid("careerValue.eyebrow")}>{content.eyebrow}</MT>
      </SectionEyebrow>
      <SectionHeading>
        <MT id={cid("careerValue.heading")}>{content.heading}</MT>
      </SectionHeading>
      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {content.items.map((i, idx) => (
          <div key={i.title} className="flex gap-4 rounded-card border border-[#E5E7EB] bg-white p-5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
              <i.icon className="h-5 w-5 text-teal" aria-hidden />
            </div>
            <div className="min-w-0">
              <h3 className="font-heading text-[15px] font-bold text-text-dark">
                <MT id={cid(`careerValue.items.${idx}.title`)}>{i.title}</MT>
              </h3>
              <p className="mt-1 text-[14px] leading-relaxed text-text-medium">
                <MT id={cid(`careerValue.items.${idx}.body`)}>{i.body}</MT>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
