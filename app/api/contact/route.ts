import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, phone, email, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: "Форма сайту <onboarding@resend.dev>",
    to: "sergioglushko221@gmail.com",
    subject: `Нова заявка від ${name}`,
    html: `
      <p><strong>Імʼя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${message ? `<p><strong>Повідомлення:</strong> ${message}</p>` : ""}
    `,
  });

  if (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
