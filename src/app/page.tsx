import Image from "next/image";
import { About } from "./sections/About";
import Services from "./sections/Services";
import Ministries from "./sections/Ministries";
import SocialMinistries from "./sections/SocialMinistries";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center md:gap-20 gap-12 md:px-10 px-7 md:py-20 py-12">
      <About />
      <Services />
      <Ministries />
      <SocialMinistries />
    </main>
  );
}
