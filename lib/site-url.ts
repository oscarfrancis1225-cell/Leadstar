function normalizeUrl(value: string) {
  return value.replace(/\/$/, "");
}

function isLocalHost(value: string) {
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(value);
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const onVercel = Boolean(process.env.VERCEL);

  if (explicit && !(onVercel && isLocalHost(explicit))) {
    return normalizeUrl(explicit);
  }

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (process.env.VERCEL_ENV === "production" && productionHost) {
    return `https://${normalizeUrl(productionHost)}`;
  }

  const vercelHost = process.env.VERCEL_URL?.trim();
  if (vercelHost) {
    return `https://${normalizeUrl(vercelHost)}`;
  }

  return explicit ? normalizeUrl(explicit) : "http://localhost:2000";
}
