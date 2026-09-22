import Header from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Header";
import HeroSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/HeroSection";
import OurStorySection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/OurStorySection";
import ServicesSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/ServicesSection";
import CaseStudiesSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/CaseStudiesSection";
import WhyChooseUsSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/WhyChooseUsSection";
import ConsultationSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/ConsultationSection";
import TestimonialSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/TestimonialSection";
import FaqSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/FaqSection";
import BlogSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/BlogSection";
import LocationMapSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/LocationMapSection";
import CtaSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/CtaSection";
import Footer from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Footer";
import { faqsData } from "@/data/clinicData";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsData.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <div id="scrollToTop" className="min-h-screen flex flex-col bg-white text-[#070707] font-plus-jakarta antialiased selection:bg-[#0e63f3] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OurStorySection />
        <ServicesSection />
        <CaseStudiesSection isFullPage={false} />
        <WhyChooseUsSection />
        <ConsultationSection />
        <TestimonialSection />
        <FaqSection />
        <BlogSection />
        <LocationMapSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
