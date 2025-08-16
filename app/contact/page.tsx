import contactData from "@/data/contact.json";
import MapWrapper from "@/components/sections/contact/MapWrapper";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactCarousel } from "@/components/sections/contact/ContactCarousel";

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
    {/* subtle hover background */}
    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative flex items-start space-x-4 p-5 bg-card/50 hover:bg-card/80 transition-colors rounded-lg border border-border">
      <div className="text-2xl text-accent shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        {Array.isArray(content) ? (
          <ul className="space-y-1">
            {content.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">{content}</p>
        )}
      </div>
    </div>
  </div>
);

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Map Section */}
      <section className="relative w-full border-y border-border">
        <div className="max-w-[80rem] mx-auto">
          <div className="relative py-10 px-4">
            <div className="max-w-7xl mx-auto mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  Our Location
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Visit us at our office in Tarlac City
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-border shadow-lg">
              <MapWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
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

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card p-6 sm:p-10 rounded-xl border border-border shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-primary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20 ">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            A Glimpse of Our Office
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl ">
            Take a look at our office spaces where we welcome clients and work
            on providing excellent legal services.
          </p>
          <ContactCarousel />
        </div>
      </section>
    </div>
  );
};

export default Page;
