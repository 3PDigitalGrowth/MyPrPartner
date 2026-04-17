import {
  BookOpen,
  Compass,
  Mic,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LeadMagnetConfig } from "@/components/lead-magnet/types";

export const prGuideConfig: LeadMagnetConfig = {
  slug: "pr-guide",
  resourceLabel: "5-Step PR Guide",
  downloadHref: "/downloads/pr-guide.pdf",
  downloadFilename: "My-PR-Partner-5-Step-PR-Guide.pdf",

  hero: {
    eyebrow: "Free download",
    eyebrowIcon: Sparkles,
    title: "The 5-Step PR Guide every business leader",
    titleHighlight: "should have on their desk.",
    subhead:
      "The same five-step framework senior CRC Public Relations advisers use to help organisations shape the story, protect reputation, and handle the press - now yours to read in under 20 minutes.",
    trustBadges: [
      "Instant PDF download",
      "No credit card required",
      "Written by senior advisers",
    ],
    backgroundImage: "/images/lead-magnet-bg.jpg",
  },

  stepsSection: {
    eyebrow: "Inside the guide",
    title: "Five steps. One framework. Real outcomes.",
    subhead:
      "The five moves experienced PR advisers make before they say a single word in public - distilled into a practical guide you can use this week.",
    steps: [
      {
        title: "01. Know your audience - really know them",
        teaser:
          "How to map the people who actually influence your reputation (it's almost never the people you think) and pressure-test your messages against the questions they care about.",
        icon: Users,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "02. Build the strategy before you need it",
        teaser:
          "A one-page PR strategy template senior advisers use to align leadership teams - so when a moment arrives (good or bad), you're already aligned on what to say.",
        icon: Compass,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "03. Craft messages that cut through",
        teaser:
          "The three-part message architecture used in boardrooms, press interviews and crisis calls. Includes the 'CEO pen test' for knowing when a message is ready to go public.",
        icon: Target,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
      {
        title: "04. Manage the media relationship",
        teaser:
          "How to approach journalists without getting burned, how to answer the question you weren't asked, and the one thing to never, ever say off the record.",
        icon: Mic,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        title: "05. Measure, learn, refine",
        teaser:
          "The PR metrics that matter to leadership teams (and the vanity numbers to ignore). Plus a simple monthly review rhythm to turn results into a sharper next quarter.",
        icon: TrendingUp,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
    ],
  },

  authority: {
    eyebrow: "Why trust this guide",
    title: "Written by senior advisers, not marketers.",
    body: "My PR Partner is powered by CRC Public Relations - a boutique firm that has spent more than 25 years counselling boards, CEOs, governments, associations and schools through the moments that matter most. This guide is the foundational framework senior advisers walk new clients through on day one.",
    bullets: [
      "Distilled from 25+ years of senior crisis, reputation and corporate communications practice",
      "Used as the onboarding framework for organisations across Australia and the Pacific",
      "Written for leaders - clear, practical, and free of PR jargon",
      "Focused on what actually moves the needle, not vanity metrics",
    ],
    stats: [
      { value: "25+", label: "Years advising on high-stakes communications" },
      { value: "500+", label: "Communications professionals trained" },
      { value: "100%", label: "CRC Public Relations client satisfaction rating" },
      { value: "1:1", label: "Direct access to senior advisers - no juniors" },
    ],
  },

  testimonial: {
    quote:
      "The five-step framework gave our leadership team a shared language for reputation work. We stopped reacting and started choosing our moments - and our media coverage has been the better for it.",
    name: "Senior leader, ASX-listed client",
    title: "CRC Public Relations engagement, 2025",
  },

  crossSells: {
    eyebrow: "When a guide isn't enough",
    title: "Ready for senior-led, practical training?",
    subhead:
      "The guide will get you started. Our programs take your whole team from aware to genuinely capable - each one sector-matched and delivered by senior practitioners.",
    cards: [
      {
        href: "/crisis-masterclass",
        icon: Shield,
        eyebrow: "Most popular",
        title: "Crisis Masterclass",
        body: "Australia's premier crisis communications program - built with Melissa Agnes and delivered by senior CRC Public Relations advisers. For leaders whose reputation can't afford a bad 48 hours.",
        cta: "See the masterclass",
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        href: "/programs",
        icon: Compass,
        eyebrow: "Sector programs",
        title: "All programs by sector",
        body: "Full-year programs for Schools, Industry Associations, Business and Charity - each built for a specific sector and leadership team.",
        cta: "Browse programs",
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        href: "/courses",
        icon: BookOpen,
        eyebrow: "Launching 2026",
        title: "Upcoming standalone courses",
        body: "Short, focused courses on LinkedIn strategy, media training, personal branding and more - register your interest for founding-member pricing.",
        cta: "See the pipeline",
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
    ],
  },

  articles: {
    eyebrow: "Keep reading",
    title: "Articles that pair well with the guide",
    items: [
      {
        href: "/articles",
        eyebrow: "Reputation",
        title: "The three sentences every leader should know by heart",
        body: "Why your elevator pitch is the wrong tool for reputation work - and the three-sentence alternative senior advisers use instead.",
        readTime: "6 min read",
      },
      {
        href: "/articles",
        eyebrow: "Media",
        title: "How to answer the question you weren't asked",
        body: "Bridging, blocking and the rhythm of a great interview. A practical breakdown you can use before your next media moment.",
        readTime: "8 min read",
      },
      {
        href: "/articles",
        eyebrow: "Strategy",
        title: "PR metrics that actually matter to boards",
        body: "Reach and impressions don't belong on a board paper. Here's the short list of PR measures that do - and how to report them.",
        readTime: "7 min read",
      },
    ],
  },

  contactCta: {
    eyebrow: "For sensitive matters",
    title: "Facing something bigger than a guide can solve?",
    body: "If the situation is active, sensitive, or already in the media, a PDF is not what you need. Reach out and a senior adviser will review the matter in confidence before recommending a next step.",
  },

  meta: {
    title: "Free 5-Step PR Guide - My PR Partner",
    description:
      "The same five-step PR framework senior CRC Public Relations advisers use with their clients - now a free download. Instant PDF, no credit card, no follow-up calls.",
    canonical: "https://myprpartner.com/resources/pr-guide",
    ogImage: "/images/lead-magnet-bg.jpg",
  },
};
