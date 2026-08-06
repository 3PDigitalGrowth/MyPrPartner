"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Download } from "lucide-react";
import type { CheckoutConfig, HeroContent } from "./types";
import { getCourseCheckoutUrl } from "@/lib/checkout";
import { useWaitlistModal } from "./WaitlistModal";
import { MT, copySrc, imgBind } from "@/components/editable";
import { useCopyId } from "./copy-base";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-text-dark";

export default function Hero({
  hero,
  checkout,
}: {
  hero: HeroContent;
  checkout: CheckoutConfig;
}) {
  const checkoutUrl = getCourseCheckoutUrl(checkout, { utm_content: "hero" });
  const EyebrowIcon = hero.eyebrowIcon;
  const waitlist = useWaitlistModal();
  const cid = useCopyId();
  const bgImageId = cid("hero.bgImage");
  const portraitImageId = cid("hero.portraitImage");

  return (
    <section className="relative overflow-hidden bg-text-dark">
      <div className="absolute inset-0">
        <Image
          src={bgImageId ? copySrc(bgImageId, hero.bgImage) : hero.bgImage}
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
          {...(bgImageId ? imgBind(bgImageId) : {})}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,43,74,0.92) 0%, rgba(7,175,187,0.78) 60%, rgba(30,115,190,0.82) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className={`animate-fade-in-up ${hero.portraitImage ? "lg:col-span-7" : "lg:col-span-12"}`}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
              {EyebrowIcon ? <EyebrowIcon className="h-3.5 w-3.5" aria-hidden /> : null}
              <MT id={cid("hero.eyebrow")}>{hero.eyebrow}</MT>
            </div>
            <h1 className="font-heading text-[34px] font-bold leading-[1.1] text-white sm:text-[44px] md:text-[52px]">
              <MT id={cid("hero.headline")}>{hero.headline}</MT>
            </h1>
            <p className="mt-3 font-heading text-[20px] font-medium text-white/90 md:text-[22px]">
              <MT id={cid("hero.tagline")}>{hero.tagline}</MT>
            </p>
            <p className="mt-4 max-w-[620px] text-[15px] leading-relaxed text-white/80 md:text-[16px]">
              <MT id={cid("hero.intro")}>{hero.intro}</MT>
            </p>

            <ul className="mt-7 space-y-2.5">
              {hero.outcomes.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[14px] text-white/90 md:text-[15px]"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" aria-hidden />
                  <span>
                    <MT id={cid(`hero.outcomes.${i}`)}>{item}</MT>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {hero.primaryCta ? (
                waitlist.enabled ? (
                  <button type="button" onClick={waitlist.open} className={PRIMARY_CTA_CLASS}>
                    <MT id={cid("hero.primaryCta.label")}>{hero.primaryCta.label}</MT>
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                ) : (
                  <a
                    href={hero.primaryCta.useCheckoutUrl ? checkoutUrl : "#"}
                    className={PRIMARY_CTA_CLASS}
                  >
                    <MT id={cid("hero.primaryCta.label")}>{hero.primaryCta.label}</MT>
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                )
              ) : null}
              {hero.secondaryCta ? (
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  <MT id={cid("hero.secondaryCta.label")}>{hero.secondaryCta.label}</MT>
                </Link>
              ) : null}
            </div>

            {hero.trustStrip ? (
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-[12px] text-white/70">
                
                {hero.trustStrip.items.map((item, i) => (
                  <span key={item} className="flex items-center gap-x-6">
                    {(hero.trustStrip!.poweredByCrcLogo || i > 0) ? (
                      <span aria-hidden className="text-white/30">
                        |
                      </span>
                    ) : null}
                    <span>
                      <MT id={cid(`hero.trustStrip.items.${i}`)}>{item}</MT>
                    </span>
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {hero.portraitImage ? (
            <div className="hidden animate-fade-in-up lg:col-span-5 lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <Image
                  src={portraitImageId ? copySrc(portraitImageId, hero.portraitImage) : hero.portraitImage}
                  alt={hero.portraitCallout?.eyebrow ? `${hero.portraitCallout.eyebrow} portrait` : ""}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  {...(portraitImageId ? imgBind(portraitImageId) : {})}
                />
                {hero.portraitCallout ? (
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 p-4 backdrop-blur">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal">
                      <MT id={cid("hero.portraitCallout.eyebrow")}>{hero.portraitCallout.eyebrow}</MT>
                    </p>
                    <p className="mt-1 font-heading text-[15px] font-bold text-text-dark">
                      {typeof hero.portraitCallout.title === "string" ? (
                        <MT id={cid("hero.portraitCallout.title")}>{hero.portraitCallout.title}</MT>
                      ) : (
                        hero.portraitCallout.title
                      )}
                    </p>
                    {hero.portraitCallout.sub ? (
                      <p className="mt-1 text-[12px] text-text-medium">
                        <MT id={cid("hero.portraitCallout.sub")}>{hero.portraitCallout.sub}</MT>
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
