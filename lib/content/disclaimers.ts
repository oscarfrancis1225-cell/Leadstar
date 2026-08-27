import type { DisclaimerVariant } from "@/lib/content/types";

export const standardDisclaimer =
  "This article is for general educational purposes and is not individualized financial, investment, tax, legal, insurance, or Medicare advice. Product availability, eligibility, costs, and terms vary. Consult appropriate professionals about your circumstances.";

export const medicareDisclaimer = `${standardDisclaimer} This page explains Medicare program mechanics only. It does not describe, compare, or recommend specific plans, premiums, or carriers. LeadStar Financial is not affiliated with or endorsed by the U.S. government or the federal Medicare program.`;

export const taxAdjacentDisclaimer = `${standardDisclaimer} Tax rules depend on individual facts. Nothing here is tax advice.`;

export function getDisclaimer(variant: DisclaimerVariant) {
  if (variant === "medicare") return medicareDisclaimer;
  if (variant === "tax-adjacent") return taxAdjacentDisclaimer;
  return standardDisclaimer;
}
