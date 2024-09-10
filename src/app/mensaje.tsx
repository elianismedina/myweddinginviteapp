import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const greatVibes = localFont({
  src: "./fonts/GreatVibes-Regular.ttf",
});

const MensajeSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-8">
        <Image
          src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1725932025/mensaje_a4nsaq.jpg"
          alt="Background mensaje de los novios"
          objectFit="cover"
          quality={100}
          width={600}
          height={800}
          className="opacity-50 relative "
        />
        <div className="absolute md:w-1/3 text-center text-lg p-4">
          <h2 className={greatVibes.className}>
            Con inmensa alegría y gratitud, queremos compartir con usted una
            noticia muy especial, después de un hermoso camino juntos, hemos
            decidido unir nuestras vidas en matrimonio y queremos compartir ese
            momento con las personas más especiales para nosotros.
            <br />
            ¡Tú eres una de ellas!.
          </h2>
          <br />
          <h3 className={greatVibes.className}>
            Acompáñanos y has de nuestro día soñado un momento aún más especial.
          </h3>
        </div>
      </div>
    </>
  );
};

export default MensajeSection;
