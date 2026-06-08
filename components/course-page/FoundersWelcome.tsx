import Image from "next/image";
import type { FoundersWelcomeContent } from "./types";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function FoundersWelcome({ content }: { content: FoundersWelcomeContent }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 animate-fade-in-up md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <div className="mx-auto max-w-[320px] md:mx-0">
              {content.images && content.images.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {content.images.map((src) => (
                    <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-card">
                      <Image
                        src={src}
                        alt={content.imageAlt}
                        fill
                        sizes="(min-width: 768px) 152px, (min-width: 640px) 150px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative mx-auto aspect-[3/4] max-w-[320px] overflow-hidden rounded-card md:mx-0">
                  <Image
                    src={content.image ?? ""}
                    alt={content.imageAlt}
                    fill
                    sizes="(min-width: 768px) 320px, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="md:col-span-3">
            <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
            <SectionHeading>{content.heading}</SectionHeading>
            <blockquote className="mt-6 space-y-4 border-l-[3px] border-teal pl-6 text-[17px] leading-relaxed text-text-medium">
              {content.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </blockquote>
            <p className="mt-6 text-[14px] font-medium text-text-dark">{content.signoff}</p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
