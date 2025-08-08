import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const practiceAreas = [
    { name: "Family Law", href: "/practices#family" },
    { name: "Banking & Finance", href: "/practices#banking" },
    { name: "Business Law", href: "/practices#business" },
    { name: "Real Estate Law", href: "/practices#real-estate" },
    { name: "Civil Law", href: "/practices#civil" },
    { name: "Corporate Law", href: "/practices#corporate" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "Main Office | Second Floor, Sound Options Building, Mac Arthur Highway, Brgy. Ligtasan, Tarlac City, Tarlac 2300 Philippines",
    },
    {
      icon: MapPin,
      text: "Satellite Office | Champaca St.(At the back of RTC building), San Vicente, Tarlac City, Tarlac 2300 Philippines",
    },
    {
      icon: MapPin,
      text: "Manila Office | 7 Ofelia St. Brgy. Bahay Toro, Tandang Sora, Quezon City, Metro Manila 1106 Philippines (by appointment)",
    },
    {
      icon: Phone,
      text: "+63 908 813 4289",
      href: "tel:+639088134289",
    },
    {
      icon: Mail,
      text: "gobaluyotadion@gmail.com",
      href: "mailto:gobaluyotadion@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="relative bg-background/98 backdrop-blur-sm border-t">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="relative h-16 w-32">
              <Image
                src="/logos/logo clear.png"
                alt="Go Baluyot & Adion Law Office"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-muted-foreground/70 text-sm leading-relaxed">
              Committed to delivering exceptional legal services with integrity,
              expertise, and a client-focused approach.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Practice Areas</h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-muted-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <info.icon className="h-5 w-5 text-primary shrink-0 mt-1" />
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground/70 text-sm">
                      {info.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} Go Baluyot & Adion Law Office. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground/70 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground/70 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
