import React from "react";
import { clinicInfo } from "@/data/clinicData";

export default function LocationMapSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8faff]" id="localisation">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
            Localisation & Accès au Cabinet
          </span>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-bold text-[#070707] leading-[1.18] tracking-tight mb-4">
            Idéalement Situé à Aïn Zaghouan Nord
          </h2>
          <p className="text-[16px] text-[#555555] leading-[1.65]">
            Notre cabinet se trouve au 2ème étage de l'<strong>Immeuble Educatec</strong> (Bureau 1),
            juste en face de l'<strong>Hôpital Universitaire Mongi Slim</strong> sur l'axe GP9
            reliant Tunis à La Marsa.
          </p>
        </div>

        {/* Map & Coordinates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Map Column */}
          <div className="lg:col-span-7 bg-white rounded-[32px] overflow-hidden border border-gray-200/80 shadow-md min-h-[380px] flex flex-col group">
            <a
              href={clinicInfo.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full flex-1 min-h-[360px] block cursor-pointer"
              title="Cliquer pour ouvrir le cabinet du Dr Mahmoud Qalalwa sur Google Maps"
            >
              <iframe
                title="Plan d'accès Cabinet Dr Mahmoud Qalalwa Mongi Slim"
                src={clinicInfo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px] pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-[#070707] hover:text-[#0e63f3] text-xs font-bold px-3.5 py-2 rounded-xl shadow-md border border-gray-200/70 flex items-center gap-1.5 transition-transform group-hover:scale-105">
                <span>📍 Ouvrir l'adresse Google Maps</span>
                <span className="text-[#0e63f3]">↗</span>
              </div>
            </a>
            <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-semibold text-gray-600">
                📍 Repère : En face Hôpital Mongi Slim (Aïn Zaghouan Nord)
              </span>
              <a
                href={clinicInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0e63f3] hover:underline flex items-center gap-1"
              >
                <span>Ouvrir dans Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Contact Details & Neighborhoods Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Address Card */}
            <div className="bg-white p-7 rounded-[28px] border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#e7effe] text-[#0e63f3] flex items-center justify-center font-bold">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Adresse Précise</h3>
                  <p className="text-xs text-gray-500">Accessible par GP9</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                {clinicInfo.address}
              </p>
              <p className="text-xs text-[#0e63f3] font-medium mt-1">
                {clinicInfo.landmark}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {clinicInfo.neighborhood}, {clinicInfo.postalCode} {clinicInfo.city}, Tunisie
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-white p-7 rounded-[28px] border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#e7effe] text-[#0e63f3] flex items-center justify-center font-bold">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Contact Direct</h3>
                  <p className="text-xs text-gray-500">Réponse rapide assurée</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center justify-between">
                  <span className="text-gray-500">Téléphone cabinet :</span>
                  <a
                    href={`tel:${clinicInfo.phoneRaw}`}
                    className="font-bold text-[#070707] hover:text-[#0e63f3]"
                  >
                    {clinicInfo.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-gray-500">WhatsApp consultation :</span>
                  <a
                    href={clinicInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#25D366] hover:underline"
                  >
                    {clinicInfo.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-gray-500">Email :</span>
                  <a
                    href={`mailto:${clinicInfo.email}`}
                    className="font-medium text-gray-700 hover:text-[#0e63f3] text-xs"
                  >
                    {clinicInfo.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Catchment Area SEO Badges */}
            <div className="bg-[#e7effe]/70 p-6 rounded-[28px] border border-[#cfe0fd]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0e63f3] mb-3">
                Zones desservies à proximité immédiate
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "Aïn Zaghouan Nord & Sud",
                  "La Marsa (5 min)",
                  "Les Berges du Lac 2 (5 min)",
                  "L'Aouina (4 min)",
                  "Carthage & Le Kram",
                  "La Soukra & Chotrana",
                  "Tunis Centre & Ennasr",
                ].map((zone, i) => (
                  <span
                    key={i}
                    className="bg-white text-gray-800 font-medium px-3 py-1.5 rounded-full shadow-2xs"
                  >
                    📍 {zone}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
