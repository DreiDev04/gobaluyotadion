"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface Sponsor {
  name: string;
  imgPath: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Arton Sterling",
    imgPath: "/sponsors/arton-sterling.png",
  },
  {
    name: "Asian Top Choice",
    imgPath: "/sponsors/asian-top-choice.png",
  },
  {
    name: "Business List",
    imgPath: "/sponsors/business-list.png",
  },
  {
    name: "Info is Info",
    imgPath: "/sponsors/info-is-info.png",
  },
  {
    name: "Integrated Bar",
    imgPath: "/sponsors/integrated-bar.png",
  },
  {
    name: "Legal Tree",
    imgPath: "/sponsors/legal-tree.png",
  },
  {
    name: "Lex Meet",
    imgPath: "/sponsors/lex-meet.png",
  },
  {
    name: "PAREB",
    imgPath: "/sponsors/PAREB.png",
  },
  {
    name: "The Grid",
    imgPath: "/sponsors/TheGrid.svg",
  },
];
const Introduction = () => {
  return (
    <div className="container mx-auto">
      <section
        id="introduction"
        className="flex flex-col-reverse sm:flex-row items-center justify-between py-16 sm:py-24 gap-12 px-4"
      >
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            A Legacy of Service and Legal Excellence
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground/90 leading-relaxed">
            At Go Baluyot & Adion Law Office, we deliver trusted legal services
            with a personal approach. Our team brings extensive experience from
            national practice to the local community, building lasting
            relationships based on integrity and expertise.
          </p>
          <Button
            variant="secondary"
            className="mt-8 rounded-full px-8"
            size="lg"
            asChild
          >
            <Link href="/about">Learn More About Us →</Link>
          </Button>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <div className="relative w-full aspect-square max-w-md">
            <Image
              src="/logos/square-logo.jpg"
              alt="About Go Baluyot & Adion Law Office"
              fill
              className="rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>
      <div className="text-lg font-semibold text-muted-foreground flex justify-center">
        <h1>TRUSTED BY LEADING TEAMS</h1>
      </div>
      <div className="rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden mb-10">
        <InfiniteMovingCards
          items={sponsors}
          direction="left"
          speed="slow"
          pauseOnHover={false}
        />
      </div>
    </div>
  );
};

export default Introduction;
