export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!raw) {
    return "http://localhost:2000";
  }

  return raw.replace(/\/$/, "");
}
