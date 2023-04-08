"use client";

import { IconType } from "react-icons/lib";
import {
  SiDiscord,
  SiDribbble,
  SiGithub,
  SiLinkedin,
  SiMaildotru,
} from "react-icons/si";
import Form from "./form";

const Footer = () => {
  const icons = [
    { id: 1, name: SiGithub },
    { id: 2, name: SiLinkedin },
    { id: 3, name: SiMaildotru },
    { id: 4, name: SiDribbble },
    { id: 5, name: SiDiscord },
  ];
  return (
    <footer
      id="footer"
      className="text-center flex flex-col md:flex-row justify-between bg-zinc-400 bg-opacity-20 px-10 sm:px-20 md:px-44 py-20"
    >
      <Form />
      <div className="flex flex-col justify-center space-y-8">
        <div className="flex flex-row justify-center space-x-8 items-center">
          {icons.map((icon) => (
            <Icon key={icon.id} SiIcon={icon.name} />
          ))}
        </div>
        <p>Copyright ©️ 2023 | Made with 💖 by Avi Avinav</p>
      </div>
    </footer>
  );
};

const Icon = ({ SiIcon }: { SiIcon: IconType }) => {
  return <SiIcon className="text-zinc-400 h-6 w-6 md:h-8 md:w-8" />;
};

export default Footer;
