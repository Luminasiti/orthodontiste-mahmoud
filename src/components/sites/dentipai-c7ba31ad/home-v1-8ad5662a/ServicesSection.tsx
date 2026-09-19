import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceArrow } from "../shared/icons";
import { treatmentsData } from "@/data/clinicData";

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#e7effe]" id="traitements">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
              Soins & Thérapeutiques
            </span>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-bold text-[#070707] leading-[1.18] tracking-tight">
              Nos Traitements Orthodontiques à Tunis
            </h2>
          </div>
          <Link
            href="/traitements"
            className="default-button outline border-[#070707] text-[#070707] hover:bg-[#0e63f3] hover:border-[#0e63f3] hover:text-white shrink-0 self-start sm:self-auto font-semibold"
          >
            Guide Complet des Traitements
          </Link>
        </div>

        {/* Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatmentsData.map((treatment) => (
            <div
              key={treatment.id}
              className="group bg-white rounded-[32px] p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-300 border border-gray-100/80 overflow-hidden"
            >
              <div>
                {/* Treatment Photo Banner from public/images */}
                {treatment.image && (
                  <Link
                    href={`/traitements#${treatment.id}`}
                    className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gray-100 shadow-2xs block"
                  >
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-[#0e63f3] shadow-xs">
                      ⏱ {treatment.duration.split(" ")[0]} {treatment.duration.split(" ")[1]}
                    </div>
                  </Link>
                )}

                {/* Title and Arrow link */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-[#070707] group-hover:text-[#0e63f3] transition-colors leading-snug">
                    <Link href={`/traitements#${treatment.id}`}>
                      {treatment.title}
                    </Link>
                  </h3>
                  <Link
                    href={`/traitements#${treatment.id}`}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#070707] group-hover:border-[#0e63f3] group-hover:bg-[#0e63f3] group-hover:text-white transition-all duration-300 shrink-0 mt-0.5"
                    aria-label={`En savoir plus sur ${treatment.title}`}
                  >
                    <ServiceArrow className="w-4 h-4" />
                  </Link>
                </div>

                {/* Summary */}
                <p className="text-[14px] sm:text-[15px] text-[#555555] leading-[1.6] mb-5">
                  {treatment.summary}
                </p>
              </div>

              {/* Advantage Badges */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                {treatment.advantages.slice(0, 2).map((adv, i) => (
                  <span
                    key={i}
                    className="text-[11px] text-[#0e63f3] bg-[#e7effe] font-medium px-2.5 py-1 rounded-md"
                  >
                    ✓ {adv}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
