import type { Metadata } from "next";
import Header from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Header";
import Footer from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Footer";
import CtaSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/CtaSection";
import { treatmentsData, clinicInfo } from "@/data/clinicData";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Traitements Orthodontiques Tunis | Aligneurs & Bagues | Dr Mahmoud Qalalwa",
  description:
    "Découvrez les solutions d'orthodontie du Dr Mahmoud Qalalwa à Tunis : aligneurs invisibles, appareils multiattaches métalliques et céramiques, orthopédie des mâchoires pour enfants et adultes.",
  keywords: [
    "orthodontie invisible tunis",
    "aligneurs invisibles tunisie",
    "bagues metalliques tunisie",
    "bagues ceramiques tunis",
    "orthopedie dento faciale tunisie",
    "appareil dentaire adulte",
  ],
};

export default function TraitementsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#070707] font-plus-jakarta antialiased selection:bg-[#0e63f3] selection:text-white">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        {/* Page Hero Banner */}
        <section className="bg-gradient-to-b from-[#e7effe]/60 to-white py-14 sm:py-20 border-b border-gray-100">
          <div className="max-w-[1280px] mx-auto px-5 text-center">
            {/* Breadcrumb */}
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              <Link href="/" className="hover:text-[#0e63f3]">Accueil</Link>
              <span>/</span>
              <span className="text-[#0e63f3]">Traitements & Spécialités</span>
            </nav>

            <h1 className="text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-[#070707] tracking-tight leading-[1.15] mb-5 max-w-4xl mx-auto">
              Traitements Orthodontiques & Orthopédie Dento-Faciale à Tunis
            </h1>

            <p className="text-[17px] sm:text-[19px] text-[#555555] max-w-3xl mx-auto leading-relaxed mb-8">
              Le <strong>Dr Mahmoud Qalalwa</strong> met en œuvre les thérapeutiques les plus avancées pour corriger l'alignement dentaire, restaurer une occlusion fonctionnelle équilibrée et sublimer l'harmonie de votre visage.
            </p>

            {/* Quick Navigation Jump Anchors */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {treatmentsData.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="text-xs sm:text-sm font-semibold px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-[#0e63f3] hover:text-[#0e63f3] shadow-2xs transition-colors"
                >
                  {t.title.split("&")[0].trim()}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Treatments List */}
        <div className="py-16 sm:py-24 space-y-20 lg:space-y-28 max-w-[1280px] mx-auto px-5">
          {treatmentsData.map((treatment, idx) => (
            <article
              key={treatment.id}
              id={treatment.id}
              className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl border border-gray-100 bg-[#e7effe]">
                  {treatment.image && (
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0e63f3] shadow-xs">
                    ⏱ {treatment.duration}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0e63f3] bg-[#e7effe] px-3.5 py-1.5 rounded-full mb-3">
                  Spécialité Dr Mahmoud Qalalwa
                </div>

                <h2 className="text-[28px] sm:text-[34px] font-bold text-[#070707] tracking-tight leading-snug mb-3">
                  {treatment.title}
                </h2>

                <p className="text-[16px] text-gray-700 font-medium italic mb-5">
                  "{treatment.subtitle}"
                </p>

                <div className="space-y-3 text-[15px] text-[#555555] leading-relaxed mb-6">
                  {treatment.fullDescription.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Indications */}
                <div className="bg-[#f8faff] p-5 sm:p-6 rounded-2xl border border-gray-200/70 mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-3">
                    Dans quels cas est-ce indiqué ?
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
                    {treatment.indications.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0e63f3] font-bold">✓</span>
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {treatment.processSteps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs"
                    >
                      <span className="text-xs font-extrabold text-[#0e63f3]">
                        {step.step}
                      </span>
                      <h4 className="text-xs font-bold text-gray-900 mt-1 mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 leading-snug">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={clinicInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="default-button bg-[#0e63f3] text-white hover:bg-[#070707] text-sm py-2.5 px-6 shadow-sm"
                  >
                    Demander conseil pour ce traitement
                  </a>
                  <Link
                    href="/cas-cliniques"
                    className="text-xs sm:text-sm font-bold text-gray-700 hover:text-[#0e63f3] flex items-center gap-1.5 underline underline-offset-4"
                  >
                    <span>Voir les résultats avant/après associés</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Comparative Summary Table */}
        <section className="py-16 bg-[#f8faff] border-t border-b border-gray-200/70">
          <div className="max-w-[1280px] mx-auto px-5">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[#070707] mb-3">
                Tableau Comparatif des Solutions
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Aperçu synthétique pour vous aider à choisir la méthode idéale avec le Dr Mahmoud Qalalwa.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-gray-200">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/80 text-xs font-bold uppercase tracking-wider text-gray-600">
                    <th className="p-4 sm:p-5">Critère</th>
                    <th className="p-4 sm:p-5 text-[#0e63f3]">Aligneurs Invisibles</th>
                    <th className="p-4 sm:p-5">Bagues Céramiques</th>
                    <th className="p-4 sm:p-5">Bagues Métalliques</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-900">Visibilité</td>
                    <td className="p-4 sm:p-5 text-[#0e63f3] font-semibold">Quasi-invisible</td>
                    <td className="p-4 sm:p-5 text-gray-700">Très discrète</td>
                    <td className="p-4 sm:p-5 text-gray-700">Visible</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-900">Amovibilité</td>
                    <td className="p-4 sm:p-5 text-[#0e63f3] font-semibold">Oui (repas, brossage)</td>
                    <td className="p-4 sm:p-5 text-gray-700">Non (fixe)</td>
                    <td className="p-4 sm:p-5 text-gray-700">Non (fixe)</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-900">Confort buccal</td>
                    <td className="p-4 sm:p-5 text-[#0e63f3] font-semibold">Optimal, doux</td>
                    <td className="p-4 sm:p-5 text-gray-700">Bon</td>
                    <td className="p-4 sm:p-5 text-gray-700">Adaptation initiale requise</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-900">Durée moyenne</td>
                    <td className="p-4 sm:p-5 text-gray-700">6 à 18 mois</td>
                    <td className="p-4 sm:p-5 text-gray-700">14 à 24 mois</td>
                    <td className="p-4 sm:p-5 text-gray-700">12 à 24 mois</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-900">Public recommandé</td>
                    <td className="p-4 sm:p-5 text-gray-700">Adultes, ados assidus</td>
                    <td className="p-4 sm:p-5 text-gray-700">Adultes, lycéens</td>
                    <td className="p-4 sm:p-5 text-gray-700">Enfants, ados, cas complexes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
