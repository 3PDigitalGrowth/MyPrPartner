import type { ReactNode } from "react";

/**
 * Typed body model for long-form articles rendered by
 * components/articles/ArticleLayout.tsx.
 *
 * Content files are .tsx so `p` text and list items can carry inline <Link>
 * elements for contextual internal linking. Everything else is plain data so
 * the copy stays exactly as approved.
 *
 * `quote` is reserved for verbatim material from a named source (Melissa
 * Agnes's newsletters and Crisis Ready course sessions). It renders as a
 * pull-quote with attribution and must never be paraphrased.
 *
 * `pill` is the small inline call to action strip used to break up long runs
 * of text and route readers back into the Crisis Masterclass.
 *
 * `cta` renders one of the preset course cards (see ArticleLayout).
 * `capture` renders the newsletter form inline.
 */

export type ListItem = ReactNode | { lead: string; text: ReactNode };

export type CtaPreset =
  | "masterclass"
  | "enrol"
  | "formula"
  | "inside"
  | "evidence"
  | "checklist"
  | "courses"
  | "issue-or-crisis";

export type ArticleBlock =
  | { t: "p"; text: ReactNode }
  | { t: "h3"; text: string; id?: string }
  | { t: "ul"; items: ListItem[] }
  | { t: "ol"; items: ListItem[] }
  | { t: "quote"; text: string; cite?: string }
  | { t: "callout"; text: string }
  | { t: "example"; label: string; tone: "weak" | "strong"; text: string }
  | { t: "pill"; text: string; href: string; cta: string }
  | { t: "cta"; preset: CtaPreset }
  | { t: "capture" }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "img"; src: string; alt: string; caption?: string };

export type ArticleSection = {
  id: string;
  title: string;
  blocks: ArticleBlock[];
};

export type ArticleFaq = {
  question: string;
  /** Plain string so it can go straight into FAQPage structured data. */
  answer: string;
};

export type ArticleReference = {
  name: string;
  href: string;
};

export type ArticleDoc = {
  slug: string;
  /** One-paragraph direct answer shown under the hero. Written to stand
   *  alone if a search engine or assistant quotes it. */
  lede: string;
  /** Extra keywords for the metadata block. */
  keywords: string[];
  sections: ArticleSection[];
  faq?: ArticleFaq[];
  references?: ArticleReference[];
  /** Slugs of other articles to surface in the "Keep reading" grid. */
  related: string[];
  /** Short note on what was edited in any verbatim source material. Rendered
   *  as a discreet editorial note under the author card. */
  sourceNote?: string;
};
