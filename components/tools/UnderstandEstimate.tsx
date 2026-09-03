import type { Tool } from "@/lib/content/tools";
import { CalculatorDisclaimer } from "@/components/tools/CalculatorDisclaimer";

type UnderstandEstimateProps = {
  tool: Tool;
};

/** What the number counts and what it leaves out, plus the required notices. */
export function UnderstandEstimate({ tool }: UnderstandEstimateProps) {
  return (
    <div className="no-print">
      <details className="rounded-[12px] border border-line bg-white p-4">
        <summary className="cursor-pointer text-sm font-semibold text-navy">
          What this result counts, and what it leaves out
        </summary>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-navy">It counts</h3>
            <ul className="mt-2 grid gap-1.5 text-sm leading-6 text-muted">
              {tool.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-navy">It leaves out</h3>
            <ul className="mt-2 grid gap-1.5 text-sm leading-6 text-muted">
              {tool.excludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </details>
      <div className="mt-4">
        <CalculatorDisclaimer notices={tool.disclosures} />
      </div>
    </div>
  );
}
