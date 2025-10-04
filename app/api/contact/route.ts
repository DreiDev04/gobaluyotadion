import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message, token } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !subject ||
      !message ||
      !token
    ) {
      return NextResponse.json(
        { error: "All fields and captcha are required" },
        { status: 400 }
      );
    }

    const captchaRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: token,
        }),
      }
    );

    const captchaData = await captchaRes.json();
    if (!captchaData.success) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    const sendMail = await fetch("http://api.gobaluyotadion.com/api/mail/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          EmailId: email,
          EmailName: `${firstName} ${lastName}`,
          EmailSubject: subject,
          EmailBody: message,
          EmailPhone: phone
        }),
      }
    );

    if (sendMail.ok) {
      const res = await sendMail.json();
      console.info(res);
    }
    else {
      throw new Error("Failed to send data");
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
