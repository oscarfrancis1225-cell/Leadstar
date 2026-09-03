import { articles } from "../../lib/content/articles";

const titles = new Map<string, string>();
const descriptions = new Map<string, string>();
const issues: string[] = [];

for (const article of articles) {
  if (article.relatedSlugs.length !== 3) {
    issues.push(`${article.slug}: expected 3 related slugs, found ${article.relatedSlugs.length}`);
  }
  if (!article.summary) {
    issues.push(`${article.slug}: missing answer-first summary`);
  }
  if (!article.image.alt) {
    issues.push(`${article.slug}: missing alt text`);
  }
  const titleOwner = titles.get(article.metaTitle);
  if (titleOwner) {
    issues.push(`Duplicate title: ${article.metaTitle} (${titleOwner}, ${article.slug})`);
  }
  titles.set(article.metaTitle, article.slug);

  const descriptionOwner = descriptions.get(article.excerpt);
  if (descriptionOwner) {
    issues.push(`Duplicate description: ${article.slug} / ${descriptionOwner}`);
  }
  descriptions.set(article.excerpt, article.slug);
}

if (issues.length) {
  console.error(issues.join("\n"));
  process.exit(1);
}

console.log(`Validated ${articles.length} articles, published and scheduled.`);
