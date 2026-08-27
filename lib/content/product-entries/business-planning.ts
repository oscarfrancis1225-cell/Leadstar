import type { ProductPageContent } from "@/lib/content/types";

export const businessPlanningProducts = [
  {
    serviceSlug: "business-planning",
    slug: "key-person-insurance",
    href: "/services/business-planning/key-person-insurance",
    title: "Key Person Insurance",
    metaTitle: "Key Person Insurance",
    description:
      "A plain-language look at key person insurance: life coverage the business typically owns to help with the financial impact of losing a key person.",
    hook: "A company can look fine on paper and still stall if one person is gone for 90 days.",
    question: "What is key person insurance actually for?",
    disclaimerVariant: "standard",
    relatedLinks: [
      { label: "Buy-Sell Funding", href: "/services/business-planning/buy-sell-funding" },
      { label: "Life Insurance", href: "/services/life-insurance" },
      { label: "Business Planning", href: "/services/business-planning" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what key person insurance is",
      },
      {
        type: "paragraph",
        text: "Key person insurance is typically life coverage the business owns, with the business as beneficiary. The idea is cash to help with payroll, a line of credit, or time to hire if a key person dies. It is a use of life insurance, not a new product line.",
      },
      {
        type: "paragraph",
        text: "The amount is a judgment, not a formula. A lender may ask for it. That request still does not tell you the right face amount.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "Key person coverage does not replace a buy-sell agreement. One check cannot cleanly do both jobs. Using one policy for operations and for buying a deceased owner’s share often creates a fight over the money.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you name who cannot be absent, and how life insurance is sometimes used for that job. She does not draft corporate documents.",
      },
    ],
  },
  {
    serviceSlug: "business-planning",
    slug: "buy-sell-funding",
    href: "/services/business-planning/buy-sell-funding",
    title: "Buy-Sell Funding",
    metaTitle: "Buy-Sell Funding",
    description:
      "A plain-language look at using life insurance as the funding layer for a written buy-sell agreement drafted by an attorney.",
    hook: "Two partners bought policies years ago and never updated the paperwork after a third person joined.",
    question: "What is buy-sell funding actually?",
    disclaimerVariant: "tax-adjacent",
    relatedLinks: [
      { label: "Key Person Insurance", href: "/services/business-planning/key-person-insurance" },
      { label: "Life Insurance", href: "/services/life-insurance" },
      { label: "SEP IRA", href: "/services/retirement-services/sep-ira" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what buy-sell funding is",
      },
      {
        type: "paragraph",
        text: "A buy-sell agreement is a legal document. Counsel should draft or review it. Insurance, if used, is only the funding layer: cash so the remaining owners can purchase a deceased owner’s interest under the price method the agreement names.",
      },
      {
        type: "paragraph",
        text: "LeadStar does not draft the agreement. Cross-purchase and entity-purchase designs put ownership of the policies in different places. Getting that wrong can create tax and control problems. This page is not tax or legal advice.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "Insurance cannot invent the rules for a transfer. If there is no written agreement, a policy does not create one. Owner retirement accounts such as a SEP IRA or SIMPLE IRA are a different conversation. Those pages live under Retirement Services.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you talk through the funding questions after an attorney has the agreement in view. Corporate formalities stay with your lawyer and tax professional.",
      },
    ],
  },
] as const satisfies readonly ProductPageContent[];
