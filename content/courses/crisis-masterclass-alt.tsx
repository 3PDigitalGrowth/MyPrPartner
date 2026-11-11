import type { CourseContent } from "@/components/course-page/types";
import { crisisMasterclassContent as live } from "./crisis-masterclass";

/**
 * Review draft of /crisis-masterclass (11 Nov 2026), served at
 * /crisis-masterclass/alt with noindex for Lyall and Barbara to compare.
 *
 * Why: after EDM1 (10 Nov) Clarity showed visitors leaving on the first
 * screen (8.7% average scroll, 12 seconds active), and the page has sat near
 * 9-10% scroll since 21 Oct whatever the source. The changes below go at the
 * first two screens; everything else is the live page's content, reused as is.
 *
 * Copy sources, so the review is about layout rather than new claims:
 * - headline: Lyall's own EDM1 letter ("go beyond the playbook")
 * - price and annual month free: the /lp/crisis-masterclass page
 *   CRC reviewed on 5 Nov 2026
 * - the four hero outcomes stay as they are (CRC's call, 5 Nov 2026)
 */

const [leadTestimonial, ...moreTestimonials] = live.testimonials?.items ?? [];

export const altLeadTestimonial = leadTestimonial
  ? { ...leadTestimonial, title: leadTestimonial.title.replace(/\bOf\b/g, "of") }
  : undefined;

export const crisisMasterclassAltContent: CourseContent = {
  ...live,

  checkout: { ...live.checkout, utmMedium: "crisis-masterclass-alt" },

  hero: {
    ...live.hero,
    eyebrow: "Crisis Masterclass · 12-month online program",
    headline: "Crisis communication, beyond the playbook",
    tagline: "This course doesn't build plans. It builds you.",
    intro:
      "Twelve months of training with Melissa Agnes, creator of the Crisis Ready® Model, and Lyall Mercer of CRC Public Relations. One new module every month, at your own pace.",
    secondaryCta: { label: "Get the course outline", href: "#outline" },
  },

  // Key learnings and "the value you'll walk away with" covered the same
  // ground in two places; they are one list here and CareerValue is dropped.
  overview: {
    ...live.overview,
    // The first paragraph ("This course doesn't build plans...") is now the hero tagline.
    paragraphs: live.overview.paragraphs.slice(1),
    keyLearningsTitle: "What you'll learn over the 12 months",
    keyLearnings: [
      ...live.overview.keyLearnings,
      "Adopt a mindset that turns crises and challenges into opportunities for growth and connection",
    ],
  },

  testimonials: live.testimonials
    ? { ...live.testimonials, items: moreTestimonials }
    : undefined,

  faq: {
    ...live.faq,
    items: [
      ...live.faq.items,
    ],
  },

  sidebar: {
    ...live.sidebar,
    secondaryCta: { label: "Get the course outline", href: "#outline" },
  },

  foundersWelcome: {
    ...live.foundersWelcome,
    eyebrow: "Why we built it",
    heading: "A note from Lyall Mercer",
    // The stage photo of Melissa is in the hero now, so her headshot here.
    images: ["/images/founders-2026/lyall-welcome-crisis.jpg", "/images/expert-melissa-real.png"],
    imageAlt: "Lyall Mercer and Melissa Agnes",
    paragraphs: [
      "I've always been disappointed with the lack of specialist, world-class crisis communications training available in Australasia. So we created the Crisis Masterclass, and we're thrilled to offer the Crisis Ready® course exclusively, with an Aussie twist, presented by Melissa Agnes.",
      "It will not just upskill you. It will take you to deeper levels of learning about crisis leadership, whatever your level of experience.",
    ],
    signoff: "Lyall Mercer, Co-founder, My PR Partner, and Lead Strategist, CRC Public Relations",
  },

  mobileBar: {
    ...live.mobileBar,
    priceShort: "$340/mo ex GST · annual plan",
  },
};
