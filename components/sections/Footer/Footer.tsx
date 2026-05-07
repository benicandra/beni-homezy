import Link from "next/link";
import Image from "next/image";

import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import PhoneIcon from "@/assets/icons/phone.svg";

import { pagesLinks, utilityLinks } from "@/config/navigation";
import { Container } from "@/components/ui";
import SocialIconLink from "@/components/shared/SocialIconLink/SocialIconLink";

const footerSocialLinks = [
  { href: "tel:+123456789", label: "Phone", icon: PhoneIcon },
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
  { href: "https://twitter.com", label: "Twitter", icon: TwitterIcon },
];

export default function Footer() {
  return (
    <footer className="bg-background h-141 flex flex-col justify-between">
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-2 justify-between gap-12">
          <div>
            <div className="space-y-6 w-89.5">
              <div>
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt="Homezy Logo"
                    width={190}
                    height={50}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
              <div>
                <p className="font-body font-light text-base leading-6.5 text-foreground">
                  We are creative people who provide the best way to you who
                  want to have a new confortable and suitable place to live
                </p>
              </div>
              <div className="flex gap-6">
                {footerSocialLinks.map((link) => (
                  <SocialIconLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                    className="w-8 h-8 bg-dark"
                    iconClassName="size-10 [&>path:first-child]:fill-foreground [&>path:last-child]:fill-white"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="font-body font-light text-base leading-6.5 text-foreground mb-6">
                Pages
              </p>
              <ul className="columns-2 gap-x-8 space-y-3">
                {pagesLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body font-medium text-base leading-5 text-foreground/80 hover:text-lavender transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-body font-light text-base leading-6.5 text-foreground mb-6">
                Utility Pages
              </p>
              <ul className="space-y-3">
                {utilityLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body font-medium text-base leading-5 text-foreground/80 hover:text-lavender transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container className="pt-8 pb-8">
        <div className="border-t border-foreground/10 pt-8">
          <p className="font-body font-normal text-base leading-[1.6] text-center text-[#868893]">
            ©2023 Homezy. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
