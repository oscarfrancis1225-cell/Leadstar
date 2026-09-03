import type { Tool } from "@/lib/content/tools";

type ToolEducationProps = {
  tool: Tool;
};

/** Steps stay closed by default so the calculator is the first thing on screen. */
export function ToolEducation({ tool }: ToolEducationProps) {
  return (
    <details className="no-print rounded-[12px] border border-line bg-white p-4">
      <summary className="cursor-pointer text-sm font-semibold text-navy">
        How to use this page
      </summary>
      <ol className="mt-3 grid gap-3 md:grid-cols-3 md:gap-5">
        {tool.howToUse.map((step, index) => (
          <li key={step} className="flex gap-3 text-sm leading-6 text-muted">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-soft text-xs font-semibold text-navy">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs leading-5 text-muted">
        What you type stays on this page. Nothing is sent to LeadStar. Email, if
        you use it, only opens your own mail app.
      </p>
    </details>
  );
}
