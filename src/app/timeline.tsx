"use client";

import localFont from "next/font/local";

import React from "react";
import Image from "next/image";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});

const TimelineSection = () => {
  return (
    <div
      className="bg-[url(https://res.cloudinary.com/dxa54qfxx/image/upload/v1726097978/timeline_01_iettyn.jpg)] opacity-75 p-4
    flex flex-col justify-center items-center bg-cover
    "
    >
      <div className={raleway.className}>
        <Image
          src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1726145102/final1_rsrd7m.svg"
          alt="Timeline"
          width={300}
          height={450}
          quality={100}
        />
      </div>
    </div>
  );
};

export default TimelineSection;
