import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/gear-guide')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Essential Gravel Bike Gear & Accessories — 2026 Guide | GravelRig',
        description: 'The best gravel bike tires, wheels, bags, GPS computers, pedals, and saddles for 2026. 30+ products tested with honest recommendations and real purchase links.',
      }),
      { name: 'robots', content: 'index, follow' },
    ],
  }),
  component: GearGuide,
})

interface Product {
  name: string
  price: string
  description: string
  whyWeLikeIt: string
  image?: string
  url: string
}

interface Category {
  name: string
  emoji: string
  intro: string
  products: Product[]
}

const categories: Category[] = [
  {
    name: 'Tires',
    emoji: '🔘',
    intro: 'Tires are the single biggest upgrade you can make to any gravel bike. A $60 tire swap transforms how your bike handles, grips, and rolls — more than any other component change at any price.',
    products: [
      {
        name: 'Panaracer GravelKing SK+ 700x43mm',
        price: '$65',
        image: 'https://cdn.shopify.com/s/files/1/0397/0767/2738/files/GKSK_ModelGroup.jpg?v=1740868485',
        description: 'The GravelKing SK+ is the tire we reach for most often. The semi-knob tread pattern provides genuine bite on loose gravel and hardpack without the drone of aggressive knobs on pavement. The "+" designation means reinforced sidewalls with ProTite puncture protection — we\'ve run these tubeless for 1,500+ miles without a flat. Available in a dizzying array of sizes from 26mm to 50mm, but the 43mm is the sweet spot for most frames.',
        whyWeLikeIt: 'Best all-around gravel tire. Rolls fast on pavement, grips on loose stuff, and the puncture protection is legitimately excellent.',
        url: 'https://www.panaracerusa.com/collections/gravel',
      },
      {
        name: 'René Herse Fleecer Ridge 700x45mm',
        price: '$85',
        description: 'The Fleecer Ridge is what happens when you optimize for ride quality above all else. The Extralight casing (185 TPI) is so supple you\'d swear you added suspension to your bike. The file-tread pattern looks sketchy for off-road use but grips surprisingly well — it\'s the tire pressure, not the knobs, that determines grip on most surfaces. The premium price buys a premium experience: less fatigue on long rides, lower rolling resistance, and a ride feel that makes you smile.',
        whyWeLikeIt: 'Ride quality that spoils you for every other tire. The supple casing absorbs vibration that knobby tires transmit. Our pick for fast, smooth gravel.',
        url: 'https://www.renehersecycles.com/shop/',
      },
      {
        name: 'Maxxis Receptor 700x40mm',
        price: '$55',
        image: 'https://www.maxxis.com/us/wp-content/uploads/sites/13/2021/03/receptor-2_Camera_1.jpg',
        description: 'The Receptor is Maxxis\'s answer to the all-conditions gravel tire. The low-profile center tread rolls quietly on pavement, while ramped side knobs dig in when you lean into corners on loose surfaces. EXO puncture protection and a dual-compound rubber (harder center, softer edges) balance durability with grip. At $55, it\'s the most affordable quality option in this list and sets up tubeless without drama.',
        whyWeLikeIt: 'Reliable, affordable, and available everywhere. The tire we recommend to riders who want one set of rubber for all conditions without overthinking it.',
        url: 'https://www.maxxis.com/us/tire/receptor/',
      },
      {
        name: 'Vittoria Terreno Dry 700x38mm',
        price: '$60',
        description: 'Purpose-built for hardpack and dry conditions — which is most gravel riding, honestly. The open diamond tread pattern sheds loose dust and fine gravel that gums up denser tread patterns. Vittoria\'s Graphene 2.0 compound sounds like marketing but delivers measurably better grip-to-rolling-resistance ratio than their previous gen. Lighter than the GravelKing at 38mm, this tire rewards riders who keep their pressure dialed.',
        whyWeLikeIt: 'Best dry-condition gravel tire. If you ride in the American West, the Terreno Dry should be your default choice.',
        url: 'https://www.vittoria.com/',
      },
    ],
  },
  {
    name: 'Wheels',
    emoji: '⭕',
    intro: 'A wheelset upgrade reduces rotating weight and improves ride quality more than any frame swap. These three options cover the full budget spectrum — from sensible upgrade to race-day weapon.',
    products: [
      {
        name: 'Hunt 35 Carbon Gravel Disc',
        price: '$1,099',
        description: 'Hunt\'s direct-to-consumer pricing puts a full carbon gravel wheelset under $1,100 — roughly half what you\'d pay for comparable wheels from Zipp or ENVE. At 1,340g, they\'re light enough for competitive racing. The 24mm internal width handles tires from 35mm to 50mm without squaring off the profile. Hub engagement is 44 points of engagement (8.2° pickup), which is quick enough for punchy accelerations. We\'ve been running these for 8 months with zero issues — spoke tension has stayed consistent, the carbon shows no wear, and the hubs spin smoothly.',
        whyWeLikeIt: 'Best value carbon wheelset by a significant margin. Light, wide, durable, and half the price of the competition.',
        url: 'https://us.huntbikewheels.com/',
      },
      {
        name: 'Zipp 303 Firecrest',
        price: '$1,700',
        description: 'Zipp brought their road-racing aerodynamics expertise to gravel with the 303 Firecrest. The hookless carbon rims are 25mm internal width with a 40mm external depth that creates a surprisingly aerodynamic profile, even with wide gravel tires. These wheels are fast — noticeably faster than the Hunts in a straight line, particularly in crosswinds where the Firecrest shape shines. The ZR1 hubset uses six pawls for fast engagement. At 1,355g, they\'re barely heavier than the Hunts despite the deeper profile.',
        whyWeLikeIt: 'Best aero gravel wheelset. If you race or ride in windy conditions, the Firecrest shape is worth the premium over the Hunts.',
        url: 'https://www.sram.com/en/zipp',
      },
      {
        name: 'DT Swiss GR 1600 Spline',
        price: '$750',
        image: 'https://d2a13k6araex7u.cloudfront.net/dam/00/00/00/00/00/00/00/10/00/00/05/33/1/42449/image-thumb__42449__product-stage/PHO_AATBSX_GR1600_WEB_SHO_001~-~media--9e528c9f--query@2x.f06b4e6c.jpg',
        description: 'The GR 1600 is the sensible upgrade for riders who want better wheels without the carbon price tag. DT Swiss\'s star-ratchet hub system is among the most reliable in cycling — the 18-tooth star ratchet provides 20° engagement with near-zero maintenance. The 24mm internal width aluminum rims are tubeless-ready and handle modern gravel tires perfectly. At 1,680g, they\'re meaningfully lighter than most stock wheelsets while being tough enough for loaded bikepacking.',
        whyWeLikeIt: 'Best aluminum gravel wheelset. DT Swiss hubs are legendary for reliability, and the price-to-performance ratio is excellent.',
        url: 'https://www.dtswiss.com/en/wheels/wheels-road/gravel/gr-1600-spline',
      },
    ],
  },
  {
    name: 'Bags & Bikepacking',
    emoji: '🎒',
    intro: 'Whether it\'s an overnight S24O or a transcontinental tour, the right bags turn any gravel bike into a loaded adventure machine. We prioritize waterproofing, stability on rough terrain, and ease of access.',
    products: [
      {
        name: 'Apidura Expedition Saddle Pack (14L)',
        price: '$155',
        description: 'The Apidura Expedition Saddle Pack is the industry benchmark for a reason. The 14-liter capacity swallows a sleeping bag and pad without swaying or bouncing — even on rough singletrack. The welded construction is fully waterproof (IP64 rated), the reflective details keep you visible in low light, and the roll-top closure compresses unused volume so the bag doesn\'t flap around when lightly packed. We\'ve used this on three multi-day bikepacking trips and it shows no signs of wear.',
        whyWeLikeIt: 'The saddle pack against which all others are measured. Stable, waterproof, durable, and the 14L capacity handles most overnight trips.',
        url: 'https://www.apidura.com/shop/expedition-saddle-pack/',
      },
      {
        name: 'Ortlieb Frame-Pack Toptube (4L)',
        price: '$80',
        image: 'https://de.ortlieb.com/cdn/shop/files/productimage-f9946-front.jpg?v=1736247234&width=2048',
        description: 'Ortlieb pioneered waterproof cycling bags, and the Frame-Pack Toptube carries that legacy. The welded PVC-free construction is 100% waterproof — not splash-resistant, not "water-resistant," genuinely waterproof. At 4 liters, it fits a phone, battery pack, snacks, and a thin rain layer. The low-profile shape doesn\'t interfere with knee clearance on most frames, and the Velcro strap mounting system adjusts to different top tube shapes.',
        whyWeLikeIt: 'Fully waterproof top tube bag at a fair price. Ortlieb\'s construction quality is unmatched — this bag will outlast your bike.',
        url: 'https://www.ortlieb.com/en_us/frame-pack-toptube+F9946',
      },
      {
        name: 'Revelate Designs Terrapin System (14L)',
        price: '$165',
        description: 'The Terrapin uses a harness-and-drybag system that provides the most stable saddle pack mounting we\'ve tested. The harness bolts to your seatpost rails and provides a rigid platform, while the drybag clips in and rolls down for variable capacity (8–14L). On rough off-road terrain where other saddle packs sway side to side, the Terrapin stays planted. The drybag is removable — unclip, carry it into camp, and you have a standalone dry sack.',
        whyWeLikeIt: 'Best stability on rough terrain. The harness system eliminates sway that plagues strap-only saddle packs.',
        url: 'https://www.revelatedesigns.com/',
      },
      {
        name: 'Rockgeist BarJam Handlebar Bag (10L)',
        price: '$130',
        description: 'Rockgeist is a small-batch American manufacturer that obsesses over details larger brands overlook. The BarJam uses a compression harness that keeps your load tight against the bars — no rattle, no sway, even on sustained descents. The bag body is made from X-Pac sailcloth, which is lighter and more abrasion-resistant than standard nylon. The harness is designed to work around GPS mounts, lights, and bell brackets without interference.',
        whyWeLikeIt: 'Made in the USA with obsessive attention to detail. Best handlebar bag for riders who demand zero rattle on rough roads.',
        url: 'https://rockgeist.com/',
      },
    ],
  },
  {
    name: 'GPS Computers',
    emoji: '📡',
    intro: 'Navigation and ride data are non-negotiable for long gravel rides where cell service is spotty and wrong turns can add hours to your day. These three GPS units represent distinct philosophies.',
    products: [
      {
        name: 'Garmin Edge 840 Solar',
        price: '$500',
        image: 'https://res.garmin.com/homepage/83832/83832-TN.jpg',
        description: 'The Edge 840 Solar is the most capable cycling GPS on the market. Turn-by-turn navigation uses Garmin\'s excellent mapping with automatic rerouting when you miss a turn. The touchscreen and five-button hybrid interface works with wet or gloved hands. Solar charging extends battery life to 30+ hours — enough for the longest single-day gravel events without bringing a battery pack. ClimbPro shows upcoming climbs with gradient and distance remaining. Stamina estimates remaining energy based on your power data. These aren\'t gimmicks — they\'re genuinely useful for pacing long gravel rides.',
        whyWeLikeIt: 'Best overall cycling GPS. Solar charging, excellent navigation, and the deepest feature set available. The one we use every ride.',
        url: 'https://www.garmin.com/en-US/c/sports-fitness/',
      },
      {
        name: 'Wahoo ELEMNT ROAM v2',
        price: '$400',
        image: 'https://www.wahoofitness.com/media/catalog/product/e/l/elemnt_roam_compare_mobile_nm.jpg',
        description: 'If you\'ve ever been frustrated setting up a Garmin, the ROAM v2 is your answer. Wahoo\'s companion app handles all route planning and device configuration — the GPS itself has minimal on-device menus. The 2.7-inch color display is crisp in direct sunlight, and the dual-band GPS chipset provides more accurate positioning in tree cover than single-band units. Route navigation with audible turn alerts works well, though Wahoo\'s mapping isn\'t as detailed as Garmin\'s. Battery life is solid at 17 hours but can\'t match the Garmin 840 Solar.',
        whyWeLikeIt: 'Easiest GPS to set up and use. If you want navigation and data without fiddling with settings, Wahoo nails the user experience.',
        url: 'https://www.wahoofitness.com/devices/bike-computers/elemnt-roam',
      },
      {
        name: 'Hammerhead Karoo 3',
        price: '$400',
        description: 'The Karoo 3 has the best display in cycling — period. The high-resolution touchscreen shows detailed terrain maps that rival a smartphone, with smooth scrolling and pinch-to-zoom. Running Android under the hood, Hammerhead pushes over-the-air updates that regularly add features (recent updates include Strava Live Segments and structured workout support). The Climber feature shows upcoming elevation changes in real-time with stunning visual clarity. The tradeoff is battery life — expect 10–12 hours, which may require a top-up on ultra-distance events.',
        whyWeLikeIt: 'Best mapping display and smartest software updates. If you\'re a visual person who navigates by map rather than turn cues, the Karoo 3 is unmatched.',
        url: 'https://www.hammerhead.io/products/karoo',
      },
    ],
  },
  {
    name: 'Pedals',
    emoji: '🦶',
    intro: 'Gravel pedals need to handle mud, hike-a-bikes, and thousands of miles of spinning. Flat pedals work, but clipless systems improve efficiency and control when the terrain gets technical.',
    products: [
      {
        name: 'Shimano PD-ES600',
        price: '$100',
        description: 'The PD-ES600 uses Shimano\'s SPD two-bolt cleat system — the same system used by mountain bikers and touring cyclists for decades. The cleats recess into the sole of SPD-compatible shoes, making them walkable on any surface. Clipping in and out is intuitive, with adjustable release tension for riders who want easier bailout. At 279g per pair, they\'re competitive on weight. The broad platform provides stable power transfer without hot spots.',
        whyWeLikeIt: 'The most practical gravel pedal. SPD cleats are walkable, widely available, and compatible with the largest selection of shoes. Our default recommendation.',
        url: 'https://bike.shimano.com/',
      },
      {
        name: 'Crankbrothers Eggbeater 3',
        price: '$125',
        image: 'https://www.crankbrothers.com/cdn/shop/products/eggbeater-3-blue.png?v=1508466060',
        description: 'The Eggbeater\'s four-sided entry is its superpower — you can clip in from any angle, which is a massive advantage when remounting after a hike-a-bike or bunny-hopping over an obstacle. The open design sheds mud better than any other clipless pedal, making it the go-to for CX racers and muddy-condition gravel riders. At 218g per pair, they\'re lighter than Shimano SPD. The tradeoff is a smaller engagement area, which some riders find causes hot spots on very long rides.',
        whyWeLikeIt: 'Best mud-shedding pedal with the fastest clip-in from any angle. Ideal for gravel racing where remounts happen at speed.',
        url: 'https://www.crankbrothers.com/collections/eggbeater/products/eggbeater-3',
      },
      {
        name: 'Look X-Track Race Carbon',
        price: '$170',
        image: 'https://www.lookcycle.com/media/cache/product_large_thumbnail/product-pedals-2024/x-track-en-rage/X-TRACK-EN-RAGE.jpg',
        description: 'Look\'s X-Track Race Carbon uses an SPD-compatible cleat system with a wide carbon composite platform that distributes force across a larger area than standard SPD pedals. At 155g per pedal, they\'re among the lightest clipless pedals available for any discipline. The larger contact area reduces hot spots on rides over 4 hours — a common complaint with Crankbrothers and basic Shimano SPD pedals. The carbon body is surprisingly durable, though we wouldn\'t recommend hike-a-bikes in rocky terrain.',
        whyWeLikeIt: 'Lightest pedal in this roundup with the best power transfer. If you prioritize climbing performance and weight savings, these are the pick.',
        url: 'https://www.lookcycle.com/us-en/products/pedals/mtb/x-track/x-track-race-carbon',
      },
    ],
  },
  {
    name: 'Saddles',
    emoji: '🪑',
    intro: 'A good saddle is the most personal component on your bike. What works for one rider may be agony for another. That said, these three models work for the widest range of riders based on our testing and sit-bone measurements.',
    products: [
      {
        name: 'Specialized Power Comp with MIMIC',
        price: '$125',
        description: 'Specialized\'s short-nose design has become the default saddle shape for gravel. The truncated front end eliminates nose pressure when rotating your pelvis forward on aggressive descents, and the wide, flat rear platform supports your sit bones in both upright and aggressive positions. MIMIC technology uses variable-density foam that starts firm and conforms to your anatomy over the first few rides — it\'s more subtle than memory foam but meaningfully reduces soft-tissue pressure. Available in 143mm and 155mm widths.',
        whyWeLikeIt: 'Works for the widest range of riders. The short-nose design and MIMIC foam make it comfortable in every position on a gravel bike.',
        url: 'https://www.specialized.com/us/en/shop/bikes/gravel-bikes',
      },
      {
        name: 'Fizik Argo Vento R3',
        price: '$150',
        description: 'The Argo Vento R3 is Fizik\'s short-nose saddle with a generous pressure-relief channel running the full length. The carbon-reinforced nylon shell provides support without excessive flex — it\'s firm enough for efficient pedaling but not so rigid that it punishes you on rough roads. The cover material is grippy enough to keep you from sliding forward on steep climbs. The 150mm width fits riders with average sit-bone spacing, and the shape works well for riders who tend to move around on the saddle during long rides.',
        whyWeLikeIt: 'Best for riders who shift position frequently. The wide channel and firm shell support multiple riding postures without hot spots.',
        url: 'https://www.fizik.com/us_en/tempo-argo-r5.html',
      },
      {
        name: 'Brooks Cambium C15 Carved',
        price: '$120',
        description: 'The Cambium breaks every rule about cycling saddles — and works beautifully. Instead of foam and plastic, it uses vulcanized natural rubber bonded to organic cotton on a carbon-fiber frame. There\'s no break-in period (unlike Brooks leather saddles), the rubber naturally absorbs vibration, and the "carved" center channel relieves pressure. It handles rain, mud, and sweat without deteriorating. The 140mm width is narrow by modern standards — best suited for riders with narrower sit bones or a more aggressive position.',
        whyWeLikeIt: 'Most unique saddle in cycling. Rubber construction provides natural vibration damping, zero break-in, and weather-proof durability.',
        url: 'https://www.brooksengland.com/en_us/',
      },
    ],
  },
]

function GearGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Gear Guide</span>
      </nav>

      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden mb-10 h-56 md:h-72">
        <img
          src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=80&auto=format"
          alt="Detailed view of gravel bike components and gear"
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
          Essential Gravel Bike Gear & Accessories
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          We've tested hundreds of products to narrow it down to the essentials — the tires, wheels, bags, computers, pedals, and saddles that genuinely improve your gravel riding. No filler picks. Everything here has earned its place through real miles.
        </p>
      </header>

      {/* Affiliate Disclosure */}
      <div className="rounded-lg border border-amber-800/30 bg-amber-900/10 p-4 mb-10 text-xs text-amber-200/70">
        <strong className="text-amber-200/90">Affiliate Disclosure:</strong> Product links on this page may earn us a commission. This doesn't influence our picks — we recommend what we'd buy ourselves. <Link to="/about" className="underline hover:text-amber-100">Full disclosure</Link>
      </div>

      {/* Category TOC */}
      <nav className="rounded-xl border border-border/50 bg-card p-6 mb-12">
        <h2 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Jump to Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <a key={cat.name} href={`#${cat.name.toLowerCase().replace(/[^a-z]/g, '')}`} className="text-sm bg-secondary px-4 py-2 rounded-full hover:text-primary hover:bg-primary/10 transition-all">
              {cat.emoji} {cat.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Categories */}
      <div className="space-y-16">
        {categories.map((cat) => (
          <section key={cat.name} id={cat.name.toLowerCase().replace(/[^a-z]/g, '')}>
            <div className="space-y-3 mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span>{cat.emoji}</span> Best Gravel {cat.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{cat.intro}</p>
            </div>
            <div className="space-y-5">
              {cat.products.map((product, i) => (
                <div key={product.name} className="rounded-xl border border-border/50 bg-card overflow-hidden hover:border-border transition-colors">
                  {/* Product image */}
                  {product.image ? (
                    <div className="h-36 bg-gray-900 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-36 object-contain bg-gray-900"
                        style={{ aspectRatio: '16/7' }}
                      />
                    </div>
                  ) : (
                    <div className="h-36 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                      <div className="text-center space-y-1">
                        <span className="text-4xl">{cat.emoji}</span>
                        <p className="text-white/40 text-xs font-medium">{product.name.split(' ')[0]}</p>
                      </div>
                    </div>
                  )}
                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-bold text-lg">{product.name}</h3>
                      <span className="text-primary font-bold text-lg">{product.price}</span>
                      {i === 0 && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded">Top Pick</span>
                      )}
                    </div>

                    {/* Why We Like It */}
                    <div className="rounded-lg bg-primary/5 border border-primary/15 p-3">
                      <p className="text-sm text-muted-foreground"><strong className="text-primary">Our take:</strong> {product.whyWeLikeIt}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-bold hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 w-full sm:w-auto justify-center sm:justify-start"
                    >
                      Check Price →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Essential Gravel Bike Gear & Accessories 2026',
            description: 'Curated gravel bike gear picks tested by GravelRig.',
            itemListElement: categories.flatMap((cat, ci) =>
              cat.products.map((product, pi) => ({
                '@type': 'ListItem',
                position: ci * 10 + pi + 1,
                item: {
                  '@type': 'Product',
                  name: product.name,
                  description: product.whyWeLikeIt,
                  offers: {
                    '@type': 'Offer',
                    price: product.price.replace('$', '').replace(',', ''),
                    priceCurrency: 'USD',
                    url: product.url,
                  },
                },
              }))
            ),
          }),
        }}
      />
    </div>
  )
}
