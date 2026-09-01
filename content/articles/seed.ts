import type { Article } from "@/lib/articles";

// ─────────────────────────────────────────────────────────────────────────────
// Seed articles
// ─────────────────────────────────────────────────────────────────────────────
// Articles are served from this seed until Contentful credentials land (see
// content/articles/CONTENTFUL_SETUP.md). Each seed entry pairs with a static
// detail page at app/articles/<slug>/page.tsx, which owns the full body copy.
// Once Contentful is wired up, getAllArticles() prefers it automatically.

export const seedArticles: Article[] = [
  {
    slug: "crafting-effective-press-releases",
    title:
      "Crafting Effective Press Releases: A Guide for Australian Organisations",
    summary:
      "How to find a real news angle, structure a release journalists can actually use, manage approvals and pitch it without wasting anyone's time - written by an adviser who has sat on both sides of the desk.",
    category: "Media",
    heroImage: "/images/articles/press-release-guide-hero.jpg",
    heroImageAlt:
      "A printed press release held above a journalist's desk in a busy Australian newsroom",
    author: {
      slug: "lyall-mercer",
      name: "Lyall Mercer",
      role: "Co-founder, My PR Partner",
      avatar: "/images/founders-2026/lyall-trainer.jpg",
      initials: "LM",
      avatarAccent: "linear-gradient(135deg, #1A2B4A 0%, #1E73BE 100%)",
    },
    publishedAt: "2026-08-19",
    readTimeMinutes: 14,
    featured: true,
    tags: ["press releases", "media relations", "earned media"],
    relatedPrograms: ["/crisis-masterclass", "/courses"],
    seo: {
      title:
        "How to Write a Press Release: A Guide for Australian Organisations",
      description:
        "A practical guide to press release writing for Australian organisations: finding the news angle, inverted pyramid structure, quotes, approvals, distribution, crisis use and measurement.",
    },
  },
];
