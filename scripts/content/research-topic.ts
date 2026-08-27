import { getArticle } from "../../lib/content/articles";

const slug = process.argv[2];

if (!slug) {
  console.error("Usage: npm run content:research -- <slug>");
  process.exit(1);
}

const article = getArticle(slug);

if (!article) {
  console.error(`Unknown slug: ${slug}`);
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      slug: article.slug,
      title: article.title,
      primaryQueryHint: article.h1,
      sources: article.sources,
      note: "Per-query SERP review belongs in content/research/<slug>.md. Do not invent search volume.",
    },
    null,
    2,
  ),
);
