import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { PageHero } from "@/components/layout/PageHero";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about working with LeadStar Financial, licensing, the contact form, and educational tools.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "What happens after I submit the form?",
    answer:
      "A member of the LeadStar team can follow up to learn more about what you would like help with and discuss possible next steps.",
  },
  {
    question: "Do I have to pick a product before we talk?",
    answer:
      "No. You can select “Not Sure Yet” and start with a conversation about your goals, timing, and concerns.",
  },
  {
    question: "Is this a quote or an application?",
    answer:
      "The website form is a request for follow-up. It is not an application and does not bind coverage.",
  },
  {
    question: "Where is Esther Francis licensed?",
    answer:
      "Esther Francis is an insurance agent licensed in Florida and California. License numbers and official lookup links are on the Disclosures page. No other states are claimed on this website.",
  },
  {
    question: "How is my information used?",
    answer:
      "The contact form is used to respond to your request. LeadStar does not sell that information. The Privacy Policy explains what is collected and how to make a privacy request.",
  },
  {
    question: "Are the calculators quotes?",
    answer:
      "No. The tools are illustrations that use the numbers you type. They are not quotes, product illustrations, or recommendations.",
  },
  {
    question: "Do Medicare pages recommend a plan?",
    answer:
      "No. Medicare pages explain program mechanics only. LeadStar Financial is not affiliated with or endorsed by the U.S. government or the federal Medicare program.",
  },
  {
    question: "Does using the website make me a client?",
    answer:
      "No. Browsing, using a tool, or sending the form does not create a client or insurance relationship. See Terms of Use and Temporary Use.",
  },
];

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <FAQPageJsonLd faqs={faqs} />
      <PageHero
        eyebrow="FAQ"
        title="A few questions people ask first"
        description="These answers are general and intended to make the first conversation easier to start."
      />
      <section className="bg-white py-10">
        <Container className="max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ" },
            ]}
          />
        </Container>
      </section>
      <section className="bg-white pb-16">
        <Container className="max-w-3xl space-y-6">
          {faqs.map((item) => (
            <article key={item.question} className="card p-6">
              <h2 className="font-serif text-2xl text-navy">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
            </article>
          ))}
          <p className="text-sm leading-6 text-muted">
            For licensing details, see{" "}
            <Link href="/disclosures" className="font-semibold text-blue hover:underline">
              Disclosures
            </Link>
            . For the contact form, see the{" "}
            <Link href="/privacy" className="font-semibold text-blue hover:underline">
              Privacy Policy
            </Link>
            . {siteConfig.licenses.advertisingDisclaimer}
          </p>
        </Container>
      </section>
    </>
  );
}
