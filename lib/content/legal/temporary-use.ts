import type { LegalDocument } from "@/lib/content/types";
import { siteConfig } from "@/lib/content/site";

export const temporaryUseDocument = {
  slug: "temporary-use",
  href: "/temporary-use",
  title: "Temporary Use",
  metaTitle: "Temporary Use License",
  description:
    "The limited license to view LeadStar Financial website content for personal, temporary, educational use.",
  lastUpdated: siteConfig.legalUpdatedOn,
  summary:
    "You may read this website and try the calculators for your own short-term educational use. That permission is temporary. It does not transfer ownership, create a client relationship, or allow republication.",
  sections: [
    {
      type: "heading",
      level: 2,
      id: "the-license",
      text: "The limited license",
    },
    {
      type: "paragraph",
      text: `${siteConfig.name} grants you a personal, revocable, non-exclusive, non-transferable license to view pages and use educational tools on this website. The license lasts only while you are using the site for that purpose. We may end it by taking a page down or by asking you to stop a use that breaks these rules.`,
    },
    {
      type: "heading",
      level: 2,
      id: "what-you-may-do",
      text: "What you may do",
    },
    {
      type: "list",
      items: [
        "Read articles, service pages, and disclosures for your own information.",
        "Enter your own numbers into a calculator and look at the illustration.",
        "Print a single page for personal reference.",
        "Share a public URL with a family member who asked you to look something up.",
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "what-you-may-not-do",
      text: "What you may not do",
    },
    {
      type: "list",
      items: [
        "Copy the text into another website, brochure, or sales script as if it were yours.",
        "Scrape, harvest, or systematically download the site.",
        "Train a commercial model on the full text without written permission.",
        "Present a calculator result as a LeadStar quote or as a guaranteed outcome.",
        "Remove notices that the material is educational insurance advertising.",
      ],
    },
    {
      type: "heading",
      level: 2,
      id: "no-client-relationship",
      text: "Browsing is not a client relationship",
    },
    {
      type: "paragraph",
      text: "This temporary license is only about using the website. It is not an insurance appointment, not a consulting engagement, and not permission to bind coverage. If you later apply for a policy, the insurer’s application and contract control.",
    },
    {
      type: "heading",
      level: 2,
      id: "tools-are-temporary",
      text: "Calculator results are temporary",
    },
    {
      type: "paragraph",
      text: "Illustrated results exist only in your browser session unless you choose to start a conversation and describe them. We do not treat a calculator run as an application file. Assumptions can be changed, and a later conversation may use different numbers.",
    },
    {
      type: "heading",
      level: 2,
      id: "reservation-of-rights",
      text: "Reservation of rights",
    },
    {
      type: "paragraph",
      text: "All rights not expressly granted here stay with LeadStar Financial. Official government pages linked from articles remain the property of those agencies.",
    },
    {
      type: "heading",
      level: 2,
      id: "related-terms",
      text: "Related terms",
    },
    {
      type: "paragraph",
      text: "This page works together with the Terms of Use, Privacy Policy, and Disclosures. If there is a conflict about how you may view the material, this Temporary Use page controls the license; the Terms of Use control the broader website rules.",
    },
  ],
} as const satisfies LegalDocument;
