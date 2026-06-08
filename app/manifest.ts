import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Homezy",
    short_name: "Homezy",
    description:
      "We help people to realize their dream property. Browse, search, and filter properties with interactive maps.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaff",
    theme_color: "#b592ff",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
