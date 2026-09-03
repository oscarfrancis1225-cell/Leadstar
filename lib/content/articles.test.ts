import { describe, expect, it } from "vitest";
import {
  articles,
  getArticle,
  getArticlesByPillar,
  getFeaturedArticles,
  getPublicationToday,
  getPublishedArticles,
  getRelatedArticles,
  getVisibleArticle,
  getVisibleArticles,
  isArticleVisible,
} from "@/lib/content/articles";

const FIRST_DAY = "2026-09-03";
const LAST_DAY = "2026-09-17";

/** The schedule the owner approved. Forward dates only, no invented history. */
const SCHEDULE: ReadonlyArray<readonly [string, string]> = [
  ["how-much-life-insurance-do-i-need", "2026-09-03"],
  ["turning-65-medicare-timeline", "2026-09-05"],
  ["retirement-income-transition", "2026-09-07"],
  ["mortgage-protection-vs-term-life", "2026-09-08"],
  ["health-coverage-before-medicare", "2026-09-10"],
  ["what-final-expense-insurance-does", "2026-09-11"],
  ["life-insurance-single-parents-solo-earners", "2026-09-13"],
  ["financial-questions-after-divorce", "2026-09-15"],
  ["key-person-vs-buy-sell", "2026-09-16"],
  ["first-financial-planning-meeting", "2026-09-17"],
];

function daysBetween(from: string, to: string) {
  const ms = Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`);
  return ms / 86_400_000;
}

describe("publication schedule", () => {
  it("gives every article its scheduled date and no earlier stamp", () => {
    expect(articles.length).toBe(SCHEDULE.length);
    for (const [slug, date] of SCHEDULE) {
      const article = getArticle(slug);
      expect(article, `missing article ${slug}`).toBeDefined();
      expect(article?.publishedAt).toBe(date);
      expect(article?.updatedAt).toBe(date);
    }
  });

  it("starts on the first day, ends on the last, and spaces articles by one or two days", () => {
    const dates = SCHEDULE.map(([, date]) => date);
    expect(dates[0]).toBe(FIRST_DAY);
    expect(dates[dates.length - 1]).toBe(LAST_DAY);
    expect(new Set(dates).size).toBe(dates.length);
    for (let index = 1; index < dates.length; index += 1) {
      const gap = daysBetween(dates[index - 1], dates[index]);
      expect(gap).toBeGreaterThanOrEqual(1);
      expect(gap).toBeLessThanOrEqual(2);
    }
  });

  it("keeps review state pending and preserves the source-driven review dates", () => {
    for (const article of articles) {
      expect(article.reviewAttestation).toBe("pending");
      expect(article.lastReviewedAt).toBe("2026-09-03");
    }
    expect(getArticle("turning-65-medicare-timeline")?.nextReviewAt).toBe("2026-10-01");
    expect(getArticle("health-coverage-before-medicare")?.nextReviewAt).toBe("2026-11-27");
  });
});

describe("schedule visibility gate", () => {
  it("reads the current day in the practice time zone", () => {
    expect(getPublicationToday()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    // 2026-09-18T02:30Z is still the evening of 2026-09-17 in New York.
    expect(getPublicationToday(new Date("2026-09-18T02:30:00Z"))).toBe("2026-09-17");
    expect(getPublicationToday(new Date("2026-09-18T12:00:00Z"))).toBe("2026-09-18");
  });

  it("publishes only the first article on the first day", () => {
    const live = getPublishedArticles(FIRST_DAY);
    expect(live.map((article) => article.slug)).toEqual([
      "how-much-life-insurance-do-i-need",
    ]);
    expect(getFeaturedArticles(3, FIRST_DAY)).toHaveLength(1);
    expect(Array.from(getArticlesByPillar(FIRST_DAY).values()).flat()).toHaveLength(1);
  });

  it("publishes every article once the last scheduled day arrives", () => {
    expect(getPublishedArticles(LAST_DAY)).toHaveLength(SCHEDULE.length);
    expect(getFeaturedArticles(3, LAST_DAY)).toHaveLength(3);
  });

  it("releases each article on its own date and not before", () => {
    for (const [slug, date] of SCHEDULE) {
      const article = getArticle(slug);
      if (!article) {
        throw new Error(`missing article ${slug}`);
      }
      const dayBefore = new Date(Date.parse(`${date}T00:00:00Z`) - 86_400_000)
        .toISOString()
        .slice(0, 10);
      expect(isArticleVisible(article, dayBefore)).toBe(false);
      expect(isArticleVisible(article, date)).toBe(true);
      expect(getVisibleArticle(slug, dayBefore)).toBeUndefined();
      expect(getVisibleArticle(slug, date)?.slug).toBe(slug);
    }
  });

  it("never links to an article that is not live yet", () => {
    for (const [, day] of SCHEDULE) {
      for (const article of articles) {
        for (const related of getRelatedArticles(article, day)) {
          expect(related.publishedAt <= day).toBe(true);
        }
      }
    }
    expect(
      getVisibleArticles(["first-financial-planning-meeting"], FIRST_DAY),
    ).toEqual([]);
    expect(
      getVisibleArticles(
        ["first-financial-planning-meeting", "not-a-real-article"],
        LAST_DAY,
      ).map((article) => article.slug),
    ).toEqual(["first-financial-planning-meeting"]);
  });
});
