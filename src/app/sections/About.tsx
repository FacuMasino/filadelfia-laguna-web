import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import ContactDialog from "../components/ContactDialog";

export const About = () => {
  return (
    <Dialog>
      <section id="nosotros" className="flex flex-col items-center gap-5">
        <div className="inline-flex flex-col mb-5">
          <h2 className="font-spacegrotesk font-medium px-5 mb-3 text-5xl">
            NOSOTROS
          </h2>
          <div className="border-t border-black"></div>
        </div>
        <p className="text-2xl text-center">
          Somos una iglesia, perteneciente a la Unión de las Asambleas de Dios.
          Nuestra misión es alcanzar la palabra de Dios a cada persona que lo
          necesite, ya que es la que tiene el poder de transformar las vidas.
        </p>
        <p className="text-2xl text-center">
          Nuestra iglesia nació en el 2004 en un local alquilado en Avda.
          Costanera, con esfuerzo y la ayuda de Dios pudimos adquirir un lugar
          propio donde residimos desde el 2007. Nuestras puertas están abiertas
          para todo aquel que busque un encuentro con Dios.
        </p>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-3xl px-9 py-6 mt-3 border-black border-2 font-montserrat hover:bg-neutral-100 text-base"
          >
            CONTACTAR
          </Button>
        </DialogTrigger>
        <ContactDialog />
      </section>
    </Dialog>
  );
};
