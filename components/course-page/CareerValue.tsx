import type { CareerValueContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function CareerValue({ content }: { content: CareerValueContent }) {
  return (
    <section className="mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
      <SectionHeading>{content.heading}</SectionHeading>
      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {content.items.map((i) => (
          <div key={i.title} className="flex gap-4 rounded-card border border-[#E5E7EB] bg-white p-5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
              <i.icon className="h-5 w-5 text-teal" aria-hidden />
            </div>
            <div className="min-w-0">
              <h3 className="font-heading text-[15px] font-bold text-text-dark">{i.title}</h3>
              <p className="mt-1 text-[14px] leading-relaxed text-text-medium">{i.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
