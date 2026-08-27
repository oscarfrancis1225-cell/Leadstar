import { articleHero } from "@/lib/content/article-entries/hero";
import type { Article } from "@/lib/content/types";

export const lifeInsuranceSingleParentsSoloEarners = {
  slug: "life-insurance-single-parents-solo-earners",
  href: "/blog/life-insurance-single-parents-solo-earners",
  title: "Life Insurance for Single Parents and Solo Earners",
  metaTitle: "Life Insurance for Single Parents and Solo Earners",
  excerpt:
    "Most life-insurance advice quietly assumes two incomes. How single parents and solo earners can think about protecting the household that depends on them.",
  dek: "On one income, protection is not a layer of the plan. It is the plan.",
  h1: "Life Insurance for Single Parents and Solo Earners",
  category: "Life Insurance",
  pillar: "Life & Family Protection",
  image: articleHero(
    "life-insurance-single-parents-solo-earners",
    "Illustrative documentary-style photograph of a parent and child in a warm everyday moment",
    "Illustrative image: everyday family life. Not a LeadStar client.",
  ),
  publishedAt: "2026-08-27",
  updatedAt: "2026-08-27",
  lastReviewedAt: "2026-08-27",
  reviewedBy: "Esther Francis",
  reviewAttestation: "pending",
  freshnessType: "evergreen",
  nextReviewAt: "2027-08-27",
  readingTimeMinutes: 9,
  summary:
    "Solo-earner households should size life insurance around the full support they provide — income and unpaid work — because there is no second paycheck as a backstop. Guardianship questions belong with an attorney.",
  sections: [
    {
      type: "heading",
      level: 2,
      id: "the-short-answer",
      text: "The short answer",
    },
    {
      type: "paragraph",
      text: "Standard rules of thumb often assume a second adult can earn, parent, or both. A one-income household does not have that backstop. The coverage question is what it would cost to keep the children housed, cared for, and on a stable path if your income and your unpaid work both stopped.",
    },
    {
      type: "heading",
      level: 2,
      id: "why-the-math-bends",
      text: "Why the standard rules bend",
    },
    {
      type: "paragraph",
      text: "A two-earner household can sometimes absorb a loss by changing work hours or relying on the surviving adult’s income. A solo earner’s household cannot do that in the same way. Childcare, after-school care, and household management become paid services. Those costs belong in the estimate even if they do not appear on a pay stub.",
    },
    {
      type: "heading",
      level: 2,
      id: "counting-what-you-provide",
      text: "Counting what you actually provide",
    },
    {
      type: "paragraph",
      text: "Use the same obligations-minus-resources approach described in the life-insurance-needs article. Then add the years until the youngest child is independent, and the cost of replacing the work you do at home. Subtract savings, existing coverage, and any survivor benefits you can verify. Social Security survivor benefits for children may apply; check SSA.gov for current rules rather than assuming an amount.",
    },
    {
      type: "heading",
      level: 2,
      id: "guardianship",
      text: "The guardianship conversation",
    },
    {
      type: "paragraph",
      text: "Who would raise the children, and with what resources, is a legal question. A will and a nominated guardian are attorney work. Life insurance can fund the household those guardians would inherit. Do not treat a beneficiary designation as a custody plan.",
    },
    {
      type: "heading",
      level: 2,
      id: "keeping-coverage-affordable",
      text: "Keeping coverage affordable",
    },
    {
      type: "paragraph",
      text: "Term coverage sized to the years of dependence is often the way households keep the premium in proportion to the job. Permanent coverage can have a place, but it is a different cost. If budget is tight, a smaller amount of the right duration is usually more useful than a policy that lapses.",
    },
    {
      type: "heading",
      level: 2,
      id: "reviewing-as-kids-grow",
      text: "Reviewing as children grow",
    },
    {
      type: "paragraph",
      text: "The need often declines as children become independent and debts shrink. Review after a change in custody, support, housing, or income. The goal is a number that still matches the household you have, not the household you had five years ago.",
    },
  ],
  sources: [
    {
      label: "Social Security Administration — Survivors benefits",
      url: "https://www.ssa.gov/benefits/survivors/",
    },
    {
      label: "NAIC — Consumer information",
      url: "https://content.naic.org/consumer",
    },
  ],
  relatedSlugs: [
    "how-much-life-insurance-do-i-need",
    "financial-questions-after-divorce",
    "mortgage-protection-vs-term-life",
  ],
  serviceHref: "/services/life-insurance",
  toolHrefs: ["/tools/protection-needs"],
  midCta: {
    text: "If you are the only income, a conversation can help you size the real gap.",
    href: "/contact",
    label: "Talk through your household's number",
  },
  finalCta: {
    text: "Esther works with people who are rebuilding a plan on one income. The first conversation is to see whether the fit is right.",
    href: "/contact",
    label: "Start a conversation",
  },
  disclaimerVariant: "standard",
  publicationStatus: "published",
} as const satisfies Article;
