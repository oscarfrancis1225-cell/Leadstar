import type { ProductPageContent } from "@/lib/content/types";

export const medicareInsuranceProducts = [
  {
    serviceSlug: "medicare-insurance",
    slug: "part-a",
    href: "/services/medicare-insurance/part-a",
    title: "Medicare Part A",
    metaTitle: "Medicare Part A",
    description:
      "Part A is hospital insurance, not the whole Medicare program. This page explains program mechanics only.",
    hook: "Part A is hospital insurance. It is not the whole Medicare program.",
    question: "Do you already have Part A, or are you assuming the card will arrive?",
    disclaimerVariant: "medicare",
    relatedLinks: [
      { label: "Part B", href: "/services/medicare-insurance/part-b" },
      { label: "Medicare Advantage", href: "/services/medicare-insurance/medicare-advantage" },
      { label: "Medicare Insurance", href: "/services/medicare-insurance" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what Part A is",
      },
      {
        type: "paragraph",
        text: "Part A is hospital insurance. Medicare.gov says it helps cover inpatient hospital care, skilled nursing facility care, hospice care, and some home health care. “Helps cover” is the right phrase. It does not mean every bill is paid in full.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "Part A is not the whole Medicare program. Most people also need Part B for doctor and outpatient care. Part A is also not a Medicare Advantage plan. Advantage is another way some people receive Medicare benefits through a private plan.",
      },
      {
        type: "paragraph",
        text: "This page does not list premiums, deductibles, or hospital day counts. Those change. Medicare.gov is the official source.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you write down what you already have and which official pages to read next. This site does not enroll you in a plan or compare carriers.",
      },
    ],
  },
  {
    serviceSlug: "medicare-insurance",
    slug: "part-b",
    href: "/services/medicare-insurance/part-b",
    title: "Medicare Part B",
    metaTitle: "Medicare Part B",
    description:
      "Part B is medical insurance. Delay it without creditable coverage and a late-enrollment penalty can follow. This page explains program mechanics only.",
    hook: "Hospital coverage is only half the picture. Delay Part B without creditable coverage and a penalty can follow.",
    question: "When does your Part B window actually open?",
    disclaimerVariant: "medicare",
    relatedLinks: [
      { label: "Part A", href: "/services/medicare-insurance/part-a" },
      { label: "Medigap", href: "/services/medicare-insurance/medigap" },
      { label: "Medicare Insurance", href: "/services/medicare-insurance" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what Part B is",
      },
      {
        type: "paragraph",
        text: "Part B is medical insurance. It helps cover doctor services, outpatient care, durable medical equipment, and many preventive services. Together, Part A and Part B are Original Medicare.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "Part B does not usually cover most prescription drugs you pick up at a pharmacy. That is often Part D, or drug coverage inside some Medicare Advantage plans. Part B also is not Medigap. Medigap is extra insurance that can help with certain costs in Original Medicare.",
      },
      {
        type: "paragraph",
        text: "Delaying Part B without creditable coverage can lead to a late-enrollment penalty. Confirm the timing on Medicare.gov or with Social Security. This page does not calculate a penalty.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you list dates and current coverage so you know what to check on the official sites.",
      },
    ],
  },
  {
    serviceSlug: "medicare-insurance",
    slug: "medicare-advantage",
    href: "/services/medicare-insurance/medicare-advantage",
    title: "Medicare Advantage",
    metaTitle: "Medicare Advantage (Part C)",
    description:
      "Medicare Advantage is a Medicare-approved private plan, another way to receive Medicare benefits, not a replacement for the program. This page does not compare or recommend plans.",
    hook: "A private plan is not a replacement for the Medicare program. It is one way to receive the benefits.",
    question: "Are you comparing Advantage to Original Medicare, or to Medigap?",
    disclaimerVariant: "medicare",
    relatedLinks: [
      { label: "Part A", href: "/services/medicare-insurance/part-a" },
      { label: "Part B", href: "/services/medicare-insurance/part-b" },
      { label: "Medigap", href: "/services/medicare-insurance/medigap" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what Medicare Advantage is",
      },
      {
        type: "paragraph",
        text: "Medicare Advantage is also called Part C. It is a Medicare-approved private plan that is another way to receive Medicare benefits. These plans bundle Part A and Part B. Most also include Part D drug coverage.",
      },
      {
        type: "paragraph",
        text: "You generally need both Part A and Part B to join. You may need to use doctors in the plan’s network. You usually cannot buy Medigap to use with a Medicare Advantage plan.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "Advantage is not Medigap. Medigap works with Original Medicare. Advantage is an alternative way to get Medicare benefits. This page does not rank plans, name carriers, or quote premiums. Plan availability changes by county and by year.",
      },
      {
        type: "paragraph",
        text: "Some Advantage plans are HMO or PPO designs. That is not the same as the health-insurance HMO and PPO pages on this site, which explain commercial and Marketplace-style networks.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you list the structure questions (Original Medicare versus Advantage, doctors, drugs, travel) to take to Medicare.gov or a counselor. This site does not enroll you or recommend a plan.",
      },
    ],
  },
  {
    serviceSlug: "medicare-insurance",
    slug: "part-d",
    href: "/services/medicare-insurance/part-d",
    title: "Medicare Part D",
    metaTitle: "Medicare Part D",
    description:
      "Part D helps cover prescriptions. Hospital and doctor coverage do not automatically include them. This page explains program mechanics only.",
    hook: "Hospital and doctor coverage still leave prescriptions uncovered unless you add a drug path.",
    question: "Do you already have creditable drug coverage, or a gap you have not named?",
    disclaimerVariant: "medicare",
    relatedLinks: [
      { label: "Part B", href: "/services/medicare-insurance/part-b" },
      { label: "Medicare Advantage", href: "/services/medicare-insurance/medicare-advantage" },
      { label: "Medicare Insurance", href: "/services/medicare-insurance" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what Part D is",
      },
      {
        type: "paragraph",
        text: "Part D helps cover prescription drugs. You join a Medicare drug plan with Original Medicare, or you may get drug coverage by joining a Medicare Advantage plan that includes it. Private companies run these plans under Medicare rules.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "Medigap policies sold after 2005 do not include drug coverage. If you want drug coverage with Original Medicare, Part D is a separate decision. A late Part D enrollment can carry a penalty if you go too long without creditable drug coverage. Your current plan administrator, not this website, can say whether a creditable-coverage notice applies.",
      },
      {
        type: "paragraph",
        text: "This page does not list formularies, premiums, or plan names.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you note whether you already have drug coverage and what to confirm on Medicare.gov.",
      },
    ],
  },
  {
    serviceSlug: "medicare-insurance",
    slug: "medigap",
    href: "/services/medicare-insurance/medigap",
    title: "Medigap",
    metaTitle: "Medigap (Medicare Supplement)",
    description:
      "Medigap is extra insurance that works with Original Medicare. It is not Medicare Advantage. This page does not rank letter plans.",
    hook: "Medigap is extra insurance on Original Medicare. It is not Medicare Advantage.",
    question: "Which extra are you actually shopping, a supplement, or a private plan path?",
    disclaimerVariant: "medicare",
    relatedLinks: [
      { label: "Medicare Advantage", href: "/services/medicare-insurance/medicare-advantage" },
      { label: "Part A", href: "/services/medicare-insurance/part-a" },
      { label: "Part B", href: "/services/medicare-insurance/part-b" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what Medigap is",
      },
      {
        type: "paragraph",
        text: "Medigap is Medicare Supplement Insurance. You buy it from a private company. It works with Original Medicare (Part A and Part B) to help with certain out-of-pocket costs, such as coinsurance. You generally must have Part A and Part B to buy it.",
      },
      {
        type: "paragraph",
        text: "In most states, plans are standardized by letter, such as Plan G or Plan K. The benefits in a lettered plan are the same from company to company. Price can differ. Not every letter is sold in every state.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "Medigap is not Medicare Advantage. Advantage is another way to get Medicare benefits. Medigap is extra insurance on top of Original Medicare. You generally cannot have both at the same time. Medigap also does not usually cover long-term care, vision, dental, hearing aids, or prescription drugs.",
      },
      {
        type: "paragraph",
        text: "This page does not rank letter plans or quote prices. Read the official Medigap materials on Medicare.gov.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you keep Advantage and Medigap in the right boxes so you know what you are even comparing. This site does not sell or rank Medigap policies.",
      },
    ],
  },
] as const satisfies readonly ProductPageContent[];
