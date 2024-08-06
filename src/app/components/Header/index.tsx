import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header id="home" className="relative text-black h-[70vh]">
      <Navbar />
      <div className="relative mx-auto container h-full w-full pt-20 px-10 z-10">
        <section className="flex flex-col md:items-start items-center justify-center h-full md:text-black text-white">
          <p className="font-bold text-md text-center tracking-[0.4em] md:bg-white md:bg-opacity-50 bg-gray-600 bg-opacity-30 mb-2">
            FILADELFIA LAGUNA DE LOBOS
          </p>
          <h1 className="md:text-8xl text-7xl font-spacegrotesk font-extrabold flex flex-col gap-2">
            <p className="md:bg-white md:bg-opacity-50 bg-gray-700 bg-opacity-30">
              Un lugar
            </p>
            <p className="md:bg-white md:bg-opacity-50 bg-gray-700 bg-opacity-30">
              para la
            </p>
            <p className="md:bg-white md:bg-opacity-50 bg-gray-700 bg-opacity-30">
              familia.
            </p>
          </h1>
        </section>
      </div>
      <div className="absolute left-0 inset-0 bg-gradient-to-t from-black from-[120px] opacity-25 rounded-b-[50px]"></div>
      <Image
        src="/images/herobg.jpg"
        alt="Hero image"
        className="absolute -z-10 object-cover rounded-b-[50px]"
        fill
      />
    </header>
  );
};

export default Header;
