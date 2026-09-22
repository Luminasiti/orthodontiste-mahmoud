"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudiesData } from "@/data/clinicData";
import { CaseStudyItem } from "@/types/dentipai";

interface CaseStudiesSectionProps {
  isFullPage?: boolean;
}

export default function CaseStudiesSection({ isFullPage = false }: CaseStudiesSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredCases =
    selectedFilter === "all"
      ? caseStudiesData
      : caseStudiesData.filter((item) => {
          if (selectedFilter === "chirurgie") return item.id.includes("ortho-chirurgical");
          if (selectedFilter === "encombrement") return item.category === "encombrement";
          if (selectedFilter === "ectopie") return item.id.includes("canine-ectopique");
          if (selectedFilter === "bagues") return item.category === "bagues";
          return true;
        });

  return (
    <section className="py-20 lg:py-28 bg-white" id="cas-cliniques">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
              Dossiers Médicaux & Résultats
            </span>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-bold text-[#070707] leading-[1.18] tracking-tight mb-4">
              Cas Cliniques Réels : Avant & Après
            </h2>
            <p className="text-[16px] text-[#555555] leading-[1.65]">
              Découvrez les cas cliniques traités et documentés par le{" "}
              <strong>Dr Mahmoud Qalalwa</strong> au Service d'Orthopédie Dento-Faciale.
              Cliquez sur un cas pour consulter l'analyse céphalométrique, les étapes de traitement et les documents de fin de traitement.
            </p>
          </div>

          {!isFullPage && (
            <Link
              href="/cas-cliniques"
              className="default-button outline border-[#070707] text-[#070707] hover:bg-[#0e63f3] hover:border-[#0e63f3] hover:text-white shrink-0 self-start md:self-auto font-semibold"
            >
              Voir Tous les Cas Cliniques ({caseStudiesData.length})
            </Link>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {[
            { id: "all", label: `Tous les Cas (${caseStudiesData.length})` },
            { id: "chirurgie", label: "Chirurgie Orthognathique (Cas 1)" },
            { id: "encombrement", label: "Encombrement & DDM (Cas 2)" },
            { id: "ectopie", label: "Canine Ectopique (Cas 3)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === tab.id
                  ? "bg-[#0e63f3] text-white shadow-md shadow-blue-500/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {filteredCases.map((caseItem: CaseStudyItem) => (
            <article
              key={caseItem.id}
              className="lg:col-span-12 bg-[#f8faff] rounded-[36px] overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header with Before / After comparison */}
                <div className="p-6 sm:p-8 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0e63f3] text-white shadow-xs">
                        {caseItem.highlightBadge}
                      </span>
                      <span className="text-xs font-semibold text-gray-600 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                        🎓 {caseItem.institution?.split("—")[0].trim()}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-gray-500">
                      ⏱ {caseItem.duration}
                    </span>
                  </div>

                  {/* Before / After Photo Comparison Cards */}
                  <Link
                    href={`/cas-cliniques/${caseItem.slug}`}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 group/img block"
                  >
                    {/* Before */}
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 border-2 border-gray-200 shadow-sm">
                      <Image
                        src={caseItem.beforeImage}
                        alt={`Avant traitement - ${caseItem.title}`}
                        fill
                        className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                        Avant Traitement
                      </span>
                    </div>

                    {/* After */}
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 border-2 border-[#0e63f3] shadow-md">
                      <Image
                        src={caseItem.afterImage}
                        alt={`Après traitement - ${caseItem.title}`}
                        fill
                        className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-3 left-3 bg-[#0e63f3] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
                        Résultat Final
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Case Description */}
                <div className="px-6 sm:px-8 py-2 mb-4">
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#070707] mb-2 leading-snug group-hover:text-[#0e63f3] transition-colors">
                    <Link href={`/cas-cliniques/${caseItem.slug}`}>
                      {caseItem.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-gray-500 flex flex-wrap items-center gap-2">
                    <span>👤 {caseItem.patientProfile}</span>
                    <span>•</span>
                    <span className="text-[#0e63f3] font-bold">{caseItem.technique}</span>
                  </p>
                </div>
              </div>

              {/* Action Link to Full Case Study Page */}
              <div className="px-6 sm:px-8 py-5 border-t border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white">
                <div className="text-xs text-gray-600">
                  <strong>Praticien :</strong> {caseItem.practitioner} • {caseItem.institution}
                </div>
                <Link
                  href={`/cas-cliniques/${caseItem.slug}`}
                  className="default-button bg-[#0e63f3] hover:bg-[#070707] text-white text-xs sm:text-sm py-3 px-6 shadow-sm flex items-center gap-2 font-semibold self-stretch sm:self-auto text-center justify-center"
                >
                  <span>Consulter le Dossier Clinique Complet (Radios, Céphalométrie & Étapes)</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Ethical disclaimer note */}
        <div className="mt-12 p-4 bg-gray-50 rounded-2xl border border-gray-200/60 text-center text-xs text-gray-500 max-w-2xl mx-auto">
          ⚖️ Photographies cliniques issues des dossiers hospitalo-universitaires de la Faculté de Médecine Dentaire de Monastir, publiées avec le plein consentement pour l'information des patients.
        </div>
      </div>
    </section>
  );
}
