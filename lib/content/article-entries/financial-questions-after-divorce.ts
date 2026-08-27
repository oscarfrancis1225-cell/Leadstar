import { articleHero } from "@/lib/content/article-entries/hero";
import type { Article } from "@/lib/content/types";

export const financialQuestionsAfterDivorce = {
  slug: "financial-questions-after-divorce",
  href: "/blog/financial-questions-after-divorce",
  title: "Financial Questions Worth Revisiting After Divorce",
  metaTitle: "Financial Questions Worth Revisiting After Divorce",
  excerpt:
    "The legal process ends; the financial questions begin. Accounts, beneficiaries, and protection decisions worth revisiting — in the right order.",
  dek: "A short list, taken in order, can restore a sense of control.",
  h1: "Financial Questions Worth Revisiting After Divorce",
  category: "Life Transitions",
  pillar: "Life Transitions",
  image: articleHero(
    "financial-questions-after-divorce",
    "Illustrative photograph of a professional reviewing documents in a quiet, optimistic setting",
    "Illustrative image: reviewing financial documents after a life change. Not a LeadStar client.",
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
    "After a divorce, review joint accounts, beneficiary designations, protection on one income, and the new household budget. Retirement-plan beneficiaries follow plan rules, so confirm changes with the plan administrator and your attorney. This is not legal advice.",
  sections: [
    {
      type: "heading",
      level: 2,
      id: "the-short-answer",
      text: "The short answer",
    },
    {
      type: "paragraph",
      text: "A decree divides property. It does not automatically retitle every account, update every beneficiary, or rebuild protection for a one-income household. Those steps are a separate list, and they are easier when you take them in order.",
    },
    {
      type: "heading",
      level: 2,
      id: "shared-names",
      text: "Accounts and documents that still share a name",
    },
    {
      type: "paragraph",
      text: "Start with what is still joint or still in a former spouse’s name: checking, credit cards, the mortgage, auto titles, and utilities. Close or retitle according to the decree. Until that work is finished, liability and access can remain shared even when the marriage is over.",
    },
    {
      type: "heading",
      level: 2,
      id: "beneficiaries",
      text: "Beneficiaries: the quiet to-do with large consequences",
    },
    {
      type: "paragraph",
      text: "Life insurance, IRAs, and workplace retirement plans pay whoever is on the beneficiary form, not whoever the divorce decree names, unless the plan or policy says otherwise. For many employer retirement plans, ERISA and the plan document control. An ex-spouse can remain the beneficiary until the designation is changed. Review each form with the plan administrator and your attorney. Do not treat a general article as a rule for your plan.",
    },
    {
      type: "heading",
      level: 2,
      id: "protection-on-one-income",
      text: "Protection on one income",
    },
    {
      type: "paragraph",
      text: "If you are now the only earner, or if child support would stop if the other parent died, the protection question changes. Life insurance, disability coverage, and health coverage all deserve a fresh look. See the companion article on life insurance for single parents and solo earners.",
    },
    {
      type: "heading",
      level: 2,
      id: "safety-cushion",
      text: "Rebuilding the safety cushion",
    },
    {
      type: "paragraph",
      text: "A one-household budget often has less slack. An emergency reserve becomes more important, even if you rebuild it slowly. The first goal is a number you can reach, then a larger reserve as income stabilizes.",
    },
    {
      type: "heading",
      level: 2,
      id: "retirement-reestimated",
      text: "Retirement, re-estimated",
    },
    {
      type: "paragraph",
      text: "Two-earner projections rarely survive a divorce unchanged. If retirement accounts were divided, ask your attorney whether a QDRO or similar order applies. Contribution rates, Social Security claiming later, and health coverage before Medicare may all need a new timeline.",
    },
    {
      type: "heading",
      level: 2,
      id: "which-professional",
      text: "When to bring in which professional",
    },
    {
      type: "list",
      items: [
        "Your divorce attorney or a family-law attorney for decree language, QDROs, and state-specific rules.",
        "Your tax professional for filing status and the first return after the divorce.",
        "Plan administrators for beneficiary and account-split paperwork.",
        "A financial-services professional for protection, coverage, and the new household plan — after the legal documents are in motion.",
      ],
    },
  ],
  sources: [
    {
      label: "IRS — Divorce or separation",
      url: "https://www.irs.gov/newsroom/tax-information-for-those-getting-divorced-or-recently-divorced",
    },
    {
      label: "Social Security Administration — Benefits for a divorced spouse",
      url: "https://www.ssa.gov/benefits/retirement/planner/applying7.html",
    },
    {
      label: "U.S. Department of Labor — QDROs",
      url: "https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/qdros",
    },
  ],
  relatedSlugs: [
    "life-insurance-single-parents-solo-earners",
    "how-much-life-insurance-do-i-need",
    "health-coverage-before-medicare",
  ],
  serviceHref: "/services/life-insurance",
  midCta: {
    text: "If the list feels long, a conversation can help you decide what to do first.",
    href: "/contact",
    label: "Start a conversation",
  },
  finalCta: {
    text: "LeadStar can help you prioritize protection and coverage questions after the legal work is underway. Bring your attorney into any item that depends on the decree.",
    href: "/contact",
    label: "Talk with Esther",
  },
  disclaimerVariant: "tax-adjacent",
  publicationStatus: "published",
} as const satisfies Article;
