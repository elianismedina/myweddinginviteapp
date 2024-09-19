import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
import localFont from "next/font/local";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});

const CeremoniaSection = () => {
  return (
    <>
      <div className={raleway.className}>
        {/* Iglesia */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-primary-950 mb-4">
            Ceremonia
          </h1>
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-md md:text-lg text-center text-primary-950 font-semibold">
              Lugar:
            </h2>
            <p className="text-md md:text-lg text-center text-primary-950">
              Iglesia Catedral de <br /> Santa Catalina de Alejandría
            </p>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-md md:text-lg text-center text-primary-950 font-semibold">
              Dirección:
            </h2>
            <p className="text-md md:text-lg text-center text-primary-950">
              Calle de los Santos de Piedra,
              <br /> Cra. 4, Cartagena, Bolívar
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-12">
          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1726705171/iglesiafinal3_s0q641.png"
            alt="Iglesia"
            quality={100}
            width={400}
            height={400}
            style={{ objectFit: "contain" }}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <FaMapLocationDot className="text-4xl text-primary-950" />
          <Link
            href="https://maps.app.goo.gl/U7cmhhMcFryFT67w8"
            className="flex items-center justify-center p-2 text-md md:text-lg text-primary-900 font-semibold underline"
            target="_blank"
          >
            Toca para ir a la ubicación
          </Link>
        </div>
      </div>
    </>
  );
};

export default CeremoniaSection;
