import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
      src="/images/group-pic-updated.png"
      alt="Go Baluyot & Adion Law Office"
      fill
      className="object-cover brightness-[0.85]"
      priority
      quality={100}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-24 flex flex-col justify-center items-center px-4 text-center text-white">
      <div className="animate-fade-in-up">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
        Go Baluyot & Adion
        </h1>
        <p className="mt-6 text-lg sm:text-2xl font-light max-w-2xl mx-auto leading-relaxed opacity-90">
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
