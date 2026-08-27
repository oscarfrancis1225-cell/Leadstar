import Link from "next/link";
import { getProducerIdentificationText } from "@/lib/content/site";

type ProducerIdentificationProps = {
  variant?: "light" | "dark";
};

export function ProducerIdentification({
  variant = "light",
}: ProducerIdentificationProps) {
  const text = getProducerIdentificationText();
  const isDark = variant === "dark";

  return (
    <p
      className={
        isDark
          ? "text-[11px] leading-6 text-white/55"
          : "text-sm leading-6 text-muted"
      }
    >
      {text}.{" "}
      <Link
        href="/disclosures"
        className={
          isDark
            ? "underline decoration-white/30 underline-offset-2 hover:text-white"
            : "font-semibold text-blue hover:underline"
        }
      >
        Full disclosures
      </Link>
      .
    </p>
  );
}
