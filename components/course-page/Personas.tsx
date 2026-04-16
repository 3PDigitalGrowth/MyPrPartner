import Image from "next/image";
import type { PersonasContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function Personas({ content }: { content: PersonasContent }) {
  return (
    <section className="mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
      <SectionHeading>{content.heading}</SectionHeading>
      <p className="mt-4 text-[16px] leading-relaxed text-text-medium">{content.intro}</p>

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {content.items.map((p) => (
          <div
            key={p.title}
            className="group overflow-hidden rounded-card border border-[#E5E7EB] bg-white transition-shadow hover:shadow-card"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={p.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <p.icon className="h-4 w-4 text-teal" aria-hidden />
                <h3 className="font-heading text-[16px] font-bold text-text-dark">{p.title}</h3>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-text-medium">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
