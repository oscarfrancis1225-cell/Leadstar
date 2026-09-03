import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconByName } from "@/components/ui/IconMap";
import { getRelatedTools } from "@/lib/content/tools";

type RelatedToolsProps = {
  slug: string;
};

export function RelatedTools({ slug }: RelatedToolsProps) {
  const related = getRelatedTools(slug);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="no-print bg-white py-12 lg:py-16">
      <div className="container-site">
        <p className="eyebrow">Other tools</p>
        <h2 className="headline mt-3 text-3xl">Continue exploring</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((tool) => (
            <Link key={tool.slug} href={tool.href} className="card block p-5">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gold-soft text-gold">
                <IconByName name={tool.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-serif text-xl text-navy">{tool.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{tool.shortDescription}</p>
              <span className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue">
                Calculate
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
