import type { Metadata } from "next";
import Header from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Header";
import Footer from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Footer";
import CtaSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/CtaSection";
import { blogPostsData } from "@/data/clinicData";
import Image from "next/image";
import Link from "next/link";
import { ServiceArrow } from "@/components/sites/dentipai-c7ba31ad/shared/icons";

export const metadata: Metadata = {
  title: "Blog Orthodontie Tunis | Conseils & Remboursement CNAM | Dr Mahmoud Qalalwa",
  description:
    "Guides complets sur l'orthodontie en Tunisie rédigés par le Dr Mahmoud Qalalwa : remboursement CNAM, aligneurs invisibles, appareils dentaires enfants et adultes.",
  keywords: [
    "remboursement cnam orthodontie tunisie",
    "prix appareil dentaire tunisie",
    "orthodontie invisible tunis blog",
    "guide orthodontiste tunisie",
  ],
};

export default function BlogIndexPage() {
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
              <span className="text-[#0e63f3]">Blog & Conseils Médicaux</span>
            </nav>

            <h1 className="text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-[#070707] tracking-tight leading-[1.15] mb-5 max-w-4xl mx-auto">
              Conseils, Guides & Actualités de l'Orthodontiste à Tunis
            </h1>

            <p className="text-[17px] sm:text-[19px] text-[#555555] max-w-3xl mx-auto leading-relaxed">
              Retrouvez nos articles explicatifs pour comprendre les remboursements CNAM, choisir le bon appareil et préserver durablement votre santé bucco-dentaire.
            </p>
          </div>
        </section>

        {/* Blog Articles Grid */}
        <section className="py-16 sm:py-24 max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {blogPostsData.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col bg-white border border-gray-200/80 rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-300 justify-between"
              >
                <div>
                  {/* Banner Image */}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="relative w-full aspect-[16/10] overflow-hidden block bg-gray-100"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#0e63f3] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
                      {article.category}
                    </span>
                  </Link>

                  {/* Content Body */}
                  <div className="p-7 sm:p-8">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>⏱ {article.readTime}</span>
                    </div>

                    <h2 className="text-[22px] sm:text-[24px] font-bold text-[#070707] leading-snug group-hover:text-[#0e63f3] transition-colors mb-4">
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h2>

                    <p className="text-[15px] text-[#555555] leading-relaxed mb-6">
                      {article.summary}
                    </p>

                    {/* Keywords tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {article.keywords.map((kw, kIdx) => (
                        <span
                          key={kIdx}
                          className="text-[11px] text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-7 sm:px-8 py-5 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                  <span className="text-xs font-semibold text-gray-700">
                    Auteur : {article.author}
                  </span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0e63f3] hover:text-[#070707] transition-colors"
                  >
                    <span>Lire le guide complet</span>
                    <ServiceArrow className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
