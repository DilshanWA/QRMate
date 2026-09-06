export function detectQRType(data: string): "url" | "email" | "phone" | "sms" | "wifi" | "contact" | "location" | "text" | "unknown" {
  const value = data.trim();

  if (!value) {
    return "unknown";
  }

  const lower = value.toLowerCase();

  // URL
  if (
    lower.startsWith("http://") ||
    lower.startsWith("https://")
  ) {
    return "url";
  }

  // Email
  if (lower.startsWith("mailto:")) {
    return "email";
  }

  // Phone
  if (lower.startsWith("tel:")) {
    return "phone";
  }

  // SMS
  if (
    lower.startsWith("sms:") ||
    lower.startsWith("smsto:")
  ) {
    return "sms";
  }

  // Wi-Fi
  if (lower.startsWith("wifi:")) {
    return "wifi";
  }

  // Contact
  if (lower.startsWith("begin:vcard")) {
    return "contact";
  }

  // Location
  if (lower.startsWith("geo:")) {
    return "location";
  }

  // Plain text
  if (isPlainText(value)) {
    return "text";
  }

  return "unknown";
}

function isPlainText(value: string): boolean {
  return !(
    value.includes("://") ||
    /^[a-z][a-z0-9+.-]*:/i.test(value)
  );
}