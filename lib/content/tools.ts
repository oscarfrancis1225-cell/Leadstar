export const tools = [
  {
    slug: "retirement-income",
    title: "Retirement Income Planner",
    shortDescription:
      "If the paycheck stopped, would the income you typed cover the month?",
    description:
      "This tool illustrates whether savings grown to retirement, plus Social Security or pension income you enter, may cover the monthly retirement expenses you enter. It is a worksheet, not a forecast.",
    href: "/tools/retirement-income",
    icon: "Landmark",
    relatedServiceHref: "/services/retirement-services",
    relatedServiceLabel: "Retirement Services",
    ctaLabel: "Start a conversation",
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
      "Inflation, taxes, and the risk that returns arrive in a hard year-by-year pattern",
      "Guaranteed income products and actual Social Security calculations",
      "Healthcare or Medicare costs, and any product recommendation",
    ],
    disclosures: [
      "Illustrated estimate only. Actual investment performance is not guaranteed.",
      "This view uses today's dollars and does not adjust expenses or income for inflation.",
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
      "If the rate you enter held still, what would the balance look like?",
    description:
      "This tool illustrates how a starting balance and a consistent monthly contribution could grow if the annual return you enter stayed constant. The rate is an assumption, not a forecast.",
    href: "/tools/compound-growth",
    icon: "TrendingUp",
    relatedServiceHref: "/services/retirement-services",
    relatedServiceLabel: "Retirement Services",
    ctaLabel: "Start a conversation",
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
    shortDescription:
      "What savings figure would support the monthly income you have in mind?",
    description:
      "This tool illustrates a long-term savings figure that could support the monthly retirement income you enter, after subtracting Social Security or pension income you enter, using a planning withdrawal rate.",
    href: "/tools/retirement-goal",
    icon: "PiggyBank",
    relatedServiceHref: "/services/retirement-services",
    relatedServiceLabel: "Retirement Services",
    ctaLabel: "Start a conversation",
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
      "Educational estimate in today's dollars. This is not a savings-target recommendation.",
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
      "If someone depends on you, what is the gap after coverage you already have?",
    description:
      "This tool adds a few common financial responsibilities and subtracts coverage and savings you already have, so you can see a rough range for how much life insurance you might discuss. It is not a quote.",
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
      "What cash obligation is still attached to the house?",
    description:
      "This tool multiplies the monthly housing payment you enter by the remaining term so you can see the approximate cash obligation still attached to the home. It sizes a housing number. It does not pick a policy.",
    href: "/tools/mortgage-protection",
    icon: "Home",
    relatedServiceHref: "/services/mortgage-protection",
    relatedServiceLabel: "Mortgage Protection",
    ctaLabel: "Start a conversation",
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
      "How many months would current cash last if the paycheck paused?",
    description:
      "This tool divides current cash savings by essential monthly expenses and debt payments to illustrate how many months those reserves could cover. Household needs differ.",
    href: "/tools/financial-safety",
    icon: "Wallet",
    relatedServiceHref: "/tools",
    relatedServiceLabel: "All educational tools",
    ctaLabel: "Start a conversation",
    secondaryCtaLabel: "See all tools",
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
  {
    slug: "turning-65",
    title: "Turning 65 Enrollment-Period Calendar",
    shortDescription:
      "What seven months sit around a 65th birthday for Medicare Initial Enrollment Period?",
    description:
      "Enter a date of birth to see the 65th birthday and the seven months of Medicare Initial Enrollment Period. If the birthday is the 1st of the month, the period starts a month earlier and ends a month earlier. This page does not compare Medicare Advantage, Medigap, Part D, premiums, star ratings, or carriers. It is not a signup. LeadStar is not affiliated with Medicare.",
    href: "/tools/turning-65",
    icon: "Calendar",
    relatedServiceHref: "/services/medicare-insurance",
    relatedServiceLabel: "Medicare Insurance",
    ctaLabel: "Start a conversation",
    secondaryCtaLabel: "Explore Medicare Insurance",
    relatedSlugs: ["retirement-income", "financial-safety", "beneficiary-checklist"],
    howToUse: [
      "Enter your date of birth so the tool can find your 65th birthday.",
      "Read which seven months are in Initial Enrollment Period, including the first-of-the-month note if it applies.",
      "Use the checklist and the official Medicare.gov and Social Security links. Print or email the page to yourself if you want a copy.",
    ],
    includes: [
      "The 65th birthday from the date you typed",
      "Seven Initial Enrollment Period months, with the first-of-the-month shift when it applies",
      "A local checklist and links to Medicare.gov and Social Security",
    ],
    excludes: [
      "Medicare Advantage, Medigap, or Part D plan comparison",
      "Premiums, star ratings, carriers, and any plan recommendation",
      "A Social Security benefit estimate or an enrollment form",
    ],
    disclosures: [
      "This calendar is an illustration, not a quote, and not advice. Confirm dates on Medicare.gov.",
      "LeadStar Financial is not affiliated with or endorsed by the U.S. government or the federal Medicare program.",
      "If you are still working, ask the employer benefits office whether coverage is creditable. This tool does not answer that.",
    ],
    summary:
      "This calendar illustrates the seven months of Medicare Initial Enrollment Period around a 65th birthday. If the birthday is the 1st of the month, the period starts and ends a month earlier. It does not compare plans, premiums, star ratings, or carriers. LeadStar is not affiliated with Medicare.",
    faqs: [
      {
        question: "Does this page enroll me in Medicare?",
        answer:
          "No. It shows months. Sign up through Social Security or the official Medicare process. Confirm dates on Medicare.gov.",
      },
      {
        question: "What if my birthday is on the 1st of the month?",
        answer:
          "Medicare.gov says Initial Enrollment Period then starts a month earlier and ends a month earlier. The table on this page follows that rule. Still confirm your months on Medicare.gov.",
      },
      {
        question: "Does this compare Medicare Advantage, Medigap, or Part D?",
        answer:
          "No. This page does not compare Medicare Advantage, Medigap, Part D, premiums, star ratings, or carriers. It does not recommend a plan.",
      },
      {
        question: "Is LeadStar part of Medicare?",
        answer:
          "No. LeadStar is not affiliated with Medicare or Social Security. Official dates and accounts live on Medicare.gov and ssa.gov.",
      },
    ],
  },
  {
    slug: "beneficiary-checklist",
    title: "Beneficiary and Life-Event Checklist",
    shortDescription:
      "After a life change, which beneficiary forms still need a look?",
    description:
      "Mark life events and the account types that still need a beneficiary review. A divorce decree does not automatically change a beneficiary form. Employer plans may follow ERISA and the plan document. This is not legal advice. Nothing is saved on LeadStar servers. Print the list or email it only to yourself.",
    href: "/tools/beneficiary-checklist",
    icon: "ListChecks",
    relatedServiceHref: "/services/life-insurance",
    relatedServiceLabel: "Life Insurance",
    ctaLabel: "Start a conversation",
    secondaryCtaLabel: "Learn About Life Insurance",
    relatedSlugs: ["protection-needs", "financial-safety", "mortgage-protection"],
    howToUse: [
      "Check any life events that happened since you last looked at beneficiary forms.",
      "For each account type, jot where it lives. Do not type account numbers.",
      "Print the list or email it to yourself. Nothing is saved on this site.",
    ],
    includes: [
      "Life-event checkboxes you can mark on this device",
      "Account types people often forget to review, with an optional institution name",
      "A reminder that a decree does not rewrite the form that pays",
    ],
    excludes: [
      "Account numbers, Social Security numbers, and policy numbers",
      "Legal advice, a claim form, or an automatic change to any beneficiary",
      "A product recommendation or a quote",
    ],
    disclosures: [
      "This checklist is an illustration, not a quote, and not advice. It is not a legal document.",
      "A divorce decree does not automatically change a beneficiary form. Employer plans may follow ERISA and the plan document.",
      "Nothing you type here is saved on LeadStar servers. Email only opens your own mail app.",
    ],
    summary:
      "This worksheet helps you mark life events and account types whose beneficiary forms may need a review. A divorce decree does not automatically change those forms. Nothing is saved on LeadStar servers. It is not legal advice and not a quote.",
    faqs: [
      {
        question: "Does a divorce decree change my beneficiaries?",
        answer:
          "Usually no. Life insurance, IRAs, and many other accounts pay whoever is on the beneficiary form unless the plan or policy says otherwise. Employer plans may follow ERISA and the plan document. This is not legal advice.",
      },
      {
        question: "Does LeadStar store what I type?",
        answer:
          "No. Checks and notes stay on this device. Print the page. If you email it, your own mail app sends it. LeadStar does not receive the list.",
      },
      {
        question: "Should I put account numbers here?",
        answer:
          "No. You can type an institution name. Do not type account numbers, Social Security numbers, or policy numbers.",
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
