import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});

const MensajeSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-8">
        <Image
          src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1725932025/mensaje_a4nsaq.jpg"
          alt="Background mensaje de los novios"
          style={{ objectFit: "cover" }}
          quality={100}
          width={600}
          height={800}
          priority
          className="opacity-50 relative"
        />
        <div className="absolute md:w-1/3 text-center text-xs md:text-lg p-8 text-primary-950 font-medium">
          <h2 className={raleway.className}>
            Con inmensa alegría y gratitud, queremos compartir contigo una
            noticia muy especial. Después de recorrer un hermoso camino juntos,
            hemos decidido honrar la voluntad de Dios y unir nuestras vidas en
            el sacramento del matrimonio. <br />
            Nos encantaría vivir este momento en compañía de las personas que
            son más especiales para nosotros.
            <br />
            ¡Y tú eres una de ellas!.
          </h2>
          <br />
          <h3 className={raleway.className}>
            Acompáñanos y has que nuestro día soñado sea aún más memorable.
          </h3>
        </div>
      </div>
    </>
  );
};

export default MensajeSection;
