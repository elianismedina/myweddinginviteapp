import localFont from "next/font/local";
import React from "react";
import Image from "next/image";
import { BsEnvelopeHeartFill } from "react-icons/bs";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});

const GiftSection = () => {
  return (
    <>
      <div className={raleway.className}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-primary-950 mb-4">
            Regalos
          </h1>
          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1726270224/giftimage_01_uzyjcx.jpg"
            alt="Background mensaje de los novios"
            style={{ objectFit: "cover" }}
            quality={100}
            width={600}
            height={800}
            className="relative opacity-60"
            loading="lazy"
          />
          <div className="md:w-1/3 text-center text-lg p-8 text-primary-950 absolute font-medium">
            <div className="mb-6">
              <p>Lluvia de sobres</p>
            </div>
            <div className="flex flex-row items-center justify-center opacity-60">
              <BsEnvelopeHeartFill
                className="text-4xl text-primary-950"
                size={100}
              />
            </div>
            <h2>
              Recuerda: Tu presencia es el mejor regalo de bodas
              que puedes darnos
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftSection;
