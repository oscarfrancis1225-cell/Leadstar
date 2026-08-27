import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TestimonialCard } from "@/components/reviews/TestimonialCard";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-transparent py-20 lg:py-24">
      <Container wide>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Client conversations</p>
          <h2 className="headline mt-4 text-3xl sm:text-4xl lg:text-[2.85rem]">
            Peace of mind starts
            <br />
            with a conversation.
          </h2>
        </div>
        <TestimonialsCarousel
          items={testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              quote={item.quote}
              name={item.name}
              image={item.image}
            />
          ))}
        />
        <div className="mt-10 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
          >
            Read all reviews
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
