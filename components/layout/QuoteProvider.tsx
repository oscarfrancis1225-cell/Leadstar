"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { QuoteModal } from "@/components/forms/QuoteModal";

type QuoteContextValue = {
  isOpen: boolean;
  openQuote: () => void;
  closeQuote: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      openQuote: () => setIsOpen(true),
      closeQuote: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </QuoteContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error("useQuoteModal must be used within QuoteProvider");
  }

  return context;
}
