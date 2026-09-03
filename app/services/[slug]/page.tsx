import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerSummary } from "@/components/blog/AnswerSummary";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleSources } from "@/components/blog/ArticleSources";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { FinalCTA } from "@/components/home/FinalCTA";
import { LicensingNotice } from "@/components/legal/LicensingNotice";
import { PageHero } from "@/components/layout/PageHero";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ProductTypeCards } from "@/components/services/ProductTypeCards";
import { getDisclaimer } from "@/lib/content/disclaimers";
import { getVisibleArticles } from "@/lib/content/articles";
import { getServicePage } from "@/lib/content/service-entries";
import { services, tools } from "@/lib/constants";

const serviceToolSlugs: Record<string, string[]> = {
  "retirement-services": ["retirement-income", "retirement-goal", "compound-growth"],
  "life-insurance": ["protection-needs", "beneficiary-checklist"],
  "medicare-insurance": ["turning-65"],
  "mortgage-protection": ["mortgage-protection"],
  "final-expense": [],
};

function ServiceToolLinks({ slug }: { slug: string }) {
  const related = (serviceToolSlugs[slug] ?? [])
    .map((toolSlug) => tools.find((tool) => tool.slug === toolSlug))
    .filter((tool): tool is (typeof tools)[number] => Boolean(tool));

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 border-t border-line pt-8">
      <p className="text-sm font-medium text-navy">Related educational tools</p>
      <ul className="mt-3 grid gap-2">
        {related.map((tool) => (
          <li key={tool.slug}>
            <Link href={tool.href} className="text-sm font-semibold text-blue">
              {tool.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const page = getServicePage(slug);

  if (!service) {
    return {};
  }

  return {
    title: page?.metaTitle ?? service.title,
    description: service.description,
    alternates: { canonical: service.href },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const page = getServicePage(slug);

  if (!service || !page) {
    notFound();
  }

  const relatedArticles = getVisibleArticles(page.relatedArticleSlugs);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: service.href },
        ]}
      />
      <FAQPageJsonLd faqs={page.faqs} />
      <PageHero
        eyebrow="Services"
        title={service.title}
        description={service.description}
      />
      <section className="bg-white py-10">
        <Container className="max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
        </Container>
      </section>
      <section className="bg-white pb-16">
        <Container className="max-w-3xl">
          <AnswerSummary text={service.summary} />
          <LicensingNotice />
          <ProductTypeCards serviceSlug={service.slug} items={page.productTypes} />
          <div className="mt-10">
            <ArticleBody sections={page.sections} />
          </div>
          {page.faqs.length > 0 ? (
            <div className="mt-12 space-y-6">
              <h2 className="headline text-3xl">Questions people ask first</h2>
              {page.faqs.map((item) => (
                <article key={item.question} className="card p-6">
                  <h3 className="font-serif text-2xl text-navy">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                </article>
              ))}
            </div>
          ) : null}
          <div className="mt-10">
            <ArticleSources sources={page.sources} />
          </div>
          <ServiceToolLinks slug={service.slug} />
          <p className="mt-10 text-sm leading-6 text-muted">
            {getDisclaimer(page.disclaimerVariant)}
          </p>
        </Container>
      </section>
      {relatedArticles.length > 0 ? (
        <section className="bg-cream py-16">
          <Container>
            <RelatedArticles articles={relatedArticles} />
          </Container>
        </section>
      ) : null}
      <FinalCTA />
    </>
  );
}
