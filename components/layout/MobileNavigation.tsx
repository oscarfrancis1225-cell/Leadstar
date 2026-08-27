"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navigation, services } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const [entered, setEntered] = useState(false);

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

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden" inert={!open}>
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-navy-deep/45"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <aside
        id="mobile-navigation"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-white shadow-card transition-transform duration-300 ease-out",
          entered ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Mobile"
        tabIndex={open ? 0 : -1}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-navy hover:bg-cream"
                >
                  {item.label}
                </Link>
                {"hasDropdown" in item && item.hasDropdown ? (
                  <ul className="mb-2 ml-3 border-l border-line pl-3">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={service.href}
                          onClick={onClose}
                          className="block rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-cream hover:text-navy"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-line p-5">
          <Button href="/contact" className="w-full" showArrow onClick={onClose}>
            Get Started
          </Button>
        </div>
      </aside>
    </div>
  );
}
