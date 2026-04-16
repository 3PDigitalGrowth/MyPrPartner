"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CheckoutConfig, FinalCtaContent } from "./types";
import { getCourseCheckoutUrl } from "@/lib/checkout";

export default function FinalCtaBand({
  content,
  checkout,
}: {
  content: FinalCtaContent;
  checkout: CheckoutConfig;
}) {
  const url = getCourseCheckoutUrl(checkout, { utm_content: "final-cta" });
  const EyebrowIcon = content.eyebrowIcon;
  return (
    <section className="relative overflow-hidden bg-text-dark">
      <Image
        src={content.bgImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,43,74,0.94) 0%, rgba(7,175,187,0.82) 70%, rgba(30,115,190,0.88) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-[780px] text-center animate-fade-in-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
            {EyebrowIcon ? <EyebrowIcon className="h-3.5 w-3.5" aria-hidden /> : null}
            {content.eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-[30px] font-bold leading-tight text-white md:text-[40px]">
            {content.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed text-white/85 md:text-[17px]">
            {content.body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={url}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[16px] font-semibold text-text-dark transition-colors hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-text-dark"
            >
              {content.primaryCtaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            {content.secondaryCta ? (
              <Link
                href={content.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {content.secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {content.footnote ? (
            <p className="mt-5 text-[13px] text-white/70">{content.footnote}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
