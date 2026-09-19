"use client";

import React, { useState } from "react";
import Header from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Header";
import Footer from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Footer";
import LocationMapSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/LocationMapSection";
import { clinicInfo } from "@/data/clinicData";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "Aligneurs invisibles (gouttières)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-populate WhatsApp message with form details for seamless conversion in Tunisia
    const encodedText = encodeURIComponent(
      `Bonjour Dr Mahmoud Qalalwa,\nJe souhaite solliciter un rendez-vous :\n- Nom : ${formData.name}\n- Tél : ${formData.phone}\n- Traitement souhaité : ${formData.treatment}\n- Message : ${formData.message}`
    );
    window.open(`https://wa.me/21628361705?text=${encodedText}`, "_blank");
    setSubmitted(true);
  };

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
              <span className="text-[#0e63f3]">Contact & Accès</span>
            </nav>

            <h1 className="text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-[#070707] tracking-tight leading-[1.15] mb-5 max-w-4xl mx-auto">
              Prendre Rendez-vous & Contacter le Cabinet
            </h1>

            <p className="text-[17px] sm:text-[19px] text-[#555555] max-w-3xl mx-auto leading-relaxed">
              Le <strong>Dr Mahmoud Qalalwa</strong> et son équipe vous accueillent au sein de leur cabinet moderne à Aïn Zaghouan Nord, en face de l'Hôpital Universitaire Mongi Slim.
            </p>
          </div>
        </section>

        {/* Contact Grid: Details + Interactive Appointment Form */}
        <section className="py-16 sm:py-24 max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
                  Coordonnées Directes
                </span>
                <h2 className="text-[28px] sm:text-[34px] font-bold text-[#070707] leading-tight mb-4">
                  Nous Sommes à Votre Écoute
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pour planifier un premier bilan, poser une question sur un traitement ou transmettre une radio, utilisez le canal de votre choix.
                </p>
              </div>

              {/* Phone & WhatsApp Quick Card */}
              <div className="bg-[#f8faff] p-6 rounded-3xl border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0e63f3] text-white flex items-center justify-center text-xl shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">Téléphone Cabinet</div>
                    <a
                      href={`tel:${clinicInfo.phoneRaw}`}
                      className="text-lg font-bold text-gray-900 hover:text-[#0e63f3]"
                    >
                      {clinicInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center text-xl shrink-0">
                    💬
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">WhatsApp Direct</div>
                    <a
                      href={clinicInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#25D366] hover:underline"
                    >
                      +216 28 361 705 (Message instantané)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">Courriel Médical</div>
                    <a
                      href={`mailto:${clinicInfo.email}`}
                      className="text-sm font-semibold text-gray-700 hover:text-[#0e63f3]"
                    >
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📍</span>
                  <h3 className="font-bold text-gray-900 text-base">Adresse du Cabinet</h3>
                </div>
                <p className="text-sm font-bold text-gray-800">
                  {clinicInfo.building}, {clinicInfo.floor}
                </p>
                <p className="text-xs font-semibold text-[#0e63f3] mt-1">
                  {clinicInfo.landmark}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {clinicInfo.neighborhood}, {clinicInfo.postalCode} {clinicInfo.city} (Grand Tunis)
                </p>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⏰</span>
                  <h3 className="font-bold text-gray-900 text-base">Horaires de Consultation</h3>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  {clinicInfo.workingHours.map((wh, idx) => (
                    <div key={idx} className="flex justify-between text-gray-600">
                      <span>{wh.days} :</span>
                      <span className="font-semibold text-gray-900">{wh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Appointment Request Form */}
            <div className="lg:col-span-7 bg-[#fdfdfd] p-8 sm:p-12 rounded-[36px] border border-gray-200/80 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0e63f3] bg-[#e7effe] px-3.5 py-1.5 rounded-full inline-block mb-3">
                Formulaire de Contact & RDV
              </span>
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[#070707] mb-3">
                Demander un Rendez-vous Orthodontique
              </h2>
              <p className="text-sm text-gray-600 mb-8">
                Remplissez ce formulaire court pour être recontacté directement ou basculer vers notre WhatsApp sécurisé.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl text-sm font-medium">
                  ✓ Merci ! Votre demande a été préparée. Si la fenêtre WhatsApp ne s'est pas ouverte automatiquement, vous pouvez nous appeler directement au {clinicInfo.phoneDisplay}.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Nom & Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Syrine Trabelsi"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#0e63f3] bg-white text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Numéro de Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: 98 123 456"
                      className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#0e63f3] bg-white text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Adresse Email (Optionnel)
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre.email@exemple.com"
                      className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#0e63f3] bg-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="treatment" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Traitement Concerné
                  </label>
                  <select
                    id="treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#0e63f3] bg-white text-sm"
                  >
                    <option value="Aligneurs invisibles (gouttières)">Orthodontie Invisible (Aligneurs transparents)</option>
                    <option value="Bagues métalliques multi-attaches">Appareil Multi-Attaches Métallique</option>
                    <option value="Bagues céramiques esthétiques">Appareil Multi-Attaches Céramique</option>
                    <option value="Orthopédie dento-faciale enfant">Orthopédie Dento-Faciale Enfant (6-11 ans)</option>
                    <option value="Orthodontie de l'adulte">Orthodontie Adulte / Alignement</option>
                    <option value="Contention / Autre question">Contention ou Autre Demande</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Précisez votre demande ou vos disponibilités
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ex: Je souhaite une consultation pour un alignement par gouttières, disponible en fin d'après-midi..."
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#0e63f3] bg-white text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full default-button bg-[#0e63f3] hover:bg-[#070707] text-white py-4 font-semibold text-base shadow-md transition-colors"
                >
                  Envoyer ma demande de consultation
                </button>

                <p className="text-[11px] text-gray-500 text-center">
                  🔒 Vos données personnelles médicales sont strictement confidentielles conformément au code de déontologie médicale tunisien.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <LocationMapSection />
      </main>

      <Footer />
    </div>
  );
}
