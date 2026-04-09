import type { ButtonHTMLAttributes } from "react";
import type React from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className: string;
  children?: React.ReactNode;
  handleClick?: () => void;
};

export function Button({ text, className, children, handleClick }: Props) {
  return (
    <button className={className} onClick={handleClick}>
      {children}
      {text}
    </button>
  );
}
