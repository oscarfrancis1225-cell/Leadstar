import { financialQuestionsAfterDivorce } from "@/lib/content/article-entries/financial-questions-after-divorce";
import { firstFinancialPlanningMeeting } from "@/lib/content/article-entries/first-financial-planning-meeting";
import { healthCoverageBeforeMedicare } from "@/lib/content/article-entries/health-coverage-before-medicare";
import { howMuchLifeInsuranceDoINeed } from "@/lib/content/article-entries/how-much-life-insurance-do-i-need";
import { keyPersonVsBuySell } from "@/lib/content/article-entries/key-person-vs-buy-sell";
import { lifeInsuranceSingleParentsSoloEarners } from "@/lib/content/article-entries/life-insurance-single-parents-solo-earners";
import { mortgageProtectionVsTermLife } from "@/lib/content/article-entries/mortgage-protection-vs-term-life";
import { retirementIncomeTransition } from "@/lib/content/article-entries/retirement-income-transition";
import { turning65MedicareTimeline } from "@/lib/content/article-entries/turning-65-medicare-timeline";
import { whatFinalExpenseInsuranceDoes } from "@/lib/content/article-entries/what-final-expense-insurance-does";
import type { Article } from "@/lib/content/types";

const articleEntries = [
  howMuchLifeInsuranceDoINeed,
  retirementIncomeTransition,
  turning65MedicareTimeline,
  healthCoverageBeforeMedicare,
  mortgageProtectionVsTermLife,
  whatFinalExpenseInsuranceDoes,
  keyPersonVsBuySell,
  financialQuestionsAfterDivorce,
  lifeInsuranceSingleParentsSoloEarners,
  firstFinancialPlanningMeeting,
] satisfies readonly Article[];

export const articles: readonly Article[] = articleEntries;

export type ArticleSlug = Article["slug"];

/**
 * Articles are scheduled forward, never backdated. Each entry stores the
 * calendar day it is meant to go live in publishedAt, and nothing here rewrites
 * that stored date. An article whose publishedAt is later than the current day
 * is withheld from every public surface that reads through these helpers: the
 * blog index, the XML sitemap, the HTML sitemap, llms.txt, llms-full.txt, the
 * related-article rails, and the article page itself.
 *
 * Because the site is prerendered, a scheduled article becomes visible on the
 * first build or revalidation that happens on or after its date.
 */
export const PUBLICATION_TIME_ZONE = "America/New_York";

const publicationDayFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: PUBLICATION_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/** The current calendar day in the practice time zone, as YYYY-MM-DD. */
export function getPublicationToday(now: Date = new Date()): string {
  const parts = publicationDayFormatter.formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((item) => item.type === type)?.value ?? "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

/** True when an article is approved for publication and its date has arrived. */
export function isArticleVisible(
  article: Article,
  today: string = getPublicationToday(),
): boolean {
  return article.publicationStatus === "published" && article.publishedAt <= today;
}

export function getPublishedArticles(today: string = getPublicationToday()) {
  return articles.filter((article) => isArticleVisible(article, today));
}

/**
 * Slug lookup with no schedule gate. Use getVisibleArticle for anything that
 * renders a public link or page.
 */
export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getVisibleArticle(
  slug: string,
  today: string = getPublicationToday(),
): Article | undefined {
  const article = getArticle(slug);
  return article && isArticleVisible(article, today) ? article : undefined;
}

export function getVisibleArticles(
  slugs: readonly string[],
  today: string = getPublicationToday(),
): Article[] {
  return slugs
    .map((slug) => getVisibleArticle(slug, today))
    .filter((article): article is Article => Boolean(article));
}

export function getRelatedArticles(
  article: Article,
  today: string = getPublicationToday(),
) {
  return getVisibleArticles(article.relatedSlugs, today);
}

export function getArticlesByPillar(today: string = getPublicationToday()) {
  const groups = new Map<string, Article[]>();
  for (const article of getPublishedArticles(today)) {
    const current = groups.get(article.pillar) ?? [];
    current.push(article);
    groups.set(article.pillar, current);
  }
  return groups;
}

export function getFeaturedArticles(count = 3, today: string = getPublicationToday()) {
  return getPublishedArticles(today).slice(0, count);
}
