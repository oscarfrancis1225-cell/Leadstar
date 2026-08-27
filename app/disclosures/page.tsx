import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { disclosuresDocument } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: disclosuresDocument.metaTitle,
  description: disclosuresDocument.description,
  alternates: { canonical: disclosuresDocument.href },
};

export default function DisclosuresPage() {
  return <LegalDocumentPage document={disclosuresDocument} />;
}
