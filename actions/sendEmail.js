"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const senderEmail = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  let data;
  if (firstName && lastName && phone != null) {
     data = { firstName, lastName, phone, message };
  } else return false;

  const emailData = `
    First Name: ${data.firstName}
    Last Name: ${data.lastName}
    Phone: ${data.phone}
    Message: ${data.message}
    `;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "fernandes.aden09@gmail.com",
    subject: "Message from Contact form",
    replyTo: senderEmail,
    text: emailData,
  });
};
