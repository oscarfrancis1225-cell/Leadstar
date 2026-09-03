import type { LegalDocument } from "@/lib/content/types";
import {
  californiaLicenseDisplay,
  floridaLicenseDisplay,
  siteConfig,
} from "@/lib/content/site";

export const disclosuresDocument = {
  slug: "disclosures",
  href: "/disclosures",
  title: "Disclosures",
  metaTitle: "Insurance Disclosures",
  description:
    "Licensing, advertising, compensation, and Medicare disclosures for LeadStar Financial and Esther Francis.",
  lastUpdated: siteConfig.legalUpdatedOn,
  summary:
    "Esther Francis is an insurance agent licensed in Florida and California. This website is educational insurance advertising. It is not affiliated with Medicare or any government agency. Products, if issued, are issued by insurance companies.",
  sections: [
    {
      type: "heading",
      level: 2,
      id: "who-we-are",
      text: "Who we are",
    },
    {
      type: "paragraph",
      text: `${siteConfig.name} publishes this website so people can understand insurance and financial-protection questions before a conversation. ${siteConfig.licenses.producerName} is a Financial Services Professional and an insurance agent. ${siteConfig.entityNote}`,
    },
    {
      type: "paragraph",
      text: `Public mailing address: 6666 Saltaire Terrace, Margate, FL 33063. Phone: ${siteConfig.phone}. Email: ${siteConfig.email}. Esther lives in Boca Raton. Use the website form if you want a reply.`,
    },
    {
      type: "heading",
      level: 2,
      id: "licensing",
      text: "Licensing",
    },
    {
      type: "paragraph",
      text: `${siteConfig.licenses.producerName} is licensed to transact insurance in Florida and California. State of domicile: ${siteConfig.licenses.domicile}. Principal place of business: ${siteConfig.licenses.principalPlaceOfBusiness}. No other states are claimed on this website.`,
    },
    {
      type: "list",
      items: [
        `Florida license: ${floridaLicenseDisplay()}`,
        `California license: ${californiaLicenseDisplay()}`,
      ],
    },
    {
      type: "paragraph",
      text: "You can verify a Florida license through the Florida Department of Financial Services licensee search. You can verify a California license through the California Department of Insurance. An agency license, if any, is not listed here because it has not been confirmed for this site.",
    },
    {
      type: "list",
      items: [
        `Florida licensee search: ${siteConfig.licenses.floridaLookupUrl}`,
        `California Department of Insurance, find an agent or broker: ${siteConfig.licenses.californiaLookupUrl}`,
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "what-this-website-is",
      text: "What this website is, and is not",
    },
    {
      type: "paragraph",
      text: "Pages, articles, and tools on this site are for general education. They are insurance advertising under state law. Browsing, using a calculator, or submitting the contact form does not bind coverage, create a client relationship, or form an insurance contract.",
    },
    {
      type: "paragraph",
      text: "No specific policy is offered or recommended on these pages. Availability, eligibility, costs, waiting periods, and contract terms depend on the insurer, the product, your answers, and the state where the policy would be delivered.",
    },
    {
      type: "heading",
      level: 2,
      id: "who-issues-coverage",
      text: "Who issues coverage",
    },
    {
      type: "paragraph",
      text: "If a policy is later applied for and issued, the insurance company (not LeadStar Financial) issues the contract and pays valid claims according to that contract. Carrier appointments vary and are not listed on this page until they are verified for public use.",
    },
    {
      type: "heading",
      level: 2,
      id: "compensation",
      text: "Compensation",
    },
    {
      type: "paragraph",
      text: "Insurance producers are typically paid by the insurance company if a policy is issued. Compensation can include commissions and, in some cases, other incentives from an insurer. That payment does not change the fact that policy terms come from the insurer. Ask during a conversation if you want a clearer explanation of how compensation would work for a product under discussion.",
    },
    {
      type: "heading",
      level: 2,
      id: "government-affiliation",
      text: "No government affiliation",
    },
    {
      type: "paragraph",
      text: "LeadStar Financial and Esther Francis are not affiliated with, endorsed by, or acting on behalf of the United States government, the Centers for Medicare & Medicaid Services, the federal Medicare program, the Social Security Administration, the State of Florida, or the State of California. Florida law prohibits advertising that would cause a reasonable person to believe a state or federal government is responsible for the insurance sales activity on this site.",
    },
    {
      type: "heading",
      level: 2,
      id: "medicare",
      text: "Medicare pages",
    },
    {
      type: "paragraph",
      text: "Medicare pages on this site explain program mechanics only: parts of Medicare, enrollment periods, and official concepts such as creditable coverage. They do not describe, compare, or recommend specific Medicare Advantage plans, prescription-drug plans, premiums, cost-sharing, star ratings, or carriers. Esther is not described as a Medicare specialist on this site.",
    },
    {
      type: "heading",
      level: 2,
      id: "tools",
      text: "Educational tools",
    },
    {
      type: "paragraph",
      text: "Calculators on this site are illustrations. They use the numbers you type and a small set of planning assumptions. They are not quotes, illustrations of a specific insurance or investment product, or a recommendation to buy, keep, or drop coverage.",
    },
    {
      type: "heading",
      level: 2,
      id: "titles-we-do-not-use",
      text: "Titles this site does not use",
    },
    {
      type: "paragraph",
      text: "This website does not claim that Esther Francis or LeadStar Financial is a Registered Investment Adviser, a Certified Financial Planner, a fiduciary, or a Medicare specialist. Those titles are omitted because they have not been documented for publication here.",
    },
    {
      type: "heading",
      level: 2,
      id: "how-to-reach-us",
      text: "How to reach us",
    },
    {
      type: "paragraph",
      text: `Use the contact form on this website. You may also call ${siteConfig.phone} or write ${siteConfig.email}. Mailing address: 6666 Saltaire Terrace, Margate, FL 33063. Do not send Social Security numbers, medical records, or account numbers through the form.`,
    },
    {
      type: "heading",
      level: 2,
      id: "related-pages",
      text: "Related pages",
    },
    {
      type: "list",
      items: [
        "Privacy Policy, how the contact form uses the information you submit",
        "Terms of Use, rules for using the website",
        "Temporary Use, the limited license to view this material",
      ],
    },
  ],
} as const satisfies LegalDocument;
