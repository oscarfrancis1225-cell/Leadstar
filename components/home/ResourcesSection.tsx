import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Container } from "@/components/ui/Container";
import { getFeaturedArticles } from "@/lib/content/articles";

export function ResourcesSection() {
  const articles = getFeaturedArticles(3);

  return (
    <section className="bg-cream py-20 lg:py-24">
      <Container wide>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Before you shop a name</p>
            <h2 className="headline mt-3 max-w-xl text-3xl sm:text-4xl">
              How much life insurance do I need? What changes at 65?
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
          >
            View all articles
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
