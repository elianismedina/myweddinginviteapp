"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../lib/utils";
import ContactFormEmail from "../emails/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderPhone = formData.get("senderPhone");
  const senderName = formData.get("senderName");

  // simple server-side validation
  if (!validateString(senderPhone, 10)) {
    return {
      error: "Invalid sender phone",
    };
  }
  if (!validateString(senderName, 50)) {
    return {
      error: "Invalid name",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "elianismedina05@outlook.com",
      subject: "Un invitado te ha confirmado su asistencia",

      react: React.createElement(ContactFormEmail, {
        senderName: senderName,
        senderPhone: senderPhone,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
