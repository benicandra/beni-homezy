import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import type { StaticImageData } from "next/image";

import SocialIconLink from "@/components/shared/SocialIconLink/SocialIconLink";

interface AgentSocialLink {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

interface AgentMiniCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  imageAlt?: string;
  socialLinks: AgentSocialLink[];
  className?: string;
  socialLinkClassName?: string;
  socialIconClassName?: string;
}

export default function AgentMiniCard({
  name,
  role,
  image,
  imageAlt,
  socialLinks,
  className = "",
  socialLinkClassName = "w-[16.5px] h-[16.5px] bg-[#686A79]",
  socialIconClassName = "size-5 text-white",
}: AgentMiniCardProps) {
  return (
    <div
      className={`flex flex-row justify-between gap-2 border-2 rounded-4xl p-[16.5px] bg-white z-10 ${className}`}
    >
      <div className="flex flex-col gap-2.75">
        <div className="gap-[1.38px]">
          <p className="text-base font-bold">{name}</p>
          <p className="text-xs font-normal">{role}</p>
        </div>
        <div className="flex gap-[8.25px]">
          {socialLinks.map((link) => (
            <SocialIconLink
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
              className={socialLinkClassName}
              iconClassName={socialIconClassName}
            />
          ))}
        </div>
      </div>
      <Image
        src={image}
        alt={imageAlt ?? name}
        width={74.25}
        height={74.25}
        className="bg-lavender-40 rounded-[10.31px]"
      />
    </div>
  );
}
