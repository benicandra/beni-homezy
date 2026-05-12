import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside" | "nav";
}
export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`mx-auto w-full px-6 lg:px-35 ${className}`}>
      {children}
    </Component>
  );
}
