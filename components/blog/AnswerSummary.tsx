type AnswerSummaryProps = {
  text: string;
  label?: string;
};

export function AnswerSummary({
  text,
  label = "In brief",
}: AnswerSummaryProps) {
  return (
    <aside className="rounded-[16px] border border-line bg-cream px-6 py-5">
      <p className="eyebrow">{label}</p>
      <p className="mt-3 text-base leading-7 text-ink">{text}</p>
    </aside>
  );
}
