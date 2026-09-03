import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { FinalCTA } from "@/components/home/FinalCTA";
import { LicensingNotice } from "@/components/legal/LicensingNotice";
import { PageHero } from "@/components/layout/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/constants";
import { getDisclaimer } from "@/lib/content/disclaimers";
import { getOwnedProductParams, getProductPage } from "@/lib/content/product-entries";

type ProductPageProps = {
  params: Promise<{ slug: string; productSlug: string }>;
};

export function generateStaticParams() {
  return getOwnedProductParams();
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug, productSlug } = await params;
  const page = getProductPage(slug, productSlug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: page.href },
  };
}

export default async function ServiceProductPage({ params }: ProductPageProps) {
  const { slug, productSlug } = await params;
  const service = services.find((item) => item.slug === slug);
  const page = getProductPage(slug, productSlug);

  if (!service || !page) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: service.href },
          { name: page.title, href: page.href },
        ]}
      />
      <PageHero eyebrow={service.title} title={page.title} description={page.hook} />
      <section className="bg-white py-10">
        <Container className="max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: service.href },
              { label: page.title },
            ]}
          />
        </Container>
      </section>
      <section className="bg-white pb-16">
        <Container className="max-w-3xl">
          <p className="font-serif text-2xl leading-8 text-navy">{page.question}</p>
          <LicensingNotice />
          <div className="mt-10">
            <ArticleBody sections={page.sections} />
          </div>
          {page.relatedLinks.length > 0 ? (
            <div className="mt-10 border-t border-line pt-8">
              <p className="text-sm font-medium text-navy">Related pages</p>
              <ul className="mt-3 grid gap-2">
                {page.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-semibold text-blue">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={service.href} variant="secondary">
              Back to {service.title}
            </Button>
          </div>
          <p className="mt-10 text-sm leading-6 text-muted">
            {getDisclaimer(page.disclaimerVariant)}
          </p>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
