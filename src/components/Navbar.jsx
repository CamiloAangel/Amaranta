import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconHome,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandGmail,
} from "@tabler/icons-react";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#top",
    },
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/573147733595?text=Hola%20quiero%20información%20de%20tu%20trabajo",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/studiocambelt",
    },
    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:studiocambelt@gmail.com",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-center h-20">
        <FloatingDock mobileClassName="translate-x-40" items={links} />
      </div>
    </nav>
  );
}
