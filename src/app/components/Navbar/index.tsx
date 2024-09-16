"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { menuItems } from "@/app/data/menu";
import { NavLink } from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MobileMenu } from "../MobileMenu";
import FacebookSvg from "@/app/assets/FacebookSvg";
import Logo from "@/app/assets/Logo";
import clsx from "clsx";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);

    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const handleNavbarClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav
      className={`transition-colors ease-in-out duration-200 sticky w-full top-0 z-30 ${clsx(
        (isNavbarOpen || navBg) && "bg-[#FAFAFE] drop-shadow"
      )}`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 md:px-10 px-7">
        <Link
          to={"home"}
          href="#home"
          smooth={true}
          duration={500}
          offset={-110}
          className="cursor-pointer text-2xl font-semibold md:text-3xl"
        >
          <Logo />
        </Link>
        <div className="block md:hidden">
          {!isNavbarOpen ? (
            <button aria-label="menu" onClick={handleNavbarClick}>
              <Bars3Icon className="h-8 w-8" />
            </button>
          ) : (
            <button onClick={handleNavbarClick}>
              <XMarkIcon className="h-8 w-8" />
            </button>
          )}
        </div>
        <div className="hidden md:flex px-10">
          <ul className="flex items-center">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink href={item.path}>{item.name}</NavLink>
              </li>
            ))}
            <li>
              <a href="https://fb.com/filadelfialaguna" target="_blank">
                <FacebookSvg />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isNavbarOpen ? (
        <MobileMenu items={menuItems} onClickFn={handleNavbarClick} />
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
