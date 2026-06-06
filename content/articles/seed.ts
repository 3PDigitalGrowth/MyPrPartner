import type { Article } from "@/lib/articles";

// ─────────────────────────────────────────────────────────────────────────────
// Seed articles
// ─────────────────────────────────────────────────────────────────────────────
// Intentionally empty ahead of launch. Real articles will be authored in
// Contentful (see content/articles/CONTENTFUL_SETUP.md) and served via
// getAllArticles() once the site is live. Until then the /articles page renders
// its "coming soon" empty state rather than any placeholder content.

export const seedArticles: Article[] = [];
