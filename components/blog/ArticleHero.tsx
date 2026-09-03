import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { EditorialImage } from "@/components/blog/EditorialImage";
import { estherFrancis } from "@/lib/content/authors";
import type { Article } from "@/lib/content/types";

export function ArticleHero({ article }: { article: Article }) {
  return (
    <header className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.category, href: "/blog" },
          { label: article.title },
        ]}
      />
      <p className="eyebrow">{article.category}</p>
      <h1 className="headline max-w-4xl text-4xl sm:text-5xl">{article.h1}</h1>
      <p className="lead max-w-3xl">{article.dek}</p>
      <p className="text-sm text-muted">
        {article.reviewAttestation === "signed" ? (
          <a href={estherFrancis.href} className="text-blue hover:underline">
            {`Reviewed by ${estherFrancis.name}, ${estherFrancis.jobTitle}`}
          </a>
        ) : (
          "Prepared for general education"
        )}
        {" · "}
        <time dateTime={article.publishedAt}>Published {article.publishedAt}</time>
        {article.updatedAt !== article.publishedAt ? (
          <>
            {" · "}
            <time dateTime={article.updatedAt}>Updated {article.updatedAt}</time>
          </>
        ) : null}
        {" · "}
        {article.readingTimeMinutes} min read
      </p>
      <EditorialImage
        src={article.image.src}
        alt={article.image.alt}
        width={article.image.width}
        height={article.image.height}
        caption={article.image.caption}
        priority
        sizes="(min-width: 1024px) 720px, 100vw"
      />
    </header>
  );
}
