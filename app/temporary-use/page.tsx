import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { temporaryUseDocument } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: temporaryUseDocument.metaTitle,
  description: temporaryUseDocument.description,
  alternates: { canonical: temporaryUseDocument.href },
};

export default function TemporaryUsePage() {
  return <LegalDocumentPage document={temporaryUseDocument} />;
}
