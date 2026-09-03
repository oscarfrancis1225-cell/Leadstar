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
          title="Conversations that start with the decision in front of you"
          description="Not a product name. The first hour is about what you actually have to decide, and in what order."
        />
        <ul className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <li key={value.title}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-3.5 shadow-card sm:p-5">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-1 ring-gold/40 sm:h-16 sm:w-16">
                    <Image
                      src={value.image.src}
                      alt=""
                      width={value.image.width}
                      height={value.image.height}
                      sizes="64px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="min-w-0 font-serif text-[1.15rem] leading-snug text-navy sm:text-xl">
                    {value.title}
                  </h3>
                </div>
                <p className="mt-3 text-[0.82rem] leading-5 text-muted sm:mt-3.5 sm:text-sm sm:leading-6">
                  {value.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
