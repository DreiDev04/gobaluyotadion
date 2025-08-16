import Link from "next/link";
import Image from "next/image";

interface Partner {
  name: string;
  role: string;
  specialty: string;
  education: string;
  image: string;
}

interface Associate {
  name: string;
  role: string;
  specialty: string;
  education: string;
  image: string;
}

interface Staff {
  name: string;
  role: string;
  image: string;
}

type TeamMember = Partner | Associate | Staff;

const isPartner = (member: TeamMember): member is Partner => {
  return "role" in member && "specialty" in member && "education" in member;
};

const isAssociate = (member: TeamMember): member is Associate => {
  return "specialty" in member && "education" in member && !("role" in member);
};

const isStaff = (member: TeamMember): member is Staff => {
  return (
    "role" in member && !("specialty" in member) && !("education" in member)
  );
};

const getSlug = (name: string) => {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "-");
};

interface TeamSectionProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
  type: "partner" | "associate" | "staff";
}

import teamData from "@/data/teams.json";
import { Button } from "@/components/ui/button";

const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  subtitle,
  members,
  type,
}) => (
  <div className="w-full">
    {title && subtitle && (
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground/80 text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>
    )}
    <div
      className={`grid w-full
      ${
        type === "partner"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          : "grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
      }`}
    >
      {members.map((member, i) => {
        const isLinkable = isPartner(member) || isAssociate(member);
        const CardContent = (
          <div className="relative flex flex-col ">
            <div
              className={` aspect-[1/1] mb-6 w-full relative h-auto 
                ${type === "partner" ? "h-auto " : "md:h-74"}
                `}
            >
              {isLinkable && (
                <div
                  className={`absolute inset-0 z-40 flex items-center justify-center  font-semibold text-transparent hover:text-white transition-colors duration-300 p-5 flex-col gap-2 text-center
                ${
                  type === "partner"
                    ? "hover:bg-accent/90 "
                    : "hover:bg-primary/90"
                }
                `}
                >
                  {member.specialty.split(",").map((s, index) => (
                    <p key={index} className="">
                      [{s}]
                    </p>
                  ))}
                </div>
              )}
              <div
                className={`w-full h-[70%] bottom-1 absolute z-10 
                  ${type === "partner" ? "bg-accent" : "bg-primary"}
                  `}
              ></div>
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-full object-cover relative z-30"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground/90 tracking-tight">
                {member.name}
              </h3>
              {isPartner(member) && (
                <>
                  <p className="text-sm text-primary/90">{member.role}</p>
                  {isLinkable && (
                    <div className="pt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm text-primary inline-flex items-center font-medium">
                        Learn more
                        <svg
                          className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5"
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
                      </span>
                    </div>
                  )}
                </>
              )}
              {isAssociate(member) && (
                <>
                  <p className="text-sm text-primary/90">{member.role}</p>
                  {isLinkable && (
                    <div className="pt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm text-primary inline-flex items-center font-medium">
                        Learn more
                        <svg
                          className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5"
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
                      </span>
                    </div>
                  )}
                </>
              )}
              {isStaff(member) && (
                <p className="text-sm text-muted-foreground/70">
                  {member.role}
                </p>
              )}
            </div>
          </div>
        );

        return (
          <div
            key={i}
            className="group transition-all duration-300 hover:-translate-y-1"
          >
            {isLinkable ? (
              <Link href={`/attorneys/${getSlug(member.name)}`} className="block">
                {CardContent}
              </Link>
            ) : (
              CardContent
            )}
          </div>
        );
      })}
    </div>
  </div>
);

const Page = () => {
  return (
  <div className="min-h-screen bg-background fade-in">
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div className="max-w-2xl mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                The Pillars of Our Legal Practice
              </h1>
            </div>
            <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-md">
              Our three managing partners bring together over decades of
              combined experience in corporate law, litigation, and strategic
              legal counsel.
            </p>
          </div>
          <div className="w-full h-px bg-border mb-16 "></div>
          <TeamSection
            title=""
            subtitle=""
            members={teamData.partners}
            type="partner"
          />
        </div>
      </section>

      {/* Associates Section */}
      <section className="py-24 md:py-32 bg-black/[0.02]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-xl mb-20">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Associates
            </h2>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              Expert attorneys dedicated to providing innovative legal solutions
              across diverse practice areas.
            </p>
          </div>
          <TeamSection
            title=""
            subtitle=""
            members={teamData.associates}
            type="associate"
          />
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-xl mb-20">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Legal Staff
            </h2>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              Essential team members ensuring seamless operations and client
              support.
            </p>
          </div>
          <TeamSection
            title=""
            subtitle=""
            members={teamData.staff}
            type="staff"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to work together?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed mb-10">
              Our team is ready to help you navigate your legal challenges with
              expertise and dedication.
            </p>
            <Button>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
