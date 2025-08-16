"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function ContactCarousel() {
  const ImgSrc = [
    "/images/office/gba-entrance (1).jpg",
    "/images/office/gba-entrance (2).jpg",
    "/images/office/gba-entrance (3).jpg",
    "/images/office/meeting_room (1).jpg",
    "/images/office/meeting_room (2).jpg",
    "/images/office/meeting_room (3).jpg",
    "/images/office/atty_office (1).jpg",
    "/images/office/atty_office (2).jpg",
    "/images/office/atty_office (3).jpg",
    "/images/office/atty_office (4).jpg",
    "/images/office/atty_office (5).jpg",
    "/images/office/atty_office (6).jpg",
    "/images/office/waiting_area (1).jpg",
    "/images/office/waiting_area (2).jpg",
    "/images/office/waiting_area (3).jpg",
    "/images/office/sound_option (1).jpg",
    "/images/office/sound_option (2).jpg",
    "/images/office/sound_option (3).jpg",
  ];

  return (
    <Carousel
      className="w-full max-w-7xl"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {ImgSrc.map((src, index) => (
          <CarouselItem key={index} className="pl-5 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`Office ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-end gap-2 my-10">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
