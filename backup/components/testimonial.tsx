"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const artists = [
  {
    name: "Booba",
    description: "Pionnier du rap français, connu pour son flow unique.",
    avatar: "/placeholder.svg", // Remplacez par les vraies images si disponibles
  },
  {
    name: "Ninho",
    description: "Recordman des certifications, maître des mélodies.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Damso",
    description: "Artiste à la plume complexe et aux productions sombres.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Gunna",
    description: "Figure influente de la scène trap d'Atlanta.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Jul",
    description: "L'ovni marseillais, symbole de productivité et de succès.",
    avatar: "/placeholder.svg",
  },
  {
    name: "PNL",
    description: "Le duo qui a réinventé le rap français avec le cloud rap.",
    avatar: "/placeholder.svg",
  },
];
const Testimonial = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      id="testimonials"
      className="w-full max-w-screen-xl mx-auto py-12 xs:py-20 px-6"
    >
      <h2 className="mb-8 xs:mb-14 text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
        ILS NOUS ONT FAIT CONFIANCE
      </h2>
      <div className="container w-full mx-auto">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {artists.map((artist) => (
              <CarouselItem key={artist.name}>
                <ArtistCard artist={artist} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn("h-3.5 w-3.5 rounded-full border-2", {
                "bg-primary border-primary": current === index + 1,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ArtistCard = ({
  artist,
}: {
  artist: (typeof artists)[number];
}) => (
  <div className="bg-accent rounded-xl p-8 text-center">
    <Avatar className="w-24 h-24 mx-auto mb-4">
      <Image src={artist.avatar} layout="fill" objectFit="cover" alt={artist.name} className="rounded-full"/>
      <AvatarFallback className="text-3xl font-medium bg-primary text-primary-foreground">
        {artist.name.charAt(0)}
      </AvatarFallback>
    </Avatar>
    <h3 className="text-2xl font-bold">{artist.name}</h3>
    <p className="mt-2 text-muted-foreground">{artist.description}</p>
  </div>
);

export default Testimonial;
