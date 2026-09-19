import fs from 'fs';
import path from 'path';

const SITE_KEY = 'dentipai-c7ba31ad';
const PAGE_KEY = 'home-v1-8ad5662a';

const RESEARCH_DIR = path.resolve(`docs/research/${SITE_KEY}/${PAGE_KEY}`);
const SPECS_DIR = path.resolve(`docs/research/${SITE_KEY}/${PAGE_KEY}/components`);
const SCREENSHOT_DIR = `docs/design-references/${SITE_KEY}/${PAGE_KEY}`;

fs.mkdirSync(SPECS_DIR, { recursive: true });

const rawData = JSON.parse(fs.readFileSync(path.join(RESEARCH_DIR, 'raw_data.json'), 'utf-8'));
const imageMap = JSON.parse(fs.readFileSync(path.join(RESEARCH_DIR, 'image_map.json'), 'utf-8'));

// 1. DESIGN_TOKENS.md
const designTokens = `# Design Tokens: DentiPai (Home V1)

## Colors
- **Primary:** \`#0e63f3\` (\`rgb(14, 99, 243)\`) - Main brand blue for primary buttons, links, accents
- **Primary Hover / Swatch 75:** \`#0e63f3bf\`
- **Dark / Main Text / Heading:** \`#070707\` (\`rgb(7, 7, 7)\`)
- **Body Text:** \`#555555\` / \`#666666\`
- **Light Neutral / Card BG:** \`#fdfdfd\` / \`#ffffff\`
- **Light Blue Background:** \`#e7effe\` (\`--color--neutral-two\`)
- **Border Light Blue:** \`#cfe0fd\` (\`--border--primary\`)
- **Border Main Gray:** \`#9b9b9b\` / \`rgba(7, 7, 7, 0.1)\`
- **Dark Swatch 30:** \`rgba(7, 7, 7, 0.3)\`

## Typography
- **Primary Font Family:** \`Plus Jakarta Sans\`, sans-serif
- **Weights Used:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Headings:**
  - H1 (Hero Title): \`64px\` (Mobile: \`40px\`), line-height: \`1.15\`, font-weight: 700
  - H2 (Section Title): \`48px\` (Mobile: \`32px\`), line-height: \`1.2\`, font-weight: 700
  - H3 (Card/Item Title): \`24px\` (Mobile: \`20px\`), line-height: \`1.3\`, font-weight: 600
- **Body Text:** \`16px\`, line-height: \`1.6\`, font-weight: 400
- **Small Text / Captions:** \`14px\`, line-height: \`1.5\`

## Spacing Scale
- Section Padding Y: \`120px\` desktop, \`80px\` tablet, \`60px\` mobile (\`.section-gap-y-axis\`, \`.section-gap-top\`)
- Container Max Width: \`1280px\` (with \`24px\` or \`20px\` horizontal padding)
- Component gaps: \`16px\`, \`24px\`, \`32px\`, \`48px\`, \`64px\`

## Border Radii
- Pill Buttons: \`100px\`
- Cards / Containers: \`24px\` - \`32px\`
- Inner items: \`16px\` - \`20px\`
- Avatars: \`100px\` (circular)

## Shadows & Elevations
- Card Subtle Hover: \`0 10px 30px rgba(14, 99, 243, 0.08)\`
- Dropdown Shadow: \`0 8px 24px rgba(7, 7, 7, 0.08)\`
`;

fs.writeFileSync(path.join(RESEARCH_DIR, 'DESIGN_TOKENS.md'), designTokens);

// 2. PAGE_TOPOLOGY.md
const pageTopology = `# Page Topology: DentiPai (Home V1)

Target: \`https://dentipai.webflow.io/home/home-v1\`

## Layout Stack
1. **Header / Navbar** (\`Header.tsx\`)
   - Type: Sticky / Fixed Top navigation
   - Features: Logo, Navigation links with dropdowns ('Home', 'About Us', 'Services', 'Pages', 'Team'), 'Get Started' CTA button, Mobile hamburger toggle.
2. **Hero Section** (\`HeroSection.tsx\`)
   - Type: 2-column hero grid (1.15fr / 0.85fr)
   - Left: Tagline, Title with tooth sparkle badge, summary, 'Book an Appointment' button, satisfied client avatars counter (40,000+), 2 checkup feature cards ('Free Vibrant Check Up', 'Dental Implant Check Up').
   - Right: Hero doctor treatment image with rounded corners (\`hero-primary-image.jpg\`).
3. **Our Story / Mission Section** (\`OurStorySection.tsx\`)
   - Left: Mission banner image with rounded corners.
   - Right: "It is Our Mission to Make People Smile", summary, 3 checkmarked benefit items, Doctor badge (Dr. Elisabeth Lie - Sr. Dentist) and patient satisfaction avatar.
4. **Services Section** (\`ServicesSection.tsx\`)
   - Header: "Discover Our Services", "Browse All Services" button.
   - Grid: 6 service cards (Dental Shining, Dental Implants, Dental Crown, Dental Loosen, Orthodontics, Dental Surgery) with custom SVG icons and diagonal arrow hover links.
5. **Why Choose Us Section** (\`WhyChooseUsSection.tsx\`)
   - Header: "Why Choose DentiPai"
   - Content: 3 feature showcase cards with images: Complete Dental Care, Expertise You Can Trust, Affordable Dental Services.
6. **Consultation CTA Section** (\`ConsultationSection.tsx\`)
   - Blue banner with doctor consultation image and "Book Your Full Free Consultation Today!" with "Get an Appointment" CTA button.
7. **Testimonials Section** (\`TestimonialSection.tsx\`)
   - Header: "What Our Clients Say"
   - Slider / Carousel with 5-star ratings, quotes, avatar, client name and role.
8. **FAQ Section** (\`FaqSection.tsx\`)
   - Left: FAQ image badge ("Frequently Asked Questions").
   - Right: Accordion items with questions and expandable answers.
9. **Blog / Articles Section** (\`BlogSection.tsx\`)
   - Header: "Read Latest News & Articles"
   - 3 article cards with image, date/category tag, title, and read more link.
10. **CTA Section** (\`CtaSection.tsx\`)
    - Full-width dark / blue curved banner: "Ready to Transform Your Smile?", decorative highlight badges, appointment booking button.
11. **Footer** (\`Footer.tsx\`)
    - Multi-column footer: Logo & tagline, Quick Links, Services, Contact info, Social links, Copyright notice, Scroll to top button.
`;

fs.writeFileSync(path.join(RESEARCH_DIR, 'PAGE_TOPOLOGY.md'), pageTopology);

// 3. BEHAVIORS.md
const behaviors = `# Interactive Behaviors: DentiPai (Home V1)

## 1. Navbar Navigation & Dropdowns
- **Interaction Model:** Hover & Click
- Dropdowns: 'Home' (Home One, Home Two) and 'Pages' (Blog, Details, Pricing, Appointment, etc.).
- Mobile Drawer: Opens smoothly from left/top on hamburger menu click.
- Sticky Header: Sticks to top of page.

## 2. Buttons & Link Micro-Interactions
- Primary Buttons (\`.default-button\`): Background color transitions from primary blue to dark or lighter shade on hover (\`transition: all 0.3s ease\`).
- Arrow links: Diagonal arrows translate slightly up-right on card hover.

## 3. Testimonials Slider
- Interactive slider with next/previous controls and pagination dots.
- Smooth transition between testimonials.

## 4. FAQ Accordion
- Click accordion question header to expand/collapse answer.
- Smooth height animation with chevron rotation.
- Only one or multiple items open at a time.

## 5. Scroll to Top Button
- Fixed or footer button with smooth scroll behavior to \`#scrollToTop\`.

## 6. Responsive Breakpoints
- Desktop: \`>= 992px\` (full 2-column or 3-column layouts)
- Tablet: \`768px - 991px\` (columns stack or scale, mobile nav kicks in at 991px)
- Mobile: \`< 768px\` (single column stack, compact spacing)
`;

fs.writeFileSync(path.join(RESEARCH_DIR, 'BEHAVIORS.md'), behaviors);

// 4. COMPONENT_INVENTORY.md
const componentInventory = `# Component Inventory

| Component Name | File Path | Spec File | Complexity |
|---|---|---|---|
| Header | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Header.tsx\` | \`Header.spec.md\` | Medium |
| HeroSection | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/HeroSection.tsx\` | \`HeroSection.spec.md\` | High |
| OurStorySection | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/OurStorySection.tsx\` | \`OurStorySection.spec.md\` | Medium |
| ServicesSection | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/ServicesSection.tsx\` | \`ServicesSection.spec.md\` | Medium |
| WhyChooseUsSection | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/WhyChooseUsSection.tsx\` | \`WhyChooseUsSection.spec.md\` | Medium |
| ConsultationSection | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/ConsultationSection.tsx\` | \`ConsultationSection.spec.md\` | Low |
| TestimonialSection | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/TestimonialSection.tsx\` | \`TestimonialSection.spec.md\` | Medium |
| FaqSection | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/FaqSection.tsx\` | \`FaqSection.spec.md\` | Medium |
| BlogSection | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/BlogSection.tsx\` | \`BlogSection.spec.md\` | Medium |
| CtaSection | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/CtaSection.tsx\` | \`CtaSection.spec.md\` | Low |
| Footer | \`src/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Footer.tsx\` | \`Footer.spec.md\` | Medium |
`;

fs.writeFileSync(path.join(RESEARCH_DIR, 'COMPONENT_INVENTORY.md'), componentInventory);

console.log('Generated research documentation files!');
