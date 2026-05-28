import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavbarDemo } from "@/components/sections/NavbarDemo";
import Footer from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Go Baluyot & Adion Law Office",
  description:
    "Premier Law Firm in Tarlac, Philippines - Expert Legal Services in Litigation, Corporate Law, Labor Law, Intellectual Property, Real Estate, Taxation, and Notarial Services.",
  icons: {
    icon: "/logos/tight-logo.png",
  },
  keywords: [
    "law firm",
    "legal services",
    "Philippines",
    "lawyers",
    "attorneys",
    "Go Baluyot & Adion",
    "tarlac law firm",
  ],
  authors: [{ name: "John Andrei" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${garamond.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarDemo />
          <main className="min-h-screen fade-in">
            <div className="sm:h-20 sm:bg-primary sm:dark:bg-neutral-950/80" />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
