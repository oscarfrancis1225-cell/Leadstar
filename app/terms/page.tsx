import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { termsDocument } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: termsDocument.metaTitle,
  description: termsDocument.description,
  alternates: { canonical: termsDocument.href },
};

export default function TermsPage() {
  return <LegalDocumentPage document={termsDocument} />;
}
