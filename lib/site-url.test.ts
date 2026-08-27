import { afterEach, describe, expect, it } from "vitest";
import { getSiteUrl } from "@/lib/site-url";

const keys = [
  "NEXT_PUBLIC_SITE_URL",
  "VERCEL",
  "VERCEL_ENV",
  "VERCEL_URL",
  "VERCEL_PROJECT_PRODUCTION_URL",
] as const;

const original = Object.fromEntries(
  keys.map((key) => [key, process.env[key]]),
) as Record<(typeof keys)[number], string | undefined>;

function setEnv(values: Partial<Record<(typeof keys)[number], string | undefined>>) {
  for (const key of keys) {
    const value = values[key];
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

afterEach(() => {
  setEnv(original);
});

describe("getSiteUrl", () => {
  it("uses the explicit public site URL", () => {
    setEnv({
      NEXT_PUBLIC_SITE_URL: "https://leadstar-zeta.vercel.app/",
      VERCEL: undefined,
    });

    expect(getSiteUrl()).toBe("https://leadstar-zeta.vercel.app");
  });

  it("ignores a localhost public URL on Vercel production", () => {
    setEnv({
      NEXT_PUBLIC_SITE_URL: "http://localhost:2000",
      VERCEL: "1",
      VERCEL_ENV: "production",
      VERCEL_PROJECT_PRODUCTION_URL: "leadstar-zeta.vercel.app",
      VERCEL_URL: "leadstar-zeta.vercel.app",
    });

    expect(getSiteUrl()).toBe("https://leadstar-zeta.vercel.app");
  });

  it("falls back to the Vercel host when no public URL is set", () => {
    setEnv({
      NEXT_PUBLIC_SITE_URL: undefined,
      VERCEL: "1",
      VERCEL_ENV: "preview",
      VERCEL_URL: "leadstar-abc.vercel.app",
    });

    expect(getSiteUrl()).toBe("https://leadstar-abc.vercel.app");
  });
});
