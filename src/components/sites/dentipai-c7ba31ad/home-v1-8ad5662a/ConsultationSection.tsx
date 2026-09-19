import React from "react";
import Image from "next/image";
import { clinicInfo } from "@/data/clinicData";

export default function ConsultationSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-5">
        <div
          className="relative rounded-[36px] overflow-hidden bg-[#e7effe] p-8 sm:p-12 lg:p-16 border border-[#cfe0fd]"
          style={{
            backgroundImage: `url('/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/67231a7d778d2a69c3badaf8_appointment-pattern.svg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Doctor Image */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/67231c51c47b3843f2e23f8a_consultation-image.png"
                  alt="Bilan orthodontique Dr Mahmoud Qalalwa"
                  fill
                  loading="eager"
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
              <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
                Premier Rendez-vous & Diagnostic
              </span>
              <h2 className="text-[30px] sm:text-[40px] lg:text-[44px] font-bold text-[#070707] leading-[1.2] mb-5">
                Planifiez Votre Bilan Orthodontique Personnalisé
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#555555] leading-[1.65] mb-8">
                Lors de votre première consultation, le <strong>Dr Mahmoud Qalalwa</strong> réalise une analyse
                faciale et dentaire approfondie pour déterminer la stratégie la plus adaptée à vos attentes :
                gouttières transparentes invisibles, multi-attaches ou traitement interceptif pédiatrique.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={clinicInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="default-button bg-[#0e63f3] text-white hover:bg-[#070707] shadow-sm flex items-center gap-2"
                >
                  <span>Prendre RDV par WhatsApp</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="default-button outline border-[#070707] text-[#070707] hover:bg-[#070707] hover:text-white flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-[#0e63f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>Appeler : {clinicInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
