import React from "react";
import Image from "next/image";
import Link from "next/link";

const CeremoniaSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-primary-900 mb-4">
          Ceremonia
        </h1>
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-lg text-center text-primary-900 font-semibold">
            Lugar:
          </h2>
          <p className="text-lg text-center text-primary-900">
            Iglesia Catedral de Santa Catalina de Alejandría
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-lg text-center text-primary-900 font-semibold">
            Dirección:
          </h2>
          <p className="text-lg text-center text-primary-900">
            Calle de los Santos de Piedra, Cra. 4, Cartagena, Bolívar
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <Image
          src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1726016196/croppediglesia5_t9he1p.png"
          alt="Iglesia"
          quality={100}
          width={600}
          height={800}
          objectFit="contain"
        />
      </div>

      <Link
        href="https://maps.app.goo.gl/U7cmhhMcFryFT67w8"
        className="flex items-center justify-center p-4 text-lg text-primary-900 font-semibold underline"
        target="_blank"
      >
        Toca para ir a la ubicación
      </Link>
    </>
  );
};

export default CeremoniaSection;
