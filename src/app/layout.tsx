import type { Metadata } from "next";
import { Roboto, Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { cn } from "@/lib/utils";
import Navbar from "./components/Navbar";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["700", "500"],
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

export const metadata: Metadata = {
  title: "Iglesia Filadelfia - Laguna de Lobos",
  description:
    "Somos una iglesia, perteneciente a la Unión de las Asambleas de Dios. Nuestra misión es alcanzar la palabra de Dios a cada persona que lo necesite, ya que es la que tiene el poder de transformar las vidas.",
  keywords:
    "Iglesia Filadelfia Laguna, Filadelfia Laguna de Lobos, Laguna de Lobos, iglesia cristiana Lobos",
  openGraph: {
    title: "Sitio Web Iglesia Filadelfia - Laguna de Lobos",
    images:
      "https://ik.imagekit.io/facumasino/filadelfialaguna.com.ar/og_filadelfialaguna.png?updatedAt=1726441691630",
    siteName: "Iglesia Filadelfia - Laguna de Lobos",
    description:
      "Somos una iglesia, perteneciente a la Unión de las Asambleas de Dios. Nuestra misión es alcanzar la palabra de Dios a cada persona que lo necesite, ya que es la que tiene el poder de transformar las vidas.",
    type: "website",
    url: "https://filadelfialaguna.com.ar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "max-w-full font-roboto",
          roboto.variable,
          spaceGrotesk.variable,
          montserrat.variable
        )}
      >
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
