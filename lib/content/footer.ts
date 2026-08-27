import { services } from "@/lib/content/services";

export const footerColumns = {
  services: services.map((service) => ({
    label: service.title,
    href: service.href,
  })),
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Esther Francis", href: "/about/esther-francis" },
    { label: "Reviews", href: "/reviews" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Financial Tools", href: "/tools" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy", href: "/privacy" },
    { label: "Disclosures", href: "/disclosures" },
  ],
} as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Temporary Use", href: "/temporary-use" },
  { label: "Disclosures", href: "/disclosures" },
] as const;

export const contactHighlights = [
  "No-obligation conversation",
  "Clear answers",
  "Personal guidance",
  "Secure form submission",
] as const;
