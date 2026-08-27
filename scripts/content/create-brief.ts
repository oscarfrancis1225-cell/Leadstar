import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { getArticle } from "../../lib/content/articles";

const slug = process.argv[2];

if (!slug) {
  console.error("Usage: npm run content:brief -- <slug>");
  process.exit(1);
}

const article = getArticle(slug);

if (!article) {
  console.error(`Unknown slug: ${slug}`);
  process.exit(1);
}

const brief = {
  topic: article.title,
  slug: article.slug,
  pillar: article.pillar,
  primaryAudience: "See approved plan brief",
  searchIntent: "informational",
  primaryQuery: article.h1,
  recommendedTitle: article.title,
  metaTitle: article.metaTitle,
  metaDescription: article.excerpt,
  h1: article.h1,
  uniqueValue: article.dek,
  outline: article.sections
    .filter((section) => section.type === "heading")
    .map((section) => ("text" in section ? section.text : "")),
  primarySources: article.sources,
  internalLinks: article.relatedSlugs,
  serviceLink: article.serviceHref,
  toolLinks: article.toolHrefs ?? [],
  evergreenStatus: article.freshnessType,
  reviewFrequency: article.nextReviewAt,
  sourceOfTruth: "The research plan briefs are authoritative. This file formalizes the published article.",
};

async function main() {
  const dest = path.join(process.cwd(), "content", "briefs", `${slug}.json`);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, `${JSON.stringify(brief, null, 2)}\n`, "utf8");
  console.log(`Wrote ${dest}`);
}

void main();
