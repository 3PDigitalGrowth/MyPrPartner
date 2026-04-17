import Image from "next/image";
import { Clock, Sparkles } from "lucide-react";
import { formatPublishedDate, type Article } from "@/lib/articles";
import { AuthorByline } from "./AuthorByline";

type FeaturedArticleProps = {
  article: Article;
};

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <article className="group overflow-hidden rounded-card border border-[#E5E7EB] bg-white shadow-card">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F8FA] lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={article.heroImage}
            alt={article.heroImageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-teal-dark backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Featured
          </span>
        </div>

        <div className="flex flex-col justify-center p-7 md:p-10 lg:col-span-5">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">
            {article.category}
          </p>
          <h2 className="mt-3 font-heading text-[26px] font-bold leading-[1.15] text-text-dark md:text-[32px]">
            {article.title}
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-text-medium md:text-[16.5px]">
            {article.summary}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#F1F2F5] pt-5">
            <AuthorByline author={article.author} size="md" />
            <div className="text-right text-[12.5px] text-text-medium">
              <p>{formatPublishedDate(article.publishedAt)}</p>
              <p className="mt-0.5 inline-flex items-center gap-1">
                <Clock className="h-3 w-3" aria-hidden />
                {article.readTimeMinutes} min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
