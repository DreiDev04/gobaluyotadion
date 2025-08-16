import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Attorneys", href: "/attorneys" },
    { name: "Practice Areas", href: "/practices" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "Main Office | 2F Sound Options Bldg., Mac Arthur Hwy, Brgy. Ligtasan, Tarlac City 2300 Philippines",
    },
    {
      icon: MapPin,
      text: "Satellite Office | Champaca St. (Behind RTC Bldg.), San Vicente, Tarlac City 2300 Philippines",
    },
    {
      icon: MapPin,
      text: "Manila Office | 7 Ofelia St., Brgy. Bahay Toro, Tandang Sora, Quezon City 1106 Philippines (by appointment)",
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
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-background border-t">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="relative h-14 w-36">
              <Image
                src="/logos/logo clear.png"
                alt="Go Baluyot & Adion Law Office"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
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
                  aria-label={social.label}
                  className="p-2 rounded-full border border-muted-foreground/20 hover:bg-primary hover:text-white transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-base mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <info.icon className="h-5 w-5 text-primary shrink-0 mt-1" />
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-muted-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Go Baluyot & Adion Law Office. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
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
