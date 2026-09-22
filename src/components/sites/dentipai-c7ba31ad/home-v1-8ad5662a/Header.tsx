"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinicInfo } from "@/data/clinicData";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/traitements", label: "Traitements" },
  { href: "/cas-cliniques", label: "Cas Cliniques" },
  { href: "/a-propos", label: "Le Cabinet" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5"
          : "bg-white py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Official Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="Dr Mahmoud Qalalwa - Orthodontiste Tunis"
              width={240}
              height={75}
              priority
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <ul className="flex items-center gap-6 text-[15px] text-[#070707]">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative py-1 transition-colors ${
                        active
                          ? "text-[#0e63f3] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0e63f3] after:rounded-full"
                          : "font-medium text-[#070707] hover:text-[#0e63f3]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA & Direct Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="flex items-center gap-2 text-[14px] font-semibold text-[#070707] hover:text-[#0e63f3] transition-colors py-2 px-3 rounded-full hover:bg-gray-100"
            >
              <svg className="w-4 h-4 text-[#0e63f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>{clinicInfo.phoneDisplay}</span>
            </a>

            <a
              href={clinicInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0e63f3] hover:bg-[#070707] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold transition-colors shadow-sm"
            >
              <span>Prendre RDV</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#070707] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu principal"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-[#070707] transition-all ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#070707] transition-all ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#070707] transition-all ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-5 pt-4 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <ul className="flex flex-col gap-2 text-[16px] text-[#070707]">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3.5 py-2 rounded-xl transition-all ${
                      active
                        ? "bg-[#e7effe] text-[#0e63f3] font-bold"
                        : "font-medium text-gray-800 hover:text-[#0e63f3] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800"
            >
              <svg className="w-4 h-4 text-[#0e63f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>Appel direct : {clinicInfo.phoneDisplay}</span>
            </a>

            <a
              href={clinicInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white text-sm font-semibold shadow-sm"
            >
              <span>Prendre RDV par WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
