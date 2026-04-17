import type { LucideIcon } from "lucide-react";

export type LeadMagnetStep = {
  title: string;
  teaser: string;
  icon: LucideIcon;
  accent: string;
};

export type LeadMagnetStat = {
  value: string;
  label: string;
};

export type LeadMagnetTestimonial = {
  quote: string;
  name: string;
  title: string;
};

export type LeadMagnetCrossLink = {
  href: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  accent: string;
};

export type LeadMagnetArticle = {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  readTime: string;
};

export type LeadMagnetConfig = {
  slug: string;
  resourceLabel: string;
  downloadHref: string;
  downloadFilename: string;

  hero: {
    eyebrow: string;
    eyebrowIcon: LucideIcon;
    title: string;
    titleHighlight: string;
    subhead: string;
    trustBadges: string[];
    backgroundImage: string;
  };

  stepsSection: {
    eyebrow: string;
    title: string;
    subhead: string;
    steps: LeadMagnetStep[];
  };

  authority: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    stats: LeadMagnetStat[];
  };

  testimonial: LeadMagnetTestimonial;

  crossSells: {
    eyebrow: string;
    title: string;
    subhead: string;
    cards: LeadMagnetCrossLink[];
  };

  articles: {
    eyebrow: string;
    title: string;
    items: LeadMagnetArticle[];
  };

  contactCta: {
    eyebrow: string;
    title: string;
    body: string;
  };

  meta: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
  };
};
