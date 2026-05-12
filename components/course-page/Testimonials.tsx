import type { TestimonialsContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function Testimonials({ content }: { content: TestimonialsContent }) {
  return (
    <section className="mt-14 animate-fade-in-up md:mt-16">
      <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
      <SectionHeading>{content.heading}</SectionHeading>
      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
        {content.items.map((q, i) => {
          const meta = [q.title, q.org].filter(Boolean).join(", ");
          return (
            <div key={`${q.name || "testimonial"}-${i}`} className="rounded-card bg-[#F7F8FA] p-6">
              <span aria-hidden className="mb-2 block font-heading text-[40px] leading-none text-teal/25">
                &ldquo;
              </span>
              <p className="text-[14px] italic leading-relaxed text-text-medium">{q.quote}</p>
              <div className="mt-5">
                {q.name ? (
                  <p className="text-[14px] font-semibold text-text-dark">{q.name}</p>
                ) : null}
                {meta ? <p className="text-[13px] text-text-medium">{meta}</p> : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
