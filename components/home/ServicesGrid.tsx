import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconByName } from "@/components/ui/IconMap";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ServicesGridProps = {
  className?: string;
};

export function ServicesGrid({ className }: ServicesGridProps) {
  return (
    <div className={cn(className)} aria-labelledby="services-heading" role="region">
      <h2 id="services-heading" className="sr-only">
        Services
      </h2>
      <div className="rounded-[18px] border border-line bg-white px-4 py-8 shadow-card sm:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="min-w-0">
      <div className="mb-4 text-gold">
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
