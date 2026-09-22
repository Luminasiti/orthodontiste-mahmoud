---
name: add-case-study
description: Extract, crop, model, and integrate clinical case studies from Monastir presentation PDFs into the Next.js medical website. Handles PDF rasterization, facial & intraoral image cropping, cephalometric table extraction, treatment stages modeling in clinicData.ts, and SSG validation.
---

# Add Clinical Case Study Skill

This skill documents the exact, repeatable standard operating procedure (SOP) to add real orthodontic clinical case presentations (PDF slides from the Clinique de Médecine Dentaire de Monastir, Dr Mahmoud Qalalwa) into the web platform.

---

## 1. Input & Case Identification

Each clinical case PDF contains 34 to 37 presentation slides with the following canonical structure:
- **Slide 1:** Title, Case Number (`N°X`), Category / Diagnostic summary, Practitioner (`Résident Mahmoud Qalalwa`), Supervisors (`Pr. Adel Ben Amor, Pr. Samir Tobji, Pr. Ines Dallel, AHU. Wiem Ben Amor`), Institution (`Clinique de Médecine Dentaire de Monastir - Service d'Orthopédie Dento-Faciale`).
- **Slide 2:** Plan de présentation (Examen clinique, Examen radiologique, Diagnostic, Décision thérapeutique, Plan de traitement, Documents fin de traitement).
- **Slide 3:** Patient Identity (Name, Age, Motif de consultation) + 3 initial facial photos (Face repos, Face sourire, Profil droit).
- **Slides 4–10:** Examen clinique (Face, Profil, Sourire, Endo-buccal 3 vues, Arcades maxillaire/mandibulaire, Fonctions).
- **Slides 11–13:** Examen radiologique (Panoramique initiale, Téléradiographie de profil, Tableau céphalométrique initial).
- **Slides 14–16:** Diagnostic 4D (Squelettique, Dento-alvéolaire, Cutané, Fonctions) & Objectifs du traitement.
- **Slides 17–18:** Décision thérapeutique (Technique, avulsions, appareillages spéciaux).
- **Slides 19–24 (approx):** Plan de traitement et photos de progression (appareillage, nivellement, tractions, arcs, mécaniques).
- **Slides 25–29 (approx):** Documents de fin de traitement (3 photos visage, 5 ou 6 vues endo-buccales, comparatifs arcades).
- **Slides 30–33 (approx):** Radiographies finales (Panoramique de contrôle, Téléradiographie finale, Tableau céphalométrique comparatif Début vs Fin, Superpositions céphalométriques, Comparatifs visage/sourire).
- **Slide Final (34/35):** Photo esthétique 3/4 ("Merci de votre attention").

---

## 2. Extraction & Cropping Workflow

### A. Rasterize All Slides
Extract all PDF pages as high-resolution JPEG images (150-200 DPI) to `public/cas-cliniques/cas-<N>/page_<index>.jpg`:
```python
import pymupdf, os

doc = pymupdf.open(pdf_path)
out_dir = f"public/cas-cliniques/cas-{case_num}"
os.makedirs(out_dir, exist_ok=True)
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=150)
    pix.save(os.path.join(out_dir, f"page_{i+1}.jpg"))
doc.close()
```

### B. Standard Image Crop Targets
Crop specific assets from the extracted slides into `public/cas-cliniques/cas-<N>/`:
1. **Initial Face Triplet (from Slide 3):**
   - `before_face_repos.jpg` (left panel, x: ~2.5% to 33.5%, y: ~23% to 90%)
   - `before_face_smile.jpg` (center panel, x: ~34.5% to 65.5%, y: ~23% to 90%)
   - `before_face_profile.jpg` (right panel, x: ~66.5% to 97.5%, y: ~23% to 90%)
2. **Final Face Triplet (from Slide "Documents fin de traitement" ~ Slide 25/26/27):**
   - `after_face_repos.jpg`
   - `after_face_smile.jpg`
   - `after_face_profile.jpg`
3. **Comparisons:**
   - `before_after_smile_comparison.jpg` (from comparison slide)
   - `before_after_face_comparison.jpg` (from comparison slide or stitched)
   - `before_after_intraoral_comparison.jpg` (from 6-view comparison slide)
4. **Intra-oral Views:**
   - `before_intraoral.jpg` (from Slide 8)
   - `after_intraoral.jpg` (from final 5-view occlusion slide)
5. **Final Aesthetic Smile (from final slide):**
   - `after_aesthetic_3_4.jpg` (cropped to patient photo on left side of "Merci de votre attention")

---

## 3. Data Integration in `src/data/clinicData.ts`

Add an entry into `caseStudiesData: CaseStudyItem[]`:
```typescript
{
  id: "cas-<N>-<slug-keyword>",
  slug: "<url-friendly-slug>",
  title: "Cas Clinique N°<N> : <Diagnostic & Thérapeutique>",
  subtitle: "<Description succincte>",
  category: "bagues" | "encombrement" | "aligneurs" | "diasteme",
  categoryLabel: "<Label>",
  patientProfile: "Patient(e) de X ans — <Nom Prénom>",
  patientAge: "X ans",
  patientName: "<Nom Prénom>",
  consultationMotive: "<Motif de consultation>",
  duration: "<Durée et portée du traitement>",
  technique: "<Technique multi-attaches / appareils / chirurgies>",
  diagnosis: "<Synthèse clinique>",
  diagnosticSquelettique: "<Diagnostic squelettique avec SNA, SNB, ANB>",
  diagnosticDentoAlveolaire: "<Diagnostic dento-alvéolaire>",
  diagnosticCutane: "<Diagnostic cutané et profil>",
  diagnosticFonctions: "<Fonctions : déglutition, respiration, etc.>",
  solution: "<Plan et séquence thérapeutique>",
  result: "<Résultat esthétique et occlusal obtenu>",
  beforeImage: "/cas-cliniques/cas-<N>/before_face_smile.jpg",
  afterImage: "/cas-cliniques/cas-<N>/after_face_smile.jpg",
  highlightBadge: "<Badge>",
  institution: "Clinique de Médecine Dentaire de Monastir — Service d'Orthopédie Dento-Faciale",
  practitioner: "Dr Mahmoud Qalalwa (Résident)",
  supervisors: ["Pr. Adel Ben Amor", "Pr. Samir Tobji", "Pr. Ines Dallel", "AHU. Wiem Ben Amor"],
  images: {
    beforeFaceRepos: "/cas-cliniques/cas-<N>/before_face_repos.jpg",
    beforeFaceSmile: "/cas-cliniques/cas-<N>/before_face_smile.jpg",
    beforeFaceProfile: "/cas-cliniques/cas-<N>/before_face_profile.jpg",
    afterFaceRepos: "/cas-cliniques/cas-<N>/after_face_repos.jpg",
    afterFaceSmile: "/cas-cliniques/cas-<N>/after_face_smile.jpg",
    afterFaceProfile: "/cas-cliniques/cas-<N>/after_face_profile.jpg",
    smileComparison: "/cas-cliniques/cas-<N>/before_after_smile_comparison.jpg",
    faceComparison: "/cas-cliniques/cas-<N>/before_after_face_comparison.jpg",
    intraoralComparison: "/cas-cliniques/cas-<N>/before_after_intraoral_comparison.jpg",
    beforeIntraoral: "/cas-cliniques/cas-<N>/before_intraoral.jpg",
    afterIntraoral: "/cas-cliniques/cas-<N>/after_intraoral.jpg",
    aestheticSmile: "/cas-cliniques/cas-<N>/after_aesthetic_3_4.jpg",
    initialRadios: "/cas-cliniques/cas-<N>/page_12.jpg",
    initialCephalo: "/cas-cliniques/cas-<N>/page_13.jpg",
    levelingPhoto: "/cas-cliniques/cas-<N>/page_21.jpg",
    postSurgeryPhoto: "/cas-cliniques/cas-<N>/page_23.jpg",
    finalRadios: "/cas-cliniques/cas-<N>/page_XX.jpg",
    finalCephalo: "/cas-cliniques/cas-<N>/page_YY.jpg",
    superpositions: "/cas-cliniques/cas-<N>/page_ZZ.jpg",
    allSlides: Array.from({ length: total_slides }, (_, i) => `/cas-cliniques/cas-<N>/page_${i + 1}.jpg`),
  },
  cephalometry: [
    { parameter: "SNA", mean: "82° ± 2°", initial: "XX°", final: "YY°" },
    { parameter: "SNB", mean: "80° ± 2°", initial: "XX°", final: "YY°" },
    { parameter: "ANB", mean: "2° ± 2°", initial: "XX°", final: "YY°" },
    { parameter: "FMIA", mean: "68° ± 3°", initial: "XX°", final: "YY°" },
    { parameter: "IMPA", mean: "87° ± 3°", initial: "XX°", final: "YY°" },
    { parameter: "FMA", mean: "25° ± 3°", initial: "XX°", final: "YY°" },
    { parameter: "I / i", mean: "135°", initial: "XX°", final: "YY°" },
    { parameter: "I / F", mean: "107°", initial: "XX°", final: "YY°" },
  ],
  treatmentSteps: [
    { phase: "Phase 1 : ...", maxillary: "...", mandibular: "..." },
    { phase: "Phase 2 : ...", maxillary: "...", mandibular: "..." },
    { phase: "Phase 3 : ...", maxillary: "...", mandibular: "..." },
    { phase: "Phase 4 : ...", maxillary: "...", mandibular: "..." },
  ]
}
```

---

## 4. Quality Assurance & Static Generation

1. Run `npm run check` (`eslint && tsc --noEmit && next build`).
2. Verify all routes:
   - `/cas-cliniques` lists the new case.
   - Dynamic route `/cas-cliniques/<slug>` prerenders statically with all comparatives.
3. Commit and push cleanly to Git.
