import { Star } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";

type TestimonialCardProps = {
  quote: string;
  name: string;
  image: string;
};

export function TestimonialCard({ quote, name, image }: TestimonialCardProps) {
  return (
    <figure className="card flex h-full flex-col p-7">
      {/* Placeholder visual rating only. Verify real reviews before launch. */}
      <div className="flex gap-1 text-gold" aria-hidden>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-5 flex-1 text-[1.02rem] leading-8 text-navy italic">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <SmartImage
          src={image}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <span className="text-sm font-medium text-navy">{name}</span>
      </figcaption>
    </figure>
  );
}
