import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AnswerSummary } from "@/components/blog/AnswerSummary";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { RelatedTools } from "@/components/tools/RelatedTools";
import { ToolCalculator } from "@/components/tools/ToolCalculator";
import { ToolEducation } from "@/components/tools/ToolEducation";
import { ToolFaqs } from "@/components/tools/ToolFaqs";
import { UnderstandEstimate } from "@/components/tools/UnderstandEstimate";
import { Container } from "@/components/ui/Container";
import { getPublishedArticles } from "@/lib/content/articles";
import { getTool, tools } from "@/lib/constants";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return {};
  }

  return {
    title: tool.title,
    description: tool.description,
    alternates: { canonical: tool.href },
  };
}

export default async function ToolDetailPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Financial Tools", href: "/tools" },
          { name: tool.title, href: tool.href },
        ]}
      />
      <FAQPageJsonLd faqs={tool.faqs} />
      <section className="no-print border-b border-line bg-cream">
        <Container className="max-w-3xl py-8 lg:py-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Financial Tools", href: "/tools" },
              { label: tool.title },
            ]}
          />
          <p className="eyebrow mt-5">Financial Tools</p>
          <h1 className="headline mt-2 text-4xl sm:text-5xl">{tool.title}</h1>
          <p className="lead mt-4">{tool.shortDescription}</p>
          <div className="mt-5">
            <AnswerSummary text={tool.summary} />
          </div>
        </Container>
      </section>
      <section className="bg-white py-6 lg:py-8">
        <Container className="space-y-6">
          <Link
            href="/tools"
            className="no-print inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All financial tools
          </Link>
          <ToolEducation tool={tool} />
          <ToolCalculator
            slug={tool.slug}
            liveArticleSlugs={getPublishedArticles().map((article) => article.slug)}
          />
          <UnderstandEstimate tool={tool} />
          <ToolFaqs faqs={tool.faqs} />
        </Container>
      </section>
      <RelatedTools slug={tool.slug} />
    </>
  );
}
