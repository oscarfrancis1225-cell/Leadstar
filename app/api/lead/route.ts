import { NextResponse } from "next/server";
import { leadSchema, type LeadPayload } from "@/lib/lead-schema";
import { rateLimit } from "@/lib/rate-limit";
import {
  createRequestId,
  sanitizeEmail,
  sanitizePhone,
  sanitizeText,
} from "@/lib/utils";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip).success) {
    return NextResponse.json(
      { ok: false, message: "Please wait a moment and try again." },
      { status: 429 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  if (
    typeof body === "object" &&
    body &&
    "companyWebsite" in body &&
    typeof body.companyWebsite === "string" &&
    body.companyWebsite.trim()
  ) {
    return NextResponse.json({ ok: true });
  }

  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please review the highlighted fields and try again." },
      { status: 400 },
    );
  }

  const payload: LeadPayload = {
    requestId: createRequestId(),
    createdAt: new Date().toISOString(),
    fullName: sanitizeText(parsed.data.fullName, 100),
    email: sanitizeEmail(parsed.data.email),
    phone: sanitizePhone(parsed.data.phone),
    service: parsed.data.service,
    preferredContact: parsed.data.preferredContact ?? "",
    message: parsed.data.message ? sanitizeText(parsed.data.message, 1000) : "",
    consent: true,
    consentAt: new Date().toISOString(),
    source: "website",
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          ok: false,
          message: "Unable to deliver the request right now. Please email us instead.",
        },
        { status: 503 },
      );
    }

    console.info("[lead:dev]", {
      requestId: payload.requestId,
      createdAt: payload.createdAt,
      service: payload.service,
      preferredContact: payload.preferredContact,
      hasMessage: Boolean(payload.message),
    });
  } else {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        return NextResponse.json(
          { ok: false, message: "Unable to deliver the request right now." },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { ok: false, message: "Unable to deliver the request right now." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({
    ok: true,
    requestId: payload.requestId,
  });
}
