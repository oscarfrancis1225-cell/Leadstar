import type { ServicePageContent } from "@/lib/content/types";

export const lifeInsuranceService = {
  slug: "life-insurance",
  metaTitle: "Life Insurance",
  disclaimerVariant: "standard",
  productTypes: [
    {
      slug: "term-life",
      title: "Term Life",
      purpose: "Coverage for a stated period, often used when the need has an end date.",
      href: "/services/life-insurance/term-life",
    },
    {
      slug: "whole-life",
      title: "Whole Life",
      purpose: "Permanent coverage that can last for life if the contract stays funded, with a cash-value component.",
      href: "/services/life-insurance/whole-life",
    },
    {
      slug: "universal-life",
      title: "Universal Life",
      purpose: "Permanent coverage with more flexible premium and cash-value mechanics, depending on the contract.",
      href: "/services/life-insurance/universal-life",
    },
    {
      slug: "final-expense",
      title: "Final Expense",
      purpose: "Usually a smaller permanent policy meant to help with last expenses.",
      href: "/services/final-expense",
    },
    {
      slug: "mortgage-protection",
      title: "Mortgage Protection",
      purpose: "A protection conversation built around the people responsible for a home payment.",
      href: "/services/mortgage-protection",
    },
  ],
  relatedArticleSlugs: [
    "how-much-life-insurance-do-i-need",
    "life-insurance-single-parents-solo-earners",
    "what-final-expense-insurance-does",
  ],
  sections: [
    {
      type: "heading",
      level: 2,
      id: "start-with-the-job",
      text: "Start with the job, not the product name",
    },
    {
      type: "paragraph",
      text: "Life insurance pays a death benefit to the people or entities you name if you die while the policy is in force. The useful first step is naming the job: replace income for a period of years, pay off a loan, fund a child’s education, or leave a smaller amount for last expenses. The product name comes after that list.",
    },
    {
      type: "paragraph",
      text: "A protection-needs estimate can add those obligations and subtract coverage and savings you already have. The result is a range, not a recommendation. You can try that illustration on the Protection Needs tool before a conversation.",
    },
    {
      type: "heading",
      level: 2,
      id: "term-and-permanent",
      text: "Term and permanent, in plain language",
    },
    {
      type: "paragraph",
      text: "Term life covers a set period — often 10, 20, or 30 years. If death occurs during that period and the policy is in force, the insurer pays the death benefit. When the term ends, coverage ends unless the contract allows renewal or conversion. Term is often used when the job itself has an end date: years until children are independent, or years left on a mortgage.",
    },
    {
      type: "paragraph",
      text: "Permanent life insurance — commonly whole life or universal life — is designed to last for life if premiums and policy charges are kept as the contract requires. Many permanent policies can build cash value. Cash value is not a savings account at a bank, and it is not a reason to buy coverage you do not need. Loans or withdrawals, if allowed, can reduce the death benefit.",
    },
    {
      type: "table",
      caption: "A comparison of jobs, not a ranking of products.",
      headers: ["Question", "Term life", "Permanent life"],
      rows: [
        ["How long does the coverage last?", "A stated term, if kept in force", "For life, if the contract stays funded"],
        ["Typical job", "Income or a loan with an end date", "A need that does not expire"],
        ["Cash value", "Generally none", "May build; loans can reduce the benefit"],
        ["Cost per dollar of death benefit", "Often lower while you are younger and healthier", "Usually higher for the same face amount"],
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "who-is-named",
      text: "Who is named, and who owns the policy",
    },
    {
      type: "paragraph",
      text: "The beneficiary receives the death benefit. The owner controls changes the contract allows, such as beneficiary updates. Those can be different people. Group life through work can be useful and can also end when a job ends. It is worth writing down what continues after a job change.",
    },
    {
      type: "heading",
      level: 2,
      id: "what-a-conversation-covers",
      text: "What a conversation at LeadStar covers",
    },
    {
      type: "list",
      items: [
        "Who depends on your income, and for how long.",
        "Debts or education costs you would want funded.",
        "Coverage you already have, including group life.",
        "Health and tobacco questions an insurer is likely to ask.",
        "Whether a smaller permanent policy and a larger term policy are doing two different jobs.",
      ],
    },
    {
      type: "paragraph",
      text: "This page does not tell you which product to buy. Underwriting, price, and availability vary by insurer and by the state where the policy would be delivered. Esther Francis is licensed in Florida and California.",
    },
    {
      type: "callout",
      title: "Related tool",
      text: "The Protection Needs Estimator adds a few common obligations and subtracts coverage and savings you enter. It is an illustration, not a quote.",
    },
  ],
  faqs: [
    {
      question: "How much life insurance do I need?",
      answer:
        "There is no single formula that fits every household. A common educational approach is to add years of income, debts, and education goals, then subtract existing coverage and liquid savings. Use the Protection Needs tool as a first range, then talk through what you would actually want funded.",
    },
    {
      question: "Is term better than whole life?",
      answer:
        "Neither is better in the abstract. Term often fits a need with an end date. Permanent coverage can fit a need that does not expire. Many households use one, the other, or both for different jobs.",
    },
    {
      question: "Does life insurance pay income taxes to the beneficiary?",
      answer:
        "Death benefits are often received income-tax free under current federal rules, but tax treatment depends on facts such as ownership and estate situation. Nothing on this site is tax advice.",
    },
    {
      question: "What if I already have coverage at work?",
      answer:
        "Group life can be a useful start. It may end or shrink when you leave the job. Write down the amount and whether you can convert it before you assume it will still be there.",
    },
    {
      question: "Will I need a medical exam?",
      answer:
        "Some applications use an exam or medical records. Others use health questions only. The insurer decides. This page cannot promise a no-exam offer.",
    },
  ],
  sources: [
    {
      label: "Insurance Information Institute — Life insurance basics",
      url: "https://www.iii.org/insurance-basics/life",
    },
    {
      label: "NAIC — Consumer information",
      url: "https://content.naic.org/consumer",
    },
  ],
} as const satisfies ServicePageContent;
