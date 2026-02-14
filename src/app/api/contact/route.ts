import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface ContactSubmission {
  name: string;
  email: string;
  company: string;
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
      service: String(body.service || ""),
      message: String(message),
      submittedAt: new Date().toISOString(),
    };

    // Store submission to a JSON file (replace with a real database in production)
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "submissions.json");

    await fs.mkdir(dataDir, { recursive: true });

    let submissions: ContactSubmission[] = [];
    try {
      const existing = await fs.readFile(filePath, "utf-8");
      submissions = JSON.parse(existing);
    } catch {
      // File doesn't exist yet, start with empty array
    }

    submissions.push(submission);
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));

    // In production, you would also send an email here using a service like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    //
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'KPBC Contact <noreply@kpbc.com>',
    //   to: ['contact@kpbc.com'],
    //   subject: `New Contact: ${submission.name}`,
    //   html: `<p><strong>Name:</strong> ${submission.name}</p>...`,
    // });

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
