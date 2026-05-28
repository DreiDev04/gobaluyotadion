import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import practiceAreas from "@/data/practices.json";
import type { PracticeArea } from "@/types/practices";

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen fade-in">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight">
            <span className="block text-foreground">Our Practice</span>
            <span className="block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary mt-2">
              Areas of Expertise
            </span>
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Go Baluyot & Adion provides comprehensive legal services across diverse practice areas. Each area is handled by experienced attorneys with proven expertise and a commitment to client success.
          </p>
          <Separator className="mt-12 mx-auto w-20" />
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {practiceAreas.map((area , index) => (
            <div
              key={area.title}
              className="group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative flex flex-col h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-border hover:bg-card transition-all duration-300">
                {/* Image with Overlay */}
                <div className="relative h-32 md:h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Icon */}
                <div className="relative px-6 -mt-8 mb-4 z-10">
                  <div className="text-5xl md:text-6xl">{area.icon}</div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col px-6 pb-6 pt-2">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed mb-6 flex-1">
                    {area.description}
                  </p>

                  {/* Expertise Areas */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-primary/80 uppercase tracking-wider">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.expertise.slice(0, 4).map((item) => (
                        <span
                          key={item}
                          className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                      {area.expertise.length > 4 && (
                        <span className="inline-block text-xs px-3 py-1 rounded-full text-muted-foreground/60 font-medium">
                          +{area.expertise.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 pt-16 border-t border-border/50">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Need Legal Guidance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our experienced team is ready to discuss your legal needs and provide expert solutions tailored to your situation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Contact Our Team
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
