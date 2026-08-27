import { Button } from "@/components/ui/Button";
import type { ArticleCta } from "@/lib/content/types";

export function ArticleCTA({ cta }: { cta: ArticleCta }) {
  return (
    <aside className="rounded-[16px] border border-line bg-white px-6 py-6">
      <p className="text-base leading-7 text-ink">{cta.text}</p>
      <div className="mt-5">
        <Button href={cta.href} variant="blue" showArrow>
          {cta.label}
        </Button>
      </div>
    </aside>
  );
}
