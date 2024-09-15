"use client";
import { menuItems } from "@/app/data/menu";
import Logo from "@/app/assets/Logo";
import React from "react";
import FacebookSvg from "@/app/assets/FacebookSvg";
import { Link } from "react-scroll";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black rounded-t-[50px] md:mt-10 mt-7">
      <div className="container flex md:flex-row flex-col md:gap-0 gap-4 items-start justify-between md:pt-10 pt-7 md:px-10 px-7 text-white">
        <div className="flex flex-col md:w-1/2 w-full">
          <div className="flex flex-col">
            <Link to={"home"} href={`#home`} smooth={true} duration={500}>
              <Logo bgColor="#fff" />
            </Link>
          </div>
          <div className="flex justify-between gap-4 md:pt-10 pt-7">
            <div className="flex flex-col">
              <h2 className="font-medium font-montserrat">Contactanos</h2>
              <ul className="text-gray-400">
                <li>(2227) 516783</li>
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
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-8 w-8" />
            <h2 className="font-medium font-montserrat">Cómo llegar?</h2>
          </div>
          <p className="text-gray-400">Calle 33 y 4, Laguna de Lobos</p>
          <div className="flex h-full rounded-xl items-center bg-slate-100 w-full p-2 relative hover:drop-shadow hover:cursor-pointer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1936.8251429000086!2d-59.128776176547575!3d-35.27270584619468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bda7298e670f55%3A0x2a2689059932ffa0!2sIglesia%20filadelfia%2C%20anexo%20laguna%20de%20lobos!5e0!3m2!1ses-419!2sar!4v1725837639384!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-4 p-2 border-t border-gray-600 text-sm text-gray-400">
        <div className="container flex md:flex-row flex-col justify-between gap-2 ">
          <p className="md:text-start text-center">
            © Filadelfia Laguna de Lobos - {currentYear}
          </p>
          <p className="md:text-start text-center">
            Web desarrollada por
            <a href="https://facundomasino.com" target="_blank">
              {" "}
              @facumasino
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
