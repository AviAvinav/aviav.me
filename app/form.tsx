"use client";

import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type FormInputs = {
  name: string,
  email: string,
  message: string
}

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Form = () => {
  const { register, handleSubmit, setValue, formState: {errors}} = useForm<FormInputs>();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setIsButtonDisabled(true);
    emailjs
      .send(
        // get "serviceId" environment variable from .env.local
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        () => {
          setValue("name", "");
          setValue("email", "");
          setValue("message", "");
          toast("Message sent successfully!");
          setIsButtonDisabled(false);
        },
        () => {
          toast("Message failed to send.");
          setIsButtonDisabled(false);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col flex-1 space-y-4 md:pr-40 mb-8 md:mb-0"
    >
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="name" className="text-gray-300 text-left">Name</label>
        <input
          className="p-2 rounded-sm text-black placeholder:text-gray-800"
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="text-red-400 text-left text-sm">Name is required</p>}
      </div>

      <div className="flex flex-col space-y-1.5">
        <label htmlFor="email" className="text-gray-300 text-left">Email</label>
        <input
          className="p-2 rounded-sm text-black placeholder:text-gray-800"
          type="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: emailRegex })}
        />
        {errors.email && <p className="text-red-400 text-left text-sm">Enter a valid email</p>}
      </div>

      <div className="flex flex-col space-y-1.5">
        <label htmlFor="message" className="text-gray-300 text-left">Message</label>
        <textarea
          className="resize-none p-2 rounded-sm text-black placeholder:text-gray-800"
          placeholder="Message"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="text-red-400 text-left text-sm">Please enter a message</p>}
      </div>
      <button
        className="bg-emerald-200 text-gray-800 py-4 rounded-sm disabled:opacity-50"
        type="submit"
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default Form;
