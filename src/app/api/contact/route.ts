import { NextRequest, NextResponse } from "next/server";

interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  area: string;
  service: string;
  message: string;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const submission: ContactSubmission = {
      name: String(name),
      email: String(email),
      company: String(body.company || ""),
      area: String(body.area || ""),
      service: String(body.service || ""),
      message: String(message),
      submittedAt: new Date().toISOString(),
    };

    // Log submission (visible in Vercel function logs)
    console.log("Contact form submission:", JSON.stringify(submission));

    // TODO: In production, send an email or store in a database:
    //
    // Email with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'KPBC Contact <noreply@kpbc.com>',
    //   to: ['contact@kpbc.com'],
    //   subject: `New Contact: ${submission.name}`,
    //   html: `<p><strong>Name:</strong> ${submission.name}</p>...`,
    // });
    //
    // Database with Vercel Postgres, Supabase, etc.

    return NextResponse.json(
      { message: "Thank you! Your message has been received." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
