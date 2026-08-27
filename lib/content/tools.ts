export const tools = [
  {
    slug: "retirement-income",
    title: "Retirement Income Planner",
    shortDescription:
      "Could your future income support the retirement you envision?",
    description:
      "This tool illustrates whether savings grown to retirement, plus Social Security or pension income you enter, may cover the monthly retirement expenses you enter.",
    href: "/tools/retirement-income",
    icon: "Landmark",
    relatedServiceHref: "/services/retirement-services",
    relatedServiceLabel: "Retirement Services",
    ctaLabel: "Schedule a Retirement Conversation",
    secondaryCtaLabel: "Explore Retirement Services",
    relatedSlugs: ["retirement-goal", "compound-growth", "financial-safety"],
    howToUse: [
      "Enter your current age, the age you hope to retire, and your current monthly income for context.",
      "Enter estimated retirement expenses, Social Security or pension income, current savings, and what you may add each month.",
      "Review the illustrated income, the expense figure, and any gap. Open Planning assumptions if you want to change the growth or withdrawal rate used in the illustration.",
    ],
    includes: [
      "Growth of current savings and monthly contributions to retirement",
      "A 4% planning withdrawal illustration unless you change it",
      "The Social Security or pension amount you typed",
    ],
    excludes: [
      "Inflation, taxes, and market sequence risk",
      "Guaranteed income products and actual Social Security calculations",
      "Healthcare or Medicare costs, and any product recommendation",
    ],
    disclosures: [
      "Illustrated estimate only. Actual investment performance is not guaranteed.",
      "This view uses today’s dollars and does not adjust expenses or income for inflation.",
      "A planning withdrawal rate is an educational shorthand. It is not a promise that assets will last to any specific age.",
    ],
    summary:
      "This planner compares an illustrated retirement income figure with the monthly expenses you enter. It is a worksheet, not a forecast and not an investment recommendation.",
    faqs: [
      {
        question: "Is this my Social Security benefit?",
        answer:
          "No. The tool uses the Social Security or pension amount you type. Official benefits come from the Social Security Administration.",
      },
      {
        question: "Does a gap mean I should buy a product?",
        answer:
          "No. A gap is only a difference between two numbers you entered. It is not a recommendation to buy insurance or an investment.",
      },
    ],
  },
  {
    slug: "compound-growth",
    title: "Compound Growth Calculator",
    shortDescription:
      "See what consistent saving and time could potentially accomplish.",
    description:
      "This tool illustrates how a starting balance and a consistent monthly contribution could grow if the annual return you enter stayed constant.",
    href: "/tools/compound-growth",
    icon: "TrendingUp",
    relatedServiceHref: "/services/retirement-services",
    relatedServiceLabel: "Retirement Services",
    ctaLabel: "Schedule Consultation",
    secondaryCtaLabel: "Explore Retirement Services",
    relatedSlugs: ["retirement-goal", "retirement-income", "financial-safety"],
    howToUse: [
      "Enter a starting amount and a monthly contribution.",
      "Choose an annual return and a number of years.",
      "Watch the illustrated balance and the curve change as you move the sliders.",
    ],
    includes: [
      "Monthly compounding and end-of-month contributions",
      "A constant return for the whole period",
    ],
    excludes: [
      "Taxes, fees, inflation, and withdrawals",
      "Changing returns and any investment recommendation",
    ],
    disclosures: [
      "Illustrative projection only. Actual investment performance is not guaranteed.",
      "The return you enter is an assumption, not a forecast of any account or product.",
    ],
    summary:
      "This calculator compounds a starting balance and a monthly contribution at the constant annual return you enter. The return is an assumption, not a forecast.",
    faqs: [
      {
        question: "Is the return guaranteed?",
        answer:
          "No. You choose the rate. Actual account results vary and can be negative.",
      },
      {
        question: "Does this include taxes or fees?",
        answer:
          "No. Taxes, fees, inflation, and withdrawals are excluded unless you change the inputs yourself outside the tool.",
      },
    ],
  },
  {
    slug: "retirement-goal",
    title: "Retirement Goal Calculator",
    shortDescription: "Estimate a potential long-term savings target.",
    description:
      "This tool illustrates a long-term savings figure that could support the monthly retirement income you enter, after subtracting Social Security or pension income you enter, using a planning withdrawal rate.",
    href: "/tools/retirement-goal",
    icon: "PiggyBank",
    relatedServiceHref: "/services/retirement-services",
    relatedServiceLabel: "Retirement Services",
    ctaLabel: "See How LeadStar Can Help",
    secondaryCtaLabel: "Explore Retirement Services",
    relatedSlugs: ["retirement-income", "compound-growth", "protection-needs"],
    howToUse: [
      "Enter your ages and the monthly retirement income you would like to illustrate.",
      "Subtract expected Social Security or pension by entering those amounts.",
      "Add current savings and monthly contributions to see an illustrated gap or surplus.",
    ],
    includes: [
      "A capital target from net annual income divided by the planning withdrawal rate",
      "Growth of current savings to retirement",
      "The planning age as context for how long retirement might last",
    ],
    excludes: [
      "Inflation, taxes, and longevity guarantees",
      "Actual Social Security calculations and a personalized savings recommendation",
    ],
    disclosures: [
      "Educational estimate in today’s dollars. This is not a savings-target recommendation.",
      "A 4% planning withdrawal rate is a common educational shorthand. It does not mean assets last to the planning age you entered.",
    ],
    summary:
      "This tool illustrates a long-term savings figure from the monthly income you want, minus income you already expect, using a planning withdrawal rate. It is not a savings recommendation.",
    faqs: [
      {
        question: "What does the 4% rate mean?",
        answer:
          "It is a common educational shorthand for converting an annual income need into a capital figure. It is not a promise that assets last to any age.",
      },
      {
        question: "Should I treat the result as my goal?",
        answer:
          "Treat it as a starting illustration. Inflation, taxes, and longevity are not fully modeled here.",
      },
    ],
  },
  {
    slug: "protection-needs",
    title: "Protection Needs Estimator",
    shortDescription:
      "Explore the financial responsibilities you may want to protect.",
    description:
      "This tool adds a few common financial responsibilities and subtracts coverage and savings you already have, so you can see a rough protection range.",
    href: "/tools/protection-needs",
    icon: "Umbrella",
    relatedServiceHref: "/services/life-insurance",
    relatedServiceLabel: "Life Insurance",
    ctaLabel: "Discuss My Protection Needs",
    secondaryCtaLabel: "Learn About Life Insurance",
    relatedSlugs: ["mortgage-protection", "financial-safety", "retirement-income"],
    howToUse: [
      "Enter household income and how many years of that income you want to illustrate replacing.",
      "Add remaining mortgage, other debts, and any education amount you would want funded.",
      "Subtract existing life coverage and liquid savings, then read the illustrated remainder.",
    ],
    includes: [
      "Income multiplied by years",
      "Mortgage, other debts, and an education goal",
      "Minus existing coverage and liquid savings",
    ],
    excludes: [
      "Present-value discounting, taxes, and final-expense estimates",
      "Disability or health costs, policy underwriting, and any coverage recommendation",
    ],
    disclosures: [
      "This is an educational estimate, not a coverage recommendation. Individual needs vary.",
      "No product is being offered or recommended here.",
    ],
    summary:
      "This estimator adds a few common obligations and subtracts coverage and savings you already have. The remainder is a range for discussion, not a policy amount to buy.",
    faqs: [
      {
        question: "Is the result the amount of life insurance I should buy?",
        answer:
          "No. It is an educational remainder from the numbers you entered. Underwriting and product limits are not included.",
      },
      {
        question: "Does this include final-expense costs?",
        answer:
          "Not as a separate line. You can add those costs into another debt or education field if you want them in the total.",
      },
    ],
  },
  {
    slug: "mortgage-protection",
    title: "Mortgage Protection Calculator",
    shortDescription:
      "Understand the financial obligation remaining on your home.",
    description:
      "This tool multiplies the monthly housing payment you enter by the remaining term so you can see the approximate cash obligation still attached to the home.",
    href: "/tools/mortgage-protection",
    icon: "Home",
    relatedServiceHref: "/services/mortgage-protection",
    relatedServiceLabel: "Mortgage Protection",
    ctaLabel: "Schedule Consultation",
    secondaryCtaLabel: "Learn About Mortgage Protection",
    relatedSlugs: ["protection-needs", "financial-safety", "retirement-income"],
    howToUse: [
      "Enter the remaining mortgage balance and the monthly payment you actually make.",
      "Add the interest rate and years remaining on the loan.",
      "Optionally include other housing costs, then review the remaining payment count and total outlay.",
    ],
    includes: [
      "Remaining balance as you entered it",
      "Payment multiplied by remaining months",
      "Optional other housing costs",
    ],
    excludes: [
      "A full lender amortization, escrow changes, and refinancing",
      "Taxes, insurance quotes, and any policy recommendation",
    ],
    disclosures: [
      "This shows an approximate remaining payment obligation. It is not a mortgage analysis and not an insurance recommendation.",
    ],
    summary:
      "This calculator approximates the remaining cash obligation on a home from the payment and term you enter. It is not a lender statement and not an insurance quote.",
    faqs: [
      {
        question: "Is this the same as my remaining balance?",
        answer:
          "The remaining balance is one input. The tool also shows payment times remaining months, which is a different number.",
      },
      {
        question: "Does this recommend mortgage protection insurance?",
        answer:
          "No. It sizes a housing obligation. Who should receive life-insurance proceeds is a separate conversation.",
      },
    ],
  },
  {
    slug: "financial-safety",
    title: "Financial Safety Cushion",
    shortDescription:
      "See how long your current reserves could potentially cover essential expenses.",
    description:
      "This tool divides current cash savings by essential monthly expenses and debt payments to illustrate how many months those reserves could cover.",
    href: "/tools/financial-safety",
    icon: "Wallet",
    relatedServiceHref: "/services/life-insurance",
    relatedServiceLabel: "Life Insurance",
    ctaLabel: "Schedule Consultation",
    secondaryCtaLabel: "Learn About Life Insurance",
    relatedSlugs: ["protection-needs", "mortgage-protection", "retirement-income"],
    howToUse: [
      "Enter the monthly expenses you would need to keep going.",
      "Add current cash or liquid savings.",
      "Include monthly debt payments, then read the illustrated number of months and the category label.",
    ],
    includes: [
      "Cash savings",
      "Essential expenses",
      "Debt payments you enter",
    ],
    excludes: [
      "Income replacement and investment accounts you would not spend",
      "Credit-line access and any recommended reserve target",
    ],
    disclosures: [
      "Illustrative categories only. Household needs differ. This is not a recommendation for how much cash to hold.",
    ],
    summary:
      "This tool divides cash savings by essential monthly expenses and debt payments to illustrate how many months those reserves could cover. Household needs differ.",
    faqs: [
      {
        question: "Is there a correct number of months?",
        answer:
          "No. The category labels are educational. This is not a recommendation for how much cash to hold.",
      },
      {
        question: "Does this include investment accounts?",
        answer:
          "Only if you type them into cash savings. Accounts you would not spend should stay out of the input.",
      },
    ],
  },
] as const;

export type Tool = (typeof tools)[number];
export type ToolSlug = Tool["slug"];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getRelatedTools(slug: string) {
  const current = getTool(slug);

  if (!current) {
    return [];
  }

  return current.relatedSlugs
    .map((relatedSlug) => getTool(relatedSlug))
    .filter((tool): tool is Tool => Boolean(tool));
}
