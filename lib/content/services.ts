export const services = [
  {
    slug: "life-insurance",
    title: "Life Insurance",
    shortDescription: "Someone depends on your income. Start with that job, not a product name.",
    description:
      "If people depend on you, the first question is the gap (income, a loan, an education), not whether the policy is called term or whole life.",
    href: "/services/life-insurance",
    icon: "HeartHandshake",
    summary:
      "Life insurance can replace income or cover specific obligations if you die while others still depend on you. The useful first step is estimating the gap, not choosing a product name.",
  },
  {
    slug: "retirement-services",
    title: "Retirement Services",
    shortDescription: "A balance is not a paycheck. How does it become one?",
    description:
      "Retirement conversations here start with how savings, Social Security, and other sources might become monthly income. Nothing here promises a return or a particular lifestyle.",
    href: "/services/retirement-services",
    icon: "Landmark",
    summary:
      "Retirement services conversations at LeadStar focus on how savings, Social Security, and other sources might become income. Nothing here promises a return or a particular lifestyle.",
  },
  {
    slug: "medicare-insurance",
    title: "Medicare Insurance",
    shortDescription: "Turning 65 is not the same as being enrolled.",
    description:
      "Medicare conversations start with enrollment timing, current coverage, and official program rules. This page does not compare or recommend specific Medicare plans.",
    href: "/services/medicare-insurance",
    icon: "HeartPulse",
    summary:
      "Medicare conversations start with enrollment timing, current coverage, and official program rules. This page does not compare or recommend specific Medicare plans.",
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    shortDescription: "Coverage before 65 is its own problem. Medicare is later.",
    description:
      "Health coverage questions often appear during a job change, early retirement, or a family transition. Name the end date first. Options and costs depend on your situation and current law.",
    href: "/services/health-insurance",
    icon: "Stethoscope",
    summary:
      "Health coverage questions often appear during job changes, early retirement, or family transitions. Options and costs depend on your situation and current law.",
  },
  {
    slug: "final-expense",
    title: "Final Expense",
    shortDescription: "It is not a government program. It is a small permanent policy.",
    description:
      "Final expense coverage is typically a small permanent life policy meant to help with end-of-life costs. It is not a government program and not income replacement.",
    href: "/services/final-expense",
    icon: "Flower2",
    summary:
      "Final expense coverage is typically a small permanent life policy meant to help with end-of-life costs. It is not a government program and not income replacement.",
  },
  {
    slug: "mortgage-protection",
    title: "Mortgage Protection",
    shortDescription: "The useful question is who receives the money.",
    description:
      "Mortgage protection is designed around a home loan. Term life is designed around the people you name. The comparison is who receives the money and how the benefit works.",
    href: "/services/mortgage-protection",
    icon: "Home",
    summary:
      "Mortgage protection is designed around a home loan. Term life insurance is designed around the people you name. The useful comparison is who receives the money and how the benefit works.",
  },
  {
    slug: "business-planning",
    title: "Business Planning",
    shortDescription: "Key person keeps operations funded. Buy-sell transfers ownership.",
    description:
      "Business-owner planning often separates two jobs: keeping operations funded if a key person dies, and transferring ownership under a written agreement.",
    href: "/services/business-planning",
    icon: "Briefcase",
    summary:
      "Business-owner planning often separates two jobs: keeping operations funded if a key person dies, and transferring ownership under a written agreement.",
  },
] as const;

export type Service = (typeof services)[number];
