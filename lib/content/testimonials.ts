/**
 * Testimonials are unpublished until real, permissioned client quotes exist.
 * Fabricated or AI-generated reviews must not appear on the public site.
 *
 * FILE PENDING MANUAL DELETION: keep this module only as an empty export
 * so existing imports compile. Delete this file and public/images/testimonials/
 * once you are ready to remove the unused module entirely.
 */
export const testimonials: ReadonlyArray<{
  quote: string;
  name: string;
  image: string;
  placeholder: true;
}> = [];
