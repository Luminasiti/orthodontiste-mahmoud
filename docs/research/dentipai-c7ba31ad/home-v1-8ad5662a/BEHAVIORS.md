# Interactive Behaviors: DentiPai (Home V1)

## 1. Navbar Navigation & Dropdowns
- **Interaction Model:** Hover & Click
- Dropdowns: 'Home' (Home One, Home Two) and 'Pages' (Blog, Details, Pricing, Appointment, etc.).
- Mobile Drawer: Opens smoothly from left/top on hamburger menu click.
- Sticky Header: Sticks to top of page.

## 2. Buttons & Link Micro-Interactions
- Primary Buttons (`.default-button`): Background color transitions from primary blue to dark or lighter shade on hover (`transition: all 0.3s ease`).
- Arrow links: Diagonal arrows translate slightly up-right on card hover.

## 3. Testimonials Slider
- Interactive slider with next/previous controls and pagination dots.
- Smooth transition between testimonials.

## 4. FAQ Accordion
- Click accordion question header to expand/collapse answer.
- Smooth height animation with chevron rotation.
- Only one or multiple items open at a time.

## 5. Scroll to Top Button
- Fixed or footer button with smooth scroll behavior to `#scrollToTop`.

## 6. Responsive Breakpoints
- Desktop: `>= 992px` (full 2-column or 3-column layouts)
- Tablet: `768px - 991px` (columns stack or scale, mobile nav kicks in at 991px)
- Mobile: `< 768px` (single column stack, compact spacing)
