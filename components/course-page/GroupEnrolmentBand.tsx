import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { GroupBandContent } from "./types";
import { MT, copySrc, imgBind } from "@/components/editable";
import { useCopyId } from "./copy-base";

export default function GroupEnrolmentBand({ content }: { content: GroupBandContent }) {
  const BadgeIcon = content.badgeIcon;
  const cid = useCopyId();
  const bgImageId = cid("groupBand.bgImage");
  return (
    <section className="bg-[#F7F8FA] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-card animate-fade-in-up">
          <Image
            src={bgImageId ? copySrc(bgImageId, content.bgImage) : content.bgImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            {...(bgImageId ? imgBind(bgImageId) : {})}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,43,74,0.92) 0%, rgba(30,115,190,0.88) 100%)",
            }}
          />
          <div className="relative grid grid-cols-1 gap-8 p-8 md:grid-cols-5 md:items-center md:gap-10 md:p-12 lg:p-14">
            <div className="md:col-span-3">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                {BadgeIcon ? <BadgeIcon className="h-3.5 w-3.5" aria-hidden /> : null}
                <MT id={cid("groupBand.badge")}>{content.badge}</MT>
              </p>
              <h2 className="mt-4 font-heading text-[24px] font-bold leading-tight text-white md:text-[30px]">
                <MT id={cid("groupBand.heading")}>{content.heading}</MT>
              </h2>
              <p className="mt-3 max-w-[580px] text-[15px] leading-relaxed text-white/85">
                <MT id={cid("groupBand.body")}>{content.body}</MT>
              </p>
              {content.bullets?.length ? (
                <ul className="mt-5 grid grid-cols-1 gap-2 text-[14px] text-white/90 sm:grid-cols-2">
                  {content.bullets.map((i, idx) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" aria-hidden />
                      <span>
                        <MT id={cid(`groupBand.bullets.${idx}`)}>{i}</MT>
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="md:col-span-2 md:text-right">
              <Link
                href={content.cta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-text-dark transition-colors hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MT id={cid("groupBand.cta.label")}>{content.cta.label}</MT>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              {content.ctaSubLabel ? (
                <p className="mt-3 text-[13px] text-white/75">
                  <MT id={cid("groupBand.ctaSubLabel")}>{content.ctaSubLabel}</MT>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
