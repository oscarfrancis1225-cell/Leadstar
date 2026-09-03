"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { IconByName } from "@/components/ui/IconMap";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";

const MOBILE_PREVIEW_COUNT = 4;

type ServicesGridProps = {
  className?: string;
};

export function ServicesGrid({ className }: ServicesGridProps) {
  const [expanded, setExpanded] = useState(false);
  const remainderCount = Math.max(0, services.length - MOBILE_PREVIEW_COUNT);
  const extraId = "homepage-more-services";

  return (
    <div className={cn(className)} aria-labelledby="services-heading" role="region">
      <h2 id="services-heading" className="sr-only">
        Services
      </h2>
      <div className="rounded-[18px] border border-line bg-white px-3.5 py-6 shadow-card sm:px-6 sm:py-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-6 md:gap-y-8 lg:grid-cols-4">
          {services.map((service, index) => {
            const isExtra = index >= MOBILE_PREVIEW_COUNT;
            return (
              <ServiceCard
                key={service.slug}
                service={service}
                id={isExtra && index === MOBILE_PREVIEW_COUNT ? extraId : undefined}
                className={isExtra && !expanded ? "hidden md:block" : undefined}
              />
            );
          })}
        </div>
        {remainderCount > 0 ? (
          <div className="mt-6 flex justify-center md:hidden">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-[10px] border border-line bg-cream px-4 text-sm font-semibold text-navy"
              aria-expanded={expanded}
              aria-controls={extraId}
              onClick={() => setExpanded((open) => !open)}
            >
              {expanded
                ? "Show fewer services"
                : `Show ${remainderCount} more ${remainderCount === 1 ? "service" : "services"}`}
              {expanded ? (
                <ChevronUp className="h-4 w-4" aria-hidden />
              ) : (
                <ChevronDown className="h-4 w-4" aria-hidden />
              )}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  className,
  id,
}: {
  service: (typeof services)[number];
  className?: string;
  id?: string;
}) {
  return (
    <article id={id} className={cn("min-w-0", className)}>
      <div className="mb-3 text-gold md:mb-4">
        <IconByName name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-[0.95rem] font-semibold leading-6 text-navy">
        {service.title}
      </h3>
      <p className="mt-2 text-[0.82rem] leading-5 text-muted">
        {service.shortDescription}
      </p>
      <Link
        href={service.href}
        className="mt-4 inline-flex min-h-11 items-center gap-1 text-[0.82rem] font-semibold text-blue"
      >
        Learn more
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    </article>
  );
}
