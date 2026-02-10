# CLAUDE.md

This file provides guidance to Claude Code when working with the GravelRig gravel bike affiliate review site.

## Commands

```bash
bun install              # Install dependencies
bun run dev              # Start dev server on port 3000
bun run build            # Build for production (includes tsc --noEmit)
bun run deploy           # Build and deploy to Cloudflare Workers
bun run cf-typegen       # Regenerate Cloudflare binding types
```

## Architecture

**Stack:** TanStack Start + React 19 + Shadcn UI + Tailwind CSS v4 + Cloudflare Workers

**Site type:** Static affiliate content site (no database, no auth, no server functions currently)

### Project Structure
```
src/
├── routes/
│   ├── __root.tsx           # Root layout (nav, footer, affiliate banner, back-to-top)
│   ├── index.tsx            # Home page (hero, content cards, email capture, trust section)
│   ├── about.tsx            # About, editorial process, affiliate disclosure
│   ├── best-gravel-bikes.tsx # 8 bike reviews, comparison table, FAQ, JSON-LD schema
│   ├── buyers-guide.tsx     # Frame materials, groupsets, tires, geometry, fit, budget
│   └── gear-guide.tsx       # 20+ products in 6 categories, JSON-LD schema
├── components/
│   ├── ui/                  # Shadcn UI components (button, card, input, label, textarea, alert-dialog)
│   ├── DefaultCatchBoundary.tsx
│   └── NotFound.tsx
├── lib/
│   └── utils.ts             # cn() Tailwind merge utility
├── styles/app.css           # Tailwind v4 theme (dark-only, warm orange primary)
└── utils/
    ├── cloudflare.ts        # getDB(), getBucket(), getKV() helpers (scaffolded, not yet used)
    └── seo.ts               # Meta tag generator (title, description, OG, Twitter, canonical)
public/
├── favicon.svg              # GravelRig brand favicon
├── robots.txt
└── sitemap.xml
```

## Content Data

Bike and product data is currently hardcoded in route files:
- `best-gravel-bikes.tsx` — `bikes: Bike[]` array (8 bikes with full specs, reviews, pros/cons)
- `gear-guide.tsx` — `categories: Category[]` array (6 categories, 20+ products)

## SEO

- Every page uses `seo()` utility for meta tags (title, description, OG, Twitter, canonical)
- JSON-LD structured data on `/best-gravel-bikes` (ItemList + Product) and `/gear-guide` (ItemList)
- FAQPage schema on `/best-gravel-bikes`
- Affiliate links use `rel="noopener noreferrer sponsored"`
- Breadcrumbs on all content pages
- `sitemap.xml` and `robots.txt` in public/

## Cloudflare Bindings (Scaffolded)

`src/utils/cloudflare.ts` exports helpers for D1, R2, and KV but these are not yet bound in `wrangler.jsonc`. To enable:

```jsonc
// Add to wrangler.jsonc:
"d1_databases": [{ "binding": "DB", "database_name": "...", "database_id": "..." }],
"r2_buckets": [{ "binding": "BUCKET", "bucket_name": "..." }],
"kv_namespaces": [{ "binding": "KV", "id": "..." }]
```

## Shadcn UI

Available components in `src/components/ui/`: button, card, input, label, textarea, alert-dialog

```bash
bunx shadcn@latest add [component]
```

## Design System

Dark-only theme with warm orange primary. Colors defined in `src/styles/app.css` via Tailwind v4 `@theme`:
- Background: `hsl(20 10% 4%)` (warm near-black)
- Primary: `hsl(30 100% 50%)` (vibrant orange)
- Foreground: `hsl(30 10% 92%)` (warm off-white)

## Deployment

Deploys automatically via GitHub Actions on push to `main`. Manual deploy: `bun run deploy`.
