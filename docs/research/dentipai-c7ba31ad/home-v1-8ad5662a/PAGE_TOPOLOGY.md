# Page Topology: DentiPai (Home V1)

Target: `https://dentipai.webflow.io/home/home-v1`

## Layout Stack
1. **Header / Navbar** (`Header.tsx`)
   - Type: Sticky / Fixed Top navigation
   - Features: Logo, Navigation links with dropdowns ('Home', 'About Us', 'Services', 'Pages', 'Team'), 'Get Started' CTA button, Mobile hamburger toggle.
2. **Hero Section** (`HeroSection.tsx`)
   - Type: 2-column hero grid (1.15fr / 0.85fr)
   - Left: Tagline, Title with tooth sparkle badge, summary, 'Book an Appointment' button, satisfied client avatars counter (40,000+), 2 checkup feature cards ('Free Vibrant Check Up', 'Dental Implant Check Up').
   - Right: Hero doctor treatment image with rounded corners (`hero-primary-image.jpg`).
3. **Our Story / Mission Section** (`OurStorySection.tsx`)
   - Left: Mission banner image with rounded corners.
   - Right: "It is Our Mission to Make People Smile", summary, 3 checkmarked benefit items, Doctor badge (Dr. Elisabeth Lie - Sr. Dentist) and patient satisfaction avatar.
4. **Services Section** (`ServicesSection.tsx`)
   - Header: "Discover Our Services", "Browse All Services" button.
   - Grid: 6 service cards (Dental Shining, Dental Implants, Dental Crown, Dental Loosen, Orthodontics, Dental Surgery) with custom SVG icons and diagonal arrow hover links.
5. **Why Choose Us Section** (`WhyChooseUsSection.tsx`)
   - Header: "Why Choose DentiPai"
   - Content: 3 feature showcase cards with images: Complete Dental Care, Expertise You Can Trust, Affordable Dental Services.
6. **Consultation CTA Section** (`ConsultationSection.tsx`)
   - Blue banner with doctor consultation image and "Book Your Full Free Consultation Today!" with "Get an Appointment" CTA button.
7. **Testimonials Section** (`TestimonialSection.tsx`)
   - Header: "What Our Clients Say"
   - Slider / Carousel with 5-star ratings, quotes, avatar, client name and role.
8. **FAQ Section** (`FaqSection.tsx`)
   - Left: FAQ image badge ("Frequently Asked Questions").
   - Right: Accordion items with questions and expandable answers.
9. **Blog / Articles Section** (`BlogSection.tsx`)
   - Header: "Read Latest News & Articles"
   - 3 article cards with image, date/category tag, title, and read more link.
10. **CTA Section** (`CtaSection.tsx`)
    - Full-width dark / blue curved banner: "Ready to Transform Your Smile?", decorative highlight badges, appointment booking button.
11. **Footer** (`Footer.tsx`)
    - Multi-column footer: Logo & tagline, Quick Links, Services, Contact info, Social links, Copyright notice, Scroll to top button.
