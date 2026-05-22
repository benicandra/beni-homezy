import type {
  ComponentType,
  AnchorHTMLAttributes,
  SVGProps,
} from "react";
import { cn } from "@/lib/utils";

interface SocialIconLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  iconClassName?: string;
}

export default function SocialIconLink({
  icon: Icon,
  label,
  className,
  iconClassName = "size-5 text-white",
  href = "#",
  ...props
}: SocialIconLinkProps) {
  const isExternalLink = href.startsWith("http");

  return (
    <a
      {...props}
      href={href}
      aria-label={label}
      target={isExternalLink ? "_blank" : props.target}
      rel={isExternalLink ? "noopener noreferrer" : props.rel}
      className={cn(
        "flex items-center justify-center rounded-full hover:opacity-80 transition-opacity",
        className
      )}
    >
      <Icon className={iconClassName} />
    </a>
  );
}
