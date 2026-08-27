"use client";

import { useEffect, useId, useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

export type FadeCarouselImage = {
  src: string;
  alt: string;
};

type FadeCarouselProps = {
  images: readonly FadeCarouselImage[];
  label: string;
  sizes: string;
  encodeSrc?: boolean;
  overlay?: React.ReactNode;
  imageClassName?: string | ((index: number) => string);
};

const rotateMs = 5500;

export function FadeCarousel({
  images,
  label,
  sizes,
  encodeSrc = false,
  overlay,
  imageClassName,
}: FadeCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const labelId = useId();
  const slide = images[index];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches || paused || images.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, rotateMs);

    return () => window.clearInterval(timer);
  }, [images.length, paused]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <p id={labelId} className="sr-only">
        {label}
      </p>
      {images.map((image, imageIndex) => (
        <div
          key={image.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out",
            imageIndex === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={imageIndex !== index}
        >
          <SmartImage
            src={encodeSrc ? encodeURI(image.src) : image.src}
            alt={imageIndex === index ? image.alt : ""}
            fill
            priority={imageIndex === 0}
            sizes={sizes}
            className="absolute inset-0 h-full w-full"
            imgClassName={
              typeof imageClassName === "function"
                ? imageClassName(imageIndex)
                : (imageClassName ?? "object-cover object-center")
            }
          />
        </div>
      ))}
      {overlay}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((image, imageIndex) => (
          <button
            key={image.src}
            type="button"
            className={cn(
              "h-1.5 rounded-full transition-all",
              imageIndex === index
                ? "w-5 bg-gold"
                : "w-1.5 bg-white/45 hover:bg-white/70",
            )}
            aria-label={`Show photo ${imageIndex + 1} of ${images.length}`}
            aria-current={imageIndex === index ? "true" : undefined}
            onClick={() => setIndex(imageIndex)}
          />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {slide.alt}
      </p>
    </div>
  );
}
