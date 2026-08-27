import type { ArticleSource } from "@/lib/content/types";

export function ArticleSources({ sources }: { sources: readonly ArticleSource[] }) {
  if (sources.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="headline text-2xl">Sources</h2>
      <ul className="mt-4 space-y-2">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm leading-7 text-blue underline-offset-2 hover:underline"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
