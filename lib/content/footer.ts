import { services } from "@/lib/content/services";

export const footerColumns = {
  services: services.map((service) => ({
    label: service.title,
    href: service.href,
  })),
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Esther Francis", href: "/about/esther-francis" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Financial Tools", href: "/tools" },
    { label: "FAQ", href: "/faq" },
    { label: "Disclosures", href: "/disclosures" },
  ],
} as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Viewing terms", href: "/temporary-use" },
  { label: "Disclosures", href: "/disclosures" },
  { label: "Sitemap", href: "/sitemap" },
] as const;

export const contactHighlights = [
  "No application on this website",
  "You can pick Not Sure Yet",
  "Esther will only use this to reply",
  "Licensed in Florida and California",
] as const;
