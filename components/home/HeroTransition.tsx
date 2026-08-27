import { AdvisorSection } from "@/components/home/AdvisorSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Container } from "@/components/ui/Container";

export function HeroTransition() {
  return (
    <section className="advisor-band" aria-label="Services and advisor">
      <Container wide className="flex flex-col">
        <ServicesGrid className="relative z-10 -mt-[var(--panel-overhang)]" />
        <AdvisorSection />
      </Container>
    </section>
  );
}
