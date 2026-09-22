import React from "react";
import Image from "next/image";

interface WcuItem {
  id: string;
  badge: string;
  title: string;
  summary: string;
  image: string;
}

const WCU_ITEMS: WcuItem[] = [
  {
    id: "formation-monastir",
    badge: "Excellence Académique",
    title: "Spécialisation Universitaire à la Faculté de Monastir (FMDM)",
    summary:
      "Le Dr Mahmoud Qalalwa est titulaire d'une formation spécialisée approfondie en orthodontie et orthopédie dento-faciale issue de la Faculté de Médecine Dentaire de Monastir. Cette formation rigoureuse garantit une compréhension intime de la croissance des mâchoires, de l'occlusion et de la physiologie du mouvement dentaire.",
    image: "/images/why-choose-academic-excellence.jpg",
  },
  {
    id: "technologie-aligneurs",
    badge: "Technologies Modernes",
    title: "Traitements Esthétiques & Aligneurs Invisibles Sur-Mesure",
    summary:
      "Bénéficiez des technologies orthodontiques les plus modernes : planification 3D, simulation de votre futur sourire et gouttières transparentes quasi-invisibles. Que vous optiez pour des aligneurs ou des bagues céramiques haute discrétion, vos soins sont pensés pour préserver votre confort au quotidien.",
    image: "/images/why-choose-modern-aligners.jpg",
  },
  {
    id: "emplacement-mongi-slim",
    badge: "Accès & Proximité",
    title: "Emplacement Privilégié en Face de l'Hôpital Mongi Slim",
    summary:
      "Implanté à Aïn Zaghouan Nord dans l'Immeuble Educatec (2ème étage, Bureau n°1), le cabinet est idéalement situé sur l'axe GP9 reliant Tunis à La Marsa. Un accès fluide et rapide pour les résidents des Berges du Lac 2, de Carthage, de La Soukra et de L'Aouina, avec de nombreuses places de stationnement.",
    image: "/images/why-choose-clinic-location.jpg",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-[#0e63f3] block mb-2">
            Nos Atouts & Engagements
          </span>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-bold text-[#070707] leading-[1.18] tracking-tight">
            Pourquoi Choisir le Cabinet du Dr Mahmoud Qalalwa ?
          </h2>
        </div>

        {/* Feature Cards List */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {WCU_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`border border-[#cfe0fd] rounded-[32px] p-6 sm:p-10 lg:p-12 flex flex-col ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center justify-between gap-8 lg:gap-16 hover:shadow-lg transition-all duration-300 bg-[#fdfdfd]`}
            >
              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0e63f3] bg-[#e7effe] px-3 py-1 rounded-full self-start mb-3">
                  {item.badge}
                </span>
                <h3 className="text-[26px] sm:text-[32px] font-bold text-[#070707] mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[16px] sm:text-[17px] text-[#555555] leading-[1.65]">
                  {item.summary}
                </p>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="eager"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
