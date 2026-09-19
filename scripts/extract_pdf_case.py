import fitz # PyMuPDF
import os
from PIL import Image

pdf_path = r"C:\Users\souis\.gemini\antigravity\brain\b17a106e-ce7a-4c0d-80a5-a22dafa64e0a\.user_uploaded\media_1789812652964.pdf"
out_dir = r"c:\Users\souis\OneDrive\Bureau\Achraf socials here\Antigravity\Mahmoud\public\cas-cliniques\cas-1"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total pages in PDF: {len(doc)}")

# Render each page in high resolution (300 DPI)
for page_num in range(len(doc)):
    page = doc[page_num]
    pix = page.get_pixmap(dpi=200)
    page_filename = os.path.join(out_dir, f"page_{page_num + 1}.jpg")
    pix.save(page_filename)
    print(f"Saved: page_{page_num + 1}.jpg")

# Key slide mappings for the case study
# Page 1: Title slide with Dr Mahmoud Qalalwa & Patient smile
# Page 3: Initial facial photos (Face repos, Sourire, Profil)
# Page 8: Initial endo-buccal (Overjet 14-15mm, Classe II)
# Page 9: Initial occlusal views (Maxillaire & Mandibule)
# Page 12: Panoramique initiale
# Page 13: Céphalométrie initiale
# Page 15: Tableau diagnostic
# Page 18: Décision thérapeutique
# Page 20: Étapes du plan de traitement
# Page 21: Appareillage 7 à 7 & nivellement
# Page 22: Nivellement & alignement complétés
# Page 23: Bilan exo-buccal pré-chirurgical
# Page 24: Bilan endo-buccal post-chirurgical
# Page 25: Mécanique Cl II carré antérieur
# Page 28: Bilan facial final (Face repos, Sourire, Profil)
# Page 29: Bilan endo-buccal final (Occlusion & Contention)
# Page 30: Vues occlusales Avant vs Après
# Page 31: Comparaison endo-buccale 6 vues Avant vs Après
# Page 32: Panoramique de contrôle finale
# Page 33: Céphalométrie de fin de traitement
# Page 34: Superpositions céphalométriques
# Page 35: Comparaison faciale repos Avant vs Après
# Page 36: Comparaison faciale sourire Avant vs Après
# Page 37: Vue esthétique 3/4 finale

print("High-res PDF pages extraction finished successfully.")
