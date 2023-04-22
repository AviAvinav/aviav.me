import clsx from "clsx";
import type { ReactNode, FC } from "react";
import Underline from "./Underline";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disableUnderline?: boolean;
  href: string;
  ariaLabel: string;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disableUnderline,
  href,
  ariaLabel,
}) => {
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      onClick={onClick}
      className={clsx(
        "w-full md:w-3/5 mt-4 relative bg-zinc-400 bg-opacity-20 font-medium text-gray-50 py-5 text-4xl flex items-center justify-center cursor-pointer transition ease-in-out duration-100 lg:hover:scale-105",
        className && `${className}`
      )}
    >
      {children}
      {disableUnderline ? <></> : <Underline />}
    </a>
  );
};

export default Button;
