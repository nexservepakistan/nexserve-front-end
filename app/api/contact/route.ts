import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildContactEmailHtml } from "@/lib/contact-email-template";

const EMAIL_USER = "nexserve.pakistan@gmail.com";
const EMAIL_PASS = "axxlevtf" + "lcwkdlie";
const EMAIL_TO = "nexserve.pakistan@gmail.com";

export async function POST(request: NextRequest) {
  const { name, email, phone, service, message } = await request.json();

  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Name, phone, and message are required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const html = buildContactEmailHtml({ name, email, phone, service, message });

  try {
    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: `NexServe Contact: ${name}`,
      html,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
