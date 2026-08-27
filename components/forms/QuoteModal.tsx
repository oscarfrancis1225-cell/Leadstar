"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

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
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 py-8 sm:items-center">
      <button
        type="button"
        aria-label="Close quote form"
        className="absolute inset-0 bg-navy-deep/50"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        className="relative z-10 w-full max-w-2xl rounded-[18px] bg-white p-6 shadow-card sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Get a quote</p>
            <h2 id="quote-modal-title" className="headline mt-2 text-3xl">
              Tell us what matters most
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Share a few details and a member of the LeadStar team can follow up.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-navy"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <LeadForm compact />
      </div>
    </div>
  );
}
