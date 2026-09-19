import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckmarkIcon } from "../shared/icons";
import { clinicInfo } from "@/data/clinicData";

export default function OurStorySection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="a-propos-preview">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Mission Banner Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[620px] rounded-[32px] overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/images/dr-mahmoud-qalalwa-hero.jpg"
                alt="Cabinet d'orthodontie Dr Mahmoud Qalalwa à Tunis"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#0e63f3] uppercase tracking-wider">
                    Expertise Reconnue
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    Orthodontie & Orthopédie Dento-Faciale
                  </div>
                </div>
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
                Le Cabinet & Le Praticien
              </span>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-bold text-[#070707] leading-[1.18] tracking-tight mb-5">
                L'Excellence Orthodontique au Service de Votre Sourire
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#555555] leading-[1.65]">
                Spécialiste qualifié en orthodontie et orthopédie dento-faciale, le{" "}
                <strong className="text-gray-900">{clinicInfo.doctorName}</strong> vous accueille
                au sein de son cabinet situé à Aïn Zaghouan Nord. Alliant maîtrise biomécanique,
                technologies numériques d'alignement 3D et sens esthétique aiguisé, il conçoit des
                plans de traitement sur-mesure pour chaque patient.
              </p>
            </div>

            {/* Checklist items */}
            <ul className="flex flex-col gap-4 mb-8 text-[15px] sm:text-[16px] text-[#070707] font-medium">
              <li className="flex items-start gap-3.5">
                <CheckmarkIcon className="w-5 h-5 shrink-0 mt-0.5 text-[#0e63f3]" />
                <span>
                  <strong>Formation d'excellence :</strong> Cursus en chirurgie dentaire et spécialisation en orthodontie à la <em>Faculté de Médecine Dentaire de Monastir (FMDM)</em>.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <CheckmarkIcon className="w-5 h-5 shrink-0 mt-0.5 text-[#0e63f3]" />
                <span>
                  <strong>Prise en charge complète :</strong> Orthodontie invisible (aligneurs), bagues métalliques et esthétiques en céramique, orthopédie des mâchoires.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <CheckmarkIcon className="w-5 h-5 shrink-0 mt-0.5 text-[#0e63f3]" />
                <span>
                  <strong>Emplacement stratégique :</strong> Immeuble Educatec, 2ème étage, Bureau 1, en face directe de l'Hôpital Mongi Slim (accès direct La Marsa, Lac 2, GP9).
                </span>
              </li>
            </ul>

            {/* Doctor Info & Read More Block */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#cfe0fd] shrink-0 bg-[#e7effe] flex items-center justify-center">
                  <Image
                    src="/images/dr-mahmoud-qalalwa-hero.jpg"
                    alt={clinicInfo.doctorName}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[18px] font-bold text-[#070707]">
                    {clinicInfo.doctorName}
                  </h3>
                  <p className="text-[13px] text-[#0e63f3] font-medium">
                    Spécialiste Orthodontie • FMDM Monastir
                  </p>
                </div>
              </div>

              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0e63f3] hover:text-[#070707] transition-colors py-2"
              >
                <span>En savoir plus sur le parcours</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
