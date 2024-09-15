"use client";
import { menuItems } from "@/app/data/menu";
import Logo from "@/app/assets/Logo";
import React from "react";
import FacebookSvg from "@/app/assets/FacebookSvg";
import { Link } from "react-scroll";
import { NavLink } from "../Navbar/NavLink";

const Footer = () => {
  return (
    <footer className="container flex items-start justify-between bg-black rounded-t-[50px] md:mt-10 mt-7 md:pt-10 pt-7 md:px-10 px-7 text-white">
      <div className="flex flex-col w-1/2">
        <div className="flex flex-col">
          <Logo bgColor="#fff" />
        </div>
        <div className="flex justify-between md:pt-10 pt-7">
          <div className="flex flex-col">
            <h2 className="font-medium font-montserrat">Contactanos</h2>
            <ul className="text-gray-400">
              <li>(2227) 111222333</li>
              <li>
                <a href="mailto:info@filadelfialaguna.com.ar">
                  info@filadelfialaguna.com.ar
                </a>
              </li>
              <li>
                <a href="https://m.me/133917909411" target="_blank">
                  Mensaje directo via Facebook
                </a>
              </li>
              <li>
                <a href="https://fb.com/filadelfialaguna" target="_blank">
                  <FacebookSvg bgColor="#fff" width={25} height={25} />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium font-montserrat">Menu</h2>
            <ul className="text-gray-400">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    href={`#${item.path}`}
                    smooth={true}
                    duration={500}
                    offset={-110}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium font-montserrat">Cómo llegar?</h2>
      </div>
    </footer>
  );
};

export default Footer;
