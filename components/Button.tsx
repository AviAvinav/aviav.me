import clsx from "clsx";
import type { ReactNode, FC } from "react";
import Underline from "./Underline";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disableUnderline?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disableUnderline,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full md:w-3/5 mt-4 relative bg-zinc-400 bg-opacity-20 font-medium text-gray-50 py-5 text-4xl",
        className && `${className}`
      )}
    >
      {children}
      {disableUnderline ? <></> : <Underline />}
    </button>
  );
};

export default Button;
