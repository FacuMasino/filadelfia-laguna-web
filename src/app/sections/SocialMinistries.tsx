import Image from "next/image";
import React from "react";
import BigCard from "../components/BigCard";
import SectionCard from "../components/SectionCard";

const SocialMinistries = () => {
  return (
    <section
      id="compromiso-social"
      className="flex flex-col items-center md:gap-10 gap-5"
    >
      <div className="inline-flex flex-col md:mb-8 mb-3">
        <div className="text-center md:px-16 px-8 mb-3">
          <span className="uppercase">Ministerios de</span>
          <h1 className="font-spacegrotesk font-medium text-4xl">
            COMPROMISO SOCIAL
          </h1>
        </div>
        <div className="border-t border-black"></div>
      </div>
      <p className="text-2xl text-center">
        La tarea que Dios nos pide va más allá de solo predicar, es brindar al
        necesitado lo que le haga falta y que este a nuestro alcance, por eso
        desarrollamos actividades para bendecir no solo a los creyentes, sino a
        la comunidad toda, sin importar su credo. Esto lo hacemos a través de
        este compromiso con nuestra sociedad.
      </p>
      <SectionCard
        title="AMOR ES DAR"
        imgAlt="Amor es dar"
        imgSrc="/images/donationbg.jpg"
        className="bg-[#E8CF6F]"
        imagePlacement="left"
      >
        <p className="text-left  text-xl">
          Un ministerio social que se dedica a bendecir a cada familia
          necesitada. Recibe donativos, ropa, juguetes, útiles y demás enseres.
          Los acondiciona y luego los ofrece de manera totalmente gratuita.
        </p>
      </SectionCard>
      <SectionCard
        title="LA BOLSA"
        imgAlt="La Bolsa"
        imgSrc="/images/lagunabg.jpg"
        className="bg-[#ABBFC0]"
        imagePlacement="right"
      >
        <p className="text-left text-xl">
          La bolsa se dedica a publicitar los servicios que la Laguna de Lobos
          brinda a los turistas. Es un servicio abierto a toda la comunidad y
          totalmente gratuito.
        </p>
      </SectionCard>
      <SectionCard
        title="DECORACIÓN Y PROTOCOLO"
        imgAlt="Decoración y Protocolo"
        imgSrc="/images/wallbg.jpg"
        className="bg-[#E8CF6F]"
        imagePlacement="left"
      >
        <p className="text-left text-xl">
          Un ministerio artístico de nuestra iglesia que tiene la tarea de
          embellecer cada evento que se realiza a través de la decoración, dando
          un toque especial a cada actividad.
        </p>
      </SectionCard>
    </section>
  );
};

export default SocialMinistries;
