export const advisor = {
  eyebrow: "A Partner You Can Trust",
  title: "Meet Esther Francis",
  bio: "Esther Francis is a Financial Services Professional. She focuses on helping people understand protection and planning questions in plain language so they can make informed decisions with greater confidence.",
  ctaLabel: "Read Esther's profile",
  ctaHref: "/about/esther-francis",
  officeLabel: "Visit the office gallery",
  officeHref: "/office#gallery",
} as const;

/**
 * Advisor banner proof points.
 * TODO: Verify the years-of-experience figure before production publication.
 */
export const advisorTrustPoints = [
  {
    icon: "Shield",
    title: "Clear",
    subtitle: "Conversations",
  },
  {
    icon: "Users",
    title: "Personalized",
    subtitle: "Guidance",
  },
  {
    icon: "Handshake",
    title: "Trusted",
    subtitle: "Support",
  },
] as const;
