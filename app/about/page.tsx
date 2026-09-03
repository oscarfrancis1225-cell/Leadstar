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

export const metadata: Metadata = {
  title: "About LeadStar Financial",
  description:
    "Esther Francis is a single parent in Boca Raton and an insurance agent licensed in Florida and California. LeadStar Financial talks about life insurance, retirement income, and Medicare questions in plain language.",
  alternates: { canonical: "/about" },
};

const philosophy = [
  {
    title: "Plan",
    text: "Write down the job the money has to do. Income for a stretch of years. A month of retirement spending. A house. A business partner. Start there.",
  },
  {
    title: "Protect",
    text: "Look at what would actually be there if a paycheck stopped. Existing coverage. Savings. A continuation notice. Then look at the gap.",
  },
  {
    title: "Prosper",
    text: "Then look at options that fit that job. This is not a promise that money will grow or that a certain future will happen.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About LeadStar"
        title="What if the person who keeps the lights on is also the only backup plan?"
        description="Esther Francis knows that feeling. She is a single parent in Boca Raton. LeadStar Financial starts with the paycheck, not a product name."
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
            What if the person who keeps the lights on is also the only backup
            plan?
          </p>
          <p className="lead">
            Esther Francis knows that feeling. She is a single parent in Boca
            Raton. She is a Financial Services Professional and an insurance
            agent licensed in Florida and California.
          </p>
          <p className="lead">
            That is why LeadStar talks about the paycheck first, not a product
            name. The firm is the place for those conversations. Esther&apos;s
            profile is the person behind them.
          </p>
          <p className="lead">
            People often start with term vs whole life, or they hunt for a
            quote form, before they know the job the money has to do. Figure
            out how much life insurance you need first. A quote comes later, if
            it comes at all. There is no application on this website.
          </p>
          <p className="lead">
            {siteConfig.entityNote} Phone, email, and the Margate mailing
            address are on the{" "}
            <Link href="/contact" className="text-blue hover:underline">
              Contact
            </Link>{" "}
            and{" "}
            <Link href="/office" className="text-blue hover:underline">
              Office
            </Link>{" "}
            pages. License numbers appear on the{" "}
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
            <p className="mt-4 text-sm leading-6 text-muted">
              Office photographs are on a dedicated page.{" "}
              <Link href="/office#gallery" className="text-blue hover:underline">
                See office photographs
              </Link>
            </p>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}