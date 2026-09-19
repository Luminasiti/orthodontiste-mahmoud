import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroArrow } from "../shared/icons";
import { clinicInfo } from "@/data/clinicData";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#f8faff] to-white">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Local SEO Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-[#e7effe] text-[#0e63f3] text-[13px] font-semibold px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0e63f3] animate-pulse" />
              <span>Cabinet à Aïn Zaghouan Nord • En face Hôpital Mongi Slim</span>
            </div>

            <h1 className="text-[38px] sm:text-[50px] lg:text-[58px] font-bold text-[#070707] leading-[1.14] tracking-tight mb-6">
              Orthodontie & Orthopédie Dento-Faciale
              <span className="inline-flex items-center justify-center align-middle mx-2 sm:mx-3">
                <Image
                  src="/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/6721b77d5666f763dd59dcc5_hero-title-highlight.png"
                  alt="Étoile brillance sourire"
                  width={52}
                  height={62}
                  className="w-8 h-10 sm:w-11 sm:h-13 object-contain inline-block"
                  priority
                />
              </span>
              à Tunis
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#555555] leading-[1.65] max-w-[580px] mb-8 font-normal">
              <strong className="text-[#070707] font-semibold">{clinicInfo.doctorName}</strong>, diplômé de la{" "}
              <span className="text-[#0e63f3] font-semibold">{clinicInfo.university}</span>.
              Traitements esthétiques et fonctionnels sur-mesure par{" "}
              <strong>aligneurs invisibles</strong> et{" "}
              <strong>appareils multiattaches métalliques et céramiques</strong> pour enfants, adolescents et adultes.
            </p>

            {/* Action Row & Local Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
              <a
                href={clinicInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="default-button bg-[#0e63f3] text-white hover:bg-[#070707] shadow-sm flex items-center gap-2"
              >
                <span>Prendre Rendez-vous</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <Link
                href="/cas-cliniques"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#070707] text-[#070707] font-semibold text-[15px] hover:bg-[#070707] hover:text-white transition-colors"
              >
                <span>Voir les Cas Cliniques</span>
              </Link>

              <div className="flex items-center gap-3 pt-2 sm:pt-0">
                {/* Overlapping Avatars */}
                <div className="flex items-center -space-x-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xs">
                    <Image
                      src="/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/6721b77d854bc296cb08f727_satisfied-client-avatar-1.png"
                      alt="Patient satisfait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xs">
                    <Image
                      src="/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/6721b77d26059311a03dd6f9_satisfied-client-avatar-2.png"
                      alt="Patient satisfait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xs">
                    <Image
                      src="/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/6721b77d5666f763dd59dcf4_satisfied-client-avatar-3.png"
                      alt="Patient satisfait"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-[17px] font-bold text-[#070707] leading-tight flex items-center gap-1">
                    ★★★★★ <span className="text-[14px] text-gray-700 font-semibold">5.0</span>
                  </span>
                  <span className="text-[13px] text-[#666666] font-medium leading-tight">
                    Sourires transformés à Tunis
                  </span>
                </div>
              </div>
            </div>

            {/* Specialty Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {/* Card 1: Aligneurs Invisibles */}
              <div className="bg-[#cfe0fd] rounded-[28px] p-6 flex flex-col justify-between hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0e63f3] block mb-1">
                      Technologie Moderne
                    </span>
                    <h2 className="text-[19px] sm:text-[20px] font-bold text-[#070707] leading-[1.25]">
                      Orthodontie Invisible (Aligneurs)
                    </h2>
                  </div>
                  <Link
                    href="/traitements#orthodontie-invisible"
                    className="w-10 h-10 rounded-full border border-[#070707] flex items-center justify-center text-[#070707] group-hover:bg-[#070707] group-hover:text-white transition-colors shrink-0"
                    aria-label="Détails orthodontie invisible"
                  >
                    <HeroArrow className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Gouttières transparentes amovibles et confortables sans bagues métalliques.
                </p>
                <div className="relative w-full h-28">
                  <Image
                    src="/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/6721b77ed4d96eb89415d625_hero-checkup-image-1.png"
                    alt="Aligneurs transparents Dr Qalalwa"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>

              {/* Card 2: Appareils Multi-Attaches */}
              <div className="bg-[#cfe0fd] rounded-[28px] p-6 flex flex-col justify-between hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0e63f3] block mb-1">
                      Précision Biomécanique
                    </span>
                    <h2 className="text-[19px] sm:text-[20px] font-bold text-[#070707] leading-[1.25]">
                      Bagues Métalliques & Céramiques
                    </h2>
                  </div>
                  <Link
                    href="/traitements#bagues-metalliques"
                    className="w-10 h-10 rounded-full border border-[#070707] flex items-center justify-center text-[#070707] group-hover:bg-[#070707] group-hover:text-white transition-colors shrink-0"
                    aria-label="Détails bagues orthodontiques"
                  >
                    <HeroArrow className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Correction experte des malocclusions, encombrements et décalages squelettiques.
                </p>
                <div className="relative w-full h-28">
                  <Image
                    src="/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/6721b77f113be4f1db345036_hero-checkup-image-2.png"
                    alt="Appareil dentaire multiattaches"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Column with Doctor Credential Floating Badges */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[620px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/dr-mahmoud-qalalwa-hero.jpg"
                alt="Dr Mahmoud Qalalwa Orthodontiste à Tunis dans son cabinet dentaire"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge 1: University */}
              <div className="absolute top-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0e63f3] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  🎓
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0e63f3] uppercase tracking-wider">
                    Diplôme & Spécialisation
                  </div>
                  <div className="text-sm font-bold text-gray-900 leading-snug">
                    Faculté de Médecine Dentaire de Monastir
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Location landmark */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#070707] text-white flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Localisation Cabinet
                  </div>
                  <div className="text-sm font-bold text-gray-900 leading-snug">
                    Immeuble Educatec • En face Hôpital Mongi Slim
                  </div>
                  <div className="text-xs text-gray-600">
                    Aïn Zaghouan Nord, Tunis (Axe GP9 La Marsa)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
