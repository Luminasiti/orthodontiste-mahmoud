import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceArrow } from "../shared/icons";
import { blogPostsData } from "@/data/clinicData";

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="blog-preview">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
              Conseils & Actualités Médicales
            </span>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-bold text-[#070707] leading-[1.18] tracking-tight">
              Guides Pratiques de l'Orthodontiste
            </h2>
          </div>
          <Link
            href="/blog"
            className="default-button outline border-[#070707] text-[#070707] hover:bg-[#0e63f3] hover:border-[#0e63f3] hover:text-white shrink-0 self-start sm:self-auto font-semibold"
          >
            Tous les Articles ({blogPostsData.length})
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-[#fdfdfd] border border-gray-200/80 rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-300 justify-between"
            >
              <div>
                {/* Image Banner */}
                <Link
                  href={article.href}
                  className="relative w-full aspect-[16/10] overflow-hidden block bg-gray-100"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    loading="eager"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#0e63f3] text-xs font-bold px-3 py-1.5 rounded-full shadow-xs">
                    {article.category}
                  </span>
                </Link>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>⏱ {article.readTime}</span>
                  </div>

                  <h3 className="text-[19px] sm:text-[20px] font-bold text-[#070707] leading-snug group-hover:text-[#0e63f3] transition-colors mb-3">
                    <Link href={article.href}>{article.title}</Link>
                  </h3>

                  <p className="text-sm text-[#555555] leading-[1.6] line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-7 py-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-600">
                  Par {article.author}
                </span>
                <Link
                  href={article.href}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#070707] group-hover:border-[#0e63f3] group-hover:bg-[#0e63f3] group-hover:text-white transition-all duration-300"
                  aria-label={`Lire l'article : ${article.title}`}
                >
                  <ServiceArrow className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
