import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const coreValues = [
  {
    title: "Local Roots, National Expertise",
    desc: "Tarlac-based firm with big-city legal training from Makati's most respected law offices",
    icon: "🌍",
  },
  {
    title: "Personalized Client Care",
    desc: "We know our clients personally and tailor solutions to their unique situations",
    icon: "🤝",
  },
  {
    title: "Accessible & Responsive",
    desc: "Direct access to experienced attorneys who listen and act promptly",
    icon: "📞",
  },
  {
    title: "Deep Legal Expertise",
    desc: "10+ accomplished lawyers with specialized knowledge across diverse practice areas",
    icon: "📚",
  },
  {
    title: "Trusted Relationships",
    desc: "Built on years of successful cases and genuine long-term client partnerships",
    icon: "🏛️",
  },
  {
    title: "Results-Driven Focus",
    desc: "Every case handled with strategic thinking and commitment to favorable outcomes",
    icon: "✓",
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
  <div className="min-h-screen bg-background fade-in">
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

      {/* What Makes Us Different */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-foreground">
          What Makes Us Different
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Rooted in Tarlac, Trained in Manila</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our partners trained at Manila's most respected law offices and worked in government service. We brought that expertise home to Tarlac—combining big-city legal sophistication with personal relationships our clients can actually trust.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">We Actually Know Our Clients</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Unlike large firms where you're a case number, you have direct access to experienced attorneys who listen, remember your situation, and tailor solutions to your actual needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">10+ Lawyers, One Commitment</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              We've grown to over 10 accomplished lawyers, each bringing specialized expertise. But we've maintained what made us successful from the start: treating every client like they matter, because they do.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Proven Results, Long Relationships</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our reputation is built on successful cases and clients who come back—because when you win their case, they don't forget. We focus on getting results that matter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
