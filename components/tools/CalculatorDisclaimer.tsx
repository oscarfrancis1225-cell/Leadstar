import Link from "next/link";
import { LicensingNotice } from "@/components/legal/LicensingNotice";
import { siteConfig } from "@/lib/constants";

type CalculatorDisclaimerProps = {
  notices: readonly string[];
};

export function CalculatorDisclaimer({ notices }: CalculatorDisclaimerProps) {
  return (
    <div className="space-y-3 text-sm leading-7 text-muted">
      {notices.map((notice) => (
        <p key={notice}>{notice}</p>
      ))}
      <p>{siteConfig.disclosure}</p>
      <LicensingNotice />
      <p>
        Review the full{" "}
        <Link href="/disclosures" className="font-semibold text-blue">
          disclosures
        </Link>
        .
      </p>
    </div>
  );
}
