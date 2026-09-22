import os
import pymupdf
from PIL import Image

pdf_path = r"C:\Users\souis\.gemini\antigravity\brain\b17a106e-ce7a-4c0d-80a5-a22dafa64e0a\.user_uploaded\media_1790100737673.pdf"
out_dir = r"c:\Users\souis\OneDrive\Bureau\Achraf socials here\Antigravity\Mahmoud\public\cas-cliniques\cas-10"
os.makedirs(out_dir, exist_ok=True)

print(f"Rasterizing {pdf_path} into {out_dir}...")
doc = pymupdf.open(pdf_path)
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=150)
    pix.save(os.path.join(out_dir, f"page_{i+1}.jpg"))
page_count = len(doc)
doc.close()
print(f"Rasterized {page_count} pages.")

# Helper to crop by relative coordinates
def crop_rel(img_path, box, save_path):
    img = Image.open(img_path)
    w, h = img.size
    x1, y1, x2, y2 = box
    crop_box = (int(x1 * w), int(y1 * h), int(x2 * w), int(y2 * h))
    cropped = img.crop(crop_box)
    cropped.save(save_path, quality=95)
    print(f"Saved: {save_path} ({cropped.size})")

# 1. Slide 3: Initial Face Triplet
p3 = os.path.join(out_dir, "page_3.jpg")
crop_rel(p3, (0.03, 0.18, 0.32, 0.96), os.path.join(out_dir, "before_face_repos.jpg"))
crop_rel(p3, (0.35, 0.18, 0.65, 0.96), os.path.join(out_dir, "before_face_smile.jpg"))
crop_rel(p3, (0.68, 0.18, 0.97, 0.96), os.path.join(out_dir, "before_face_profile.jpg"))

# 2. Slide 26: Final Face Triplet
p26 = os.path.join(out_dir, "page_26.jpg")
crop_rel(p26, (0.01, 0.12, 0.34, 0.88), os.path.join(out_dir, "after_face_repos.jpg"))
crop_rel(p26, (0.35, 0.12, 0.70, 0.88), os.path.join(out_dir, "after_face_smile.jpg"))
crop_rel(p26, (0.71, 0.12, 0.99, 0.88), os.path.join(out_dir, "after_face_profile.jpg"))

# 3. Slide 33: 3/4 aesthetic smile
p33 = os.path.join(out_dir, "page_33.jpg")
crop_rel(p33, (0.01, 0.01, 0.52, 0.99), os.path.join(out_dir, "after_aesthetic_3_4.jpg"))

# 4. Slide 8: Before intraoral 3 views
p8 = os.path.join(out_dir, "page_8.jpg")
crop_rel(p8, (0.01, 0.18, 0.99, 0.55), os.path.join(out_dir, "before_intraoral.jpg"))

# 5. Slide 27: After intraoral 5 views
p27 = os.path.join(out_dir, "page_27.jpg")
crop_rel(p27, (0.01, 0.08, 0.99, 0.94), os.path.join(out_dir, "after_intraoral.jpg"))

# 6. Slide 28: Before/After Intraoral 6 views comparison
p28 = os.path.join(out_dir, "page_28.jpg")
crop_rel(p28, (0.01, 0.12, 0.99, 0.88), os.path.join(out_dir, "before_after_intraoral_comparison.jpg"))

# 7. Side-by-side Before/After Smile Comparison
bf_smile = Image.open(os.path.join(out_dir, "before_face_smile.jpg"))
af_smile = Image.open(os.path.join(out_dir, "after_face_smile.jpg"))
target_h = 800
bf_w = int(bf_smile.width * (target_h / bf_smile.height))
af_w = int(af_smile.width * (target_h / af_smile.height))
bf_resized = bf_smile.resize((bf_w, target_h), Image.Resampling.LANCZOS)
af_resized = af_smile.resize((af_w, target_h), Image.Resampling.LANCZOS)
comp_smile = Image.new("RGB", (bf_w + af_w + 10, target_h), (255, 255, 255))
comp_smile.paste(bf_resized, (0, 0))
comp_smile.paste(af_resized, (bf_w + 10, 0))
comp_smile.save(os.path.join(out_dir, "before_after_smile_comparison.jpg"), quality=95)

# 8. Side-by-side Before/After Face Repos Comparison
bf_face = Image.open(os.path.join(out_dir, "before_face_repos.jpg"))
af_face = Image.open(os.path.join(out_dir, "after_face_repos.jpg"))
bf_w = int(bf_face.width * (target_h / bf_face.height))
af_w = int(af_face.width * (target_h / af_face.height))
bf_resized = bf_face.resize((bf_w, target_h), Image.Resampling.LANCZOS)
af_resized = af_face.resize((af_w, target_h), Image.Resampling.LANCZOS)
comp_face = Image.new("RGB", (bf_w + af_w + 10, target_h), (255, 255, 255))
comp_face.paste(bf_resized, (0, 0))
comp_face.paste(af_resized, (bf_w + 10, 0))
comp_face.save(os.path.join(out_dir, "before_after_face_comparison.jpg"), quality=95)

print("Cas 10 processing complete!")
