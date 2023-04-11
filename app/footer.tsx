"use client";

import { GitHub, Linkedin, Mail, Twitter } from "react-feather";
import Form from "./form";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-center flex flex-col md:flex-row justify-between bg-zinc-400 bg-opacity-20 px-10 sm:px-20 md:px-44 py-12"
    >
      <Form />
      <div className="flex flex-col justify-center flex-1 space-y-8">
        <div className="flex flex-row justify-center space-x-8 items-center">
          <a href="https://github.com/AviAvinav">
            <GitHub />
          </a>
          <a href="https://linkedin.com/in/avi-avinav">
            <Linkedin />
          </a>
          <a href="https://twitter.com/@aviavinav0">
            <Twitter />
          </a>
          <a href="mailto:hi@aviav.me">
            <Mail />
          </a>
        </div>
        <p>
          Copyright © 2023 | Made with 💖 by{" "}
          <a
            className="underline decoration-dotted text-gray-300"
            href="https://github.com/aviavinav"
          >
            Avi Avinav
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
