"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
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

const SugerenciasSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center text-primary-950 mb-4">
        Sugerencias
      </h1>
      <h2 className="font-semibold text-primary-950 text-2xl mb-4 text-center">
        Restaurantes
      </h2>

      <Carousel
        className="w-full max-w-xs"
        plugins={[Autoplay({ delay: 2000 })]}
      >
        <CarouselContent>
          {restaurants.map((restaurant, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardHeader>{restaurant.title}</CardHeader>

                  <CardContent className="flex aspect-square items-center justify-center p-6]">
                    <span>{restaurant.description}</span>
                  </CardContent>
                </Card>
              </div>
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
        className="w-full max-w-xs"
        plugins={[Autoplay({ delay: 2000 })]}
      >
        <CarouselContent>
          {rumbas.map((rumba, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardHeader>{rumba.title}</CardHeader>

                  <CardContent className="flex aspect-square items-center justify-center p-6]">
                    <span>{rumba.description}</span>
                  </CardContent>
                </Card>
              </div>
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
        className="w-full max-w-xs"
        plugins={[Autoplay({ delay: 2000 })]}
      >
        <CarouselContent>
          {maquilladoras.map((maquilladora, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardHeader>{maquilladora.title}</CardHeader>

                  <CardContent className="flex aspect-square items-center justify-center p-6]">
                    <span>{maquilladora.description}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SugerenciasSection;
