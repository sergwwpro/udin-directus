import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  console.log("[contact form submission]", parsed.data);

  return NextResponse.json({ ok: true });
}
