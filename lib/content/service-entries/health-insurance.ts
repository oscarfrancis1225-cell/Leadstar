import type { ServicePageContent } from "@/lib/content/types";

export const healthInsuranceService = {
  slug: "health-insurance",
  metaTitle: "Health Insurance After a Job Change",
  disclaimerVariant: "standard",
  productTypes: [
    {
      slug: "hmo",
      title: "HMO",
      purpose: "Usually covers care inside the plan network, except emergencies. Referrals may be required.",
      href: "/services/health-insurance/hmo",
    },
    {
      slug: "ppo",
      title: "PPO",
      purpose: "Typically allows out-of-network care at a higher cost, often without a referral.",
      href: "/services/health-insurance/ppo",
    },
    {
      slug: "epo",
      title: "EPO",
      purpose: "Generally covers in-network care only, except emergencies.",
      href: "/services/health-insurance/epo",
    },
    {
      slug: "pos",
      title: "POS",
      purpose: "Mixes network rules. A primary-care referral is often required to see a specialist.",
      href: "/services/health-insurance/pos",
    },
    {
      slug: "medicare-insurance",
      title: "Medicare",
      purpose: "When Medicare is on the horizon, health coverage is two questions, not one product name.",
      href: "/services/medicare-insurance",
    },
  ],
  relatedArticleSlugs: [
    "health-coverage-before-medicare",
    "turning-65-medicare-timeline",
    "financial-questions-after-divorce",
  ],
  sections: [
    {
      type: "heading",
      level: 2,
      id: "the-end-date",
      text: "Write the last day of coverage first",
    },
    {
      type: "paragraph",
      text: "Health insurance after a job change is a calendar problem. Coverage before 65 is a calendar problem. Medicare is later, for people who qualify on age. People mix those up. They hear Social Security and think health coverage tags along. It does not. The first task is to name the situation and the date coverage would end. Options and costs depend on that situation and on current law. This page does not shop named plans or list premiums.",
    },
    {
      type: "paragraph",
      text: "If you are leaving work and thinking about claiming Social Security early, the article You can take Social Security before 65. Medicare does not come with it is the longer read. This page stays on the job-change and pre-65 gap: what covers you until the Medicare calendar actually opens.",
    },
    {
      type: "heading",
      level: 2,
      id: "common-paths",
      text: "Paths people commonly compare",
    },
    {
      type: "list",
      items: [
        "Staying on an employer plan for a limited time after leaving a job, when a continuation right applies.",
        "A new employer's plan, if there is a waiting period.",
        "A Marketplace or other individual policy, when a special enrollment period is available.",
        "Coverage through a spouse's employer.",
        "A short-term or other limited plan. These can exclude conditions and are not a substitute for comprehensive coverage. Ask what is actually covered.",
      ],
    },
    {
      type: "paragraph",
      text: "Consider a hypothetical person who leaves a job in May and turns 65 the following February. The gap is not only \"buy something.\" It is two questions: what covers May through January, and how Medicare enrollment will work in the months around 65. Those are two conversations that should not be collapsed into one product name.",
    },
    {
      type: "heading",
      level: 2,
      id: "network-words",
      text: "HMO, PPO, EPO, POS are network words",
    },
    {
      type: "paragraph",
      text: "Those labels describe how doctors and hospitals are paid, not which plan is \"better.\" Metal tiers such as Bronze or Silver describe cost-sharing. They answer a different question. The product pages on this site explain the network types. They do not rank issuers.",
    },
    {
      type: "heading",
      level: 2,
      id: "creditable-coverage",
      text: "Creditable coverage, as a concept",
    },
    {
      type: "paragraph",
      text: "When Medicare is on the horizon, it can matter whether current drug coverage is creditable, meaning it is expected to pay, on average, at least as much as Medicare's standard drug coverage. A late Part D enrollment can carry a penalty if there is a long gap without creditable coverage. Your plan administrator, not this website, can say whether a creditable-coverage notice applies.",
    },
    {
      type: "heading",
      level: 2,
      id: "what-we-will-not-do-here",
      text: "What this page will not do",
    },
    {
      type: "list",
      items: [
        "It will not list metal tiers, subsidies, or issuer names as if they were current quotes.",
        "It will not tell you that a particular plan is the best or the lowest cost.",
        "It will not treat Medicare Advantage as a health-insurance shopping list. Medicare has its own page.",
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "how-leadstar-helps",
      text: "How a conversation helps",
    },
    {
      type: "paragraph",
      text: "Esther Francis can help you write down end dates, dependents who need to stay covered, and which official enrollment period you may be in. If an individual or group product is later discussed, it will be identified as insurance, with eligibility that depends on the insurer and on Florida or California rules.",
    },
  ],
  faqs: [
    {
      question: "Is this an Obamacare or Marketplace enrollment site?",
      answer:
        "No. This is an educational page. Official Marketplace enrollment happens through Healthcare.gov or a state exchange, or through an agent who is actually completing that enrollment.",
    },
    {
      question: "If coverage ends before 65, what should I do first?",
      answer:
        "Write down the last day of coverage, who else is covered, and whether a continuation notice is coming. Then look at the calendar for any special enrollment period. A conversation can help you order those steps.",
    },
    {
      question: "Does this page compare health plans?",
      answer:
        "No. Plan networks, deductibles, and prices change. Comparing them belongs in a current, individualized process, not on a static website.",
    },
    {
      question: "I retire at 63. Is that a Medicare question?",
      answer:
        "Medicare generally starts at 65 for people who qualify on age. Coverage from 63 to 65 is a separate health-coverage question. See also the article on health coverage before Medicare.",
    },
    {
      question: "Can you guarantee I will be approved?",
      answer:
        "No. Eligibility depends on the product, the application, and the law that applies. This website does not guarantee approval.",
    },
  ],
  sources: [
    {
      label: "HealthCare.gov: Special enrollment periods",
      url: "https://www.healthcare.gov/coverage-outside-open-enrollment/special-enrollment-period/",
    },
    {
      label: "Medicare.gov: Get started with Medicare",
      url: "https://www.medicare.gov/basics/get-started-with-medicare",
    },
  ],
} as const satisfies ServicePageContent;
