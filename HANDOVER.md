# Siya Ram Fabrics (SRF) — Project Handover & Architecture Guide

Welcome to the **Siya Ram Fabrics (SRF-Website)** codebase. This document serves as a comprehensive developer and administrator guide for maintaining, updating, and scaling the SRF digital agency web application.

---

## 🛠️ Technology Stack & Core Dependencies

| Technology / Library | Version / Tool | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router with Turbopack) | Server-side rendering, static page generation, API routing |
| **Styling** | Tailwind CSS v4 & Custom CSS Tokens | Avant-garde UI design system, mobile responsive media queries |
| **Animation** | Framer Motion | Smooth entry transitions, interactive spotlight panels, scroll triggers |
| **Icons** | Lucide React | Modern vector icon set |
| **Email Service** | Resend API | Contact form email notification delivery |
| **Typography** | Bebas Neue & Inter (Google Fonts) | High-contrast industrial heading and body typography |

---

## 🎨 Design System & Color Tokens

The visual identity reflects a 30-year industrial textile manufacturing legacy combined with a modern, high-precision agency aesthetic:

- **Primary Maroon (`--primary`)**: `#B12137`
- **Brand Bright (`--brand-bright`)**: `#E5484D`
- **Background (`--background`)**: `#09090B` (Dark Mode Base) / Light Mode Support
- **Muted Foreground (`--muted-foreground`)**: `#A1A1AA`
- **Headings Font**: `var(--font-bebas)` (Bebas Neue)
- **Body Font**: `var(--font-inter)` (Inter)

---

## 📱 Mobile Responsiveness & Touch UX

The application has been engineered with mobile-first CSS architecture and touch-screen usability:

1. **Horizontal Scroll Containment**: `overflow-x: hidden` enforced at `html, body` level with touch momentum (`-webkit-overflow-scrolling: touch`).
2. **Swipeable Component Containers**: `.no-scrollbar` class applied to tab bar switchers (`About` leadership tabs, `Products` catalog categories) allowing smooth horizontal touch scrolling without clunky native scrollbars.
3. **Responsive Grid Breakpoints**: Adaptive column transitions (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3/4`) across all infrastructure, manufacturing, and product cards.
4. **Touch Target Optimization**: Button padding and clickable elements adhere to a minimum 44px height for mobile accessibility.

---

## 📂 Key Architecture & Components

```
src/
├── app/
│   ├── about/              # Founder story (Harish Jindal), 2nd gen leadership spotlight
│   ├── api/contact/        # Resend API endpoint for contact submissions
│   ├── contact/            # Interactive contact form with live validation
│   ├── infrastructure/     # 1.5 Lac sq ft plant specs & machinery ribbon
│   ├── manufacturing/      # 6-step manufacturing process & QA cards
│   ├── privacy/            # Privacy Policy
│   ├── products/           # Fabric catalog & specification filters
│   ├── terms/              # Terms of Service
│   ├── globals.css         # CSS design tokens, scroll behavior & mobile utilities
│   ├── layout.tsx          # Master layout containing Navbar & Footer
│   └── page.tsx            # Avant-garde homepage
├── components/
│   ├── about-interactive-sections.tsx # Leadership spotlight tabs & core values grid
│   ├── products-interactive-catalog.tsx # Fabric catalog category filtering
│   ├── navbar.tsx          # Glassmorphism header with responsive mobile sheet menu
│   ├── footer.tsx          # Site-wide footer with quick links & company details
│   └── whatsapp-button.tsx # Floating quick-connect chat button
```

---

## ⚡ Environment Variables

To activate contact form email notifications via **Resend**, create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_your_resend_api_key_here
```

*Note: If `RESEND_API_KEY` is omitted, the contact API falls back to console logging during development without crashing.*

---

## 🚀 Build & Deployment Commands

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run production build validation
npm run build

# Start production server locally
npm run start
```

---

## ✅ Production Readiness Checklist

- [x] All 14 routes statically generated with 0 build errors (`npm run build`).
- [x] Zero horizontal scroll overflow on mobile viewports (tested down to 320px screen width).
- [x] Glassmorphism Navbar with touch-friendly Sheet Drawer for mobile navigation.
- [x] High-resolution optimized photos for Harish Jindal, Saransh Jindal, and Yuvraj Jindal.
- [x] Full SEO meta descriptions, OpenGraph tags, `robots.txt`, and `sitemap.xml`.
