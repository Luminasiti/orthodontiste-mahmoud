import type { Metadata } from "next";
import Header from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Header";
import Footer from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Footer";
import CtaSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/CtaSection";
import { caseStudiesData, clinicInfo } from "@/data/clinicData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudiesData.find((c) => c.slug === slug);

  if (!item) {
    return {
      title: "Cas Clinique non trouvé | Dr Mahmoud Qalalwa",
    };
  }

  return {
    title: `${item.title} | Dr Mahmoud Qalalwa Orthodontiste Tunis`,
    description: `${item.subtitle || item.diagnosis} Traité par le Dr Mahmoud Qalalwa, Spécialiste en Orthodontie à Tunis (Aïn Zaghouan Nord).`,
    keywords: [
      "cas clinique orthodontie tunis",
      item.categoryLabel,
      "avant apres orthodontie",
      "dr mahmoud qalalwa",
      "orthodontiste ain zaghouan",
    ],
    openGraph: {
      title: `${item.title} | Dr Mahmoud Qalalwa`,
      description: item.subtitle || item.diagnosis,
      type: "article",
      images: [
        {
          url: item.afterImage || item.beforeImage,
          width: 800,
          height: 600,
          alt: `Résultat - ${item.title}`,
        },
      ],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const item = caseStudiesData.find((c) => c.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#070707] font-plus-jakarta antialiased selection:bg-[#0e63f3] selection:text-white">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#e7effe]/60 to-white py-12 sm:py-16 border-b border-gray-100">
          <div className="max-w-[1280px] mx-auto px-5">
            {/* Breadcrumb */}
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              <Link href="/" className="hover:text-[#0e63f3]">Accueil</Link>
              <span>/</span>
              <Link href="/cas-cliniques" className="hover:text-[#0e63f3]">Cas Cliniques</Link>
              <span>/</span>
              <span className="text-[#0e63f3] line-clamp-1">{item.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="bg-[#0e63f3] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-2xs">
                {item.highlightBadge}
              </span>
              <span className="bg-white text-gray-700 border border-gray-200 text-xs font-semibold px-3 py-1.5 rounded-full">
                👤 {item.patientProfile}
              </span>
              <span className="bg-white text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-full">
                ✓ Traitement Terminé & Stable
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold text-[#070707] tracking-tight leading-[1.18] mb-4 max-w-4xl">
              {item.title}
            </h1>

            {item.subtitle && (
              <p className="text-[17px] sm:text-[19px] text-gray-600 max-w-3xl leading-relaxed mb-6">
                {item.subtitle}
              </p>
            )}

            {/* Academic Credit Box */}
            <div className="p-4 sm:p-5 bg-white rounded-2xl border border-gray-200 shadow-2xs inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-gray-600">
              <div className="font-bold text-[#0e63f3] flex items-center gap-1.5">
                <span>🎓</span>
                <span>{item.institution}</span>
              </div>
              <span className="hidden sm:inline text-gray-300">•</span>
              <div>
                <strong>Praticien :</strong> {item.practitioner}
              </div>
              {item.supervisors && (
                <>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <div className="text-gray-500">
                    <strong>Superviseurs :</strong> {item.supervisors.join(", ")}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Major Before / After Comparison Showcase */}
        <section className="py-14 sm:py-20 max-w-[1280px] mx-auto px-5">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0e63f3] block mb-1">
              Résultat Visuel Global
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#070707]">
              Transformation du Sourire & du Visage (Avant vs Après)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Smile Comparison Card */}
            {item.images?.smileComparison && (
              <div className="bg-[#f8faff] p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Évolution du Sourire (Avant / Après)
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    Disparition du sourire gingival, nivellement et harmonisation des corridors buccaux.
                  </p>
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white border border-gray-200">
                    <Image
                      src={item.images.smileComparison}
                      alt="Comparaison du sourire avant après"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">Gauche : Avant traitement</span>
                  <span className="text-[#0e63f3]">Droite : Résultat final</span>
                </div>
              </div>
            )}

            {/* Face Repos Comparison Card */}
            {item.images?.faceComparison && (
              <div className="bg-[#f8faff] p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Harmonisation du Visage au Repos (Avant / Après)
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    Restauration de l'équilibre musculaire labial et rééquilibrage esthétique du profil et de l'étage inférieur.
                  </p>
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white border border-gray-200">
                    <Image
                      src={item.images.faceComparison}
                      alt="Comparaison du visage au repos avant après"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">Gauche : Situation initiale</span>
                  <span className="text-[#0e63f3]">Droite : Équilibre & Harmonie au repos</span>
                </div>
              </div>
            )}
          </div>

          {/* Intra-oral 6-views Full Comparison */}
          {item.images?.intraoralComparison && (
            <div className="bg-[#f8faff] p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Comparaison Endo-buccale Complète (Avant / Après)
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Alignement parfait des arcades dentaires, résolution des malocclusions et occlusion fonctionnelle stable en Classe I canine et molaire.
              </p>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white border border-gray-200">
                <Image
                  src={item.images.intraoralComparison}
                  alt="Comparaison endo-buccale complète"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold flex-wrap gap-2">
                <span className="text-gray-500">Ligne supérieure : Occlusion & encombrement initial</span>
                <span className="text-[#0e63f3]">Ligne inférieure : Résultat final en occlusion idéale</span>
              </div>
            </div>
          )}
        </section>

        {/* Detailed Clinical Dossier Tabs */}
        <section className="py-14 bg-gray-50/70 border-t border-b border-gray-200/70">
          <div className="max-w-[1280px] mx-auto px-5 space-y-16">
            {/* 1. Diagnostic Details */}
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0e63f3] block mb-1">
                  Étape 01
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#070707]">
                  Examen Clinique & Diagnostic Initial
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs">
                    <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                      <span>🦴</span>
                      <span>Diagnostic Squelettique</span>
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.diagnosticSquelettique}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs">
                    <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                      <span>🦷</span>
                      <span>Diagnostic Dento-Alvéolaire</span>
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.diagnosticDentoAlveolaire}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs">
                    <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                      <span>👤</span>
                      <span>Diagnostic Cutané & Esthétique</span>
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.diagnosticCutane}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs">
                    <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                      <span>🫁</span>
                      <span>Diagnostic Fonctionnel</span>
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.diagnosticFonctions}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  {item.images?.initialCephalo && (
                    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                        Bilan Céphalométrique Initial
                      </h4>
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
                        <Image
                          src={item.images.initialCephalo}
                          alt="Céphalométrie initiale"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {item.images?.initialRadios && (
                    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                        Radiographie Panoramique Initiale
                      </h4>
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
                        <Image
                          src={item.images.initialRadios}
                          alt="Panoramique initiale"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Cephalometric Values Comparison Table */}
            {item.cephalometry && (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0e63f3] block mb-1">
                    Étape 02
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#070707]">
                    Évolution des Paramètres Céphalométriques (Début vs Fin)
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Mesures téléradiographiques précises démontrant l'optimisation des bases osseuses et des axes dentaires.
                  </p>
                </div>

                <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-gray-200">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-600">
                        <th className="p-4 sm:p-5">Paramètre</th>
                        <th className="p-4 sm:p-5">Valeurs Moyennes</th>
                        <th className="p-4 sm:p-5 text-amber-700 bg-amber-50/50">Début du Traitement</th>
                        <th className="p-4 sm:p-5 text-[#0e63f3] bg-blue-50/50">Fin du Traitement</th>
                        <th className="p-4 sm:p-5">Objectif & Interprétation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {item.cephalometry.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/80">
                          <td className="p-4 sm:p-5 font-bold text-gray-900">{row.parameter}</td>
                          <td className="p-4 sm:p-5 text-gray-500">{row.mean}</td>
                          <td className="p-4 sm:p-5 font-semibold text-amber-800 bg-amber-50/30">{row.initial}</td>
                          <td className="p-4 sm:p-5 font-bold text-[#0e63f3] bg-blue-50/30">{row.final}</td>
                          <td className="p-4 sm:p-5 text-xs text-gray-600">
                            {row.parameter === "ANB" && "Harmonie des bases squelettiques maxillo-mandibulaires"}
                            {row.parameter === "SNB" && "Positionnement sagittal de la mandibule"}
                            {row.parameter === "SNA" && "Positionnement sagittal du maxillaire"}
                            {row.parameter === "FMA" && "Contrôle de la divergence faciale"}
                            {row.parameter === "FMIA" && "Stabilisation de l'axe incisif inférieur"}
                            {row.parameter === "IMPA" && "Contrôle de la version vestibulo-linguale inférieure"}
                            {row.parameter === "I / i" && "Normalisation de l'angle inter-incisif"}
                            {row.parameter === "I / F" && "Axe des incisives supérieures par rapport au plan de Francfort"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. Treatment Process Steps */}
            {item.treatmentSteps && (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0e63f3] block mb-1">
                    Étape 03
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#070707]">
                    Protocole Thérapeutique & Étapes Cliniques
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {item.treatmentSteps.map((step, sIdx) => (
                    <div key={sIdx} className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200 shadow-2xs">
                      <span className="text-xs font-bold text-[#0e63f3] bg-[#e7effe] px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                        {step.phase}
                      </span>
                      <div className="space-y-2.5 mt-3 text-sm">
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Maxillaire :</strong> {step.maxillary}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Mandibule :</strong> {step.mandibular}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Superpositions & Radiographies Finales */}
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0e63f3] block mb-1">
                  Étape 04
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#070707]">
                  Superpositions Céphalométriques & Contrôles Finaux
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {item.images?.superpositions && (
                  <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                      Superpositions Céphalométriques
                    </h4>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                      <Image
                        src={item.images.superpositions}
                        alt="Superpositions céphalométriques"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-2">
                      Noir : Début du traitement | Rouge : Fin de traitement
                    </p>
                  </div>
                )}

                {item.images?.finalRadios && (
                  <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                      Panoramique de Contrôle Finale
                    </h4>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                      <Image
                        src={item.images.finalRadios}
                        alt="Panoramique de contrôle finale"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-2">
                      Parallélisme radiculaire vérifié, axes redressés et finitions stables
                    </p>
                  </div>
                )}

                {item.images?.finalCephalo && (
                  <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                      Céphalométrie de Fin de Traitement
                    </h4>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                      <Image
                        src={item.images.finalCephalo}
                        alt="Céphalométrie finale"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-2">
                      Profil cutané et squelettique parfaitement harmonisé
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Action Banner for Prospective Patients */}
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-5 text-center">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#070707] mb-4">
              Vous Présentez une Situation Orthodontique Complexe ?
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto mb-8">
              Le <strong>Dr Mahmoud Qalalwa</strong> réalise des bilans complets au cabinet d'Aïn Zaghouan Nord (en face de l'Hôpital Mongi Slim) pour évaluer précisément votre situation et concevoir le plan de traitement idéal.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={clinicInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="default-button bg-[#25D366] text-white hover:bg-[#20ba5a] font-semibold flex items-center gap-2 shadow-sm"
              >
                <span>Contacter le docteur sur WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="default-button outline border-[#070707] text-[#070707] hover:bg-[#070707] hover:text-white font-semibold"
              >
                Prendre Rendez-vous au Cabinet
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
