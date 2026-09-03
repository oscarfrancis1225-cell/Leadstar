import type { Tool } from "@/lib/content/tools";

type ToolEducationProps = {
  tool: Tool;
};

export function ToolEducation({ tool }: ToolEducationProps) {
  return (
    <section className="no-print border-b border-line bg-white">
      <div className="container-site max-w-3xl py-8 lg:py-10">
        <p className="eyebrow">How to use this tool</p>
        <ol className="mt-4 grid gap-3 md:grid-cols-3 md:gap-5">
          {tool.howToUse.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm leading-6 text-muted">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-soft text-xs font-semibold text-navy">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs leading-5 text-muted">
          What you type stays on this page. You will see the illustration on
          screen either way. Email, if you use it, only opens your own mail
          app. These are illustrations, not quotes.
        </p>
      </div>
    </section>
  );
}
