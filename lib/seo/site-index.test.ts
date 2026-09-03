import { describe, expect, it } from "vitest";
import {
  articles,
  getPublicationToday,
  getPublishedArticles,
} from "@/lib/content/articles";
import { siteConfig } from "@/lib/content/site";
import {
  getLicenseCredentials,
  getPublicEmail,
  getPublicPostalAddress,
  getPublicSameAs,
  getPublicTelephone,
} from "@/lib/seo/public-identity";
import { getIndexableEntries, parseDisplayDateToIso } from "@/lib/seo/site-index";

describe("public identity schema gates", () => {
  it("publishes phone, email, and address when verified, plus licenses and LinkedIn sameAs", () => {
    expect(siteConfig.contactVerified.phone).toBe(true);
    expect(siteConfig.contactVerified.email).toBe(true);
    expect(siteConfig.contactVerified.address).toBe(true);
    expect(getPublicTelephone()).toBe("(954) 449-3101");
    expect(getPublicEmail()).toBe("efrancis@leadstarfinancial.com");
    expect(getPublicPostalAddress()).toEqual({
      "@type": "PostalAddress",
      streetAddress: "6666 Saltaire Terrace",
      addressLocality: "Margate",
      addressRegion: "FL",
      postalCode: "33063",
      addressCountry: "US",
    });
    expect(getPublicSameAs()).toEqual(["https://www.linkedin.com/in/francisesther"]);
    const credentials = getLicenseCredentials();
    expect(credentials.map((item) => item.identifier).sort()).toEqual(
      ["0J00767", "W011875"].sort(),
    );
  });
});

describe("site index lastmod", () => {
  it("parses legalUpdatedOn to an ISO date", () => {
    expect(parseDisplayDateToIso("August 27, 2026")).toBe("2026-08-27");
  });

  it("uses article updatedAt or legal date, never an invented stamp", () => {
    const legalDate = parseDisplayDateToIso(siteConfig.legalUpdatedOn);
    const articleDates = new Set(
      getPublishedArticles().map((article) => article.updatedAt),
    );
    const entries = getIndexableEntries();
    expect(entries.length).toBeGreaterThan(10);
    for (const entry of entries) {
      expect(entry.lastModified).toBeDefined();
      const allowed =
        entry.lastModified === legalDate ||
        (entry.lastModified ? articleDates.has(entry.lastModified) : false);
      expect(allowed).toBe(true);
    }
    const home = entries.find((item) => item.path === "/");
    expect(home?.lastModified).toBe("2026-08-27");
    expect(entries.some((item) => item.path === "/reviews")).toBe(false);
    expect(entries.some((item) => item.path === "/guides")).toBe(false);
    expect(entries.some((item) => item.path === "/sitemap")).toBe(true);
    expect(entries.some((item) => item.path === "/tools/turning-65")).toBe(true);
    expect(entries.some((item) => item.path === "/tools/beneficiary-checklist")).toBe(
      true,
    );
  });

  it("indexes an article only when it is published and publishedAt has arrived", () => {
    const today = getPublicationToday();
    const indexed = new Set(getIndexableEntries().map((item) => item.path));
    for (const article of articles) {
      const live =
        article.publicationStatus === "published" && article.publishedAt <= today;
      expect(indexed.has(article.href)).toBe(live);
    }
    expect(indexed.has("/blog")).toBe(true);
  });

  it("includes all ten articles in the index on 2026-09-03", () => {
    expect(articles).toHaveLength(10);
    expect(getPublishedArticles("2026-09-03")).toHaveLength(10);
    const today = getPublicationToday();
    if (today >= "2026-09-03") {
      const indexed = new Set(getIndexableEntries().map((item) => item.path));
      for (const article of articles) {
        expect(article.publishedAt).toBe("2026-09-03");
        expect(indexed.has(article.href)).toBe(true);
      }
    }
  });
});
