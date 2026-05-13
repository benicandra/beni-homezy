import type { Agent } from "@/lib/types";
import { defaultSocialLinks } from "@/lib/data/social";

import Agent1 from "@/assets/agents/agents-1.webp";
import Agent2 from "@/assets/agents/agents-2.webp";
import Agent3 from "@/assets/agents/agents-3.webp";
import Agent4 from "@/assets/agents/agents-4.webp";
import Agent5 from "@/assets/agents/agents-5.webp";
import Agent6 from "@/assets/agents/agents-6.webp";

export const agents: Agent[] = [
  {
    id: "agent-edwin-martins",
    name: "Edwin Martins",
    role: "Property Advisor",
    image: Agent6,
    socialLinks: defaultSocialLinks,
  },
  {
    id: "agent-robert-fox",
    name: "Robert Fox",
    role: "Property Advisor",
    image: Agent5,
    socialLinks: defaultSocialLinks,
  },
  {
    id: "agent-jane-cooper",
    name: "Jane Cooper",
    role: "Property Advisor",
    image: Agent4,
    socialLinks: defaultSocialLinks,
  },
  {
    id: "agent-guy-hawkins",
    name: "Guy Hawkins",
    role: "Property Advisor",
    image: Agent3,
    socialLinks: defaultSocialLinks,
  },
  {
    id: "agent-kathryn-murphy",
    name: "Kathryn Murphy",
    role: "Property Advisor",
    image: Agent2,
    socialLinks: defaultSocialLinks,
  },
  {
    id: "agent-albert-flores",
    name: "Albert Flores",
    role: "Property Advisor",
    image: Agent1,
    socialLinks: defaultSocialLinks,
  },
];