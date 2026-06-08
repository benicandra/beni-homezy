interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: string;
  href: string;
  alt: string;
}

export const headerNavItems: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" }, 
  { label: "Agents", href: "/agents" }, 
  { label: "Pages", href: "/pages" }, 
];

export const pagesLinks: NavLink[] = [
  { label: "Home V1", href: "/" },
  { label: "Home V2", href: "/home-v2" }, 
  { label: "Search Properties V1", href: "/properties/v1" }, 
  { label: "Search Properties V2", href: "/properties/v2" }, 
  { label: "Property Details V1", href: "/property/v1" }, 
  { label: "Property Details V2", href: "/property/v2" }, 
  { label: "Agent List V1", href: "/agents/v1" }, 
  { label: "Agent List V2", href: "/agents/v2" }, 
  { label: "Agent Details V1", href: "/agent/v1" }, 
  { label: "Agent Details V2", href: "/agent/v2" }, 
  { label: "About Us V1", href: "/about/v1" }, 
  { label: "About Us V2", href: "/about/v2" }, 
  { label: "Contact Us V1", href: "/contact/v1" }, 
  { label: "Contact Us V2", href: "/contact/v2" }, 
  { label: "FAQ", href: "/faq" }, 
];

export const utilityLinks: NavLink[] = [
  { label: "Sign In", href: "/sign-in" }, 
  { label: "Sign Up", href: "/sign-up" }, 
  { label: "Forgot Password", href: "/forgot-password" }, 
  { label: "Reset Password", href: "/reset-password" }, 
  { label: "404 Error Page", href: "/page-not-found" }, 
  { label: "Style Guides", href: "/style-guides" }, 
  { label: "Licenses", href: "/licenses" }, 
  { label: "Change Log", href: "/change-log" }, 
];

export const socialLinks: SocialLink[] = [
  { icon: "/icons/phone.svg", href: "tel:+123456789", alt: "Phone" },
  { icon: "/icons/instagram.svg", href: "https://instagram.com", alt: "Instagram" },
  { icon: "/icons/facebook.svg", href: "https://facebook.com", alt: "Facebook" },
  { icon: "/icons/twitter.svg", href: "https://twitter.com", alt: "Twitter" },
];
