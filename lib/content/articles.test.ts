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

const PUBLISH_DAY = "2026-09-03";

describe("publication dates", () => {
  it("stamps every article 2026-09-03 after the owner asked to publish all ten at once", () => {
    expect(articles.length).toBe(10);
    for (const article of articles) {
      expect(article.publishedAt).toBe(PUBLISH_DAY);
      expect(article.updatedAt).toBe(PUBLISH_DAY);
      expect(article.publicationStatus).toBe("published");
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

describe("visibility gate", () => {
  it("reads the current day in the practice time zone", () => {
    expect(getPublicationToday()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    // 2026-09-18T02:30Z is still the evening of 2026-09-17 in New York.
    expect(getPublicationToday(new Date("2026-09-18T02:30:00Z"))).toBe("2026-09-17");
    expect(getPublicationToday(new Date("2026-09-18T12:00:00Z"))).toBe("2026-09-18");
  });

  it("is visible only when published and publishedAt is on or before today", () => {
    const article = getArticle("how-much-life-insurance-do-i-need");
    if (!article) {
      throw new Error("missing article");
    }
    expect(isArticleVisible(article, "2026-09-02")).toBe(false);
    expect(isArticleVisible(article, PUBLISH_DAY)).toBe(true);
    expect(getVisibleArticle(article.slug, "2026-09-02")).toBeUndefined();
    expect(getVisibleArticle(article.slug, PUBLISH_DAY)?.slug).toBe(article.slug);
  });

  it("makes all ten articles visible on 2026-09-03", () => {
    const live = getPublishedArticles(PUBLISH_DAY);
    expect(live).toHaveLength(10);
    expect(getFeaturedArticles(3, PUBLISH_DAY)).toHaveLength(3);
    expect(Array.from(getArticlesByPillar(PUBLISH_DAY).values()).flat()).toHaveLength(10);
  });

  it("never links to an article that is not live yet", () => {
    expect(getPublishedArticles("2026-09-02")).toEqual([]);
    for (const article of articles) {
      for (const related of getRelatedArticles(article, "2026-09-02")) {
        expect(related.publishedAt <= "2026-09-02").toBe(true);
      }
      for (const related of getRelatedArticles(article, PUBLISH_DAY)) {
        expect(related.publishedAt <= PUBLISH_DAY).toBe(true);
      }
    }
    expect(
      getVisibleArticles(["first-financial-planning-meeting"], "2026-09-02"),
    ).toEqual([]);
    expect(
      getVisibleArticles(
        ["first-financial-planning-meeting", "not-a-real-article"],
        PUBLISH_DAY,
      ).map((article) => article.slug),
    ).toEqual(["first-financial-planning-meeting"]);
  });
});
