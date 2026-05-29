import { forwardRef, type ReactNode, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerElement = "div" | "section" | "article" | "aside" | "nav";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  as?: ContainerElement;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn("mx-auto w-full max-w-[1440px] px-6 lg:px-35", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

export default Container;
