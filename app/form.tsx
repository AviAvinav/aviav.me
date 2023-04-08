"use client";

const Form = () => {
  return (
    <form className="flex flex-col flex-1 space-y-6 md:pr-40 mb-8 md:mb-0">
      <input
        className="p-2 rounded-sm text-black placeholder:text-gray-800"
        type="text"
        placeholder="Name"
      />
      <input
        className="p-2 rounded-sm text-black placeholder:text-gray-800"
        type="email"
        placeholder="Email"
      />
      <input
        className="p-2 rounded-sm text-black placeholder:text-gray-800"
        type="text"
        placeholder="Subject"
      />
      <textarea
        className="resize-none p-2 rounded-sm text-black placeholder:text-gray-800"
        placeholder="Message"
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
