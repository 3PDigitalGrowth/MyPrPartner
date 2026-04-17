import Image from "next/image";
import type { Author } from "@/lib/articles";

type AuthorBylineProps = {
  author: Author;
  size?: "sm" | "md";
};

export function AuthorByline({ author, size = "sm" }: AuthorBylineProps) {
  const avatarSize = size === "md" ? 40 : 28;
  const avatarClass = size === "md" ? "h-10 w-10" : "h-7 w-7";
  const textSize = size === "md" ? "text-[14px]" : "text-[12.5px]";

  return (
    <div className="flex min-w-0 items-center gap-2.5">
      {author.avatar ? (
        <Image
          src={author.avatar}
          alt={author.name}
          width={avatarSize}
          height={avatarSize}
          className={`${avatarClass} flex-shrink-0 rounded-full object-cover`}
        />
      ) : (
        <span
          aria-hidden
          className={`${avatarClass} flex flex-shrink-0 items-center justify-center rounded-full font-heading text-[11px] font-bold text-white`}
          style={{ background: author.avatarAccent }}
        >
          {author.initials}
        </span>
      )}
      <div className={`min-w-0 ${textSize}`}>
        <p className="truncate font-semibold text-text-dark">{author.name}</p>
        {size === "md" && (
          <p className="truncate text-[12.5px] text-text-medium">
            {author.role}
          </p>
        )}
      </div>
    </div>
  );
}
