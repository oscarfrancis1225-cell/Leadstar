import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { privacyDocument } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: privacyDocument.metaTitle,
  description: privacyDocument.description,
  alternates: { canonical: privacyDocument.href },
};

export default function PrivacyPage() {
  return <LegalDocumentPage document={privacyDocument} />;
}
