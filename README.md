# GravelRig

Independent gravel bike reviews, gear guides, and buying advice from riders who actually ride.

**[Live Site](https://gravel-bikes.jmorrison.workers.dev)**

## Overview

GravelRig is a content-driven review site covering gravel bikes, components, and accessories. It features in-depth bike reviews with comparison tables, categorized gear guides, an educational buyer's guide, and email subscription — all server-rendered at the edge.

### Pages

- **Best Gravel Bikes** — 8 bikes reviewed with star ratings, pros/cons, comparison table, and FAQ with structured data (JSON-LD `Product` + `ItemList` schema)
- **Gear Guide** — 20+ products across 6 categories: tires, wheels, bags & bikepacking, GPS computers, pedals, and saddles
- **Buyer's Guide** — Frame materials, groupsets, tire clearance, geometry, bike fit, and budget breakdowns by tier
- **About** — Editorial process, team info, and affiliate disclosure

### Technical Highlights

- Server-rendered at the edge via Cloudflare Workers
- SEO-optimized with Open Graph/Twitter meta, canonical URLs, JSON-LD structured data, sitemap, and robots.txt
- Email subscription backed by Cloudflare KV with duplicate detection
- Dark theme with custom Tailwind CSS v4 design tokens
- Mobile-first responsive layout with sticky nav and back-to-top button

## Tech Stack

- **Framework** — TanStack Start, React 19, TanStack Router
- **Styling** — Tailwind CSS v4, Shadcn UI, Lucide icons
- **Hosting** — Cloudflare Workers (edge SSR)
- **Storage** — Cloudflare KV (email subscribers)
- **Build** — Vite 7, TypeScript, Bun
- **CI/CD** — GitHub Actions, Wrangler

## Development

```bash
bun install
bun run dev        # Start dev server
bun run build      # Production build
bun run deploy     # Build + deploy to Cloudflare Workers
```

## Project Structure

```
src/
  routes/            # File-based routing
    index.tsx        # Home — hero, featured content, email capture
    best-gravel-bikes.tsx  # Bike reviews + comparison table
    gear-guide.tsx   # Product recommendations by category
    buyers-guide.tsx # Educational buying guide
    about.tsx        # Editorial process + disclosure
    __root.tsx       # Layout — nav, footer, affiliate banner
  components/        # SubscribeForm, error boundaries, Shadcn UI
  server/            # Email subscription server function (KV)
  utils/             # SEO meta tag generator, Cloudflare env helpers
  styles/            # Tailwind v4 theme (dark mode, custom tokens)
```

## License

MIT
