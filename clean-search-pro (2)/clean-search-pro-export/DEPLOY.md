# Deploy to Vercel

## One-time setup (CLI)
```bash
npm i -g vercel
cd clean-search-pro-export
yarn install          # ensure node_modules exist for the first local run
vercel                # follow prompts → links to a new Vercel project
vercel --prod         # promote to production
```

## Or: deploy via dashboard (no CLI)
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new → Import the repo
3. Vercel auto-detects **Create React App** — accept defaults
4. Click **Deploy**

## What `vercel.json` does
- Tells Vercel to build with `yarn build` → output `build/`
- **SPA fallback rewrite**: every path (including `/privacy-policy`) serves
  `index.html` so React Router handles routing client-side. Without this,
  a direct hit on `/privacy-policy` would 404.
- Long-cache `/static/*` assets (CRA fingerprints filenames, so safe).

## Environment variables
This site is fully frontend, so **no env vars are required on Vercel.**
The `.env` file in this folder contains `REACT_APP_BACKEND_URL` which is
unused — you can safely delete it before pushing.

## Custom domain
After deploy: Vercel dashboard → project → Settings → Domains → add
`cleansearchpro.com` (or whatever) and follow DNS instructions.

## Common gotchas
- If the build fails on `dotenv` warnings, ignore — they're harmless.
- Privacy Policy 404 on hard refresh? Confirm `vercel.json` is at the
  project root (same level as `package.json`).
