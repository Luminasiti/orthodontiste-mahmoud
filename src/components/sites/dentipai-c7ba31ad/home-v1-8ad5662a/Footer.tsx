"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicData";
import { ScrollToTopArrow } from "../shared/icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-20 pb-12 bg-[#070707] text-white">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-gray-800">
          {/* Brand & Doctor Credentials Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-5 block group">
              <Image
                src="/images/logo-white.png"
                alt="Dr Mahmoud Qalalwa - Orthodontiste Tunis"
                width={240}
                height={75}
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-sm text-gray-400 leading-[1.7] mb-6 max-w-[340px]">
              Cabinet spécialisé en orthodontie et orthopédie dento-faciale. Traitements esthétiques et fonctionnels par aligneurs invisibles et attaches multi-attaches.
            </p>

            <div className="text-xs text-gray-400 space-y-1.5 bg-gray-900/70 p-4 rounded-2xl border border-gray-800 w-full max-w-[340px]">
              <p className="font-bold text-white flex items-center gap-1.5">
                <span>📍</span>
                <span>{clinicInfo.building}, {clinicInfo.floor}</span>
              </p>
              <p className="text-gray-400">{clinicInfo.landmark}</p>
              <p className="text-gray-400">{clinicInfo.neighborhood}, {clinicInfo.city} (CP {clinicInfo.postalCode})</p>
            </div>
          </div>

          {/* Navigation Pages */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-[16px] font-bold text-white mb-6 uppercase tracking-wider text-xs text-[#0e63f3]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 text-[14px] text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/traitements" className="hover:text-white transition-colors">
                  Traitements
                </Link>
              </li>
              <li>
                <Link href="/cas-cliniques" className="hover:text-white transition-colors text-[#0e63f3] font-semibold">
                  Cas Cliniques Avant/Après
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  Le Dr Mahmoud Qalalwa
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments Links */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-[16px] font-bold text-white mb-6 uppercase tracking-wider text-xs text-[#0e63f3]">
              Traitements Phares
            </h4>
            <ul className="flex flex-col gap-3 text-[14px] text-gray-400">
              <li>
                <Link href="/traitements#orthodontie-invisible" className="hover:text-white transition-colors">
                  Orthodontie Invisible (Aligneurs)
                </Link>
              </li>
              <li>
                <Link href="/traitements#bagues-metalliques" className="hover:text-white transition-colors">
                  Multi-Attaches Métalliques
                </Link>
              </li>
              <li>
                <Link href="/traitements#bagues-ceramiques" className="hover:text-white transition-colors">
                  Attaches Céramiques Esthétiques
                </Link>
              </li>
              <li>
                <Link href="/traitements#orthopedie-dento-faciale" className="hover:text-white transition-colors">
                  Orthopédie Enfant & Ado
                </Link>
              </li>
              <li>
                <Link href="/traitements#orthodontie-adulte" className="hover:text-white transition-colors">
                  Orthodontie de l'Adulte
                </Link>
              </li>
              <li>
                <Link href="/traitements#contention-stabilisation" className="hover:text-white transition-colors">
                  Contention & Stabilisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-[16px] font-bold text-white mb-6 uppercase tracking-wider text-xs text-[#0e63f3]">
              Horaires & Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="text-gray-500 text-xs uppercase">Téléphone du cabinet :</p>
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="font-bold text-white hover:text-[#0e63f3] text-base"
                >
                  {clinicInfo.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase">WhatsApp consultation :</p>
                <a
                  href={clinicInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#25D366] hover:underline"
                >
                  +216 28 361 705
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase">Email :</p>
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="text-xs text-gray-300 hover:text-white"
                >
                  {clinicInfo.email}
                </a>
              </div>

              <div className="pt-2 border-t border-gray-800">
                <p className="text-gray-500 text-xs">Lun - Ven : 09h00 - 18h00</p>
                <p className="text-gray-500 text-xs">Samedi : 09h00 - 14h00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO Catchment Sub-footer */}
        <div className="py-6 border-b border-gray-800/60 text-xs text-gray-400 flex flex-wrap items-center justify-between gap-4">
          <div>
            <strong className="text-gray-300">Zone de consultation :</strong> Aïn Zaghouan Nord & Sud, La Marsa, Les Berges du Lac 2, L'Aouina, Carthage, Sidi Bou Saïd, La Soukra, Tunis.
          </div>
          <div>
            <span className="text-gray-500">Repère : En face Hôpital Universitaire Mongi Slim (GP9)</span>
          </div>
        </div>

        {/* Bottom Bar & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© {new Date().getFullYear()} Dr Mahmoud Qalalwa — Tous droits réservés. Ordre des Médecins Dentistes de Tunisie.</p>
            <span className="hidden sm:inline text-gray-700">|</span>
            <p>
              Website realized by{" "}
              <a
                href="https://www.luminasiti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white font-medium underline underline-offset-2 transition-colors"
              >
                Luminasiti
              </a>
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:border-[#0e63f3] hover:bg-[#0e63f3] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Remonter en haut de page"
          >
            <ScrollToTopArrow className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
