import type { Metadata } from "next";
import { Check } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { contactHighlights, siteConfig } from "@/lib/constants";
import { isPlaceholderPhone } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start the conversation in the right order. Tell us what is in front of you and a member of the LeadStar team can follow up.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const showPhone = !isPlaceholderPhone(siteConfig.phone);

  return (
    <section className="bg-cream py-16 lg:py-20">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="headline mt-3 text-4xl sm:text-5xl">
            Start the conversation in the right order
          </h1>
          <p className="lead mt-5">
            Tell us what is actually in front of you. A member of our team can
            follow up. There is no application on this website.
          </p>
          <ul className="mt-8 space-y-3">
            {contactHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-navy">
                <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-blue-soft text-blue">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-6 text-muted">
            {showPhone ? (
              <>
                {siteConfig.phone}
                <br />
              </>
            ) : null}
            {siteConfig.email}
            <br />
            {siteConfig.serviceArea}
          </p>
        </div>
        <div className="card p-6 sm:p-8">
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}
