import contactData from "@/data/contact.json";
import MapWrapper from "@/components/sections/contact/MapWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactForm } from "@/components/sections/contact/ContactForm";

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string | string[];
}) => (
  <div className="group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative flex items-start sm:items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card hover:bg-card/80 transition-colors border-l-2 border-primary">
      <div className="text-2xl sm:text-3xl text-accent shrink-0">{icon}</div>
      <div>
        <h3 className="font-medium text-foreground mb-1 sm:mb-2">{title}</h3>
        {Array.isArray(content) ? (
          <div className="space-y-0.5 sm:space-y-1">
            {content.map((item, i) => (
              <p key={i} className="text-sm sm:text-base text-muted-foreground">
                {item}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-sm sm:text-base text-muted-foreground">{content}</p>
        )}
      </div>
    </div>
  </div>
);

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Full Width Map Section */}
      <section className="relative w-full bg-background border-y border-border">
        <div className="absolute inset-0" />
        <div className="max-w-[80rem] mx-auto">
          <div className="relative py-8 sm:py-12 px-4">
            <div className="max-w-7xl mx-auto mb-8 sm:mb-12 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">
                  Our Location
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Visit us at our office in Tarlac City
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-border/50 shadow-2xl">
              <MapWrapper />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
              Ways to Connect
            </h2>

            <ContactInfo
              icon="📍"
              title="Visit Our Office"
              content={contactData.officeAddress}
            />

            <ContactInfo
              icon="📞"
              title="Call Us"
              content={contactData.phoneNumbers}
            />

            <ContactInfo
              icon="✉️"
              title="Email Us"
              content={contactData.email}
            />

            <ContactInfo
              icon="⏰"
              title="Business Hours"
              content={contactData.businessHours}
            />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card p-6 sm:p-8 lg:p-12 rounded-lg border border-border/50">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
