import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "LeadStar Financial publishes only verified client comments. Real reviews will appear here after written permission is received.",
  alternates: { canonical: "/reviews" },
  robots: { index: false, follow: true },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Verified client comments will appear here"
        description="We do not publish placeholder, invented, or AI-generated testimonials. When a client gives written permission for a comment that reflects their current opinion, it can appear on this page."
      />
      <section className="bg-white py-16 lg:py-20">
        <Container className="max-w-2xl">
          <p className="lead">
            If you have worked with LeadStar and would like to share a comment,
            start a conversation and we will explain the permission process.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="blue" showArrow>
              Start a conversation
            </Button>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
