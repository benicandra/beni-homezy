import ButtonText from "@/components/ui/ButtonText";
import AgentCard from "@/components/shared/AgentCard/AgentCard";

import Agent1 from "@/assets/agents/agents-1.webp";
import Agent2 from "@/assets/agents/agents-2.webp";
import Agent3 from "@/assets/agents/agents-3.webp";
import Agent4 from "@/assets/agents/agents-4.webp";
import Agent5 from "@/assets/agents/agents-5.webp";
import Agent6 from "@/assets/agents/agents-6.webp";

import PhoneIcon from "@/assets/icons/phone.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";

const agentsData = [
  {
    name: "Edwin Martins",
    role: "Property Advisor",
    image: Agent6,
    socialLinks: [
      { href: "tel:+123456789", label: "Phone", icon: PhoneIcon },
      { href: "#", label: "Twitter", icon: TwitterIcon },
      { href: "#", label: "Facebook", icon: FacebookIcon },
      { href: "#", label: "Instagram", icon: InstagramIcon },
    ],
  },
  {
    name: "Robert Fox",
    role: "Property Advisor",
    image: Agent5,
    socialLinks: [
      { href: "tel:+123456789", label: "Phone", icon: PhoneIcon },
      { href: "#", label: "Twitter", icon: TwitterIcon },
      { href: "#", label: "Facebook", icon: FacebookIcon },
      { href: "#", label: "Instagram", icon: InstagramIcon },
    ],
  },
  {
    name: "Jane Cooper",
    role: "Property Advisor",
    image: Agent4,
    socialLinks: [
      { href: "tel:+123456789", label: "Phone", icon: PhoneIcon },
      { href: "#", label: "Twitter", icon: TwitterIcon },
      { href: "#", label: "Facebook", icon: FacebookIcon },
      { href: "#", label: "Instagram", icon: InstagramIcon },
    ],
  },
  {
    name: "Guy Hawkins",
    role: "Property Advisor",
    image: Agent3,
    socialLinks: [
      { href: "tel:+123456789", label: "Phone", icon: PhoneIcon },
      { href: "#", label: "Twitter", icon: TwitterIcon },
      { href: "#", label: "Facebook", icon: FacebookIcon },
      { href: "#", label: "Instagram", icon: InstagramIcon },
    ],
  },
  {
    name: "Kathryn Murphy",
    role: "Property Advisor",
    image: Agent2,
    socialLinks: [
      { href: "tel:+123456789", label: "Phone", icon: PhoneIcon },
      { href: "#", label: "Twitter", icon: TwitterIcon },
      { href: "#", label: "Facebook", icon: FacebookIcon },
      { href: "#", label: "Instagram", icon: InstagramIcon },
    ],
  },
  {
    name: "Albert Flores",
    role: "Property Advisor",
    image: Agent1,
    socialLinks: [
      { href: "tel:+123456789", label: "Phone", icon: PhoneIcon },
      { href: "#", label: "Twitter", icon: TwitterIcon },
      { href: "#", label: "Facebook", icon: FacebookIcon },
      { href: "#", label: "Instagram", icon: InstagramIcon },
    ],
  },
];

export default function Agents() {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-5xl md:text-[44px] leading-tight font-semibold tracking-tight text-foreground">
            Meet Our Agents
          </h2>
        </div>
        <div>
          <ButtonText>Browse All Agents</ButtonText>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {agentsData.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}
      </div>
    </section>
  );
}
