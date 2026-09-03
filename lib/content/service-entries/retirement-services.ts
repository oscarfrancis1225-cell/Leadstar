import type { ServicePageContent } from "@/lib/content/types";

export const retirementServicesService = {
  slug: "retirement-services",
  metaTitle: "Retirement Services",
  disclaimerVariant: "tax-adjacent",
  productTypes: [
    {
      slug: "traditional-ira",
      title: "Traditional IRA",
      purpose: "A tax-advantaged retirement account. Contributions may be deductible depending on circumstances.",
      href: "/services/retirement-services/traditional-ira",
    },
    {
      slug: "roth-ira",
      title: "Roth IRA",
      purpose: "Funded with after-tax dollars. Qualified distributions may be tax-free if IRS rules are met.",
      href: "/services/retirement-services/roth-ira",
    },
    {
      slug: "sep-ira",
      title: "SEP IRA",
      purpose: "A retirement account structure often used by self-employed people and small-business owners.",
      href: "/services/retirement-services/sep-ira",
    },
    {
      slug: "simple-ira",
      title: "SIMPLE IRA",
      purpose: "A retirement account structure designed for certain small employers and their eligible employees.",
      href: "/services/retirement-services/simple-ira",
    },
    {
      slug: "employer-plans",
      title: "Employer Plans",
      purpose: "Workplace accounts such as 401(k), 403(b), and 457 plans. LeadStar does not administer these.",
      href: "/services/retirement-services/employer-plans",
    },
    {
      slug: "annuities",
      title: "Annuities",
      purpose: "Insurance contracts that may be designed for long-term accumulation, income, or both.",
      href: "/services/retirement-services/annuities",
    },
    {
      slug: "medicare-insurance",
      title: "Medicare",
      purpose: "Income timing and Medicare timing often arrive in the same season.",
      href: "/services/medicare-insurance",
    },
  ],
  relatedArticleSlugs: [
    "retirement-income-transition",
    "first-financial-planning-meeting",
    "turning-65-medicare-timeline",
  ],
  sections: [
    {
      type: "heading",
      level: 2,
      id: "balance-is-not-a-paycheck",
      text: "A balance is not a paycheck",
    },
    {
      type: "paragraph",
      text: "The belief is that a large number in an account means you are ready. It is not. Retirement is the shift from saving to spending, how savings, Social Security, and other sources become monthly income. The work is a conversation about timing, spending, and gaps. Not a promise of a return or a particular lifestyle.",
    },
    {
      type: "paragraph",
      text: "LeadStar Financial is not described on this site as a Registered Investment Adviser or a fiduciary. If investment advice or account management is needed, that work belongs with a professional who is actually registered for it. Esther can still help you see which protection and income questions belong in the first meeting.",
    },
    {
      type: "heading",
      level: 2,
      id: "questions-that-usually-come-first",
      text: "Questions that usually come first",
    },
    {
      type: "list",
      items: [
        "When do you hope to stop relying on a paycheck?",
        "What does a month of retirement spending look like in today’s dollars?",
        "Which income already has a name: Social Security, a pension, rental income?",
        "Which accounts would you draw from first, and which would you rather leave alone?",
        "What happens to a spouse if one person dies earlier than expected?",
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "what-the-tools-do",
      text: "What the retirement tools do",
    },
    {
      type: "paragraph",
      text: "The Retirement Income Planner and Retirement Goal Calculator illustrate numbers you type. They can show a gap or a surplus under a planning withdrawal rate. They do not calculate your official Social Security benefit, they do not include inflation unless you change an assumption the tool allows, and they do not recommend a product.",
    },
    {
      type: "paragraph",
      text: "The Compound Growth Calculator shows what a starting balance and a monthly contribution could become if a constant return held for the whole period. That return is an assumption you enter. It is not a forecast of any account LeadStar manages: LeadStar does not manage investment accounts on this site.",
    },
    {
      type: "heading",
      level: 2,
      id: "what-we-do-not-do-here",
      text: "What this page does not do",
    },
    {
      type: "list",
      items: [
        "It does not promise consistent returns, guaranteed income, or a secure financial future as an outcome.",
        "It does not pick funds or allocate a portfolio.",
        "It does not file your Social Security claim.",
        "It does not replace tax advice about withdrawals or Roth conversions.",
      ],
    },
    {
      type: "callout",
      title: "Turning 65",
      text: "Income planning and Medicare timing often arrive in the same year. Medicare pages on this site stay educational. They do not compare plans.",
    },
  ],
  faqs: [
    {
      question: "If a balance is not a paycheck, do you manage the account?",
      answer:
        "This website does not describe LeadStar as an investment adviser. A retirement conversation here is about organizing questions and protection needs. If you need portfolio management, ask for a referral to someone licensed for that work.",
    },
    {
      question: "Can you tell me when to claim Social Security?",
      answer:
        "We can walk through the tradeoffs people usually weigh. The official benefit estimate comes from the Social Security Administration. Claiming is your decision.",
    },
    {
      question: "Are the calculator results a plan?",
      answer:
        "No. They are illustrations using your inputs and a few planning assumptions. A later conversation may use different numbers.",
    },
    {
      question: "Do you sell annuities on this page?",
      answer:
        "This page does not offer or recommend an annuity. If an insurer product is discussed later, it will be identified as insurance, with terms you can read, and only where Esther is licensed.",
    },
    {
      question: "What should I bring to a first conversation?",
      answer:
        "A rough monthly spending number, a list of income sources, and account balances you are willing to share. Perfection is not required.",
    },
  ],
  sources: [
    {
      label: "Social Security Administration: Plan for retirement",
      url: "https://www.ssa.gov/prepare/plan-retirement",
    },
    {
      label: "NAIC: Consumer information",
      url: "https://content.naic.org/consumer",
    },
  ],
} as const satisfies ServicePageContent;
