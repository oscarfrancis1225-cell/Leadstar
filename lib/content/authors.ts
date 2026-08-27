import type { Author } from "@/lib/content/types";

export const estherFrancis = {
  slug: "esther-francis",
  name: "Esther Francis",
  jobTitle: "Financial Services Professional",
  href: "/about/esther-francis",
  shortBio:
    "Esther Francis is a Financial Services Professional and an insurance agent licensed in Florida and California.",
  bio: [
    "Esther Francis works with professionals, business owners, and individuals who want a calmer way to think about protection and long-term planning. She is an insurance agent licensed in Florida and California.",
    "Her stated approach is to simplify financial conversations so people can make informed decisions with greater confidence. She has a particular interest in the questions that accompany major life transitions, including divorce and single parenthood.",
    "She also helps people think through health coverage and Medicare-related transitions. Medicare pages on this site stay educational. An initial conversation is used to determine whether working together is a fit.",
  ],
  areasOfFocus: [
    "Life and family protection conversations",
    "Retirement-income questions",
    "Medicare and health-coverage transitions",
    "Business-owner protection planning",
  ],
  personalNotes: [
    "Outside of work she enjoys family, cooking, traveling, and community involvement.",
    "Community roles mentioned in public materials are not published here until Esther confirms them.",
  ],
  image: {
    src: "/images/Office/me.png",
    alt: "Portrait of Esther Francis, Financial Services Professional",
    width: 1400,
    height: 1750,
    caption: "Esther Francis, Financial Services Professional.",
    purpose: "hero",
  },
} as const satisfies Author;

export const authors = [estherFrancis] as const;

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}
