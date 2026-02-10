# GravelRig

Independent gravel bike reviews, gear guides, and buying advice from riders who actually ride.

**Live:** [gravel-bikes.jmorrison.workers.dev](https://gravel-bikes.jmorrison.workers.dev)

## Stack

- **Framework:** TanStack Start + React 19
- **Styling:** Tailwind CSS v4 + Shadcn UI
- **Hosting:** Cloudflare Workers
- **Build:** Vite 7 + Bun

## Development

```bash
bun install
bun run dev        # http://localhost:3000
bun run build      # Production build
bun run deploy     # Build + deploy to Cloudflare Workers
```

## Pages

- `/` — Home (hero, featured content, email capture, trust section)
- `/best-gravel-bikes` — 8 bikes reviewed with comparison table, FAQ, JSON-LD schema
- `/gear-guide` — 20+ products across 6 categories (tires, wheels, bags, GPS, pedals, saddles)
- `/buyers-guide` — Frame materials, groupsets, tire clearance, geometry, fit, budget
- `/about` — Editorial process, affiliate disclosure, contact
