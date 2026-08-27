import type { ArticleSection } from "@/lib/content/types";

type TableOfContentsProps = {
  sections: readonly ArticleSection[];
};

export function TableOfContents({ sections }: TableOfContentsProps) {
  const headings = sections.filter(
    (section): section is Extract<ArticleSection, { type: "heading" }> =>
      section.type === "heading" && section.level === 2,
  );

  if (headings.length < 4) {
    return null;
  }

  return (
    <nav aria-label="Article contents" className="rounded-[16px] border border-line bg-white p-5">
      <p className="text-sm font-semibold text-navy">In this article</p>
      <ol className="mt-3 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-sm leading-6 text-blue underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
