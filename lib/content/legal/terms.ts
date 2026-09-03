import type { LegalDocument } from "@/lib/content/types";
import { siteConfig } from "@/lib/content/site";

export const termsDocument = {
  slug: "terms",
  href: "/terms",
  title: "Terms of Use",
  metaTitle: "Terms of Use",
  description:
    "Rules for using the LeadStar Financial website, including educational tools and the contact form.",
  lastUpdated: siteConfig.legalUpdatedOn,
  summary:
    "This website is for general information. Using it does not create a client, advisory, or insurance relationship. Policy contracts, if any, come later from an insurance company and a completed application.",
  sections: [
    {
      type: "heading",
      level: 2,
      id: "agreement",
      text: "Agreement to these terms",
    },
    {
      type: "paragraph",
      text: `By using ${siteConfig.name}’s website, you agree to these Terms of Use, the Privacy Policy, the Temporary Use license, and the Disclosures page. If you do not agree, do not use the site.`,
    },
    {
      type: "heading",
      level: 2,
      id: "educational-only",
      text: "Educational use only",
    },
    {
      type: "paragraph",
      text: "Content on this site is general education and insurance advertising. It is not legal, tax, investment, or individualized insurance advice. It is not an offer to sell a particular policy and not a quote.",
    },
    {
      type: "heading",
      level: 2,
      id: "no-relationship",
      text: "No relationship is created by browsing",
    },
    {
      type: "paragraph",
      text: "Reading a page, using a calculator, or sending the contact form does not make you a client and does not appoint LeadStar Financial or Esther Francis as your agent for a specific transaction. An insurance relationship, if one is formed, begins only after a conversation and any application the insurer accepts.",
    },
    {
      type: "heading",
      level: 2,
      id: "eligibility",
      text: "Who may use the site",
    },
    {
      type: "paragraph",
      text: "The site is intended for adults in the United States who want educational information. Insurance can be discussed only where Esther Francis is licensed (Florida and California) unless another license is later added to the Disclosures page.",
    },
    {
      type: "heading",
      level: 2,
      id: "contact-form",
      text: "Contact form",
    },
    {
      type: "paragraph",
      text: "The form is a request for follow-up. It is not an insurance application and does not bind coverage. You decide whether to give consent to be contacted. Consent is not required merely to ask a question, though we may be unable to call or text without it.",
    },
    {
      type: "heading",
      level: 2,
      id: "tools",
      text: "Calculators",
    },
    {
      type: "paragraph",
      text: "Tools illustrate numbers you enter. Results can be wrong if an input is wrong, and they omit taxes, fees, inflation, underwriting, and product features unless a tool says otherwise. Do not treat a result as a promise that assets, income, or coverage will last to any age.",
    },
    {
      type: "heading",
      level: 2,
      id: "intellectual-property",
      text: "Intellectual property",
    },
    {
      type: "paragraph",
      text: "Text, layout, logos, and graphics on this site belong to LeadStar Financial or their licensors. You may view them under the Temporary Use page. You may not copy the site for a competing service, scrape it in bulk, or present the material as your own.",
    },
    {
      type: "heading",
      level: 2,
      id: "acceptable-use",
      text: "Acceptable use",
    },
    {
      type: "list",
      items: [
        "Do not attempt to break, overload, or probe the site.",
        "Do not submit false contact information in order to harass anyone.",
        "Do not use the form to send malware or unlawful content.",
        "Do not collect other visitors’ information from the site.",
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "third-party-links",
      text: "Links to other sites",
    },
    {
      type: "paragraph",
      text: "Articles may link to official sources such as Medicare.gov, SSA.gov, the Florida Department of Financial Services, or the California Department of Insurance. Those sites have their own terms. LeadStar Financial does not control them.",
    },
    {
      type: "heading",
      level: 2,
      id: "disclaimer",
      text: "Limitation of warranties",
    },
    {
      type: "paragraph",
      text: "The site is provided as is. We work to keep pages accurate, but enrollment rules, product features, and laws change. Confirm important dates and contract terms from the official source or the insurer’s outline of coverage.",
    },
    {
      type: "heading",
      level: 2,
      id: "liability",
      text: "Limitation of liability",
    },
    {
      type: "paragraph",
      text: "To the extent the law allows, LeadStar Financial and Esther Francis are not liable for damages that arise only from reading the website or using a calculator. This limit does not take away rights that Florida or California law says you cannot waive, including any right that applies to an insurance transaction that later occurs.",
    },
    {
      type: "heading",
      level: 2,
      id: "governing-law",
      text: "Governing law",
    },
    {
      type: "paragraph",
      text: "These website terms are governed by the laws of the State of Florida, without deciding whose courts would hear a later insurance dispute. California residents keep any non-waivable rights they have under California law.",
    },
    {
      type: "heading",
      level: 2,
      id: "changes",
      text: "Changes",
    },
    {
      type: "paragraph",
      text: "We may update these terms by posting a new version on this page with a new date. The updated terms apply to later visits.",
    },
  ],
} as const satisfies LegalDocument;
