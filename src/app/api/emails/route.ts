import { NextResponse } from "next/server";
import Welcome from "../../../emails/Welcome";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, firstName } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "You are invited!",
      react: Welcome({ firstName }),
    });
    console.log(data);
    return NextResponse.json(
      {
        message: "Email sent!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Email not sent!",
      },
      {
        status: 500,
      }
    );
  }
}
