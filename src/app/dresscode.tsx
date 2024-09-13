import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});

const DresscodeSection = () => {
  return (
    <div className={raleway.className}>
      <div className="mb-8 mt-8 p-4">
        <h1 className="text-4xl font-bold text-center text-primary-900 mb-4">
          Código de vestimenta
        </h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <h2 className="font-semibold text-primary-900 text-2xl mb-4 text-center">
              Mujeres
            </h2>
            <p className="text-primary-900 text-center">
              Vestido largo de un solo color, tacones comodos.
              <br /> Se reserva el uso de estampados y los colores blanco y
              magenta.
            </p>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1726263127/mujerescropped_gxztzz.png"
              alt="Mujeres"
              width={500}
              height={500}
              className="mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DresscodeSection;
