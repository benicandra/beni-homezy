import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "fill" | "outline" | "toggle";
  size?: "small" | "normal" | "large";
  active?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "fill",
  size = "normal",
  active = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-body font-bold rounded-[15px] inline-flex items-center justify-center cursor-pointer transition-all";

  const sizeStyles = {
    small: "py-2.5 px-6 text-sm leading-5",
    normal: "py-4 px-8 text-base leading-5",
    large: "py-[18px] px-10 text-lg leading-[22px]",
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "fill":
        return "bg-foreground text-white hover:bg-lavender";
      case "outline":
        return "border border-foreground bg-transparent text-foreground hover:border-lavender hover:bg-lavender-20";
      case "toggle":
        return active
          ? "bg-foreground text-white shadow-md"
          : "bg-transparent text-foreground hover:bg-lavender-40";
      default:
        return "";
    }
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${getVariantStyles()} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
