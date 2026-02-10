import { createFileRoute, Link } from '@tanstack/react-router'
import { SubscribeForm } from '~/components/SubscribeForm'
import { seo, seoLinks } from '~/utils/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title: 'GravelRig — Expert Gravel Bike Reviews & Gear Guides (2026)',
      description: 'Independent gravel bike reviews, gear guides, and buying advice from riders who actually ride. 8 bikes tested, 30+ products reviewed for 2026.',
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1200&q=80&auto=format',
      path: '/',
    }),
    links: seoLinks({ path: '/' }),
  }),
  component: Home,
})

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1920&q=80&auto=format"
            alt="Cyclist riding on a gravel road through scenic landscape"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Updated February 2026</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Find Your Perfect{' '}
              <span className="text-primary">Gravel Bike</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We've ridden thousands of miles on 8 of the best gravel bikes and 30+ gear products so you don't have to guess. Real dirt. Honest opinions. No manufacturer fluff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/best-gravel-bikes"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-bold text-base hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
              >
                See Our Top 8 Picks →
              </Link>
              <Link
                to="/buyers-guide"
                className="inline-flex items-center justify-center gap-2 border border-border px-7 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Read the Buyer's Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-16 -mt-4">
        <div className="grid gap-6 md:grid-cols-3">
          <ContentCard
            to="/best-gravel-bikes"
            tag="Reviews"
            title="Best Gravel Bikes 2026"
            description="8 bikes tested head-to-head across every budget — from the $1,099 Poseidon Redwood to the $6,500 Cervélo Áspero 5. Ratings, specs, and real-ride impressions."
          />
          <ContentCard
            to="/gear-guide"
            tag="Gear"
            title="Essential Gear & Accessories"
            description="The tires, wheels, bags, GPS units, pedals, and saddles that actually matter. 30+ products hand-picked from years of testing."
          />
          <ContentCard
            to="/buyers-guide"
            tag="Guide"
            title="Gravel Bike Buyer's Guide"
            description="Frame materials, groupsets, tire clearance, geometry, fit, and budget — everything you need to make a confident purchase decision."
          />
        </div>
      </section>

      {/* Email Capture */}
      <section className="border-y border-border/50 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Get Our Weekly Gravel Gear Deals</h2>
            <p className="text-muted-foreground">
              We track prices on the best gravel bikes and gear. Get notified when something drops — plus exclusive reviews and riding tips.
            </p>
            <div className="pt-2">
              <SubscribeForm />
            </div>
            <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime. We never share your email.</p>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Why Riders Trust GravelRig</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">We're a small crew of gravel obsessives based in the Midwest. We ride year-round and test everything ourselves.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <TrustCard
            emoji="🚴"
            title="Ridden, Not Regurgitated"
            description="Every bike gets hundreds of miles on real gravel before we publish. We ride in Kansas flint hills, Ozark singletrack, and Iowa B-roads — not press junkets."
          />
          <TrustCard
            emoji="💰"
            title="Every Budget Welcome"
            description="From the $1,099 Poseidon Redwood to the $6,500 Cervélo Áspero 5 — we cover the full spectrum because not everyone has a pro team's budget."
          />
          <TrustCard
            emoji="🔍"
            title="Transparent & Independent"
            description="We earn from affiliate links, but our picks are based on ride quality, not commission rates. We've recommended bikes that pay us nothing because they're genuinely the best."
          />
        </div>
      </section>
    </div>
  )
}

const cardImages: Record<string, { src: string; alt: string }> = {
  '/best-gravel-bikes': {
    src: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80&auto=format',
    alt: 'Close-up of a gravel bike showing detailed components',
  },
  '/gear-guide': {
    src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80&auto=format',
    alt: 'Group of cyclists riding together on a scenic route',
  },
  '/buyers-guide': {
    src: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&q=80&auto=format',
    alt: 'Cyclist silhouette riding at golden hour',
  },
}

function ContentCard({ to, tag, title, description }: { to: string; tag: string; title: string; description: string }) {
  const image = cardImages[to]
  return (
    <Link to={to} className="group block rounded-xl border border-border/50 bg-card overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>
      )}
      <div className="p-6 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">{tag}</span>
        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
          Read more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  )
}

function TrustCard({ emoji, title, description }: { emoji: string; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border/50 bg-card p-6 space-y-3 hover:border-primary/20 transition-colors">
      <span className="text-3xl">{emoji}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
