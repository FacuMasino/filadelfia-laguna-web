import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import React, { ReactNode } from "react";

const BigCard = ({
  title,
  children,
  imgSrc,
  imgAlt,
}: {
  title: string;
  children: ReactNode;
  imgSrc: string | StaticImport;
  imgAlt: string;
}) => {
  return (
    <div className="flex flex-col md:gap-5 gap-3 rounded-2xl relative text-white md:p-12 p-8">
      <div className="absolute left-0 inset-0 bg-black opacity-40 rounded-2xl -z-10"></div>
      <Image
        fill
        alt={imgAlt}
        src={imgSrc}
        className="object-cover rounded-2xl -z-20"
      />
      <span className="font-spacegrotesk font-bold text-4xl">{title}</span>
      {children}
    </div>
  );
};

export default BigCard;
