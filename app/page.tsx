import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/home/Hero"), {
  loading: () => <div className="h-[50dvh] sm:h-screen bg-background" />,
});

const Introduction = dynamic(
  () => import("@/components/sections/home/Introduction"),
  {
    loading: () => <div className="h-96 bg-background" />,
  }
);

const Partners = dynamic(() => import("@/components/sections/home/Partners"), {
  loading: () => <div className="h-96 bg-background" />,
});

const Question = dynamic(() => import("@/components/sections/home/Question"), {
  loading: () => <div className="h-96 bg-background" />,
});

const page = () => {
  return (
    <>
      <div className="fixed inset-0 w-full">
        <Hero />
      </div>
      <div className="flex flex-col min-h-screen z-10 relative fade-in">
        <div className="h-[50dvh] sm:h-screen"></div>
        <div className="w-full bg-background/98 backdrop-blur-xl flex-1">
          <Introduction />
          <Partners />
          <div className="bg-gradient-to-b from-primary/90 to-primary py-16 sm:py-24">
            <Question />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
