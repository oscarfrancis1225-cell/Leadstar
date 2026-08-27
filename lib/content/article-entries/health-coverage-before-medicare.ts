import { articleHero } from "@/lib/content/article-entries/hero";
import type { Article } from "@/lib/content/types";

export const healthCoverageBeforeMedicare = {
  slug: "health-coverage-before-medicare",
  href: "/blog/health-coverage-before-medicare",
  title: "Health Coverage Before Medicare: Bridging the Gap",
  metaTitle: "Health Coverage Before Medicare: Bridging the Gap",
  excerpt:
    "Leaving work before 65 means bridging health coverage until Medicare. Understand COBRA, marketplace plans, and spouse coverage — and confirm current subsidy rules.",
  dek: "The bridge to Medicare is a planning problem with a small set of understandable options.",
  h1: "Health Coverage Before Medicare: Bridging the Gap",
  category: "Health Insurance",
  pillar: "Medicare & Health Coverage Transitions",
  image: articleHero(
    "health-coverage-before-medicare",
    "Illustrative photograph of a professional in their late fifties reviewing options at a desk",
    "Illustrative image: reviewing coverage options before Medicare. Not a LeadStar client.",
  ),
  publishedAt: "2026-08-27",
  updatedAt: "2026-08-27",
  lastReviewedAt: "2026-08-27",
  reviewedBy: "Esther Francis",
  reviewAttestation: "pending",
  freshnessType: "annual-review",
  nextReviewAt: "2026-11-27",
  readingTimeMinutes: 10,
  summary:
    "If you leave employer coverage before Medicare age, common bridges include COBRA, an ACA marketplace plan, a spouse’s employer plan, or other qualifying coverage. Cost and timing depend on your situation and on current law. Confirm subsidy and enrollment rules at HealthCare.gov.",
  sections: [
    {
      type: "heading",
      level: 2,
      id: "the-gap-defined",
      text: "The gap, defined",
    },
    {
      type: "paragraph",
      text: "Medicare eligibility for most people begins at 65. Social Security retirement benefits can begin earlier. Those two calendars are not the same. If you leave work before 65, you generally need another way to stay covered until Medicare starts.",
    },
    {
      type: "heading",
      level: 2,
      id: "cobra",
      text: "Option 1: COBRA, when continuity matters",
    },
    {
      type: "paragraph",
      text: "COBRA can let you keep a former employer’s group plan for a limited time after a qualifying event. The U.S. Department of Labor explains the election window and the usual duration. You typically pay the full premium plus a limited administrative fee. Continuity of doctors and deductibles can be the reason to choose it. Cost is the reason many people compare it with other options before they elect.",
    },
    {
      type: "heading",
      level: 2,
      id: "marketplace",
      text: "Option 2: Marketplace coverage",
    },
    {
      type: "paragraph",
      text: "HealthCare.gov and state marketplaces sell individual plans that cannot deny you because of a pre-existing condition. Losing job-based coverage can open a special enrollment period. Premium tax credits, when available, depend on household income and on current law.",
    },
    {
      type: "callout",
      title: "Confirm current subsidy rules",
      text: "Enhanced premium tax credit rules have changed over time, and legislation can change them again. Do not rely on an article, a memory of 2021–2025 rules, or a friend’s premium. Check HealthCare.gov for the year you will be covered.",
    },
    {
      type: "heading",
      level: 2,
      id: "spouse-plan",
      text: "Option 3: A spouse’s employer plan",
    },
    {
      type: "paragraph",
      text: "If a spouse has job-based coverage that can include you, ask the plan about enrollment timing after you lose other coverage. This option is simple when it is available and still needs a cost comparison.",
    },
    {
      type: "heading",
      level: 2,
      id: "timing",
      text: "Timing rules",
    },
    {
      type: "paragraph",
      text: "COBRA election and marketplace special enrollment both have deadlines measured in days, not months. Losing coverage is a qualifying event for marketplace enrollment, but you still have to act inside the window. Put the dates on a calendar before your last day of work.",
    },
    {
      type: "heading",
      level: 2,
      id: "stacking",
      text: "When the gap is longer than one option",
    },
    {
      type: "paragraph",
      text: "A person leaving work at 63 may use one bridge for a year and another later. A person leaving at 58 needs a longer plan. The length of the gap should drive the comparison, not the first brochure you receive.",
    },
    {
      type: "heading",
      level: 2,
      id: "questions-for-a-professional",
      text: "Questions to bring to a professional",
    },
    {
      type: "list",
      items: [
        "When does my current coverage actually end?",
        "What is the COBRA election deadline, and what would the full premium be?",
        "What special enrollment window applies on HealthCare.gov or my state exchange?",
        "How should I think about household income for the year I will need coverage?",
        "When does Medicare enrollment begin for me, and how do these plans end when it starts?",
      ],
    },
  ],
  sources: [
    {
      label: "HealthCare.gov — Special Enrollment Period",
      url: "https://www.healthcare.gov/coverage-outside-open-enrollment/special-enrollment-period/",
    },
    {
      label: "U.S. Department of Labor — An employee's guide to health benefits under COBRA",
      url: "https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/an-employees-guide-to-health-benefits-under-cobra",
    },
    {
      label: "Medicare.gov — When you can join",
      url: "https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-can-i-join",
    },
  ],
  relatedSlugs: [
    "turning-65-medicare-timeline",
    "financial-questions-after-divorce",
    "retirement-income-transition",
  ],
  serviceHref: "/services/health-insurance",
  midCta: {
    text: "If you are mapping a coverage gap, a conversation can help you put the dates in order.",
    href: "/contact",
    label: "Talk through your timeline",
  },
  finalCta: {
    text: "Health coverage decisions before Medicare depend on timing and current rules. LeadStar can help you organize the questions before you elect a path.",
    href: "/contact",
    label: "Start a conversation",
  },
  disclaimerVariant: "medicare",
  publicationStatus: "published",
} as const satisfies Article;
