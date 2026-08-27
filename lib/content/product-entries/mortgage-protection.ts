import type { ProductPageContent } from "@/lib/content/types";

export const mortgageProtectionProducts = [
  {
    serviceSlug: "mortgage-protection",
    slug: "mortgage-centered-coverage",
    href: "/services/mortgage-protection/mortgage-centered-coverage",
    title: "Mortgage-Centered Coverage",
    metaTitle: "Mortgage-Centered Life Coverage",
    description:
      "A plain-language look at life coverage designed around a home loan, which may pay a lender or shrink as the balance shrinks.",
    hook: "The house payment is the number everyone can see. The harder question is who would keep making it.",
    question: "What is mortgage-centered coverage actually?",
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
        text: "This is what mortgage-centered coverage is",
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
        text: "What people often mix up",
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
