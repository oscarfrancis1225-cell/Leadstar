import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { EditorialImage } from "@/components/blog/EditorialImage";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { estherFrancis } from "@/lib/content/authors";
import { siteConfig } from "@/lib/content/site";
import { values } from "@/lib/constants";
import { officeGallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "About LeadStar Financial",
  description:
    "LeadStar Financial keeps insurance and financial-protection conversations simple. Esther Francis is licensed in Florida and California.",
  alternates: { canonical: "/about" },
};

const philosophy = [
  {
    title: "Plan",
    text: "Understand goals, priorities, and circumstances. Create a clear strategy. Coordinate with other professionals when appropriate and authorized.",
  },
  {
    title: "Protect",
    text: "Consider risks to income, family, health coverage, home, business, and accumulated assets.",
  },
  {
    title: "Prosper",
    text: "Support thoughtful long-term financial progress consistent with the client's goals and available strategies. This is not a promise of a particular outcome.",
  },
];

export default function AboutPage() {
  const teamPhotos = officeGallery.filter((image) => !image.src.includes("ChatGPT"));

  return (
    <>
      <PageHero
        eyebrow="About LeadStar"
        title="Financial Guidance Built Around Real Life"
        description="LeadStar Financial was formed to do things differently and keep the process simple. The aim is clearer conversations — not a harder sell."
      />
      <section className="bg-white py-10">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
        </Container>
      </section>
      <section className="bg-white pb-16">
        <Container className="max-w-3xl space-y-5">
          <h2 className="headline text-3xl">Our story</h2>
          <p className="lead">
            {siteConfig.legalName} was formed to keep insurance and
            financial-protection conversations personal and understandable. Many
            relationships begin through introductions from friends, colleagues,
            and other professionals.
          </p>
          <p className="lead">
            Esther Francis is an insurance agent licensed in Florida and
            California. {siteConfig.entityNote} A street address and a verified
            phone number are not published on this page until they are confirmed
            for public use. License numbers appear on the{" "}
            <Link href="/disclosures" className="text-blue hover:underline">
              Disclosures
            </Link>{" "}
            page.
          </p>
        </Container>
      </section>
      <section className="bg-cream py-16">
        <Container>
          <p className="eyebrow">Guiding idea</p>
          <h2 className="headline mt-3 text-3xl">{siteConfig.tagline}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {philosophy.map((item) => (
              <article key={item.title} className="card p-7">
                <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <h2 className="headline text-3xl">What makes our approach different</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="card p-7">
                <h3 className="font-serif text-2xl text-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-cream py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <EditorialImage
            src={estherFrancis.image.src}
            alt={estherFrancis.image.alt}
            width={estherFrancis.image.width}
            height={estherFrancis.image.height}
            caption={estherFrancis.image.caption}
            className="max-w-md"
          />
          <div>
            <p className="eyebrow">Meet Esther</p>
            <h2 className="headline mt-3 text-3xl">{estherFrancis.name}</h2>
            <p className="mt-2 text-sm text-muted">{estherFrancis.jobTitle}</p>
            <p className="lead mt-4">{estherFrancis.shortBio}</p>
            <div className="mt-6">
              <Button href={estherFrancis.href} variant="blue" showArrow>
                Read Esther&apos;s profile
              </Button>
            </div>
          </div>
        </Container>
      </section>
      {teamPhotos.length > 0 ? (
        <section className="bg-white py-16">
          <Container>
            <h2 className="headline text-3xl">Team imagery</h2>
            <p className="lead mt-4 max-w-2xl">
              Photographs appear here only when they are real, consented
              pictures. AI-generated office images are not shown as team photos.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {teamPhotos.map((image) => (
                <EditorialImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  caption="A LeadStar team photograph. Confirm people and setting before treating this caption as a named event."
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <section className="bg-cream py-16">
        <Container className="max-w-2xl">
          <h2 className="headline text-3xl">Start a conversation</h2>
          <p className="lead mt-4">
            If you want a calmer first discussion about protection or planning,
            we can begin there.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="gold" showArrow>
              Start a conversation
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted">
            Looking for the office gallery?{" "}
            <Link href="/office" className="text-blue hover:underline">
              Visit the office page
            </Link>
            .
          </p>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
