import type { ProductPageContent } from "@/lib/content/types";

export const retirementServicesProducts = [
  {
    serviceSlug: "retirement-services",
    slug: "traditional-ira",
    href: "/services/retirement-services/traditional-ira",
    title: "Traditional IRA",
    metaTitle: "Traditional IRA",
    description:
      "A Traditional IRA is an account structure, not a product you buy and not an account LeadStar manages. What you hold inside it is a separate choice.",
    hook: "An IRA is not a product you buy. It is an account that can hold investments.",
    question: "What is actually inside the IRA you already have?",
    disclaimerVariant: "tax-adjacent",
    relatedLinks: [
      { label: "Roth IRA", href: "/services/retirement-services/roth-ira" },
      { label: "Employer plans", href: "/services/retirement-services/employer-plans" },
      { label: "Retirement Services", href: "/services/retirement-services" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "An account structure, not the investment",
      },
      {
        type: "paragraph",
        text: "A Traditional IRA is an account structure. It is a place that can hold investments. It is not the investment itself. LeadStar does not open or manage these accounts on this site.",
      },
      {
        type: "paragraph",
        text: "Contributions may be deductible, depending on income, filing status, and whether you are covered by a workplace plan. Money generally grows tax-deferred. Taxable distributions are usually taxed as ordinary income later. Rules change by year. This page does not list current limits.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "An IRA is not the stock market",
      },
      {
        type: "paragraph",
        text: "An IRA is not “the stock market.” You can hold different things inside it, depending on the custodian. Deductible also does not mean free. You may owe tax when money comes out. Early withdrawals can face extra tax. Required minimum distributions may apply later in life.",
      },
      {
        type: "heading",
        level: 2,
        id: "reframe",
        text: "The useful question",
      },
      {
        type: "paragraph",
        text: "The useful question is not “Is a Traditional IRA the best account?” It is whether this structure fits how you save, when you expect to use the money, and what other accounts you already have. Tax results depend on your facts. Nothing here is tax advice.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you list the account and income questions worth bringing to a conversation. She is not an investment adviser. If you need account management or tax advice, that work belongs with someone licensed for it.",
      },
    ],
  },
  {
    serviceSlug: "retirement-services",
    slug: "roth-ira",
    href: "/services/retirement-services/roth-ira",
    title: "Roth IRA",
    metaTitle: "Roth IRA",
    description:
      "A Roth IRA is funded with after-tax dollars. Qualified distributions may be tax-free if IRS rules are met, and those rules are the part people skip.",
    hook: "Someone hears “tax-free” and stops listening before the rules.",
    question: "When is a Roth distribution actually tax-free?",
    disclaimerVariant: "tax-adjacent",
    relatedLinks: [
      { label: "Traditional IRA", href: "/services/retirement-services/traditional-ira" },
      { label: "Employer plans", href: "/services/retirement-services/employer-plans" },
      { label: "Retirement Services", href: "/services/retirement-services" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "After-tax in, maybe tax-free out, if the rules are met",
      },
      {
        type: "paragraph",
        text: "A Roth IRA is an account structure. Contributions are generally made with money you have already paid tax on. If IRS requirements are met, qualified distributions may be tax-free. Eligibility and how much you can contribute can depend on income. Those numbers change. This page does not list them.",
      },
      {
        type: "paragraph",
        text: "LeadStar does not open or manage Roth IRAs on this site. A Roth IRA is not an investment. What you hold inside it is a separate choice.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "Tax-free is not automatic",
      },
      {
        type: "paragraph",
        text: "“Tax-free” is not automatic. Timing, the five-year clock, age, and the type of money coming out all matter. A Roth IRA is also not the same as a Roth 401(k). Those are different account types with different rules.",
      },
      {
        type: "heading",
        level: 2,
        id: "reframe",
        text: "The useful question",
      },
      {
        type: "paragraph",
        text: "The useful question is when you want flexibility later, and whether you qualify to contribute this year. Conversions from a Traditional IRA are a tax event. This page does not tell you to convert. That is a fact-specific decision for you and a tax professional.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you write down the Roth questions worth asking. She does not manage investment accounts, and she does not give tax advice.",
      },
    ],
  },
  {
    serviceSlug: "retirement-services",
    slug: "sep-ira",
    href: "/services/retirement-services/sep-ira",
    title: "SEP IRA",
    metaTitle: "SEP IRA",
    description:
      "A SEP IRA is a retirement account structure often used by self-employed people and small-business owners. It is not a SIMPLE IRA, and LeadStar does not administer it.",
    hook: "A business owner hears they should “set up a SEP” before they know who would be covered.",
    question: "Who would this account actually cover, just you, or employees too?",
    disclaimerVariant: "tax-adjacent",
    relatedLinks: [
      { label: "SIMPLE IRA", href: "/services/retirement-services/simple-ira" },
      { label: "Employer plans", href: "/services/retirement-services/employer-plans" },
      { label: "Business Planning", href: "/services/business-planning" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "Who would this account actually cover?",
      },
      {
        type: "paragraph",
        text: "A SEP IRA is a retirement account structure often used by self-employed people and some small-business owners. The employer, including a self-employed owner, can make contributions for eligible people. It is still an IRA-style account, not a LeadStar product.",
      },
      {
        type: "paragraph",
        text: "Contribution room and eligibility follow IRS rules for the year. This page does not quote those limits. LeadStar does not administer SEP plans.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "A SEP is not a SIMPLE IRA or a 401(k)",
      },
      {
        type: "paragraph",
        text: "A SEP is not the same as a SIMPLE IRA or a 401(k). The jobs overlap (retirement saving for a small business) but the rules do not. If you have employees, a SEP can require contributions for them too. That is why the written plan and the tax picture matter.",
      },
      {
        type: "heading",
        level: 2,
        id: "reframe",
        text: "The useful question",
      },
      {
        type: "paragraph",
        text: "The useful question is who would be covered, and whether another plan type would fit the business better. Esther does not set up or administer these plans. She can help you name the questions to take to a tax professional.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "If you are a business owner sorting protection questions and retirement-account vocabulary at the same time, Esther can help you separate those two conversations.",
      },
    ],
  },
  {
    serviceSlug: "retirement-services",
    slug: "simple-ira",
    href: "/services/retirement-services/simple-ira",
    title: "SIMPLE IRA",
    metaTitle: "SIMPLE IRA",
    description:
      "A SIMPLE IRA is for certain small employers and eligible employees. It is not a SEP, and it is not a 401(k).",
    hook: "SIMPLE and SEP sound similar. They are not the same plan, and they do not ask the same thing of a business.",
    question: "Do you need employee deferrals, or only employer contributions?",
    disclaimerVariant: "tax-adjacent",
    relatedLinks: [
      { label: "SEP IRA", href: "/services/retirement-services/sep-ira" },
      { label: "Employer plans", href: "/services/retirement-services/employer-plans" },
      { label: "Business Planning", href: "/services/business-planning" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "Employee deferrals plus an employer contribution",
      },
      {
        type: "paragraph",
        text: "A SIMPLE IRA is a retirement account structure for certain small employers. Employees can make salary-reduction contributions. The employer also contributes, following the plan’s rules. It is not a Roth IRA, and it is not a 401(k).",
      },
      {
        type: "paragraph",
        text: "Early withdrawals can face extra tax, and withdrawals in the first two years of participation can face a higher additional tax. LeadStar does not administer SIMPLE plans. This page does not list current contribution limits.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "SIMPLE and SEP are not the same plan",
      },
      {
        type: "paragraph",
        text: "SIMPLE and SEP sound similar. They are not the same. A SIMPLE is built around employee deferrals plus an employer contribution. A SEP is generally employer contributions only. Which one fits depends on the business, the people, and current law.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you name the difference between these account types. Setup, administration, and tax elections belong with the right professionals.",
      },
    ],
  },
  {
    serviceSlug: "retirement-services",
    slug: "employer-plans",
    href: "/services/retirement-services/employer-plans",
    title: "Employer Plans",
    metaTitle: "Employer Retirement Plans",
    description:
      "A 401(k), 403(b), or 457 is a workplace account, not a product LeadStar sells. Leaving a job does not automatically mean you should roll the money out.",
    hook: "Most of the retirement money a person has is sitting in a workplace plan they did not design.",
    question: "When you leave a job, does that money have to move?",
    disclaimerVariant: "tax-adjacent",
    relatedLinks: [
      { label: "Traditional IRA", href: "/services/retirement-services/traditional-ira" },
      { label: "Roth IRA", href: "/services/retirement-services/roth-ira" },
      { label: "Retirement Services", href: "/services/retirement-services" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "Workplace accounts you did not design",
      },
      {
        type: "paragraph",
        text: "A 401(k), 403(b), or governmental 457 is a workplace retirement account. You and sometimes your employer put money in, up to annual limits. Investments inside the plan are a separate choice from the account itself. LeadStar does not administer these plans.",
      },
      {
        type: "list",
        items: [
          "401(k): common in private companies. Some offer a Roth 401(k) option.",
          "403(b): often used by schools, hospitals, and certain nonprofits.",
          "457: often used by governments and some nonprofits, with its own distribution rules.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "Leaving a job does not mean the money has to move",
      },
      {
        type: "paragraph",
        text: "Leaving a job does not automatically mean you should roll the money out. You may be able to leave it, move it to a new employer plan, roll it to an IRA, or take a distribution. None of those is always better. Fees, investment options, creditor protection, taxes, and your age all matter.",
      },
      {
        type: "paragraph",
        text: "This page does not tell you which choice to make. A rollover is a decision for you and appropriately licensed financial and tax professionals.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you list what you have and which questions belong in a first conversation. She does not manage the account or pick the funds.",
      },
    ],
  },
  {
    serviceSlug: "retirement-services",
    slug: "annuities",
    href: "/services/retirement-services/annuities",
    title: "Annuities",
    metaTitle: "Annuities",
    description:
      "An annuity is an insurance contract, not a bank account and not the same as an IRA. This page does not offer or recommend one.",
    hook: "Someone hears “guaranteed income” and thinks the hard part is already solved.",
    question: "What is the contract actually guaranteeing, and what is it not?",
    disclaimerVariant: "tax-adjacent",
    relatedLinks: [
      { label: "Retirement Services", href: "/services/retirement-services" },
      { label: "Traditional IRA", href: "/services/retirement-services/traditional-ira" },
      { label: "Life Insurance", href: "/services/life-insurance" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "An insurance contract, not a bank account",
      },
      {
        type: "paragraph",
        text: "An annuity is an insurance contract. Depending on the design, it may be built around long-term accumulation, later income, or both. It is not a bank account, and it is not the same as an IRA. An IRA can sometimes hold an annuity. Those are still two different things.",
      },
      {
        type: "paragraph",
        text: "This page is educational. It does not offer or recommend an annuity. If an insurer product is discussed later, it will be identified as insurance, with terms you can read, and only where Esther is licensed.",
      },
      {
        type: "heading",
        level: 2,
        id: "types-on-this-page",
        text: "Types you may hear about",
      },
      {
        type: "list",
        items: [
          "Immediate: income is designed to begin relatively soon after the premium is paid.",
          "Deferred: there is a waiting period before income begins.",
          "Fixed: interest crediting follows the contract’s guarantees and current rates.",
          "Fixed indexed: interest is tied to an index formula. You do not own the index.",
          "Variable: values can move with investment subaccounts. That design is a security. It is not presented here as something Esther sells.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "trade-offs",
        text: "Trade-offs you should expect to hear",
      },
      {
        type: "list",
        items: [
          "Surrender charges and limited liquidity for a period of years",
          "Fees, including optional rider costs",
          "Tax treatment and possible extra tax on early withdrawals",
          "Insurer claims-paying ability",
          "Complexity, and the fact that illustrations are not guarantees",
        ],
      },
      {
        type: "paragraph",
        text: "An annuity is not risk-free. It is not a guaranteed investment. It is not market growth without downside. Any guarantee is only as specific as the contract, and only as strong as the insurer behind it.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you understand the questions worth asking if an annuity comes up later. This page does not sell one.",
      },
    ],
  },
] as const satisfies readonly ProductPageContent[];
