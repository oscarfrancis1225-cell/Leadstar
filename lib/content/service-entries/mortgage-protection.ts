import type { ServicePageContent } from "@/lib/content/types";

export const mortgageProtectionService = {
  slug: "mortgage-protection",
  metaTitle: "Mortgage Protection",
  disclaimerVariant: "standard",
  productTypes: [
    {
      slug: "mortgage-centered-coverage",
      title: "Mortgage-Centered Coverage",
      purpose: "A design tied to a home loan. The benefit may go to a lender or shrink as the balance shrinks.",
      href: "/services/mortgage-protection/mortgage-centered-coverage",
    },
    {
      slug: "term-life",
      title: "Term Life",
      purpose: "Pays the named beneficiary, who then decides how to use the money, including housing.",
      href: "/services/life-insurance/term-life",
    },
    {
      slug: "life-insurance",
      title: "Life Insurance",
      purpose: "The broader protection conversation, if the job is bigger than the house payment.",
      href: "/services/life-insurance",
    },
  ],
  relatedArticleSlugs: [
    "mortgage-protection-vs-term-life",
    "how-much-life-insurance-do-i-need",
    "first-financial-planning-meeting",
  ],
  sections: [
    {
      type: "heading",
      level: 2,
      id: "the-useful-comparison",
      text: "Who receives the money?",
    },
    {
      type: "paragraph",
      text: "People shop a product called mortgage protection because the house payment is the number they can see. The harder question is who would receive the check, and who would decide whether to keep the house. Mortgage protection is designed around a home loan. Term life insurance is designed around the people you name. Both can put money toward housing if someone dies. They do not always send that money to the same place.",
    },
    {
      type: "paragraph",
      text: "Some mortgage-protection designs pay a lender, or pay a benefit that shrinks as the loan shrinks. A term life policy pays the beneficiary you list. That person can keep the house, sell it, or use the money for something else. Neither design is automatically better. The question is who you want to control the funds.",
    },
    {
      type: "table",
      caption: "General distinctions. A specific contract can differ.",
      headers: ["Question", "Mortgage-centered design", "Term life paid to a person"],
      rows: [
        ["Who typically receives the money?", "Often the lender, or a benefit tied to the loan", "The beneficiary you name"],
        ["Does the benefit have to pay the house?", "That is usually the point of the design", "The beneficiary decides"],
        ["What if you refinance or move?", "Some policies end or need to be rewritten", "A term policy can continue if you keep it in force"],
        ["What if the loan is smaller than the face amount?", "A decreasing benefit may follow the loan", "The listed face amount is what the contract states"],
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "the-calculator",
      text: "What the mortgage calculator shows",
    },
    {
      type: "paragraph",
      text: "The Mortgage Protection Calculator multiplies the payment you enter by the remaining term so you can see an approximate cash obligation still attached to the home. It is not a lender amortization and not an insurance recommendation. Use it to size the conversation, not to pick a policy.",
    },
    {
      type: "heading",
      level: 2,
      id: "questions-before-you-apply",
      text: "Questions before anyone applies",
    },
    {
      type: "list",
      items: [
        "If you die, who do you want to decide whether to keep the house?",
        "Is there already enough term life to cover the remaining balance?",
        "Would a decreasing benefit still match the loan after a refinance?",
        "Who owns the policy, and who is the beneficiary?",
      ],
    },
    {
      type: "paragraph",
      text: "Imagine a household that refinances two years after buying a policy that was written only to the first loan. The old contract may no longer match the new note. That is a paperwork problem as much as an insurance problem. Write the loan number and the policy number in the same place.",
    },
  ],
  faqs: [
    {
      question: "Is mortgage protection the same as homeowners insurance?",
      answer:
        "No. Homeowners insurance covers the building and related risks while you are alive. Mortgage protection or life insurance is about who can keep paying the loan if a person dies.",
    },
    {
      question: "If I die, who should receive the money, the bank, or a person I name?",
      answer:
        "Sometimes a contract is built that way. Sometimes a person is the beneficiary and chooses to pay the lender. The control difference is the reason to read the form before you apply.",
    },
    {
      question: "Does the benefit shrink as I pay down the loan?",
      answer:
        "Some designs decrease. Term life usually stays at the face amount you bought, unless you change it. Ask for that language in writing.",
    },
    {
      question: "I already have term life. Do I need a second policy?",
      answer:
        "Not automatically. If the existing policy already covers the remaining balance and names the right person, a second policy may be duplicating a job. Add the numbers before you apply.",
    },
    {
      question: "Is this a quote?",
      answer:
        "No. This page and the calculator are educational. A quote, if one is later requested, comes from an insurer and depends on underwriting.",
    },
  ],
  sources: [
    {
      label: "Insurance Information Institute: Life insurance basics",
      url: "https://www.iii.org/insurance-basics/life",
    },
    {
      label: "NAIC: Consumer information",
      url: "https://content.naic.org/consumer",
    },
  ],
} as const satisfies ServicePageContent;
