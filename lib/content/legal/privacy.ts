import type { LegalDocument } from "@/lib/content/types";
import { siteConfig } from "@/lib/content/site";

export const privacyDocument = {
  slug: "privacy",
  href: "/privacy",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy",
  description:
    "How LeadStar Financial collects, uses, and protects information submitted through this website.",
  lastUpdated: siteConfig.legalUpdatedOn,
  summary:
    "The website contact form collects your name, email, phone, service interest, and optional message so we can reply. We do not sell that information. California residents can request access, correction, or deletion of personal information this site holds about them.",
  sections: [
    {
      type: "heading",
      level: 2,
      id: "scope",
      text: "Scope",
    },
    {
      type: "paragraph",
      text: `This notice describes how ${siteConfig.name} handles information collected through this website, including the contact form. Insurance producers also follow federal financial-privacy rules that apply to nonpublic personal information. If a later insurance application is taken, the issuing insurance company will have its own privacy notice.`,
    },
    {
      type: "heading",
      level: 2,
      id: "what-we-collect",
      text: "What we collect",
    },
    {
      type: "paragraph",
      text: "When you use the contact form, we collect the fields you complete:",
    },
    {
      type: "list",
      items: [
        "Full name",
        "Email address",
        "Phone number",
        "Service interest you select",
        "Preferred contact method, if you choose one",
        "Optional message",
        "The time you give consent to be contacted",
      ],
    },
    {
      type: "paragraph",
      text: "The form also includes a hidden field used only to discourage automated submissions. Do not put Social Security numbers, medical diagnoses, bank account numbers, or driver’s license numbers in the message field.",
    },
    {
      type: "heading",
      level: 2,
      id: "how-we-use-it",
      text: "How we use it",
    },
    {
      type: "paragraph",
      text: "We use this information to respond to your request, to contact you by the method you allow, and to keep a record of the inquiry as insurance and business records may require. We do not use the form to run advertising audiences or to sell lists.",
    },
    {
      type: "heading",
      level: 2,
      id: "sharing",
      text: "When we share information",
    },
    {
      type: "paragraph",
      text: "We do not sell personal information. We do not share it for cross-context behavioral advertising. This site does not run advertising pixels today.",
    },
    {
      type: "paragraph",
      text: "We may share information with service providers who host email or help us operate the website, and only as needed to send or store the request. We may also disclose information if the law requires it, to respond to a lawful request, or to protect against fraud or security threats.",
    },
    {
      type: "heading",
      level: 2,
      id: "cookies",
      text: "Cookies and analytics",
    },
    {
      type: "paragraph",
      text: "The site may use cookies or similar storage that are needed for the pages to function. There is no advertising cookie program on this site today. Event tracking used during development does not send personal form fields to an advertising network.",
    },
    {
      type: "heading",
      level: 2,
      id: "retention",
      text: "How long we keep it",
    },
    {
      type: "paragraph",
      text: "We keep inquiry records long enough to respond and as long as insurance or business-record rules reasonably require. We then delete or de-identify the record when it is no longer needed for those purposes.",
    },
    {
      type: "heading",
      level: 2,
      id: "california",
      text: "California resident rights",
    },
    {
      type: "paragraph",
      text: "If you are a California resident, you may request to know the personal information this website has collected about you, ask us to correct inaccurate information, or ask us to delete information we are not required to keep. You may also ask us to confirm that we do not sell or share your personal information for cross-context advertising.",
    },
    {
      type: "paragraph",
      text: "Some insurance-related information is governed by the Gramm-Leach-Bliley Act and may be handled under that framework rather than the California Consumer Privacy Act. We will explain which rules apply when you make a request.",
    },
    {
      type: "paragraph",
      text: "Because we do not sell or share personal information for cross-context advertising, this site does not display a “Do Not Sell or Share My Personal Information” link. If that practice changes, this notice and the homepage will be updated first.",
    },
    {
      type: "heading",
      level: 2,
      id: "how-to-ask",
      text: "How to make a privacy request",
    },
    {
      type: "paragraph",
      text: `Use the contact form and write that you are making a privacy request, or email ${siteConfig.email}. We may need to confirm it is you before we complete the request. You will not be charged a fee for a reasonable request, and we will not deny you a conversation solely because you exercised a privacy right.`,
    },
    {
      type: "heading",
      level: 2,
      id: "children",
      text: "Children",
    },
    {
      type: "paragraph",
      text: "This website is intended for adults. We do not knowingly collect personal information from children through the contact form.",
    },
    {
      type: "heading",
      level: 2,
      id: "changes",
      text: "Changes to this notice",
    },
    {
      type: "paragraph",
      text: "If our practices change in a material way, we will update this page and the date at the top. Continued use of the site after an update means the revised notice applies to later visits.",
    },
  ],
} as const satisfies LegalDocument;
