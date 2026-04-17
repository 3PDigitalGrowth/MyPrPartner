"use client";

import { useMemo, useState } from "react";
import type { Article, ArticleCategory } from "@/lib/articles";
import { ArticleCard } from "./ArticleCard";

type ArticlesGridProps = {
  articles: Article[];
  categories: ArticleCategory[];
};

type Filter = "All" | ArticleCategory;

export function ArticlesGrid({ articles, categories }: ArticlesGridProps) {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return articles;
    return articles.filter((a) => a.category === filter);
  }, [articles, filter]);

  const counts = useMemo(() => {
    const base: Record<Filter, number> = {
      All: articles.length,
      Crisis: 0,
      Reputation: 0,
      Media: 0,
      Strategy: 0,
    };
    for (const a of articles) {
      base[a.category] += 1;
    }
    return base;
  }, [articles]);

  const tabs: Filter[] = ["All", ...categories];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter articles by category"
        className="flex flex-wrap items-center gap-2"
      >
        {tabs.map((t) => {
          const isActive = t === filter;
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(t)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors ${
                isActive
                  ? "border-teal bg-teal text-white"
                  : "border-[#E5E7EB] bg-white text-text-dark hover:border-teal hover:text-teal"
              }`}
            >
              {t}
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#F1F2F5] text-text-medium"
                }`}
              >
                {counts[t]}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-card border border-dashed border-[#E5E7EB] bg-white p-10 text-center">
          <p className="font-heading text-[18px] font-bold text-text-dark">
            No articles in this category yet.
          </p>
          <p className="mt-2 text-[14.5px] text-text-medium">
            Try a different category - or subscribe below and we&apos;ll email
            you when new pieces go live.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}
