import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HeroTransition } from "@/components/home/HeroTransition";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { WhyLeadStar } from "@/components/home/WhyLeadStar";
import { ProducerIdentification } from "@/components/legal/ProducerIdentification";
import { Container } from "@/components/ui/Container";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="border-y border-line bg-cream py-4">
        <Container>
          <ProducerIdentification />
        </Container>
      </section>
      <HeroTransition />
      <ProcessSection />
      <WhyLeadStar />
      <ResourcesSection />
      <FinalCTA />
    </>
  );
}
