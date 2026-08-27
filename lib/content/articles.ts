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

export function getPublishedArticles() {
  return articles.filter((article) => article.publicationStatus === "published");
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: Article) {
  return article.relatedSlugs
    .map((slug) => getArticle(slug))
    .filter((item): item is Article => Boolean(item));
}

export function getArticlesByPillar() {
  const groups = new Map<string, Article[]>();
  for (const article of getPublishedArticles()) {
    const current = groups.get(article.pillar) ?? [];
    current.push(article);
    groups.set(article.pillar, current);
  }
  return groups;
}

export function getFeaturedArticles(count = 3) {
  return getPublishedArticles().slice(0, count);
}
