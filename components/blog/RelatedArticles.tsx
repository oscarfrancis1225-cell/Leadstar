import { ArticleCard } from "@/components/blog/ArticleCard";
import type { Article } from "@/lib/content/types";

export function RelatedArticles({ articles }: { articles: readonly Article[] }) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="headline text-3xl">Related reading</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
