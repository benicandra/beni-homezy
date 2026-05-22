import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconClassName?: string;
}

export const ButtonText = forwardRef<HTMLButtonElement, ButtonTextProps>(
  ({ children, className, iconClassName = "w-6 h-6", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex items-center gap-2 font-body font-bold text-lg leading-7 text-foreground hover:text-lavender transition-colors cursor-pointer",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <ArrowRightIcon className={cn("text-current", iconClassName)} />
      </button>
    );
  }
);

ButtonText.displayName = "ButtonText";

export default ButtonText;
