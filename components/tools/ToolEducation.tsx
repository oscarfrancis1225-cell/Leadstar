import type { Tool } from "@/lib/content/tools";

type ToolEducationProps = {
  tool: Tool;
};

export function ToolEducation({ tool }: ToolEducationProps) {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-site max-w-3xl py-8 lg:py-10">
        <p className="eyebrow">How to use this calculator</p>
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
          Figures update as you adjust the inputs. Nothing is submitted until
          you choose to start a conversation.
        </p>
      </div>
    </section>
  );
}
