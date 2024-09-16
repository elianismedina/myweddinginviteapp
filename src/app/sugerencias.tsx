"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import restaurants from "@/app/restaurants.json";
import rumbas from "@/app/rumbas.json";
import maquilladoras from "@/app/maquilladoras.json";
import localFont from "next/font/local";
import { EmblaOptionsType } from "embla-carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});
const OPTIONS: EmblaOptionsType = {
  loop: true,
  duration: 30,
  containScroll: false,
};

const SugerenciasSection = () => {
  return (
    <div className={raleway.className}>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-center text-primary-950 mb-4">
          Sugerencias
        </h1>
        <h2 className="font-semibold text-primary-950 text-2xl mb-4 text-center">
          Restaurantes
        </h2>

        <Carousel
          className="w-full max-w-xs md:max-w-md mb-4"
          plugins={[Autoplay({ delay: 2000 })]}
          opts={OPTIONS}
        >
          <CarouselContent>
            {restaurants.map((restaurant, index) => (
              <CarouselItem key={index}>
                <div className="p-1 aspect-square relative">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.title}
                    className="rounded-lg"
                    fill
                    loading="lazy"
                  />
                </div>
                <div className="">
                  <p className="text-md text-primary-950 font-semibold text-center p-4">
                    {restaurant.title}
                  </p>
                </div>
                <Link href={restaurant.link} target="_blank">
                  <Button className="w-full">Ver más</Button>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <h2 className="font-semibold text-primary-950 text-2xl mb-4 text-center">
          Rumba
        </h2>
        <Carousel
          className="w-full max-w-xs md:max-w-md mb-4"
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {rumbas.map((rumba, index) => (
              <CarouselItem key={index}>
                <div className="p-1 aspect-square relative">
                  <Image
                    src={rumba.image}
                    alt={rumba.title}
                    className="rounded-lg"
                    fill
                    loading="lazy"
                  />
                </div>
                <div className="">
                  <p className="text-md text-primary-950 font-semibold text-center p-4">
                    {rumba.title}
                  </p>
                </div>
                <Link href={rumba.link} target="_blank">
                  <Button className="w-full">Ver más</Button>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <h2 className="font-semibold text-primary-950 text-2xl mb-4 text-center">
          Maquilladoras
        </h2>
        <Carousel
          className="w-full max-w-xs md:max-w-md"
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {maquilladoras.map((maquilladora, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="p-1 aspect-square relative">
                  <Image
                    src={maquilladora.image}
                    alt={maquilladora.title}
                    className="rounded-lg"
                    fill
                    loading="lazy"
                  />
                </div>
                <div className="">
                  <p className="text-md text-primary-950 font-semibold text-center p-4">
                    {maquilladora.title}
                  </p>
                </div>
                <Link href={maquilladora.link} target="_blank">
                  <Button className="w-full">Ver más</Button>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default SugerenciasSection;
