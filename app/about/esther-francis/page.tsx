import type { Metadata } from "next";
import Link from "next/link";
import { AnswerSummary } from "@/components/blog/AnswerSummary";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { EditorialImage } from "@/components/blog/EditorialImage";
import { ProfilePageJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getPublishedArticles } from "@/lib/content/articles";
import { estherFrancis } from "@/lib/content/authors";

export const metadata: Metadata = {
  title: `${estherFrancis.name} | ${estherFrancis.jobTitle}`,
  description: estherFrancis.shortBio,
  alternates: { canonical: estherFrancis.href },
};

export default function EstherFrancisPage() {
  const reviewedArticles = getPublishedArticles().slice(0, 6);

  return (
    <>
      <ProfilePageJsonLd />
      <article className="bg-white py-16">
        <Container className="max-w-3xl space-y-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: estherFrancis.name },
            ]}
          />
          <p className="eyebrow">Professional profile</p>
          <h1 className="headline text-4xl sm:text-5xl">{estherFrancis.name}</h1>
          <p className="text-lg text-muted">{estherFrancis.jobTitle}</p>
          <EditorialImage
            src={estherFrancis.image.src}
            alt={estherFrancis.image.alt}
            width={estherFrancis.image.width}
            height={estherFrancis.image.height}
            caption={estherFrancis.image.caption}
            priority
          />
          <AnswerSummary text={estherFrancis.shortBio} label="Profile" />
          {estherFrancis.bio.map((paragraph) => (
            <p key={paragraph} className="lead">
              {paragraph}
            </p>
          ))}
          <section>
            <h2 className="headline text-3xl">Areas of focus</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {estherFrancis.areasOfFocus.map((item) => (
                <li key={item} className="text-base leading-7 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="headline text-3xl">Outside of work</h2>
            {estherFrancis.personalNotes.map((paragraph) => (
              <p key={paragraph} className="lead mt-4">
                {paragraph}
              </p>
            ))}
          </section>
          <p className="text-sm leading-6 text-muted">
            Esther is licensed in Florida and California. License numbers and
            verification links are on the{" "}
            <Link href="/disclosures" className="text-blue hover:underline">
              Disclosures
            </Link>{" "}
            page. Titles such as Registered Investment Adviser, Certified
            Financial Planner, fiduciary, or Medicare specialist are not used
            here because they have not been documented for this site.
          </p>
          <Button href="/contact" variant="blue" showArrow>
            Start a conversation
          </Button>
        </Container>
        <Container className="mt-16 max-w-6xl">
          <h2 className="headline text-3xl">Related articles</h2>
          <p className="lead mt-3 max-w-2xl">
            These articles were prepared by the LeadStar editorial team.
            Esther&apos;s signed review attestation is pending unless an
            article says otherwise.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {reviewedArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </article>
    </>
  );
}
