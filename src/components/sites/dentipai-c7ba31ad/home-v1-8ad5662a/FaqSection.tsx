"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaqIcon } from "../shared/icons";
import { faqsData } from "@/data/clinicData";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Images */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[580px] rounded-[32px] overflow-hidden shadow-md">
              <Image
                src="/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/672886d11ffa915bbbc7d47e_faq-image.jpg"
                alt="Cabinet d'orthodontie questions fréquentes"
                fill
                loading="eager"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            {/* Overlapping Floating Inner Image */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-44 sm:w-56 aspect-square rounded-[24px] overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/673b1d775c2f184b4ca4269e_faq-inner-image.jpg"
                alt="Aligneurs et bagues Tunis"
                fill
                loading="eager"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-center mt-8 lg:mt-0">
            <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
              Questions & Réponses Fréquentes
            </span>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-bold text-[#070707] leading-[1.18] tracking-tight mb-8">
              Tout ce que Vous Devez Savoir sur l'Orthodontie
            </h2>

            <div className="flex flex-col gap-4">
              {faqsData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`border rounded-[24px] overflow-hidden transition-all duration-300 bg-[#fdfdfd] ${
                      isOpen ? "border-[#0e63f3] shadow-sm" : "border-[#cfe0fd]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <span className="text-[17px] sm:text-[19px] font-bold text-[#070707]">
                        {item.question}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-full bg-[#e7effe] flex items-center justify-center text-[#0e63f3] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-[#0e63f3] text-white" : ""
                        }`}
                      >
                        <FaqIcon className="w-4 h-4 fill-current" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 sm:px-8 sm:pb-7 text-[15px] text-[#555555] leading-[1.65] border-t border-gray-100 pt-4">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
