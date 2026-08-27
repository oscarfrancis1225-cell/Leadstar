"use client";

import { analyticsEvents, trackEvent } from "@/lib/analytics";

type ContactLinkProps = {
  href: string;
  children: React.ReactNode;
  event: (typeof analyticsEvents)[keyof typeof analyticsEvents];
};

export function ContactLink({ href, children, event }: ContactLinkProps) {
  return (
    <a
      href={href}
      className="hover:text-white"
      onClick={() => trackEvent(event)}
    >
      {children}
    </a>
  );
}
