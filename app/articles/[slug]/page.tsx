import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { getAllArticles } from "@/lib/articles";
import { articleRegistry, registeredSlugs } from "@/content/articles/registry";

const SITE = "https://myprpartner.com";

/**
 * Dynamic article route. Bodies come from content/articles/melissa/*.tsx via
 * the registry; card metadata (title, summary, hero, author, date) comes from
 * the seed list so the hub and the detail page never disagree.
 *
 * The press release guide keeps its own static route; static routes win over
 * this dynamic segment, so the two coexist.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return registeredSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const articles = await getAllArticles();
  const article = articles.find((a) => a.slug === params.slug);
  const doc = articleRegistry[params.slug];
  if (!article || !doc) return {};

  const title = article.seo?.title ?? `${article.title} | My PR Partner`;
  const description = article.seo?.description ?? article.summary;
  const canonical = `${SITE}/articles/${article.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    keywords: doc.keywords,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description,
      url: canonical,
      siteName: "My PR Partner",
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [article.heroImage],
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [article.heroImage],
    },
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const articles = await getAllArticles();
  const article = articles.find((a) => a.slug === params.slug);
  const doc = articleRegistry[params.slug];
  if (!article || !doc) notFound();

  return <ArticleLayout article={article} doc={doc} allArticles={articles} />;
}
