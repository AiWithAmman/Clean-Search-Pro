# Clean Search Pro — Combined Landing Site

Single-page React app combining the four uploaded mockup sections (Hero, Before/After,
Features, Pricing) plus the Privacy Policy into one cohesive marketing site.

## Stack
- React 19 + react-router-dom 7 (frontend-only — no backend)
- CRACO (with `@` alias → `src`)
- Tailwind (base only — most styles in `src/styles/clean-search.css`)
- Fonts: Syne (display), DM Mono, DM Sans

## File map
```
src/
├── App.js                       routes for / and /privacy-policy
├── index.js                     entrypoint
├── index.css                    tailwind base + shadcn vars
├── styles/clean-search.css      ⭐ all combined design styles + responsive
├── components/
│   ├── Nav.jsx                  sticky nav with smooth-scroll anchors
│   └── Footer.jsx
└── pages/
    ├── Landing.jsx              Hero → Compare → Features → Pricing
    └── PrivacyPolicy.jsx        TL;DR + 11 sections + contact card

public/
└── index.html                   updated title + description meta
```

## Run locally
```bash
yarn install
yarn start          # → http://localhost:3000
```

Build:
```bash
yarn build          # → /build
```

## Routes
- `/`               Landing page (single-page scroll)
- `/privacy-policy` Privacy Policy
- `/privacy`        Alias for /privacy-policy

## Anchors (smooth-scroll from nav)
- `#compare`  Before / After comparison
- `#features` Features grid
- `#pricing`  Pricing tiers

## Notes
- All CTA buttons currently use `href="#"` placeholders. Wire to your real
  Chrome Web Store URL and Stripe Checkout when ready.
- Below 880px the desktop nav-links collapse; a mobile hamburger menu is a
  recommended P1 follow-up.
- `.env` contains `REACT_APP_BACKEND_URL` which is unused (no backend) — safe to remove.
