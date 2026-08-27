import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceProductCard } from "@/lib/content/types";

const listHeadings: Record<string, string> = {
  "retirement-services": "Account and contract types",
  "medicare-insurance": "Parts of Medicare",
  "health-insurance": "Plan network types",
};

type ProductTypeCardsProps = {
  serviceSlug: string;
  items: readonly ServiceProductCard[];
};

export function ProductTypeCards({ serviceSlug, items }: ProductTypeCardsProps) {
  if (items.length === 0) {
    return null;
  }

  const heading = listHeadings[serviceSlug] ?? "Products in this category";

  return (
    <div className="mt-10">
      <h2 className="headline text-3xl">{heading}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">
        Each name opens a short page. This is what it is, and what it is for.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={`${item.slug}-${item.href}`}>
            <Link
              href={item.href}
              className="card block h-full p-6 transition-colors hover:border-gold/40"
            >
              <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.purpose}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                Read more
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
