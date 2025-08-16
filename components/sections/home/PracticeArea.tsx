import {
  Briefcase,
  Home,
  Users,
  Scale,
  CreditCard,
  Building2,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export type PracticeArea = {
  name: string;
  icon: any;
  description: string;
  link: string;
};

interface PracticeAreaCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  link: string;
}

const practiceAreas: PracticeArea[] = [
  {
    name: "Family Law",
    icon: Users,
    description:
      "Expert guidance in divorce, custody, and family-related legal matters.",
    link: "/practices/family-law",
  },
  {
    name: "Banking & Finance",
    icon: CreditCard,
    description:
      "Comprehensive legal services for financial institutions and transactions.",
    link: "/practices/banking-finance",
  },
  {
    name: "Business Law",
    icon: Briefcase,
    description:
      "Legal support for businesses of all sizes, from startups to corporations.",
    link: "/practices/business-law",
  },
  {
    name: "Real Estate Law",
    icon: Home,
    description:
      "Legal expertise in property transactions, disputes, and development.",
    link: "/practices/real-estate-law",
  },
  {
    name: "Civil Law",
    icon: Scale,
    description:
      "Representation in civil disputes, contracts, and personal injury cases.",
    link: "/practices/civil-law",
  },
  {
    name: "Corporate Law",
    icon: Building2,
    description:
      "Strategic legal counsel for corporate governance and compliance.",
    link: "/practices/corporate-law",
  },
];

function PracticeAreaCard({
  name,
  icon: Icon,
  description,
  link,
}: PracticeAreaCardProps) {
  return (
    <Card className="bg-card  group relative overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <CardHeader>
        <Icon className="w-12 h-12 text-primary p-1 " />

        <CardTitle className="text-xl font-semibold tracking-tight">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="link" asChild>
          <Link href={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

const PracticePreview = () => {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-16 sm:py-24 ">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          Our Practice Areas
        </h2>
        <p className="text-base sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
          We offer comprehensive legal services across multiple practice areas,
          ensuring expert guidance for all your legal needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {practiceAreas.map((area) => (
          <PracticeAreaCard
            key={area.name}
            name={area.name}
            icon={area.icon}
            description={area.description}
            link={area.link}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="default" size="lg" asChild>
          <Link href="/practices">View All Practice Areas</Link>
        </Button>
      </div>
    </section>
  );
};

export default PracticePreview;
