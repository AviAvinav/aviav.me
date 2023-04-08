import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    auth: {
      user: "hi@aviav.me",
      pass: process.env.mailpassword,
    },
    secure: true,
  });

  const { name, email, message } = await req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: "hi@aviav.me",
      subject: `Message from ${name}`,
      text: message,
    });
    console.log("Message sent successfully!");
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};
