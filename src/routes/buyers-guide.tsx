import { createFileRoute, Link } from '@tanstack/react-router'
import { seo, seoLinks } from '~/utils/seo'

export const Route = createFileRoute('/buyers-guide')({
  head: () => ({
    meta: [
      ...seo({
        title: "Gravel Bike Buyer's Guide 2026 — Everything You Need to Know | GravelRig",
        description: 'Complete gravel bike buying guide: frame materials, groupsets, tire clearance, geometry, fit, and budget. Make an informed decision on your next gravel bike.',
        image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1200&q=80&auto=format',
        path: '/buyers-guide',
      }),
      { name: 'robots', content: 'index, follow' },
    ],
    links: seoLinks({ path: '/buyers-guide' }),
  }),
  component: BuyersGuide,
})

function BuyersGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Buyer's Guide</span>
      </nav>

      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden mb-10 h-56 md:h-72">
        <img
          src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1200&q=80&auto=format"
          alt="Cyclist silhouette riding at golden hour on a gravel path"
          className="w-full h-full object-cover"
          width={1200}
          height={600}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur px-3 py-1.5 rounded-full">
            Last updated: February 2026
          </span>
        </div>
      </div>

      <header className="space-y-4 mb-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Gravel Bike Buyer's Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          The gravel bike market has exploded — there are more options than ever, which makes choosing harder. This guide cuts through the noise and explains every factor that matters, from frame materials to geometry to budget allocation. Already know what you want? Jump to our{' '}
          <Link to="/best-gravel-bikes" className="text-primary hover:underline font-medium">top bike picks</Link> or{' '}
          <Link to="/gear-guide" className="text-primary hover:underline font-medium">essential gear guide</Link>.
        </p>
      </header>

      {/* TOC */}
      <nav className="rounded-xl border border-border/50 bg-card p-6 mb-12">
        <h2 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">In This Guide</h2>
        <ol className="space-y-2">
          {[
            { label: 'Frame Materials', id: 'frame-materials' },
            { label: 'Groupsets & Drivetrains', id: 'groupsets-drivetrains' },
            { label: 'Tire Clearance', id: 'tire-clearance' },
            { label: 'Geometry', id: 'geometry' },
            { label: 'Finding the Right Fit', id: 'finding-the-right-fit' },
            { label: 'Budget Breakdown', id: 'budget-breakdown' },
          ].map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-sm text-foreground/80 hover:text-primary transition-colors">{s.label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-14">
        {/* Frame Materials */}
        <section id="frame-materials">
          <h2 className="text-2xl font-bold mb-4">Frame Materials</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The frame is the foundation of your gravel bike, and the material shapes everything about how it rides — weight, comfort, durability, and price. Here's what you need to know about each material, stripped of marketing fluff.
            </p>
            <p>
              <strong className="text-foreground">Aluminum</strong> is the workhorse material for gravel bikes under $3,000. Modern hydroformed aluminum frames are lighter and more refined than you might expect — brands like Trek and Giant have invested heavily in tube shaping and compliance-focused designs. Trek's IsoSpeed decoupler on the{' '}
              <Link to="/best-gravel-bikes" className="text-primary hover:underline">Checkpoint ALR 5</Link>{' '}
              is a prime example of aluminum done right. The tradeoff is simple: aluminum transmits more vibration than carbon or steel. On smooth gravel, you won't notice. On a 6-hour ride over washboard roads, your hands will remind you. For riders who prioritize value, aluminum delivers more performance per dollar than any other material.
            </p>
            <p>
              <strong className="text-foreground">Carbon fiber</strong> is the performance material. Engineers can independently tune lateral stiffness (for pedaling efficiency) and vertical compliance (for comfort) by varying the layup angles and resin content in different sections of the frame. A well-designed carbon frame is stiffer under power and smoother over bumps simultaneously — something aluminum physically can't match. Carbon also saves 200–400g over equivalent aluminum, which you feel most on climbs. The{' '}
              <Link to="/best-gravel-bikes" className="text-primary hover:underline">Canyon Grail CF SL 7</Link>{' '}
              starts at $3,199 — the current entry point for quality carbon gravel. Carbon's weakness is impact damage: while it handles normal riding forces beautifully, a bad crash or a rock strike can compromise the structure in ways that aren't always visible.
            </p>
            <p>
              <strong className="text-foreground">Steel</strong> (specifically chromoly steel like Reynolds 725 or 4130) has a devoted gravel following for good reason. Steel naturally damps vibration — it's not marketing mythology; the material's elasticity genuinely absorbs high-frequency road buzz that aluminum transmits directly to your hands. Steel frames are also the most durable and repairable: dent an aluminum frame and it's compromised; dent a steel frame and it's a story. The{' '}
              <Link to="/best-gravel-bikes" className="text-primary hover:underline">Poseidon Redwood</Link>{' '}
              shows what steel can do at $1,099. The tradeoff is weight — steel bikes typically weigh 25–30 lbs, 3–5 lbs more than carbon equivalents.
            </p>
          </div>
        </section>

        {/* Groupsets */}
        <section id="groupsets-drivetrains">
          <h2 className="text-2xl font-bold mb-4">Groupsets & Drivetrains</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The groupset encompasses your drivetrain, brakes, and shifting mechanism. For gravel, two manufacturers dominate: Shimano and SRAM. Both make excellent products, and the "best" choice depends on your priorities and budget.
            </p>
            <p>
              <strong className="text-foreground">Shimano GRX</strong> is the most popular gravel groupset family. GRX 400 (budget), GRX 600 (mid-range), and GRX 810 (performance) all feature gravel-optimized ergonomics: flared hoods with textured rubber for better grip on rough roads, and a modified lever shape that's more comfortable for long hours in the drops. GRX is available in both 1x and 2x configurations. The 2x11 setup (46/30T front, 11-34T rear) provides the widest usable gear range in this roundup. All tiers use mechanical cables — no electronic option yet for GRX, which is a notable gap vs. SRAM.
            </p>
            <p>
              <strong className="text-foreground">SRAM XPLR</strong> is SRAM's gravel platform, available in Rival ($), Force ($$), and Red ($$$) tiers. The headline feature is AXS wireless electronic shifting — no cables, no housing, and perfectly repeatable shifts every time. Battery life lasts 40+ hours of ride time. SRAM's XPLR groupsets are 1x only, paired with wide-range cassettes up to 10-44T (or 10-52T with the T-Type derailleur). The{' '}
              <Link to="/best-gravel-bikes" className="text-primary hover:underline">Canyon Grail CF SL 7</Link>{' '}
              uses Rival XPLR AXS, and the{' '}
              <Link to="/best-gravel-bikes" className="text-primary hover:underline">Cervélo Áspero 5</Link>{' '}
              runs Force XPLR AXS.
            </p>
            <p>
              <strong className="text-foreground">1x vs 2x:</strong> A 1x drivetrain (single front chainring) is simpler, lighter, drops fewer chains on rough terrain, and has one less shifter to think about. A 2x drivetrain provides a wider overall range with smaller gaps between gears — critical for hilly routes or loaded bikepacking where you need a "bail-out" low gear. Our recommendation: if you ride rolling to moderately hilly terrain and prioritize simplicity, go 1x with a 40T or 42T chainring. If you face regular 10%+ climbs or bikepack with 15+ lbs of gear, 2x gives you the low-end gearing you'll be thankful for on mile 80 of a long day.
            </p>
          </div>
        </section>

        {/* Tire Clearance */}
        <section id="tire-clearance">
          <h2 className="text-2xl font-bold mb-4">Tire Clearance</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Tire clearance determines the maximum tire width your frame can fit. It's one of the most important specs on a gravel bike — and the one that's hardest to change after purchase. You can always run narrower tires in a wide frame, but you can never go wider than the frame allows. When in doubt, buy more clearance.
            </p>
            <p>
              The current sweet spot is <strong className="text-foreground">40–45mm</strong>. At 40mm, you have enough volume for traction on loose surfaces and reasonable comfort, while keeping weight and rolling resistance low enough for efficient pavement riding. At 45mm, you get noticeably more cushion and stability on rough terrain — the extra 5mm makes a bigger difference than you'd expect.
            </p>
            <p>
              <strong className="text-foreground">Mud clearance</strong> is the hidden factor. A bike that fits a 45mm tire in clean conditions might jam up with 40mm rubber in muddy conditions as debris packs between the tire and frame. Bikes with high chainstay bridges (like the{' '}
              <Link to="/best-gravel-bikes" className="text-primary hover:underline">Salsa Warbird</Link>
              ) handle mud better than frames with tight clearance. If you ride in the Midwest or anywhere mud is a regular occurrence, add 5mm of mental buffer to your minimum clearance requirements.
            </p>
            <p>
              Check our <Link to="/gear-guide" className="text-primary hover:underline font-medium">tire recommendations</Link> for the best options at every width — the tire matters more than the frame when it comes to ride quality.
            </p>
          </div>
        </section>

        {/* Geometry */}
        <section id="geometry">
          <h2 className="text-2xl font-bold mb-4">Geometry</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Geometry defines how a bike handles — it's the difference between a bike that inspires confidence on a rocky descent and one that makes you white-knuckle the bars. Gravel bikes span a wide range, from road-race aggressive to touring-bike relaxed.
            </p>
            <p>
              <strong className="text-foreground">Head tube angle (HTA)</strong> is the single most telling number. A steeper angle (72–73°) creates quicker, more responsive steering — ideal for racing and criterium-style gravel events. A slacker angle (70–71°) provides stability at speed and on descents, better for long-distance riding and loaded touring. The{' '}
              <Link to="/best-gravel-bikes" className="text-primary hover:underline">Salsa Warbird (72.5°)</Link>{' '}
              is on the aggressive end;{' '}the Poseidon Redwood (70.5°) sits on the relaxed end. Most all-around gravel bikes split the difference at 71–72°.
            </p>
            <p>
              <strong className="text-foreground">Stack and reach</strong> describe your riding position. Stack (vertical distance from BB to head tube top) determines how upright you sit — higher stack means more comfort, lower back stress. Reach (horizontal distance) determines how stretched out you are — longer reach is more aero and aggressive. Endurance-oriented bikes like the Topstone have high stack and moderate reach. Race bikes like the Warbird and Áspero have lower stack and longer reach.
            </p>
            <p>
              <strong className="text-foreground">Chainstay length</strong> affects the bike's character. Longer stays (430mm+) provide a planted, stable feel — ideal for loaded riding and rough descents. Shorter stays (410–420mm) make the bike snappier and more responsive for racing. The{' '}
              <Link to="/best-gravel-bikes" className="text-primary hover:underline">Giant Revolt's flip-chip</Link>{' '}
              lets you switch between 425mm and 435mm — a genuinely useful feature for riders who race and tour on the same bike.
            </p>
          </div>
        </section>

        {/* Fit */}
        <section id="finding-the-right-fit">
          <h2 className="text-2xl font-bold mb-4">Finding the Right Fit</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A perfectly specced bike that doesn't fit you will always be less enjoyable than a basic bike that fits perfectly. Gravel riding puts unique demands on fit — you need comfort across multiple hand positions over many hours, with enough control for technical sections.
            </p>
            <p>
              <strong className="text-foreground">Start with frame size</strong>, but don't trust height-only charts. Your inseam, arm length, torso length, and flexibility all factor in. If you're between sizes: size down for a racier feel (you can always add a longer stem) or size up for a more relaxed position (you can shorten the stem). For gravel, we generally recommend sizing up if comfort is your priority and sizing down if speed is.
            </p>
            <p>
              <strong className="text-foreground">Saddle height</strong> is the most critical adjustment. Place your heel on the pedal at the bottom of the stroke — your leg should be fully extended. When riding with the ball of your foot on the pedal (or clipped in), you should have a 25–30° knee bend. Too high causes hip rocking and knee pain. Too low wastes power and stresses your knees over time.
            </p>
            <p>
              <strong className="text-foreground">Reach adjustment</strong> determines upper-body comfort. You should reach the hoods with a slight elbow bend. If your elbows lock out, the reach is too long — swap to a shorter stem (increments of 10mm make a noticeable difference). Many gravel riders also prefer flared handlebars (16° or more of flare) for better leverage and control on descents.
            </p>
            <p>
              <strong className="text-foreground">Get a professional bike fit</strong> if you're spending over $2,000. A $200–$300 fit session optimizes your position for power, comfort, and injury prevention. Many shops include a fit with bike purchase. It's the single best investment you can make in your riding experience — more impactful than any component upgrade.
            </p>
          </div>
        </section>

        {/* Budget */}
        <section id="budget-breakdown">
          <h2 className="text-2xl font-bold mb-4">Budget Breakdown</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Here's an honest breakdown of what each price tier gets you. We've excluded the "just spend more" advice that most guides fall back on — every tier has bikes worth buying.
            </p>
            <div className="grid gap-4 mt-4">
              <div className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🟢</span>
                  <h3 className="font-bold text-foreground">Under $1,500 — Entry Level</h3>
                </div>
                <p className="text-sm leading-relaxed">Aluminum or steel frame, mechanical disc brakes, Shimano Claris/Sora/Deore drivetrain. These bikes get you riding gravel with reliable basics. You'll feel their weight on climbs and want to upgrade the contact points (saddle, pedals, grips) early. Our pick: <Link to="/best-gravel-bikes" className="text-primary hover:underline font-medium">Poseidon Redwood ($1,099)</Link> — steel frame, Shimano Deore, massive tire clearance.</p>
              </div>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">⭐</span>
                  <h3 className="font-bold text-foreground">$1,500–$3,000 — The Sweet Spot</h3>
                </div>
                <p className="text-sm leading-relaxed">Aluminum or entry carbon frame, hydraulic disc brakes, Shimano GRX 600/800 or SRAM Rival. This is where price-to-performance peaks — you get everything you need and nothing you don't. Our picks: <Link to="/best-gravel-bikes" className="text-primary hover:underline font-medium">Trek Checkpoint ALR 5 ($2,650)</Link>, <Link to="/best-gravel-bikes" className="text-primary hover:underline font-medium">Giant Revolt Advanced 1 ($3,000)</Link>.</p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🔵</span>
                  <h3 className="font-bold text-foreground">$3,000–$5,000 — Performance</h3>
                </div>
                <p className="text-sm leading-relaxed">Carbon frame, premium groupset (GRX 810, SRAM Rival/Force XPLR AXS), quality wheels. Meaningful weight savings (1–2 lbs) and noticeably better ride quality vs. the tier below. Our picks: <Link to="/best-gravel-bikes" className="text-primary hover:underline font-medium">Canyon Grail CF SL 7 ($3,199)</Link>, <Link to="/best-gravel-bikes" className="text-primary hover:underline font-medium">Cannondale Topstone Carbon 3 ($3,575)</Link>, <Link to="/best-gravel-bikes" className="text-primary hover:underline font-medium">Specialized Diverge Comp ($4,500)</Link>.</p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🟣</span>
                  <h3 className="font-bold text-foreground">$5,000+ — Premium / Race</h3>
                </div>
                <p className="text-sm leading-relaxed">Top-tier carbon, electronic shifting, carbon wheels, integrated cockpit. Diminishing returns on performance, but genuinely faster and lighter. Worth it for competitive racers, marginal-gains chasers, and riders who know they want the best. Our pick: <Link to="/best-gravel-bikes" className="text-primary hover:underline font-medium">Cervélo Áspero 5 ($6,500)</Link>.</p>
              </div>
            </div>
            <div className="rounded-lg bg-primary/5 border border-primary/15 p-4 mt-4">
              <p className="text-sm">
                <strong className="text-primary">Our budget advice:</strong> Spend 70% of your total budget on the bike and reserve 30% for gear upgrades. Better tires, a proper saddle, and quality pedals will transform a mid-range bike into your dream machine. Start with our <Link to="/gear-guide" className="text-primary hover:underline font-medium">gear guide</Link> to prioritize upgrades that make the biggest difference.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
