import type { ProductPageContent } from "@/lib/content/types";

export const finalExpenseProducts = [
  {
    serviceSlug: "final-expense",
    slug: "final-expense-insurance",
    href: "/services/final-expense/final-expense-insurance",
    title: "Final Expense Insurance",
    metaTitle: "Final Expense Insurance",
    description:
      "Final expense insurance is usually a smaller permanent life policy for last expenses. It is not a government program, and Medicare does not pay funeral costs.",
    hook: "Does a policy you already have already cover the last bills? If not, this is usually a small permanent life policy, not a government program.",
    question: "Does a policy you already have already cover the last bills?",
    disclaimerVariant: "standard",
    relatedLinks: [
      { label: "Whole Life", href: "/services/life-insurance/whole-life" },
      { label: "Life Insurance", href: "/services/life-insurance" },
      { label: "Final Expense", href: "/services/final-expense" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "A small permanent policy, not a burial program",
      },
      {
        type: "paragraph",
        text: "Final expense coverage is usually a smaller whole life policy. The job is modest and specific: put money in a beneficiary’s hands for funeral or memorial costs, remaining medical bills, or other last expenses. The beneficiary generally decides how to use the money. The check does not have to go to a funeral home.",
      },
      {
        type: "paragraph",
        text: "Advertisements may say burial insurance or funeral insurance. Those are marketing names. The contract is still life insurance, issued by an insurance company. It is not a government program. Medicare does not pay funeral costs.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "A smaller policy is not automatically a better one",
      },
      {
        type: "paragraph",
        text: "A smaller policy is not automatically a better or cheaper long-term solution. If someone already has enough life insurance for these costs, a separate final-expense policy may not have a job to do. It is also not the same as a pre-need funeral contract with a funeral home.",
      },
      {
        type: "heading",
        level: 2,
        id: "application-designs",
        text: "How applications usually work",
      },
      {
        type: "paragraph",
        text: "These are application designs, not separate products.",
      },
      {
        type: "list",
        items: [
          "Simplified issue: a short health questionnaire. Some applications are declined. Qualifying designs often pay the full death benefit for covered deaths from the start, subject to the contract.",
          "Guaranteed issue: no health questions used to decline the application, within an age range the insurer sets. Premiums are usually higher. A graded or modified benefit often applies for natural-cause deaths in the first years.",
        ],
      },
      {
        type: "paragraph",
        text: "A graded period is a policy term, not a government rule. During that time, a natural-cause death may return premiums plus interest, or pay only part of the face amount. Read the outline of coverage before anyone applies.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you read waiting-period language and decide whether this job is already covered by a policy you have. She will not promise approval.",
      },
    ],
  },
] as const satisfies readonly ProductPageContent[];
