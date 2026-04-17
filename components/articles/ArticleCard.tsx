import Image from "next/image";
import { Clock } from "lucide-react";
import { formatPublishedDate, type Article } from "@/lib/articles";
import { AuthorByline } from "./AuthorByline";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-[#E5E7EB] bg-white shadow-sm transition-shadow hover:shadow-card">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F8FA]">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-teal-dark backdrop-blur">
          {article.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-heading text-[20px] font-bold leading-snug text-text-dark md:text-[21px]">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-text-medium">
          {article.summary}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-[#F1F2F5] pt-4">
          <AuthorByline author={article.author} />
          <div className="text-right text-[12.5px] text-text-medium">
            <p>{formatPublishedDate(article.publishedAt)}</p>
            <p className="mt-0.5 inline-flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden />
              {article.readTimeMinutes} min read
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
