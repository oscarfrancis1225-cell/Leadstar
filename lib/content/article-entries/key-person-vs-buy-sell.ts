import { articleHero } from "@/lib/content/article-entries/hero";
import type { Article } from "@/lib/content/types";

export const keyPersonVsBuySell = {
  slug: "key-person-vs-buy-sell",
  href: "/blog/key-person-vs-buy-sell",
  title: "Key Person Insurance vs. Buy-Sell Agreements: Two Different Jobs",
  metaTitle: "Key Person Insurance vs. Buy-Sell Agreements",
  excerpt:
    "Both use life insurance, but they solve different problems. An unfunded buy-sell is a promise. A policy without an agreement is money without instructions.",
  dek: "Operational risk and ownership risk are separate exposures.",
  h1: "Key Person Insurance vs. Buy-Sell Agreements: Two Different Jobs",
  category: "Business Planning",
  pillar: "Business Owner Planning",
  image: articleHero(
    "key-person-vs-buy-sell",
    "Illustrative photograph of professionals reviewing documents in a conference room",
    "Illustrative image: a business-continuity conversation. Not a LeadStar client.",
  ),
  publishedAt: "2026-08-27",
  updatedAt: "2026-08-27",
  lastReviewedAt: "2026-08-27",
  reviewedBy: "Esther Francis",
  reviewAttestation: "pending",
  freshnessType: "evergreen",
  nextReviewAt: "2027-08-27",
  readingTimeMinutes: 10,
  summary:
    "Key person insurance helps a company absorb the financial shock if a critical person dies. A buy-sell agreement decides how ownership transfers. Life insurance can fund the agreement, but one policy structure does not usually do both jobs well.",
  sections: [
    {
      type: "heading",
      level: 2,
      id: "the-short-answer",
      text: "The short answer",
    },
    {
      type: "paragraph",
      text: "If a business would struggle to replace a person, that is an operating problem. If an owner’s share would pass to an estate, that is an ownership problem. Life insurance can support both. It does not make them the same problem.",
    },
    {
      type: "heading",
      level: 2,
      id: "job-one",
      text: "Job 1: keeping the business running",
    },
    {
      type: "paragraph",
      text: "Key person life insurance is typically owned by the business, paid by the business, and payable to the business. The insured is the person whose absence would damage revenue, credit, or operations. The death benefit is meant to buy time: replace the person, reassure lenders, or cover a period of lower cash flow.",
    },
    {
      type: "heading",
      level: 2,
      id: "job-two",
      text: "Job 2: transferring ownership cleanly",
    },
    {
      type: "paragraph",
      text: "A buy-sell agreement is a legal contract. It says who can buy an owner’s interest, what triggers the purchase, and how value is determined. Attorneys draft those terms. Insurance is often how the purchase is funded so the remaining owners are not writing a personal check in a crisis.",
    },
    {
      type: "heading",
      level: 2,
      id: "why-one-policy-is-not-both",
      text: "Why one policy usually cannot do both",
    },
    {
      type: "paragraph",
      text: "If the company is the beneficiary, the money arrives as a company asset. That can help operations. It does not automatically buy the deceased owner’s shares on the terms the family expected. If owners are the beneficiaries under a buy-sell design, that money is earmarked for the purchase. It is not automatically working capital.",
    },
    {
      type: "heading",
      level: 2,
      id: "unfunded-agreement",
      text: "The unfunded agreement problem",
    },
    {
      type: "paragraph",
      text: "An agreement without funding is a promise. A policy without an agreement is money without instructions. Families and remaining partners often discover the missing piece at the worst time. Review both documents together.",
    },
    {
      type: "heading",
      level: 2,
      id: "coordinate",
      text: "Coordinate with your attorney and CPA",
    },
    {
      type: "paragraph",
      text: "Ownership transfers have legal and tax consequences. How a policy is owned, who is the beneficiary, and how a company is valued can change the outcome for the estate and the remaining owners. Those questions belong to your attorney and tax professional. This article does not recommend a specific legal structure.",
    },
    {
      type: "heading",
      level: 2,
      id: "questions",
      text: "Questions for your next planning conversation",
    },
    {
      type: "list",
      items: [
        "Who could the company not afford to lose for even a few months?",
        "Is there a written buy-sell, and has it been funded?",
        "Who owns each policy, and who is the beneficiary?",
        "When was the business last valued for this purpose?",
        "Which professionals should review the legal and tax pieces before any insurance is placed?",
      ],
    },
  ],
  sources: [
    {
      label: "NAIC — Consumer information",
      url: "https://content.naic.org/consumer",
    },
    {
      label: "IRS — Life insurance & disability insurance proceeds",
      url: "https://www.irs.gov/faqs/interest-dividends-other-types-of-income/life-insurance-disability-insurance-proceeds",
    },
  ],
  relatedSlugs: [
    "how-much-life-insurance-do-i-need",
    "first-financial-planning-meeting",
    "retirement-income-transition",
  ],
  serviceHref: "/services/business-planning",
  midCta: {
    text: "If your company has partners or a key person, a conversation can separate the two jobs before you buy a policy.",
    href: "/contact",
    label: "Start a business-planning conversation",
  },
  finalCta: {
    text: "LeadStar can help you inventory the operating risk and the ownership risk, then coordinate with the attorney and CPA you already trust.",
    href: "/contact",
    label: "Talk with Esther",
  },
  disclaimerVariant: "tax-adjacent",
  publicationStatus: "published",
} as const satisfies Article;
