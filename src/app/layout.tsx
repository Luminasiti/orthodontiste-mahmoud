import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { clinicInfo } from "@/data/clinicData";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://orthodontiste-mahmoud.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dr Mahmoud Qalalwa | Spécialiste en Orthodontie & Orthopédie Dento-Faciale Tunis",
  description:
    "Cabinet d'orthodontie du Dr Mahmoud Qalalwa à Aïn Zaghouan Nord, Tunis (en face Hôpital Mongi Slim). Orthodontie invisible (aligneurs), bagues métalliques et céramiques, orthopédie dento-faciale. Diplômé Faculté de Médecine Dentaire de Monastir. Tél : 28 361 705.",
  keywords: [
    "orthodontiste tunis",
    "orthodontiste ain zaghouan",
    "orthodontiste la marsa",
    "orthodontiste les berges du lac",
    "orthodontie invisible tunis",
    "aligneurs invisibles tunisie",
    "bagues dentaires tunisie",
    "appareil dentaire tunisie prix",
    "remboursement cnam orthodontie tunisie",
    "docteur mahmoud qalalwa",
    "hopital mongi slim orthodontiste",
    "orthopedie dento-faciale tunisie",
  ],
  authors: [{ name: clinicInfo.doctorName }],
  creator: clinicInfo.doctorName,
  publisher: clinicInfo.doctorName,
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/673ab723b32cf03625ba6e53_favicon-32x32.png",
    apple: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/673ab72a59d1843babc78ab0_webclip-256x256.png",
  },
  openGraph: {
    title: "Dr Mahmoud Qalalwa | Orthodontiste à Tunis - Aïn Zaghouan Nord",
    description:
      "Spécialiste en Orthodontie et Orthopédie Dento-Faciale. Aligneurs invisibles, bagues métalliques et céramiques. En face de l'Hôpital Mongi Slim, Tunis.",
    url: siteUrl,
    siteName: "Cabinet Dr Mahmoud Qalalwa",
    locale: "fr_TN",
    type: "website",
    images: [
      {
        url: "/images/dr-mahmoud-qalalwa-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Mahmoud Qalalwa - Spécialiste en Orthodontie Tunis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Mahmoud Qalalwa | Orthodontiste à Tunis",
    description:
      "Cabinet d'orthodontie à Aïn Zaghouan Nord en face de l'Hôpital Mongi Slim. Aligneurs et bagues.",
    images: ["/images/dr-mahmoud-qalalwa-portrait.jpg"],
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  "@id": "https://cabinet-dr-qalalwa.tn/#dentist",
  name: "Cabinet Dr Mahmoud Qalalwa - Spécialiste en Orthodontie",
  alternateName: "Dr Mahmoud Qalalwa Orthodontiste Tunis",
  description:
    "Cabinet spécialisé en orthodontie et orthopédie dento-faciale à Aïn Zaghouan Nord, Tunis. Traitement par aligneurs invisibles et appareils multi-attaches pour enfants, adolescents et adultes.",
  url: "https://cabinet-dr-qalalwa.tn",
  telephone: clinicInfo.phoneRaw,
  email: clinicInfo.email,
  priceRange: "$$",
  medicalSpecialty: [
    "Orthodontics and Dentofacial Orthopedics",
    "Dentistry"
  ],
  founder: {
    "@type": "Person",
    name: "Dr Mahmoud Qalalwa",
    jobTitle: "Spécialiste en Orthodontie et Orthopédie Dento-Faciale",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Faculté de Médecine Dentaire de Monastir (FMDM)",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Immeuble Educatec, 2ème étage, Bureau n°1, En face de l'Hôpital Mongi Slim",
    addressLocality: "Aïn Zaghouan Nord, Tunis",
    postalCode: "2046",
    addressCountry: "TN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.8549,
    longitude: 10.2975,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Aïn Zaghouan" },
    { "@type": "AdministrativeArea", name: "La Marsa" },
    { "@type": "AdministrativeArea", name: "Les Berges du Lac" },
    { "@type": "AdministrativeArea", name: "Carthage" },
    { "@type": "AdministrativeArea", name: "L'Aouina" },
    { "@type": "AdministrativeArea", name: "La Soukra" },
    { "@type": "AdministrativeArea", name: "Tunis" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-plus-jakarta bg-white text-[#070707]">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
