"use client";

import { useEffect, useId, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TestimonialsCarouselProps = {
  items: React.ReactNode[];
};

const rotateMs = 6500;

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const labelId = useId();
  const total = items.length;

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches || paused || total < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, rotateMs);

    return () => window.clearInterval(timer);
  }, [total, paused]);

  const goTo = (next: number) => setIndex(((next % total) + total) % total);

  return (
    <div
      className="relative mt-12"
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <p id={labelId} className="sr-only">
        Client testimonials
      </p>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="w-full shrink-0 px-1"
              aria-hidden={itemIndex !== index}
            >
              <div className="mx-auto max-w-2xl">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-navy shadow-soft transition-colors hover:border-gold hover:text-gold"
          aria-label="Previous testimonial"
          onClick={() => goTo(index - 1)}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-1.5">
          {items.map((_, itemIndex) => (
            <button
              key={itemIndex}
              type="button"
              className={cn(
                "h-1.5 rounded-full transition-all",
                itemIndex === index
                  ? "w-5 bg-gold"
                  : "w-1.5 bg-line hover:bg-muted/50",
              )}
              aria-label={`Show testimonial ${itemIndex + 1} of ${total}`}
              aria-current={itemIndex === index ? "true" : undefined}
              onClick={() => goTo(itemIndex)}
            />
          ))}
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-navy shadow-soft transition-colors hover:border-gold hover:text-gold"
          aria-label="Next testimonial"
          onClick={() => goTo(index + 1)}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
