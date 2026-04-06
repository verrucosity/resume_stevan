# Estevan Mejia  Personal Resume Site

A premium personal resume/portfolio site for a senior Full Stack Engineer. Designed to feel like a high-end SaaS landing page, not a generic portfolio.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 with a fully custom design system
- **Animations:** Framer Motion  scroll-based, entrance, parallax
- **Fonts:** Inter (Google Fonts)
- **Deployment:** Vercel

---

## Design Principles

- Dark mode by default (`#080A0F` base)
- Japanese minimalism meets modern tech startup aesthetic
- Accent color: warm gold (`#C8A97E`)
- Glassmorphism panels, ambient glow blobs, subtle noise texture
- Custom cursor (dot + ring with lag), loading screen with number counter

---

## Project Structure

```
src/
app/
  globals.css      # Full design system (CSS variables, utility classes)
  layout.tsx       # Root layout + Inter font
  page.tsx         # Page assembly
components/
  Nav.tsx           # Fixed nav with scroll-blur effect
  Hero.tsx          # Parallax hero with metrics strip
  CaseStudy.tsx     # Nature's Cradle timeline case study
  Skills.tsx        # Tabbed skills with animated progress bars
  Philosophy.tsx    # Principle cards + pull quote (Japanese glyphs)
  Experience.tsx    # SyncWave, Freelance, TS Co
  Contact.tsx       # Email + LinkedIn + footer
  CustomCursor.tsx  # Lagged ring + dot cursor
  Loader.tsx        # Loading screen with progress counter
```

---

## Deploy to Vercel

### Option 1 - Vercel CLI (fastest)

```bash
cd resume-site
npm i -g vercel
vercel
```

Follow the prompts. It will auto-detect Next.js and configure everything.

### Option 2 - GitHub + Vercel Dashboard

1. Push this folder to a GitHub repository
2. Go to vercel.com - New Project
3. Import the repository
4. Set Root Directory to `resume-site` if needed
5. Click Deploy - no environment variables needed

---

## Local Development

```bash
cd resume-site
npm install
npm run dev
```

Open http://localhost:3000

---

## Customization

All personal data is hardcoded in each component. To update:

| What | Where |
|------|-------|
| Name, title, summary | Hero.tsx |
| Metrics ($40k, 40%) | Hero.tsx, CaseStudy.tsx |
| Case study details | CaseStudy.tsx |
| Skills and levels | Skills.tsx - skillGroups array |
| Philosophy principles | Philosophy.tsx - principles array |
| Past jobs | Experience.tsx - experiences array |
| Email and LinkedIn | Contact.tsx |
