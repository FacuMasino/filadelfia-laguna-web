"use client";
import React from "react";
import { NavLink } from "../Navbar/NavLink";

type menuItem = {
  name: string;
  path: string;
};

export const MobileMenu = ({
  items,
  onClickFn,
}: {
  items: menuItem[];
  onClickFn: () => void;
}) => {
  return (
    <ul className="flex flex-col mt-4 items-center h-screen text-xl bg-[#FAFAFE]">
      {items.map((link, index) => (
        <li key={index} className="py-4 uppercase">
          <NavLink onClickFn={onClickFn} href={link.path}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
