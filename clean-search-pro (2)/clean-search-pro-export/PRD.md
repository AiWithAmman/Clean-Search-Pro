# Clean Search Pro — Combined Marketing Site

## Original Problem Statement
User uploaded 4 HTML landing-page section mockups (Hero, Before/After, Features, Pricing) and a Privacy Policy HTML for **Clean Search Pro** — a Chrome extension that blocks AI Overviews, sponsored ads, and tracking junk. Asked to "combine all and make it to one website."

## Architecture
- **Stack:** React 19 + react-router-dom 7 (frontend-only, no backend needed)
- **Styling:** Single consolidated CSS (`src/styles/clean-search.css`) preserving original dark aesthetic (Syne display + DM Mono + DM Sans, neon green/red/gold/blue accents on near-black `#050507`)
- **Routes:**
  - `/` → `pages/Landing.jsx` (combined Hero → Compare → Features → Pricing)
  - `/privacy-policy` and `/privacy` → `pages/PrivacyPolicy.jsx`
- **Shared:** `components/Nav.jsx` (sticky, smooth-scroll anchors) + `components/Footer.jsx`

## User Persona
Privacy-conscious search users frustrated by AI Overviews / sponsored ads / tracking; potential Pro upgrade candidates.

## Core Requirements (Static)
- Combine all 4 mockup sections into a single cohesive scrolling landing page
- Preserve the original dark, distinctive design language across sections
- Include privacy policy as its own route
- Top navigation tying sections together
- Responsive (mobile-friendly down to 375px)

## What's Been Implemented (2026-01)
- ✅ One-page landing combining Hero, Before/After comparison, Features (6-card grid), Pricing (3-column)
- ✅ Privacy Policy page with TL;DR card, 11 sections, data tables, contact card
- ✅ Sticky nav with smooth-scroll anchors + active state for privacy route
- ✅ Footer with cross-route links on both pages
- ✅ Responsive breakpoints at 1100px / 880px / 480px (cards stack, columns collapse, nav-links hide on mobile)
- ✅ All interactive elements carry `data-testid` attributes
- ✅ Testing agent verified: 100% frontend pass, zero console errors, no horizontal overflow on mobile

## Prioritized Backlog
**P1**
- Mobile hamburger menu (currently nav-links hide on mobile; only logo + Add-to-Chrome CTA visible, footer covers navigation)
- Wire real Chrome Web Store URL into all `href="#"` CTA placeholders
- Wire Stripe Checkout to "Upgrade to Pro" CTAs (integration playbook required)

**P2**
- Add `preventDefault` on placeholder `#` CTAs to avoid scroll-to-top jump
- Split `Landing.jsx` (460+ lines) into per-section components for maintainability
- Add FAQ section, testimonials carousel, demo GIF/video
- Add OG/Twitter meta tags for social sharing
- 404 page

**P3**
- Light theme toggle
- i18n
