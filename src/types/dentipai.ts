export interface NavDropdownLink {
  text: string;
  href: string;
}

export interface NavItem {
  text: string;
  href?: string;
  dropdown?: NavDropdownLink[];
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  href: string;
  icon: string;
  badge?: string;
}

export interface TreatmentDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  fullDescription: string[];
  indications: string[];
  processSteps: { step: string; title: string; desc: string }[];
  duration: string;
  advantages: string[];
  icon: string;
  image?: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: "all" | "aligneurs" | "bagues" | "encombrement" | "orthopedie" | "diasteme";
  categoryLabel: string;
  patientProfile: string;
  patientAge?: string;
  patientName?: string;
  consultationMotive?: string;
  duration: string;
  technique: string;
  diagnosis: string;
  diagnosticSquelettique?: string;
  diagnosticDentoAlveolaire?: string;
  diagnosticCutane?: string;
  diagnosticFonctions?: string;
  solution: string;
  result: string;
  beforeImage: string;
  afterImage: string;
  highlightBadge: string;
  institution?: string;
  supervisors?: string[];
  practitioner?: string;
  images?: {
    beforeFaceRepos?: string;
    beforeFaceSmile?: string;
    beforeFaceProfile?: string;
    afterFaceRepos?: string;
    afterFaceSmile?: string;
    afterFaceProfile?: string;
    smileComparison?: string;
    faceComparison?: string;
    intraoralComparison?: string;
    beforeIntraoral?: string;
    afterIntraoral?: string;
    aestheticSmile?: string;
    initialRadios?: string;
    initialCephalo?: string;
    levelingPhoto?: string;
    postSurgeryPhoto?: string;
    finalRadios?: string;
    finalCephalo?: string;
    superpositions?: string;
    allSlides?: string[];
  };
  cephalometry?: {
    parameter: string;
    mean: string;
    initial: string;
    final: string;
  }[];
  treatmentSteps?: {
    phase: string;
    maxillary: string;
    mandibular: string;
    details?: string[];
  }[];
}

export interface WcuItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  title: string;
  feedback: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  location?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  href: string;
  summary: string;
  content: string[];
  keywords: string[];
}

export interface ClinicInfo {
  doctorName: string;
  title: string;
  specialty: string;
  subSpecialty: string;
  diploma: string;
  university: string;
  address: string;
  building: string;
  floor: string;
  office: string;
  landmark: string;
  neighborhood: string;
  city: string;
  postalCode: string;
  country: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  whatsappLink: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  workingHours: { days: string; hours: string }[];
}
