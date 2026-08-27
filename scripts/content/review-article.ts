import { getArticle } from "../../lib/content/articles";

const slug = process.argv[2];
const article = slug ? getArticle(slug) : undefined;

if (!article) {
  console.error("Usage: npm run content:review -- <slug>");
  process.exit(1);
}

const checks = {
  slug: article.slug,
  hasSummary: Boolean(article.summary),
  headingCount: article.sections.filter((section) => section.type === "heading").length,
  sourceCount: article.sources.length,
  relatedCount: article.relatedSlugs.length,
  reviewAttestation: article.reviewAttestation,
  freshnessType: article.freshnessType,
  nextReviewAt: article.nextReviewAt,
  readyForByline: article.reviewAttestation === "signed",
};

console.log(JSON.stringify(checks, null, 2));
