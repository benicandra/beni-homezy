import { ButtonHTMLAttributes, ReactNode } from "react";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  iconClassName?: string;
}

export default function ButtonText({
  children,
  className = "",
  iconClassName = "w-6 h-6",
  ...props
}: ButtonTextProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 font-body font-bold text-lg leading-7 text-foreground hover:text-lavender transition-colors ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowRightIcon className={`text-current ${iconClassName}`} />
    </button>
  );
}
