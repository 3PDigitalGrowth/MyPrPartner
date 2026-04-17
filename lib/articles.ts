import { seedArticles } from "@/content/articles/seed";

// ─────────────────────────────────────────────────────────────────────────────
// Public types
// ─────────────────────────────────────────────────────────────────────────────

export type ArticleCategory =
  | "Crisis"
  | "Reputation"
  | "Media"
  | "Strategy";

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  "Crisis",
  "Reputation",
  "Media",
  "Strategy",
];

export type Author = {
  slug: string;
  name: string;
  role: string;
  avatar?: string;
  initials: string;
  avatarAccent: string;
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: ArticleCategory;
  heroImage: string;
  heroImageAlt: string;
  author: Author;
  publishedAt: string; // ISO date
  readTimeMinutes: number;
  featured: boolean;
  tags: string[];
  relatedPrograms: string[];
  seo?: {
    title?: string;
    description?: string;
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// Contentful adapter (inert until env vars are set)
// ─────────────────────────────────────────────────────────────────────────────
//
// The site reads articles via getAllArticles(). If CONTENTFUL_SPACE_ID and
// CONTENTFUL_ACCESS_TOKEN are both present, we fetch from Contentful. If not,
// we fall back to the hardcoded seed articles so the site always renders.
// See content/articles/CONTENTFUL_SETUP.md for the content model spec.
//
// Implementation notes:
//  - Uses direct fetch against the Contentful CDA REST API. No SDK dependency.
//  - Runs at build time (server component). Next.js caches the fetch with ISR.
//  - All shape-mapping lives in `mapContentfulArticle()` so the Article type
//    is the single source of truth for the rest of the app.

const CONTENTFUL_REVALIDATE_SECONDS = 60 * 10; // 10 minutes

type ContentfulAsset = {
  sys: { id: string };
  fields: {
    title?: string;
    description?: string;
    file: { url: string; contentType: string };
  };
};

type ContentfulAuthorEntry = {
  sys: { id: string };
  fields: {
    name: string;
    role: string;
    avatar?: { sys: { id: string } };
  };
};

type ContentfulArticleEntry = {
  sys: { id: string; createdAt: string };
  fields: {
    title: string;
    slug: string;
    summary: string;
    // body omitted here - only needed on detail pages (not built yet)
    heroImage: { sys: { id: string } };
    category: ArticleCategory;
    author: { sys: { id: string } };
    publishedAt: string;
    readTime: number;
    featured?: boolean;
    tags?: string[];
    relatedPrograms?: string[];
    seoTitle?: string;
    seoDescription?: string;
  };
};

type ContentfulEntriesResponse = {
  items: ContentfulArticleEntry[];
  includes?: {
    Entry?: ContentfulAuthorEntry[];
    Asset?: ContentfulAsset[];
  };
};

function isContentfulConfigured(): boolean {
  return Boolean(
    process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
  );
}

async function fetchContentfulArticles(): Promise<Article[] | null> {
  if (!isContentfulConfigured()) return null;

  const space = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  const env = process.env.CONTENTFUL_ENVIRONMENT || "master";

  const url =
    `https://cdn.contentful.com/spaces/${space}/environments/${env}/entries` +
    `?access_token=${token}&content_type=article&order=-fields.publishedAt&include=2&limit=100`;

  try {
    const res = await fetch(url, {
      next: { revalidate: CONTENTFUL_REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.warn(
        `[articles] Contentful responded ${res.status} ${res.statusText} - falling back to seed data`
      );
      return null;
    }
    const json = (await res.json()) as ContentfulEntriesResponse;
    return mapContentfulEntries(json);
  } catch (err) {
    console.warn(
      "[articles] Contentful fetch failed - falling back to seed data",
      err
    );
    return null;
  }
}

function mapContentfulEntries(response: ContentfulEntriesResponse): Article[] {
  const authorsById = new Map<string, ContentfulAuthorEntry>();
  const assetsById = new Map<string, ContentfulAsset>();

  for (const entry of response.includes?.Entry || []) {
    authorsById.set(entry.sys.id, entry);
  }
  for (const asset of response.includes?.Asset || []) {
    assetsById.set(asset.sys.id, asset);
  }

  return response.items.map((entry) => mapContentfulArticle(entry, authorsById, assetsById));
}

function mapContentfulArticle(
  entry: ContentfulArticleEntry,
  authorsById: Map<string, ContentfulAuthorEntry>,
  assetsById: Map<string, ContentfulAsset>
): Article {
  const authorEntry = authorsById.get(entry.fields.author.sys.id);
  const heroAsset = assetsById.get(entry.fields.heroImage.sys.id);
  const avatarAssetId = authorEntry?.fields.avatar?.sys.id;
  const avatarAsset = avatarAssetId ? assetsById.get(avatarAssetId) : undefined;

  const author: Author = authorEntry
    ? {
        slug: authorEntry.sys.id,
        name: authorEntry.fields.name,
        role: authorEntry.fields.role,
        avatar: avatarAsset?.fields.file.url
          ? normaliseAssetUrl(avatarAsset.fields.file.url)
          : undefined,
        initials: initialsFrom(authorEntry.fields.name),
        avatarAccent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      }
    : {
        slug: "unknown",
        name: "My PR Partner",
        role: "Editorial",
        initials: "MP",
        avatarAccent: "linear-gradient(135deg, #0F6DA3 0%, #07AFBB 100%)",
      };

  return {
    slug: entry.fields.slug,
    title: entry.fields.title,
    summary: entry.fields.summary,
    category: entry.fields.category,
    heroImage: heroAsset?.fields.file.url
      ? normaliseAssetUrl(heroAsset.fields.file.url)
      : "/images/hero-programs.jpg",
    heroImageAlt:
      heroAsset?.fields.description || heroAsset?.fields.title || entry.fields.title,
    author,
    publishedAt: entry.fields.publishedAt,
    readTimeMinutes: entry.fields.readTime,
    featured: Boolean(entry.fields.featured),
    tags: entry.fields.tags || [],
    relatedPrograms: entry.fields.relatedPrograms || [],
    seo: {
      title: entry.fields.seoTitle,
      description: entry.fields.seoDescription,
    },
  };
}

function normaliseAssetUrl(url: string): string {
  // Contentful returns protocol-relative URLs like //images.ctfassets.net/...
  if (url.startsWith("//")) return `https:${url}`;
  return url;
}

function initialsFrom(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

// ─────────────────────────────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────────────────────────────

export async function getAllArticles(): Promise<Article[]> {
  const fromContentful = await fetchContentfulArticles();
  if (fromContentful && fromContentful.length > 0) {
    return fromContentful;
  }
  return seedArticles;
}

export function formatPublishedDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
