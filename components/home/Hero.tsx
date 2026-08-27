import { ShieldCheck } from "lucide-react";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { SmartImage } from "@/components/ui/SmartImage";
import { siteImages } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="lg:grid lg:min-h-[640px] lg:grid-cols-[minmax(28rem,0.86fr)_minmax(0,1.14fr)]">
        <div className="align-container-start flex items-center py-12 pr-6 sm:py-16">
          <div className="reveal max-w-[34rem]">
            <p className="eyebrow">Financial security for what matters most</p>
            <h1 className="headline mt-5 text-[2.4rem] sm:text-[3.15rem] xl:text-[3.55rem]">
              Protect your health.
              <br />
              Safeguard your life.
              <br />
              <span className="text-blue">Secure your income.</span>
            </h1>
            <p className="lead mt-6 max-w-[30rem]">
              Personalized insurance and financial solutions designed to protect
              your family, strengthen your future, and help you move forward
              with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuoteButton variant="primary" showArrow>
                Get a Quote
              </QuoteButton>
              <QuoteButton variant="secondary" showCalendar event="consultation">
                Schedule Consultation
              </QuoteButton>
            </div>
            <p className="mt-6 flex items-start gap-2.5 text-sm leading-6 text-muted">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-navy" aria-hidden />
              Trusted guidance for families at every stage of life.
            </p>
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
