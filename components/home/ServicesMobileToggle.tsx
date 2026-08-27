"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type ServicesMobileToggleProps = {
  children: React.ReactNode;
};

export function ServicesMobileToggle({ children }: ServicesMobileToggleProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <>
      <div
        id={panelId}
        className={cn(expanded ? "contents" : "max-md:hidden md:contents")}
      >
        {children}
      </div>
      <div className="col-span-2 md:hidden">
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded ? "Show Fewer" : "View All Services"}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
            aria-hidden
          />
        </button>
      </div>
    </>
  );
}
