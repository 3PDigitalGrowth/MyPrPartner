import type { LucideIcon } from "lucide-react";

export type IconRef = LucideIcon;

export type CtaLink = {
  label: string;
  href: string;
};

export type Anchor = {
  id: string;
  label: string;
};

export type StatItem = {
  icon: IconRef;
  title: string;
  sub: string;
};

export type HeroContent = {
  eyebrow: string;
  eyebrowIcon?: IconRef;
  headline: string;
  tagline: string;
  intro: string;
  outcomes: string[];
  primaryCta?: { label: string; useCheckoutUrl?: boolean };
  secondaryCta?: CtaLink;
  bgImage: string;
  portraitImage?: string;
  portraitCallout?: {
    eyebrow: string;
    title: React.ReactNode;
    sub?: string;
  };
  trustStrip?: {
    poweredByCrcLogo?: boolean;
    items: string[];
  };
};

export type OverviewContent = {
  eyebrow: string;
  heading: string;
  paragraphs: React.ReactNode[];
  keyLearningsTitle?: string;
  keyLearnings: string[];
};

export type LearningTile = {
  icon: IconRef;
  title: string;
  body: string;
};

export type WhatYoullLearnContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  tiles: LearningTile[];
};

export type StructureGroup = {
  label: string;
  count: string;
  items: string[];
};

export type CourseStructureContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  groups: StructureGroup[];
};

export type Persona = {
  image: string;
  icon: IconRef;
  title: string;
  body: string;
};

export type PersonasContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  items: Persona[];
};

export type Instructor = {
  image: string;
  name: string;
  title: string;
  bio: React.ReactNode;
};

export type InstructorsContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  items: Instructor[];
  footnote?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  org: string;
};

export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  items: Testimonial[];
};

export type CareerValueItem = {
  icon: IconRef;
  title: string;
  body: string;
};

export type CareerValueContent = {
  eyebrow: string;
  heading: string;
  items: CareerValueItem[];
};

export type FaqItem = {
  q: string;
  a: React.ReactNode;
};

export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

/**
 * A single bullet in a pricing tier's inclusions list.
 * Use a plain string for standard bullets, or the object form to render
 * the bullet text + check icon in the teal highlight colour (used for
 * headline inclusions on higher tiers).
 */
export type PricingBullet = string | { text: string; highlighted?: boolean };

export type PricingTier = {
  id: string;
  label: string;
  /** Short descriptor shown under the label, e.g. "Team training and resources" */
  description?: string;
  price: string;
  /** Overrides sidebar priceCurrencyNote when this tier is selected */
  priceCurrencyNote?: string;
  /** Overrides sidebar pricePlanNote when this tier is selected */
  pricePlanNote?: string;
  /** Overrides sidebar inclusionsTitle when this tier is selected */
  inclusionsTitle?: string;
  /** Overrides sidebar inclusions list when this tier is selected */
  inclusions?: PricingBullet[];
  /** Optional sub-heading shown above plusInclusions, e.g. "Train Level PLUS:" */
  plusHeading?: string;
  /** Extra bullets rendered below the base inclusions under the plusHeading */
  plusInclusions?: PricingBullet[];
};

export type SidebarContent = {
  thumbImage: string;
  badge?: string;
  badgeIcon?: IconRef;
  eyebrow: string;
  price: string;
  priceCurrencyNote: string;
  pricePlanNote: string;
  /** If provided, renders a tier selector above the price; selected tier's values override price/currency/plan notes */
  tiers?: PricingTier[];
  /** Defaults to tiers[0].id */
  defaultTierId?: string;
  /** Optional heading shown above the tier selector, e.g. "Select your school size" */
  tierSelectorLabel?: string;
  primaryCtaLabel: string;
  secondaryCta?: CtaLink;
  inclusionsTitle: string;
  inclusions: string[];
  trustBadges?: {
    poweredByCrcLogo?: boolean;
    crisisReadyBadge?: boolean;
  };
  callbackLinkLabel?: string;
  callbackHref?: string;
};

export type FoundersWelcomeContent = {
  eyebrow: string;
  heading: string;
  image: string;
  imageAlt: string;
  paragraphs: React.ReactNode[];
  signoff: string;
  showCrcLogo?: boolean;
};

export type GroupBandContent = {
  badge: string;
  badgeIcon?: IconRef;
  heading: string;
  body: string;
  bullets: string[];
  cta: CtaLink;
  ctaSubLabel?: string;
  bgImage: string;
};

export type RelatedProgramContent = {
  eyebrow: string;
  heading: string;
  body: string;
  thumbImage: string;
  featureBullets: string[];
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
};

export type FinalCtaContent = {
  eyebrow: string;
  eyebrowIcon?: IconRef;
  heading: string;
  body: string;
  primaryCtaLabel: string;
  secondaryCta?: CtaLink;
  footnote?: string;
  bgImage: string;
};

export type MobileBarContent = {
  label: string;
  priceShort: string;
  ctaLabel: string;
};

export type CheckoutConfig = {
  /**
   * The base Kajabi hosted checkout URL.
   * Resolve this from process.env.NEXT_PUBLIC_<NAME> at the top of the course's
   * content file so Next.js can inline the value into the client bundle.
   */
  baseUrl: string;
  /** Used in utm_medium (typically the course slug) */
  utmMedium: string;
  /** Used in utm_campaign (defaults to "enrol") */
  utmCampaign?: string;
};

export type CourseSeo = {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  ogImage: string;
  twitterTitle?: string;
  twitterDescription?: string;
  /** ISO 8601 duration, e.g. PT12M for 12 months */
  courseWorkload?: string;
};

export type CourseSchemaInstructor = {
  name: string;
  description?: string;
  url?: string;
};

export type CourseSchemaContent = {
  schemaName: string;
  schemaDescription: string;
  providerName?: string;
  providerUrl?: string;
  instructors: CourseSchemaInstructor[];
};

export type CourseContent = {
  slug: string;
  seo: CourseSeo;
  schema: CourseSchemaContent;
  checkout: CheckoutConfig;
  hero: HeroContent;
  statBar: StatItem[];
  anchors: Anchor[];
  overview: OverviewContent;
  whatYoullLearn: WhatYoullLearnContent;
  courseStructure: CourseStructureContent;
  personas: PersonasContent;
  instructors: InstructorsContent;
  testimonials: TestimonialsContent;
  careerValue: CareerValueContent;
  faq: FaqContent;
  sidebar: SidebarContent;
  foundersWelcome: FoundersWelcomeContent;
  groupBand: GroupBandContent;
  /** Optional cross-sell band for a related program (e.g. Schools -> Crisis Masterclass) */
  relatedProgram?: RelatedProgramContent;
  finalCta: FinalCtaContent;
  mobileBar: MobileBarContent;
};
