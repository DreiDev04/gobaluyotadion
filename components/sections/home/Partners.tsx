import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PartnersProp = {
  name: string;
  role: string;
  image: string;
  specialization: string;
  description: string;
  link: string;
};

const partners: PartnersProp[] = [
  {
    name: "Atty. Roberto E. Go",
    role: "Partner",
    image: "/images/partners/partners-go.png",
    specialization: "Labor and Employment",
    description:
      "With over 15 years of experience in corporate law and banking regulations, Atty. Go leads our firm's corporate practice group.",
    link: "/attorneys/roberto-go",
  },
  {
    name: "Atty. Jose Marie M. Baluyot",
    role: "Partner",
    image: "/images/partners/partners-baluyot.png",
    specialization: "Intellectual Property",
    description:
      "A respected authority in family law with extensive experience in handling complex civil litigation cases.",
    link: "/attorneys/jose-marie-baluyot",
  },
  {
    name: "Atty. Noel S. Adion",
    role: "Partner",
    image: "/images/partners/partners-adion.png",
    specialization: "Labor and Employment",
    description:
      "Specializing in real estate and business law, Atty. Adion brings strategic insight to complex commercial transactions.",
    link: "/attorneys/noel-adion",
  },
];

const Partners = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-primary/[0.05] to-transparent dark:from-primary/[0.05] dark:via-primary/[0.08] dark:to-transparent">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80">
            Meet Our Partners
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground/90 leading-relaxed">
            Backed by decades of combined experience, our partners bring
            expertise and dedication to every case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 ">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerCard = ({ partner }: { partner: PartnersProp }) => {
  return (
    <div className="group relative">
      <div className="overflow-hidden rounded-2xl border bg-card">
        <div className="aspect-[3/4] relative bg-primary ">
          <Image
            src={partner.image}
            alt={partner.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 px-10 pt-10"
          />
        </div>

        <div className="relative bg-card border-t p-6">
          {/* Name and Role - Always visible */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {partner.name}
            </h3>
            <p className="text-muted-foreground text-sm font-medium mt-1">
              {partner.role}
            </p>
          </div>

          {/* Details and Button - Slide up on hover */}

          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-6 pt-4 space-y-4 bg-card border-t">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {partner.name}
              </h3>
              <p className="text-muted-foreground text-sm font-medium mt-1">
                {partner.role}
              </p>
            </div>
            <div className="space-y-3">
              <div className="inline-flex px-3 py-1 rounded-full bg-primary text-white text-sm">
                {partner.specialization}
              </div>
              <p className="text-muted-foreground/80 text-sm leading-relaxed line-clamp-3">
                {partner.description}
              </p>
            </div>

            <Button
              variant="secondary"
              size="sm"
              className="w-full rounded-full "
              asChild
            >
              <Link href={partner.link} className="font-medium">
                View Profile →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
