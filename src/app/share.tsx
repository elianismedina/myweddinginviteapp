import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ShareSection = () => {
  return (
    <div className="flex flex-row items-center justify-center mb-4">
      <Link
        href="https://drive.google.com/drive/folders/1MnCRy4uDVL9o0nQr9Clw2L3ZQSB5EMDd?usp=sharing"
        target="_blank"
      >
        <Button>Comparte tus fotos de la boda aqui</Button>
      </Link>
    </div>
  );
};

export default ShareSection;
