import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LandingConfig, ProseNode } from "./types";

/**
 * Renderer for the standalone SEO landing pages. Server component by design:
 * no hooks, no client bundle, every answer present in the initial HTML.
 */

function Prose({ nodes }: { nodes: ProseNode[] }) {
  return (
    <div className="mt-6 space-y-5">
      {nodes.map((node, i) => {
        switch (node.kind) {
          case "h3":
            return (
              <h3
                key={i}
                id={node.id}
                className="scroll-mt-28 pt-3 font-heading text-[19px] font-bold leading-snug text-text-dark md:text-[21px]"
              >
                {node.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5">
                {node.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[16px] leading-relaxed text-text-medium">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-teal" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {node.items.map((item, j) => (
                  <li key={j} className="flex gap-3.5 text-[16px] leading-relaxed text-text-medium">
                    <span
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal/10 font-heading text-[12px] font-bold text-teal-dark"
                      aria-hidden
                    >
                      {j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="rounded-card border border-teal/25 bg-teal/[0.06] p-5 md:p-6"
              >
                <p className="font-heading text-[15px] font-bold text-crc-navy md:text-[16px]">
                  {node.title}
                </p>
                <div className="mt-2 text-[15px] leading-relaxed text-text-medium">{node.body}</div>
              </aside>
            );
          case "p":
          default:
            return (
              <p key={i} className="text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                {node.text}
              </p>
            );
        }
      })}
    </div>
  );
}

export function LandingPage({ config }: { config: LandingConfig }) {
  const EyebrowIcon = config.hero.eyebrowIcon;
  const siblingLinks = config.related.links.filter((l) => l.sibling);
  const mainLinks = config.related.links.filter((l) => !l.sibling);

  return (
    <>
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        {/* ── Breadcrumbs. Mirrors the BreadcrumbList structured data exactly. ── */}
        <nav aria-label="Breadcrumb" className="border-b border-[#E5E7EB] bg-bg-grey">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-text-medium">
              {config.breadcrumbs.map((crumb, i) => {
                const isLast = i === config.breadcrumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-1.5">
                    {i > 0 && (
                      <ChevronRight className="h-3.5 w-3.5 text-text-medium/50" aria-hidden />
                    )}
                    {isLast ? (
                      <span aria-current="page" className="font-medium text-text-dark">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="underline-offset-2 hover:text-teal-dark hover:underline"
                      >
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src={config.hero.backgroundImage}
              alt={config.hero.backgroundAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.94) 0%, rgba(30,115,190,0.84) 55%, rgba(7,175,187,0.78) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-[820px]">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <EyebrowIcon className="h-3.5 w-3.5" aria-hidden />
                {config.hero.eyebrow}
              </p>
              <h1 className="mt-5 font-heading text-[32px] font-bold leading-[1.08] text-white sm:text-[40px] md:text-[48px]">
                {config.hero.title}{" "}
                <span className="text-teal-light">{config.hero.titleHighlight}</span>
              </h1>
              <p className="mt-5 max-w-[640px] text-[16px] leading-relaxed text-white/85 md:text-[18px]">
                {config.hero.subhead}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {config.hero.trustBadges.map((b) => (
                  <li
                    key={b}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12.5px] font-medium text-white/90 backdrop-blur"
                  >
                    <Check className="h-3.5 w-3.5" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={config.hero.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-heading text-[15px] font-bold text-white transition-colors hover:bg-teal-dark"
                >
                  {config.hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                {config.hero.secondaryCta && (
                  <Link
                    href={config.hero.secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 font-heading text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {config.hero.secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Direct answer. Written to stand alone if quoted. ── */}
        <section aria-labelledby="quick-answer" className="border-b border-[#E5E7EB] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-14 lg:px-8">
            <div className="max-w-[820px] border-l-2 border-teal pl-5 md:pl-7">
              <h2
                id="quick-answer"
                className="font-heading text-[22px] font-bold leading-snug text-text-dark md:text-[26px]"
              >
                {config.quickAnswer.heading}
              </h2>
              <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-text-medium md:text-[17.5px]">
                {config.quickAnswer.body}
              </div>
            </div>
          </div>
        </section>

        {/* ── Card grid ── */}
        {config.cardsSection && (
          <section
            id={config.cardsSection.id}
            aria-labelledby={`${config.cardsSection.id}-heading`}
            className="scroll-mt-24 bg-bg-grey"
          >
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
              <div className="max-w-[760px]">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                  {config.cardsSection.eyebrow}
                </p>
                <h2
                  id={`${config.cardsSection.id}-heading`}
                  className="mt-3 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[34px]"
                >
                  {config.cardsSection.heading}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                  {config.cardsSection.subhead}
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {config.cardsSection.cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article
                      key={card.title}
                      className="flex flex-col rounded-card border border-[#E5E7EB] bg-white p-6 shadow-card"
                    >
                      <span
                        className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ background: card.accent }}
                        aria-hidden
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </span>
                      <h3 className="font-heading text-[17px] font-bold leading-snug text-text-dark">
                        {card.title}
                      </h3>
                      <div className="mt-2.5 text-[15px] leading-relaxed text-text-medium">
                        {card.body}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Long-form body ── */}
        {config.bodySections.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
            className={`scroll-mt-24 ${idx % 2 === 0 ? "bg-white" : "bg-bg-grey"}`}
          >
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
              <div className="max-w-[820px]">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                  {section.eyebrow}
                </p>
                <h2
                  id={`${section.id}-heading`}
                  className="mt-3 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[34px]"
                >
                  {section.heading}
                </h2>
                <Prose nodes={section.nodes} />
              </div>
            </div>
          </section>
        ))}

        {/* ── Trainers ── */}
        {config.trainers && (
          <section
            id={config.trainers.id}
            aria-labelledby={`${config.trainers.id}-heading`}
            className="scroll-mt-24 bg-crc-navy"
          >
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
              <div className="max-w-[760px]">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal-light">
                  {config.trainers.eyebrow}
                </p>
                <h2
                  id={`${config.trainers.id}-heading`}
                  className="mt-3 font-heading text-[26px] font-bold leading-tight text-white md:text-[34px]"
                >
                  {config.trainers.heading}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-white/80 md:text-[17px]">
                  {config.trainers.subhead}
                </p>
              </div>
              <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {config.trainers.people.map((p) => (
                  <li
                    key={p.name}
                    className="rounded-card border border-white/15 bg-white/[0.06] p-5 backdrop-blur"
                  >
                    <Image
                      src={p.image}
                      alt={`${p.name}, ${p.title}`}
                      width={72}
                      height={72}
                      className="h-[72px] w-[72px] rounded-full object-cover"
                    />
                    <p className="mt-4 font-heading text-[16px] font-bold text-white">{p.name}</p>
                    <p className="mt-1 text-[13px] font-medium text-teal-light">{p.title}</p>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-white/75">
                      {p.credential}
                    </p>
                  </li>
                ))}
              </ul>
              {config.trainers.footnote && (
                <p className="mt-7 max-w-[760px] text-[14.5px] leading-relaxed text-white/70">
                  {config.trainers.footnote}
                </p>
              )}
            </div>
          </section>
        )}

        {/* ── FAQ. Native <details>, so answers are in the HTML with no JS. ── */}
        <section
          id={config.faq.id}
          aria-labelledby={`${config.faq.id}-heading`}
          className="scroll-mt-24 bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-[760px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                {config.faq.eyebrow}
              </p>
              <h2
                id={`${config.faq.id}-heading`}
                className="mt-3 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[34px]"
              >
                {config.faq.heading}
              </h2>
            </div>
            <div className="mt-9 max-w-[860px] space-y-3">
              {config.faq.items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-card border border-[#E5E7EB] bg-white [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-6 py-5">
                    <h3 className="font-heading text-[15px] font-semibold text-text-dark md:text-[16px]">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-text-medium transition-transform duration-200 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <div className="px-6 pb-6 text-[15px] leading-relaxed text-text-medium">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal links out ── */}
        <section
          id={config.related.id}
          aria-labelledby={`${config.related.id}-heading`}
          className="scroll-mt-24 bg-bg-grey"
        >
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-[760px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                {config.related.eyebrow}
              </p>
              <h2
                id={`${config.related.id}-heading`}
                className="mt-3 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[34px]"
              >
                {config.related.heading}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                {config.related.subhead}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {mainLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex flex-col rounded-card border border-[#E5E7EB] bg-white p-6 shadow-card transition-shadow hover:shadow-md"
                  >
                    <span
                      className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: link.accent }}
                      aria-hidden
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                      {link.eyebrow}
                    </span>
                    <h3 className="mt-2 font-heading text-[17px] font-bold leading-snug text-text-dark">
                      {link.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-text-medium">
                      {link.body}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-[14px] font-bold text-teal-dark">
                      {link.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </span>
                  </Link>
                );
              })}
            </div>

            {siblingLinks.length > 0 && (
              <div className="mt-12 border-t border-[#E5E7EB] pt-9">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-text-medium">
                  Related guides
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {siblingLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-start gap-4 rounded-card border border-[#E5E7EB] bg-white p-5 transition-colors hover:border-teal/40"
                      >
                        <span
                          className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                          style={{ background: link.accent }}
                          aria-hidden
                        >
                          <link.icon className="h-4 w-4 text-white" />
                        </span>
                        <span>
                          <span className="block font-heading text-[15.5px] font-bold leading-snug text-text-dark">
                            {link.title}
                          </span>
                          <span className="mt-1 block text-[14px] leading-relaxed text-text-medium">
                            {link.body}
                          </span>
                          <span className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-teal-dark">
                            {link.cta}
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src={config.finalCta.backgroundImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.95) 0%, rgba(30,115,190,0.86) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-[720px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal-light">
                {config.finalCta.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-[26px] font-bold leading-tight text-white md:text-[34px]">
                {config.finalCta.heading}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                {config.finalCta.body}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={config.finalCta.primary.href}
                  className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-heading text-[15px] font-bold text-white transition-colors hover:bg-teal-dark"
                >
                  {config.finalCta.primary.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                {config.finalCta.secondary && (
                  <Link
                    href={config.finalCta.secondary.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 font-heading text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {config.finalCta.secondary.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
