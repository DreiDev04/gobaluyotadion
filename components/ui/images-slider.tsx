"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
}: {
  images: string[];
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Load first image immediately, others on demand
    const firstImg = new Image();
    firstImg.src = images[0];
    firstImg.onload = () => {
      setLoadedImages([images[0]]);
    };

    // Preload other images in the background
    images.slice(1).forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setLoadedImages((prev) => [...new Set([...prev, image])]);
      };
    });
  }, [images]);

  useEffect(() => {
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoplay]);

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
    >
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <div
          key={currentIndex}
          style={{
            backgroundImage: `url('${loadedImages[currentIndex]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "fadeIn 0.6s ease-in-out",
          }}
          className="absolute inset-0 h-full w-full"
        />
      )}
    </div>
  );
};
