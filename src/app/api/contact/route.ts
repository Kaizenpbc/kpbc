import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

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

    console.log("Contact form submission:", JSON.stringify(submission));

    if (!process.env.SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: "michaela@kpbc.ca",
      from: process.env.SENDGRID_FROM_EMAIL || "noreply@kpbc.ca",
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

    return NextResponse.json(
      { message: "Thank you! Your message has been received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
