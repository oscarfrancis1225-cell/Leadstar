import type { Author } from "@/lib/content/types";

export const estherFrancis = {
  slug: "esther-francis",
  name: "Esther Francis",
  jobTitle: "Financial Services Professional",
  href: "/about/esther-francis",
  shortBio:
    "Esther Francis is a single parent in Boca Raton and an insurance agent licensed in Florida and California. She starts with the paycheck, not a product name.",
  bio: [
    "What if the person who keeps the lights on is also the only backup plan?",
    "Esther Francis knows that feeling. She is a single parent in Boca Raton. She is a Financial Services Professional and an insurance agent licensed in Florida and California.",
    "The About page is the firm story. This page is hers. She starts with the paycheck your family already lives on, not a product name.",
    "Esther has been licensed in Florida for life insurance since 2010. She also holds a Florida health license. She is licensed in California too. She previously worked at larger financial-services firms, including J.P. Morgan and MassMutual. Those are past roles, not current jobs or endorsements. She likes to simplify a money decision that feels too big.",
    "How much life insurance do I need, term vs whole, retirement income, turning 65 Medicare, health insurance after a job change: those are the conversations she has. There is no application on this website. If you want to talk, start a conversation.",
  ],
  areasOfFocus: [
    "How much life insurance do I need, and term vs whole life",
    "Retirement income and Social Security questions",
    "Turning 65 and the Medicare enrollment period",
    "Health insurance after a job change",
    "Final expense insurance and mortgage protection",
    "Business-owner protection questions",
  ],
  personalNotes: [
    "Outside of work she enjoys family, cooking, and traveling.",
    "She has written that she feels a special connection with other single parents facing the money impact of divorce.",
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