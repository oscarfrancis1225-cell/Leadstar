type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const windowMs = 60_000;
const maxRequests = 5;
const store = new Map<string, RateLimitEntry>();

export function rateLimit(key: string) {
  const now = Date.now();
  const current = store.get(key);

  if (!current || current.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: maxRequests - 1 };
  }

  if (current.count >= maxRequests) {
    return { success: false, remaining: 0 };
  }

  current.count += 1;
  return { success: true, remaining: maxRequests - current.count };
}
