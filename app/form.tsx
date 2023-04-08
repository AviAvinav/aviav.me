"use client";

import nodemailer from "nodemailer";
import { useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      auth: {
        user: "hi@aviav.me",
        pass: process.env.mailpassword,
      },
      secure: true,
    });
    await transporter.sendMail({
      from: data.email,
      to: "hi@aviav.me",
      subject: `Message from ${data.name}`,
      text: data.message,
    });
    console.log("Message sent successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col flex-1 space-y-6 md:pr-40 mb-8 md:mb-0"
    >
      <input
        className="p-2 rounded-sm text-black placeholder:text-gray-800"
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
      />
      <input
        className="p-2 rounded-sm text-black placeholder:text-gray-800"
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <textarea
        className="resize-none p-2 rounded-sm text-black placeholder:text-gray-800"
        placeholder="Message"
        {...register("message", { required: true })}
      />
      <button
        className="bg-emerald-200 text-gray-800 py-4 rounded-sm"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
