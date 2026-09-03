type ToolFaqsProps = {
  faqs: readonly { question: string; answer: string }[];
};

/** Answers stay collapsed so the page is short on a phone. */
export function ToolFaqs({ faqs }: ToolFaqsProps) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <div className="no-print">
      <h2 className="text-sm font-semibold text-navy">Common questions</h2>
      <div className="mt-3 grid gap-2">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="rounded-[12px] border border-line bg-white p-4"
          >
            <summary className="cursor-pointer text-sm font-semibold text-navy">
              {item.question}
            </summary>
            <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
