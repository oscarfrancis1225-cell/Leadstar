import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageHero } from "@/components/layout/PageHero";
import { ToolsGrid } from "@/components/tools/ToolsGrid";
import { Container } from "@/components/ui/Container";
import { LicensingNotice } from "@/components/legal/LicensingNotice";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Financial Tools",
  description:
    "Run the numbers before you guess. Educational calculators for how much life insurance you need, retirement income, compound growth, mortgage obligation, and cash reserves, plus a turning 65 enrollment-period calendar and a printable beneficiary checklist. Illustrations, not quotes.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial Tools"
        title="Run the numbers before you guess."
        description="Pick a question below. Type your numbers. You get one clear result, plus a worksheet you can print or copy. Nothing you type leaves your device."
      />
      <section className="bg-white py-10 lg:py-14">
        <Container>
          <ToolsGrid />
          <div className="mt-8 max-w-3xl space-y-3 text-sm leading-7 text-muted">
            <p>
              Every tool here is an illustration. It uses the numbers you type.
              It is not a quote, not a recommendation, and it does not start an
              advisory relationship. {siteConfig.disclosure}{" "}
              <Link href="/disclosures" className="font-semibold text-blue">
                Read disclosures
              </Link>
              .
            </p>
            <LicensingNotice />
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
