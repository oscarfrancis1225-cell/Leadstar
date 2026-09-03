import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description: "Career inquiries for LeadStar Financial.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Interested in working with LeadStar?"
        description="Role details and openings will be listed here when they are available."
      />
      <section className="bg-white py-16">
        <Container className="max-w-2xl">
          <p className="lead">
            There are no openings listed right now. If you want to introduce
            yourself, send a note to {siteConfig.email}.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Contact the team
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
