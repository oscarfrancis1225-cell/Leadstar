"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navigation, services } from "@/lib/constants";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const menuId = useId();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <header
        data-site-chrome
        className={cn(
          "sticky top-0 z-40 border-b bg-white/92 backdrop-blur-md transition-all duration-200",
          scrolled ? "border-line shadow-header" : "border-transparent",
        )}
      >
        <div className="container-wide flex h-[68px] items-center justify-between gap-3 lg:h-20">
          <Logo priority />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                if ("hasDropdown" in item && item.hasDropdown) {
                  return (
                    <li key={item.href} className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        className={cn(
                          "inline-flex min-h-11 items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                          active || servicesOpen
                            ? "text-blue"
                            : "text-navy/80 hover:text-navy",
                        )}
                        aria-expanded={servicesOpen}
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={() => setServicesOpen((open) => !open)}
                        onKeyDown={(event) => {
                          if (event.key === "ArrowDown") {
                            event.preventDefault();
                            setServicesOpen(true);
                            const first = document.getElementById(`${menuId}-0`);
                            first?.focus();
                          }
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            servicesOpen && "rotate-180",
                          )}
                          aria-hidden
                        />
                      </button>
                      {servicesOpen ? (
                        <div
                          id={menuId}
                          role="menu"
                          className="absolute left-1/2 top-full z-30 mt-3 w-72 -translate-x-1/2 rounded-[14px] border border-line bg-white p-2 shadow-card"
                        >
                          {services.map((service, index) => (
                            <Link
                              key={service.slug}
                              id={`${menuId}-${index}`}
                              href={service.href}
                              role="menuitem"
                              className="block rounded-xl px-3.5 py-2.5 text-sm text-navy transition-colors hover:bg-cream"
                              onClick={() => {
                                trackEvent(analyticsEvents.serviceClicked, {
                                  service: service.slug,
                                });
                                setServicesOpen(false);
                              }}
                              onKeyDown={(event) => {
                                if (event.key === "ArrowDown") {
                                  event.preventDefault();
                                  document
                                    .getElementById(`${menuId}-${index + 1}`)
                                    ?.focus();
                                }
                                if (event.key === "ArrowUp") {
                                  event.preventDefault();
                                  document
                                    .getElementById(`${menuId}-${index - 1}`)
                                    ?.focus();
                                }
                              }}
                            >
                              {service.title}
                            </Link>
                          ))}
                          <Link
                            id={`${menuId}-${services.length}`}
                            href="/services"
                            role="menuitem"
                            className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-blue transition-colors hover:bg-cream"
                            onClick={() => setServicesOpen(false)}
                            onKeyDown={(event) => {
                              if (event.key === "ArrowUp") {
                                event.preventDefault();
                                document
                                  .getElementById(`${menuId}-${services.length - 1}`)
                                  ?.focus();
                              }
                            }}
                          >
                            All services
                          </Link>
                        </div>
                      ) : null}
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex min-h-11 items-center rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                        active ? "text-blue" : "text-navy/80 hover:text-navy",
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
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              className="hidden lg:inline-flex"
              showArrow
            >
              Start a conversation
            </Button>
            <button
              type="button"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-navy lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-haspopup="dialog"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span className="sr-only">
                {mobileOpen ? "Close navigation" : "Open navigation"}
              </span>
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation open={mobileOpen} onClose={closeMobileNav} />
    </>
  );
}
