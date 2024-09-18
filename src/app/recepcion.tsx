import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
import localFont from "next/font/local";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});

const RecepcionSection = () => {
  return (
    <>
      <div className={raleway.className}>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold text-center text-primary-950 mb-4">
            Recepción
          </h1>
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-md md:text-lg text-center text-primary-950 font-semibold">
              Lugar:
            </h2>
            <p className="text-md md:text-lg text-center text-primary-950">
              Museo Histórico de Cartagena de Indias - MUHCA - Palacio de la
              Inquisición
            </p>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-md md:text-lg text-center text-primary-950 font-semibold">
              Dirección:
            </h2>
            <p className="text-text-md md:text-lg text-center text-primary-950">
              46, Plaza de Bolivar Carrera 3 33. Cartagena, Bolívar
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-12">
          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1726622679/recepcionfinal_l3vpne.png"
            alt="Recepción"
            width={400}
            height={400}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <FaMapLocationDot className="text-4xl text-primary-950" />
          <Link
            href="https://maps.app.goo.gl/TPnQSYR65XX3zQvB8"
            className="flex items-center justify-center p-2 text-md md:text-lg text-primary-950 font-semibold underline"
            target="_blank"
          >
            Toca para ir a la ubicación
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecepcionSection;
