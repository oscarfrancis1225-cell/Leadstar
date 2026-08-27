import type { Tool } from "@/lib/content/tools";
import { CalculatorDisclaimer } from "@/components/tools/CalculatorDisclaimer";

type UnderstandEstimateProps = {
  tool: Tool;
};

export function UnderstandEstimate({ tool }: UnderstandEstimateProps) {
  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="container-site">
        <p className="eyebrow">Understand this estimate</p>
        <h2 className="headline mt-3 text-3xl">What this illustration covers</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="card p-6">
            <h3 className="font-serif text-xl text-navy">
              What this estimate includes
            </h3>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
              {tool.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card p-6">
            <h3 className="font-serif text-xl text-navy">
              What this estimate does not include
            </h3>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
              {tool.excludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="mt-8 max-w-3xl">
          <CalculatorDisclaimer notices={tool.disclosures} />
        </div>
      </div>
    </section>
  );
}
