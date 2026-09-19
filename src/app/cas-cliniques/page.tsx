import type { Metadata } from "next";
import Header from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Header";
import Footer from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Footer";
import CaseStudiesSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/CaseStudiesSection";
import CtaSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/CtaSection";
import { clinicInfo } from "@/data/clinicData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cas Cliniques Orthodontie Avant / Après Tunis | Dr Mahmoud Qalalwa",
  description:
    "Explorez notre galerie de cas cliniques réels traités par le Dr Mahmoud Qalalwa : aligneurs invisibles, encombrements dentaires, réalignements esthétiques et orthopédie des mâchoires.",
  keywords: [
    "cas avant apres orthodontie tunisie",
    "resultats appareil dentaire tunis",
    "avant apres aligneurs invisibles",
    "orthodontiste mongi slim avis",
    "diasteme avant apres orthodontiste tunis",
  ],
};

export default function CasCliniquesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#070707] font-plus-jakarta antialiased selection:bg-[#0e63f3] selection:text-white">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-b from-[#e7effe]/60 to-white py-14 sm:py-20 border-b border-gray-100">
          <div className="max-w-[1280px] mx-auto px-5 text-center">
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              <Link href="/" className="hover:text-[#0e63f3]">Accueil</Link>
              <span>/</span>
              <span className="text-[#0e63f3]">Cas Cliniques</span>
            </nav>

            <h1 className="text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-[#070707] tracking-tight leading-[1.15] mb-5 max-w-4xl mx-auto">
              Cas Cliniques & Transformations Avant / Après
            </h1>

            <p className="text-[17px] sm:text-[19px] text-[#555555] max-w-3xl mx-auto leading-relaxed mb-6">
              Découvrez en images la rigueur biomécanique et la finesse esthétique appliquées par le{" "}
              <strong>Dr Mahmoud Qalalwa</strong> au cabinet d'Aïn Zaghouan Nord. Chaque diagnostic est personnalisé pour des résultats stables et durables.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
              <span>🔒 Cas réels documentés et anonymisés avec l'accord des patients</span>
            </div>
          </div>
        </section>

        {/* Full Interactive Case Studies Gallery */}
        <CaseStudiesSection isFullPage={true} />

        {/* How We Evaluate Your Case Banner */}
        <section className="py-16 bg-[#f8faff] border-t border-b border-gray-100">
          <div className="max-w-[1000px] mx-auto px-5 text-center">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#070707] mb-4">
              Votre Cas Ressemble à l'un de ces Profils ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-[16px]">
              Ne laissez pas un encombrement, un décalage de mâchoire ou une récidive altérer votre sourire. Venez bénéficier d'un bilan d'évaluation au cabinet en face de l'Hôpital Mongi Slim.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={clinicInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="default-button bg-[#25D366] text-white hover:bg-[#20ba5a] flex items-center gap-2 shadow-sm font-semibold"
              >
                <span>Envoyer des photos pour pré-avis WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="default-button outline border-[#070707] text-[#070707] hover:bg-[#070707] hover:text-white font-semibold"
              >
                Prendre rendez-vous au cabinet
              </Link>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
