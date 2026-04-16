import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { RelatedProgramContent } from "./types";

export default function RelatedProgramBand({ content }: { content: RelatedProgramContent }) {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-card border border-[#E5E7EB] bg-[#F7F8FA] animate-fade-in-up">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
            <div className="relative order-first aspect-[16/10] md:order-last md:col-span-2 md:aspect-auto">
              <Image
                src={content.thumbImage}
                alt=""
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:col-span-3 md:p-10 lg:p-12">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                {content.eyebrow}
              </p>
              <h2 className="mt-2 font-heading text-[24px] font-bold leading-tight text-text-dark md:text-[28px]">
                {content.heading}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-text-medium">{content.body}</p>
              {content.featureBullets.length > 0 ? (
                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {content.featureBullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[14px] text-text-medium">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={content.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                >
                  {content.primaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                {content.secondaryCta ? (
                  <Link
                    href={content.secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-[14px] font-semibold text-text-dark transition-colors hover:border-teal hover:text-teal"
                  >
                    {content.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
