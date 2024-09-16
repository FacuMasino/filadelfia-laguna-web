import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iglesia Filadelfia - Laguna de Lobos",
    short_name: "Filadelfia Laguna",
    description: "Iglesia Filadelfia de la Laguna de Lobos",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-256.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
