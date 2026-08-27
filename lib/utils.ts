export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

export function sanitizeText(value: string, maxLength: number) {
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export function sanitizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function sanitizePhone(value: string) {
  return value.replace(/[^\d+()\-.\s]/g, "").trim();
}

export function createRequestId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `lsf_${Date.now().toString(36)}_${random}`;
}

export function isPlaceholderPhone(phone: string) {
  return /000-0000/.test(phone);
}
