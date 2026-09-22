import React from "react";
import { clinicInfo } from "@/data/clinicData";

export default function CtaSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-5">
        <div
          className="relative bg-[#e7effe] rounded-[36px] overflow-hidden px-6 py-16 sm:px-12 sm:py-20 lg:py-24 text-center border border-blue-200/70 shadow-xl"
          style={{
            backgroundImage: `url('/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/672897d143ac167d70b2e5d9_cta-pattern.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "#e7effe",
          }}
        >
          <div className="relative z-10 max-w-[820px] mx-auto flex flex-col items-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0e63f3] bg-white px-4 py-1.5 rounded-full mb-4 shadow-xs border border-blue-200/60">
              Aïn Zaghouan Nord • Tunis
            </span>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold text-[#070707] leading-[1.15] tracking-tight mb-5">
              Prêt à Révéler la Beauté et la Santé de Votre Sourire ?
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#374151] leading-[1.65] max-w-[640px] mb-8 font-normal">
              Prenez contact avec le <strong className="text-[#070707] font-semibold">Dr Mahmoud Qalalwa</strong> pour un bilan orthodontique complet.
              Notre équipe vous accompagne avec écoute et bienveillance au sein de notre cabinet en face de l'Hôpital Mongi Slim.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={clinicInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="default-button bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold flex items-center gap-2 shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.306C8.42 21.528 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.273c-1.636 0-3.158-.458-4.462-1.254l-.32-.195-2.961.776.79-2.887-.214-.341C3.967 15.018 3.5 13.563 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
                </svg>
                <span>Écrire sur WhatsApp</span>
              </a>

              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="default-button bg-[#0e63f3] hover:bg-[#070707] text-white font-semibold flex items-center gap-2 transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>Appeler le {clinicInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
