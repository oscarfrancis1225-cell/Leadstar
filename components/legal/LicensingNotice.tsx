import Link from "next/link";
import { siteConfig } from "@/lib/content/site";

export function LicensingNotice() {
  return (
    <p className="mt-6 text-sm leading-6 text-muted">
      {siteConfig.licenses.advertisingDisclaimer}{" "}
      <Link href="/disclosures" className="font-semibold text-blue hover:underline">
        Read licensing and advertising disclosures
      </Link>
      .
    </p>
  );
}
