export type ProductCategory =
  | 'home-humanoid'
  | 'developer-humanoid'
  | 'enterprise-humanoid'
  | 'announced-humanoid'
  | 'robot-vacuum'
  | 'robot-lawn-mower'
  | 'robot-pool-cleaner'
  | 'robot-window-cleaner'
  | 'companion-robot'

export type ProductStatus = 'available' | 'preorder' | 'enterprise-only' | 'developer-only' | 'not-for-sale' | 'unverified'

export type AffiliateLink = {
  merchant: 'amazon' | 'brand' | 'dealer' | 'walmart' | 'bestbuy' | 'other'
  label: string
  url: string
  network?: 'Amazon Associates' | 'CJ' | 'Impact' | 'Awin' | 'FlexOffers' | 'ShareASale' | 'In-house' | 'Direct' | 'None'
  rel: 'sponsored nofollow'
  lastChecked: string
}

export type Product = {
  slug: string
  brand: string
  model: string
  category: ProductCategory
  status: ProductStatus
  marketStatus: string
  summary: string
  officialUrl: string
  video?: {
    youtubeId: string
    title: string
    source: string
  }
  price: {
    msrp?: number
    current?: number
    subscription?: string
    deposit?: number
    currency: 'USD'
    lastChecked: string
  }
  image: string
  rating?: {
    overall: number
    homeReadiness?: number
    availability?: number
    manipulation?: number
    autonomy?: number
    privacy?: number
    value?: number
  }
  keySpecs: Record<string, string | number | boolean>
  smartHome: {
    alexa?: boolean
    googleHome?: boolean
    appleHome?: boolean
    matter?: boolean
    homeAssistant?: boolean
  }
  warranty?: string
  returnNotes?: string
  sourceNotes: string[]
  pros: string[]
  cons: string[]
  bestFor: string[]
  avoidIf: string[]
  affiliateLinks: AffiliateLink[]
  updatedAt: string
}

export const products: Product[] = [
  {
    slug: '1x-neo',
    brand: '1X',
    model: 'NEO',
    category: 'home-humanoid',
    status: 'preorder',
    marketStatus: 'Home-focused preorder/order page live in the US',
    summary:
      'The clearest home-humanoid product to track right now. 1X positions NEO as a home robot for chores and personalized assistance, with US deliveries stated for 2026.',
    officialUrl: 'https://www.1x.tech/order',
    video: { youtubeId: 'LTYMWadOW7c', title: 'NEO The Home Robot | Order Today', source: '1X' },
    price: { msrp: 20000, current: 20000, subscription: '$499/mo', deposit: 200, currency: 'USD', lastChecked: '2026-06-28' },
    image: 'https://img.youtube.com/vi/LTYMWadOW7c/maxresdefault.jpg',
    rating: { overall: 8.3, homeReadiness: 8.8, availability: 8.5, manipulation: 7.7, autonomy: 7.2, privacy: 5.9, value: 6.8 },
    keySpecs: {
      'Market status': 'Preorder/order page live',
      Price: '$20,000 ownership or $499/mo subscription',
      Deposit: '$200 refundable deposit shown on 1X order page',
      'US delivery': 'US deliveries start 2026 per 1X',
      Height: '5 ft 6 in',
      Weight: '66 lb',
      Runtime: '4 hours listed by 1X',
      'Remote help': 'Scheduled Expert Mode described by 1X'
    },
    smartHome: { alexa: false, googleHome: false, appleHome: false, matter: false, homeAssistant: false },
    warranty: '1X lists 3-year warranty for Early Access ownership on its order page.',
    returnNotes: '1X lists a fully refundable $200 deposit. Full cancellation and subscription terms should be checked at checkout.',
    sourceNotes: [
      'Official 1X order page lists $499/mo subscription, $20,000 ownership, $200 refundable deposit, and US deliveries starting 2026.',
      'Official copy describes basic autonomy at arrival and growth over time, plus scheduled Expert Mode for complex tasks.'
    ],
    pros: ['Most clearly home-positioned humanoid', 'Live order/preorder path', 'Subscription option lowers upfront barrier', 'Official video and order page provide strong source material'],
    cons: ['Still early access', 'Real-world household capability needs verification', 'Remote supervision raises privacy questions', 'Very high cost compared with mature home robots'],
    bestFor: ['Early adopters', 'High-income home automation buyers', 'Readers tracking the first real home humanoid wave'],
    avoidIf: ['You need a proven appliance today', 'You are uncomfortable with remote supervision or home cameras', 'You need normal retail returns'],
    affiliateLinks: [{ merchant: 'brand', label: 'Check 1X NEO order status', url: 'https://www.1x.tech/order', network: 'Direct', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'unitree-g1',
    brand: 'Unitree',
    model: 'G1',
    category: 'developer-humanoid',
    status: 'available',
    marketStatus: 'Buyable humanoid platform, better described as developer/research than home helper',
    summary:
      'A buyable humanoid platform with official pricing from Unitree, but it should be framed as an AI/developer robot rather than a finished home housekeeper.',
    officialUrl: 'https://www.unitree.com/g1',
    video: { youtubeId: 'GzX1qOIO1bE', title: 'Unitree G1 Humanoid Agent | AI Avatar | Price from $16K', source: 'Unitree Robotics' },
    price: { msrp: 13500, current: 13500, currency: 'USD', lastChecked: '2026-06-28' },
    image: 'https://img.youtube.com/vi/GzX1qOIO1bE/maxresdefault.jpg',
    rating: { overall: 7.8, homeReadiness: 5.8, availability: 8.8, manipulation: 7.5, autonomy: 6.8, privacy: 6.4, value: 7.4 },
    keySpecs: {
      'Market status': 'Available/buyable platform',
      'Starting price': '$13.5K on official Unitree G1 page, tax and shipping excluded',
      Weight: 'About 35 kg',
      Sensors: 'Depth camera + 3D LiDAR listed by Unitree',
      Connectivity: 'WiFi 6 / Bluetooth 5.2 listed by Unitree',
      Battery: 'About 2 hours listed by Unitree',
      'Best fit': 'Developers, labs, robotics teams'
    },
    smartHome: { alexa: false, googleHome: false, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'Unitree lists different warranty periods by G1 configuration. Verify exact terms before buying.',
    returnNotes: 'Developer robot purchases are not normal consumer appliance purchases. Verify dealer, import, support, and return terms.',
    sourceNotes: [
      'Official Unitree page lists G1 price from US $13.5K, tax and shipping excluded.',
      'Unitree positions G1 as a humanoid agent AI avatar with OTA upgrades and developer capabilities.'
    ],
    pros: ['Actually buyable', 'Lower entry price than many humanoids', 'Strong official video material', 'Useful comparison against 1X NEO'],
    cons: ['Not a finished home assistant', 'Requires robotics/developer expectations', 'Support and import details need careful checking'],
    bestFor: ['Developers', 'Robotics labs', 'Early adopters who understand platform limitations'],
    avoidIf: ['You want chores done out of the box', 'You need consumer-grade support', 'You expect home safety guarantees like an appliance'],
    affiliateLinks: [{ merchant: 'brand', label: 'View Unitree G1 official page', url: 'https://www.unitree.com/g1', network: 'Direct', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'unitree-r1',
    brand: 'Unitree',
    model: 'R1',
    category: 'developer-humanoid',
    status: 'available',
    marketStatus: 'Lower-cost humanoid appearing through Unitree shop/dealer channels',
    summary:
      'A lower-cost Unitree humanoid that belongs in an availability tracker because it may pull mainstream attention toward affordable humanoid ownership.',
    officialUrl: 'https://shop.unitree.com/collections/humanoid-robot',
    video: { youtubeId: 'v1Q4Su54iho', title: 'Unitree R1 Intelligent Companion Price from $5900', source: 'Unitree Robotics' },
    price: { msrp: 4900, current: 4900, currency: 'USD', lastChecked: '2026-06-28' },
    image: 'https://img.youtube.com/vi/v1Q4Su54iho/maxresdefault.jpg',
    rating: { overall: 7.2, homeReadiness: 5.5, availability: 8.0, manipulation: 6.2, autonomy: 6.2, privacy: 6.4, value: 8.1 },
    keySpecs: {
      'Market status': 'Listed via Unitree shop/dealers',
      Price: 'Unitree shop snippets show R1 around $4,900 to $5,900 depending listing/date',
      'Best fit': 'Affordable humanoid tracking, developer curiosity, early adopter research',
      Caution: 'Confirm exact model, configuration, shipping, and warranty before purchase'
    },
    smartHome: { alexa: false, googleHome: false, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'Verify warranty by seller and configuration.',
    returnNotes: 'Confirm dealer legitimacy, shipping, import fees, and return policy.',
    sourceNotes: [
      'Unitree shop search snippets show R1 listings and prices around $4,900 to $5,900.',
      'Official Unitree Robotics YouTube result describes R1 as an intelligent companion.'
    ],
    pros: ['Potentially lowest-cost full humanoid entry', 'Strong search curiosity', 'Useful for affordable humanoid content'],
    cons: ['Not proven as a home helper', 'Listings and price claims need frequent re-checking', 'Likely developer/early-adopter product'],
    bestFor: ['Affordable humanoid watchers', 'Developers', 'Readers comparing sub-$10K humanoid options'],
    avoidIf: ['You need household chores today', 'You require US retail support', 'You do not want import/dealer complexity'],
    affiliateLinks: [{ merchant: 'brand', label: 'Check Unitree humanoid shop', url: 'https://shop.unitree.com/collections/humanoid-robot', network: 'Direct', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'figure-03',
    brand: 'Figure',
    model: 'Figure 03',
    category: 'announced-humanoid',
    status: 'not-for-sale',
    marketStatus: 'Home-positioned, but no normal consumer checkout found',
    summary:
      'Figure is strongly positioning Figure 03 for home help, but the current public path is more of an interest/contact funnel than a consumer order page.',
    officialUrl: 'https://www.figure.ai/',
    video: { youtubeId: 'Eu5mYMavctM', title: 'Introducing Figure 03', source: 'Figure' },
    price: { currency: 'USD', lastChecked: '2026-06-28' },
    image: 'https://img.youtube.com/vi/Eu5mYMavctM/maxresdefault.jpg',
    rating: { overall: 7.0, homeReadiness: 6.8, availability: 3.2, manipulation: 8.0, autonomy: 7.6, privacy: 6.0, value: 0 },
    keySpecs: {
      'Market status': 'Announced/home-positioned, not normal consumer checkout',
      'Official positioning': 'General-purpose humanoid robot for every day',
      AI: 'Helix AI described by Figure',
      'Purchase path': 'Contact/interest form, not a standard order page'
    },
    smartHome: { alexa: false, googleHome: false, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'No consumer warranty terms verified because consumer sale path was not verified.',
    returnNotes: 'Do not describe as buyable until an official order path exists.',
    sourceNotes: [
      'Figure homepage says Figure 03 is a general-purpose humanoid robot for every day.',
      'Figure site links to the official Figure 03 video and contact form, but no consumer checkout was found.'
    ],
    pros: ['Strong home positioning', 'High public interest', 'Important future competitor to 1X'],
    cons: ['No verified consumer checkout', 'Pricing not verified', 'Availability unclear'],
    bestFor: ['Readers tracking next likely home humanoids', 'Comparison pages', 'Newsletter signups'],
    avoidIf: ['You want something orderable today', 'You need verified consumer terms'],
    affiliateLinks: [{ merchant: 'brand', label: 'Visit Figure official site', url: 'https://www.figure.ai/', network: 'None', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'tesla-optimus',
    brand: 'Tesla',
    model: 'Optimus',
    category: 'announced-humanoid',
    status: 'not-for-sale',
    marketStatus: 'Not consumer available',
    summary:
      'A huge search-demand product, but not a consumer-buyable home robot. This page should catch interest and redirect users to actually orderable options.',
    officialUrl: 'https://www.tesla.com/AI',
    video: { youtubeId: 'cpraXaw7dyc', title: 'Optimus - Gen 2 | Tesla', source: 'Tesla' },
    price: { currency: 'USD', lastChecked: '2026-06-28' },
    image: 'https://img.youtube.com/vi/cpraXaw7dyc/maxresdefault.jpg',
    rating: { overall: 6.4, homeReadiness: 3.5, availability: 1.0, manipulation: 7.5, autonomy: 7.0, privacy: 5.8, value: 0 },
    keySpecs: {
      'Market status': 'Not for sale to consumers',
      'Official product': 'Tesla Optimus',
      'Best page angle': 'Can you buy Tesla Optimus?',
      'Consumer checkout': 'No verified consumer checkout'
    },
    smartHome: { alexa: false, googleHome: false, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'No consumer warranty terms because consumer purchase is not available.',
    returnNotes: 'Do not publish preorder claims unless Tesla opens an official order page.',
    sourceNotes: ['Tesla has official Optimus video/page material, but no verified consumer order page was found.'],
    pros: ['Massive demand and brand recognition', 'Important comparison target', 'Good for myth-busting content'],
    cons: ['Not buyable', 'Lots of speculative price claims online', 'No consumer terms'],
    bestFor: ['Search capture', 'Availability tracker', 'Future preorder alerts'],
    avoidIf: ['You want a product to order today'],
    affiliateLinks: [{ merchant: 'brand', label: 'Visit Tesla AI official page', url: 'https://www.tesla.com/AI', network: 'None', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'apptronik-apollo',
    brand: 'Apptronik',
    model: 'Apollo',
    category: 'enterprise-humanoid',
    status: 'enterprise-only',
    marketStatus: 'Enterprise/commercial humanoid, not a home consumer product',
    summary:
      'Apollo is a serious enterprise humanoid to track for market credibility, but it should not be framed as a home purchase option.',
    officialUrl: 'https://apptronik.com/',
    video: { youtubeId: 'pymvNott6nw', title: 'Introducing the Apollo Humanoid Robot by Apptronik', source: 'Apptronik / event coverage' },
    price: { currency: 'USD', lastChecked: '2026-06-28' },
    image: 'https://img.youtube.com/vi/pymvNott6nw/maxresdefault.jpg',
    rating: { overall: 6.8, homeReadiness: 2.0, availability: 4.0, manipulation: 7.2, autonomy: 6.8, privacy: 6.2, value: 0 },
    keySpecs: {
      'Market status': 'Enterprise/commercial',
      Height: '5 ft 8 in reported by Apptronik materials',
      Weight: '160 lb reported by Apptronik materials',
      Payload: '55 lb reported in Apptronik materials',
      'Home buyer note': 'Not a consumer home robot'
    },
    smartHome: { alexa: false, googleHome: false, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'Enterprise terms only, not consumer verified.',
    returnNotes: 'Not a retail product.',
    sourceNotes: ['Apptronik materials describe Apollo as roughly human-sized, 5 ft 8 in, 160 lb, with 55 lb lift/payload claims in public snippets.'],
    pros: ['Serious enterprise player', 'Important for market map', 'Strong industrial partnership signals'],
    cons: ['Not home buyable', 'No consumer pricing', 'No affiliate path today'],
    bestFor: ['Enterprise market tracking', 'Future market map', 'Comparison context'],
    avoidIf: ['You want a home robot to buy'],
    affiliateLinks: [{ merchant: 'brand', label: 'Visit Apptronik official site', url: 'https://apptronik.com/', network: 'None', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'agility-digit',
    brand: 'Agility Robotics',
    model: 'Digit',
    category: 'enterprise-humanoid',
    status: 'enterprise-only',
    marketStatus: 'Commercial logistics humanoid, not a home consumer robot',
    summary:
      'Digit is commercially deployed in logistics and should be tracked as proof the humanoid market is real, but not as a household purchase option.',
    officialUrl: 'https://www.agilityrobotics.com/',
    video: { youtubeId: 'rnFZAB9ogEE', title: 'The Next Generation of Digit: Enabling Humans to be More Human', source: 'Agility Robotics' },
    price: { currency: 'USD', lastChecked: '2026-06-28' },
    image: 'https://img.youtube.com/vi/rnFZAB9ogEE/maxresdefault.jpg',
    rating: { overall: 6.7, homeReadiness: 1.5, availability: 4.5, manipulation: 6.6, autonomy: 7.0, privacy: 6.8, value: 0 },
    keySpecs: {
      'Market status': 'Commercial/enterprise',
      Payload: '35 lb carrying capacity listed in Agility solutions snippet',
      Battery: '4 hour battery life listed in Agility solutions snippet',
      'Use case': 'Warehouse/logistics tote handling',
      'Home buyer note': 'Not a consumer home robot'
    },
    smartHome: { alexa: false, googleHome: false, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'Enterprise terms only, not consumer verified.',
    returnNotes: 'Not a retail product.',
    sourceNotes: ['Agility public snippets describe Digit as commercially deployed, with 35 lb carrying capacity and 4 hour battery life.'],
    pros: ['Real commercial deployments', 'Strong market credibility', 'Useful enterprise benchmark'],
    cons: ['Not for homes', 'No consumer pricing', 'No normal affiliate path'],
    bestFor: ['Humanoid market education', 'Enterprise vs home comparison', 'Proof-of-market content'],
    avoidIf: ['You want a robot for home chores'],
    affiliateLinks: [{ merchant: 'brand', label: 'Visit Agility Robotics official site', url: 'https://www.agilityrobotics.com/', network: 'None', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }],
    updatedAt: '2026-06-28'
  }
]

export const categoryLabels: Record<ProductCategory, string> = {
  'home-humanoid': 'Home Humanoids',
  'developer-humanoid': 'Developer Humanoids',
  'enterprise-humanoid': 'Enterprise Humanoids',
  'announced-humanoid': 'Announced Humanoids',
  'robot-vacuum': 'Robot Vacuums',
  'robot-lawn-mower': 'Robot Lawn Mowers',
  'robot-pool-cleaner': 'Robot Pool Cleaners',
  'robot-window-cleaner': 'Robot Window Cleaners',
  'companion-robot': 'Companion Robots'
}

export function getProductBySlug(slug: string) {
  return products.find(product => product.slug === slug)
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter(product => product.category === category)
}

export function getHumanoidProducts() {
  return products.filter(product => product.category.includes('humanoid'))
}

export function formatPrice(product: Product) {
  if (product.price.current) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: product.price.currency,
      maximumFractionDigits: 0
    }).format(product.price.current)
  }

  if (product.price.subscription) return product.price.subscription

  return 'Price not public'
}
