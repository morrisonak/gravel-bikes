import { createFileRoute, Link } from '@tanstack/react-router'
import { seo, seoLinks } from '~/utils/seo'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      ...seo({
        title: 'About GravelRig — Our Team, Mission & Editorial Process | GravelRig',
        description: 'Learn about GravelRig, our editorial process, testing methodology, and affiliate disclosure. Independent gravel bike reviews by passionate riders.',
        image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1200&q=80&auto=format',
        path: '/about',
      }),
      { name: 'robots', content: 'index, follow' },
    ],
    links: seoLinks({ path: '/about' }),
  }),
  component: About,
})

function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">About</span>
      </nav>

      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden mb-10 h-56 md:h-72">
        <img
          src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1200&q=80&auto=format"
          alt="Cyclist riding on a scenic gravel road through open landscape"
          className="w-full h-full object-cover"
          width={1200}
          height={600}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <header className="space-y-4 mb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">About GravelRig</h1>
        <p className="text-lg text-muted-foreground">Independent gravel bike reviews from riders who put real miles on everything we recommend.</p>
      </header>

      <div className="space-y-12">
        {/* Who We Are */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Who We Are</h2>
          <div className="text-muted-foreground leading-relaxed space-y-3">
            <p>
              GravelRig was started by a small crew of obsessive gravel cyclists in the Midwest who were tired of generic "best of" lists clearly written by people who never touched the bikes. Half the reviews out there reword the manufacturer's spec sheet and call it journalism. We wanted something better.
            </p>
            <p>
              We're based where gravel roads outnumber paved ones, and we ride year-round — through August heat, October mud, and the occasional January adventure when the wind chill says we should stay home. Every bike and product on this site has been ridden on our local routes and at events like Unbound Gravel, SBT GRVL, and the Mid South. When we say "tested," we mean tested — not "we looked at the spec sheet and imagined how it rides."
            </p>
          </div>
        </section>

        {/* Editorial Process */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Our Editorial Process</h2>
          <div className="text-muted-foreground leading-relaxed space-y-3">
            <p>
              Transparency matters, so here's exactly how we evaluate products:
            </p>
            <div className="grid gap-4 mt-2">
              <div className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">1.</span> Selection
                </h3>
                <p className="text-sm">We choose products based on market relevance, reader requests, and gaps in our coverage. We do not accept paid placements or "sponsored reviews." Manufacturers can send us products for testing, but receiving a product does not guarantee coverage or a positive review.</p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">2.</span> Testing
                </h3>
                <p className="text-sm">Every bike gets a minimum of 200 miles across varied terrain before we publish. Gear products get at least 4 weeks of regular use. We test in real-world conditions — not controlled environments. Our test routes include smooth limestone, chunky flint, muddy creek crossings, and sustained climbs.</p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">3.</span> Writing
                </h3>
                <p className="text-sm">Reviews are written by the person who rode the bike or used the product. We include specific observations, comparisons to competing products, and clear pros/cons. We flag issues we encounter — even on products we like overall.</p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-5">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">4.</span> Updates
                </h3>
                <p className="text-sm">We revisit and update our reviews when manufacturers release new models, prices change significantly, or we discover long-term issues. Every page shows a "Last updated" date so you know how current the information is.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Help every rider — from first-timer to seasoned racer — find the right bike and equipment for their riding style and budget. We keep things honest, specific, and actionable. If we wouldn't buy it with our own money, we don't recommend it. If a cheaper product outperforms a premium one, we say so. No filler, no hedging, no hidden agendas.
          </p>
        </section>

        {/* Affiliate Disclosure */}
        <section className="space-y-4" id="affiliate-disclosure">
          <h2 className="text-xl font-bold">Affiliate Disclosure</h2>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">FTC Disclosure:</strong> GravelRig participates in affiliate advertising programs, including retailer referral programs from Trek, Canyon, Specialized, Cannondale, and other manufacturers, as well as the Amazon Services LLC Associates Program. When you click product links on our site and make a purchase, we may earn a commission at no additional cost to you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These commissions fund our operations — hosting, gear purchases for testing, event registration, and the hundreds of hours we spend riding and writing. They do not influence our editorial recommendations. We have recommended products from brands that offer zero affiliate commission because they were the best option for our readers. We have also declined to review products from brands offering high commissions because we didn't think the products were good enough.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Product prices and availability are accurate as of the date shown on each page and are subject to change. Prices displayed on retailer sites at the time of purchase will apply.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">How to identify affiliate links:</strong> All external product links on our site that lead to purchase pages are affiliate links. They are marked with <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">rel="sponsored"</code> in the HTML for transparency and SEO compliance.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <div className="text-muted-foreground leading-relaxed space-y-3">
            <p>
              Questions, corrections, product suggestions, or just want to talk gravel? We read every email.
            </p>
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <p className="font-medium text-foreground">📧 hello@gravelrig.com</p>
              <p className="text-sm text-muted-foreground mt-2">We typically respond within 48 hours. For corrections or factual errors, we prioritize same-day updates.</p>
            </div>
          </div>
        </section>

        {/* Navigation CTA */}
        <section className="border-t border-border/50 pt-10 space-y-3">
          <h2 className="text-xl font-bold">Start Exploring</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/best-gravel-bikes" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-bold hover:brightness-110 transition-all">
              Best Gravel Bikes 2026 →
            </Link>
            <Link to="/gear-guide" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg text-sm font-semibold hover:bg-secondary transition-colors">
              Gear Guide
            </Link>
            <Link to="/buyers-guide" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg text-sm font-semibold hover:bg-secondary transition-colors">
              Buyer's Guide
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
