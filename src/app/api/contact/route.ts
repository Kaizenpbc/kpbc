import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, area, service, message } = await request.json();

    const result = await resend.emails.send({
      from: "KPBC Contact Form <noreply@kpbc.ca>",
      to: process.env.CONTACT_EMAIL || "michaela@kpbc.ca",
      replyTo: email,
      subject: `Contact from ${name}${company ? ` (${company})` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nArea: ${area || "N/A"}\nService: ${service || "N/A"}\n\nMessage:\n${message}`,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: result.data?.id });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
