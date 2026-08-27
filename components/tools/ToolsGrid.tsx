"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconByName } from "@/components/ui/IconMap";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import { tools } from "@/lib/constants";

export function ToolsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
      {tools.map((tool) => (
        <Link
          key={tool.slug}
          href={tool.href}
          className="card block p-5 transition-colors hover:border-navy/20 sm:p-7"
          onClick={() =>
            trackEvent(analyticsEvents.toolsCardClicked, { tool: tool.slug })
          }
        >
          <div className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-gold">
            <IconByName name={tool.icon} className="h-5 w-5" />
          </div>
          <h2 className="mt-4 font-serif text-2xl text-navy">{tool.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{tool.shortDescription}</p>
          <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue">
            Calculate
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
      ))}
    </div>
  );
}
