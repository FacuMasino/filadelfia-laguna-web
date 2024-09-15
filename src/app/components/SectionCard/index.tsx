import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

const SectionCard = ({
  title,
  children,
  imgSrc,
  imgAlt,
  className,
  imagePlacement = "right",
}: {
  title: string;
  children: ReactNode;
  imgSrc: string | StaticImport;
  imgAlt: string;
  className: ClassNameValue;
  imagePlacement: "right" | "left";
}) => {
  const isImageRight = imagePlacement === "right";

  return (
    <section
      className={cn(
        "grid md:grid-cols-12 grid-cols-1 md:grid-rows-1 grid-rows-[max-content_1fr] relative h-full w-full border rounded-2xl text-black -z-10",
        className
      )}
    >
      <div
        className={cn(
          "md:col-span-7 md:row-start-1 row-start-2 md:py-10 py-5 flex flex-col items-center z-10",
          isImageRight ? "md:col-start-1" : "md:col-start-6"
        )}
      >
        <div className="md:block hidden text-center md:px-16 px-8 mb-5">
          <h1 className="md:text-black text-white font-spacegrotesk font-medium text-4xl">
            {title}
          </h1>
        </div>
        <div className="flex flex-col justify-between items-center gap-8 md:px-12 px-8">
          {children}
        </div>
      </div>
      <div
        className={cn(
          "md:col-span-5 flex flex-col justify-center relative text-center md:px-16 px-8 md:h-full h-[8rem] w-full",
          isImageRight ? "md:col-start-8" : "md:col-start-1"
        )}
      >
        <h1 className="md:text-black text-white font-spacegrotesk font-medium text-4xl md:hidden py-4 z-10">
          {title}
        </h1>
        <div className="md:hidden absolute left-0 inset-0 bg-black opacity-30 rounded-b-none rounded-2xl z-0"></div>
        <Image
          fill
          alt={imgAlt}
          src={imgSrc}
          className={cn(
            "object-cover rounded-2xl -z-10",
            isImageRight
              ? "md:rounded-s-none md:rounded-e-2xl"
              : "md:rounded-e-none md:rounded-s-2xl",
            "rounded-b-none"
          )}
        />
      </div>
    </section>
  );
};

export default SectionCard;
