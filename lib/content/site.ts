/**
 * Central business identity.
 * Paste verified Florida and California license numbers into licenses.*Number.
 * Do not invent a street address, phone, or legal-entity suffix here.
 */
export const siteConfig = {
  name: "LeadStar Financial",
  shortName: "LeadStar",
  tagline: "Plan. Protect. Prosper.",
  email: "hello@leadstarfinancial.com",
  phone: "(800) 000-0000",
  serviceArea:
    "Licensed in Florida and California. Confirm coverage during your conversation.",
  metadata: {
    title: "LeadStar Financial | Insurance & Financial Protection",
    description:
      "Insurance and financial-protection conversations with LeadStar Financial. Esther Francis is a Florida-based insurance agent also licensed in California.",
  },
  disclosure:
    "Information on this website is for general educational purposes and is not individualized financial, investment, tax, legal, insurance, or Medicare advice. Product availability, eligibility, costs, and terms vary. LeadStar Financial is not affiliated with or endorsed by the U.S. government or the federal Medicare program. Consult appropriate professionals about your circumstances.",
  legalName: "LeadStar Financial",
  entityNote:
    "LeadStar Financial is a financial-services firm offering insurance conversations. It is not the AmeriLife-affiliated LeadStar lead-generation platform.",
  agency: {
    name: "Biz Davinci",
    url: "https://bizdavinci.com",
    credit: "Biz Davinci",
  },
  licenses: {
    producerName: "Esther Francis",
    tradeWord: "Insurance",
    domicile: "Florida",
    principalPlaceOfBusiness: "Florida",
    floridaNumber: "",
    californiaNumber: "",
    floridaLookupUrl: "https://licenseesearch.fldfs.com/",
    californiaLookupUrl:
      "https://www.insurance.ca.gov/01-consumers/105-type/findagtbrk.cfm",
    advertisingDisclaimer:
      "This website is insurance advertising. Esther Francis is an insurance agent licensed in Florida and California. Products, if issued, are issued by insurance companies — not by LeadStar Financial. No product is offered or recommended on this page.",
  },
  legalUpdatedOn: "August 27, 2026",
};

export function displayLicenseNumber(number: string, state: string) {
  const trimmed = number.trim();
  return trimmed.length > 0
    ? trimmed
    : `${state} license number not yet listed on this site`;
}

export function floridaLicenseDisplay() {
  return displayLicenseNumber(siteConfig.licenses.floridaNumber, "Florida");
}

export function californiaLicenseDisplay() {
  return displayLicenseNumber(
    siteConfig.licenses.californiaNumber,
    "California",
  );
}

export function getProducerIdentificationText() {
  const { producerName, tradeWord, domicile, principalPlaceOfBusiness } =
    siteConfig.licenses;

  return `${producerName} | ${tradeWord} | State of domicile: ${domicile} | Principal place of business: ${principalPlaceOfBusiness} | California license ${californiaLicenseDisplay()} | Florida license ${floridaLicenseDisplay()}`;
}

export function getLicensingSummary() {
  return `${siteConfig.licenses.producerName} is an insurance agent licensed in Florida and California. ${siteConfig.licenses.advertisingDisclaimer}`;
}
