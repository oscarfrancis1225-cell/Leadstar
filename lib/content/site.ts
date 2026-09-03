/**
 * Central business identity.
 * Paste verified Florida and California license numbers into licenses.*Number.
 * Do not invent a street address, phone, or legal-entity suffix here.
 * Schema (JSON-LD) publishes phone, email, and address only after contactVerified flags are true.
 */
export const siteConfig = {
  name: "LeadStar Financial",
  shortName: "LeadStar",
  tagline: "Plan. Protect. Prosper.",
  email: "efrancis@leadstarfinancial.com",
  phone: "(954) 449-3101",
  serviceArea:
    "Licensed in Florida and California. Confirm coverage during your conversation.",
  metadata: {
    title: "LeadStar Financial | Life Insurance in Florida and California",
    description:
      "Life insurance, retirement income, and turning 65 Medicare conversations with Esther Francis, licensed in Florida and California. Figure out how much life insurance you need before anyone talks about a quote.",
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
    floridaNumber: "W011875",
    californiaNumber: "0J00767",
    floridaLookupUrl: "https://licenseesearch.fldfs.com/",
    californiaLookupUrl:
      "https://www.insurance.ca.gov/01-consumers/105-type/findagtbrk.cfm",
    advertisingDisclaimer:
      "This website is insurance advertising. Esther Francis is an insurance agent licensed in Florida and California. Products, if issued, are issued by insurance companies, not by LeadStar Financial. No product is offered or recommended on this page.",
  },
  legalUpdatedOn: "August 27, 2026",
  location: {
    streetAddress: "6666 Saltaire Terrace",
    addressLocality: "Margate",
    addressRegion: "FL",
    postalCode: "33063",
    addressCountry: "US",
  },
  search: {
    googleSiteVerification: "",
    bingSiteVerification: "",
  },
  sameAs: ["https://www.linkedin.com/in/francisesther"] as readonly string[],
  contactVerified: {
    email: true,
    phone: true,
    address: true,
  },
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

export function formatPublicAddressSingleLine() {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    siteConfig.location;
  const street = streetAddress.trim();
  const city = addressLocality.trim();
  const region = addressRegion.trim();
  const zip = postalCode.trim();
  const cityLine = [city && region ? `${city}, ${region}` : city || region, zip]
    .filter(Boolean)
    .join(" ");
  return [street, cityLine].filter(Boolean).join(", ");
}

export function formatPublicAddressLines() {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    siteConfig.location;
  const street = streetAddress.trim();
  const city = addressLocality.trim();
  const region = addressRegion.trim();
  const zip = postalCode.trim();
  const cityLine = [city && region ? `${city}, ${region}` : city || region, zip]
    .filter(Boolean)
    .join(" ");
  return [street, cityLine].filter(Boolean);
}