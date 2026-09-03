import { getPublishedArticles } from "@/lib/content/articles";
import { estherFrancis } from "@/lib/content/authors";
import {
  disclosuresDocument,
  privacyDocument,
  temporaryUseDocument,
  termsDocument,
} from "@/lib/content/legal";
import { productPages } from "@/lib/content/product-entries";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/content/site";
import { tools } from "@/lib/content/tools";
import { getSiteUrl } from "@/lib/site-url";

export const INDEX_GROUPS = [
  "Start here",
  "Services",
  "Insights",
  "Tools",
  "Legal",
] as const;

export type IndexGroup = (typeof INDEX_GROUPS)[number];

export type IndexableEntry = {
  path: string;
  title: string;
  description: string;
  group: IndexGroup;
  lastModified?: string;
};

const REDIRECTED_PATHS = new Set([
  "/reviews",
  "/guides",
  "/blog/life-insurance-at-every-stage",
  "/blog/understanding-medicare",
  "/blog/retirement-planning-starting-point",
]);

const MONTHS: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

export function parseDisplayDateToIso(value: string): string | undefined {
  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  const match = trimmed.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (!match) {
    return undefined;
  }

  const month = MONTHS[match[1].toLowerCase()];
  const day = Number(match[2]);
  const year = Number(match[3]);
  if (!month || day < 1 || day > 31) {
    return undefined;
  }

  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function staticLastModified(): string | undefined {
  return parseDisplayDateToIso(siteConfig.legalUpdatedOn);
}

function entry(
  path: string,
  title: string,
  description: string,
  group: IndexGroup,
  lastModified?: string,
): IndexableEntry {
  return {
    path,
    title,
    description,
    group,
    ...(lastModified ? { lastModified } : {}),
  };
}

export function absoluteUrl(path: string, siteUrl = getSiteUrl()): string {
  if (path === "/") {
    return siteUrl;
  }
  return `${siteUrl}${path}`;
}

export function clipForLlms(text: string, maxChars = 120): string {
  const compact = text.replace(/\s+/g, " ").trim();
  if (compact.length <= maxChars) {
    return compact;
  }

  const slice = compact.slice(0, maxChars);
  const breakAt = slice.lastIndexOf(" ");
  const clipped = (breakAt >= Math.floor(maxChars * 0.6) ? slice.slice(0, breakAt) : slice)
    .trim()
    .replace(/[.,;:]+$/, "");
  return clipped;
}

export function firstSentences(text: string, count: number): string {
  const compact = text.replace(/\s+/g, " ").trim();
  const parts = compact.match(/[^.!?]+[.!?]+(?:\s+|$)/g);
  if (!parts || parts.length === 0) {
    return compact;
  }
  return parts.slice(0, count).join("").trim();
}

export function getIndexableEntries(): IndexableEntry[] {
  const legalDate = staticLastModified();

  const startHere: IndexableEntry[] = [
    entry(
      "/",
      siteConfig.name,
      siteConfig.metadata.description,
      "Start here",
      legalDate,
    ),
    entry(
      "/about",
      "About LeadStar Financial",
      "Esther Francis is a single parent in Boca Raton and an insurance agent licensed in Florida and California. LeadStar Financial talks about life insurance, retirement income, and Medicare questions in plain language.",
      "Start here",
      legalDate,
    ),
    entry(
      estherFrancis.href,
      estherFrancis.name,
      estherFrancis.shortBio,
      "Start here",
      legalDate,
    ),
    entry(
      "/contact",
      "Contact",
      "What still has to get paid this week? Tell LeadStar Financial about a life insurance, retirement income, or Medicare question. There is no application and no quote on this website.",
      "Start here",
      legalDate,
    ),
    entry(
      "/faq",
      "FAQ",
      "Do I have to get a quote first? No. Plain answers about life insurance conversations with LeadStar Financial, Florida and California licensing, Medicare pages, and educational tools.",
      "Start here",
      legalDate,
    ),
  ];

  const serviceEntries: IndexableEntry[] = [
    entry(
      "/services",
      "Services",
      "Compare the job of the money first, not the product name. Life insurance, term vs whole, retirement income, turning 65 Medicare, health insurance after a job change, final expense, mortgage protection.",
      "Services",
      legalDate,
    ),
    ...services.map((service) =>
      entry(service.href, service.title, service.description, "Services", legalDate),
    ),
    ...productPages.map((page) =>
      entry(page.href, page.title, page.description, "Services", legalDate),
    ),
  ];

  const insightEntries: IndexableEntry[] = [
    entry(
      "/blog",
      "Insights",
      "How much life insurance do I need? What changes when you turn 65? How does a paycheck become retirement income? Educational articles from LeadStar Financial. This is not individualized advice.",
      "Insights",
      legalDate,
    ),
    ...getPublishedArticles().map((article) =>
      entry(article.href, article.title, article.excerpt, "Insights", article.updatedAt),
    ),
  ];

  const toolEntries: IndexableEntry[] = [
    entry(
      "/tools",
      "Financial Tools",
      "Run the numbers before you guess. Educational calculators for how much life insurance you need, retirement income, compound growth, mortgage obligation, and cash reserves, plus a turning 65 enrollment-period calendar and a printable beneficiary checklist. Illustrations, not quotes.",
      "Tools",
      legalDate,
    ),
    ...tools.map((tool) =>
      entry(tool.href, tool.title, tool.description, "Tools", legalDate),
    ),
  ];

  const legalEntries: IndexableEntry[] = [
    entry(
      privacyDocument.href,
      privacyDocument.title,
      privacyDocument.description,
      "Legal",
      legalDate,
    ),
    entry(
      termsDocument.href,
      termsDocument.title,
      termsDocument.description,
      "Legal",
      legalDate,
    ),
    entry(
      temporaryUseDocument.href,
      temporaryUseDocument.title,
      temporaryUseDocument.description,
      "Legal",
      legalDate,
    ),
    entry(
      disclosuresDocument.href,
      disclosuresDocument.title,
      disclosuresDocument.description,
      "Legal",
      legalDate,
    ),
    entry(
      "/sitemap",
      "Sitemap",
      "Every public LeadStar page in one list, grouped for people first: start here, services, articles, tools, and legal.",
      "Legal",
      legalDate,
    ),
  ];

  return [
    ...startHere,
    ...serviceEntries,
    ...insightEntries,
    ...toolEntries,
    ...legalEntries,
  ].filter((item) => !REDIRECTED_PATHS.has(item.path));
}

export function getIndexableEntriesByGroup(): Array<{
  group: IndexGroup;
  entries: IndexableEntry[];
}> {
  const entries = getIndexableEntries();
  return INDEX_GROUPS.map((group) => ({
    group,
    entries: entries.filter((item) => item.group === group),
  })).filter((section) => section.entries.length > 0);
}

export function getIndexableEntry(path: string): IndexableEntry | undefined {
  return getIndexableEntries().find((item) => item.path === path);
}