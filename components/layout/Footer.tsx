import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import {
  footerColumns,
  legalLinks,
  siteConfig,
} from "@/lib/constants";
import { analyticsEvents } from "@/lib/analytics";
import { formatPhoneHref, isPlaceholderPhone } from "@/lib/utils";
import { ContactLink } from "@/components/layout/ContactLink";
import { ProducerIdentification } from "@/components/legal/ProducerIdentification";

export function Footer() {
  const year = new Date().getFullYear();
  const showPhone = !isPlaceholderPhone(siteConfig.phone);

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 xl:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))]">
        <div className="max-w-sm">
          <Logo inverted />
          <p className="mt-5 text-sm leading-7 text-white/68">
            Insurance and financial-protection conversations for families and
            businesses. Licensed in Florida and California.
          </p>
        </div>
        <FooterColumn title="Services" links={footerColumns.services} />
        <FooterColumn title="Company" links={footerColumns.company} />
        <FooterColumn title="Resources" links={footerColumns.resources} />
        <div>
          <p className="text-sm font-semibold tracking-wide text-white">Contact</p>
          <ul className="mt-5 space-y-4 text-sm text-white/72">
            {showPhone ? (
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-gold" aria-hidden />
                <ContactLink
                  href={formatPhoneHref(siteConfig.phone)}
                  event={analyticsEvents.phoneClicked}
                >
                  {siteConfig.phone}
                </ContactLink>
              </li>
            ) : null}
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-gold" aria-hidden />
              <ContactLink
                href={`mailto:${siteConfig.email}`}
                event={analyticsEvents.emailClicked}
              >
                {siteConfig.email}
              </ContactLink>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" aria-hidden />
              <span>{siteConfig.serviceArea}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-4 py-6 text-xs leading-6 text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.agency.url}
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:text-white"
            >
              {siteConfig.agency.credit}
            </a>
          </div>
        </div>
        <div className="container-wide space-y-3 pb-8">
          <ProducerIdentification variant="dark" />
          <p className="max-w-4xl text-[11px] leading-6 text-white/40">
            {siteConfig.disclosure}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-wide text-white">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.href}`}>
            <Link
              href={link.href}
              className="text-sm text-white/68 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
