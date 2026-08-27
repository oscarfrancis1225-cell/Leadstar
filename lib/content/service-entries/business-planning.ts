import type { ServicePageContent } from "@/lib/content/types";

export const businessPlanningService = {
  slug: "business-planning",
  metaTitle: "Business Planning",
  disclaimerVariant: "standard",
  productTypes: [
    {
      slug: "key-person-insurance",
      title: "Key Person Insurance",
      purpose: "Life coverage the business typically owns to help with the financial impact of losing a key person.",
      href: "/services/business-planning/key-person-insurance",
    },
    {
      slug: "buy-sell-funding",
      title: "Buy-Sell Funding",
      purpose: "Life insurance used as the funding layer for a written buy-sell agreement drafted by an attorney.",
      href: "/services/business-planning/buy-sell-funding",
    },
    {
      slug: "life-insurance",
      title: "Life Insurance",
      purpose: "Key-person and buy-sell funding are uses of life insurance, not a separate product line.",
      href: "/services/life-insurance",
    },
    {
      slug: "sep-ira",
      title: "SEP IRA",
      purpose: "Owner retirement accounts live under Retirement Services, not as a second copy here.",
      href: "/services/retirement-services/sep-ira",
    },
    {
      slug: "simple-ira",
      title: "SIMPLE IRA",
      purpose: "A small-employer retirement account structure, explained on its retirement page.",
      href: "/services/retirement-services/simple-ira",
    },
  ],
  relatedArticleSlugs: [
    "key-person-vs-buy-sell",
    "first-financial-planning-meeting",
    "how-much-life-insurance-do-i-need",
  ],
  sections: [
    {
      type: "heading",
      level: 2,
      id: "two-different-jobs",
      text: "Two different jobs",
    },
    {
      type: "paragraph",
      text: "Business-owner planning often mixes two problems that should stay separate. The first is cash to keep the business operating if a key person dies — payroll, a line of credit, or time to hire. The second is a written way to transfer an owner’s share when someone dies, becomes disabled, or leaves. Life insurance can fund either job. It does not replace the legal agreement.",
    },
    {
      type: "heading",
      level: 2,
      id: "key-person",
      text: "Key-person coverage",
    },
    {
      type: "paragraph",
      text: "Key-person insurance is typically owned by the business, with the business as beneficiary. The idea is to replace the economic value of someone whose absence would strain operations. The amount is a judgment, not a formula. Lenders sometimes ask for it. That request still does not tell you the right face amount.",
    },
    {
      type: "heading",
      level: 2,
      id: "buy-sell",
      text: "Buy-sell funding",
    },
    {
      type: "paragraph",
      text: "A buy-sell agreement is a legal document. Counsel should draft or review it. Insurance, if used, is only the funding layer: cash so the remaining owners can purchase a deceased owner’s interest under the price method the agreement names. Cross-purchase and entity-purchase designs put ownership of the policies in different places. Getting that wrong can create tax and control problems. This page is not tax or legal advice.",
    },
    {
      type: "table",
      caption: "Educational contrast only. Have an attorney review any agreement.",
      headers: ["Question", "Key-person", "Buy-sell funding"],
      rows: [
        ["Who usually owns the policy?", "The business", "The business or the other owners, depending on the design"],
        ["Who usually is the beneficiary?", "The business", "The party obligated to buy the shares"],
        ["What is the money for?", "Operations, debt, or time to replace the person", "Purchase of an ownership interest"],
        ["Does it replace a written agreement?", "No", "No — the agreement comes first"],
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "what-to-bring",
      text: "What to bring to a conversation",
    },
    {
      type: "list",
      items: [
        "Who cannot be absent for 90 days without the business stalling.",
        "Whether a buy-sell agreement already exists, and the year it was last updated.",
        "How ownership is split today.",
        "Whether a lender has already asked for coverage.",
      ],
    },
    {
      type: "paragraph",
      text: "Imagine two partners who bought policies ten years ago and never updated the agreement after a third partner joined. The insurance may still be in force. The paperwork may no longer match who should buy whose shares. That mismatch is common. It is also fixable once someone puts the documents on the table.",
    },
    {
      type: "heading",
      level: 2,
      id: "limits",
      text: "Limits of this page",
    },
    {
      type: "paragraph",
      text: "No sample premiums appear here. No carrier is named. Esther Francis can discuss protection questions for Florida and California businesses; corporate formalities and tax elections belong with your attorney and tax professional.",
    },
  ],
  faqs: [
    {
      question: "Do I need both key-person and buy-sell coverage?",
      answer:
        "Only if both jobs exist. A solo owner with no successor agreement has a different problem than two partners who already signed a buy-sell. Name the job first.",
    },
    {
      question: "Can the same policy do both jobs?",
      answer:
        "Using one policy for two purposes often creates a fight over the check. Separate amounts and separate ownership are usually clearer. An attorney should review any attempt to combine them.",
    },
    {
      question: "Is this legal advice?",
      answer:
        "No. Buy-sell terms, entity type, and tax results need qualified legal and tax counsel.",
    },
    {
      question: "What if we have no written agreement?",
      answer:
        "Insurance cannot invent the rules for a transfer. Start with counsel on the agreement, then talk about funding.",
    },
    {
      question: "Are you a business broker?",
      answer:
        "No. This page is about protection and funding conversations, not selling a company.",
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
