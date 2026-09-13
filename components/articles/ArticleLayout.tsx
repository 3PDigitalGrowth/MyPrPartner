import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  GraduationCap,
  Layers,
  Quote,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd, FaqJsonLd, JsonLd } from "@/components/seo/StructuredData";
import { AuthorByline } from "@/components/articles/AuthorByline";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { NewsletterForm } from "@/components/articles/NewsletterForm";
import { formatPublishedDate, type Article } from "@/lib/articles";
import { getCrisisMasterclassCheckoutUrl } from "@/lib/checkout";
import { melissaAttribution, melissaBio } from "@/content/articles/authors";
import type {
  ArticleBlock,
  ArticleDoc,
  ArticleSection,
  CtaPreset,
  ListItem,
} from "@/content/articles/types";

const SITE = "https://myprpartner.com";

// ─────────────────────────────────────────────────────────────────────────────
// Preset course cards. Every article routes back into the Masterclass, so the
// cards live here rather than being re-typed in each content file.
// ─────────────────────────────────────────────────────────────────────────────

type CtaCard = {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  accent: string;
  icon: typeof Shield;
  external?: boolean;
};

function ctaCard(preset: CtaPreset, slug: string): CtaCard {
  switch (preset) {
    case "enrol":
      return {
        href: getCrisisMasterclassCheckoutUrl({
          utm_source: "article",
          utm_content: slug,
        }),
        external: true,
        eyebrow: "Enrol now",
        title: "Start the Crisis Masterclass this month",
        body: "Twelve monthly sessions with Melissa Agnes and Lyall Mercer, workbooks, a monthly Q&A and a certificate endorsed by CRC Public Relations. $340 a month ex GST, ten-day free trial.",
        cta: "Enrol in the Crisis Masterclass",
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
        icon: Shield,
      };
    case "formula":
      return {
        href: "/crisis-ready-formula",
        eyebrow: "The formula",
        title: "Validate, Relate, Prove: the Crisis Ready® formula",
        body: "Melissa Agnes's full explanation of why fact-first statements fail and the order that gets a high-stakes message heard, with a practical exercise to run on your own scenario.",
        cta: "Read the formula",
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
        icon: Compass,
      };
    case "inside":
      return {
        href: "/crisis-masterclass/inside",
        eyebrow: "Inside the program",
        title: "What the 12 months actually cover",
        body: "Melissa's own month-by-month description of the Crisis Masterclass, from mindset and the issue-versus-crisis framework through to the Maple Leaf Foods case study.",
        cta: "See inside the 12 months",
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
        icon: Layers,
      };
    case "evidence":
      return {
        href: "/downloads/evidence-emotion-led-crisis.pdf",
        external: true,
        eyebrow: "Free download",
        title: "The Evidence Behind Emotion-Led Crisis Management",
        body: "The peer-reviewed research on emotion, empathy and outcomes in crisis communication, in a ten-minute read you can hand to a board.",
        cta: "Download the paper",
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
        icon: FileText,
      };
    case "checklist":
      return {
        href: "/resources/crisis-checklist",
        eyebrow: "Free download",
        title: "Crisis Vulnerability Checklist",
        body: "A 30-point self-assessment of your exposure to a reputational crisis. Score your organisation in ten minutes.",
        cta: "Get the checklist",
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
        icon: ShieldCheck,
      };
    case "courses":
      return {
        href: "/courses",
        eyebrow: "Short courses",
        title: "On-demand PR courses from senior advisers",
        body: "Media relations, press release writing and spokesperson skills, built by the team behind CRC Public Relations.",
        cta: "Browse the courses",
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
        icon: GraduationCap,
      };
    case "issue-or-crisis":
      return {
        href: "/issue-or-crisis",
        eyebrow: "Self-check",
        title: "Issue or crisis? Run the five-question check",
        body: "Melissa Agnes's definitions of issue, crisis and emergency, with a short self-check you can put in front of your leadership team.",
        cta: "Run the check",
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
        icon: Sparkles,
      };
    case "masterclass":
    default:
      return {
        href: "/crisis-masterclass",
        eyebrow: "The full program",
        title: "Ready before the crisis: the Crisis Masterclass",
        body: "Australia's premier crisis communications program, delivered with the Crisis Ready Institute. One session a month for twelve months, self-paced, with a certificate your board can file.",
        cta: "See the masterclass",
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
        icon: Shield,
      };
  }
}

function CtaCardView({ card }: { card: CtaCard }) {
  const Icon = card.icon;
  const linkClass =
    "mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-teal-dark";
  return (
    <aside className="mt-10 overflow-hidden rounded-card border border-[#E5E7EB] bg-[#F7F8FA]">
      <div className="h-1.5 w-full" style={{ background: card.accent }} />
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white"
            style={{ background: card.accent }}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-teal">
              {card.eyebrow}
            </p>
            <h3 className="mt-1 font-heading text-[19px] font-bold leading-snug text-text-dark md:text-[21px]">
              {card.title}
            </h3>
          </div>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-text-medium">{card.body}</p>
        {card.external ? (
          <a href={card.href} className={linkClass}>
            {card.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        ) : (
          <Link href={card.href} className={linkClass}>
            {card.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </div>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Blocks
// ─────────────────────────────────────────────────────────────────────────────

function ListItemView({ item }: { item: ListItem }) {
  if (
    item &&
    typeof item === "object" &&
    "lead" in (item as object) &&
    "text" in (item as object)
  ) {
    const li = item as { lead: string; text: React.ReactNode };
    return (
      <>
        <strong className="font-semibold text-text-dark">{li.lead}</strong> {li.text}
      </>
    );
  }
  return <>{item as React.ReactNode}</>;
}

function BlockView({ block, slug }: { block: ArticleBlock; slug: string }) {
  switch (block.t) {
    case "p":
      return (
        <p className="mt-5 text-[16px] leading-[1.75] text-text-medium md:text-[17px]">
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3
          id={block.id}
          className="mt-9 scroll-mt-28 font-heading text-[20px] font-bold leading-snug text-text-dark md:text-[22px]"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[15.5px] leading-[1.7] text-text-medium md:text-[16.5px]"
            >
              <span
                aria-hidden
                className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal"
              />
              <span>
                <ListItemView item={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3.5 text-[15.5px] leading-[1.7] text-text-medium md:text-[16.5px]"
            >
              <span
                className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal/10 font-heading text-[12px] font-bold text-teal-dark"
                aria-hidden
              >
                {i + 1}
              </span>
              <span>
                <ListItemView item={item} />
              </span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <figure className="mt-7 rounded-card border-l-4 border-brand-blue bg-[#F4F8FC] p-6 md:p-7">
          <Quote className="h-5 w-5 text-brand-blue/60" aria-hidden />
          <blockquote className="mt-3 font-heading text-[17px] font-semibold leading-[1.6] text-text-dark md:text-[18.5px]">
            {block.text}
          </blockquote>
          {block.cite && (
            <figcaption className="mt-3 text-[13px] font-medium text-text-medium">
              {block.cite}
            </figcaption>
          )}
        </figure>
      );
    case "callout":
      return (
        <div className="mt-6 rounded-card bg-text-dark p-6 md:p-7">
          <p className="font-heading text-[17px] font-bold leading-relaxed text-white md:text-[19px]">
            {block.text}
          </p>
        </div>
      );
    case "example":
      return (
        <figure
          className={`mt-5 rounded-card border-l-4 p-5 md:p-6 ${
            block.tone === "weak"
              ? "border-[#C98484] bg-[#FBF4F4]"
              : "border-teal bg-[#F0FAFB]"
          }`}
        >
          <figcaption
            className={`text-[11.5px] font-semibold uppercase tracking-[0.14em] ${
              block.tone === "weak" ? "text-[#A85B5B]" : "text-teal-dark"
            }`}
          >
            {block.label}
          </figcaption>
          <p className="mt-2 font-heading text-[15.5px] font-semibold leading-relaxed text-text-dark md:text-[16.5px]">
            {block.text}
          </p>
        </figure>
      );
    case "pill":
      return (
        <div className="mt-7 flex flex-col gap-3 rounded-full border border-teal/30 bg-teal/[0.06] px-5 py-3 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p className="text-[14.5px] font-medium leading-snug text-text-dark">
            {block.text}
          </p>
          <Link
            href={block.href}
            className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-teal px-4 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            {block.cta}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      );
    case "cta":
      return <CtaCardView card={ctaCard(block.preset, slug)} />;
    case "capture":
      return (
        <div className="mt-10">
          <NewsletterForm theme="light" />
        </div>
      );
    case "img":
      return (
        <figure className="mt-7">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-card bg-[#F7F8FA]">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-[13px] leading-relaxed text-text-medium">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "table":
      return (
        <div className="mt-6 overflow-x-auto rounded-card border border-[#E5E7EB]">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-text-dark">
                {block.head.map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3.5 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-white"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F7F8FA]"}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border-t border-[#F1F2F5] px-4 py-3.5 align-top text-[14px] leading-relaxed ${
                        j === 0 ? "font-semibold text-text-dark" : "text-text-medium"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

function SectionView({ section, slug }: { section: ArticleSection; slug: string }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="mt-12 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[30px]">
        {section.title}
      </h2>
      {section.blocks.map((block, i) => (
        <BlockView key={i} block={block} slug={slug} />
      ))}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Layout
// ─────────────────────────────────────────────────────────────────────────────

const endCards = [
  {
    href: "/crisis-masterclass",
    icon: Shield,
    eyebrow: "The full program",
    title: "Crisis Masterclass",
    body: "Australia's premier crisis communications program, delivered with the Crisis Ready Institute. Twelve months, one session a month.",
    cta: "See the masterclass",
    accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
  },
  {
    href: "/crisis-masterclass/inside",
    icon: Layers,
    eyebrow: "Month by month",
    title: "Inside the 12 months",
    body: "Melissa Agnes's own description of every session, from mindset to the Maple Leaf Foods case study.",
    cta: "See inside",
    accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
  },
  {
    href: "/resources/crisis-checklist",
    icon: ShieldCheck,
    eyebrow: "Free download",
    title: "Crisis Vulnerability Checklist",
    body: "A 30-point self-assessment of your vulnerability to a reputational crisis. Score your organisation in ten minutes.",
    cta: "Get the checklist",
    accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
  },
];

export function ArticleLayout({
  article,
  doc,
  allArticles,
}: {
  article: Article;
  doc: ArticleDoc;
  allArticles: Article[];
}) {
  const canonical = `${SITE}/articles/${article.slug}`;
  const isMelissa = article.author.slug === "melissa-agnes";
  const related = doc.related
    .map((s) => allArticles.find((a) => a.slug === s))
    .filter((a): a is Article => Boolean(a))
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.summary,
          image: `${SITE}${article.heroImage}`,
          datePublished: article.publishedAt,
          dateModified: article.publishedAt,
          inLanguage: "en-AU",
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          author: isMelissa
            ? {
                "@type": "Person",
                name: "Melissa Agnes",
                jobTitle: "Founder, Crisis Ready Institute",
                url: `${SITE}/melissa-agnes`,
                sameAs: ["https://crisisreadyinstitute.com/"],
              }
            : {
                "@type": "Person",
                name: article.author.name,
                jobTitle: article.author.role,
                url: `${SITE}/about/expert-trainers`,
              },
          publisher: {
            "@type": "Organization",
            name: "My PR Partner",
            url: SITE,
            logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
          },
          isPartOf: { "@type": "WebSite", name: "My PR Partner", url: SITE },
          about: {
            "@type": "Course",
            name: "Crisis Masterclass",
            url: `${SITE}/crisis-masterclass`,
          },
          keywords: doc.keywords.join(", "),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE}/` },
          { name: "Articles & insights", url: `${SITE}/articles` },
          { name: article.title, url: canonical },
        ]}
      />
      {doc.faq && doc.faq.length > 0 && <FaqJsonLd items={doc.faq} />}
      <Navbar />
      <main className="pt-[72px] lg:pt-[72px]">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src={article.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.94) 0%, rgba(7,175,187,0.72) 60%, rgba(30,115,190,0.82) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[860px] text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                {article.category}
              </div>
              <h1 className="font-heading text-[30px] font-bold leading-[1.12] text-white sm:text-[38px] md:text-[46px]">
                {article.title}
              </h1>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13.5px] text-white/85">
                <span className="inline-flex items-center gap-2.5">
                  {article.author.avatar && (
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  )}
                  <span className="font-semibold text-white">{article.author.name}</span>
                  <span className="hidden sm:inline">{article.author.role}</span>
                </span>
                <span>{formatPublishedDate(article.publishedAt)}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {article.readTimeMinutes} min read
                </span>
              </div>
              {isMelissa && (
                <p className="mt-6 text-[13.5px] text-white/80">
                  Part of the{" "}
                  <Link href="/crisis-masterclass" className="font-semibold text-white underline underline-offset-4">
                    Crisis Masterclass
                  </Link>
                  , available in Australasia only through My PR Partner
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ── LEDE ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[760px]">
              <div className="rounded-card border border-[#E5E7EB] bg-[#F0FAFB] p-6 md:p-8">
                <p className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-teal-dark">
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  The short answer
                </p>
                <p className="mt-3 text-[16.5px] font-medium leading-[1.7] text-text-dark md:text-[17.5px]">
                  {doc.lede}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <article className="bg-white">
          <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
            <div className="mx-auto max-w-[760px]">
              {doc.sections.map((s) => (
                <SectionView key={s.id} section={s} slug={article.slug} />
              ))}

              {doc.faq && doc.faq.length > 0 && (
                <section id="faq" className="scroll-mt-28">
                  <h2 className="mt-12 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[30px]">
                    Frequently asked questions
                  </h2>
                  <div className="mt-6 space-y-3">
                    {doc.faq.map((f) => (
                      <details
                        key={f.question}
                        className="group rounded-card border border-[#E5E7EB] bg-white open:shadow-card"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-heading text-[16px] font-bold text-text-dark md:p-6 md:text-[17px] [&::-webkit-details-marker]:hidden">
                          {f.question}
                          <span
                            aria-hidden
                            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#F0FAFB] text-teal transition-transform group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="px-5 pb-5 text-[15px] leading-relaxed text-text-medium md:px-6 md:pb-6">
                          {f.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {doc.references && doc.references.length > 0 && (
                <section id="references" className="scroll-mt-28">
                  <h2 className="mt-12 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[30px]">
                    Sources
                  </h2>
                  <ul className="mt-5 space-y-2.5">
                    {doc.references.map((ref) => (
                      <li
                        key={ref.href}
                        className="flex gap-3 text-[15.5px] leading-[1.7] text-text-medium"
                      >
                        <span
                          aria-hidden
                          className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal"
                        />
                        <a
                          href={ref.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal underline-offset-4 hover:text-teal-dark hover:underline"
                        >
                          {ref.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* ── AUTHOR CARD ── */}
              <div className="mt-14 rounded-card border border-[#E5E7EB] bg-[#F7F8FA] p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <AuthorByline author={article.author} size="md" />
                  <Link
                    href={isMelissa ? "/melissa-agnes" : "/about/expert-trainers"}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-teal transition-colors hover:text-teal-dark"
                  >
                    {isMelissa ? "About Melissa Agnes" : "Meet the trainers"}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-text-medium">
                  {isMelissa
                    ? melissaBio
                    : "Lyall Mercer is co-founder of My PR Partner and lead strategist for CRC Public Relations. A former journalist with 25+ years of front-line public relations experience, he has advised national and international companies, governments, executives, industry associations and schools on media, reputation and crisis communications."}
                </p>
                {isMelissa && (
                  <p className="mt-3 text-[14.5px] leading-relaxed text-text-medium">
                    {melissaAttribution}{" "}
                    <Link href="/crisis-masterclass" className="font-semibold text-teal hover:text-teal-dark">
                      See the program.
                    </Link>
                  </p>
                )}
                {doc.sourceNote && (
                  <p className="mt-4 border-t border-[#E5E7EB] pt-4 text-[12.5px] leading-relaxed text-text-medium/80">
                    {doc.sourceNote}
                  </p>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* ── KEEP READING ── */}
        {related.length > 0 && (
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                    Keep reading
                  </p>
                  <h2 className="mt-2 font-heading text-[26px] font-bold leading-tight text-text-dark md:text-[30px]">
                    More from the Crisis Masterclass
                  </h2>
                </div>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal hover:text-teal-dark"
                >
                  All articles
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── COURSE CROSS-SELL BAND ── */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
                Go from reading to capability
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-text-dark md:text-[36px]">
                Learn this with Melissa Agnes and Lyall Mercer
              </h2>
              <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-text-medium md:text-[17px]">
                The article covers the idea. The Crisis Masterclass builds the skill: twelve months, one session a month, workbooks, live Q&A and a certificate endorsed by CRC Public Relations.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {endCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group flex h-full flex-col rounded-card border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow hover:shadow-card md:p-7"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                      style={{ background: card.accent }}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.12em] text-teal">
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-1 font-heading text-[18px] font-bold leading-snug text-text-dark">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-text-medium">
                      {card.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-teal transition-colors group-hover:text-teal-dark">
                      {card.cta}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER BAND ── */}
        <section id="subscribe" className="relative scroll-mt-28 overflow-hidden bg-text-dark">
          <div className="absolute inset-0">
            <Image
              src="/images/lead-magnet-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,43,74,0.92) 0%, rgba(7,175,187,0.78) 60%, rgba(30,115,190,0.82) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
              <div className="lg:col-span-6">
                <h2 className="font-heading text-[28px] font-bold leading-tight text-white md:text-[38px]">
                  Found this useful? The next one lands in your inbox.
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                  Practical crisis and PR thinking from Melissa Agnes, Lyall Mercer and the senior advisers behind CRC Public Relations. Fortnightly at most. Unsubscribe with one click.
                </p>
              </div>
              <div className="lg:col-span-6">
                <NewsletterForm theme="dark" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
