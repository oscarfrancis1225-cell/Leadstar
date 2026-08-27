import OpenAI from "openai";

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is not set. Use a server-only environment variable.`);
  }
  return value;
}

export function getOpenAIClient() {
  return new OpenAI({ apiKey: requiredEnv("OPENAI_API_KEY") });
}

export function getContentModel() {
  return process.env.OPENAI_CONTENT_MODEL?.trim() || "gpt-5.6-terra";
}

export function getReviewModel() {
  return process.env.OPENAI_REVIEW_MODEL?.trim() || "gpt-5.6-sol";
}

export function getImageModel() {
  return process.env.OPENAI_IMAGE_MODEL?.trim() || "gpt-image-2";
}
