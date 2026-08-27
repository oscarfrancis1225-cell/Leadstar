"use client";

import { FadeCarousel } from "@/components/ui/FadeCarousel";
import { advisorCarousel } from "@/lib/images";

export function AdvisorCarousel() {
  return (
    <FadeCarousel
      images={advisorCarousel}
      label="Advisor photos"
      sizes="(min-width: 1024px) 30vw, 90vw"
      encodeSrc
      imageClassName={(imageIndex) =>
        imageIndex === 0
          ? "object-cover object-[42%_10%]"
          : "object-cover object-center"
      }
    />
  );
}
