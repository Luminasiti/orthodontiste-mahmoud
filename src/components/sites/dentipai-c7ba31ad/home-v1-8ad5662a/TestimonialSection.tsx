"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StarIcon, SliderArrowLeft, SliderArrowRight } from "../shared/icons";
import { testimonialsData } from "@/data/clinicData";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Header & Slider Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
              Retours d'Expérience
            </span>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-bold text-[#070707] leading-[1.18] tracking-tight">
              Témoignages de Nos Patients à Tunis
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Témoignage précédent"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#070707] hover:bg-[#0e63f3] hover:border-[#0e63f3] hover:text-white transition-colors cursor-pointer"
            >
              <SliderArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Témoignage suivant"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#070707] hover:bg-[#0e63f3] hover:border-[#0e63f3] hover:text-white transition-colors cursor-pointer"
            >
              <SliderArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-[#fdfdfd] border border-[#cfe0fd] rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                idx === currentIndex ? "ring-2 ring-[#0e63f3]" : ""
              }`}
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#ffb800]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5" />
                  ))}
                </div>

                <h3 className="text-[19px] font-bold text-[#070707] mb-3 leading-snug">
                  "{t.title}"
                </h3>

                <p className="text-[15px] text-[#555555] leading-[1.65] mb-6">
                  {t.feedback}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#070707]">
                    {t.name}
                  </h4>
                  <p className="text-[12px] text-[#0e63f3] font-medium">
                    {t.role}
                  </p>
                  {t.location && (
                    <p className="text-[11px] text-gray-500">
                      📍 {t.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
