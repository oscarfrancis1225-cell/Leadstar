import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="bg-navy">
      <Container wide className="flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="headline text-3xl text-white sm:text-4xl">
            Bring the question you actually have.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            A short form is enough to start. No quote. No application on this
            website.
          </p>
        </div>
        <Button href="/contact" variant="gold" showArrow className="shrink-0">
          Start a conversation
        </Button>
      </Container>
    </section>
  );
}
