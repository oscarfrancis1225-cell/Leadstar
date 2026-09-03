import type { ServicePageContent } from "@/lib/content/types";

export const medicareInsuranceService = {
  slug: "medicare-insurance",
  metaTitle: "Medicare Insurance Education",
  disclaimerVariant: "medicare",
  productTypes: [
    {
      slug: "part-a",
      title: "Medicare Part A",
      purpose: "Hospital insurance. It helps cover inpatient hospital care and related categories.",
      href: "/services/medicare-insurance/part-a",
    },
    {
      slug: "part-b",
      title: "Medicare Part B",
      purpose: "Medical insurance. It helps cover doctor services, outpatient care, and many preventive services.",
      href: "/services/medicare-insurance/part-b",
    },
    {
      slug: "medicare-advantage",
      title: "Medicare Advantage",
      purpose: "A Medicare-approved private-plan way to receive Medicare benefits, also called Part C.",
      href: "/services/medicare-insurance/medicare-advantage",
    },
    {
      slug: "part-d",
      title: "Medicare Part D",
      purpose: "Prescription drug coverage, either as a separate plan or inside many Advantage plans.",
      href: "/services/medicare-insurance/part-d",
    },
    {
      slug: "medigap",
      title: "Medigap",
      purpose: "Private supplement insurance that works with Original Medicare. Not the same as Advantage.",
      href: "/services/medicare-insurance/medigap",
    },
    {
      slug: "health-insurance",
      title: "Health coverage before 65",
      purpose: "Coverage questions that show up before Medicare eligibility.",
      href: "/services/health-insurance",
    },
  ],
  relatedArticleSlugs: [
    "turning-65-medicare-timeline",
    "health-coverage-before-medicare",
    "retirement-income-transition",
  ],
  sections: [
    {
      type: "heading",
      level: 2,
      id: "turning-65-is-not-enrollment",
      text: "Turning 65 is not the same as being enrolled",
    },
    {
      type: "paragraph",
      text: "A lot of people treat the birthday as the enrollment. It is not. Medicare has windows. Miss one, and the next step can cost more or wait longer. The useful first move is the calendar, not a plan name.",
    },
    {
      type: "heading",
      level: 2,
      id: "what-this-page-covers",
      text: "What this page covers",
    },
    {
      type: "paragraph",
      text: "Medicare is federal health insurance for people 65 or older who meet citizenship or residency rules, and for some people under 65 with a qualifying disability, ALS, or end-stage renal disease. This page explains program mechanics only. It does not describe, compare, or recommend specific Medicare Advantage plans, prescription-drug plans, premiums, cost-sharing, star ratings, or carriers.",
    },
    {
      type: "paragraph",
      text: "LeadStar Financial is not affiliated with or endorsed by the U.S. government or the federal Medicare program. Esther Francis is not described as a Medicare specialist on this site.",
    },
    {
      type: "heading",
      level: 2,
      id: "parts-in-brief",
      text: "Parts of Medicare, in brief",
    },
    {
      type: "list",
      items: [
        "Part A is hospital insurance.",
        "Part B is medical insurance.",
        "People often hear Part C used for Medicare Advantage, which is a way some people receive Parts A and B through a private plan. This page does not compare those plans.",
        "Part D is prescription-drug coverage.",
      ],
    },
    {
      type: "paragraph",
      text: "Original Medicare is Parts A and B. Some people add a Medigap policy and a separate drug plan. Others enroll in a Medicare Advantage plan. Those are different structures. Choosing between them is a personal decision that depends on doctors, drugs, travel, and budget. Official publications on Medicare.gov are the place to read standardized Medigap letter plans. This site will not rank them.",
    },
    {
      type: "heading",
      level: 2,
      id: "when-you-can-sign-up",
      text: "When people can sign up",
    },
    {
      type: "paragraph",
      text: "The Initial Enrollment Period is a seven-month window: the three months before you turn 65, your birthday month, and the three months after. Coverage start dates depend on when you enroll inside that window. Medicare.gov explains the timing.",
    },
    {
      type: "paragraph",
      text: "The annual Open Enrollment Period runs from October 15 through December 7. Changes made then generally take effect January 1. People already in a Medicare Advantage plan also have a Medicare Advantage Open Enrollment Period from January 1 through March 31, with limits on what can change. A General Enrollment Period for Part A and Part B runs January 1 through March 31 if you missed earlier windows. Late-enrollment penalties can apply if you delay Part B or Part D without creditable coverage. Treat that as a concept to confirm on Medicare.gov, this page does not calculate a penalty.",
    },
    {
      type: "paragraph",
      text: "If you have qualifying employer coverage and delay Part B, a Special Enrollment Period may apply when that coverage ends. The length of that period depends on the situation. Social Security and Medicare.gov are the official sources.",
    },
    {
      type: "heading",
      level: 2,
      id: "automatic-or-not",
      text: "Some people get Medicare automatically",
    },
    {
      type: "paragraph",
      text: "Whether you are enrolled automatically depends on whether you already receive Social Security or Railroad Retirement benefits before 65. Medicare.gov walks through the path if you start those benefits before 65 and the path if you wait. Do not assume a card will arrive.",
    },
    {
      type: "heading",
      level: 2,
      id: "how-we-can-help",
      text: "How a LeadStar conversation can help",
    },
    {
      type: "paragraph",
      text: "A conversation can help you list dates, current coverage, and questions to take to Medicare.gov, Social Security, or your current insurer. If Esther later holds appointments that allow plan enrollment assistance, that status will be stated on the Disclosures page. Until then, treat this page as education only.",
    },
    {
      type: "callout",
      title: "Official sources first",
      text: "For enrollment steps, use Medicare.gov and Social Security. This website will not replace those pages.",
    },
  ],
  faqs: [
    {
      question: "When is the annual window, and is that the same as turning 65?",
      answer:
        "The annual Open Enrollment Period is October 15 through December 7. Coverage changes generally start January 1. Confirm details on Medicare.gov.",
    },
    {
      question: "If turning 65 is not enrollment, what is the Initial Enrollment Period?",
      answer:
        "It is a seven-month period around the month you turn 65: three months before, the birthday month, and three months after. People who qualify before 65 on disability have a different trigger. See Medicare.gov.",
    },
    {
      question: "Does LeadStar recommend a Medicare Advantage plan?",
      answer:
        "No. This site does not compare or recommend Medicare plans, premiums, or carriers.",
    },
    {
      question: "Is LeadStar part of Medicare?",
      answer:
        "No. LeadStar Financial is not affiliated with or endorsed by the U.S. government or the federal Medicare program.",
    },
    {
      question: "What is creditable coverage?",
      answer:
        "It is coverage that is expected to pay, on average, at least as much as Medicare’s standard drug coverage. It can matter if you delay Part D. Your current plan administrator can tell you whether a notice of creditable coverage applies.",
    },
    {
      question: "Can I get Medicare before 65?",
      answer:
        "Some people do, based on disability, ALS, or end-stage renal disease. Eligibility rules are set by federal law. Medicare.gov explains those paths.",
    },
  ],
  sources: [
    {
      label: "Medicare.gov: Get started with Medicare",
      url: "https://www.medicare.gov/basics/get-started-with-medicare",
    },
    {
      label: "Medicare.gov: Joining a plan",
      url: "https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan",
    },
    {
      label: "CMS: Original Medicare eligibility and enrollment",
      url: "https://www.cms.gov/medicare/enrollment-renewal/original-part-a-b",
    },
  ],
} as const satisfies ServicePageContent;
