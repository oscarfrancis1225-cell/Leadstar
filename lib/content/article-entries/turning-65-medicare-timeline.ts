import { articleHero } from "@/lib/content/article-entries/hero";
import type { Article } from "@/lib/content/types";

export const turning65MedicareTimeline = {
  slug: "turning-65-medicare-timeline",
  href: "/blog/turning-65-medicare-timeline",
  title: "Turning 65: Your Medicare Enrollment Timeline",
  metaTitle: "Turning 65: Your Medicare Enrollment Timeline",
  excerpt:
    "The months around your 65th birthday carry enrollment decisions that are hard to undo. A calm month-by-month timeline based on official Medicare guidance.",
  dek: "A six-month head start turns Medicare enrollment from a scramble into a checklist.",
  h1: "Turning 65: Your Medicare Enrollment Timeline",
  category: "Medicare",
  pillar: "Medicare & Health Coverage Transitions",
  image: articleHero(
    "turning-65-medicare-timeline",
    "Illustrative photograph of a mature couple organizing papers at a kitchen table",
    "Illustrative image: organizing coverage information at home. Not a LeadStar client.",
  ),
  publishedAt: "2026-08-27",
  updatedAt: "2026-08-27",
  lastReviewedAt: "2026-08-27",
  reviewedBy: "Esther Francis",
  reviewAttestation: "pending",
  freshnessType: "annual-review",
  nextReviewAt: "2026-10-01",
  readingTimeMinutes: 11,
  summary:
    "For most people, Medicare Initial Enrollment Period is a seven-month window around the 65th birthday. Start several months early, confirm whether employer coverage lets you delay, and use official Medicare and Social Security sources for dates that apply to you.",
  sections: [
    {
      type: "heading",
      level: 2,
      id: "the-short-answer",
      text: "The short answer",
    },
    {
      type: "paragraph",
      text: "Medicare.gov describes Initial Enrollment Period as a seven-month window: the three months before the month you turn 65, your birthday month, and the three months after. Enrolling earlier or later in that window can change when coverage starts. Confirm the dates that apply to you on Medicare.gov or by contacting Social Security.",
    },
    {
      type: "heading",
      level: 2,
      id: "six-months-out",
      text: "Six months out: your starting point",
    },
    {
      type: "paragraph",
      text: "You do not need to choose a private plan six months in advance. You do need time to understand your situation. Write down whether you will still have employer coverage, whether a spouse’s plan is involved, which doctors and prescriptions matter, and whether you contribute to a Health Savings Account.",
    },
    {
      type: "heading",
      level: 2,
      id: "employer-coverage",
      text: "If you have employer coverage",
    },
    {
      type: "paragraph",
      text: "Some people can delay certain parts of Medicare without a late-enrollment penalty when they have qualifying employer coverage based on current work. That depends on the size of the employer and the type of coverage. Ask your benefits administrator whether the coverage is creditable and whether the plan requires you to enroll in Medicare at 65. Do not guess.",
    },
    {
      type: "heading",
      level: 2,
      id: "working-past-65",
      text: "Working past 65",
    },
    {
      type: "paragraph",
      text: "Working past 65 is a common branch, not an exception. Medicare.gov and CMS explain Special Enrollment Period rules for people who delay because of qualifying group coverage. When that coverage or the employment ends, the timing window is limited. Mark the end date before you need it.",
    },
    {
      type: "heading",
      level: 2,
      id: "two-paths",
      text: "Two main coverage paths, in plain language",
    },
    {
      type: "paragraph",
      text: "Original Medicare includes Part A (hospital) and Part B (medical). People often add separate prescription coverage and, in some cases, a Medigap policy. Medicare Advantage is a different path that delivers Medicare benefits through a private plan approved by Medicare. This article does not compare plans, premiums, or extra benefits. Use Medicare.gov to see what exists in your area.",
    },
    {
      type: "heading",
      level: 2,
      id: "hsa-and-cobra",
      text: "HSA and COBRA cautions",
    },
    {
      type: "paragraph",
      text: "Health Savings Account contribution rules can change once Medicare begins. COBRA is continuation of a former employer plan and is a different decision from Medicare enrollment. Confirm both with official sources and your benefits administrator before you assume one solves the other.",
    },
    {
      type: "heading",
      level: 2,
      id: "what-to-have-ready",
      text: "What to have ready",
    },
    {
      type: "list",
      items: [
        "Your Medicare timeline as shown by Medicare.gov or Social Security.",
        "A list of doctors, prescriptions, and pharmacies you want to keep if possible.",
        "A written answer from your employer about creditable coverage, if you have group insurance.",
        "Any other health coverage that will still be in force.",
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "after-you-enroll",
      text: "After you enroll",
    },
    {
      type: "paragraph",
      text: "Confirm effective dates, how premiums will be paid if they apply, and when cards should arrive. Give your clinicians and pharmacy time to update billing information. If something does not match what you expected, contact Medicare or Social Security rather than waiting.",
    },
  ],
  sources: [
    {
      label: "Medicare.gov — When does Medicare coverage start?",
      url: "https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-does-medicare-coverage-start",
    },
    {
      label: "Medicare.gov — How to sign up for Medicare",
      url: "https://www.medicare.gov/basics/get-started-with-medicare/sign-up",
    },
    {
      label: "Social Security Administration — Medicare",
      url: "https://www.ssa.gov/medicare/",
    },
  ],
  relatedSlugs: [
    "health-coverage-before-medicare",
    "retirement-income-transition",
    "first-financial-planning-meeting",
  ],
  serviceHref: "/services/medicare-insurance",
  midCta: {
    text: "Questions about your timeline? A conversation can help you organize the official next steps.",
    href: "/contact",
    label: "Start a conversation",
  },
  finalCta: {
    text: "Medicare decisions are personal. If you want help reviewing the official timeline against your work and coverage situation, LeadStar can start there.",
    href: "/contact",
    label: "Talk with Esther",
  },
  disclaimerVariant: "medicare",
  publicationStatus: "published",
} as const satisfies Article;
