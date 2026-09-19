import type { Metadata } from "next";
import Header from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Header";
import Footer from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Footer";
import CtaSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/CtaSection";
import LocationMapSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/LocationMapSection";
import { clinicInfo } from "@/data/clinicData";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dr Mahmoud Qalalwa | Orthodontiste Tunis - Aïn Zaghouan Nord | Le Cabinet",
  description:
    "Découvrez le parcours du Dr Mahmoud Qalalwa, spécialiste en orthodontie et orthopédie dento-faciale diplômé de la Faculté de Médecine Dentaire de Monastir (FMDM). Cabinet à Aïn Zaghouan Nord.",
  keywords: [
    "docteur mahmoud qalalwa",
    "orthodontiste fmdm monastir",
    "specialiste orthodontie tunis",
    "cabinet orthodontie ain zaghouan nord",
    "hopital mongi slim orthodontiste",
  ],
};

export default function AProposPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#070707] font-plus-jakarta antialiased selection:bg-[#0e63f3] selection:text-white">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#e7effe]/60 to-white py-14 sm:py-20 border-b border-gray-100">
          <div className="max-w-[1280px] mx-auto px-5 text-center">
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              <Link href="/" className="hover:text-[#0e63f3]">Accueil</Link>
              <span>/</span>
              <span className="text-[#0e63f3]">Le Cabinet & Dr Mahmoud Qalalwa</span>
            </nav>

            <h1 className="text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-[#070707] tracking-tight leading-[1.15] mb-5 max-w-4xl mx-auto">
              Dr Mahmoud Qalalwa & L'Équipe du Cabinet
            </h1>

            <p className="text-[17px] sm:text-[19px] text-[#555555] max-w-3xl mx-auto leading-relaxed">
              Une pratique de l'orthodontie fondée sur la rigueur universitaire, l'innovation technologique et une approche humaine et bienveillante de chaque patient.
            </p>
          </div>
        </section>

        {/* Doctor Bio & University Presentation */}
        <section className="py-16 sm:py-24 max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-[#e7effe]">
                <Image
                  src="/images/dr-mahmoud-qalalwa-hero.jpg"
                  alt="Dr Mahmoud Qalalwa Orthodontiste à Tunis"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/40">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0e63f3]">
                    Diplôme d'État
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    Faculté de Médecine Dentaire de Monastir (FMDM)
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
                Biographie & Cursus
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#070707] leading-tight mb-6">
                Une Vocation Consacrée à l'Harmonie Dentaire & Faciale
              </h2>

              <div className="space-y-4 text-[16px] text-[#555555] leading-relaxed mb-8">
                <p>
                  Le <strong>Dr Mahmoud Qalalwa</strong> a effectué l'intégralité de ses études de chirurgie dentaire puis sa spécialisation clinique en orthodontie et orthopédie dento-faciale au sein de la prestigieuse <strong>Faculté de Médecine Dentaire de Monastir (FMDM)</strong>, pôle académique de référence en Tunisie.
                </p>
                <p>
                  Fort d'une formation hospitalo-universitaire exigeante, il maîtrise les aspects les plus pointus du déplacement dentaire : de l'interception précoce chez le jeune enfant jusqu'aux cas adultes complexes associant parodontie et prothèse.
                </p>
                <p>
                  Passionné par les progrès de la dentisterie numérique, le Dr Qalalwa intègre quotidiennement la planification 3D et les aligneurs transparents pour offrir des alternatives discrètes et ultra-précises aux appareils traditionnels.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="p-4 bg-[#f8faff] rounded-2xl border border-gray-200/70">
                  <div className="text-2xl mb-1">🎓</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Expertise FMDM</h3>
                  <p className="text-xs text-gray-600">Spécialiste qualifié en orthodontie et orthopédie dento-faciale.</p>
                </div>

                <div className="p-4 bg-[#f8faff] rounded-2xl border border-gray-200/70">
                  <div className="text-2xl mb-1">✨</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Esthétique & 3D</h3>
                  <p className="text-xs text-gray-600">Aligneurs invisibles sur-mesure et attaches céramiques.</p>
                </div>

                <div className="p-4 bg-[#f8faff] rounded-2xl border border-gray-200/70">
                  <div className="text-2xl mb-1">🤝</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Écoute & Suivi</h3>
                  <p className="text-xs text-gray-600">Accompagnement attentif et personnalisé à chaque séance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Clinic Environment */}
        <section className="py-16 bg-[#f8faff] border-t border-b border-gray-200/70">
          <div className="max-w-[1280px] mx-auto px-5">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
                Cadre de Soins & Hygiène
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#070707] mb-4">
                Un Cabinet Pensé pour Votre Confort & Sécurité
              </h2>
              <p className="text-gray-600 text-base">
                Situé dans l&apos;<strong>{clinicInfo.building}</strong> ({clinicInfo.floor}) à {clinicInfo.neighborhood}, {clinicInfo.landmark}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#e7effe] text-[#0e63f3] flex items-center justify-center text-xl mb-6">
                  🔬
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Plateau Technique Moderne
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Planification numérique 3D et empreintes optiques de haute précision pour un confort optimal sans pâte dentaire désagréable.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#e7effe] text-[#0e63f3] flex items-center justify-center text-xl mb-6">
                  🛡️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Stérilisation & Asepsie Stricte
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Chaîne de décontamination rigoureuse, autoclave classe B et traçabilité systématique pour une sécurité sanitaire absolue.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#e7effe] text-[#0e63f3] flex items-center justify-center text-xl mb-6">
                  🚗
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Accessibilité & Stationnement
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Accès direct par la route GP9 de La Marsa, parking aisé au pied de l'immeuble Educatec en face de l'Hôpital Mongi Slim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Map */}
        <LocationMapSection />

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
