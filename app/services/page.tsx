import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { IconByName } from "@/components/ui/IconMap";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Compare the job of the money first, not the product name. Life insurance, term vs whole, retirement income, turning 65 Medicare, health insurance after a job change, final expense, mortgage protection.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Which job does the money have to do?"
        description="Income replacement is not the same as a house payment. A birthday is not Medicare enrollment. Compare the job first. The product name comes after."
      />
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="card grid gap-6 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gold-soft text-gold">
                <IconByName name={service.icon} className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-navy">{service.title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                  {service.description}
                </p>
              </div>
              <Link
                href={service.href}
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          ))}
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
