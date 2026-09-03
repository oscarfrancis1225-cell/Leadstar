import { estherFrancis } from "@/lib/content/authors";
import { siteConfig } from "@/lib/content/site";
import { siteImages } from "@/lib/images";
import type { Article } from "@/lib/content/types";
import {
  getLicenseCredentials,
  getPublicEmail,
  getPublicPostalAddress,
  getPublicSameAs,
  getPublicTelephone,
} from "@/lib/seo/public-identity";
import { getSiteUrl } from "@/lib/site-url";

function jsonLdScript(data: Record<string, unknown>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function personNode(siteUrl: string) {
  const credentials = getLicenseCredentials();

  return {
    "@type": "Person",
    "@id": `${siteUrl}${estherFrancis.href}#person`,
    name: estherFrancis.name,
    jobTitle: estherFrancis.jobTitle,
    url: `${siteUrl}${estherFrancis.href}`,
    worksFor: { "@id": `${siteUrl}/#organization` },
    image: `${siteUrl}${estherFrancis.image.src}`,
    description: estherFrancis.shortBio,
    ...(credentials.length > 0 ? { hasCredential: credentials } : {}),
  };
}

function organizationNode(siteUrl: string) {
  const telephone = getPublicTelephone();
  const email = getPublicEmail();
  const address = getPublicPostalAddress();
  const sameAs = getPublicSameAs();

  return {
    "@type": ["Organization", "InsuranceAgency"],
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.metadata.description,
    slogan: siteConfig.tagline,
    logo: `${siteUrl}${siteImages.logo.src}`,
    image: `${siteUrl}${siteImages.ogShare.src}`,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Florida" },
      { "@type": "AdministrativeArea", name: "California" },
    ],
    knowsAbout: [
      "life insurance",
      "retirement income",
      "Medicare education",
      "health coverage",
      "final expense",
      "mortgage protection",
      "business planning",
    ],
    employee: personNode(siteUrl),
    ...(telephone ? { telephone } : {}),
    ...(email ? { email } : {}),
    ...(address ? { address } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function OrganizationJsonLd() {
  const siteUrl = getSiteUrl();
  return jsonLdScript({
    "@context": "https://schema.org",
    ...organizationNode(siteUrl),
  });
}

export function WebSiteJsonLd() {
  const siteUrl = getSiteUrl();
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    inLanguage: "en-US",
    publisher: { "@id": `${siteUrl}/#organization` },
  });
}

export function ProfilePageJsonLd() {
  const siteUrl = getSiteUrl();
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}${estherFrancis.href}#profile`,
    url: `${siteUrl}${estherFrancis.href}`,
    name: `${estherFrancis.name}, ${estherFrancis.jobTitle}`,
    mainEntity: personNode(siteUrl),
    publisher: { "@id": `${siteUrl}/#organization` },
  });
}

export function BlogPostingJsonLd({ article }: { article: Article }) {
  const siteUrl = getSiteUrl();
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: [`${siteUrl}${article.image.src}`],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: personNode(siteUrl),
    publisher: organizationNode(siteUrl),
    mainEntityOfPage: `${siteUrl}${article.href}`,
  });
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: readonly { name: string; href: string }[];
}) {
  const siteUrl = getSiteUrl();
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  });
}

export function FAQPageJsonLd({
  faqs,
}: {
  faqs: readonly { question: string; answer: string }[];
}) {
  if (faqs.length === 0) {
    return null;
  }

  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
}