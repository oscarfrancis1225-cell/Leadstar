"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { navigation, services } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-bright focus-visible:ring-offset-2";

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const [entered, setEntered] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) {
      setEntered(false);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setEntered(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = document.querySelectorAll("header, #main-content, footer");
    background.forEach((el) => el.setAttribute("inert", ""));

    return () => {
      document.body.style.overflow = previous;
      background.forEach((el) => el.removeAttribute("inert"));
    };
  }, [open]);

  useFocusTrap(open, panelRef, onClose);

  if (!open) {
    return null;
  }

  return (
    <div data-site-chrome className="fixed inset-0 z-50 lg:hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-navy-deep/45"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "absolute inset-y-0 right-0 flex w-[calc(100%-2.75rem)] max-w-sm flex-col bg-white shadow-card outline-none transition-transform duration-300 ease-out",
          entered ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <p id={titleId} className="sr-only">
            Site navigation
          </p>
          <Logo compact onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-white"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Main menu">
          <ul className="space-y-1">
            {navigation
              .filter((item) => item.href !== "/")
              .map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                if ("hasDropdown" in item && item.hasDropdown) {
                  return (
                    <li key={item.href} className="pt-1">
                      <p className="px-3 pb-1 pt-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                        {item.label}
                      </p>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "block min-h-11 rounded-xl px-3 py-2.5 text-sm font-medium",
                          linkFocus,
                          pathname === item.href
                            ? "bg-cream text-blue"
                            : "text-navy hover:bg-cream",
                        )}
                        aria-current={pathname === item.href ? "page" : undefined}
                      >
                        All services
                      </Link>
                      <ul className="mt-1 ml-2 space-y-1 border-l-2 border-line pl-2">
                        {services.map((service) => {
                          const serviceActive = pathname === service.href;
                          return (
                            <li key={service.slug}>
                              <Link
                                href={service.href}
                                onClick={onClose}
                                className={cn(
                                  "flex min-h-11 items-center rounded-lg px-3 text-sm",
                                  linkFocus,
                                  serviceActive
                                    ? "bg-cream font-medium text-blue"
                                    : "text-navy hover:bg-cream",
                                )}
                                aria-current={serviceActive ? "page" : undefined}
                              >
                                {service.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block min-h-11 rounded-xl px-3 py-3 text-base font-medium",
                        linkFocus,
                        active ? "bg-cream text-blue" : "text-navy hover:bg-cream",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
        <div className="border-t border-line p-4">
          <Button href="/contact" className="w-full" showArrow onClick={onClose}>
            Start a conversation
          </Button>
        </div>
      </div>
    </div>
  );
}
