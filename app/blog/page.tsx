import type { Metadata } from "next";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { getArticlesByPillar, getPublishedArticles } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "Financial Insights for Every Stage of Life",
  description:
    "Educational articles from LeadStar Financial on protection, retirement, Medicare, health coverage, and working with a financial professional.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const pillars = getArticlesByPillar();
  const articles = getPublishedArticles();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Financial Insights for Every Stage of Life"
        description="Educational articles designed to help you understand planning and protection questions. This is not individualized advice."
      />
      <section className="bg-white py-16">
        <Container className="space-y-16">
          {Array.from(pillars.entries()).map(([pillar, pillarArticles]) => (
            <div key={pillar}>
              <h2 className="headline text-3xl">{pillar}</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {pillarArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          ))}
          {articles.length === 0 ? (
            <p className="lead">Articles will appear here after editorial review.</p>
          ) : null}
        </Container>
      </section>
    </>
  );
}
