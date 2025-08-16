"use client";
import { cn } from "@/lib/utils";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header = () => {
  const navList = [
    { route: "/", name: "Home" },
    { route: "/about", name: "About" },
    { route: "/attorneys", name: "Our Attorneys" },
    { route: "/practices", name: "Practice Area" },
    { route: "/contact", name: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed h-16 sm:h-20 w-full px-4 sm:px-8 flex items-center justify-between z-50",
        "bg-white/30 backdrop-blur-lg border-b border-border shadow-md"
      )}
    >
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
        >
          <Image src="/logos/column.png" alt="logo" width={80} height={50} />
          <div
            className="flex flex-col items-center text-base"
            style={{ fontFamily: "var(--font-garamond)" }}
          >
            <p className="text-white ">GO BALUYOT & ADION</p>
            <p className="text-secondary">—LAW OFFICE—</p>
          </div>
        </Link>
      </div>

      <nav aria-label="Main Navigation" className="hidden sm:block">
        <ul className="flex gap-8">
          {navList.map((item) => (
            <li key={item.route}>
              <Link
                href={item.route}
                className="relative text-sm font-medium hover:text-primary transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Mobile Navigation" className="sm:hidden">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Menu className="w-5 h-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-screen">
            <DrawerHeader className="flex flex-col items-center mb-10">
              <Image
                src="/logos/logo clear.png"
                alt="Go Baluyot & Adion Logo"
                width={60}
                height={60}
                className="mb-4"
              />
              <DrawerTitle className="text-xl font-semibold mb-2">
                Go Baluyot & Adion
              </DrawerTitle>
              <DrawerDescription className="flex items-center gap-2 text-primary">
                <Phone className="w-4 h-4" /> +63 908 813 4289
              </DrawerDescription>
              <DrawerDescription className="text-muted-foreground">
                gobaluyotadion@gmail.com
              </DrawerDescription>
            </DrawerHeader>
            <ul className="flex flex-col gap-6 justify-center items-center text-lg">
              {navList.map((item) => (
                <DrawerClose asChild key={item.route}>
                  <Link
                    href={item.route}
                    className="focus:outline-none relative px-4 py-2 hover:text-primary transition-colors"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute inset-0 w-full h-full bg-primary/5 rounded-lg transform scale-0 transition-transform hover:scale-100" />
                  </Link>
                </DrawerClose>
              ))}
            </ul>
          </DrawerContent>
        </Drawer>
      </nav>

      <div className="text-sm hidden sm:flex items-center gap-4">
        <Link
          href="tel:+639088134289"
          className="flex items-center gap-1 hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-primary/5"
        >
          <Phone className="w-4 h-4" /> +63 908 813 4289
        </Link>
        <div className="w-px h-6 bg-border" />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
