import { QuoteButton } from "@/components/ui/QuoteButton";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="bg-navy">
      <Container wide className="flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="headline text-3xl text-white sm:text-4xl">
            Ready to take the next step?
          </h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            Start a conversation and explore solutions designed around what
            matters most to you.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <QuoteButton variant="gold" showArrow>
            Get a Quote
          </QuoteButton>
          <QuoteButton variant="ghost" event="consultation">
            Schedule Consultation
          </QuoteButton>
        </div>
      </Container>
    </section>
  );
}
