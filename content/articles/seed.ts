import type { Article, Author } from "@/lib/articles";

// ─────────────────────────────────────────────────────────────────────────────
// Seed authors
// ─────────────────────────────────────────────────────────────────────────────
// These shape-match the Contentful Author entry model (see CONTENTFUL_SETUP.md)
// so swapping from seed to Contentful is a drop-in replacement.

const authors: Record<string, Author> = {
  lyall: {
    slug: "lyall-mercer",
    name: "Lyall Mercer",
    role: "Co-founder & Principal Adviser, CRC Public Relations",
    avatar: "/images/instructors/lyall-mercer.png",
    initials: "LM",
    avatarAccent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
  },
  barbara: {
    slug: "barbara-gorogh",
    name: "Barbara Gorogh",
    role: "Co-founder, My PR Partner",
    avatar: "/images/instructors/barbara-gorogh.png",
    initials: "BG",
    avatarAccent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
  },
  melissa: {
    slug: "melissa-agnes",
    name: "Melissa Agnes",
    role: "Crisis & brand-protection author",
    avatar: "/images/instructors/melissa-agnes.png",
    initials: "MA",
    avatarAccent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
  },
  jonathan: {
    slug: "jonathan-hawkes",
    name: "Jonathan Hawkes",
    role: "Campaigner & Communication Adviser",
    avatar: "/images/instructors/jonathan-hawkes.png",
    initials: "JH",
    avatarAccent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
  },
  trevor: {
    slug: "trevor-young",
    name: "Trevor Young",
    role: "PR, content & digital strategist",
    avatar: "/images/instructors/trevor-young.png",
    initials: "TY",
    avatarAccent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Seed articles
// ─────────────────────────────────────────────────────────────────────────────

export const seedArticles: Article[] = [
  {
    slug: "first-60-minutes-of-a-crisis",
    title: "The first 60 minutes of a crisis are not about the media.",
    summary:
      "Most leadership teams default to press-first thinking in a crisis. The senior advisers who have been in the room before know the actual sequence - and it starts with your own people. A practical breakdown of the first hour senior crisis counsel walks clients through, from incident confirmation to the first approved statement.",
    category: "Crisis",
    heroImage: "/images/crisis-masterclass/hero-portrait-crisis.jpg",
    heroImageAlt:
      "A leader receiving a briefing in a crisis response room",
    author: authors.lyall,
    publishedAt: "2026-03-28T09:00:00+10:00",
    readTimeMinutes: 7,
    featured: true,
    tags: ["crisis response", "first hour", "leadership"],
    relatedPrograms: ["crisis-masterclass", "schools", "industry-associations"],
    seo: {
      title: "The First 60 Minutes of a Crisis - My PR Partner",
      description:
        "What senior crisis advisers actually do in the first hour of a crisis - and why the media is not the first thing on the checklist.",
    },
  },
  {
    slug: "why-crisis-simulations-fail",
    title: "Why most crisis simulations fail (and the five changes that fix them).",
    summary:
      "A practical breakdown of what makes a crisis simulation actually useful - plus the classic mistakes that produce a comfortable rehearsal with no learning. Drawn from senior-adviser simulations run with ASX-listed boards, government departments and peak industry bodies.",
    category: "Crisis",
    heroImage: "/images/crisis-masterclass/group-enrolment-bg.jpg",
    heroImageAlt:
      "A leadership team running a crisis simulation in a boardroom",
    author: authors.jonathan,
    publishedAt: "2026-03-14T09:00:00+10:00",
    readTimeMinutes: 8,
    featured: false,
    tags: ["simulation", "training", "board"],
    relatedPrograms: ["crisis-masterclass", "business", "charity"],
  },
  {
    slug: "three-sentences-every-leader-should-know",
    title: "The three sentences every leader should know by heart.",
    summary:
      "Your elevator pitch is the wrong tool for reputation work. There is a simpler, three-sentence structure senior advisers teach spokespeople before any interview or public moment - and it holds up under pressure when the longer version does not.",
    category: "Reputation",
    heroImage: "/images/business/business-hero-bg.jpg",
    heroImageAlt: "An executive preparing for an on-camera interview",
    author: authors.lyall,
    publishedAt: "2026-02-20T09:00:00+10:00",
    readTimeMinutes: 6,
    featured: false,
    tags: ["messaging", "spokesperson", "reputation"],
    relatedPrograms: ["business", "industry-associations"],
  },
  {
    slug: "board-questions-after-a-crisis",
    title: "Five questions boards should ask after a crisis.",
    summary:
      "A short set of board-level questions that turn a crisis into a genuine improvement exercise, rather than a file that gets quietly closed. Use them to set the agenda for your next post-incident review - and to signal the seriousness the situation deserved.",
    category: "Reputation",
    heroImage: "/images/associations/associations-group-bg.jpg",
    heroImageAlt:
      "A board of directors in a post-incident review meeting",
    author: authors.barbara,
    publishedAt: "2026-02-07T09:00:00+10:00",
    readTimeMinutes: 5,
    featured: false,
    tags: ["board", "governance", "review"],
    relatedPrograms: ["industry-associations", "charity", "schools"],
  },
  {
    slug: "answering-the-question-you-werent-asked",
    title: "How to answer the question you weren't asked.",
    summary:
      "Bridging, blocking, and the rhythm of a great interview. A practical breakdown of the techniques experienced spokespeople use to stay on message without sounding evasive - and the one tell-tale phrase that makes every journalist lean in harder.",
    category: "Media",
    heroImage: "/images/crisis-masterclass/persona-executive.jpg",
    heroImageAlt:
      "A spokesperson handling a live media interview",
    author: authors.melissa,
    publishedAt: "2026-01-24T09:00:00+10:00",
    readTimeMinutes: 8,
    featured: false,
    tags: ["media training", "interviews", "bridging"],
    relatedPrograms: ["crisis-masterclass", "business"],
  },
  {
    slug: "pr-metrics-that-matter-to-boards",
    title: "The PR metrics that actually matter to boards.",
    summary:
      "Reach and impressions do not belong on a board paper. Here is the short list of PR measures that do - and a simple template for reporting them every quarter in a way directors can actually act on.",
    category: "Strategy",
    heroImage: "/images/plans-pricing/value-add-checklist.jpg",
    heroImageAlt: "A board paper with PR metrics and quarterly results",
    author: authors.trevor,
    publishedAt: "2026-01-10T09:00:00+10:00",
    readTimeMinutes: 7,
    featured: false,
    tags: ["measurement", "board", "strategy"],
    relatedPrograms: ["business", "industry-associations"],
  },
];
