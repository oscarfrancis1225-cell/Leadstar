import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { PageHero } from "@/components/layout/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { getIndexableEntriesByGroup, getIndexableEntry } from "@/lib/seo/site-index";

const sitemapEntry = getIndexableEntry("/sitemap");

export const metadata: Metadata = {
  title: sitemapEntry?.title ?? "Sitemap",
  description:
    sitemapEntry?.description ??
    "A plain-language list of LeadStar pages for people and search engines.",
  alternates: { canonical: "/sitemap" },
};

export default function SitemapPage() {
  const sections = getIndexableEntriesByGroup();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Sitemap", href: "/sitemap" },
        ]}
      />
      <PageHero
        eyebrow="Sitemap"
        title="Every public page, in one list"
        description="Grouped the way the site is organized: start here, services, articles, tools, and legal. For people first. Search engines can use it too."
      />
      <section className="bg-white py-10">
        <Container className="max-w-4xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Sitemap" },
            ]}
          />
        </Container>
      </section>
      <section className="bg-white pb-8">
        <Container className="max-w-4xl">
          <nav aria-label="Sitemap sections">
            <ul className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <li key={section.group}>
                  <a
                    href={`#${anchorId(section.group)}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-line bg-cream px-4 text-sm font-medium text-navy hover:border-gold hover:text-navy"
                  >
                    {section.group}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>
      <section className="bg-white pb-16">
        <Container className="max-w-4xl space-y-14">
          {sections.map((section) => (
            <div key={section.group} id={anchorId(section.group)}>
              <p className="eyebrow text-gold">{section.group}</p>
              <h2 className="headline mt-3 text-3xl">{section.group}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {section.entries.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="card block h-full p-5 transition-shadow hover:shadow-card"
                    >
                      <p className="font-serif text-xl text-navy">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>
      <section className="border-t border-line bg-cream py-10">
        <Container className="max-w-4xl">
          <p className="text-sm leading-7 text-muted">
            A machine-readable XML sitemap is available at{" "}
            <Link href="/sitemap.xml" className="font-semibold text-blue hover:underline">
              /sitemap.xml
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}

function anchorId(group: string) {
  return group.toLowerCase().replace(/\s+/g, "-");
}