import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import type { Article } from "@/lib/content/types";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="card overflow-hidden">
      <SmartImage
        src={article.image.src}
        alt={article.image.alt}
        width={article.image.width}
        height={article.image.height}
        sizes="(min-width: 1024px) 30vw, 100vw"
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="p-6">
        <p className="eyebrow">{article.category}</p>
        <h2 className="mt-3 font-serif text-2xl leading-8 text-navy">
          {article.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">{article.excerpt}</p>
        <p className="mt-4 text-xs leading-5 text-muted">
          LeadStar editorial · <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </p>
        <Link
          href={article.href}
          className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue"
        >
          Read article
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
