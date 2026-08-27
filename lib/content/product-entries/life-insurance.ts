import type { ProductPageContent } from "@/lib/content/types";

export const lifeInsuranceProducts = [
  {
    serviceSlug: "life-insurance",
    slug: "term-life",
    href: "/services/life-insurance/term-life",
    title: "Term Life",
    metaTitle: "Term Life Insurance",
    description:
      "A plain-language look at term life insurance: coverage for a stated period, often used when the need has an end date.",
    hook: "A household is trying to protect income or a loan for a stretch of years, not forever.",
    question: "What is term life actually for?",
    disclaimerVariant: "standard",
    relatedLinks: [
      { label: "Whole Life", href: "/services/life-insurance/whole-life" },
      { label: "Universal Life", href: "/services/life-insurance/universal-life" },
      { label: "Mortgage Protection", href: "/services/mortgage-protection" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what term life is",
      },
      {
        type: "paragraph",
        text: "Term life pays a death benefit if the insured person dies while the policy is in force, during a stated period. That period is often 10, 20, or 30 years. When the term ends, coverage ends unless the contract allows renewal or conversion.",
      },
      {
        type: "paragraph",
        text: "It is designed around a job that has an end date. Years until children are independent. Years left on a mortgage. A stretch of income someone else still depends on.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "Term is not “the cheap version of the same thing.” It is a different job. There is generally no cash value. If you outlive the term, there is no payout. That is not a failure of the policy. That is how the design works.",
      },
      {
        type: "heading",
        level: 2,
        id: "how-it-works",
        text: "How it generally works",
      },
      {
        type: "list",
        items: [
          "You choose a death benefit and a term length, subject to what an insurer will offer.",
          "Premiums are often level for that term, then may rise if the contract can be renewed.",
          "Some policies allow conversion to permanent coverage. That is a contract feature, not a promise on this page.",
          "Group term through work can help, and it can also end when a job ends.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "trade-offs",
        text: "Trade-offs worth knowing",
      },
      {
        type: "paragraph",
        text: "Term often costs less per dollar of death benefit while you are younger and healthier. But it is temporary. Health can change before you try to replace it. Renewal premiums can be much higher. Therefore the useful question is how long the need itself lasts, and whether you can keep the premium going.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "You do not have to pick a product first. Esther can help you talk through how long a need might last, what coverage you already have, and what a term policy is actually designed to do.",
      },
    ],
  },
  {
    serviceSlug: "life-insurance",
    slug: "whole-life",
    href: "/services/life-insurance/whole-life",
    title: "Whole Life",
    metaTitle: "Whole Life Insurance",
    description:
      "A plain-language look at whole life insurance: permanent coverage that can last for life if the contract stays funded, with a cash-value component.",
    hook: "A household is deciding whether the need itself has an end date, or whether it may last.",
    question: "What is whole life actually designed to do?",
    disclaimerVariant: "standard",
    relatedLinks: [
      { label: "Term Life", href: "/services/life-insurance/term-life" },
      { label: "Universal Life", href: "/services/life-insurance/universal-life" },
      { label: "Final Expense", href: "/services/final-expense" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what whole life is",
      },
      {
        type: "paragraph",
        text: "Whole life is a form of permanent life insurance. If premiums are paid as the contract requires, it is designed to last for the insured person’s life. It pays a death benefit, and it can also build cash value over time.",
      },
      {
        type: "paragraph",
        text: "Cash value is not a savings account at a bank. Loans or withdrawals, if the contract allows them, can reduce the death benefit. Guarantees, if any, depend on the policy terms and the insurer’s ability to pay claims.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "People sometimes treat cash value as the reason to buy coverage they do not need. Or they assume every family should have whole life. Neither is true. Whole life can fit a need that does not expire. It is usually more expensive, for the same death benefit, than term.",
      },
      {
        type: "heading",
        level: 2,
        id: "types-on-this-page",
        text: "Types of whole life you may hear about",
      },
      {
        type: "paragraph",
        text: "These stay on this page. They are variations of the same idea, not separate products you have to shop first.",
      },
      {
        type: "list",
        items: [
          "Nonparticipating: the insurer sets the premium, death benefit, and cash-value path in the contract. It does not pay dividends.",
          "Participating: the policy may pay dividends based on the insurer’s results. Dividends are not guaranteed. They may be used to lower premiums or buy more coverage, if the contract allows it.",
          "Indeterminate-premium designs: premiums can change within a stated maximum. The first years may look lower. Read that language carefully.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "trade-offs",
        text: "Trade-offs worth knowing",
      },
      {
        type: "paragraph",
        text: "Whole life can bring more structure and a cash-value piece. Therefore it also asks for a premium you can keep paying for a long time. If the premium stops, nonforfeiture options may apply, but the original plan can change. The useful question is whether the need lasts, and whether the premium fits the household.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you sort through whether the need is temporary or longer, and what whole life is designed to do. She will not tell you it is the perfect policy. That depends on your circumstances and the contract.",
      },
    ],
  },
  {
    serviceSlug: "life-insurance",
    slug: "universal-life",
    href: "/services/life-insurance/universal-life",
    title: "Universal Life",
    metaTitle: "Universal Life Insurance",
    description:
      "A plain-language look at universal life insurance: permanent coverage with more flexible premium and cash-value mechanics, depending on the contract.",
    hook: "Someone hears “permanent coverage” and also hears “flexible premiums,” and those two ideas can pull in different directions.",
    question: "What is universal life actually designed to do?",
    disclaimerVariant: "standard",
    relatedLinks: [
      { label: "Term Life", href: "/services/life-insurance/term-life" },
      { label: "Whole Life", href: "/services/life-insurance/whole-life" },
      { label: "Life Insurance", href: "/services/life-insurance" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what universal life is",
      },
      {
        type: "paragraph",
        text: "Universal life is a form of permanent insurance. It is designed to last if the policy stays funded well enough to cover the cost of insurance and other charges. Many contracts let you adjust premiums or the death benefit, within rules the insurer sets.",
      },
      {
        type: "paragraph",
        text: "There is often a cash-value account that can earn interest under the contract. That is not the same as investing in the market. Policy charges still come out. If funding is too light, or charges rise, the policy can lapse.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "Flexible does not mean “pay whatever you want, forever.” Flexibility is a contract feature with limits. Illustrations can show a path that looks comfortable. Those numbers are not a guarantee. Actual results depend on interest crediting, charges, and how the policy is funded.",
      },
      {
        type: "heading",
        level: 2,
        id: "how-it-works",
        text: "How it generally works",
      },
      {
        type: "list",
        items: [
          "Premiums go in. Cost of insurance and expenses come out.",
          "What remains, if anything, may earn interest under the contract.",
          "You may be able to change the premium or death benefit, if the insurer allows it.",
          "Loans or withdrawals, if allowed, can reduce the benefit and the policy’s staying power.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "trade-offs",
        text: "Trade-offs worth knowing",
      },
      {
        type: "paragraph",
        text: "Universal life can fit a long-term need when someone wants more room to adjust funding. Therefore it also asks for more attention. You may need to review statements and funding so the policy does not quietly run short. This page does not cover variable universal life. That is a securities product, and it is not presented as something Esther sells.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you understand the difference between whole life structure and universal life flexibility, and what questions to ask before anyone applies.",
      },
    ],
  },
] as const satisfies readonly ProductPageContent[];
