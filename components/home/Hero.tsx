import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { siteImages } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="lg:grid lg:min-h-[640px] lg:grid-cols-[minmax(28rem,0.86fr)_minmax(0,1.14fr)]">
        <div className="align-container-start flex items-center pt-12 pr-6 pb-[calc(var(--panel-overhang)+2.75rem)] sm:pt-16">
          <div className="reveal max-w-[34rem]">
            <p className="eyebrow">A question most people never ask</p>
            <h1 className="headline mt-5 text-[2.4rem] sm:text-[3.15rem] xl:text-[3.55rem]">
              Can good health be an asset?
              <br />
              <span className="text-blue">Your paycheck already is.</span>
            </h1>
            <p className="lead mt-6 max-w-[30rem]">
              The household already runs on that paycheck. Health is how you
              keep earning it. Cover the years you still work. Then plan the
              years you do not.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" showArrow>
                Start a conversation
              </Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-[22.5rem] sm:h-[28.75rem] lg:h-full lg:min-h-[640px]">
          <SmartImage
            src={siteImages.heroFamily.src}
            alt={siteImages.heroFamily.alt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="absolute inset-0 h-full w-full"
            imgClassName="object-cover object-[center_20%]"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent max-lg:hidden" />
        </div>
      </div>
    </section>
  );
}
