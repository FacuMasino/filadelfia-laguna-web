import Image from "next/image";
import React from "react";
import BigCard from "../components/BigCard";

const Ministries = () => {
  return (
    <section id="ministerios" className="flex flex-col items-center gap-5">
      <div className="inline-flex flex-col md:mb-8 mb-3">
        <div className="text-center md:px-16 px-8 mb-3">
          <span className="uppercase">Conocé nuestros</span>
          <h1 className="font-spacegrotesk font-medium text-4xl">
            MINISTERIOS
          </h1>
        </div>
        <div className="border-t border-black"></div>
      </div>
      <p className="text-2xl text-center">
        En el Nuevo Testamento, el ministerio es visto como un servicio a Dios y
        a otras personas en Su nombre. Jesús brindó el modelo para el ministerio
        cristiano:{" "}
        <span className="italic">
          no vino a recibir el servicio, sino a darlo.
        </span>
      </p>
      <p className="text-2xl text-center mb-4">
        Esa es la tarea que Jesús nos dejo con su propio ejemplo, poder servir a
        otros. Por eso tenemos diferentes ministerios, que intentan servir a
        cada persona que lo necesite.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-6 w-full">
        <BigCard title="KID'S" imgSrc="/images/kidsbg.jpg" imgAlt="Kid's">
          <p className="text-lg">
            Dedicado a los más pequeñitos, niñas y niños que se renunen para
            aprender la palabra de Dios a través de juegos y enseñanzas
            adaptadas a su edad. Comparten valores, risas, amistad y mucha
            diversión.
          </p>
        </BigCard>
        <BigCard
          title="ADOLESCENTES"
          imgSrc="/images/teensbg.jpg"
          imgAlt="ADOLESCENTES"
        >
          <p className="text-lg">
            Dedicado a los más pequeñitos, niñas y niños que se renunen para
            aprender la palabra de Dios a través de juegos y enseñanzas
            adaptadas a su edad. Comparten valores, risas, amistad y mucha
            diversión.
          </p>
        </BigCard>
        <BigCard
          title="LABORIOSAS"
          imgSrc="/images/womenbg.jpg"
          imgAlt="MUJERES"
        >
          <p className="text-lg">
            Ministerio de mujeres que trabaja incansablemente para bendecir a
            cada una de ellas y a la iglesia en general. En sus reuniones tratan
            temas de interés, té de por medio. Realizan retiros y distintas
            actividades.
          </p>
        </BigCard>
        <BigCard
          title="VARONES ESFORZADOS"
          imgSrc="/images/menbg.jpg"
          imgAlt="HOMBRES"
        >
          <p className="text-lg">
            Enseñando la Biblia como guía de vida. Trata temas de actualidad e
            inquietud y ayuda a formar lazos de amistad a través de juegos,
            campamentos, vigilias y actividades de interés.
          </p>
        </BigCard>
        <BigCard
          title="ALABANZA Y COREOGRAFÍA"
          imgSrc="/images/worshipbg.jpg"
          imgAlt="Alabanza y Coreografía"
        >
          <p className="text-lg">
            Dos ministerios que trabajan juntos para llevar la iglesia a la
            adoración a Dios a través de la música y la danza.
          </p>
        </BigCard>
        <BigCard
          title="ENSEÑANZA"
          imgSrc="/images/studybg.jpg"
          imgAlt="Enseñanza"
        >
          <ul className="list-disc md:ps-4 ps-2 text-lg">
            <li>
              Escuela de vida para quienes inician sus pasos en el camino de la
              fe.
            </li>
            <li>
              Discipulado para quienes desean avanzar y desarrollar su vida
              cristiana
            </li>
            <li>
              IETE, educación teológica en sus 2 niveles: Ministerial y
              Superior.
            </li>
          </ul>
        </BigCard>
      </div>
    </section>
  );
};

export default Ministries;
