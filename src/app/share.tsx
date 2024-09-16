import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

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
        />
      </div>
      <div className="absolute">
        <Link
          href="https://drive.google.com/drive/folders/1MnCRy4uDVL9o0nQr9Clw2L3ZQSB5EMDd?usp=sharing"
          target="_blank"
        >
          <Button>Comparte tus fotos de la boda aqui</Button>
        </Link>
      </div>
    </div>
  );
};

export default ShareSection;
