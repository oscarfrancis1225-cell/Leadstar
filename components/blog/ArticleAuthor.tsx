import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { estherFrancis } from "@/lib/content/authors";
import type { Article } from "@/lib/content/types";

export function ArticleAuthor({ article }: { article: Article }) {
  const attested = article.reviewAttestation === "signed";

  return (
    <section className="rounded-[16px] border border-line bg-cream p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <SmartImage
          src={estherFrancis.image.src}
          alt={estherFrancis.image.alt}
          width={96}
          height={96}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div>
          <p className="eyebrow">{attested ? "Professional review" : "About the practice"}</p>
          <h2 className="mt-2 font-serif text-2xl text-navy">
            <Link href={estherFrancis.href} className="hover:text-blue">
              {estherFrancis.name}
            </Link>
          </h2>
          <p className="text-sm text-muted">{estherFrancis.jobTitle}</p>
          <p className="mt-3 text-sm leading-7 text-ink">
            {attested
              ? `Reviewed by ${estherFrancis.name}, ${estherFrancis.jobTitle}, on ${article.lastReviewedAt}.`
              : `Prepared for general education. No signed professional review is on file for this article.`}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">{estherFrancis.shortBio}</p>
        </div>
      </div>
    </section>
  );
}
