import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconByName } from "@/components/ui/IconMap";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore life insurance, retirement, Medicare, health insurance, final expense, mortgage protection, and business planning conversations.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Protection and planning for the chapters that matter"
        description="Explore coverage and planning conversations designed to help you compare options with more clarity and less pressure."
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
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          ))}
          <div className="pt-4">
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
