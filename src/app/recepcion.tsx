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
            <h2 className="text-lg text-center text-primary-950 font-semibold">
              Lugar:
            </h2>
            <p className="text-lg text-center text-primary-950">
              Museo Histórico de Cartagena de Indias - MUHCA - Palacio de la
              Inquisición
            </p>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-lg text-center text-primary-950 font-semibold">
              Dirección:
            </h2>
            <p className="text-lg text-center text-primary-950">
              46, Plaza de Bolivar Carrera 3 33. Cartagena, Bolívar
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1726062066/recepcioncropped_tzlsts.png"
            alt="Recepción"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaMapLocationDot className="text-4xl text-primary-950" />
          <Link
            href="https://maps.app.goo.gl/TPnQSYR65XX3zQvB8"
            className="flex items-center justify-center p-4 text-lg text-primary-950 font-semibold underline"
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
