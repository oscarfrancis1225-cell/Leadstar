import { articleHero } from "@/lib/content/article-entries/hero";
import type { Article } from "@/lib/content/types";

export const firstFinancialPlanningMeeting = {
  slug: "first-financial-planning-meeting",
  href: "/blog/first-financial-planning-meeting",
  title: "What to Bring to Your First Meeting With a Financial Professional",
  metaTitle: "What to Bring to Your First Meeting With a Financial Professional",
  excerpt:
    "A first conversation is shorter and simpler than most people expect. What to bring, what to ask, and how to verify credentials by type.",
  dek: "A little preparation turns an intimidating first meeting into a useful one.",
  h1: "What to Bring to Your First Meeting With a Financial Professional",
  category: "Working With a Professional",
  pillar: "Working With a Financial Professional",
  image: articleHero(
    "first-financial-planning-meeting",
    "Illustrative photograph of two people in a relaxed first meeting at an office table",
    "Illustrative image: a first planning conversation. Not a depiction of a specific client meeting.",
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
    "You do not need a complete file to have a useful first conversation. Bring your priorities, a rough picture of income and coverage, and questions about how the professional is paid and licensed. Verify insurance producers through your state department of insurance. BrokerCheck and IAPD cover securities registrations.",
  sections: [
    {
      type: "heading",
      level: 2,
      id: "the-short-answer",
      text: "The short answer",
    },
    {
      type: "paragraph",
      text: "The first conversation is usually a fit meeting. The professional is trying to understand your situation. You are trying to understand how they work. You do not need a perfect binder. You need a few priorities and enough context to make the hour useful.",
    },
    {
      type: "heading",
      level: 2,
      id: "what-it-is",
      text: "What the first conversation is — and is not",
    },
    {
      type: "paragraph",
      text: "It is not a commitment to buy a product. It is not a full financial plan. It should not be a high-pressure pitch. It is a structured discussion about your goals, your timing, and whether the professional’s services match what you need.",
    },
    {
      type: "heading",
      level: 2,
      id: "simple-list",
      text: "A simple preparation list",
    },
    {
      type: "list",
      items: [
        "The two or three questions that prompted the meeting.",
        "Who else should be in the conversation later — a spouse, a business partner, an adult child.",
        "A rough picture of income, housing, and existing coverage.",
        "Any deadline you are facing, such as a 65th birthday or a job change.",
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "documents-that-help",
      text: "Documents that help if you have them",
    },
    {
      type: "paragraph",
      text: "Recent pay information, retirement-account statements, insurance declarations pages, a Social Security statement, and a list of debts are useful. If gathering them would delay the meeting for months, come anyway. Missing paper is easier to solve than a meeting that never happens.",
    },
    {
      type: "heading",
      level: 2,
      id: "questions-to-ask",
      text: "Questions worth asking any professional",
    },
    {
      type: "list",
      items: [
        "What services do you provide, and what do you not provide?",
        "How are you paid?",
        "What licenses do you hold, and in which states?",
        "Who typically works with you?",
        "What would happen after this conversation if we decided to continue?",
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "how-to-verify",
      text: "How to verify credentials — by type",
    },
    {
      type: "paragraph",
      text: "Different databases cover different licenses. An insurance-only producer may not appear in FINRA BrokerCheck or the SEC’s IAPD. That absence does not mean the person is unverifiable. It means you should use the insurance lookup.",
    },
    {
      type: "list",
      items: [
        "State department of insurance license lookup — for insurance producers.",
        "FINRA BrokerCheck — for broker-dealer registrations.",
        "SEC IAPD / Investor.gov — for investment-adviser registrations.",
        "The organization that issues a professional designation, if one is claimed.",
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "what-happens-after",
      text: "What happens after",
    },
    {
      type: "paragraph",
      text: "A useful first meeting ends with clarity: whether there is a fit, what information is still needed, and what the next conversation would cover. If the fit is not there, that is a successful meeting. You should leave knowing how to verify the person you just met.",
    },
  ],
  sources: [
    {
      label: "FINRA BrokerCheck",
      url: "https://brokercheck.finra.org/",
    },
    {
      label: "Investor.gov — Check out your investment professional",
      url: "https://www.investor.gov/introduction-investing/getting-started/working-investment-professional/check-out-your-investment-professional",
    },
    {
      label: "NAIC — Consumer information",
      url: "https://content.naic.org/consumer",
    },
  ],
  relatedSlugs: [
    "how-much-life-insurance-do-i-need",
    "retirement-income-transition",
    "turning-65-medicare-timeline",
  ],
  serviceHref: "/contact",
  midCta: {
    text: "If you are ready for a first conversation, you do not need to prepare a spreadsheet.",
    href: "/contact",
    label: "Start a conversation",
  },
  finalCta: {
    text: "Esther uses the first meeting to decide whether working together is a fit. Bring your questions. The rest can follow.",
    href: "/contact",
    label: "Talk with Esther",
  },
  disclaimerVariant: "standard",
  publicationStatus: "published",
} as const satisfies Article;
