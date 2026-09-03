import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SmartImage } from "@/components/ui/SmartImage";
import { siteImages } from "@/lib/images";
import { siteConfig, formatPublicAddressLines } from "@/lib/content/site";
import { isPlaceholderPhone } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mailing Address",
  description:
    "The public mailing address, phone, and email for LeadStar Financial in Margate, Florida. Conversations with Esther Francis are scheduled, not walk-in.",
  alternates: { canonical: "/office" },
};

export default function OfficePage() {
  const addressLines = formatPublicAddressLines();
  const showPhone = !isPlaceholderPhone(siteConfig.phone);

  return (
    <>
      <PageHero
        eyebrow="Contact and location"
        title="Mailing address and how to reach Esther"
        description="LeadStar Financial is a one-person practice. The address below is a mailing address, not a walk-in office. Conversations are scheduled after you write or call."
      />
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <figure className="m-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-navy">
              <SmartImage
                src={siteImages.advisorPortrait.src}
                alt={siteImages.advisorPortrait.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full"
                imgClassName="object-cover object-[48%_12%]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              Esther Francis, Financial Services Professional.
            </figcaption>
          </figure>
          <div>
            <h2 className="headline text-3xl">Mailing address</h2>
            <p className="lead mt-4">
              {addressLines.length > 0
                ? addressLines.join(", ")
                : siteConfig.serviceArea}
            </p>
            <h2 className="headline mt-10 text-3xl">Phone and email</h2>
            <p className="lead mt-4">
              {showPhone ? (
                <>
                  {siteConfig.phone}
                  <br />
                </>
              ) : null}
              {siteConfig.email}
            </p>
            <h2 className="headline mt-10 text-3xl">How a meeting happens</h2>
            <p className="lead mt-4">
              This is a mailing address. It is not a walk-in office and there is
              no lobby to visit. Write or call first, and Esther will schedule a
              conversation by phone, by video, or in person at an agreed place
              and time.
            </p>
            <p className="lead mt-4">
              Esther lives in Boca Raton. {siteConfig.serviceArea}
            </p>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
