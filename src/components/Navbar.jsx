"use client";
import { IconBrandWhatsapp, IconBrandInstagram } from "@tabler/icons-react";
import {
  Navbar as BaseNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/resizable-navbar";
import { useState } from "react";

export function SiteNavbar() {
  const navItems = [
    {
      name: "Procedimientos",
      link: "#features",
    },
    {
      name: "Precios",
      link: "#pricing",
    },
    {
      name: "Contacto",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <BaseNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/573XXXXXXXXX?text=Hola%20doc,%20estoy%20interesado%20en%20tus%20servicios"
              target="_blank"
              className="p-2 rounded-full hover:bg-black/10 transition"
            >
              <IconBrandWhatsapp size={22} />
            </a>

            <a
              href="https://instagram.com/TU_INSTAGRAM"
              target="_blank"
              className="p-2 rounded-full hover:bg-black/10 transition"
            >
              <IconBrandInstagram size={22} />
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full rounded-md px-2 py-2 text-neutral-700 dark:text-neutral-300"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-4 flex w-full flex-col gap-3">
              <a
                href="https://wa.me/573000000000?text=Hola%20doctora,%20estoy%20interesado%20en%20tus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-md border border-neutral-300 px-4 py-2 text-center text-sm font-semibold text-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
              >
                WhatsApp
              </a>

              <a
                href="https://instagram.com/TU_USUARIO"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-md border border-neutral-300 px-4 py-2 text-center text-sm font-semibold text-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
              >
                Instagram
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </BaseNavbar>
      {/* Navbar */}
    </div>
  );
}
