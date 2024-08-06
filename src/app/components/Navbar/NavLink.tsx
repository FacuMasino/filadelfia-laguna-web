import React from "react";
import { Link } from "react-scroll";

export const NavLink = ({
  href,
  children,
  onClickFn,
}: {
  href: string;
  children: React.ReactNode;
  onClickFn?: () => void;
}) => {
  return (
    <Link
      to={href}
      href={`#${href}`}
      className="block cursor-pointer pr-10 text-black font-medium font-montserrat"
      smooth={true}
      duration={500}
      offset={-110}
      onClick={onClickFn}
    >
      {children}
    </Link>
  );
};
