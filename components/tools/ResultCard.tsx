type ResultCardProps = {
  question: string;
  answer: string;
  meaning: string;
  notMeaning: string;
  children?: React.ReactNode;
};

/**
 * One result, said in plain words. The live region tells a screen reader the
 * new answer when the numbers change. Extra figures stay in a closed details
 * block so the first read is short.
 */
export function ResultCard({
  question,
  answer,
  meaning,
  notMeaning,
  children,
}: ResultCardProps) {
  return (
    <div>
      <p className="text-sm font-medium text-navy">{question}</p>
      <p
        className="headline mt-2 break-words text-3xl tabular-nums text-navy sm:text-4xl"
        role="status"
        aria-live="polite"
      >
        {answer}
      </p>
      <p className="mt-3 text-sm leading-6 text-navy">{meaning}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{notMeaning}</p>
      {children ? (
        <details className="mt-4 rounded-[12px] border border-line bg-white p-3">
          <summary className="cursor-pointer text-sm font-semibold text-navy">
            See the other numbers
          </summary>
          <div className="mt-2">{children}</div>
        </details>
      ) : null}
    </div>
  );
}
