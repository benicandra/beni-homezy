import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "fill" | "outline";
  size?: "small" | "normal" | "large";
  className?: string;
}

export default function Button({
  children,
  variant = "fill",
  size = "normal",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-body font-bold rounded-[15px] inline-flex items-center justify-center cursor-pointer";

  const sizeStyles = {
    small: "py-2.5 px-6 text-sm leading-5",
    normal: "py-4 px-8 text-base leading-5",
    large: "py-[18px] px-10 text-lg leading-[22px]",
  };

  const variantStyles = {
    fill: "bg-foreground text-white hover:bg-lavender",
    outline:
      "border border-foreground bg-transparent text-foreground hover:border-lavender hover:bg-lavender-20",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
