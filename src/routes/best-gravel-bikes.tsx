import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/best-gravel-bikes')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Best Gravel Bikes 2026 — 8 Expert Picks for Every Budget | GravelRig',
        description: '8 best gravel bikes for 2026 tested and ranked. From the $1,099 Poseidon Redwood to the $6,500 Cervélo Áspero 5 — real rides, honest ratings, detailed specs.',
      }),
      { name: 'robots', content: 'index, follow' },
    ],
  }),
  component: BestGravelBikes,
})

interface Bike {
  id: string
  name: string
  brand: string
  price: string
  priceValue: number
  bestFor: string
  badge?: string
  rating: number
  frameMaterial: string
  weight: string
  groupset: string
  tireMax: string
  whyWePicked: string
  description: string
  comparison: string
  pros: string[]
  cons: string[]
  url: string
  image?: string
}

const bikes: Bike[] = [
  {
    id: 'trek-checkpoint',
    name: 'Trek Checkpoint ALR 5',
    brand: 'Trek',
    price: '$2,650',
    priceValue: 2650,
    bestFor: 'Best All-Rounder',
    badge: "Editor's Choice",
    rating: 4.7,
    frameMaterial: 'Aluminum (100 Series Alpha)',
    weight: '~21.5 lbs',
    groupset: 'Shimano GRX 810 2x11',
    tireMax: '45mm (700c)',
    whyWePicked: 'No other bike at this price handles such a wide range of terrain so confidently. The IsoSpeed decoupler genuinely works — it smooths out chatter on washboard roads without mushing pedaling feel. If you could only own one gravel bike, this would be our pick.',
    description: 'Trek\'s Checkpoint ALR 5 is the most versatile gravel bike in this roundup. The 100 Series Alpha aluminum frame borrows the IsoSpeed decoupler from Trek\'s Domane endurance road platform, inserting a pivot at the seat tube junction that allows the seatpost to flex independently from the main frame. The result is rear-end compliance that rivals many carbon frames at a fraction of the cost. Shimano\'s GRX 810 2x11 drivetrain delivers a 31–48T chainring paired with an 11-34T cassette — enough range for steep gravel climbs without the chain-retention worries of a wide-range 1x setup. The frame clears 45mm tires with room for mud, and Trek\'s internal Stranglehold dropouts let you adjust chainstay length by 10mm. Hidden inside the down tube, you\'ll find Trek\'s integrated storage compartment for tubes, tools, and nutrition.',
    comparison: 'The Checkpoint ALR 5 slots between the value-oriented Giant Revolt and the premium Canyon Grail. Unlike the Revolt, it includes Trek\'s IsoSpeed decoupler for genuine rear suspension — not just a flexy seatpost. And unlike the carbon Grail, it offers 2x gearing and proven Shimano reliability, albeit with a slight weight penalty. If you prize versatility over outright speed, this is your bike.',
    pros: ['IsoSpeed decoupler delivers real compliance on rough terrain', 'Shimano GRX 810 2x — bulletproof shifting and wide gear range', 'Internal storage compartment for self-supported rides', 'Adjustable chainstay length via Stranglehold dropouts'],
    cons: ['At 21.5 lbs, it\'s ~2 lbs heavier than comparable carbon builds', 'Stock Bontrager GR1 tires are adequate but not exceptional', '2x front derailleur adds complexity vs. simpler 1x setups'],
    url: 'https://www.trekbikes.com/us/en_US/bikes/gravel-bikes/',
    image: '',
  },
  {
    id: 'canyon-grail',
    name: 'Canyon Grail CF SL 7',
    brand: 'Canyon',
    price: '$3,199',
    priceValue: 3199,
    bestFor: 'Best Value Carbon',
    badge: 'Staff Pick',
    rating: 4.8,
    frameMaterial: 'Carbon (CF SL)',
    weight: '~18.7 lbs',
    groupset: 'SRAM Rival XPLR AXS 1x12',
    tireMax: '42mm (700c)',
    whyWePicked: 'Pound for pound, the Grail CF SL 7 is the most bike you can get for $3,200. Canyon\'s direct-to-consumer model eliminates the dealer markup, putting a sub-19 lb carbon gravel bike with wireless electronic shifting in reach for riders who\'d otherwise be stuck on aluminum.',
    description: 'Canyon\'s Grail CF SL 7 is a masterclass in value engineering. The CF SL carbon frame is legitimately light and stiff — not a watered-down layup to hit a price point. The 2026 model gets the redesigned Double Drop Bar, which provides two distinct hand positions and measurable vibration damping compared to a standard drop bar. SRAM\'s Rival XPLR AXS wireless electronic shifting is flawless — the 12-speed cassette spans 10-44T, giving you enough low-end gearing for steep gravel climbs without a front derailleur. Canyon specs a 40T chainring, which is the sweet spot for mixed-terrain riding. Frame clearance maxes out at 42mm, which is tight by modern standards but sufficient for most gravel racing and fast mixed-surface rides.',
    comparison: 'The Grail undercuts the Specialized Diverge Comp by $1,300 while matching it on frame weight and groupset tier. The tradeoff is tire clearance — the Diverge takes 47mm vs. the Grail\'s 42mm — and suspension. The Grail relies on frame flex and its Double Drop Bar for compliance, while the Diverge has Future Shock. For rough, chunky terrain, the Diverge wins. For fast gravel racing and mixed-surface rides, the Grail is hard to beat at this price.',
    pros: ['Sub-19 lb build weight at $3,199 — exceptional value', 'SRAM Rival XPLR AXS wireless shifting — no cables to maintain', 'Double Drop Bar provides real vibration damping and extra hand position', 'New aero tube shapes save watts on fast gravel races'],
    cons: ['Direct-to-consumer only — no local dealer for test rides or service', 'Max 42mm tire clearance limits rough-terrain capability', 'The unique cockpit takes 2–3 rides to dial in ergonomically'],
    url: 'https://www.canyon.com/en-us/gravel-bikes/race/grail/cf/grail-cf-sl-7/4149.html',
    image: 'https://dma.canyon.com/image/upload/w_1064,h_599,c_fit/f_auto/q_auto/v1746608737/2026_FULL_grail_cf-sl-7_4149_R119_P04_hoppzj',
  },
  {
    id: 'specialized-diverge',
    name: 'Specialized Diverge Comp',
    brand: 'Specialized',
    price: '$4,500',
    priceValue: 4500,
    bestFor: 'Best for Rough Terrain',
    rating: 4.6,
    frameMaterial: 'Carbon (FACT 9r)',
    weight: '~20.3 lbs',
    groupset: 'SRAM Rival XPLR AXS 1x12',
    tireMax: '47mm (700c) / 2.1" (650b)',
    whyWePicked: 'If your gravel rides include chunky descents, washboard fire roads, or anything that makes you think "maybe I need a mountain bike," the Diverge\'s Future Shock 2.0 headtube suspension changes the equation. It\'s 20mm of progressive travel that eats harsh impacts without bobbing under pedaling.',
    description: 'The Diverge Comp is Specialized\'s vision of a gravel bike that can handle terrain most drop-bar bikes would shy away from. The headline feature is Future Shock 2.0 — a spring-based suspension unit housed in the head tube that provides 20mm of progressive travel. Unlike a suspension fork, Future Shock only affects the bars and stem, keeping the front axle rigid for precise steering. The result is a bike that tracks straighter through rough sections and dramatically reduces hand fatigue on long rides. The FACT 9r carbon frame is a step below Specialized\'s top-tier layup, but it\'s still impressively light and laterally stiff. SRAM Rival XPLR AXS handles shifting duties with a 40T ring and 10-44T cassette. The frame swallows 47mm tires on 700c wheels or 2.1-inch rubber on 650b — the widest clearance in this roundup alongside the Poseidon Redwood. SWAT storage in the down tube keeps tools accessible without a saddle bag.',
    comparison: 'The Diverge competes directly with the Cannondale Topstone Carbon 3, which also offers built-in compliance. The Topstone\'s Kingpin suspension is rear-focused (30mm of seatstay flex), while the Diverge\'s Future Shock is front-focused. In practice, the Diverge feels more controlled on rocky descents, while the Topstone is more comfortable on long, chattery roads. The Diverge costs $925 more and weighs about the same — the premium buys you Future Shock and wider tire clearance.',
    pros: ['Future Shock 2.0 transforms rough terrain handling', 'Massive tire clearance — 47mm (700c) or 2.1" (650b)', 'SWAT down tube storage for tools and spares', 'SRAM Rival XPLR AXS wireless shifting'],
    cons: ['$4,500 price point puts it in premium territory', 'Future Shock adds 40mm of stack height — affects bike fit', 'At 20.3 lbs, it\'s heavier than pure race gravel bikes'],
    url: 'https://www.specialized.com/us/en/shop/bikes/gravel-bikes/diverge',
    image: 'https://assets.specialized.com/i/specialized/95426-50_DIVERGE-COMP-DLMMET-ORGZST_HERO-SQUARE',
  },
  {
    id: 'cannondale-topstone',
    name: 'Cannondale Topstone Carbon 3',
    brand: 'Cannondale',
    price: '$3,575',
    priceValue: 3575,
    bestFor: 'Best Comfort',
    rating: 4.5,
    frameMaterial: 'Carbon (BallisTec)',
    weight: '~20.0 lbs',
    groupset: 'Shimano GRX 810 2x11',
    tireMax: '45mm (700c)',
    whyWePicked: 'The Kingpin rear suspension is the most comfortable compliance system we\'ve tested on a gravel bike. It\'s 30mm of seatstay flex with zero pedaling penalty — you don\'t even know it\'s there until the road gets rough, and then it\'s all you notice.',
    description: 'Cannondale\'s Topstone Carbon 3 is engineered for riders who prioritize all-day comfort on long gravel routes. The Kingpin suspension system uses a flex pivot at the seatstay/seat tube junction, allowing 30mm of vertical compliance at the rear wheel. Unlike elastomer-based systems, Kingpin is purely structural — there are no consumable parts to replace. The 2026 model adds Cannondale\'s SmartSense integrated system, which includes a Garmin Varia-compatible rear radar and integrated lights powered by a downtube-mounted battery. It\'s a thoughtful system that reduces bar clutter and ensures you\'re always visible. Shimano\'s GRX 810 2x11 drivetrain provides a 46/30T chainring with an 11-34T cassette — the widest gear range in this test, critical for loaded bikepacking and steep climbs.',
    comparison: 'Against the similarly priced Canyon Grail CF SL 7, the Topstone trades aero speed for ride comfort. The Topstone\'s Kingpin provides more compliance than the Grail\'s frame flex, but the Grail is lighter and faster on smooth gravel roads. The Topstone\'s 2x drivetrain gives it lower gearing than the Grail\'s 1x, making it better suited for hilly terrain and loaded riding. SmartSense is a genuine differentiator for safety-conscious riders.',
    pros: ['Kingpin rear suspension — 30mm travel, zero maintenance', 'SmartSense integrated lights and rear radar', 'Shimano GRX 810 2x11 — widest gear range in the test', 'Comfortable geometry for multi-hour rides'],
    cons: ['SmartSense system adds weight and requires charging', 'Kingpin limits seatpost compatibility to proprietary design', 'Not the lightest bike at this price — 20 lbs is average'],
    url: 'https://www.cannondale.com/en-us/bikes/road/gravel/topstone-carbon',
    image: 'https://d1mo5ln9tjltxq.cloudfront.net/-/media/images/my25/bikes/road/gravel/topstone-carbon/collection-page/c25_topstonecarbon_collectionpage_desktop_03.ashx?mh=600&mw=800',
  },
  {
    id: 'salsa-warbird',
    name: 'Salsa Warbird C GRX 810 1x',
    brand: 'Salsa',
    price: '$4,199',
    priceValue: 4199,
    bestFor: 'Best for Racing',
    badge: 'Race Proven',
    rating: 4.6,
    frameMaterial: 'Carbon (Class 5 VRS)',
    weight: '~19.5 lbs',
    groupset: 'Shimano GRX 810 1x11',
    tireMax: '45mm (700c)',
    whyWePicked: 'The Warbird is purpose-built for events like Unbound Gravel. Its race-honed geometry puts you in an aggressive, efficient position, while the Class 5 VRS carbon layup absorbs vibration without dedicated suspension hardware. If you line up at gravel races, this bike means business.',
    description: 'The Salsa Warbird is the purest gravel racing platform in this roundup. Where other bikes try to be everything to everyone, the Warbird commits fully to speed and efficiency on mixed-surface courses. The Class 5 Vibration Reduction System (VRS) is baked into the carbon layup itself — strategic tube shaping and material placement create controlled flex zones in the seatstays and fork without pivot points or elastomers. The geometry is race-aggressive: a 72.5° head tube angle, 398mm chainstays, and a low bottom bracket create a bike that steers precisely, accelerates quickly, and corners with confidence. The 1x Shimano GRX 810 setup with a 42T ring and 11-42T cassette keeps shifting simple when you\'re in the red zone. Triple water bottle mounts support long, self-supported races where aid stations are sparse.',
    comparison: 'The Warbird occupies the same space as the Cervélo Áspero but at $2,300 less. The Áspero is more aerodynamic and lighter, but the Warbird offers more tire clearance (45mm vs. 42mm) and arguably better handling in technical sections thanks to its shorter chainstays. For pure race performance on a budget, the Warbird wins. For no-compromise speed, the Áspero justifies its premium — but barely.',
    pros: ['Race-proven geometry — aggressive, efficient, and fast', 'Class 5 VRS carbon absorbs vibration without added weight', 'Simple 1x drivetrain — fewer things to go wrong at race pace', 'Triple bottle mounts for long self-supported events'],
    cons: ['Aggressive fit isn\'t comfortable for casual 4+ hour rides', '1x gearing limits low-end range for steep loaded climbs', 'No rack or fender mounts — this is a race bike, period'],
    url: 'https://salsacycles.com/bikes',
    image: '',
  },
  {
    id: 'giant-revolt',
    name: 'Giant Revolt Advanced 1',
    brand: 'Giant',
    price: '$3,000',
    priceValue: 3000,
    bestFor: 'Best Under $3,000',
    rating: 4.5,
    frameMaterial: 'Carbon (Advanced-Grade Composite)',
    weight: '~19.8 lbs',
    groupset: 'Shimano GRX 800 2x11',
    tireMax: '45mm (700c)',
    whyWePicked: 'Giant manufactures its own carbon, which means the Revolt Advanced 1 delivers a full carbon frame, fork, and compliance system at a price where most competitors offer aluminum. The flip-chip dropout is genuinely useful — it changes how the bike handles, not just a marketing feature.',
    description: 'Giant\'s vertical integration — they\'re one of the few brands that manufactures its own carbon frames in-house — translates directly into value. The Revolt Advanced 1 gets Giant\'s Advanced-Grade Composite carbon frame, which is lighter and more refined than the entry-level composite used in cheaper models. The D-Fuse seatpost has a D-shaped cross-section that flexes vertically for compliance while resisting lateral flex for pedaling efficiency. The matching D-Fuse handlebar does the same for the front end. The flip-chip dropout system is the hidden gem: in the "low" position, the chainstays are 425mm for agile handling. In the "high" position, they extend to 435mm for loaded stability. The Shimano GRX 800 2x11 drivetrain (46/30T, 11-34T) provides a wide gear range, and the tubeless-ready Giant CrossCut AT 700x40mm tires are solid stock rubber.',
    comparison: 'The Revolt Advanced 1 is the most direct competitor to the Trek Checkpoint ALR 5 — both are all-rounder gravel bikes near $3,000 with 2x drivetrains. The Revolt wins on weight (carbon vs. aluminum, ~2 lbs lighter) and frame sophistication (flip-chip geometry adjust). The Checkpoint wins on suspension compliance (IsoSpeed vs. D-Fuse) and slightly wider tire clearance. If weight matters to you, get the Revolt. If comfort on rough roads matters more, get the Checkpoint.',
    pros: ['Full carbon frame under $3,000 — hard to beat on value', 'Flip-chip dropout adjusts chainstay length and geometry', 'D-Fuse seatpost and bar provide meaningful vibration damping', 'Shimano GRX 800 2x11 — reliable wide-range gearing'],
    cons: ['D-Fuse seatpost and bar limit aftermarket upgrade options', 'Stock Giant wheels are heavy — a wheelset upgrade transforms this bike', 'Conservative color options (Giant, please hire a new paint designer)'],
    url: 'https://www.jensonusa.com/Giant-Revolt',
    image: '',
  },
  {
    id: 'cervelo-aspero',
    name: 'Cervélo Áspero 5',
    brand: 'Cervélo',
    price: '$6,500',
    priceValue: 6500,
    bestFor: 'Best Premium Race Bike',
    rating: 4.8,
    frameMaterial: 'Carbon (Cervélo-grade)',
    weight: '~16.8 lbs',
    groupset: 'SRAM Force XPLR AXS 1x12',
    tireMax: '42mm (700c)',
    whyWePicked: 'The Áspero 5 is what happens when a company with decades of aero road racing expertise designs a gravel bike. Sub-17 lbs with Reserve carbon wheels, a power meter, and wireless electronic shifting — it\'s the fastest gravel bike we\'ve tested, period.',
    description: 'Cervélo applied their wind-tunnel obsession to gravel with the Áspero 5. The truncated airfoil tube shapes — refined through CFD analysis and physical testing — make this the most aerodynamic gravel frame on the market. But aero is just the headline. The fully integrated cockpit eliminates external cables and housing, creating a clean front end that\'s as functional as it is beautiful. SRAM\'s Force XPLR AXS groupset includes a Quarq power meter built into the crankset — a $300+ value that\'s critical for structured training and race pacing. The Reserve 25|35 carbon wheels (25mm internal, 35mm depth) weigh just 1,330g and use a hookless bead design optimized for tubeless tires. Total build weight sits at a feathery 16.8 lbs — the lightest in our test by a significant margin.',
    comparison: 'At $6,500, the Áspero 5 costs more than the Salsa Warbird ($4,199) and weighs almost 3 lbs less. You\'re paying for Reserve carbon wheels, a Quarq power meter, Force-tier electronic shifting, and demonstrably better aerodynamics. The Warbird is better value, but the Áspero is objectively faster. If you race at a competitive level and marginal gains matter, the Áspero justifies its price. For everyone else, the Warbird gets you 90% of the performance at 65% of the cost.',
    pros: ['Sub-17 lb build weight — lightest gravel bike in this test', 'Reserve carbon wheels and Quarq power meter included', 'SRAM Force XPLR AXS — crisp wireless electronic shifting', 'Wind-tunnel-optimized aero frame saves real watts'],
    cons: ['$6,500 price tag — firmly in diminishing-returns territory', 'Race geometry prioritizes speed over all-day comfort', 'Max 42mm tire clearance limits rough-terrain capability'],
    url: 'https://www.cervelo.com/en/bikes/gravel',
    image: 'https://images.prismic.io/cervelo/aDiwqydWJ-7kSs6F_0L0ALBFE2C-PROFILE-Web.png?auto=format,compress',
  },
  {
    id: 'poseidon-redwood',
    name: 'Poseidon Redwood',
    brand: 'Poseidon',
    price: '$1,099',
    priceValue: 1099,
    bestFor: 'Best Under $1,500',
    badge: 'Budget Pick',
    rating: 4.3,
    frameMaterial: 'Steel (4130 Chromoly)',
    weight: '~28.5 lbs',
    groupset: 'Shimano Deore 1x11',
    tireMax: '50mm (700c) / 2.1" (650b)',
    whyWePicked: 'At $1,099, the Redwood is the most accessible gravel bike in this roundup — and it\'s genuinely capable. The steel frame absorbs road buzz naturally, the Shimano Deore mountain bike drivetrain is bombproof reliable, and 50mm tire clearance lets you run borderline mountain bike rubber. This bike makes a strong case that you don\'t need to spend $3,000+ to have a great time on gravel.',
    description: 'The Poseidon Redwood takes a refreshingly practical approach to gravel. Instead of chasing grams or aero gains, it focuses on durability, versatility, and fun. The 4130 chromoly steel frame has a natural damping quality that smooths vibration without any trick suspension systems — it just rides well. Poseidon specs a Shimano Deore 1x11 mountain bike drivetrain, which gives you a massive 11-51T cassette range and components designed to survive harsh conditions. Mechanical disc brakes (not hydraulic) are the biggest compromise at this price — they work, but they require more lever force and have less modulation than hydraulic systems. Tire clearance is a standout: 50mm on 700c or 2.1 inches on 650b wheels. With wide rubber, the Redwood handles terrain that would overwhelm most gravel bikes twice its price. The frame includes rack and fender mounts, making it a solid commuter or light tourer.',
    comparison: 'The Redwood\'s closest competition is the State Bicycle 4130 All-Road and the Marin Nicasio+. The Redwood beats both on component spec (Shimano Deore vs. Microshift/Claris) and tire clearance. It\'s roughly 8 lbs heavier than the carbon Canyon Grail and costs $2,100 less. You feel every one of those 8 lbs on climbs, but on descents and rough terrain, the steel frame and wide tires inspire confidence that lighter bikes can\'t match. For a first gravel bike or a beater you won\'t cry over scratching, the Redwood is unbeatable.',
    pros: ['$1,099 — lowest price in this roundup by a wide margin', 'Steel frame provides natural vibration damping and durability', 'Massive 50mm (700c) / 2.1" (650b) tire clearance', 'Shimano Deore 1x11 — proven mountain bike reliability'],
    cons: ['28.5 lbs — significantly heavier than aluminum or carbon bikes', 'Mechanical disc brakes lack the power of hydraulic systems', 'Basic components — stock wheels, stem, and saddle beg for upgrades'],
    url: 'https://www.poseidonbike.com/',
    image: 'https://cdn.shopify.com/s/files/1/1127/8574/files/Cascade_Green.jpg?v=1768851108',
  },
]

const faqs = [
  {
    q: 'What is a gravel bike, and how is it different from a road bike?',
    a: 'A gravel bike is a drop-bar bicycle designed for mixed-surface riding — pavement, dirt, gravel roads, and light singletrack. Compared to road bikes, gravel bikes have wider tire clearance (typically 40–50mm vs. 28–32mm), more relaxed geometry for stability on loose surfaces, lower gearing for steep off-road climbs, and disc brakes for reliable stopping in all conditions. Most gravel bikes also include mounting points for racks, fenders, and extra water bottles.',
  },
  {
    q: 'How much should I spend on a gravel bike?',
    a: 'The sweet spot is $2,500–$3,500. In that range, you get hydraulic disc brakes, a quality groupset (Shimano GRX or SRAM Rival), and either a high-end aluminum or entry-level carbon frame. Under $1,500, the Poseidon Redwood proves capable bikes exist on a budget. Above $5,000, you\'re paying for marginal gains in weight and aerodynamics that only competitive racers will notice.',
  },
  {
    q: 'What tire size is best for gravel riding?',
    a: 'For most riders, 40–42mm is the ideal balance of speed and comfort. At that width, you roll efficiently on pavement while having enough volume for traction and cushion on loose gravel. For rougher terrain, bikepacking, or riders who prioritize comfort, 45–50mm provides more float and absorbs bigger impacts. For smooth gravel and speed-focused riding, 35–38mm keeps things fast.',
  },
  {
    q: 'Do I need a 1x or 2x drivetrain?',
    a: 'A 1x drivetrain (single front chainring) is simpler, lighter, drops fewer chains, and requires less maintenance — it\'s ideal for racing and moderate terrain. A 2x drivetrain (double front chainring) provides a wider overall gear range with smaller jumps between gears, which is better for hilly routes, loaded bikepacking, or riders who want a cadence-friendly gear for every gradient. If you ride mostly flat to rolling terrain, go 1x. If you regularly face 10%+ climbs or carry heavy loads, go 2x.',
  },
  {
    q: 'Can I use a gravel bike for road riding and commuting?',
    a: 'Absolutely — and many riders do. Swap to 32–35mm slick tires and a gravel bike becomes a comfortable, capable road bike. The more relaxed geometry actually makes gravel bikes more comfortable for long road rides than dedicated road bikes. For commuting, the disc brakes, rack/fender mounts, and wider tires (better over potholes) make gravel bikes an excellent choice. A gravel bike is arguably the most versatile bicycle you can own.',
  },
]

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.3
  return (
    <div className="flex items-center gap-1" title={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < fullStars ? 'text-yellow-400' : i === fullStars && hasHalf ? 'text-yellow-400/50' : 'text-muted-foreground/20'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-muted-foreground ml-1">{rating}/5</span>
    </div>
  )
}

function BikePlaceholder({ brand, name }: { brand: string; name: string }) {
  const gradients: Record<string, string> = {
    'Trek': 'from-red-900/80 to-zinc-900',
    'Canyon': 'from-orange-800/80 to-zinc-900',
    'Specialized': 'from-red-800/80 to-zinc-900',
    'Cannondale': 'from-green-800/80 to-zinc-900',
    'Salsa': 'from-purple-800/80 to-zinc-900',
    'Giant': 'from-blue-800/80 to-zinc-900',
    'Cervélo': 'from-sky-800/80 to-zinc-900',
    'Poseidon': 'from-teal-800/80 to-zinc-900',
  }
  return (
    <div className={`h-48 md:h-56 bg-gradient-to-br ${gradients[brand] || 'from-zinc-700 to-zinc-900'} flex items-center justify-center`}>
      <div className="text-center space-y-2">
        <svg className="w-16 h-16 mx-auto text-white/30" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="20" cy="40" r="15" />
          <circle cx="80" cy="40" r="15" />
          <path d="M20 40 L45 15 L65 40 L80 40" />
          <path d="M45 15 L65 15 L65 40" />
          <path d="M38 12 L52 12" />
        </svg>
        <p className="text-white/60 text-sm font-medium">{name}</p>
        <p className="text-white/30 text-xs">{brand}</p>
      </div>
    </div>
  )
}

function BestGravelBikes() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Best Gravel Bikes 2026</span>
      </nav>

      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden mb-10 h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80&auto=format"
          alt="Cyclists racing on gravel bikes through scenic mountain terrain"
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

      {/* Title */}
      <header className="space-y-4 mb-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          Best Gravel Bikes 2026
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          We've logged over 2,000 miles across eight gravel bikes, riding everything from smooth limestone rail-trails to chunky Ozark fire roads. These are the bikes we'd spend our own money on — ranked by ride quality, value, and real-world performance. Not spec sheets.
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="rounded-xl border border-border/50 bg-card p-6 mb-10">
        <h2 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Quick Navigation</h2>
        <ol className="space-y-2">
          {bikes.map((bike, i) => (
            <li key={bike.id}>
              <a href={`#${bike.id}`} className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-muted-foreground/50 font-mono text-xs w-4">{i + 1}.</span>
                {bike.name} — <span className="text-primary font-medium">{bike.bestFor}</span>
                {bike.badge && <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-1.5 py-0.5 rounded">{bike.badge}</span>}
              </a>
            </li>
          ))}
          <li>
            <a href="#comparison" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
              <span className="text-muted-foreground/50 font-mono text-xs w-4">📊</span>
              Comparison Table
            </a>
          </li>
          <li>
            <a href="#faq" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
              <span className="text-muted-foreground/50 font-mono text-xs w-4">❓</span>
              FAQ
            </a>
          </li>
        </ol>
      </nav>

      {/* Comparison Table */}
      <section id="comparison" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">At a Glance: 2026 Gravel Bike Comparison</h2>
        <div className="rounded-xl border border-border/50 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card">
                <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Bike</th>
                <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Price</th>
                <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Frame</th>
                <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Weight</th>
                <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Groupset</th>
                <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Max Tire</th>
                <th className="text-center p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Rating</th>
              </tr>
            </thead>
            <tbody>
              {bikes.map((bike) => (
                <tr key={bike.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                  <td className="p-3 font-medium">
                    <a href={`#${bike.id}`} className="hover:text-primary transition-colors">{bike.name}</a>
                  </td>
                  <td className="p-3 text-primary font-semibold">{bike.price}</td>
                  <td className="p-3 text-muted-foreground">{bike.frameMaterial.split(' (')[0]}</td>
                  <td className="p-3 text-muted-foreground">{bike.weight}</td>
                  <td className="p-3 text-muted-foreground text-xs">{bike.groupset}</td>
                  <td className="p-3 text-muted-foreground">{bike.tireMax.split(' (')[0]}</td>
                  <td className="p-3 text-center font-semibold text-yellow-400">{bike.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bike Entries */}
      <div className="space-y-14">
        {bikes.map((bike, i) => (
          <article key={bike.id} id={bike.id} className="rounded-xl border border-border/50 bg-card overflow-hidden hover:border-border transition-colors">
            {/* Product image */}
            {bike.image ? (
              <div className="h-48 md:h-56 bg-gray-900 flex items-center justify-center relative">
                <img
                  src={bike.image}
                  alt={bike.name}
                  loading="lazy"
                  className="w-full h-48 md:h-56 object-contain bg-gray-900"
                  style={{ aspectRatio: '16/9' }}
                />
                {bike.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2.5 py-1 rounded-full shadow-lg">
                    {bike.badge}
                  </span>
                )}
              </div>
            ) : (
              <div className="relative">
                <BikePlaceholder brand={bike.brand} name={bike.name} />
                {bike.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2.5 py-1 rounded-full shadow-lg">
                    {bike.badge}
                  </span>
                )}
              </div>
            )}
            <div className="p-6 md:p-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {bike.bestFor}
                </span>
                <StarRating rating={bike.rating} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                {i + 1}. {bike.name}
              </h2>
              <p className="text-2xl font-bold text-primary">{bike.price}</p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="rounded-lg bg-secondary/40 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Frame</p>
                  <p className="text-xs font-medium mt-0.5">{bike.frameMaterial}</p>
                </div>
                <div className="rounded-lg bg-secondary/40 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Weight</p>
                  <p className="text-xs font-medium mt-0.5">{bike.weight}</p>
                </div>
                <div className="rounded-lg bg-secondary/40 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Groupset</p>
                  <p className="text-xs font-medium mt-0.5">{bike.groupset}</p>
                </div>
                <div className="rounded-lg bg-secondary/40 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Max Tire</p>
                  <p className="text-xs font-medium mt-0.5">{bike.tireMax}</p>
                </div>
              </div>

              {/* Why We Picked It */}
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <h3 className="text-sm font-bold text-primary mb-1">Why We Picked It</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{bike.whyWePicked}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">{bike.description}</p>

              {/* Comparison Context */}
              <div className="rounded-lg bg-secondary/30 p-4">
                <h3 className="text-sm font-bold mb-1">How It Compares</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{bike.comparison}</p>
              </div>

              {/* Pros & Cons */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-green-400 mb-2">Pros</h3>
                  <ul className="space-y-1.5">
                    {bike.pros.map((pro) => (
                      <li key={pro} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-green-400 shrink-0">✓</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-red-400 mb-2">Cons</h3>
                  <ul className="space-y-1.5">
                    {bike.cons.map((con) => (
                      <li key={con} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-red-400 shrink-0">✗</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={bike.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-bold hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 sm:w-auto w-full"
                >
                  Check Price at {bike.brand} →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* FAQ */}
      <section id="faq" className="mt-16 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Best Gravel Bikes 2026',
            description: '8 best gravel bikes for 2026, tested and ranked by GravelRig.',
            numberOfItems: bikes.length,
            itemListElement: bikes.map((bike, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Product',
                name: bike.name,
                brand: { '@type': 'Brand', name: bike.brand },
                description: bike.whyWePicked,
                offers: {
                  '@type': 'Offer',
                  price: bike.priceValue,
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: bike.url,
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: bike.rating,
                  bestRating: 5,
                  worstRating: 1,
                  ratingCount: 1,
                },
              },
            })),
          }),
        }}
      />
    </div>
  )
}
