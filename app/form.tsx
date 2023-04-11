"use client";

import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // get "serviceId" environment variable from .env.local
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current || "",
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        () => {
          toast("Message sent successfully!");
        },
        () => {
          toast("Message failed to send.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={onSubmit}
      className="flex flex-col flex-1 space-y-6 md:pr-40 mb-8 md:mb-0"
    >
      <input
        className="p-2 rounded-sm text-black placeholder:text-gray-800"
        type="text"
        placeholder="Name"
        name="name"
        required
      />
      <input
        className="p-2 rounded-sm text-black placeholder:text-gray-800"
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <textarea
        className="resize-none p-2 rounded-sm text-black placeholder:text-gray-800"
        placeholder="Message"
        name="message"
        required
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
