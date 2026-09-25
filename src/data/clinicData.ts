import {
  ClinicInfo,
  TreatmentDetail,
  CaseStudyItem,
  BlogPost,
  TestimonialItem,
  FaqItem,
} from "@/types/dentipai";

export const clinicInfo: ClinicInfo = {
  doctorName: "Dr Mahmoud Qalalwa",
  title: "Dr Mahmoud Qalalwa — Spécialiste en Orthodontie",
  specialty: "Spécialiste en Orthodontie et Orthopédie Dento-Faciale",
  subSpecialty:
    "Traitement esthétique et fonctionnel par des appareils multiattaches métalliques et invisibles (aligneurs transparents)",
  diploma: "Diplômé Spécialiste en Chirurgie Dentaire et Orthodontie",
  university: "Faculté de Médecine Dentaire de Monastir (FMDM)",
  address: "Immeuble Educatec, 2ème étage, Bureau n°1",
  building: "Immeuble Educatec",
  floor: "2ème étage, Bureau n°1",
  office: "Bureau 1",
  landmark: "En face de l'Hôpital Universitaire Mongi Slim (Route GP9 La Marsa)",
  neighborhood: "Aïn Zaghouan Nord",
  city: "Tunis",
  postalCode: "2046",
  country: "Tunisie",
  phoneDisplay: "28 361 705",
  phoneRaw: "+21628361705",
  email: "mahmoudriadh777@gmail.com",
  whatsappLink:
    "https://wa.me/21628361705?text=Bonjour%20Dr%20Mahmoud%20Qalalwa,%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20consultation%20orthodontique.",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.482772594611!2d10.297463776602334!3d36.85489066461947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3544c776bc3b%3A0x6b80153be992dc7a!2sHopital%20Mongi%20Slim!5e0!3m2!1sfr!2stn!4v1710842000000!5m2!1sfr!2stn",
  googleMapsDirectionsUrl:
    "https://share.google/PO8qe06dDpFbh6Qtc",
  workingHours: [
    { days: "Lundi - Vendredi", hours: "09:00 - 18:00" },
    { days: "Samedi", hours: "09:00 - 14:00" },
    { days: "Dimanche", hours: "Fermé (Urgences sur RDV)" },
  ],
};

export const treatmentsData: TreatmentDetail[] = [
  {
    id: "orthodontie-invisible",
    slug: "orthodontie-invisible-aligneurs",
    title: "Orthodontie Invisible & Aligneurs Transparents",
    subtitle: "Gouttières transparentes sur-mesure pour un alignement discret sans bagues",
    summary:
      "Une solution moderne, quasi-invisible et amovible qui corrige vos dents en douceur grâce à une série de gouttières transparentes conçues sur-mesure par ordinateur.",
    fullDescription: [
      "L'orthodontie par aligneurs invisibles représente l'avancée majeure de l'orthodontie moderne. Destinée aux adultes et aux adolescents soucieux de leur apparence, cette technique permet de redresser les dents sans métal ni fils apparents.",
      "Chaque gouttière est fabriquée sur-mesure à partir d'une empreinte optique 3D haute précision. Portées 22h sur 24, elles déplacent progressivement vos dents selon un plan de traitement virtuel contrôlé à chaque étape par le Dr Mahmoud Qalalwa.",
    ],
    indications: [
      "Chevauchement et encombrement dentaire modéré à sévère",
      "Espaces interdentaires et diastèmes inesthétiques",
      "Récidives orthodontiques après un premier traitement adolescent",
      "Patients adultes recherchant une discrétion professionnelle absolue",
    ],
    processSteps: [
      {
        step: "01",
        title: "Bilan 3D & Étude Virtuelle",
        desc: "Examen clinique, radiographies et empreinte optique numérique pour simuler le résultat final avant même de commencer.",
      },
      {
        step: "02",
        title: "Fabrication Personnalisée",
        desc: "Création de votre série de gouttières transparentes selon le plan biomécanique validé par le Dr Qalalwa.",
      },
      {
        step: "03",
        title: "Suivi & Évolution Mensuelle",
        desc: "Changement de gouttière toutes les 1 à 2 semaines et contrôle régulier au cabinet en face de l'Hôpital Mongi Slim.",
      },
      {
        step: "04",
        title: "Contention & Sourire Pérenne",
        desc: "Pose d'une contention discrète pour garantir la stabilité définitive de vos nouvelles dents alignées.",
      },
    ],
    duration: "6 à 18 mois selon la complexité du cas",
    advantages: [
      "Quasi-invisible à l'œil nu lors des interactions sociales",
      "Amovible pour manger, boire et se brosser les dents facilement",
      "Confort accru : aucune irritation gingivale ni blessure de fils",
      "Moins d'urgences orthodontiques (pas de bague décollée)",
    ],
    icon: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/67220f5ab9aaa4a71fed60c6_orthodontics.svg",
    image: "/images/Orthodontie Invisible & Aligneurs Transparents.jpg",
  },
  {
    id: "bagues-metalliques",
    slug: "bagues-metalliques-multiattaches",
    title: "Appareils Multi-Attaches Métalliques",
    subtitle: "La référence éprouvée pour une précision biomécanique absolue",
    summary:
      "Le système multi-attaches classique en métal reste la solution la plus robuste et polyvalente pour corriger l'ensemble des malocclusions dentaires et squelettiques.",
    fullDescription: [
      "L'appareil multi-attaches métallique est le traitement de référence en orthodontie conventionnelle. Grâce à des boîtiers collés sur chaque dent et reliés par un arc en alliage à mémoire de forme, il permet de guider le déplacement tridimensionnel des racines avec une exactitude inégalée.",
      "Le Dr Mahmoud Qalalwa utilise des brackets métalliques miniaturisés de dernière génération, plus confortables, moins volumineux et offrant un contrôle occlusal d'une très haute précision pour enfants, adolescents et adultes.",
    ],
    indications: [
      "Encombrements dentaires complexes et dents incluses (canines)",
      "Prognathisme, rétrognathie et asymétries des mâchoires",
      "Occlusions inversées, béances antérieures et supraclusions",
      "Traitements orthodontiques globaux de l'adolescent",
    ],
    processSteps: [
      {
        step: "01",
        title: "Diagnostic & Tracé Céphalométrique",
        desc: "Analyse radiographique rigoureuse pour déterminer les axes squelettiques et le calendrier d'alignement.",
      },
      {
        step: "02",
        title: "Collage Indirect Haute Précision",
        desc: "Pose méticuleuse et indolore des brackets sur les faces vestibulaires des dents.",
      },
      {
        step: "03",
        title: "Activations Périodiques",
        desc: "Ajustement régulier des arcs tous les 4 à 6 semaines au cabinet à Aïn Zaghouan Nord.",
      },
      {
        step: "04",
        title: "Finition & Polissage",
        desc: "Dépose sécurisée de l'appareil, nettoyage complet de l'émail et mise en place de la contention.",
      },
    ],
    duration: "12 à 24 mois en moyenne",
    advantages: [
      "Efficacité biomécanique maximale sur tous les cas complexes",
      "Option la plus économique et robuste",
      "Élastiques interchangeables personnalisables en couleurs pour les jeunes",
      "Résultats prédictibles et stables",
    ],
    icon: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/67220ff70f3cb5ff30f01de2_dental-crown.svg",
    image: "/images/Appareils Multi-Attaches Métalliques.jpg",
  },
  {
    id: "bagues-ceramiques",
    slug: "bagues-ceramiques-esthetiques",
    title: "Appareils Multi-Attaches Céramiques",
    subtitle: "L'efficacité de la bague associée à la transparence de la céramique",
    summary:
      "Des attaches translucides de la couleur naturelle de vos dents, offrant une alternative esthétique très appréciée des lycéens, étudiants et professionnels en Tunisie.",
    fullDescription: [
      "Pour les patients qui désirent la précision éprouvée des bagues tout en évitant l'aspect métallique, les brackets en céramique polycristalline ou monocristalline (saphir) représentent la solution idéale.",
      "Ces boîtiers résistent aux colorations alimentaires, se fondent dans la teinte naturelle de l'émail et peuvent être associés à des arcs esthétiques blancs pour une discrétion maximale au quotidien.",
    ],
    indications: [
      "Adolescents et adultes exigeant un compromis esthétique et économique",
      "Malocclusions complexes nécessitant la force mécanique des attaches",
      "Alignement antérieur sans l'effet grisâtre du métal",
    ],
    processSteps: [
      {
        step: "01",
        title: "Sélection de Teinte & Préparation",
        desc: "Choix des attaches adaptées à la translucidité de votre émail naturel.",
      },
      {
        step: "02",
        title: "Collage Esthétique",
        desc: "Fixation des boîtiers en céramique avec résines photopolymérisables biocompatibles.",
      },
      {
        step: "03",
        title: "Arcs Teintés & Réglages",
        desc: "Utilisation d'arcs esthétiques pour préserver l'harmonie visuelle durant tout le traitement.",
      },
      {
        step: "04",
        title: "Phase de Contention",
        desc: "Stabilisation du sourire parfait obtenu avec attelles de contention invisibles.",
      },
    ],
    duration: "14 à 24 mois",
    advantages: [
      "Discrétion visuelle très supérieure aux bagues en métal",
      "Résistance aux taches de café, thé ou épices",
      "Puissance de correction identique aux appareils conventionnels",
    ],
    icon: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/672210563918af052ddeba18_dental-shining.svg",
    image: "/images/Appareils Multi-Attaches Céramiques.jpg",
  },
  {
    id: "orthopedie-dento-faciale",
    slug: "orthopedie-dento-faciale-enfants",
    title: "Orthopédie Dento-Faciale Enfant & Adolescent",
    subtitle: "Traitements interceptifs pour guider harmonieusement la croissance des mâchoires",
    summary:
      "Dès l'âge de 6 à 13 ans pour les filles, 14 ans pour les garçons, l'orthopédie dento-faciale permet d'intercepter les décalages osseux des mâchoires avant la fin de la croissance squelettique.",
    fullDescription: [
      "Spécialiste qualifié en orthopédie dento-faciale issu de la Faculté de Médecine Dentaire de Monastir, le Dr Mahmoud Qalalwa prend en charge les enfants en bas âge afin de corriger les anomalies du développement des mâchoires (mâchoire trop étroite, menton trop en arrière ou en avant, respiration buccale).",
      "Intervenir tôt permet souvent d'éviter des chirurgies orthognathiques lourdes ou des extractions dentaires à l'âge adulte, tout en facilitant une respiration nasale saine et une mastication équilibrée.",
    ],
    indications: [
      "Palais étroit et articulé croisé unilatéral ou bilatéral",
      "Décalage important entre mâchoire du haut et du bas (profil rétrognathe)",
      "Succion prolongée du pouce ou tétine provoquant une béance antérieure",
      "Respiration par la bouche et troubles de la déglutition",
    ],
    processSteps: [
      {
        step: "01",
        title: "Dépistage Précoce (6-8 ans)",
        desc: "Évaluation de la croissance crânio-faciale et de la ventilation nasale de l'enfant.",
      },
      {
        step: "02",
        title: "Appareillage Interceptif Amovible ou Fixe",
        desc: "Disjoncteur palatin, activateur de croissance ou masque facial adaptés aux besoins de l'enfant.",
      },
      {
        step: "03",
        title: "Suivi de la Denture Mixte",
        desc: "Accompagnement de l'éruption des dents définitives dans un espace suffisant.",
      },
      {
        step: "04",
        title: "Stabilisation & Rééducation",
        desc: "Collaboration éventuelle avec orthophoniste ou ORL pour une déglutition pérenne.",
      },
    ],
    duration: "6 à 12 mois de phase active d'interception",
    advantages: [
      "Harmonise les traits du visage et le profil de l'enfant",
      "Évite les extractions futures de dents saines et les chirurgies à l'âge adulte",
      "Améliore la respiration, le sommeil et la posture de la langue",
      "Remboursement partiel CNAM possible pour les enfants de moins de 16 ans",
    ],
    icon: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/67220f83c157b6d7bd8b4a92_dental-loosen.svg",
    image: "/images/Orthopédie Dento-Faciale Enfant & Adolescent.jpg",
  },
  {
    id: "orthodontie-adulte",
    slug: "orthodontie-adulte-esthetique",
    title: "Orthodontie de l'Adulte & Pré-Prothétique",
    subtitle: "Retrouver un alignement parfait et un confort masticatoire à tout âge",
    summary:
      "Il n'y a pas de limite d'âge pour aligner ses dents. Nous proposons des traitements sur-mesure combinant santé parodontale, alignement esthétique et préparation implantaire.",
    fullDescription: [
      "De plus en plus d'adultes à Tunis franchissent le pas de l'orthodontie. Qu'il s'agisse d'un souhait esthétique de longue date, d'une récidive d'alignement ou d'un besoin fonctionnel avant la pose d'implants dentaires ou de facettes, le Dr Mahmoud Qalalwa propose une approche globale adaptée aux contraintes de la vie active.",
      "Nous prenons en compte la santé des gencives et de l'os (parodonte) avec des forces douces pour préserver l'intégrité biologique de chaque dent.",
    ],
    indications: [
      "Dents qui se chevauchent de plus en plus avec l'âge",
      "Création d'espace avant pose d'un implant dentaire ou d'un bridge",
      "Douleurs de l'articulation temporo-mandibulaire (claquements, craquements ATM)",
      "Amélioration du profil du visage et de l'esthétique du sourire",
    ],
    processSteps: [
      {
        step: "01",
        title: "Bilan Parodontal & Global",
        desc: "Contrôle de l'os et de la gencive pour assurer un traitement en toute sécurité.",
      },
      {
        step: "02",
        title: "Choix de la Technique Discrète",
        desc: "Aligneurs invisibles ou brackets céramiques selon votre mode de vie.",
      },
      {
        step: "03",
        title: "Alignement à Forces Légères",
        desc: "Déplacement progressif respectueux du tissu de soutien de l'adulte.",
      },
      {
        step: "04",
        title: "Coordination avec Votre Dentiste",
        desc: "Liaison directe pour vos éventuels soins prothétiques ou blanchiment final.",
      },
    ],
    duration: "6 à 20 mois selon les objectifs",
    advantages: [
      "Traitements ultra-discrets compatibles avec la vie professionnelle",
      "Élimine les zones d'accumulation de tartre et protège les gencives",
      "Redonne une occlusion masticatoire équilibrée et durable",
    ],
    icon: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/67220f2b50e69fbff7a6deef_dental-surgery.svg",
    image: "/images/Orthodontie de l'Adulte & Pré-Prothétique.jpg",
  },
  {
    id: "contention-stabilisation",
    slug: "contention-orthodontique-stabilisation",
    title: "Contention & Stabilisation du Sourire",
    subtitle: "La garantie absolue de préserver vos résultats tout au long de votre vie",
    summary:
      "La contention est l'étape indispensable qui consolide le déplacement des dents et empêche toute récidive naturelle après la dépose de l'appareil.",
    fullDescription: [
      "Une fois les dents idéalement alignées, les tissus environnants (ligaments, os) ont besoin de temps pour se consolider autour de la nouvelle position. Sans contention, les dents ont naturellement tendance à bouger à nouveau.",
      "Le Dr Mahmoud Qalalwa applique des protocoles de contention éprouvés : fils de rétention collés invisibles à l'arrière des dents antérieures et gouttières nocturnes ultra-confortables.",
    ],
    indications: [
      "Fin de traitement par bagues métalliques ou céramiques",
      "Fin de traitement par aligneurs transparents",
      "Remplacement d'un fil de contention décollé ou brisé",
    ],
    processSteps: [
      {
        step: "01",
        title: "Empreinte de Finition",
        desc: "Prise d'empreinte optique 3D immédiatement après alignement complet.",
      },
      {
        step: "02",
        title: "Pose du Fil Collé",
        desc: "Collage d'un fil tressé en acier inoxydable ou titane à l'arrière des incisives.",
      },
      {
        step: "03",
        title: "Gouttière Nocturne Sur-Mesure",
        desc: "Livraison d'une gouttière transparente de sécurité à porter la nuit.",
      },
      {
        step: "04",
        title: "Visites de Contrôle Annuelles",
        desc: "Vérification gratuite de la tenue du fil et de la stabilité occlusale.",
      },
    ],
    duration: "Contention à vie pour une garantie de sourire parfait",
    advantages: [
      "Totalement invisible de l'extérieur (face linguale / arrière des dents)",
      "Aucune gêne à la parole ni à la mastication",
      "Sécurité maximale contre la récidive de l'encombrement",
    ],
    icon: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/67221028ddcacdd88de8774c_dental-implants.svg",
    image: "/images/Contention & Stabilisation du Sourire.jpg",
  },
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "cas-1-classe-ii-ortho-chirurgical",
    slug: "classe-ii-squelettique-traitement-ortho-chirurgical",
    title: "Cas Clinique N°1 : Classe II Squelettique & Traitement Ortho-Chirurgical",
    subtitle:
      "Correction d'une Classe II squelettique majeure avec overjet de 15 mm par approche combinée ortho-chirurgicale et extraction des deuxièmes prémolaires",
    category: "bagues",
    categoryLabel: "Chirurgie & Multi-Attaches",
    patientProfile: "Patiente de 17 ans — Asma",
    patientAge: "17 ans",
    patientName: "Asma",
    consultationMotive: "Dents antérieures très avancées & inocclusion labiale",
    duration: "Traitement complet (Préparation orthodontique, chirurgie bi-maxillaire et finitions)",
    technique:
      "Appareillage multi-attaches de 7 à 7 + Extractions 15, 25, 35, 45 + Chirurgie bi-maxillaire (avancée mandibulaire et impaction maxillaire) + Contention collée",
    diagnosis:
      "Classe II squelettique sévère (ANB 13°), hyperdivergence faciale, overjet majeur de 14 à 15 mm, profil très convexe, rétrognathie mandibulaire, sillon labio-mentonnier en S allongé, inocclusion labiale et sourire gingival.",
    diagnosticSquelettique:
      "Classe II squelettique (SNA 85°, SNB 73°, ANB 13°), hyperdivergence faciale (FMA 43°).",
    diagnosticDentoAlveolaire:
      "Classe II molaire et canine bilatérale, overjet de 14 à 15 mm, overbite de -0,5 à 1 mm, déviation du milieu incisif inférieur de 3 mm à droite, rotation DP de 12, vestibulo-position de 13, lingo-position de 35 et 45.",
    diagnosticCutane:
      "Profil très convexe, angle naso-labial fermé, sillon labio-mentonnier en S allongé, rétrogénie, étage inférieur augmenté, inocclusion labiale au repos et sourire gingival.",
    diagnosticFonctions:
      "Déglutition dysfonctionnelle atypique et respiration buccale.",
    solution:
      "Traitement combiné ortho-chirurgical avec extraction des 4 deuxièmes prémolaires (15, 25, 35, 45) et des germes des dents de sagesse. Nivellement des arcades sur arcs NiTi et acier, préparation d'arcs chirurgicaux coordonnés .019x.025 acier, temps chirurgical bi-maxillaire, élastiques de Classe II post-chirurgicaux avec carré antérieur, finitions par plicatures d'arcs et pose de contention collée linguale.",
    result:
      "Métamorphose esthétique et fonctionnelle : harmonisation totale du profil facial, normalisation de l'overjet et de l'overbite, disparition du sourire gingival, occlusion stable en Classe I et réduction spectaculaire de l'angle ANB de 13° à 4°.",
    beforeImage: "/cas-cliniques/cas-1/before_face_smile.jpg",
    afterImage: "/cas-cliniques/cas-1/after_face_smile.jpg",
    highlightBadge: "Cas Ortho-Chirurgical Majeur",
    institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
    practitioner: "Dr Mahmoud Qalalwa (Résident)",
    supervisors: [
      "Pr. Adel Ben Amor",
      "Pr. Samir Tobji",
      "Pr. Ines Dallel",
      "AHU. Wiem Ben Amor",
    ],
    images: {
      beforeFaceRepos: "/cas-cliniques/cas-1/before_face_repos.jpg",
      beforeFaceSmile: "/cas-cliniques/cas-1/before_face_smile.jpg",
      beforeFaceProfile: "/cas-cliniques/cas-1/before_face_profile.jpg",
      afterFaceRepos: "/cas-cliniques/cas-1/after_face_repos.jpg",
      afterFaceSmile: "/cas-cliniques/cas-1/after_face_smile.jpg",
      afterFaceProfile: "/cas-cliniques/cas-1/after_face_profile.jpg",
      smileComparison: "/cas-cliniques/cas-1/before_after_smile_comparison.jpg",
      faceComparison: "/cas-cliniques/cas-1/before_after_face_comparison.jpg",
      intraoralComparison: "/cas-cliniques/cas-1/before_after_intraoral_comparison.jpg",
      beforeIntraoral: "/cas-cliniques/cas-1/before_intraoral_overjet.jpg",
      afterIntraoral: "/cas-cliniques/cas-1/after_intraoral_occlusion.jpg",
      aestheticSmile: "/cas-cliniques/cas-1/after_aesthetic_3_4.jpg",
      initialRadios: "/cas-cliniques/cas-1/page_12.jpg",
      initialCephalo: "/cas-cliniques/cas-1/page_13.jpg",
      levelingPhoto: "/cas-cliniques/cas-1/page_22.jpg",
      postSurgeryPhoto: "/cas-cliniques/cas-1/page_24.jpg",
      finalRadios: "/cas-cliniques/cas-1/page_32.jpg",
      finalCephalo: "/cas-cliniques/cas-1/page_33.jpg",
      superpositions: "/cas-cliniques/cas-1/page_34.jpg",
      allSlides: Array.from({ length: 37 }, (_, i) => `/cas-cliniques/cas-1/page_${i + 1}.jpg`),
    },
    cephalometry: [
      { parameter: "SNA", mean: "82° ± 2°", initial: "85°", final: "84°" },
      { parameter: "SNB", mean: "80° ± 2°", initial: "73°", final: "80°" },
      { parameter: "ANB", mean: "2° ± 2°", initial: "13°", final: "4°" },
      { parameter: "FMIA", mean: "68° ± 3°", initial: "57°", final: "55°" },
      { parameter: "IMPA", mean: "87° ± 3°", initial: "80°", final: "87°" },
      { parameter: "FMA", mean: "25° ± 3°", initial: "43°", final: "38°" },
      { parameter: "I / i", mean: "135°", initial: "113°", final: "125°" },
      { parameter: "I / F", mean: "107°", initial: "125°", final: "112°" },
    ],
    treatmentSteps: [
      {
        phase: "Phase 1 : Diagnostic & Préparation",
        maxillary: "Bilan photographique, céphalométrie (ANB 13°), overjet 14-15mm",
        mandibular: "Extraction des deuxièmes prémolaires 15, 25 et 35, 45 + germes des dents de sagesse",
      },
      {
        phase: "Phase 2 : Nivellement & Alignement",
        maxillary: "Appareillage 7 à 7, arcs progressifs .014 NiTi, .018 NiTi, .018 Acier, 17*25 NiTi",
        mandibular: "Appareillage 7 à 7, nivellement et rétraction antérieure sur arcs acier .017*.025 et .018*.025",
      },
      {
        phase: "Phase 3 : Phase Chirurgicale Bi-Maxillaire",
        maxillary: "Préparation des arcs chirurgicaux .019*.025 acier avec crochets soudés",
        mandibular: "Impaction maxillaire et avancée mandibulaire pour corriger la Classe II squelettique",
      },
      {
        phase: "Phase 4 : Finition, Élastiques & Contention",
        maxillary: "Mécanique de Classe II avec carré antérieur et élastiques post-chirurgicaux",
        mandibular: "Plicatures de finitions sur les arcs, dépose et pose d'une contention linguale collée",
      },
    ],
  },
  {
    id: "cas-2-classe-i-ddm-extraction-premolaire",
    slug: "classe-i-ddm-encombrement-extraction-premolaire",
    title: "Cas Clinique N°2 : Classe I DDM & Encombrement Sévère avec Reconstitution des 12/22",
    subtitle:
      "Traitement multi-attaches en technique de Roth avec avulsion des premières prémolaires et reconstitution esthétique des incisives latérales",
    category: "encombrement",
    categoryLabel: "Encombrement & Multi-Attaches",
    patientProfile: "Patiente de 15 ans — Tasnime",
    patientAge: "15 ans",
    patientName: "Tasnime",
    consultationMotive: "Encombrement dentaire important & malocclusion",
    duration: "Traitement complet multi-attaches (Nivellement, fermeture des espaces et finitions)",
    technique:
      "Appareillage multi-attaches de 7 à 7 en technique de Roth + Extractions 14, 24, 34, 44 + Cales + Fermeture des espaces par chaînettes + Reconstitution résine composite 12/22 + Contention collée",
    diagnosis:
      "Classe I squelettique, Classe II subdivision droite, inversé d'articulé antérieur 12/21/22/32/31, rotation MP de 12 et MV des 13/23, déviation du milieu incisif de 2 mm à droite, profil légèrement convexe et déglutition atypique.",
    diagnosticSquelettique:
      "Classe I squelettique (SNA 82°, SNB 80°, ANB 2°), normodivergence faciale (FMA 29°).",
    diagnosticDentoAlveolaire:
      "Classe II subdivision droite, inversé d'articulé au niveau des 12/21/22/32/31, overjet irrégulier de 1 à 2 mm, overbite de 2 mm, déviation du MII supérieur de 2 mm vers la droite, rotation MP de 12, rotation MV de 13 et 23, rotation ML de 31, 32 et 41.",
    diagnosticCutane:
      "Profil harmonieux légèrement convexe, angle naso-labial ouvert, sillon labio-mentonnier en S accentué, étage supérieur diminué, PSM droit.",
    diagnosticFonctions:
      "Déglutition dysfonctionnelle, respiration nasale, phonation normale, parafonctions RAS.",
    solution:
      "Traitement orthodontique multi-attaches en technique de Roth de 7 à 7 avec extractions des 4 premières prémolaires (14, 24, 34, 44). Cales de déverrouillage, nivellement par arcs .014 NiTi avec chaînettes sur canines, progression d'arcs (.018 NiTi, .018 acier, 17*25 NiTi, .017*.025 acier, .018*.025 acier), fermeture des espaces par chaînettes élastiques avec perte d'ancrage permise, coordination des arcades sur arcs .019*.025 acier, reconstitution esthétique à la résine composite des 12 et 22, finitions et contention collée.",
    result:
      "Alignement parfait des arcades dentaires, résolution intégrale de l'inversé d'articulé et des rotations, coïncidence rigoureuse des milieux incisifs, occlusion stable en Classe I, sourire rayonnant et harmonieux.",
    beforeImage: "/cas-cliniques/cas-2/before_face_smile.jpg",
    afterImage: "/cas-cliniques/cas-2/after_face_smile.jpg",
    highlightBadge: "Correction d'Encombrement Complexe",
    institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
    practitioner: "Dr Mahmoud Qalalwa (Résident)",
    supervisors: [
      "Pr. Adel Ben Amor",
      "Pr. Samir Tobji",
      "Pr. Ines Dallel",
      "AHU. Wiem Ben Amor",
    ],
    images: {
      beforeFaceRepos: "/cas-cliniques/cas-2/before_face_repos.jpg",
      beforeFaceSmile: "/cas-cliniques/cas-2/before_face_smile.jpg",
      beforeFaceProfile: "/cas-cliniques/cas-2/before_face_profile.jpg",
      afterFaceRepos: "/cas-cliniques/cas-2/after_face_repos.jpg",
      afterFaceSmile: "/cas-cliniques/cas-2/after_face_smile.jpg",
      afterFaceProfile: "/cas-cliniques/cas-2/after_face_profile.jpg",
      smileComparison: "/cas-cliniques/cas-2/before_after_smile_comparison.jpg",
      faceComparison: "/cas-cliniques/cas-2/before_after_face_comparison.jpg",
      intraoralComparison: "/cas-cliniques/cas-2/before_after_intraoral_comparison.jpg",
      beforeIntraoral: "/cas-cliniques/cas-2/before_intraoral.jpg",
      afterIntraoral: "/cas-cliniques/cas-2/after_intraoral.jpg",
      aestheticSmile: "/cas-cliniques/cas-2/after_aesthetic_3_4.jpg",
      initialRadios: "/cas-cliniques/cas-2/page_12.jpg",
      initialCephalo: "/cas-cliniques/cas-2/page_13.jpg",
      levelingPhoto: "/cas-cliniques/cas-2/page_21.jpg",
      postSurgeryPhoto: "/cas-cliniques/cas-2/page_22.jpg",
      finalRadios: "/cas-cliniques/cas-2/page_28.jpg",
      finalCephalo: "/cas-cliniques/cas-2/page_29.jpg",
      superpositions: "/cas-cliniques/cas-2/page_30.jpg",
      allSlides: Array.from({ length: 34 }, (_, i) => `/cas-cliniques/cas-2/page_${i + 1}.jpg`),
    },
    cephalometry: [
      { parameter: "SNA", mean: "82° ± 2°", initial: "82°", final: "82°" },
      { parameter: "SNB", mean: "80° ± 2°", initial: "80°", final: "79,5°" },
      { parameter: "ANB", mean: "2° ± 2°", initial: "2°", final: "2,5°" },
      { parameter: "FMIA", mean: "68° ± 3°", initial: "56°", final: "53°" },
      { parameter: "IMPA", mean: "87° ± 3°", initial: "95°", final: "89°" },
      { parameter: "FMA", mean: "25° ± 3°", initial: "29°", final: "28°" },
      { parameter: "I / i", mean: "135°", initial: "120°", final: "137°" },
      { parameter: "I / F", mean: "107°", initial: "119°", final: "116°" },
    ],
    treatmentSteps: [
      {
        phase: "Phase 1 : Diagnostic & Avulsions Thérapeutiques",
        maxillary: "Bilan photographique et radiologique, extraction des 14/24 + pose de cales de déverrouillage",
        mandibular: "Extraction des premières prémolaires 34/44 pour libérer l'espace d'alignement",
      },
      {
        phase: "Phase 2 : Nivellement & Alignement Progressif",
        maxillary: "Appareillage 7 à 7, arc .014 NiTi avec chaînettes légèrement tendues sur les canines, puis .018 NiTi, .018 Acier, 17*25 NiTi",
        mandibular: "Appareillage 7 à 7, nivellement progressif sur arcs .014 NiTi, .018 NiTi, .018 Acier, 17*25 NiTi",
      },
      {
        phase: "Phase 3 : Fermeture des Espaces & Reconstitution",
        maxillary: "Arcs .017*.025 et .018*.025 acier, traction par chaînettes avec perte d'ancrage permise, reconstitution composite des 12/22",
        mandibular: "Arcs .017*.025 et .018*.025 acier, fermeture progressive des espaces résiduels par chaînettes",
      },
      {
        phase: "Phase 4 : Coordination des Arcades & Contention",
        maxillary: "2 arcs coordonnés .019*.025 acier, plicatures de finitions pour l'expression parfaite des torques",
        mandibular: "Plicatures de finitions sur les arcs, stabilisation occlusale et pose de contention collée linguale",
      },
    ],
  },
  {
    id: "cas-3-classe-i-canine-ectopique",
    slug: "classe-i-ddm-canine-ectopique-reconstitution-laterales",
    title: "Cas Clinique N°3 : Canine Ectopique Sévère & Reconstitution des Latérales",
    subtitle:
      "Prise en charge d'une dysharmonie dento-maxillaire avec canine 13 en haute vestibulo-position et réhabilitation du guide canin",
    category: "bagues",
    categoryLabel: "Canine Ectopique & Multi-Attaches",
    patientProfile: "Patient de 19 ans — Mohammed",
    patientAge: "19 ans",
    patientName: "Mohammed",
    consultationMotive: "Canine supérieure droite très haute & mal positionnée (13 ectopique)",
    duration: "Traitement complet multi-attaches (Ancrage squelettique, traction canine, nivellement et finitions)",
    technique:
      "Appareillage multi-attaches en technique de Roth + Extractions prémolaires + Arc transpalatin maxillaire + Arc lingual et arc à la déformation mandibulaire + Reverse Spee + Reconstitution 12/22 + Contention",
    diagnosis:
      "Classe I squelettique, Classe I molaire et canine, canine 13 en ectopie vestibulaire haute, inversé d'articulé de la 12, overbite augmenté de 3 à 4 mm, rotations MP des 12/22 et MV des 33/43/44, supraclusion d'origine mandibulaire.",
    diagnosticSquelettique:
      "Classe I squelettique (SNA 82°, SNB 80°, ANB 2°), normodivergence faciale (FMA 23°).",
    diagnosticDentoAlveolaire:
      "Classe I molaire et canine, canine 13 ectopique en haute vestibulo-position, overjet irrégulier de -1 à 2 mm, overbite de 3 à 4 mm, déviation du MII de 2 mm à droite, rotation MP de 12 et 22, rotation MV des 33, 43 et 44.",
    diagnosticCutane:
      "Profil harmonieux légèrement convexe, angle naso-labial normal, sillon labio-mentonnier en S allongé, légère rétrogénie, étage inférieur augmenté, PSM droit.",
    diagnosticFonctions:
      "Déglutition dysfonctionnelle, respiration nasale, phonation normale, parafonctions RAS.",
    solution:
      "Traitement multi-attaches de 7 à 7 en technique de Roth avec avulsion des prémolaires. Ancrage maxillaire par arc transpalatin et arc lingual mandibulaire avec arc à la déformation .018 acier. Traction et descente progressive de la canine ectopique 13 après recul des 33/43, nivellement séquentiel (.012 NiTi à .018*.025 acier), nivellement de la courbe de Spee par arc à courbe de Spee inversée (reverse Spee), reconstitution esthétique à la résine composite des latérales 12 et 22, finitions par plicatures d'arcs et pose de contention collée linguale.",
    result:
      "Réintégration anatomique et fonctionnelle parfaite de la canine ectopique 13 sur l'arcade, nivellement complet de la supraclusion, occlusion en Classe I canine et molaire avec guide canin fonctionnel, symétrie des arcades et transformation éclatante du sourire.",
    beforeImage: "/cas-cliniques/cas-3/before_face_smile.jpg",
    afterImage: "/cas-cliniques/cas-3/after_face_smile.jpg",
    highlightBadge: "Sauvetage de Canine Ectopique",
    institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
    practitioner: "Dr Mahmoud Qalalwa (Résident)",
    supervisors: [
      "Pr. Adel Ben Amor",
      "Pr. Samir Tobji",
      "Pr. Ines Dallel",
      "AHU. Wiem Ben Amor",
    ],
    images: {
      beforeFaceRepos: "/cas-cliniques/cas-3/before_face_repos.jpg",
      beforeFaceSmile: "/cas-cliniques/cas-3/before_face_smile.jpg",
      beforeFaceProfile: "/cas-cliniques/cas-3/before_face_profile.jpg",
      afterFaceRepos: "/cas-cliniques/cas-3/after_face_repos.jpg",
      afterFaceSmile: "/cas-cliniques/cas-3/after_face_smile.jpg",
      afterFaceProfile: "/cas-cliniques/cas-3/after_face_profile.jpg",
      smileComparison: "/cas-cliniques/cas-3/before_after_smile_comparison.jpg",
      faceComparison: "/cas-cliniques/cas-3/before_after_face_comparison.jpg",
      intraoralComparison: "/cas-cliniques/cas-3/before_after_intraoral_comparison.jpg",
      beforeIntraoral: "/cas-cliniques/cas-3/before_intraoral.jpg",
      afterIntraoral: "/cas-cliniques/cas-3/after_intraoral.jpg",
      aestheticSmile: "/cas-cliniques/cas-3/after_aesthetic_3_4.jpg",
      initialRadios: "/cas-cliniques/cas-3/page_12.jpg",
      initialCephalo: "/cas-cliniques/cas-3/page_13.jpg",
      levelingPhoto: "/cas-cliniques/cas-3/page_21.jpg",
      postSurgeryPhoto: "/cas-cliniques/cas-3/page_24.jpg",
      finalRadios: "/cas-cliniques/cas-3/page_30.jpg",
      finalCephalo: "/cas-cliniques/cas-3/page_31.jpg",
      superpositions: "/cas-cliniques/cas-3/page_32.jpg",
      allSlides: Array.from({ length: 34 }, (_, i) => `/cas-cliniques/cas-3/page_${i + 1}.jpg`),
    },
    cephalometry: [
      { parameter: "SNA", mean: "82° ± 2°", initial: "82°", final: "81°" },
      { parameter: "SNB", mean: "80° ± 2°", initial: "80°", final: "80°" },
      { parameter: "ANB", mean: "2° ± 2°", initial: "2°", final: "1°" },
      { parameter: "FMIA", mean: "68° ± 3°", initial: "57°", final: "60°" },
      { parameter: "IMPA", mean: "87° ± 3°", initial: "100°", final: "96°" },
      { parameter: "FMA", mean: "25° ± 3°", initial: "23°", final: "24°" },
      { parameter: "I / i", mean: "135°", initial: "128°", final: "120°" },
      { parameter: "I / F", mean: "107°", initial: "106°", final: "113°" },
    ],
    treatmentSteps: [
      {
        phase: "Phase 1 : Ancrage Squelettique & Préparation",
        maxillary: "Extraction des prémolaires, pose d'un arc transpalatin d'ancrage et appareillage maxillaire 6 à 6",
        mandibular: "Extraction des prémolaires, pose d'un arc lingual et arc à la déformation .018 acier",
      },
      {
        phase: "Phase 2 : Rétraction Canine & Descente de la 13",
        maxillary: "Nivellement progressif (.012 NiTi à 17*25 NiTi) et guidage précis de la canine 13 dans le couloir occlusal",
        mandibular: "Nivellement mandibulaire (.014 NiTi, .018 NiTi, .018 Acier) après recul des canines 33 et 43",
      },
      {
        phase: "Phase 3 : Nivellement de la Courbe de Spee & Reconstitution",
        maxillary: "Fermeture des espaces par chaînettes et ressorts, reconstitution esthétique à la résine composite des 12/22",
        mandibular: "Mise en place d'un arc à courbe de Spee inversée (Reverse Spee) pour lever la supraclusion d'origine mandibulaire",
      },
      {
        phase: "Phase 4 : Coordination, Plicatures & Contention",
        maxillary: "Coordination des arcades sur 2 arcs coordonnés .019*.025 acier, plicatures de finitions",
        mandibular: "Stabilisation de la Classe I canine et molaire, dépose et pose de la contention collée linguale",
      },
    ],
  },
  {
    id: "cas-4-classe-i-extraction-deuxiemes-premolaires",
    slug: "classe-i-squelettique-extraction-deuxiemes-premolaires-atm",
    title: "Cas Clinique N°4 : Classe I Squelettique avec Extraction des 2èmes Prémolaires & Dysfonction ATM",
    subtitle:
      "Prise en charge d'un encombrement antérieur sévère et de douleurs temporo-mandibulaires par mécanique de nivellement et contrôle d'ancrage",
    category: "encombrement",
    categoryLabel: "Encombrement & ATM",
    patientProfile: "Patiente de 17 ans — Dorsaf",
    patientAge: "17 ans",
    patientName: "Dorsaf",
    consultationMotive: "Malposition des dents antérieures & douleurs des articulations temporo-mandibulaires (ATM)",
    duration: "Traitement complet multi-attaches (Extractions 15/25 et 35/45, nivellement progressif et centrage des milieux)",
    technique:
      "Appareillage multi-attaches en technique de Roth de 7 à 7 + Extractions des deuxièmes prémolaires (15, 25, 35, 45) + Mécanique de Classe II avec chaînettes + Contention collée",
    diagnosis:
      "Classe I squelettique (ANB 4°), hyperdivergence faciale (FMA 32°), Classe I molaire et canine à droite, Classe III molaire et Classe II canine à gauche, overjet irrégulier de 1 à 4 mm, déviation du milieu incisif de 2 mm à droite, rotations multiples et douleurs ATM.",
    diagnosticSquelettique:
      "Classe I squelettique (SNA 82°, SNB 78°, ANB 4°), hyperdivergence faciale (FMA 32°).",
    diagnosticDentoAlveolaire:
      "Classe I M et C côté droit, Classe III M et Classe II C côté gauche, overjet irrégulier de 1 à 4 mm, overbite de 0,5 à 3 mm, déviation du MII supérieur de 2 mm vers la droite, DDD par défaut maxillaire antérieur, rotation MP de 11 et 22, rotation DP de 24 et 14, vestibulo-position de 21, rotation ML de 45, rotation MV de 44.",
    diagnosticCutane:
      "Profil convexe, angle naso-labial ouvert, sillon labio-mentonnier en S allongé, étage inférieur augmenté, normogénie, plan sagittal médian droit.",
    diagnosticFonctions:
      "Déglutition dysfonctionnelle, respiration nasale, phonation normale, parafonctions RAS.",
    solution:
      "Traitement orthodontique multi-attaches en technique de Roth de 7 à 7 après avulsion des 4 deuxièmes prémolaires (15, 25, 35, 45). Nivellement progressif sur arcs NiTi (.012 NiTi, .014 NiTi avec couple de force sur la 44, .018 NiTi, .018 Acier, 17*25 NiTi, .017*.025 acier, .018*.025 acier), mécanique de Classe II associée à des chaînettes de 7 à 7 pour centrer les milieux incisifs, coordination des arcades sur arcs .019*.025 acier, finitions occlusales et contention linguale collée.",
    result:
      "Disparition complète des douleurs articulaires des ATM, centrage parfait des milieux dentaires, relation molaire et canine de Classe I bilatérale, correction totale de l'encombrement et sourire épanoui.",
    beforeImage: "/cas-cliniques/cas-4/before_face_smile.jpg",
    afterImage: "/cas-cliniques/cas-4/after_face_smile.jpg",
    highlightBadge: "Résolution ATM & Encombrement",
    institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
    practitioner: "Dr Mahmoud Qalalwa (Résident)",
    supervisors: [
      "Pr. Adel Ben Amor",
      "Pr. Samir Tobji",
      "Pr. Ines Dallel",
      "AHU. Wiem Ben Amor",
    ],
    images: {
      beforeFaceRepos: "/cas-cliniques/cas-4/before_face_repos.jpg",
      beforeFaceSmile: "/cas-cliniques/cas-4/before_face_smile.jpg",
      beforeFaceProfile: "/cas-cliniques/cas-4/before_face_profile.jpg",
      afterFaceRepos: "/cas-cliniques/cas-4/after_face_repos.jpg",
      afterFaceSmile: "/cas-cliniques/cas-4/after_face_smile.jpg",
      afterFaceProfile: "/cas-cliniques/cas-4/after_face_profile.jpg",
      smileComparison: "/cas-cliniques/cas-4/before_after_smile_comparison.jpg",
      faceComparison: "/cas-cliniques/cas-4/before_after_face_comparison.jpg",
      intraoralComparison: "/cas-cliniques/cas-4/before_after_intraoral_comparison.jpg",
      beforeIntraoral: "/cas-cliniques/cas-4/before_intraoral.jpg",
      afterIntraoral: "/cas-cliniques/cas-4/after_intraoral.jpg",
      aestheticSmile: "/cas-cliniques/cas-4/after_aesthetic_3_4.jpg",
      initialRadios: "/cas-cliniques/cas-4/page_12.jpg",
      initialCephalo: "/cas-cliniques/cas-4/page_13.jpg",
      levelingPhoto: "/cas-cliniques/cas-4/page_21.jpg",
      postSurgeryPhoto: "/cas-cliniques/cas-4/page_23.jpg",
      finalRadios: "/cas-cliniques/cas-4/page_29.jpg",
      finalCephalo: "/cas-cliniques/cas-4/page_30.jpg",
      superpositions: "/cas-cliniques/cas-4/page_31.jpg",
      allSlides: Array.from({ length: 34 }, (_, i) => `/cas-cliniques/cas-4/page_${i + 1}.jpg`),
    },
    cephalometry: [
      { parameter: "SNA", mean: "82° ± 2°", initial: "82°", final: "82°" },
      { parameter: "SNB", mean: "80° ± 2°", initial: "78°", final: "78°" },
      { parameter: "ANB", mean: "2° ± 2°", initial: "4°", final: "4°" },
      { parameter: "FMIA", mean: "68° ± 3°", initial: "45°", final: "59°" },
      { parameter: "IMPA", mean: "87° ± 3°", initial: "96°", final: "91°" },
      { parameter: "FMA", mean: "25° ± 3°", initial: "32°", final: "30°" },
      { parameter: "I / i", mean: "135°", initial: "121°", final: "133°" },
      { parameter: "I / F", mean: "107°", initial: "111°", final: "106°" },
    ],
    treatmentSteps: [
      {
        phase: "Phase 1 : Diagnostic & Extractions des 2èmes Prémolaires",
        maxillary: "Bilan radiologique et occlusal, avulsion des 15 et 25, appareillage de 7 à 7",
        mandibular: "Avulsion des 35 et 45, bilan fonctionnel des articulations temporo-mandibulaires",
      },
      {
        phase: "Phase 2 : Nivellement & Couple de Force",
        maxillary: "Nivellement séquentiel sur arcs .012 NiTi, .014 NiTi, .018 NiTi, .018 Acier, 17*25 NiTi",
        mandibular: "Nivellement sur arcs .014 NiTi avec application d'un couple de force au niveau de la 44",
      },
      {
        phase: "Phase 3 : Mécanique de Classe II & Chaînettes",
        maxillary: "Arcs acier .017*.025 et .018*.025 avec chaînette de 7 à 7 pour fermer les espaces résiduels",
        mandibular: "Mécanique élastique intermaxillaire de Classe II pendant 8 mois pour centrer les milieux",
      },
      {
        phase: "Phase 4 : Finition, Stabilité Occlusale & Contention",
        maxillary: "Coordination des arcades sur arcs .019*.025 acier, plicatures de finitions pour l'expression du torque",
        mandibular: "Vérification du confort articulaire ATM, dépose et pose d'une contention linguale collée",
      },
    ],
  },
  {
    id: "cas-5-classe-ii-squelettique-diastemes-sans-extraction",
    slug: "classe-ii-squelettique-diastemes-reeducation-eln-sans-extraction",
    title: "Cas Clinique N°5 : Classe II Squelettique avec Diastèmes Multiples & Traitement sans Extraction",
    subtitle:
      "Réhabilitation occlusale et esthétique sans avulsion dentaire par Enveloppe Linguale Nocturne (ELN) et fermeture des diastèmes",
    category: "diasteme",
    categoryLabel: "Diastèmes & Sans Extraction",
    patientProfile: "Patiente de 22 ans — Amenie",
    patientAge: "22 ans",
    patientName: "Amenie",
    consultationMotive: "Dents antérieures avancées, espacées & inocclusion labiale",
    duration: "Traitement complet (6 mois de rééducation fonctionnelle ELN + multi-attaches sans extraction)",
    technique:
      "Rééducation fonctionnelle par Enveloppe Linguale Nocturne (ELN double bandeau) + Appareillage multi-attaches de 6 à 6 sans extraction + Arc transpalatin + Fermeture de diastèmes par chaînettes + Prothèse conjointe sur 15 + Contention",
    diagnosis:
      "Classe II squelettique (SNA 83°, SNB 77°, ANB 5°), normodivergence faciale (FMA 26°), biproalvéolie avec diastèmes multiples étendus à tout le bloc incisivo-canin supérieur et inférieur, profil convexe, biprochéilie et déglutition atypique avec respiration buccale.",
    diagnosticSquelettique:
      "Classe II squelettique (SNA 83°, SNB 77°, ANB 5°), normodivergence faciale (FMA 26°).",
    diagnosticDentoAlveolaire:
      "Classe I molaire et canine bilatérale, overjet irrégulier de 1 à 3 mm, overbite de 0,5 à 3 mm, biproalvéolie, diastèmes disséminés sur tout le groupe incisivo-canin maxillaire et mandibulaire, rotation de 90° de la 24, rotation ML de la 44, coïncidence des milieux incisifs.",
    diagnosticCutane:
      "Profil convexe, angle naso-labial fermé, sillon labio-mentonnier en S allongé, biprochéilie, étage moyen diminué, plan sagittal médian droit.",
    diagnosticFonctions:
      "Déglutition dysfonctionnelle (poussée linguale antérieure atypique), respiration buccale prédominante.",
    solution:
      "Prise en charge non-extractionnelle débutant par 6 mois de port d'une Enveloppe Linguale Nocturne (ELN double bandeau) pour corriger la posture de la langue et rééduquer la ventilation. Pose d'un arc transpalatin (ATP) et appareillage multi-attaches 6 à 6 en technique de Roth. Nivellement progressif (.014 NiTi à .018*.025 acier), recul et repositionnement incisif inférieur pour générer l'overjet nécessaire, fermeture de l'ensemble des diastèmes par chaînettes élastiques continues, égression antérieure et ingression postérieure pour normaliser l'overbite, pose d'une prothèse conjointe sur la 15, coordination des arcades sur arcs .018*.025 acier et contention collée.",
    result:
      "Fermeture intégrale de tous les diastèmes, réduction spectaculaire de la biproalvéolie et de la biprochéilie, profil facial harmonisé, compétence labiale au repos et occlusion parfaite en Classe I.",
    beforeImage: "/cas-cliniques/cas-5/before_face_smile.jpg",
    afterImage: "/cas-cliniques/cas-5/after_face_smile.jpg",
    highlightBadge: "Fermeture de Diastèmes & ELN",
    institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
    practitioner: "Dr Mahmoud Qalalwa (Résident)",
    supervisors: [
      "Pr. Adel Ben Amor",
      "Pr. Samir Tobji",
      "Pr. Ines Dallel",
      "AHU. Wiem Ben Amor",
    ],
    images: {
      beforeFaceRepos: "/cas-cliniques/cas-5/before_face_repos.jpg",
      beforeFaceSmile: "/cas-cliniques/cas-5/before_face_smile.jpg",
      beforeFaceProfile: "/cas-cliniques/cas-5/before_face_profile.jpg",
      afterFaceRepos: "/cas-cliniques/cas-5/after_face_repos.jpg",
      afterFaceSmile: "/cas-cliniques/cas-5/after_face_smile.jpg",
      afterFaceProfile: "/cas-cliniques/cas-5/after_face_profile.jpg",
      smileComparison: "/cas-cliniques/cas-5/before_after_smile_comparison.jpg",
      faceComparison: "/cas-cliniques/cas-5/before_after_face_comparison.jpg",
      intraoralComparison: "/cas-cliniques/cas-5/before_after_intraoral_comparison.jpg",
      beforeIntraoral: "/cas-cliniques/cas-5/before_intraoral.jpg",
      afterIntraoral: "/cas-cliniques/cas-5/after_intraoral.jpg",
      aestheticSmile: "/cas-cliniques/cas-5/after_aesthetic_3_4.jpg",
      initialRadios: "/cas-cliniques/cas-5/page_12.jpg",
      initialCephalo: "/cas-cliniques/cas-5/page_13.jpg",
      levelingPhoto: "/cas-cliniques/cas-5/page_21.jpg",
      postSurgeryPhoto: "/cas-cliniques/cas-5/page_23.jpg",
      finalRadios: "/cas-cliniques/cas-5/page_30.jpg",
      finalCephalo: "/cas-cliniques/cas-5/page_31.jpg",
      superpositions: "/cas-cliniques/cas-5/page_32.jpg",
      allSlides: Array.from({ length: 35 }, (_, i) => `/cas-cliniques/cas-5/page_${i + 1}.jpg`),
    },
    cephalometry: [
      { parameter: "SNA", mean: "82° ± 2°", initial: "83°", final: "83°" },
      { parameter: "SNB", mean: "80° ± 2°", initial: "77°", final: "77°" },
      { parameter: "ANB", mean: "2° ± 2°", initial: "5°", final: "5°" },
      { parameter: "FMIA", mean: "68° ± 3°", initial: "45°", final: "52°" },
      { parameter: "IMPA", mean: "87° ± 3°", initial: "109°", final: "103°" },
      { parameter: "FMA", mean: "25° ± 3°", initial: "26°", final: "25°" },
      { parameter: "I / i", mean: "135°", initial: "98°", final: "120°" },
      { parameter: "I / F", mean: "107°", initial: "125°", final: "116°" },
    ],
    treatmentSteps: [
      {
        phase: "Phase 1 : Rééducation Fonctionnelle par ELN",
        maxillary: "Port d'une Enveloppe Linguale Nocturne (ELN double bandeau) pendant 6 mois pour rééduquer la langue",
        mandibular: "Élimination des forces néfastes de la déglutition atypique sur les procès alvéolaires",
      },
      {
        phase: "Phase 2 : Ancrage ATP & Nivellement Initial",
        maxillary: "Pose d'un arc transpalatin (ATP) d'ancrage et appareillage 6 à 6 sur arcs .014 NiTi à 17*25 NiTi",
        mandibular: "Appareillage 6 à 6, nivellement progressif pour préparer le recul incisif",
      },
      {
        phase: "Phase 3 : Repositionnement Incisif & Fermeture des Diastèmes",
        maxillary: "Fermeture active de tous les espaces incisivo-canins par chaînettes élastiques continues",
        mandibular: "Création d'overjet par repositionnement incisif inférieur, égression antérieure et ingression postérieure",
      },
      {
        phase: "Phase 4 : Réhabilitation Prothétique sur 15 & Contention",
        maxillary: "Coordination des arcades sur arcs .018*.025 acier, confection d'une prothèse conjointe sur la 15",
        mandibular: "Stabilisation des torques incisifs et pose d'une attelle de contention collée linguale",
      },
    ],
  },
  {
    id: "cas-6-classe-ii-division-2-distalisation-minivis",
    slug: "classe-ii-division-2-distalisation-minivis-supraclusion",
    title: "Cas Clinique N°6 : Classe II Division 2 par Distalisation sur Minivis & Reconstitution Esthétique",
    subtitle:
      "Correction d'une Classe II division 2 avec supraclusion sévère de 6 mm par ancrage squelettique sur minivis sans extraction",
    category: "bagues",
    categoryLabel: "Distalisation sur Minivis",
    patientProfile: "Patiente de 15 ans — Athyl",
    patientAge: "15 ans",
    patientName: "Athyl",
    consultationMotive: "Encombrement, supraclusion et malposition sévère des dents antérieures",
    duration: "Traitement complet multi-attaches sans extraction (Ancrage sur minivis, distalisation et finitions esthétiques)",
    technique:
      "Appareillage multi-attaches de 7 à 7 en technique de Roth sans extraction + 2 minivis d'ancrage inter-radiculaires + Reconstitution des cingulums en résine composite + Distalisation avec ancrage indirect + Ressorts + Reconstitution esthétique des 4 incisives supérieures + Contention",
    diagnosis:
      "Classe II squelettique (SNA 84°, SNB 79°, ANB 5°), normodivergence faciale (FMA 21°), Classe II rapport 1/1 canine et molaire, palatoversion marquée des incisives supérieures (Classe II div 2), supraclusion sévère avec overbite de 4 à 6 mm, DDD par défaut maxillaire antérieur et postérieur, rotations multiples et sourire étroit.",
    diagnosticSquelettique:
      "Classe II squelettique (SNA 84°, SNB 79°, ANB 5°), normodivergence faciale (FMA 21°).",
    diagnosticDentoAlveolaire:
      "Classe II molaire et canine bilatérale rapport 1/1, overjet irrégulier de 1 à 4 mm, palatoversion du groupe incisif supérieur, supraclusion sévère (overbite de 4 à 6 mm), déviation du MII supérieur de 2 mm vers la droite, rotation MV de 12, 22, 13, 23, arcade maxillaire en U.",
    diagnosticCutane:
      "Profil harmonieux légèrement convexe, angle naso-labial normal, sillon labio-mentonnier en S allongé, égalité des étages, plan sagittal médian droit.",
    diagnosticFonctions:
      "Déglutition dysfonctionnelle, respiration nasale, phonation normale, parafonctions RAS.",
    solution:
      "Traitement multi-attaches de 7 à 7 sans extractions de prémolaires. Reconstitution en résine composite des cingulums incisifs supérieurs pour lever la supraclusion en raison de leur effacement initial. Pose de 2 minivis d'ancrage osseux inter-radiculaires entre 4 et 5 pour la distalisation du groupe prémolo-molaire avec ancrage indirect. Nivellement progressif (.014 NiTi à .018*.025 acier), ressorts ouverts entre incisives pour créer l'espace d'alignement, mécanique de Classe II, reconstitution cosmétique à la résine composite des 4 incisives supérieures, coordination des arcades sur arcs .018*.025 acier et contention collée.",
    result:
      "Levée totale de la supraclusion (overbite normalisé à 2 mm), redressement des axes incisifs supérieurs, correction de la Classe II en relation de Classe I molaire et canine solide, élargissement harmonieux du sourire et résultat esthétique sublime.",
    beforeImage: "/cas-cliniques/cas-6/before_face_smile.jpg",
    afterImage: "/cas-cliniques/cas-6/after_face_smile.jpg",
    highlightBadge: "Ancrage Squelettique sur Minivis",
    institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
    practitioner: "Dr Mahmoud Qalalwa (Résident)",
    supervisors: [
      "Pr. Adel Ben Amor",
      "Pr. Samir Tobji",
      "Pr. Ines Dallel",
      "AHU. Wiem Ben Amor",
    ],
    images: {
      beforeFaceRepos: "/cas-cliniques/cas-6/before_face_repos.jpg",
      beforeFaceSmile: "/cas-cliniques/cas-6/before_face_smile.jpg",
      beforeFaceProfile: "/cas-cliniques/cas-6/before_face_profile.jpg",
      afterFaceRepos: "/cas-cliniques/cas-6/after_face_repos.jpg",
      afterFaceSmile: "/cas-cliniques/cas-6/after_face_smile.jpg",
      afterFaceProfile: "/cas-cliniques/cas-6/after_face_profile.jpg",
      smileComparison: "/cas-cliniques/cas-6/before_after_smile_comparison.jpg",
      faceComparison: "/cas-cliniques/cas-6/before_after_face_comparison.jpg",
      intraoralComparison: "/cas-cliniques/cas-6/before_after_intraoral_comparison.jpg",
      beforeIntraoral: "/cas-cliniques/cas-6/before_intraoral.jpg",
      afterIntraoral: "/cas-cliniques/cas-6/after_intraoral.jpg",
      aestheticSmile: "/cas-cliniques/cas-6/after_aesthetic_3_4.jpg",
      initialRadios: "/cas-cliniques/cas-6/page_12.jpg",
      initialCephalo: "/cas-cliniques/cas-6/page_13.jpg",
      levelingPhoto: "/cas-cliniques/cas-6/page_21.jpg",
      postSurgeryPhoto: "/cas-cliniques/cas-6/page_23.jpg",
      finalRadios: "/cas-cliniques/cas-6/page_30.jpg",
      finalCephalo: "/cas-cliniques/cas-6/page_31.jpg",
      superpositions: "/cas-cliniques/cas-6/page_32.jpg",
      allSlides: Array.from({ length: 34 }, (_, i) => `/cas-cliniques/cas-6/page_${i + 1}.jpg`),
    },
    cephalometry: [
      { parameter: "SNA", mean: "82° ± 2°", initial: "84°", final: "84°" },
      { parameter: "SNB", mean: "80° ± 2°", initial: "79°", final: "81°" },
      { parameter: "ANB", mean: "2° ± 2°", initial: "5°", final: "3°" },
      { parameter: "FMIA", mean: "68° ± 3°", initial: "64°", final: "55°" },
      { parameter: "IMPA", mean: "87° ± 3°", initial: "95°", final: "101°" },
      { parameter: "FMA", mean: "25° ± 3°", initial: "21°", final: "26°" },
      { parameter: "I / i", mean: "135°", initial: "145°", final: "125°" },
      { parameter: "I / F", mean: "107°", initial: "104°", final: "112°" },
    ],
    treatmentSteps: [
      {
        phase: "Phase 1 : Levée de la Supraclusion & Reconstitution des Cingulums",
        maxillary: "Reconstitution en résine composite des cingulums incisifs pour déverrouiller l'occlusion",
        mandibular: "Appareillage 7 à 7 sur arc .014 NiTi pour débuter le nivellement de la courbe de Spee",
      },
      {
        phase: "Phase 2 : Ancrage Squelettique sur Minivis",
        maxillary: "Pose de 2 minivis inter-radiculaires entre 4 et 5 pour préparer la distalisation",
        mandibular: "Poursuite du nivellement progressif sur arcs .018 NiTi, .018 Acier, 17*25 NiTi",
      },
      {
        phase: "Phase 3 : Distalisation Prémolo-Molaire & Ressorts",
        maxillary: "Distalisation avec ancrage indirect, ressorts ouverts pour créer l'espace des latérales",
        mandibular: "Coordination et mécanique de Classe II pour harmoniser les rapports occlusaux",
      },
      {
        phase: "Phase 4 : Reconstitution Esthétique des Incisives & Contention",
        maxillary: "Reconstitution à la résine composite des 4 incisives supérieures, arcs de finition .018*.025 acier",
        mandibular: "Stabilisation occlusale complète et pose de l'attelle de contention collée linguale",
      },
    ],
  },
  {
    id: "cas-7-classe-i-extraction-incisive-31",
    slug: "classe-i-encombrement-extraction-incisive-31-quadhelix",
    title: "Cas Clinique N°7 : Classe I avec Extraction d'Incisive Inférieure (31) & Quadhélix",
    subtitle:
      "Traitement d'un encombrement antérieur avec arcade en lyre par expansion maxillaire au Quadhélix et avulsion atypique d'une incisive mandibulaire",
    category: "encombrement",
    categoryLabel: "Extraction Incisive 31 & Quadhélix",
    patientProfile: "Patiente de 18 ans — Iftikhar",
    patientAge: "18 ans",
    patientName: "Iftikhar",
    consultationMotive: "Malposition prononcée et chevauchement des dents antérieures",
    duration: "Traitement complet (Expansion maxillaire au Quadhélix, avulsion de la 31 et coordination)",
    technique:
      "Appareillage multi-attaches en technique de Roth de 6 à 6 + Quadhélix maxillaire + Extraction de l'incisive 31 + Stripping + Contention collée",
    diagnosis:
      "Classe I squelettique, normodivergence faciale, endoalvéolie maxillaire avec arcade en lyre, inversé d'articulé sur la 14, encombrement antérieur sévère avec lingo-version des 32 et 42, rotations multiples et profil convexe avec angle naso-labial fermé.",
    diagnosticSquelettique:
      "Classe I squelettique (SNA 80°, SNB 78°, ANB 2°), normodivergence faciale (FMA 27°), endoalvéolie.",
    diagnosticDentoAlveolaire:
      "Classe I molaire et canine, overjet de 0 à 2 mm, overbite de 0,5 à 2 mm, inversé d'articulé au niveau de la 14, arcade maxillaire étroite en lyre avec rotations MP des 11, 21, 14, 24, 23 et MV des 12, 13, arcade mandibulaire en U avec rotation DL des 33, 43 et lingo-version des 32, 42, coïncidence des milieux incisifs.",
    diagnosticCutane:
      "Profil convexe, angle naso-labial fermé, sillon labio-mentonnier en S allongé, égalité des étages, plan sagittal médian droit, lèvres charnues.",
    diagnosticFonctions:
      "Déglutition dysfonctionnelle, respiration nasale, phonation normale, parafonctions RAS.",
    solution:
      "Thérapeutique d'expansion maxillaire par Quadhélix pour corriger l'endoalvéolie et l'arcade en lyre, combinée à l'extraction stratégique de l'incisive inférieure 31 pour résoudre l'encombrement antérieur sévère sans extraire de prémolaires. Appareillage multi-attaches de 6 à 6, nivellement progressif (.014 NiTi à .018*.025 acier), stripping au niveau du secteur antéro-supérieur pour harmoniser les dimensions dentaires (indice de Bolton), fermeture des espaces à la mandibule par chaînette, coordination des arcades sur 2 arcs .018*.025 acier et contention collée.",
    result:
      "Élargissement harmonieux du sourire, correction complète de l'inversé d'articulé sur la 14, alignement idéal des arcades dentaires, occlusion stable en Classe I et résultat esthétique magnifique.",
    beforeImage: "/cas-cliniques/cas-7/before_face_smile.jpg",
    afterImage: "/cas-cliniques/cas-7/after_face_smile.jpg",
    highlightBadge: "Extraction Incisive 31 & Quadhélix",
    institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
    practitioner: "Dr Mahmoud Qalalwa (Résident)",
    supervisors: [
      "Pr. Adel Ben Amor",
      "Pr. Samir Tobji",
      "Pr. Ines Dallel",
      "AHU. Wiem Ben Amor",
    ],
    images: {
      beforeFaceRepos: "/cas-cliniques/cas-7/before_face_repos.jpg",
      beforeFaceSmile: "/cas-cliniques/cas-7/before_face_smile.jpg",
      beforeFaceProfile: "/cas-cliniques/cas-7/before_face_profile.jpg",
      afterFaceRepos: "/cas-cliniques/cas-7/after_face_repos.jpg",
      afterFaceSmile: "/cas-cliniques/cas-7/after_face_smile.jpg",
      afterFaceProfile: "/cas-cliniques/cas-7/after_face_profile.jpg",
      smileComparison: "/cas-cliniques/cas-7/before_after_smile_comparison.jpg",
      faceComparison: "/cas-cliniques/cas-7/before_after_face_comparison.jpg",
      intraoralComparison: "/cas-cliniques/cas-7/before_after_intraoral_comparison.jpg",
      beforeIntraoral: "/cas-cliniques/cas-7/before_intraoral.jpg",
      afterIntraoral: "/cas-cliniques/cas-7/after_intraoral.jpg",
      aestheticSmile: "/cas-cliniques/cas-7/after_aesthetic_3_4.jpg",
      initialRadios: "/cas-cliniques/cas-7/page_12.jpg",
      initialCephalo: "/cas-cliniques/cas-7/page_13.jpg",
      levelingPhoto: "/cas-cliniques/cas-7/page_21.jpg",
      postSurgeryPhoto: "/cas-cliniques/cas-7/page_23.jpg",
      finalRadios: "/cas-cliniques/cas-7/page_28.jpg",
      finalCephalo: "/cas-cliniques/cas-7/page_29.jpg",
      superpositions: "/cas-cliniques/cas-7/page_30.jpg",
      allSlides: Array.from({ length: 33 }, (_, i) => `/cas-cliniques/cas-7/page_${i + 1}.jpg`),
    },
    cephalometry: [
      { parameter: "SNA", mean: "82° ± 2°", initial: "80°", final: "81°" },
      { parameter: "SNB", mean: "80° ± 2°", initial: "78°", final: "78°" },
      { parameter: "ANB", mean: "2° ± 2°", initial: "2°", final: "3°" },
      { parameter: "FMIA", mean: "68° ± 3°", initial: "53°", final: "55°" },
      { parameter: "IMPA", mean: "87° ± 3°", initial: "100°", final: "97°" },
      { parameter: "FMA", mean: "25° ± 3°", initial: "27°", final: "28°" },
      { parameter: "I / i", mean: "135°", initial: "120°", final: "120°" },
      { parameter: "I / F", mean: "107°", initial: "112°", final: "117°" },
    ],
    treatmentSteps: [
      {
        phase: "Phase 1 : Expansion Maxillaire au Quadhélix",
        maxillary: "Pose d'un appareil Quadhélix pour corriger l'endoalvéolie et l'arcade en lyre",
        mandibular: "Bilan photographique, radiologique et planification de l'avulsion de la 31",
      },
      {
        phase: "Phase 2 : Extraction de la 31 & Nivellement Initial",
        maxillary: "Appareillage 6 à 6 sur arcs .014 NiTi, .018 NiTi, .018 Acier, 17*25 NiTi",
        mandibular: "Extraction de l'incisive inférieure 31, appareillage 6 à 6 et nivellement progressif",
      },
      {
        phase: "Phase 3 : Stripping Antérieur & Fermeture des Espaces",
        maxillary: "Stripping des dents antéro-supérieures pour harmoniser le ratio de Bolton",
        mandibular: "Fermeture des espaces résiduels par chaînettes élastiques continues de 6 à 6",
      },
      {
        phase: "Phase 4 : Coordination des Arcades & Contention",
        maxillary: "2 arcs coordonnés .018*.025 acier, plicatures de finitions pour l'expression du torque",
        mandibular: "Stabilisation occlusale en Classe I molaire et canine, pose de contention collée",
      },
    ],
  },
  {
    id: "cas-8-classe-i-diastemes-laterales-riziformes",
    slug: "classe-i-diastemes-laterales-riziformes-protheses-conjointes",
    title: "Cas Clinique N°8 : Diastèmes & Incisives Latérales Riziformes (12/22) avec Prothèses Conjointes",
    subtitle:
      "Approche pluridisciplinaire d'orthodontie pré-prothétique : aménagement et répartition des espaces pour couronnes esthétiques sur latérales riziformes",
    category: "diasteme",
    categoryLabel: "Diastèmes & Pré-Prothétique",
    patientProfile: "Patiente de 19 ans — Teissir",
    patientAge: "19 ans",
    patientName: "Teissir",
    consultationMotive: "Diastèmes antérieurs inesthétiques et incisives latérales de très petite taille (riziformes)",
    duration: "Traitement combiné ortho-prothétique (Rééducation ELN, répartition précise des espaces et prothèses conjointes)",
    technique:
      "Traitement multi-attaches sans extraction + Enveloppe Linguale Nocturne (ELN) + Mécanique de Classe II + Courbe de Spee accentuée maxillaire & reverse Spee mandibulaire + Prothèses conjointes 12/22 + Contention",
    diagnosis:
      "Classe I squelettique, normodivergence faciale, biproalvéolie avec diastèmes inter-incisifs majeurs, incisives latérales 12 et 22 riziformes (microdontie), supraclusion avec overbite de 3 à 4 mm, déviation du milieu inférieur de 2 mm à gauche et déglutition dysfonctionnelle.",
    diagnosticSquelettique:
      "Classe I squelettique (SNA 85°, SNB 82°, ANB 3°), normodivergence faciale (FMA 20°).",
    diagnosticDentoAlveolaire:
      "Classe I d'angle, overjet de 3 à 4 mm, proalvéolie supérieure, overbite de 3 à 4 mm, diastèmes disséminés entre les incisives supérieures, microdontie des 12 et 22 (latérales riziformes), déviation du MII inférieur de 2 mm vers la gauche, rotation ML des 32 et 42.",
    diagnosticCutane:
      "Profil harmonieux convexe, angle naso-labial normal, sillon labio-mentonnier en S accentué, égalité des étages, plan sagittal médian droit.",
    diagnosticFonctions:
      "Déglutition dysfonctionnelle, respiration nasale, phonation normale, parafonctions RAS.",
    solution:
      "Protocole pré-prothétique sans extraction débutant par 6 mois de rééducation par Enveloppe Linguale Nocturne (ELN). Appareillage multi-attaches (6 à 6 maxillaire, 7 à 7 mandibulaire), nivellement progressif (.014 NiTi à .018*.025 acier), mécanique de Classe II avec chaînette de torquing, aménagement et calibration millimétrique des espaces mésio-distaux pour les incisives 12 et 22. Nivellement de la supraclusion par courbe de Spee accentuée maxillaire et reverse Spee mandibulaire. Réalisation de prothèses conjointes céramiques sur 12/22 et pose de contention collée.",
    result:
      "Harmonisation du guide antérieur, normalisation de l'overbite et de l'overjet, réhabilitation esthétique spectaculaire des latérales 12/22, intégration prothétique naturelle et sourire radieux.",
    beforeImage: "/cas-cliniques/cas-8/before_face_smile.jpg",
    afterImage: "/cas-cliniques/cas-8/after_face_smile.jpg",
    highlightBadge: "Pré-Prothétique & Latérales Riziformes",
    institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
    practitioner: "Dr Mahmoud Qalalwa (Résident)",
    supervisors: [
      "Pr. Adel Ben Amor",
      "Pr. Samir Tobji",
      "Pr. Ines Dallel",
      "AHU. Wiem Ben Amor",
    ],
    images: {
      beforeFaceRepos: "/cas-cliniques/cas-8/before_face_repos.jpg",
      beforeFaceSmile: "/cas-cliniques/cas-8/before_face_smile.jpg",
      beforeFaceProfile: "/cas-cliniques/cas-8/before_face_profile.jpg",
      afterFaceRepos: "/cas-cliniques/cas-8/after_face_repos.jpg",
      afterFaceSmile: "/cas-cliniques/cas-8/after_face_smile.jpg",
      afterFaceProfile: "/cas-cliniques/cas-8/after_face_profile.jpg",
      smileComparison: "/cas-cliniques/cas-8/before_after_smile_comparison.jpg",
      faceComparison: "/cas-cliniques/cas-8/before_after_face_comparison.jpg",
      intraoralComparison: "/cas-cliniques/cas-8/before_after_intraoral_comparison.jpg",
      beforeIntraoral: "/cas-cliniques/cas-8/before_intraoral.jpg",
      afterIntraoral: "/cas-cliniques/cas-8/after_intraoral.jpg",
      aestheticSmile: "/cas-cliniques/cas-8/after_aesthetic_3_4.jpg",
      initialRadios: "/cas-cliniques/cas-8/page_12.jpg",
      initialCephalo: "/cas-cliniques/cas-8/page_13.jpg",
      levelingPhoto: "/cas-cliniques/cas-8/page_21.jpg",
      postSurgeryPhoto: "/cas-cliniques/cas-8/page_23.jpg",
      finalRadios: "/cas-cliniques/cas-8/page_30.jpg",
      finalCephalo: "/cas-cliniques/cas-8/page_31.jpg",
      superpositions: "/cas-cliniques/cas-8/page_32.jpg",
      allSlides: Array.from({ length: 33 }, (_, i) => `/cas-cliniques/cas-8/page_${i + 1}.jpg`),
    },
    cephalometry: [
      { parameter: "SNA", mean: "82° ± 2°", initial: "85°", final: "84°" },
      { parameter: "SNB", mean: "80° ± 2°", initial: "82°", final: "81°" },
      { parameter: "ANB", mean: "2° ± 2°", initial: "3°", final: "3°" },
      { parameter: "FMIA", mean: "68° ± 3°", initial: "56°", final: "59°" },
      { parameter: "IMPA", mean: "87° ± 3°", initial: "104°", final: "97°" },
      { parameter: "FMA", mean: "25° ± 3°", initial: "20°", final: "21°" },
      { parameter: "I / i", mean: "135°", initial: "119°", final: "125°" },
      { parameter: "I / F", mean: "107°", initial: "123°", final: "116°" },
    ],
    treatmentSteps: [
      {
        phase: "Phase 1 : Rééducation des Fonctions par ELN",
        maxillary: "Port de l'Enveloppe Linguale Nocturne (ELN) pendant 6 mois pour normaliser la déglutition",
        mandibular: "Suppression de la pression linguale anormale sur le secteur antérieur",
      },
      {
        phase: "Phase 2 : Nivellement & Mécanique de Classe II",
        maxillary: "Appareillage 6 à 6 sur arcs .014 NiTi à 17*25 NiTi, chaînette de torquing",
        mandibular: "Appareillage 7 à 7 et nivellement progressif pour synchroniser l'alignement",
      },
      {
        phase: "Phase 3 : Répartition des Espaces & Nivellement de Spee",
        maxillary: "Aménagement des espaces pour 12/22, courbe de Spee accentuée pour corriger la supraclusion",
        mandibular: "Reverse Spee mandibulaire pour aplanir la courbe occlusale inférieure",
      },
      {
        phase: "Phase 4 : Réhabilitation Prothétique 12/22 & Contention",
        maxillary: "Réalisation des prothèses conjointes céramiques sur les latérales 12 et 22",
        mandibular: "Pose de contention linguale collée et équilibrage occlusal minutieux",
      },
    ],
  },
  {
    id: "cas-9-classe-iii-laterognathie-compensation",
    slug: "classe-iii-squelettique-laterognathie-douleurs-atm-compensation",
    title: "Cas Clinique N°9 : Classe III Squelettique avec Latérognathie, Douleurs ATM & Articulé Inversé",
    subtitle:
      "Compensation orthodontique d'une asymétrie mandibulaire sévère sans chirurgie, avec levée de l'articulé croisé et suppression des douleurs articulaires",
    category: "bagues",
    categoryLabel: "Classe III & Asymétrie ATM",
    patientProfile: "Patiente de 15 ans — Azza",
    patientAge: "15 ans",
    patientName: "Azza",
    consultationMotive: "Mandibule avancée, asymétrie faciale, douleurs et blocages des articulations temporo-mandibulaires (ATM)",
    duration: "Traitement complet de compensation orthodontique (Levée de l'inversé, mécanique asymétrique et stabilisation articulaire)",
    technique:
      "Appareillage multi-attaches de 6 à 6 en technique de Roth sans extraction + Cales de surélévation + Omégas en compression + Mécanique élastique asymétrique de Classe III + Contention collée",
    diagnosis:
      "Classe III squelettique (ANB -1°), normodivergence faciale, asymétrie mandibulaire avec latérognathie droite (branche mandibulaire droite plus courte de 2 mm et déformation condylienne), articulé inversé antérieur sur 11/12/13 avec overjet négatif (-2 à 2 mm), déviation du milieu incisif inférieur de 3 mm à droite, bruits et douleurs des ATM.",
    diagnosticSquelettique:
      "Classe III squelettique (SNA 82°, SNB 83°, ANB -1°), latérognathie avec asymétrie transversale de 2 mm et inclinaison du plan d'occlusion.",
    diagnosticDentoAlveolaire:
      "Classe III d'angle, overjet irrégulier de -2 à 2 mm, inversé d'articulé antérieur sur 11/12/13, overbite de 1 à 3 mm, déviation du MII inférieur de 3 mm vers la droite, palatoversion de 11, 12, 13, rotation DL de 33 et 43.",
    diagnosticCutane:
      "Profil légèrement convexe, angle naso-labial normal, sillon labio-mentonnier en S allongé, légère prochéilie de la lèvre inférieure, étage inférieur augmenté, plan sagittal médian dévié vers la droite.",
    diagnosticFonctions:
      "Déglutition dysfonctionnelle, respiration nasale, phonation normale, parafonction : succion d'un objet.",
    solution:
      "Face au refus de la patiente de subir une génioplastie chirurgicale, mise en place d'une compensation orthodontique biomécanique complète sans extraction. Pose de cales de désocclusion pour déverrouiller l'articulé croisé, appareillage 6 à 6, nivellement progressif avec confection de 2 boucles omégas en compression sur l'arc maxillaire pour proverser les incisives supérieures. Mécanique élastique asymétrique (Classe III à gauche, intercuspidation à droite) associée à une chaînette mandibulaire pour recentrer les milieux. Finition sur arcs .018*.025 acier et contention collée.",
    result:
      "Disparition intégrale des douleurs et des blocages de l'ATM, levée complète de l'articulé inversé, centrage rigoureux des milieux inter-incisifs, relation de Classe I bilatérale stable et symétrie du sourire restaurée.",
    beforeImage: "/cas-cliniques/cas-9/before_face_smile.jpg",
    afterImage: "/cas-cliniques/cas-9/after_face_smile.jpg",
    highlightBadge: "Compensation Classe III & ATM",
    institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
    practitioner: "Dr Mahmoud Qalalwa (Résident)",
    supervisors: [
      "Pr. Adel Ben Amor",
      "Pr. Samir Tobji",
      "Pr. Ines Dallel",
      "AHU. Wiem Ben Amor",
    ],
    images: {
      beforeFaceRepos: "/cas-cliniques/cas-9/before_face_repos.jpg",
      beforeFaceSmile: "/cas-cliniques/cas-9/before_face_smile.jpg",
      beforeFaceProfile: "/cas-cliniques/cas-9/before_face_profile.jpg",
      afterFaceRepos: "/cas-cliniques/cas-9/after_face_repos.jpg",
      afterFaceSmile: "/cas-cliniques/cas-9/after_face_smile.jpg",
      afterFaceProfile: "/cas-cliniques/cas-9/after_face_profile.jpg",
      smileComparison: "/cas-cliniques/cas-9/before_after_smile_comparison.jpg",
      faceComparison: "/cas-cliniques/cas-9/before_after_face_comparison.jpg",
      intraoralComparison: "/cas-cliniques/cas-9/before_after_intraoral_comparison.jpg",
      beforeIntraoral: "/cas-cliniques/cas-9/before_intraoral.jpg",
      afterIntraoral: "/cas-cliniques/cas-9/after_intraoral.jpg",
      aestheticSmile: "/cas-cliniques/cas-9/after_aesthetic_3_4.jpg",
      initialRadios: "/cas-cliniques/cas-9/page_12.jpg",
      initialCephalo: "/cas-cliniques/cas-9/page_13.jpg",
      levelingPhoto: "/cas-cliniques/cas-9/page_22.jpg",
      postSurgeryPhoto: "/cas-cliniques/cas-9/page_24.jpg",
      finalRadios: "/cas-cliniques/cas-9/page_30.jpg",
      finalCephalo: "/cas-cliniques/cas-9/page_31.jpg",
      superpositions: "/cas-cliniques/cas-9/page_32.jpg",
      allSlides: Array.from({ length: 35 }, (_, i) => `/cas-cliniques/cas-9/page_${i + 1}.jpg`),
    },
    cephalometry: [
      { parameter: "SNA", mean: "82° ± 2°", initial: "82°", final: "82,5°" },
      { parameter: "SNB", mean: "80° ± 2°", initial: "83°", final: "83°" },
      { parameter: "ANB", mean: "2° ± 2°", initial: "-1°", final: "-0,5°" },
      { parameter: "FMIA", mean: "68° ± 3°", initial: "69°", final: "76°" },
      { parameter: "IMPA", mean: "87° ± 3°", initial: "87°", final: "85°" },
      { parameter: "FMA", mean: "25° ± 3°", initial: "24°", final: "25°" },
      { parameter: "I / i", mean: "135°", initial: "134°", final: "127°" },
      { parameter: "I / F", mean: "107°", initial: "117°", final: "125°" },
    ],
    treatmentSteps: [
      {
        phase: "Phase 1 : Désocclusion & Nivellement Initial",
        maxillary: "Pose de cales de surélévation pour déverrouiller l'inversé 11/12/13, appareillage 6 à 6",
        mandibular: "Appareillage 6 à 6 sur arcs .014 NiTi à .018 Acier, arrêt de la parafonction",
      },
      {
        phase: "Phase 2 : Proversion Incisive par Boucles Omégas",
        maxillary: "Confection de 2 boucles omégas en compression sur arc acier pour proverser les incisives supérieures",
        mandibular: "Nivellement sur arcs .017*.025 et .018*.025 acier pour coordonner la forme d'arcade",
      },
      {
        phase: "Phase 3 : Mécanique Asymétrique de Classe III",
        maxillary: "Traction élastique asymétrique (Classe III gauche, intercuspidation droite) pour compenser la latérognathie",
        mandibular: "Chaînette inférieure pour recentrer le milieu incisif dévié de 3 mm vers la droite",
      },
      {
        phase: "Phase 4 : Résolution ATM, Finition & Contention",
        maxillary: "Arcs coordonnés .018*.025 acier, disparition complète des douleurs articulaires ATM",
        mandibular: "Stabilisation occlusale en Classe I et pose d'une attelle de contention collée linguale",
      },
    ],
  },
  {
    id: "cas-10-classe-i-ddm-autoligaturant-stripping",
    slug: "classe-i-ddm-encombrement-autoligaturant-stripping-sans-extraction",
    title: "Cas Clinique N°10 : Classe I DDM avec Encombrement & Système Autoligaturant sans Extraction",
    subtitle:
      "Traitement orthodontique multi-attaches autoligaturant (7 à 7) avec stripping des prémolaires inférieures et reconstitution composite 12/22",
    category: "bagues",
    categoryLabel: "Bagues Autoligaturantes & Stripping",
    patientProfile: "Patient de 16 ans — Youssef",
    patientAge: "16 ans",
    patientName: "Youssef",
    consultationMotive: "Malposition et encombrement des dents inférieures, gêne au sourire",
    duration: "Traitement complet sans extraction par boîtiers autoligaturants (Expansion, nivellement, stripping et coordination d'arcade)",
    technique:
      "Traitement orthodontique multi-attaches en technique de Roth de 7 à 7 par système autoligaturant + Stripping des prémolaires inférieures + Reconstitution esthétique composite 12/22 + Contention collée",
    diagnosis:
      "Classe I molaire et canine d'Angle avec dysharmonie dento-maxillaire (DDM), encombrement mandibulaire avec rotations incisives, proalvéolie supérieure, overjet irrégulier de 0 à 3 mm, overbite de 3 à 4 mm, déviation du milieu incisif inférieur de 3 mm vers la droite, déglutition dysfonctionnelle, microdontie relative des incisives latérales 12/22.",
    diagnosticSquelettique:
      "Classe I squelettique (SNA 84°, SNB 82°, ANB 2°), normodivergence faciale (FMA 20°).",
    diagnosticDentoAlveolaire:
      "Classe I molaire et canine d'angle, overjet irrégulier de 0 à 3 mm, overbite de 3 à 4 mm, proalvéolie supérieure (I/F 121°), proalvéolie inférieure (IMPA 100°), déviation du milieu incisif inférieur de 3 mm à droite, arcades ovalaires avec rotation mésio-vestibulaire de 12 et rotation des incisives mandibulaires.",
    diagnosticCutane:
      "Profil harmonieux légèrement convexe, angle naso-labial normal, sillon labio-mentonnier en S allongé, normogénie et normochéilie, égalité des étages, lèvres charnues, plan sagittal médian droit.",
    diagnosticFonctions:
      "Déglutition dysfonctionnelle (poussée linguale), respiration nasale physiologique, phonation normale, aucune parafonction décelée.",
    solution:
      "Traitement non-extractionnel privilégié grâce à la mise en place d'un système multi-attaches autoligaturant passif de 7 à 7 en technique de Roth. Nivellement et expansion douce du maxillaire (.014 NiTi à 17*25 NiTi puis acier). Réduction interproximale de l'émail (stripping amélaire) sur les prémolaires inférieures pour résoudre l'encombrement sans compromettre le profil cutané ni accentuer la proalvéolie. Élastiques intermaxillaires de Classe II et chaînette pour corriger la malocclusion et recentrer rigoureusement les milieux inter-incisifs. Finition sur arcs coordonnés .019*.025 acier, réhabilitation esthétique par résine composite sur les latérales 12 et 22 à taille réduite, et contention.",
    result:
      "Alignement complet et harmonieux des arcades dentaires, correction intégrale de l'encombrement mandibulaire sans extractions, parfait centrage des milieux inter-incisifs, normalisation de l'overjet et de l'overbite en Classe I canine et molaire stricte, restauration de la morphologie idéale de 12 et 22, et sourire esthétique éclatant.",
    beforeImage: "/cas-cliniques/cas-10/before_face_smile.jpg",
    afterImage: "/cas-cliniques/cas-10/after_face_smile.jpg",
    highlightBadge: "Système Autoligaturant & Stripping",
    institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
    practitioner: "Dr Mahmoud Qalalwa (Résident)",
    supervisors: [
      "Pr. Adel Ben Amor",
      "Pr. Samir Tobji",
      "Pr. Ines Dallel",
      "AHU. Wiem Ben Amor",
    ],
    images: {
      beforeFaceRepos: "/cas-cliniques/cas-10/before_face_repos.jpg",
      beforeFaceSmile: "/cas-cliniques/cas-10/before_face_smile.jpg",
      beforeFaceProfile: "/cas-cliniques/cas-10/before_face_profile.jpg",
      afterFaceRepos: "/cas-cliniques/cas-10/after_face_repos.jpg",
      afterFaceSmile: "/cas-cliniques/cas-10/after_face_smile.jpg",
      afterFaceProfile: "/cas-cliniques/cas-10/after_face_profile.jpg",
      smileComparison: "/cas-cliniques/cas-10/before_after_smile_comparison.jpg",
      faceComparison: "/cas-cliniques/cas-10/before_after_face_comparison.jpg",
      intraoralComparison: "/cas-cliniques/cas-10/before_after_intraoral_comparison.jpg",
      beforeIntraoral: "/cas-cliniques/cas-10/before_intraoral.jpg",
      afterIntraoral: "/cas-cliniques/cas-10/after_intraoral.jpg",
      aestheticSmile: "/cas-cliniques/cas-10/after_aesthetic_3_4.jpg",
      initialRadios: "/cas-cliniques/cas-10/page_12.jpg",
      initialCephalo: "/cas-cliniques/cas-10/page_13.jpg",
      levelingPhoto: "/cas-cliniques/cas-10/page_21.jpg",
      postSurgeryPhoto: "/cas-cliniques/cas-10/page_23.jpg",
      finalRadios: "/cas-cliniques/cas-10/page_29.jpg",
      finalCephalo: "/cas-cliniques/cas-10/page_30.jpg",
      superpositions: "/cas-cliniques/cas-10/page_31.jpg",
      allSlides: Array.from({ length: 33 }, (_, i) => `/cas-cliniques/cas-10/page_${i + 1}.jpg`),
    },
    cephalometry: [
      { parameter: "SNA", mean: "82° ± 2°", initial: "84°", final: "84°" },
      { parameter: "SNB", mean: "80° ± 2°", initial: "82°", final: "82°" },
      { parameter: "ANB", mean: "2° ± 2°", initial: "2°", final: "2°" },
      { parameter: "FMIA", mean: "68° ± 3°", initial: "60°", final: "58°" },
      { parameter: "IMPA", mean: "87° ± 3°", initial: "100°", final: "98°" },
      { parameter: "FMA", mean: "25° ± 3°", initial: "20°", final: "20°" },
      { parameter: "I / i", mean: "135°", initial: "121°", final: "123°" },
      { parameter: "I / F", mean: "107°", initial: "121°", final: "120°" },
    ],
    treatmentSteps: [
      {
        phase: "Phase 1 : Appareillage Autoligaturant & Nivellement Maxillaire",
        maxillary: "Pose de l'appareillage autoligaturant 7 à 7, nivellement progressif sur arcs .014 NiTi, .018 NiTi, .018 Acier et 17*25 NiTi pour expansion de l'arcade",
        mandibular: "Attente d'une expansion maxillaire adéquate avant la mise en charge de l'arcade inférieure",
      },
      {
        phase: "Phase 2 : Nivellement Mandibulaire & Stripping Amélaire",
        maxillary: "Progression sur arcs .017*.025 et .018*.025 acier, ouverture des espaces pour 12 et 22",
        mandibular: "Pose de l'appareillage 7 à 7, nivellement et réalisation d'un stripping interproximal mesuré sur les prémolaires inférieures pour libérer l'espace",
      },
      {
        phase: "Phase 3 : Correction de la Malocclusion & Élastiques Cl II",
        maxillary: "Port d'élastiques de Classe II combinés à une chaînette pour synchroniser les rapports occlusaux et éliminer l'overbite excessif",
        mandibular: "Recentrage rigoureux du milieu incisif inférieur dévié de 3 mm vers la droite",
      },
      {
        phase: "Phase 4 : Arcs Coordonnés, Reconstitution 12/22 & Contention",
        maxillary: "Coordination des arcades sur arcs .019*.025 acier avec plicatures de finition, réhabilitation esthétique des latérales 12/22 en résine composite",
        mandibular: "Stabilisation de l'alignement mandibulaire et pose d'une attelle de contention collée linguale",
      },
    ],
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: "remboursement-cnam-orthodontie-tunisie",
    slug: "remboursement-cnam-orthodontie-tunisie",
    title: "Guide 2026 : Prise en charge et remboursement CNAM de l'orthodontie en Tunisie",
    category: "Prise en Charge & Conseils",
    date: "12 Mars 2026",
    readTime: "5 min de lecture",
    author: "Dr Mahmoud Qalalwa",
    image: "/images/blogs/blog-remboursement-cnam.jpg",
    href: "/blog/remboursement-cnam-orthodontie-tunisie",
    summary:
      "Tout ce que les familles en Tunisie doivent savoir pour constituer un dossier de demande d'entente préalable auprès de la CNAM : conditions d'âge, plafonds et démarches au cabinet.",
    content: [
      "La question du coût et du remboursement des appareils dentaires est au cœur des préoccupations des familles tunisiennes. En Tunisie, la Caisse Nationale d'Assurance Maladie (CNAM) prévoit une prise en charge forfaitaire pour les traitements d'orthodontie sous certaines conditions précises.",
      "Première règle essentielle : le traitement doit impérativement débuter avant le 16ème anniversaire de l'enfant. Au-delà de cet âge, les soins orthodontiques sont généralement considérés comme relevant de convenance esthétique par les régimes obligatoires, sauf dans de rares cas de chirurgie orthognathique.",
      "Pour bénéficier du remboursement, le Dr Mahmoud Qalalwa établit un dossier complet d'entente préalable comprenant un bilan photographique, des radiographies panoramique et téléradiographie de profil, ainsi qu'un devis médical détaillé. Ce dossier est soumis à l'accord du médecin conseil de la CNAM.",
      "Dans notre cabinet à Aïn Zaghouan Nord (en face de l'Hôpital Mongi Slim), nous assistons les parents dans la constitution rapide de leur dossier administratif et proposons des facilités de paiement échelonnées tout au long de la durée du traitement pour garantir l'accès aux meilleurs soins.",
    ],
    keywords: [
      "remboursement cnam orthodontie tunisie",
      "prix appareil dentaire tunisie",
      "entente prealable orthodontiste tunis",
      "plafond cnam dents",
    ],
  },
  {
    id: "aligneurs-invisibles-vs-bagues-tunis",
    slug: "aligneurs-invisibles-vs-bagues-tunis",
    title: "Aligneurs invisibles ou Bagues traditionnelles : Que choisir à Tunis ?",
    category: "Technologies & Choix",
    date: "28 Février 2026",
    readTime: "6 min de lecture",
    author: "Dr Mahmoud Qalalwa",
    image: "/images/blogs/blog-aligneurs-vs-bagues.jpg",
    href: "/blog/aligneurs-invisibles-vs-bagues-tunis",
    summary:
      "Comparatif objectif entre les gouttières transparentes amovibles et les boîtiers métalliques ou céramiques : confort, discrétion, efficacité et budget à Tunis.",
    content: [
      "Le choix entre les bagues conventionnelles et les gouttières transparentes dépend étroitement de vos priorités personnelles, de votre mode de vie et de la nature de votre malocclusion.",
      "Les aligneurs transparents offrent une discrétion quasi-totale, une hygiène bucco-dentaire irréprochable (puisqu'ils s'enlèvent pour manger et se brosser les dents) et une absence d'urgences d'attaches décollées. C'est l'option plébiscitée par les étudiants et les professionnels actifs du Grand Tunis.",
      "Cependant, les bagues métalliques ou céramiques demeurent redoutablement puissantes pour les déplacements de racines complexes, les décalages de mâchoires sévères ou pour les patients qui craignent d'oublier de porter leurs gouttières 22 heures par jour.",
      "Lors de votre première consultation au cabinet Dr Mahmoud Qalalwa, nous effectuons un bilan complet pour vous orienter vers la solution la plus efficace et adaptée à vos objectifs.",
    ],
    keywords: [
      "orthodontie invisible tunis",
      "aligneurs invisibles tunisie",
      "bagues metalliques vs aligneurs",
      "invisalign tunis avis",
    ],
  },
  {
    id: "age-premiere-consultation-orthodontiste-enfant",
    slug: "age-premiere-consultation-orthodontiste-enfant",
    title: "À quel âge consulter un orthodontiste pour son enfant ? L'importance de l'orthopédie précoce",
    category: "Pédiatrie & Croissance",
    date: "15 Janvier 2026",
    readTime: "4 min de lecture",
    author: "Dr Mahmoud Qalalwa",
    image: "/images/blogs/blog-orthodontie-enfant.jpg",
    href: "/blog/age-premiere-consultation-orthodontiste-enfant",
    summary:
      "Pourquoi l'âge de 6 à 7 ans est le moment clé pour dépister les anomalies de croissance des mâchoires et simplifier considérablement les traitements futurs.",
    content: [
      "De nombreux parents pensent à tort qu'il faut attendre que toutes les dents définitives soient sorties (vers 12 ans) pour consulter un orthodontiste. Pourtant, la Société Tunisienne d'Orthopédie Dento-Faciale et les recommandations internationales préconisent une première consultation dès 6 ou 7 ans.",
      "À cet âge charnière, la croissance osseuse des mâchoires est très active et malléable. Un palais étroit, une mâchoire déviée sur le côté ou un menton très en retrait peuvent être interceptés avec des appareils simples et confortables.",
      "Traiter tôt prévient l'aggravation des asymétries du visage, libère les voies respiratoires chez les enfants qui ronflent ou respirent par la bouche, et évite dans la majorité des cas les extractions de dents saines à l'adolescence.",
      "N'hésitez pas à faire contrôler le sourire de votre enfant au cabinet pour un avis bienveillant et préventif.",
    ],
    keywords: [
      "age premiere consultation orthodontiste",
      "orthodontiste enfant tunis",
      "orthopedie dento faciale ain zaghouan",
      "palais etroit enfant",
    ],
  },
  {
    id: "orthodontie-adulte-sourire-confiance",
    slug: "orthodontie-adulte-sourire-confiance",
    title: "Orthodontie adulte à Tunis : Retrouver un alignement parfait sans complexe",
    category: "Orthodontie Adulte",
    date: "05 Décembre 2025",
    readTime: "5 min de lecture",
    author: "Dr Mahmoud Qalalwa",
    image: "/images/blogs/blog-orthodontie-adulte.jpg",
    href: "/blog/orthodontie-adulte-sourire-confiance",
    summary:
      "30, 40, 50 ans : découvrez comment les technologies modernes permettent aux adultes d'aligner leurs dents en toute discrétion et de préserver leurs gencives.",
    content: [
      "Aujourd'hui, près d'un patient sur trois dans notre cabinet d'Aïn Zaghouan Nord est un adulte. Avec l'avènement des gouttières transparentes et des attaches céramiques couleur émail, l'appareil dentaire n'est plus du tout réservé aux adolescents.",
      "Au-delà du gain évident de confiance en soi et d'harmonie du visage, l'alignement dentaire adulte joue un rôle protecteur fondamental : des dents bien alignées sont beaucoup plus faciles à nettoyer au fil dentaire, réduisant significativement le risque de parodontite, de déchaussement et de caries interproximales.",
      "Le Dr Mahmoud Qalalwa conçoit chaque plan de traitement adulte sur-mesure, en tenant compte de vos réunions, de vos obligations professionnelles et de votre sensibilité gingivale.",
    ],
    keywords: [
      "appareil dentaire adulte tunis",
      "orthodontie adulte tunisie prix",
      "alignement discret tunis",
      "orthodontiste la marsa",
    ],
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "avis-1",
    title: "Un résultat au-delà de mes espérances avec les aligneurs",
    feedback:
      "J'avais une grande appréhension à porter un appareil à 29 ans pour mon travail aux Berges du Lac. Le Dr Mahmoud Qalalwa m'a proposé les aligneurs invisibles : personne ne s'est rendu compte de rien pendant 10 mois ! Le résultat est impeccable, l'accueil au cabinet en face de Mongi Slim est exceptionnel.",
    name: "Syrine Ben Amor",
    role: "Patiente Aligneurs Invisibles",
    avatar: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/67285bf0abc7c8db8fd8b581_testimonial-avatar-1.png",
    rating: 5,
    location: "Les Berges du Lac 2, Tunis",
  },
  {
    id: "avis-2",
    title: "Une patience et une douceur remarquable avec mon fils",
    feedback:
      "Mon fils de 9 ans avait un décalage important et une peur bleue des dentistes. Dès la première visite, le Dr Qalalwa a su le mettre en confiance avec beaucoup de pédagogie. Son palais a été élargi sans douleur, son sommeil s'est nettement amélioré. Un grand spécialiste formé à Monastir que je recommande les yeux fermés !",
    name: "Mohamed Khemir",
    role: "Parent d'un jeune patient (Orthopédie)",
    avatar: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/67285bf0c46837a608e0f41e_testimonial-avatar-2.png",
    rating: 5,
    location: "La Marsa, Tunis",
  },
  {
    id: "avis-3",
    title: "Précision, hygiène irréprochable et suivi très rigoureux",
    feedback:
      "J'ai fait mon traitement par bagues céramiques chez le Dr Qalalwa à Aïn Zaghouan Nord. Le cabinet est ultra-moderne, facile d'accès avec du parking devant l'immeuble Educatec. Les explications sont claires à chaque étape et les facilités de paiement m'ont beaucoup aidée. Merci Docteur pour ce nouveau sourire !",
    name: "Amel Trabelsi",
    role: "Patiente Bagues Céramiques",
    avatar: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/67285bf03bd396c85d802872_testimonial-avatar-3.png",
    rating: 5,
    location: "Aïn Zaghouan Nord, Tunis",
  },
];

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quelle est la différence entre un dentiste omnipraticien et un spécialiste en orthodontie ?",
    answer:
      "Le Dr Mahmoud Qalalwa est spécialiste qualifié en orthodontie et orthopédie dento-faciale. Après l'obtention de son diplôme de docteur en médecine dentaire à la Faculté de Médecine Dentaire de Monastir, il a suivi plusieurs années de formation hospitalo-universitaire spécialisée dédiées exclusivement à l'alignement dentaire, à la biomécanique et à la correction des anomalies des mâchoires.",
  },
  {
    id: "faq-2",
    question: "Les traitements d'orthodontie sont-ils pris en charge par la CNAM en Tunisie ?",
    answer:
      "Oui, la CNAM accorde une prise en charge forfaitaire pour les soins orthodontiques débutés avant l'âge de 16 ans. Un dossier d'entente préalable comprenant des radiographies et un bilan complet est établi au cabinet par le Dr Qalalwa et soumis à la décision du médecin conseil de la CNAM.",
  },
  {
    id: "faq-3",
    question: "Combien de temps dure un traitement orthodontique en moyenne ?",
    answer:
      "La durée varie selon la complexité du cas. Un alignement modéré par aligneurs invisibles nécessite généralement de 6 à 12 mois. Pour les traitements complets par bagues métalliques ou céramiques, la durée moyenne oscille entre 14 et 24 mois. Un calendrier précis vous est présenté dès le bilan initial.",
  },
  {
    id: "faq-4",
    question: "Est-ce douloureux de porter un appareil dentaire ou des aligneurs ?",
    answer:
      "La pose de l'appareil et la mise en place des aligneurs sont totalement indolores. Une légère sensibilité au niveau des dents peut apparaître durant 48 à 72 heures après les réglages, témoignant du début du mouvement dentaire. Cette gêne passagère s'estompe rapidement et se gère très simplement avec des conseils adaptés.",
  },
  {
    id: "faq-5",
    question: "À quel âge effectuer la première consultation orthodontique pour un enfant ?",
    answer:
      "Il est vivement conseillé de réaliser un bilan d'interception dès l'âge de 6 à 7 ans. Intervenir tôt permet d'exploiter la croissance osseuse des mâchoires pour corriger un palais trop étroit ou un décalage des mâchoires avant que les anomalies ne s'aggravent.",
  },
  {
    id: "faq-6",
    question: "Pourquoi la phase de contention est-elle indispensable en fin de traitement ?",
    answer:
      "Après le déplacement des dents, l'os et le ligament parodontal ont besoin de temps pour se consolider. La contention (fil linguel collé très discret et gouttière nocturne) est essentielle pour maintenir l'alignement parfait et empêcher tout déplacement récidivant au fil des années.",
  },
  {
    id: "faq-7",
    question: "Où se situe exactement le cabinet et comment s'y rendre ?",
    answer:
      "Le cabinet est situé au 2ème étage de l'Immeuble Educatec (Bureau n°1), Aïn Zaghouan Nord, 2046 Tunis, exactement en face de l'Hôpital Universitaire Mongi Slim (axe GP9 Route de La Marsa). L'accès est direct depuis Les Berges du Lac 2, La Marsa, La Soukra, L'Aouina et Carthage, avec un stationnement facile devant l'immeuble.",
  },
  {
    id: "faq-8",
    question: "Comment prendre rendez-vous pour une consultation bilan au cabinet ?",
    answer:
      "Vous pouvez prendre rendez-vous directement par téléphone au 28 361 705 (+216 28 361 705) ou envoyer un message sur WhatsApp via le bouton dédié sur le site. Notre équipe vous accueillera pour planifier votre consultation bilan dans les plus brefs délais.",
  },
];
