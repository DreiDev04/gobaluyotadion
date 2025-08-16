"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/images/slideshows/group-pic-updated.png",
    "/images/slideshows/about-featured.jpg",
    "/images/slideshows/hero.jpg",
    "/images/slideshows/law-office-front.jpg",
    "/images/slideshows/meeting.jpg",
  ];

  return (
    <section className="relative w-full h-[50dvh] sm:h-screen overflow-hidden">
      <ImagesSlider className="h-full" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        ></motion.div>
      </ImagesSlider>

      <div className="absolute inset-0  pt-24 flex flex-col justify-center items-center px-4 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tight">
            Go Baluyot & Adion
          </h1>
          <p className="mt-6 text-md sm:text-2xl font-light max-w-2xl mx-auto leading-relaxed opacity-90">
            Rooted in Integrity. Driven by Excellence.
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
