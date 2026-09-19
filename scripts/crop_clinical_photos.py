from PIL import Image
import os

case_dir = r"c:\Users\souis\OneDrive\Bureau\Achraf socials here\Antigravity\Mahmoud\public\cas-cliniques\cas-1"

# 1. Page 3: Before Face Photos
p3 = Image.open(os.path.join(case_dir, "page_3.jpg"))
w, h = p3.size
# crop top header and extract 3 photos
y1, y2 = int(h * 0.18), int(h * 0.95)
p3.crop((int(w * 0.03), y1, int(w * 0.33), y2)).save(os.path.join(case_dir, "before_face_repos.jpg"))
p3.crop((int(w * 0.34), y1, int(w * 0.65), y2)).save(os.path.join(case_dir, "before_face_smile.jpg"))
p3.crop((int(w * 0.67), y1, int(w * 0.97), y2)).save(os.path.join(case_dir, "before_face_profile.jpg"))

# 2. Page 28: After Face Photos
p28 = Image.open(os.path.join(case_dir, "page_28.jpg"))
w, h = p28.size
y1, y2 = int(h * 0.13), int(h * 0.92)
p28.crop((int(w * 0.03), y1, int(w * 0.33), y2)).save(os.path.join(case_dir, "after_face_repos.jpg"))
p28.crop((int(w * 0.34), y1, int(w * 0.65), y2)).save(os.path.join(case_dir, "after_face_smile.jpg"))
p28.crop((int(w * 0.67), y1, int(w * 0.97), y2)).save(os.path.join(case_dir, "after_face_profile.jpg"))

# 3. Page 36: Smile Comparison (Avant vs Après)
p36 = Image.open(os.path.join(case_dir, "page_36.jpg"))
w, h = p36.size
p36.crop((int(w * 0.05), int(h * 0.03), int(w * 0.95), int(h * 0.97))).save(os.path.join(case_dir, "before_after_smile_comparison.jpg"))

# 4. Page 35: Face Repos Comparison (Avant vs Après)
p35 = Image.open(os.path.join(case_dir, "page_35.jpg"))
w, h = p35.size
p35.crop((int(w * 0.05), int(h * 0.03), int(w * 0.95), int(h * 0.97))).save(os.path.join(case_dir, "before_after_face_comparison.jpg"))

# 5. Page 31: Intra-oral 6-views Comparison (Avant vs Après)
p31 = Image.open(os.path.join(case_dir, "page_31.jpg"))
w, h = p31.size
p31.crop((int(w * 0.03), int(h * 0.10), int(w * 0.97), int(h * 0.92))).save(os.path.join(case_dir, "before_after_intraoral_comparison.jpg"))

# 6. Page 8: Initial Intra-oral
p8 = Image.open(os.path.join(case_dir, "page_8.jpg"))
w, h = p8.size
p8.crop((int(w * 0.03), int(h * 0.16), int(w * 0.97), int(h * 0.58))).save(os.path.join(case_dir, "before_intraoral_overjet.jpg"))

# 7. Page 29: Final Intra-oral
p29 = Image.open(os.path.join(case_dir, "page_29.jpg"))
w, h = p29.size
p29.crop((int(w * 0.03), int(h * 0.08), int(w * 0.97), int(h * 0.95))).save(os.path.join(case_dir, "after_intraoral_occlusion.jpg"))

# 8. Page 37: 3/4 aesthetic smile
p37 = Image.open(os.path.join(case_dir, "page_37.jpg"))
w, h = p37.size
p37.crop((int(w * 0.01), int(h * 0.01), int(w * 0.49), int(h * 0.99))).save(os.path.join(case_dir, "after_aesthetic_3_4.jpg"))

print("Cropped clinical photos saved successfully.")
