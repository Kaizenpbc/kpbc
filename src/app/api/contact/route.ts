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
  console.log("[CONTACT API] POST handler invoked");

  try {
    const body = await request.json();
    console.log("[CONTACT API] Request body parsed:", JSON.stringify(body));

    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      console.log("[CONTACT API] Validation failed - missing fields:", {
        hasName: !!name,
        hasEmail: !!email,
        hasMessage: !!message,
      });
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("[CONTACT API] Email validation failed for:", email);
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

    console.log("[CONTACT API] Submission object built:", JSON.stringify(submission));

    const apiKeyExists = !!process.env.RESEND_API_KEY;
    const apiKeyPrefix = process.env.RESEND_API_KEY?.substring(0, 6) || "NOT_SET";
    console.log("[CONTACT API] RESEND_API_KEY exists:", apiKeyExists, "| prefix:", apiKeyPrefix);

    if (!process.env.RESEND_API_KEY) {
      console.error("[CONTACT API] RESEND_API_KEY is not set - returning 500");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log("[CONTACT API] Resend client created, sending email...");

    const { data, error } = await resend.emails.send({
      from: "Kaizen Project & Business Consultants Inc. Contact Form <noreply@kpbc.com>",
      to: "kpbcma@gmail.com",
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
      console.error("[CONTACT API] Resend returned error:", JSON.stringify(error));
      return NextResponse.json(
        { error: "Failed to send email. Please try again later.", debug: error },
        { status: 500 }
      );
    }

    console.log("[CONTACT API] Email sent successfully! Response:", JSON.stringify(data));

    return NextResponse.json(
      { message: "Thank you! Your message has been received.", id: data?.id },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const errStack = error instanceof Error ? error.stack : undefined;
    console.error("[CONTACT API] Uncaught exception:", errMsg);
    console.error("[CONTACT API] Stack trace:", errStack);
    return NextResponse.json(
      { error: "Internal server error. Please try again later.", debug: errMsg },
      { status: 500 }
    );
  }
}
