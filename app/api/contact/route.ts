import { NextResponse } from "next/server";

const requiredFields = [
  "firstName",
  "lastName",
  "email",
  "company",
  "role",
  "country",
  "interest",
];

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const missing = requiredFields.filter((field) => !data[field] || data[field].toString().trim() === "");
  if (missing.length) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
  }

  // In production, forward to CRM/email/queue here.
  // Placeholder response to confirm receipt.
  return NextResponse.json({ ok: true });
}
