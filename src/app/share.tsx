import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";

const ShareSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <Image
          src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1726507221/ShareSection_01_vr9wfe.jpg"
          alt="ShareSection"
          width={600}
          height={800}
          className="opacity-60"
          loading="lazy"
        />
      </div>

      <div className="absolute flex flex-col gap-4 items-center justify-end">
        <div>
          <FaSquareInstagram
            className=" text-primary-950"
            size={200}
            style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
          />
        </div>
        <div>
          <p className="text-4xl text-primary-950 text-center font-semibold">
            #Charles&Eli
          </p>
        </div>
        <div className="p-2">
          <p className="text-center text-primary-950 text-sm md:text-lg">
            Adicionalmente, para que podamos recordar cada momento, <br /> hemos
            creado una carpeta en Google Drive <br /> donde nos encantaría que
            <br />
            suban todas las fotos que tomen durante la boda.
          </p>
        </div>
        <Link
          href="https://drive.google.com/drive/folders/1MnCRy4uDVL9o0nQr9Clw2L3ZQSB5EMDd?usp=sharing"
          target="_blank"
          className="flex flex-col items-center justify-center"
        >
          <Button>Accede a la carpeta aqui</Button>
        </Link>
        <div>
          <p className="text-center text-primary-950 text-sm md:text-lg">
            ¡Gracias por ser parte de nuestra celebración <br /> y por ayudarnos
            a capturar <br /> cada instante de este día inolvidable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
