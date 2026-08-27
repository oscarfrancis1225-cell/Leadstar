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
    "Explore simple educational tools designed to help you better understand your financial picture.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial Tools & Calculators"
        title="Educational tools for a clearer financial picture"
        description="Explore simple educational tools designed to help you better understand your financial picture."
      />
      <section className="bg-white py-10 lg:py-16">
        <Container>
          <ToolsGrid />
          <div className="mt-10 max-w-3xl space-y-3 text-sm leading-7 text-muted">
            <p>
              These calculators provide illustrated estimates only. They do not
              create a recommendation, quote, or advisory relationship.{" "}
              {siteConfig.disclosure}{" "}
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
