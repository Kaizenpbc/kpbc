import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

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

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Kaizen Project & Business Consultants Inc. Contact Form <sales@kpbc.ca>",
      to: process.env.CONTACT_EMAIL || "kpbcma@gmail.com",
      replyTo: submission.email,
      subject: `New Contact Form: ${submission.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Company:</strong> ${submission.company || "N/A"}</p>
        <p><strong>Area of Interest:</strong> ${submission.area || "N/A"}</p>
        <p><strong>Service:</strong> ${submission.service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message}</p>
        <hr />
        <p><em>Submitted at ${submission.submittedAt}</em></p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Thank you! Your message has been received.", id: data?.id },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
