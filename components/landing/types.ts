import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Shared shape for the standalone SEO landing pages (crisis media training,
 * PR training for small business, the school crisis plan guide).
 *
 * These pages are deliberately kept out of the main navigation. They are
 * entered from search, so every section is built to answer the query on the
 * page rather than push the visitor into the nav to find an answer. Each one
 * links out heavily to the programs, the masterclass and the free resources.
 *
 * The renderer (LandingPage.tsx) is a pure server component. Nothing here
 * needs client JavaScript: the FAQ uses native <details>/<summary>, so the
 * answers sit in the crawled HTML and the page ships zero interactive JS.
 */

/** A single block of long-form body copy. Content files are .tsx, so `text`
 *  and list items can carry inline <Link> elements for contextual linking. */
export type ProseNode =
  | { kind: "p"; text: ReactNode }
  | { kind: "h3"; text: string; id?: string }
  | { kind: "ul"; items: ReactNode[] }
  | { kind: "ol"; items: ReactNode[] }
  | { kind: "callout"; title: string; body: ReactNode };

export type LandingCard = {
  title: string;
  body: ReactNode;
  icon: LucideIcon;
  accent: string;
};

export type LandingTrainer = {
  name: string;
  title: string;
  credential: string;
  image: string;
};

export type LandingRelatedLink = {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  icon: LucideIcon;
  accent: string;
  /** Marks a link to one of the other standalone landing pages, so the
   *  renderer can group them under a separate heading. */
  sibling?: boolean;
};

export type LandingFaq = {
  question: string;
  /** Plain string so it can go straight into FAQPage structured data. */
  answer: string;
};

export type LandingConfig = {
  slug: string;

  breadcrumbs: { name: string; href: string }[];

  hero: {
    eyebrow: string;
    eyebrowIcon: LucideIcon;
    /** Rendered as the single <h1>. */
    title: string;
    titleHighlight: string;
    subhead: string;
    trustBadges: string[];
    backgroundImage: string;
    /** Alt text for the hero background. Empty string keeps it decorative. */
    backgroundAlt: string;
    primaryCta: { href: string; label: string };
    secondaryCta?: { href: string; label: string };
  };

  /** Short direct answer under the hero. Written to stand alone as the
   *  extract a search engine or assistant would quote. */
  quickAnswer: {
    heading: string;
    body: ReactNode;
  };

  cardsSection?: {
    id: string;
    eyebrow: string;
    heading: string;
    subhead: string;
    cards: LandingCard[];
  };

  /** The long-form body. Each entry becomes a <section> with its own H2. */
  bodySections: {
    id: string;
    eyebrow: string;
    heading: string;
    nodes: ProseNode[];
  }[];

  trainers?: {
    id: string;
    eyebrow: string;
    heading: string;
    subhead: string;
    people: LandingTrainer[];
    footnote?: ReactNode;
  };

  faq: {
    id: string;
    eyebrow: string;
    heading: string;
    items: LandingFaq[];
  };

  related: {
    id: string;
    eyebrow: string;
    heading: string;
    subhead: string;
    links: LandingRelatedLink[];
  };

  finalCta: {
    eyebrow: string;
    heading: string;
    body: string;
    primary: { href: string; label: string };
    secondary?: { href: string; label: string };
    backgroundImage: string;
  };

  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
  };
};
