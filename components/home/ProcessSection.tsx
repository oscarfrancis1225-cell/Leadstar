import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <Container wide>
        <SectionHeading
          eyebrow="How a first conversation works"
          title="Four conversations. Same person."
        />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <ol className="relative grid grid-cols-2 gap-x-6 gap-y-10 lg:gap-x-10">
            {processSteps.map((step) => (
              <li key={step.number} className="relative">
                <div className="relative z-10 mb-4 grid h-10 w-10 place-items-center rounded-full bg-blue text-sm font-semibold text-white">
                  {Number(step.number)}
                </div>
                <h3 className="text-base font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="official-frame">
            <div className="official-frame-mat">
              <div className="flex min-h-[17rem] flex-col justify-center bg-navy px-8 py-10 sm:px-10">
                <p className="eyebrow text-gold">What stays the same</p>
                <p className="headline mt-3 text-[1.6rem] leading-tight text-white sm:text-[1.85rem]">
                  One licensed agent, from the first question to the
                  follow-up.
                </p>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/85">
                  Esther Francis is an insurance agent licensed in Florida and
                  California. She starts with the paycheck, not a product name.
                </p>
                <p className="mt-5 border-t border-white/15 pt-4 text-sm leading-7 text-white/75">
                  There is no application on this website. No product is
                  offered or recommended on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
