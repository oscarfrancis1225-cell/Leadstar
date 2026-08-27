import { EditorialImage } from "@/components/blog/EditorialImage";
import type { ArticleSection } from "@/lib/content/types";

export function ArticleBody({ sections }: { sections: readonly ArticleSection[] }) {
  return (
    <div className="article-body space-y-6">
      {sections.map((section, index) => (
        <ArticleSectionBlock key={`${section.type}-${index}`} section={section} />
      ))}
    </div>
  );
}

function ArticleSectionBlock({ section }: { section: ArticleSection }) {
  if (section.type === "heading") {
    const className =
      section.level === 2
        ? "headline scroll-mt-28 text-3xl"
        : "scroll-mt-28 font-serif text-2xl text-navy";
    if (section.level === 2) {
      return <h2 id={section.id} className={className}>{section.text}</h2>;
    }
    return <h3 id={section.id} className={className}>{section.text}</h3>;
  }

  if (section.type === "paragraph") {
    return <p className="lead">{section.text}</p>;
  }

  if (section.type === "list") {
    const ListTag = section.ordered ? "ol" : "ul";
    return (
      <ListTag className={section.ordered ? "list-decimal space-y-2 pl-5" : "list-disc space-y-2 pl-5"}>
        {section.items.map((item) => (
          <li key={item} className="text-base leading-7 text-ink">
            {item}
          </li>
        ))}
      </ListTag>
    );
  }

  if (section.type === "table") {
    return (
      <figure className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr>
              {section.headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-line bg-cream px-4 py-3 font-semibold text-navy"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, rowIndex) => (
              <tr key={row.join("-")}>
                {row.map((cell, cellIndex) => (
                  <td key={`${rowIndex}-${cellIndex}`} className="border-b border-line px-4 py-3 align-top text-ink">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {section.caption ? (
          <figcaption className="mt-2 text-sm text-muted">{section.caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  if (section.type === "callout") {
    return (
      <aside className="rounded-[16px] border border-gold-soft bg-gold-soft/40 px-5 py-4">
        {section.title ? <p className="font-semibold text-navy">{section.title}</p> : null}
        <p className="mt-2 text-sm leading-7 text-ink">{section.text}</p>
      </aside>
    );
  }

  return (
    <EditorialImage
      src={section.image.src}
      alt={section.image.alt}
      width={section.image.width}
      height={section.image.height}
      caption={section.image.caption}
    />
  );
}
