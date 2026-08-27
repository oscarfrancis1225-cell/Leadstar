import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { articles } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guides",
  description: "Introductory planning guides from LeadStar Financial.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Start with a clearer set of questions"
        description="These introductory pieces are designed to help you prepare for a more useful conversation."
      />
      <section className="bg-white py-16">
        <Container className="max-w-3xl space-y-5">
          {articles.map((article) => (
            <article key={article.slug} className="card p-6">
              <p className="eyebrow">{article.category}</p>
              <h2 className="mt-2 font-serif text-2xl text-navy">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{article.excerpt}</p>
              <Link href={article.href} className="mt-4 inline-block text-sm font-semibold text-blue">
                Read guide
              </Link>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
