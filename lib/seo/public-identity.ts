import { siteConfig } from "@/lib/content/site";
import { isPlaceholderPhone } from "@/lib/utils";

export type PublicPostalAddress = {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
};

export type LicenseCredential = {
  "@type": "EducationalOccupationalCredential";
  credentialCategory: "ProfessionalLicense";
  name: string;
  identifier: string;
  recognizedBy: {
    "@type": "GovernmentOrganization";
    name: string;
    url: string;
  };
};

export function getPublicTelephone(): string | undefined {
  if (!siteConfig.contactVerified.phone) {
    return undefined;
  }
  if (isPlaceholderPhone(siteConfig.phone)) {
    return undefined;
  }
  const trimmed = siteConfig.phone.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function getPublicEmail(): string | undefined {
  if (!siteConfig.contactVerified.email) {
    return undefined;
  }
  const trimmed = siteConfig.email.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function getPublicPostalAddress(): PublicPostalAddress | undefined {
  if (!siteConfig.contactVerified.address) {
    return undefined;
  }

  const streetAddress = siteConfig.location.streetAddress.trim();
  const addressLocality = siteConfig.location.addressLocality.trim();
  const addressRegion = siteConfig.location.addressRegion.trim();
  const postalCode = siteConfig.location.postalCode.trim();
  const addressCountry = siteConfig.location.addressCountry.trim() || "US";

  if (!streetAddress || !addressLocality || !addressRegion) {
    return undefined;
  }

  return {
    "@type": "PostalAddress",
    streetAddress,
    addressLocality,
    addressRegion,
    ...(postalCode ? { postalCode } : {}),
    addressCountry,
  };
}

export function getPublicSameAs(): string[] {
  return siteConfig.sameAs.filter((url) => url.trim().length > 0);
}

export function getLicenseCredentials(): LicenseCredential[] {
  const credentials: LicenseCredential[] = [];
  const floridaNumber = siteConfig.licenses.floridaNumber.trim();
  const californiaNumber = siteConfig.licenses.californiaNumber.trim();

  if (floridaNumber) {
    credentials.push({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "ProfessionalLicense",
      name: "Florida insurance license",
      identifier: floridaNumber,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Florida Department of Financial Services",
        url: siteConfig.licenses.floridaLookupUrl,
      },
    });
  }

  if (californiaNumber) {
    credentials.push({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "ProfessionalLicense",
      name: "California insurance license",
      identifier: californiaNumber,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "California Department of Insurance",
        url: siteConfig.licenses.californiaLookupUrl,
      },
    });
  }

  return credentials;
}