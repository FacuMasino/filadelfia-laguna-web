"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LocationMapDialog from "../components/LocationMapDialog";

const Services = () => {
  return (
    <Dialog>
      <section
        id="reuniones"
        className="grid grid-cols-12 relative h-full w-full rounded-2xl border-black md:bg-[#ABBFC0] bg-none md:text-black text-white"
      >
        <div className="md:col-span-7 col-span-12 py-10 flex flex-col items-center">
          <div className="inline-flex flex-col mb-8">
            <div className="text-center md:px-16 px-8 mb-3">
              <span className="uppercase">Asistir a nuestras</span>
              <h1 className="font-spacegrotesk font-medium text-4xl">
                REUNIONES
              </h1>
            </div>
            <div className="border-t md:border-black border-white"></div>
          </div>
          <div className="flex flex-col justify-between items-center gap-8">
            <div className="flex flex-col items-center">
              <p className="font-medium text-2xl">Martes - 20:00hs</p>
              <p className="text-2xl">Predicación y Ministración</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-medium text-2xl">Viernes - 20:00hs</p>
              <p className="text-2xl">Oración</p>
            </div>
            <DialogTrigger asChild>
              <Button className="rounded-3xl px-9 py-6 font-montserrat md:bg-black bg-white md:text-white text-black md:hover:bg-slate-900/90 hover:bg-slate-100">
                Cómo llegar
              </Button>
            </DialogTrigger>
            <LocationMapDialog />
          </div>
        </div>
        <div className="md:col-span-5 md:relative absolute block h-full w-full md:z-0 -z-10">
          <Image
            fill
            alt="Adoración"
            src="/images/servicesbg.jpg"
            className="object-cover md:rounded-s-none md:rounded-e-2xl rounded-2xl"
          />
        </div>
      </section>
    </Dialog>
  );
};

export default Services;
