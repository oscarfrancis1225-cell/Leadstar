import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HeroTransition } from "@/components/home/HeroTransition";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { WhyLeadStar } from "@/components/home/WhyLeadStar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroTransition />
      <ProcessSection />
      <WhyLeadStar />
      <ResourcesSection />
      <FinalCTA />
    </>
  );
}
