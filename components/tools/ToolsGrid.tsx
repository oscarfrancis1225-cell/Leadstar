"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconByName } from "@/components/ui/IconMap";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import { tools } from "@/lib/constants";

export function ToolsGrid() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
      {tools.map((tool) => (
        <li key={tool.slug}>
          <Link
            href={tool.href}
            className="card flex h-full flex-col p-5 transition-colors hover:border-navy/20 sm:p-6"
            onClick={() =>
              trackEvent(analyticsEvents.toolsCardClicked, { tool: tool.slug })
            }
          >
            <div className="grid h-11 w-11 place-items-center rounded-full bg-gold-soft text-gold">
              <IconByName name={tool.icon} className="h-5 w-5" />
            </div>
            <h2 className="mt-3 font-serif text-xl text-navy">{tool.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{tool.shortDescription}</p>
            <span className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-3 text-sm font-semibold text-blue">
              Open this tool
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
