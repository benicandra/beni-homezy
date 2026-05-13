import { SocialLink } from "@/lib/types";

import PhoneIcon from "@/assets/icons/phone.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";

export const defaultSocialLinks: SocialLink[] = [
  { href: "tel:+123456789", label: "Phone", icon: PhoneIcon },
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
  { href: "https://twitter.com", label: "Twitter", icon: TwitterIcon },
];