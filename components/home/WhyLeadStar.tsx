import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/constants";

export function WhyLeadStar() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <Container wide>
        <SectionHeading
          eyebrow="Why LeadStar"
          title="Guidance built around real life"
          description="A relationship-first approach to evaluating protection and planning options with clarity."
        />
        <ul className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <li key={value.title}>
              <article className="flex h-full items-start gap-3.5 rounded-2xl border border-line bg-white p-3.5 shadow-card sm:gap-4 sm:p-5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-1 ring-gold/40 sm:h-[4.5rem] sm:w-[4.5rem]">
                  <Image
                    src={value.image.src}
                    alt=""
                    width={value.image.width}
                    height={value.image.height}
                    sizes="72px"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-serif text-[1.15rem] leading-snug text-navy sm:text-xl">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-[0.82rem] leading-5 text-muted sm:mt-1.5 sm:text-sm sm:leading-6">
                    {value.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
