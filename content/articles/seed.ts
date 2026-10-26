import type { Article } from "@/lib/articles";
import { lyallMercer, melissaAgnes } from "./authors";
import { card as highStakesFormula } from "./melissa/high-stakes-comms-formula";
import { card as aiErasedDatabase } from "./melissa/ai-erased-database-and-lied";
import { card as issueOrCrisis } from "./melissa/issue-or-crisis-why-the-label-decides-the-response";
import { card as emotionLogic } from "./melissa/you-cannot-beat-emotion-with-logic";
import { card as hopeStrategy } from "./melissa/hope-is-not-a-strategy-crisis-response-penalty";
import { card as calmestPerson } from "./melissa/calmest-person-in-the-room";
import { card as crisisOnion } from "./melissa/crisis-is-an-onion-layered-storytelling";
import { card as mapleLeaf } from "./melissa/maple-leaf-foods-from-tragedy-to-trust";
import { card as fourLevels } from "./melissa/four-levels-of-safety-crisis-leader";
import { card as angerVeil } from "./melissa/anger-is-a-veil-emotion";
import { card as crisisTraining } from "./lyall/crisis-management-training";

// ─────────────────────────────────────────────────────────────────────────────
// Seed articles
// ─────────────────────────────────────────────────────────────────────────────
// Articles are served from this seed until Contentful credentials land (see
// content/articles/CONTENTFUL_SETUP.md). The press release guide pairs with a
// static detail page at app/articles/crafting-effective-press-releases; the
// Melissa Agnes and Lyall Mercer pieces render through app/articles/[slug] from
// the bodies in content/articles/{melissa,lyall}/*.tsx (registry.ts lists them).
// Once Contentful is wired up, getAllArticles() prefers it automatically.

type MelissaCard = {
  slug: string;
  title: string;
  summary: string;
  readTimeMinutes: number;
  tags: readonly string[];
  seoTitle: string;
  seoDescription: string;
  heroImageAlt: string;
};

function melissaArticle(
  card: MelissaCard,
  publishedAt: string,
  extra: Partial<Article> = {}
): Article {
  return {
    slug: card.slug,
    title: card.title,
    summary: card.summary,
    category: "Crisis",
    heroImage: `/images/articles/melissa/${card.slug}.jpg`,
    heroImageAlt: card.heroImageAlt,
    author: melissaAgnes,
    publishedAt,
    readTimeMinutes: card.readTimeMinutes,
    featured: false,
    tags: [...card.tags],
    relatedPrograms: ["/crisis-masterclass", "/crisis-masterclass/inside"],
    seo: { title: card.seoTitle, description: card.seoDescription },
    ...extra,
  };
}

export const seedArticles: Article[] = [
  {
    slug: crisisTraining.slug,
    title: crisisTraining.title,
    summary: crisisTraining.summary,
    category: "Crisis",
    heroImage: "/images/articles/crisis-management-training.jpg",
    heroImageAlt: crisisTraining.heroImageAlt,
    author: lyallMercer,
    publishedAt: "2026-10-26",
    readTimeMinutes: crisisTraining.readTimeMinutes,
    featured: false,
    tags: [...crisisTraining.tags],
    relatedPrograms: ["/crisis-masterclass", "/crisis-media-training"],
    seo: { title: crisisTraining.seoTitle, description: crisisTraining.seoDescription },
  },
  melissaArticle(highStakesFormula, "2026-09-10", { featured: true }),
  melissaArticle(aiErasedDatabase, "2026-09-09"),
  melissaArticle(issueOrCrisis, "2026-09-08"),
  melissaArticle(emotionLogic, "2026-09-07"),
  melissaArticle(hopeStrategy, "2026-09-06"),
  melissaArticle(calmestPerson, "2026-09-05"),
  melissaArticle(crisisOnion, "2026-09-04"),
  melissaArticle(mapleLeaf, "2026-09-03"),
  melissaArticle(fourLevels, "2026-09-02"),
  melissaArticle(angerVeil, "2026-09-01"),
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
    author: lyallMercer,
    publishedAt: "2026-08-19",
    readTimeMinutes: 14,
    featured: false,
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
