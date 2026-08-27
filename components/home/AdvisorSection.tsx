import Link from "next/link";
import { MapPin } from "lucide-react";
import { AdvisorCarousel } from "@/components/home/AdvisorCarousel";
import { Button } from "@/components/ui/Button";
import { IconByName } from "@/components/ui/IconMap";
import { advisor, advisorTrustPoints } from "@/lib/constants";

export function AdvisorSection() {
  return (
    <div
      className="grid items-center gap-8 pt-10 pb-2 sm:pt-12 lg:min-h-[300px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.7fr)_minmax(0,0.95fr)] lg:gap-8 lg:pt-12 lg:pb-4"
      aria-labelledby="advisor-heading"
      role="region"
    >
      <div className="order-1 max-w-[27rem]">
        <p className="eyebrow">{advisor.eyebrow}</p>
        <h2
          id="advisor-heading"
          className="headline mt-3 text-[2rem] text-white sm:text-[2.125rem]"
        >
          {advisor.title}
        </h2>
        <p className="mt-3.5 max-w-[25.5rem] text-[0.94rem] leading-7 text-white/86">
          {advisor.bio}
        </p>
        <div className="mt-6 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center sm:gap-6">
          <Button
            href={advisor.ctaHref}
            variant="gold"
            showArrow
            className="min-h-12 px-6 shadow-none"
          >
            {advisor.ctaLabel}
          </Button>
          <Link
            href={advisor.officeHref}
            className="inline-flex items-center gap-2 border-b border-gold pb-0.5 text-sm font-medium text-white transition-colors hover:text-gold-soft"
          >
            <MapPin className="h-4 w-4 text-gold" aria-hidden />
            {advisor.officeLabel}
          </Link>
        </div>
      </div>

      <ul className="order-3 grid grid-cols-1 gap-4 border-t border-white/15 pt-5 sm:grid-cols-3 sm:gap-5 lg:order-2 lg:grid-cols-1 lg:gap-0 lg:border-t-0 lg:pt-0">
        {advisorTrustPoints.map((point, index) => (
          <li
            key={`${point.title}-${point.subtitle}`}
            className={`flex min-w-0 items-center gap-3 sm:flex-col sm:items-start sm:gap-0 lg:py-3 ${
              index > 0 ? "border-t border-white/12 pt-4 sm:border-t-0 sm:pt-0 lg:border-t lg:border-white/18 lg:pt-3" : ""
            }`}
          >
            <IconByName name={point.icon} className="h-6 w-6 shrink-0 text-gold lg:h-5 lg:w-5" />
            <div>
              <p className="font-serif text-[1.5rem] leading-none text-white sm:mt-2 lg:text-[1.28rem]">
                {point.title}
              </p>
              <p className="mt-1 text-[0.95rem] leading-5 text-white/80 lg:text-[0.78rem]">
                {point.subtitle}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="relative order-2 w-full lg:order-3 lg:h-full">
        <div className="official-frame h-full">
          <div className="official-frame-mat">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy lg:aspect-auto lg:h-full lg:min-h-[240px]">
              <AdvisorCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
