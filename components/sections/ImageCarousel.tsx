"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ImageCarouselProps {
  images: Array<{ src: string; alt: string; title: string }>;
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const plugin = React.useMemo(() => Autoplay({ delay: 2000, stopOnInteraction: true }), []);

  return (
    <Carousel
      plugins={[plugin]}
      className="w-full max-w-4xl mx-auto"
      onMouseEnter={() => plugin.stop()}
      onMouseLeave={() => plugin.reset()}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-2 border-secondary">
              <CardContent className="p-4">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-lg text-primary mt-4">{image.title}</h3>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
