import type { Metadata } from "next";
import { Roboto, Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { cn } from "@/lib/utils";

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
  title: "Iglesia Filadelfia Laguna de Lobos",
  description: "Generated by create next app",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
