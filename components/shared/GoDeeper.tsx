import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MT } from "@/components/editable";

export type GoDeeperLink = {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
};

export type GoDeeperContent = {
  eyebrow: string;
  heading: string;
  intro?: string;
  links: GoDeeperLink[];
};

/**
 * "Go deeper" related-reading block for hub pages (programs, the masterclass,
 * the homepage). It sits below the approved page copy and links the hub down
 * to the guides and landing pages that share its topic, so those pages are
 * never left as orphans that only link to each other.
 *
 * Pass `copyBase` (e.g. "course.schools.goDeeper") to make every string
 * editable in /admin/editor; without it the block renders plain text.
 */
export default function GoDeeper({
  content,
  copyBase,
  tone = "white",
}: {
  content: GoDeeperContent;
  copyBase?: string;
  tone?: "white" | "grey";
}) {
  const id = (key: string) => (copyBase ? `${copyBase}.${key}` : false);
  const sectionBg = tone === "grey" ? "bg-[#F7F8FA]" : "bg-white";
  const cardBg = tone === "grey" ? "bg-white" : "bg-[#F7F8FA]";
  // Keep rows full: three cards sit in one row from tablet up, six in 2x3 then
  // 3x2, anything else in pairs.
  const n = content.links.length;
  const cols =
    n === 3 ? "md:grid-cols-3" : n % 3 === 0 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";

  return (
    <section className={sectionBg} aria-labelledby={copyBase ? `${copyBase}-heading` : undefined}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="max-w-[680px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
            <MT id={id("eyebrow")}>{content.eyebrow}</MT>
          </p>
          <h2
            id={copyBase ? `${copyBase}-heading` : undefined}
            className="mt-2 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[32px]"
          >
            <MT id={id("heading")}>{content.heading}</MT>
          </h2>
          {content.intro ? (
            <p className="mt-3 text-[15px] leading-relaxed text-text-medium md:text-[16px]">
              <MT id={id("intro")}>{content.intro}</MT>
            </p>
          ) : null}
        </div>

        <div className={`mt-8 grid grid-cols-1 gap-5 ${cols}`}>
          {content.links.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex h-full flex-col rounded-card border border-[#E5E7EB] ${cardBg} p-6 transition-shadow hover:shadow-card md:p-7`}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                <MT id={id(`links.${idx}.eyebrow`)}>{link.eyebrow}</MT>
              </p>
              <h3 className="mt-2 font-heading text-[19px] font-bold leading-snug text-text-dark">
                <MT id={id(`links.${idx}.title`)}>{link.title}</MT>
              </h3>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-text-medium">
                <MT id={id(`links.${idx}.body`)}>{link.body}</MT>
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal transition-colors group-hover:text-teal-dark">
                Read more
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
