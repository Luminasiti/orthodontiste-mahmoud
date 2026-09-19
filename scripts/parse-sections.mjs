import fs from 'fs';
import path from 'path';

const SITE_KEY = 'dentipai-c7ba31ad';
const PAGE_KEY = 'home-v1-8ad5662a';

const RESEARCH_DIR = path.resolve(`docs/research/${SITE_KEY}/${PAGE_KEY}`);
const SPECS_DIR = path.resolve(`docs/research/${SITE_KEY}/${PAGE_KEY}/components`);

const sectionFiles = [
  { file: 'section-0-Header.json', name: 'Header', comp: 'Header' },
  { file: 'section-1-hero-section.json', name: 'hero-section', comp: 'HeroSection' },
  { file: 'section-2-our-story-section.json', name: 'our-story-section', comp: 'OurStorySection' },
  { file: 'section-3-service-section.json', name: 'service-section', comp: 'ServicesSection' },
  { file: 'section-4-wcu-section.json', name: 'wcu-section', comp: 'WhyChooseUsSection' },
  { file: 'section-5-consultation-section.json', name: 'consultation-section', comp: 'ConsultationSection' },
  { file: 'section-6-testimonial-section.json', name: 'testimonial-section', comp: 'TestimonialSection' },
  { file: 'section-7-faq-section.json', name: 'faq-section', comp: 'FaqSection' },
  { file: 'section-8-blog-section.json', name: 'blog-section', comp: 'BlogSection' },
  { file: 'section-9-cta-section.json', name: 'cta-section', comp: 'CtaSection' },
  { file: 'section-10-Footer.json', name: 'Footer', comp: 'Footer' }
];

for (const sec of sectionFiles) {
  const filePath = path.join(RESEARCH_DIR, sec.file);
  if (!fs.existsSync(filePath)) continue;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const html = data.rawHTML || '';

  // Extract all text content from rawHTML
  const textMatches = [...html.matchAll(/>([^<>{}\n\r\t]+)</g)]
    .map(m => m[1].trim())
    .filter(t => t.length > 0 && !t.startsWith('&nbsp;') && !t.includes('@media'));

  // Extract images
  const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/g)]
    .map(m => {
      const src = m[1];
      const altMatch = m[0].match(/alt=["']([^"']*)["']/);
      return { src, alt: altMatch ? altMatch[1] : '' };
    });

  const specContent = `# ${sec.comp} Specification

## Overview
- **Target file:** \`src/components/sites/${SITE_KEY}/${PAGE_KEY}/${sec.comp}.tsx\`
- **Screenshot:** \`docs/design-references/${SITE_KEY}/${PAGE_KEY}/${sec.file.replace('.json', '.png')}\`
- **Interaction model:** ${sec.comp === 'TestimonialSection' ? 'click-driven (slider / carousel)' : sec.comp === 'FaqSection' ? 'click-driven (accordion expand/collapse)' : sec.comp === 'Header' ? 'click & hover (navigation dropdowns, mobile menu toggle, sticky header)' : 'static with hover micro-interactions'}

## DOM Structure & Key Classes
- Top element: \`${data.tree?.tag || 'section'}\` with classes: \`${data.tree?.classes || ''}\`
- Key child classes:
${(data.tree?.children || []).map(c => `  - \`.${c.classes || c.tag}\``).join('\n')}

## Computed Styles Summary
- Container display: \`${data.tree?.styles?.display || 'block'}\`
- Container padding: \`${data.tree?.styles?.padding || data.tree?.styles?.paddingTop || '0px'}\`
- Max width: \`${data.tree?.styles?.maxWidth || 'none'}\`

## Assets
${imgMatches.map(img => `- Image: \`/sites/${SITE_KEY}/${PAGE_KEY}/images/${path.basename(new URL(img.src).pathname)}\` (Alt: "${img.alt}")`).join('\n')}

## Text Content (verbatim)
${textMatches.map(t => `- "${t}"`).join('\n')}

## Responsive Behavior
- **Desktop (1440px):** Full layout as designed
- **Tablet (768px):** Adapts container width, items may stack into 2-columns or responsive layout
- **Mobile (390px):** Single column stack, compact padding
`;

  fs.writeFileSync(path.join(SPECS_DIR, `${sec.comp}.spec.md`), specContent);
}

console.log('All 11 component spec files written!');
