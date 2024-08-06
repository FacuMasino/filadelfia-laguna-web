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
    <ul className="flex flex-col items-center h-screen bg-[#FAFAFE]">
      {items.map((link, index) => (
        <li key={index}>
          <NavLink onClickFn={onClickFn} href={link.path}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
