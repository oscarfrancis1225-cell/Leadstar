export type FreshnessType = "evergreen" | "annual-review" | "time-sensitive";

export type DisclaimerVariant = "standard" | "medicare" | "tax-adjacent";

export type ContentFaq = {
  readonly question: string;
  readonly answer: string;
};

export type ServiceProductCard = {
  readonly slug: string;
  readonly title: string;
  readonly purpose: string;
  readonly href: string;
};

export type ServicePageContent = {
  readonly slug: string;
  readonly metaTitle: string;
  readonly productTypes: readonly ServiceProductCard[];
  readonly sections: readonly ArticleSection[];
  readonly faqs: readonly ContentFaq[];
  readonly sources: readonly ArticleSource[];
  readonly relatedArticleSlugs: readonly string[];
  readonly disclaimerVariant: DisclaimerVariant;
};

export type ProductRelatedLink = {
  readonly label: string;
  readonly href: string;
};

export type ProductPageContent = {
  readonly serviceSlug: string;
  readonly slug: string;
  readonly href: string;
  readonly title: string;
  readonly metaTitle: string;
  readonly description: string;
  readonly hook: string;
  readonly question: string;
  readonly sections: readonly ArticleSection[];
  readonly relatedLinks: readonly ProductRelatedLink[];
  readonly disclaimerVariant: DisclaimerVariant;
};

export type LegalDocument = {
  readonly slug: string;
  readonly href: string;
  readonly title: string;
  readonly metaTitle: string;
  readonly description: string;
  readonly lastUpdated: string;
  readonly summary: string;
  readonly sections: readonly ArticleSection[];
};

export type ArticleImage = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly caption?: string;
  readonly purpose?: "hero" | "inline" | "social";
};

export type ArticleSource = {
  readonly label: string;
  readonly url: string;
};

export type ArticleCta = {
  readonly text: string;
  readonly href: string;
  readonly label: string;
};

export type ArticleSection =
  | { readonly type: "heading"; readonly level: 2 | 3; readonly id: string; readonly text: string }
  | { readonly type: "paragraph"; readonly text: string }
  | { readonly type: "list"; readonly ordered?: boolean; readonly items: readonly string[] }
  | {
      readonly type: "table";
      readonly caption?: string;
      readonly headers: readonly string[];
      readonly rows: readonly (readonly string[])[];
    }
  | { readonly type: "callout"; readonly title?: string; readonly text: string }
  | { readonly type: "figure"; readonly image: ArticleImage };

export type Article = {
  readonly slug: string;
  readonly href: string;
  readonly title: string;
  readonly metaTitle: string;
  readonly excerpt: string;
  readonly dek: string;
  readonly h1: string;
  readonly category: string;
  readonly pillar: string;
  readonly image: ArticleImage;
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly lastReviewedAt: string;
  /**
   * Internal tracking only. No public reviewer byline until reviewAttestation
   * is "signed" and a signed record exists in content/reviews/.
   */
  readonly intendedReviewer: string;
  readonly reviewAttestation: "pending" | "signed";
  readonly freshnessType: FreshnessType;
  readonly nextReviewAt: string;
  readonly readingTimeMinutes: number;
  readonly summary: string;
  readonly sections: readonly ArticleSection[];
  readonly sources: readonly ArticleSource[];
  readonly relatedSlugs: readonly string[];
  readonly serviceHref: string;
  readonly toolHrefs?: readonly string[];
  readonly midCta?: ArticleCta;
  readonly finalCta: ArticleCta;
  readonly disclaimerVariant: DisclaimerVariant;
  readonly publicationStatus: "draft" | "published";
};

export type Author = {
  readonly slug: string;
  readonly name: string;
  readonly jobTitle: string;
  readonly href: string;
  readonly shortBio: string;
  readonly bio: readonly string[];
  readonly areasOfFocus: readonly string[];
  readonly personalNotes: readonly string[];
  readonly image: ArticleImage;
};
