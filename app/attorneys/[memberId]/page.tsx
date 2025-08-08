import { Badge } from "@/components/ui/badge";
import { getDetails } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, Scale } from "lucide-react";
import Link from "next/link";

interface MemberPageProps {
  params: Promise<{ memberId: string }>;
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { memberId } = await params;

  const member = getDetails(memberId);

  if (!member) {
    return notFound();
  }

  return (
    <>
      {/* HERO*/}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
        <div className="h-64 md:h-full w-full">
          <Image
            src={member.largeImage || "/placeholder/placeholder.png"}
            alt={member.name}
            width={1500}
            height={1500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 p-6 md:gap-12 md:p-8">
          <Badge>{member.role}</Badge>
          <h1 className="text-4xl md:text-7xl font-bold text-primary text-center">
            <span>Atty. </span>
            {member.name}
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 text-lg font-semibold">
            <Link
              className="flex items-center gap-2 hover:underline"
              href="tel:+63459821726"
            >
              <Phone />
              +63 45 982 1726
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline"
              href="tel:+639088134289"
            >
              <Phone />
              +63 908 813 4289
            </Link>
          </div>
          <div className="w-24 md:w-44 h-1 bg-accent my-4" />

          <p className="text-lg md:text-2xl text-center">{member.admitted}</p>
          <Button variant="secondary">Download Summarized Profile</Button>
        </div>
      </section>
      {/* ABOUT */}
      <section className="py-12 px-6 md:py-24 md:px-16 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <Scale className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary">
              About
            </h2>
            <div className="w-full h-0.5 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg leading-relaxed ">
                {(member.type === "partner" || member.type === "associate") &&
                  member.about &&
                  (member.about.includes("\n")
                    ? member.about
                        .split("\n")
                        .map((line: string, index: number) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))
                    : member.about)}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-serif text-accent">
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 transition-transform duration-300 hover:scale-105">
                  <p className="font-medium text-base md:text-lg">
                    {member.educationDetails?.LawSchool.degree}
                  </p>
                  <p>{member.educationDetails?.LawSchool.name}</p>
                </div>
                <div className="border-l-2 border-primary pl-4 transition-transform duration-300 hover:scale-105">
                  <p className="font-medium text-base md:text-lg">
                    {member.educationDetails?.College.degree}
                  </p>
                  <p>{member.educationDetails?.College.name}</p>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-accent">
                Areas of Expertise
              </h3>
              <div className="space-y-4">
                {member.specialty.split(",").map((area, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary pl-4 transition-transform duration-300 hover:scale-105"
                  >
                    <p className="font-medium text-base md:text-lg ">
                      {area.trim()}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl font-serif text-accent">
                Professional Leadership
              </h3>
              <p className="text-lg font-serif italic mb-4">
                Active involvement in legal organizations and industry
                leadership
              </p>
              <div className="space-y-4">
                {"backgroundAndInvolvement" in member &&
                  member.backgroundAndInvolvement &&
                  Object.entries(member.backgroundAndInvolvement)
                    .filter(([_, role]) => typeof role === "string" && role)
                    .map(([org, role], index) => (
                      <div
                        key={index}
                        className="border-l-2 border-primary pl-4 transition-transform duration-300 hover:scale-105"
                      >
                        <h4 className="font-serif font-medium ">{org}</h4>
                        <p className="text-secondary font-serif italic text-sm">
                          {role as string}
                        </p>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}