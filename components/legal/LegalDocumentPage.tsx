import { ArticleBody } from "@/components/blog/ArticleBody";
import { AnswerSummary } from "@/components/blog/AnswerSummary";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import type { LegalDocument } from "@/lib/content/types";

export function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: document.title, href: document.href },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title={document.title}
        description={document.description}
      />
      <section className="bg-white py-10">
        <Container className="max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: document.title },
            ]}
          />
        </Container>
      </section>
      <section className="bg-white pb-16">
        <Container className="max-w-3xl space-y-8">
          <p className="text-sm text-muted">
            Last updated {document.lastUpdated}
          </p>
          <AnswerSummary text={document.summary} />
          <ArticleBody sections={document.sections} />
        </Container>
      </section>
    </>
  );
}
