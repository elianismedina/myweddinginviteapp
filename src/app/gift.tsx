import localFont from "next/font/local";
import React from "react";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});

const GiftSection = () => {
  return (
    <div className={raleway.className}>
      <h1 className="text-4xl font-bold text-center text-primary-900 mb-4">
        Regalos
      </h1>
    </div>
  );
};

export default GiftSection;
