import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SmartImage } from "@/components/ui/SmartImage";
import { officeGallery, siteImages } from "@/lib/images";
import { siteConfig, formatPublicAddressLines } from "@/lib/content/site";
import { isPlaceholderPhone } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Office",
  description:
    "Office photographs and the public mailing address for LeadStar Financial in Margate, Florida.",
  alternates: { canonical: "/office" },
};

export default function OfficePage() {
  const addressLines = formatPublicAddressLines();
  const showPhone = !isPlaceholderPhone(siteConfig.phone);

  return (
    <>
      <PageHero
        eyebrow="Office photographs"
        title="Office photographs and mailing address"
        description="These are office photographs. They are not a tour of a meeting room. The public mailing address is listed below."
      />
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
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
          <div>
            <h2 className="headline text-3xl">Mailing address</h2>
            <p className="lead mt-4">
              {addressLines.length > 0
                ? addressLines.join(", ")
                : siteConfig.serviceArea}
            </p>
            <p className="lead mt-4">
              {showPhone ? (
                <>
                  {siteConfig.phone}
                  <br />
                </>
              ) : null}
              {siteConfig.email}
            </p>
            <p className="lead mt-4">
              Esther lives in Boca Raton. Conversations can be scheduled after
              you write. {siteConfig.serviceArea}
            </p>
          </div>
        </Container>
      </section>
      <section id="gallery" className="scroll-mt-24 bg-cream py-16 lg:py-20">
        <Container>
          <p className="eyebrow">Gallery</p>
          <h2 className="headline mt-3 text-3xl">Office photographs</h2>
          <p className="lead mt-4 max-w-2xl">
            Photographs from the office. They are labeled as photographs, not
            as a visit-us tour.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {officeGallery.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-white shadow-soft"
              >
                <SmartImage
                  src={encodeURI(image.src)}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="h-full w-full"
                  imgClassName="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
