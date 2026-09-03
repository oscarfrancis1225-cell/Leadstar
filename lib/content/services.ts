export const services = [
  {
    slug: "life-insurance",
    title: "Life Insurance",
    shortDescription: "How much life insurance do I need? Then term vs whole, not the other way around.",
    description:
      "How much life insurance do I need is the first question. Term vs whole life is the second. Name the gap, then pick a design that lasts as long as the job.",
    href: "/services/life-insurance",
    icon: "HeartHandshake",
    summary:
      "Life insurance pays a death benefit if you die while the policy is in force. The useful first step is estimating how much coverage the job takes, then deciding whether term or permanent coverage fits that job.",
  },
  {
    slug: "retirement-services",
    title: "Retirement Services",
    shortDescription: "A balance sits in an account. Retirement income has to hit the checking account.",
    description:
      "Retirement income is the shift from a balance to a paycheck. Savings, Social Security, and other sources have to become a month. Nothing here promises a return or a particular lifestyle.",
    href: "/services/retirement-services",
    icon: "Landmark",
    summary:
      "Retirement conversations at LeadStar start with how savings, Social Security, and other sources might become monthly income. A balance is not a paycheck until you give it a method.",
  },
  {
    slug: "medicare-insurance",
    title: "Medicare Insurance",
    shortDescription: "A birthday cake is not an enrollment form.",
    description:
      "Turning 65 Medicare questions start with the enrollment period, not a plan name. This page explains program mechanics. It does not compare or recommend specific Medicare plans.",
    href: "/services/medicare-insurance",
    icon: "HeartPulse",
    summary:
      "Turning 65 is not the same as being enrolled in Medicare. Conversations start with the enrollment period, current coverage, and official program rules. This page does not compare plans.",
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    shortDescription: "Health insurance after a job change is a calendar problem, not a Medicare problem.",
    description:
      "Health insurance after a job change, or coverage before 65, is its own problem. Name the last day of coverage first. Options and costs depend on your situation and current law.",
    href: "/services/health-insurance",
    icon: "Stethoscope",
    summary:
      "Health coverage questions often appear during a job change, early retirement, or a family split. Coverage before 65 is not Medicare. Options and costs depend on your situation and current law.",
  },
  {
    slug: "final-expense",
    title: "Final Expense",
    shortDescription: "Final expense insurance is a small permanent policy, not a government program.",
    description:
      "Final expense insurance is typically a small permanent life policy meant to help with end-of-life costs. It is not a government program and not income replacement.",
    href: "/services/final-expense",
    icon: "Flower2",
    summary:
      "Final expense coverage is typically a small permanent life policy meant to help with funeral or other last expenses. It is not a government program, not Medicare, and not income replacement.",
  },
  {
    slug: "mortgage-protection",
    title: "Mortgage Protection",
    shortDescription: "Who gets the check if you die, the lender or a person you name?",
    description:
      "Mortgage protection is built around a home loan. Term life insurance is built around the people you name. The comparison is who receives the money and who decides whether to keep the house.",
    href: "/services/mortgage-protection",
    icon: "Home",
    summary:
      "Mortgage protection and term life can both put money toward a house. They do not always send that money to the same place. The useful question is who receives the check.",
  },
  {
    slug: "business-planning",
    title: "Business Planning",
    shortDescription: "Key person coverage keeps the doors open. Buy-sell funding transfers the shares.",
    description:
      "Business-owner planning often separates two jobs: cash to keep operations going if a key person dies, and a written way to transfer ownership. Life insurance can fund either. It does not replace the legal agreement.",
    href: "/services/business-planning",
    icon: "Briefcase",
    summary:
      "Key-person coverage and buy-sell funding both use life insurance. They are not the same job. One helps operations. The other funds a written transfer of ownership.",
  },
] as const;

export type Service = (typeof services)[number];
