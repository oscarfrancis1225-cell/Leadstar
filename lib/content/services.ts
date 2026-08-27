export const services = [
  {
    slug: "life-insurance",
    title: "Life Insurance",
    shortDescription: "Protect the people who matter most.",
    description:
      "Explore life insurance options that can help provide financial support for the people who depend on you.",
    href: "/services/life-insurance",
    icon: "HeartHandshake",
    summary:
      "Life insurance can replace income or cover specific obligations if you die while others still depend on you. The useful first step is estimating the gap, not choosing a product name.",
  },
  {
    slug: "retirement-services",
    title: "Retirement Services",
    shortDescription: "Plan confidently for the future you deserve.",
    description:
      "Review retirement planning approaches that can help you organize priorities and prepare for later chapters of life.",
    href: "/services/retirement-services",
    icon: "Landmark",
    summary:
      "Retirement services conversations at LeadStar focus on how savings, Social Security, and other sources might become income. Nothing here promises a return or a particular lifestyle.",
  },
  {
    slug: "medicare-insurance",
    title: "Medicare Insurance",
    shortDescription: "Navigate Medicare choices with clarity.",
    description:
      "Get a clearer view of Medicare-related options so you can compare coverage with more confidence.",
    href: "/services/medicare-insurance",
    icon: "HeartPulse",
    summary:
      "Medicare conversations start with enrollment timing, current coverage, and official program rules. This page does not compare or recommend specific Medicare plans.",
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    shortDescription: "Coverage designed around your health and family.",
    description:
      "Look at health coverage options that can be evaluated around your household, budget, and care preferences.",
    href: "/services/health-insurance",
    icon: "Stethoscope",
    summary:
      "Health coverage questions often appear during job changes, early retirement, or family transitions. Options and costs depend on your situation and current law.",
  },
  {
    slug: "final-expense",
    title: "Final Expense",
    shortDescription: "Help protect loved ones from unexpected costs.",
    description:
      "Consider final expense coverage that may help loved ones manage end-of-life costs with less financial strain.",
    href: "/services/final-expense",
    icon: "Flower2",
    summary:
      "Final expense coverage is typically a small permanent life policy meant to help with end-of-life costs. It is not a government program and not income replacement.",
  },
  {
    slug: "mortgage-protection",
    title: "Mortgage Protection",
    shortDescription: "Help protect your home and your family's future.",
    description:
      "Learn how mortgage protection can be used to help support housing stability if life takes an unexpected turn.",
    href: "/services/mortgage-protection",
    icon: "Home",
    summary:
      "Mortgage protection is designed around a home loan. Term life insurance is designed around the people you name. The useful comparison is who receives the money and how the benefit works.",
  },
  {
    slug: "business-planning",
    title: "Business Planning",
    shortDescription: "Protection strategies for owners and key people.",
    description:
      "Explore planning conversations designed for owners, partners, and key people who want more continuity in their work.",
    href: "/services/business-planning",
    icon: "Briefcase",
    summary:
      "Business-owner planning often separates two jobs: keeping operations funded if a key person dies, and transferring ownership under a written agreement.",
  },
] as const;

export type Service = (typeof services)[number];
