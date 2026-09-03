import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SmartImage } from "@/components/ui/SmartImage";
import { officeGallery, siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Office",
  description:
    "Photographs of the LeadStar Financial office setting. Visit details can be confirmed during a conversation.",
  alternates: { canonical: "/office" },
};

export default function OfficePage() {
  return (
    <>
      <PageHero
        eyebrow="The office"
        title="A place for thoughtful conversations"
        description="These photographs show the setting where planning conversations take place. A street address is shared when it is confirmed for public use."
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
            <h2 className="headline text-3xl">Guidance with clarity and care</h2>
            <p className="lead mt-4">
              Every conversation starts with listening. The goal is to help you
              compare insurance and financial-protection options in language
              that is easy to follow, then choose what fits your household,
              timing, and priorities.
            </p>
            <p className="lead mt-4">
              Whether you are reviewing coverage for the first time or
              revisiting a plan as life changes, the process stays personal,
              organized, and unhurried.
            </p>
          </div>
        </Container>
      </section>
      <section id="gallery" className="scroll-mt-24 bg-cream py-16 lg:py-20">
        <Container>
          <p className="eyebrow">Gallery</p>
          <h2 className="headline mt-3 text-3xl">Office photographs</h2>
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
