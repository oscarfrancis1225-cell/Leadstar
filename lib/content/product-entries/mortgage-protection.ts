import type { ProductPageContent } from "@/lib/content/types";

export const mortgageProtectionProducts = [
  {
    serviceSlug: "mortgage-protection",
    slug: "mortgage-centered-coverage",
    href: "/services/mortgage-protection/mortgage-centered-coverage",
    title: "Mortgage-Centered Coverage",
    metaTitle: "Mortgage-Centered Life Coverage",
    description:
      "Some designs pay a lender, or shrink as the loan shrinks. Term life pays a person you name. The useful question is who receives the money.",
    hook: "The house payment is the number everyone can see. Who would receive the check?",
    question: "If you die, who decides whether to keep the house?",
    disclaimerVariant: "standard",
    relatedLinks: [
      { label: "Term Life", href: "/services/life-insurance/term-life" },
      { label: "Life Insurance", href: "/services/life-insurance" },
      { label: "Mortgage Protection", href: "/services/mortgage-protection" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "Built around a loan, not around a person",
      },
      {
        type: "paragraph",
        text: "Some designs are built around a home loan. The benefit may go to a lender, or it may shrink as the balance shrinks. The point of that design is the house. That is a different job from term life that pays a person you name.",
      },
      {
        type: "paragraph",
        text: "Mortgage protection is not one standardized product. It is also not homeowners insurance. Homeowners insurance covers the building while you are alive. This conversation is about who can keep the payment going if a person dies.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "The bank is not always the beneficiary",
      },
      {
        type: "paragraph",
        text: "People assume the bank should always be the beneficiary. Sometimes a contract is built that way. Sometimes a person is the beneficiary and chooses to pay the lender. The control difference is the reason to read the form. A refinance can also leave an old contract pointing at the wrong loan.",
      },
      {
        type: "paragraph",
        text: "If you already have term life that covers the remaining balance and names the right person, a second policy may be doing the same job twice. Term life lives on its own page. This page will not copy that article.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you compare a loan-centered design with term life paid to a person, and ask who you want in control of the money.",
      },
    ],
  },
] as const satisfies readonly ProductPageContent[];
