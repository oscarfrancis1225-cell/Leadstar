import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnswerSummary } from "@/components/blog/AnswerSummary";
import { ArticleAuthor } from "@/components/blog/ArticleAuthor";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleCTA } from "@/components/blog/ArticleCTA";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { ArticleSources } from "@/components/blog/ArticleSources";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import {
  getArticle,
  getPublishedArticles,
  getRelatedArticles,
} from "@/lib/content/articles";
import { getDisclaimer } from "@/lib/content/disclaimers";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.excerpt,
    alternates: { canonical: article.href },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      url: article.href,
      images: [
        {
          url: article.image.src,
          width: article.image.width,
          height: article.image.height,
          alt: article.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.excerpt,
      images: [article.image.src],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article || article.publicationStatus !== "published") {
    notFound();
  }

  const related = getRelatedArticles(article).slice(0, 3);

  return (
    <>
      <BlogPostingJsonLd article={article} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: article.title, href: article.href },
        ]}
      />
      <article className="bg-white py-16">
        <Container className="max-w-3xl space-y-10">
          <ArticleHero article={article} />
          <AnswerSummary text={article.summary} />
          <TableOfContents sections={article.sections} />
          <ArticleBody sections={article.sections} />
          {article.midCta ? <ArticleCTA cta={article.midCta} /> : null}
          <ArticleCTA cta={article.finalCta} />
          <ArticleAuthor article={article} />
          <ArticleSources sources={article.sources} />
          <p className="text-sm leading-6 text-muted">{getDisclaimer(article.disclaimerVariant)}</p>
        </Container>
        <Container className="mt-16 max-w-6xl">
          <RelatedArticles articles={related} />
        </Container>
      </article>
    </>
  );
}
