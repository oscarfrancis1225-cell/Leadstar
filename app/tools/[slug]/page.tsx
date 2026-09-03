import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AnswerSummary } from "@/components/blog/AnswerSummary";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { FinalCTA } from "@/components/home/FinalCTA";
import { LicensingNotice } from "@/components/legal/LicensingNotice";
import { PageHero } from "@/components/layout/PageHero";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { RelatedTools } from "@/components/tools/RelatedTools";
import { ToolCalculator } from "@/components/tools/ToolCalculator";
import { ToolEducation } from "@/components/tools/ToolEducation";
import { UnderstandEstimate } from "@/components/tools/UnderstandEstimate";
import { Container } from "@/components/ui/Container";
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
      <div className="no-print">
      <PageHero
        eyebrow="Financial Tools"
        title={tool.title}
        description={tool.description}
      />
      </div>
      <section className="no-print bg-white py-8">
        <Container className="max-w-3xl space-y-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Financial Tools", href: "/tools" },
              { label: tool.title },
            ]}
          />
          <AnswerSummary text={tool.summary} />
          <LicensingNotice />
        </Container>
      </section>
      <ToolEducation tool={tool} />
      <section className="bg-white py-8 lg:py-12">
        <Container>
          <Link
            href="/tools"
            className="no-print inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All financial tools
          </Link>
          <div className="mt-4">
            <ToolCalculator slug={tool.slug} />
          </div>
        </Container>
      </section>
      {tool.faqs.length > 0 ? (
        <section className="no-print bg-cream py-12">
          <Container className="max-w-3xl space-y-6">
            <h2 className="headline text-3xl">Questions about this tool</h2>
            {tool.faqs.map((item) => (
              <article key={item.question} className="card p-6">
                <h3 className="font-serif text-2xl text-navy">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
              </article>
            ))}
          </Container>
        </section>
      ) : null}
      <UnderstandEstimate tool={tool} />
      <RelatedTools slug={tool.slug} />
      <div className="no-print">
      <FinalCTA />
      </div>
    </>
  );
}
