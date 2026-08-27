import { FadeCarousel } from "@/components/ui/FadeCarousel";
import { Container } from "@/components/ui/Container";
import { IconByName } from "@/components/ui/IconMap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/constants";
import { processGallery } from "@/lib/images";

export function ProcessSection() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <Container wide>
        <SectionHeading
          eyebrow="Our simple planning process"
          title="A Clear Path to Financial Confidence"
        />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <ol className="relative grid grid-cols-2 gap-x-6 gap-y-10 lg:gap-x-10">
            {processSteps.map((step) => (
              <li key={step.number} className="relative">
                <div className="relative z-10 mb-4 grid h-10 w-10 place-items-center rounded-full bg-blue text-sm font-semibold text-white">
                  {Number(step.number)}
                </div>
                <div className="mb-3 text-gold">
                  <IconByName name={step.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="official-frame">
            <div className="official-frame-mat">
              <div className="relative aspect-[3/2] overflow-hidden bg-navy">
                <FadeCarousel
                  images={processGallery}
                  label="Planning process photos"
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  encodeSrc
                  imageClassName="object-cover object-[center_20%]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
