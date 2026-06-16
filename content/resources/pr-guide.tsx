import {
  Award,
  BookOpen,
  Compass,
  Lightbulb,
  Mic,
  Newspaper,
  Search,
  Send,
  Shield,
} from "lucide-react";
import type { LeadMagnetConfig } from "@/components/lead-magnet/types";

export const prGuideConfig: LeadMagnetConfig = {
  slug: "pr-guide",
  resourceLabel: "Trusted Public Voice guide",
  downloadHref: "/downloads/pr-guide.pdf",
  downloadFilename: "My-PR-Partner-Trusted-Public-Voice.pdf",

  hero: {
    eyebrow: "Free guide",
    eyebrowIcon: Mic,
    title: "Five steps to becoming a",
    titleHighlight: "trusted public voice.",
    subhead:
      "We live in an age of constant news. Journalists need fresh content every hour, and unlike advertising, the coverage costs you nothing. You don't need a public relations firm to begin. You need a few simple principles and the confidence to put your hand up. Follow these five steps and you can become a trusted voice in your field.",
    trustBadges: [
      "Five practical steps",
      "Instant PDF download",
      "Free, no catch",
    ],
    backgroundImage: "/images/lead-magnet-bg.jpg",
  },

  stepsSection: {
    eyebrow: "Inside the guide",
    title: "The media needs experts. That's you.",
    subhead:
      "None of this needs a budget or a media release. It needs an understanding of how the news works, and a few good habits. Here are the five that matter.",
    steps: [
      {
        title: "Know the difference between coverage and marketing",
        teaser:
          "This isn't free advertising. What you say has to be newsworthy, because it is the news. Pitch it as genuine public interest, not promotion. A new product or service can earn coverage, but only when it matters to the wider community, not just to you.",
        icon: Newspaper,
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        title: "Know your authority to speak",
        teaser:
          "Journalists are rarely experts on what they cover, so they look for people who are. That's you. Be willing to share what you know in your field. Being quoted builds your credibility with clients, and gives you something worth posting on your own channels too.",
        icon: Award,
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        title: "Ask what you can add to a story",
        teaser:
          "When a story breaks, the follow-ups need fresh angles. When you see something in your area of expertise, ask what you could add to it. Don't undervalue your input. Your knowledge, or simply your opinion, could be exactly what a journalist is looking for.",
        icon: Lightbulb,
        accent: "linear-gradient(135deg, #533278 0%, #A25CC8 100%)",
      },
      {
        title: "Monitor the media in your field",
        teaser:
          "Set up a Google Alert for the keywords that matter to you. It's free, it takes a few minutes, and it tells you the moment your industry is in the news. That's when you can react quickly and put the steps above to work.",
        icon: Search,
        accent: "linear-gradient(135deg, #0B7A58 0%, #37B288 100%)",
      },
      {
        title: "Contact the journalist",
        teaser:
          "You don't need a media release. A short email or a message on social media will do, as long as it's brief. Introduce yourself, make your pitch, and explain what you add to the story. Not every pitch lands. Keep going, and one of them will.",
        icon: Send,
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
    ],
  },

  authority: {
    eyebrow: "Why trust this guide",
    title: "This is what public relations professionals do",
    body: "My PR Partner is powered by CRC Public Relations. For more than 15 years, we've helped companies, governments, associations, schools and not-for-profits earn the right kind of attention and protect their reputation. While we have great expertise, when we are elevating the public voice of a client, it's based on the principles contained in these five steps.",
    bullets: [
      "Be the public voice of authority without a PR company",
      "Based on the principles PR professionals use",
      "Written for busy leaders, in plain English and free of jargon",
      "Practical enough to start using this week",
    ],
  },

  crossSells: {
    eyebrow: "When you're ready for more",
    title: "Ready to take it further?",
    subhead:
      "This guide gets you started. When you want your whole team genuinely ready, not just aware, our programs are built for exactly that. Each one is matched to your sector and led by experienced practitioners.",
    cards: [
      {
        href: "/crisis-masterclass",
        icon: Shield,
        eyebrow: "Most popular",
        title: "Crisis Masterclass",
        body: "Australia's premier crisis communications program, built in partnership with the Crisis Ready Institute. For leaders whose reputation can't afford a bad 48 hours.",
        cta: "See the masterclass",
        accent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
      },
      {
        href: "/programs",
        icon: Compass,
        eyebrow: "Sector programs",
        title: "All programs by sector",
        body: "Full-year programs for schools, associations, business and charities, each built for a specific sector and its leadership team.",
        cta: "Browse programs",
        accent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      },
      {
        href: "/courses",
        icon: BookOpen,
        eyebrow: "Launching 2026",
        title: "Upcoming standalone courses",
        body: "Short, focused courses on social media strategy, media training, personal branding and more. Register your interest for founding-member pricing.",
        cta: "See the pipeline",
        accent: "linear-gradient(135deg, #B8434A 0%, #E2894B 100%)",
      },
    ],
  },

  articles: {
    eyebrow: "Keep reading",
    title: "Latest insights",
    items: [
      {
        href: "/articles",
        eyebrow: "Latest insights",
        title: "Explore our full library of articles",
        body: "Practical advice and honest insights on public relations, media and reputation, to help you protect and build your standing.",
      },
    ],
  },

  contactCta: {
    eyebrow: "For sensitive matters",
    title: "Facing something bigger than a guide can solve?",
    body: "If the situation is active, sensitive, or already in the media, a PDF isn't what you need. Get in touch and an experienced adviser will look at it in confidence before suggesting a next step.",
  },

  meta: {
    title: "Five Steps to Becoming a Trusted Public Voice - My PR Partner",
    description:
      "Five practical steps to becoming a trusted voice in your field, the same advice CRC Public Relations gives its clients. A free guide: instant PDF, no cost.",
    canonical: "https://myprpartner.com/resources/pr-guide",
    ogImage: "/images/lead-magnet-bg.jpg",
  },
};
