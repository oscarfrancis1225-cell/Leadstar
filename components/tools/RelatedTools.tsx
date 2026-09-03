import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section className="no-print border-t border-line bg-white py-8">
      <div className="container-site">
        <h2 className="text-sm font-semibold text-navy">Other tools</h2>
        <ul className="mt-3 grid gap-2">
          {related.map((tool) => (
            <li key={tool.slug}>
              <Link
                href={tool.href}
                className="flex min-h-11 items-center justify-between gap-3 rounded-[12px] border border-line px-4 py-3 text-sm text-navy"
              >
                <span>
                  <span className="font-semibold">{tool.title}.</span>{" "}
                  <span className="text-muted">{tool.shortDescription}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-blue" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
