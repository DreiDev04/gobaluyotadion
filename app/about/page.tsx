import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const coreValues = [
  {
    title: "Excellence",
    desc: "Committed to delivering the highest quality legal services",
    icon: "⚖️",
  },
  {
    title: "Integrity",
    desc: "Upholding the highest ethical standards in all our dealings",
    icon: "🤝",
  },
  {
    title: "Client Focus",
    desc: "Dedicated to understanding and meeting our clients' needs",
    icon: "👥",
  },
  {
    title: "Innovation",
    desc: "Embracing modern solutions to legal challenges",
    icon: "💡",
  },
  {
    title: "Collaboration",
    desc: "Working together to achieve the best possible outcomes",
    icon: "🤲",
  },
  {
    title: "Transparency",
    desc: "Clear communication and honest relationships with our clients",
    icon: "📜",
  },
];

const timelineData = [
  {
    title: "2016",
    content:
      "Atty. Go and Atty. Baluyot established Go Baluyot & Adion Law Office in Tarlac, bringing big-city legal expertise to their hometown.",
  },
  {
    title: "2016–2019",
    content:
      "GBA expanded rapidly, handling litigation, labor, IP, real estate, taxation, and notarial services.",
  },
  {
    title: "2019",
    content:
      "Atty. Noel S. Adion joined as partner, strengthening the firm's expertise in criminal defense and agrarian law.",
  },
  {
    title: "2019–Present",
    content:
      "GBA grew to at least 10 lawyers, becoming one of the largest law firms in Tarlac.",
  },
  {
    title: "Ongoing",
    content:
      "GBA continues to provide comprehensive legal services with dedication, integrity, and client focus.",
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/slideshows/hero.jpg"
            alt="Law Office"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-white">
            Our Legacy of Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Founded by distinguished legal minds, committed to delivering
            exceptional legal services
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-foreground">
              About GBA Law Office
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Go Baluyot & Adion Law Office is a distinguished full-service law
              firm founded by Tarlac-based lawyers. Our partners, graduates of
              prestigious Manila universities, bring together extensive
              experience from respected Makati law offices and government
              service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 10 accomplished lawyers, we've grown to become one of
              the largest and most acclaimed law firms in the region, serving
              diverse clients across various industries.
            </p>
          </div>
          <div className="relative h-[250px] md:h-[400px] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl border border-border bg-primary">
            <Image
              src="/images/partners.png"
              alt="Team Photo"
              fill
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 bg-background/50">
        <h2 className="text-4xl font-semibold text-center mb-16 text-foreground">
          Our Journey
        </h2>
        <Timeline data={timelineData} />
      </section>

      {/* Values Section */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-4 text-foreground">
            Our Core Values
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            The principles that guide our practice and define our commitment to
            excellence in legal services
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="group relative bg-background/50 backdrop-blur-sm p-8 rounded-[var(--radius)] 
                shadow-lg hover:shadow-xl transition-all duration-300 
                border border-border hover:border-primary/50 overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-4xl mb-6 block transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </span>
                <h3 className="text-2xl font-semibold mb-4 text-foreground relative">
                  {value.title}
                </h3>
                <p className="text-muted-foreground relative">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
("@/components/ui/timeline");
import React from "react";

const data = [
  {
    title: "2016",
    content:
      "Atty. Go and Atty. Baluyot established Go Baluyot & Adion Law Office in Tarlac, bringing big-city legal expertise to their hometown.",
  },
  {
    title: "2016–2019",
    content:
      "GBA expanded rapidly, handling litigation, labor, IP, real estate, taxation, and notarial services.",
  },
  {
    title: "2019",
    content:
      "Atty. Noel S. Adion joined as partner, strengthening the firm’s expertise in criminal defense and agrarian law.",
  },
  {
    title: "2019–Present",
    content:
      "GBA grew to at least 10 lawyers, becoming one of the largest law firms in Tarlac.",
  },
  {
    title: "Ongoing",
    content:
      "GBA continues to provide comprehensive legal services with dedication, integrity, and client focus.",
  },
];

export default page;
