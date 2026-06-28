export type ProductCategory =
  | 'robot-vacuum'
  | 'robot-lawn-mower'
  | 'robot-pool-cleaner'
  | 'robot-window-cleaner'
  | 'companion-robot'
  | 'home-humanoid'

export type ProductStatus = 'in-stock' | 'preorder' | 'limited' | 'not-us-available' | 'discontinued'

export type AffiliateLink = {
  merchant: 'amazon' | 'brand' | 'walmart' | 'bestbuy' | 'other'
  label: string
  url: string
  network?: 'Amazon Associates' | 'CJ' | 'Impact' | 'Awin' | 'FlexOffers' | 'ShareASale' | 'In-house'
  rel: 'sponsored nofollow'
  lastChecked: string
}

export type Product = {
  slug: string
  brand: string
  model: string
  category: ProductCategory
  status: ProductStatus
  summary: string
  price: {
    msrp?: number
    current?: number
    currency: 'USD'
    lastChecked: string
  }
  image: string
  rating?: {
    overall: number
    cleaning?: number
    navigation?: number
    maintenance?: number
    smartHome?: number
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
  pros: string[]
  cons: string[]
  bestFor: string[]
  avoidIf: string[]
  affiliateLinks: AffiliateLink[]
  updatedAt: string
}

export const products: Product[] = [
  {
    slug: 'roborock-saros-10r',
    brand: 'Roborock',
    model: 'Saros 10R',
    category: 'robot-vacuum',
    status: 'in-stock',
    summary: 'A premium robot vacuum and mop pick for buyers who want advanced navigation, strong hard-floor cleaning, and an automated dock.',
    price: { msrp: 1599, current: 1599, currency: 'USD', lastChecked: '2026-06-28' },
    image: '/images/blog/blog-1.webp',
    rating: { overall: 9.1, cleaning: 9.0, navigation: 9.3, maintenance: 8.8, smartHome: 8.4, privacy: 7.6, value: 8.0 },
    keySpecs: {
      'Robot type': 'Vacuum and mop',
      Dock: 'Self-empty, mop wash and dry',
      Navigation: 'LiDAR and structured light',
      'Best fit': 'Mixed floors and pet homes'
    },
    smartHome: { alexa: true, googleHome: true, appleHome: false, matter: false, homeAssistant: true },
    warranty: 'US warranty terms vary by merchant. Check the merchant listing before purchase.',
    returnNotes: 'Amazon and brand-direct return windows can differ during deal events.',
    pros: ['Excellent navigation', 'Strong automated dock', 'Good fit for mixed floors', 'High-end obstacle avoidance'],
    cons: ['Premium price', 'Matter support should be verified before purchase', 'Camera and mapping privacy may concern some buyers'],
    bestFor: ['Pet owners', 'Busy households', 'Buyers who want a premium self-cleaning dock'],
    avoidIf: ['You want the lowest possible price', 'You need verified Apple Home or Matter support today'],
    affiliateLinks: [
      { merchant: 'amazon', label: 'Check price on Amazon', url: '#', network: 'Amazon Associates', rel: 'sponsored nofollow', lastChecked: '2026-06-28' },
      { merchant: 'brand', label: 'Check price at Roborock', url: '#', network: 'CJ', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }
    ],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'dreame-x50-ultra',
    brand: 'Dreame',
    model: 'X50 Ultra',
    category: 'robot-vacuum',
    status: 'in-stock',
    summary: 'A flagship robot vacuum and mop candidate for buyers comparing Roborock, Narwal, and Dreame on obstacle handling and dock automation.',
    price: { msrp: 1699, current: 1499, currency: 'USD', lastChecked: '2026-06-28' },
    image: '/images/blog/blog-2.webp',
    rating: { overall: 8.9, cleaning: 9.1, navigation: 8.8, maintenance: 8.7, smartHome: 8.2, privacy: 7.4, value: 8.3 },
    keySpecs: {
      'Robot type': 'Vacuum and mop',
      Dock: 'Self-empty, mop wash and dry',
      Navigation: 'AI obstacle avoidance',
      'Best fit': 'Premium automated cleaning'
    },
    smartHome: { alexa: true, googleHome: true, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'Verify US warranty terms at checkout.',
    returnNotes: 'Direct and Amazon return policies may differ.',
    pros: ['Strong suction positioning', 'Premium dock features', 'Competitive direct affiliate program'],
    cons: ['High MSRP', 'Smart-home support varies by model and region', 'App privacy should be reviewed'],
    bestFor: ['Premium buyers', 'Homes with mixed debris', 'Deal hunters comparing flagship discounts'],
    avoidIf: ['You prefer a budget model', 'You want a simple no-app robot'],
    affiliateLinks: [
      { merchant: 'amazon', label: 'Check price on Amazon', url: '#', network: 'Amazon Associates', rel: 'sponsored nofollow', lastChecked: '2026-06-28' },
      { merchant: 'brand', label: 'Check price at Dreame', url: '#', network: 'Awin', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }
    ],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'narwal-freo-z-ultra',
    brand: 'Narwal',
    model: 'Freo Z Ultra',
    category: 'robot-vacuum',
    status: 'in-stock',
    summary: 'A premium vacuum and mop option for buyers who care about mopping performance, dock automation, and high-end design.',
    price: { msrp: 1499, current: 1299, currency: 'USD', lastChecked: '2026-06-28' },
    image: '/images/blog/blog-3.webp',
    rating: { overall: 8.8, cleaning: 8.8, navigation: 8.6, maintenance: 8.9, smartHome: 7.9, privacy: 7.3, value: 8.4 },
    keySpecs: {
      'Robot type': 'Vacuum and mop',
      Dock: 'Self-cleaning dock',
      Navigation: 'AI vision and mapping',
      'Best fit': 'Hard floors and mopping'
    },
    smartHome: { alexa: true, googleHome: true, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'Verify warranty terms with Narwal or Amazon.',
    returnNotes: 'Check return terms before buying during promotions.',
    pros: ['Strong mopping focus', 'Good automation', 'High-AOV direct program'],
    cons: ['Premium cost', 'Less proven than legacy brands for some buyers', 'Privacy review needed for camera features'],
    bestFor: ['Hard-floor homes', 'Buyers prioritizing mopping', 'Premium comparison shoppers'],
    avoidIf: ['You mostly clean deep carpet', 'You want the cheapest good robot vacuum'],
    affiliateLinks: [
      { merchant: 'amazon', label: 'Check price on Amazon', url: '#', network: 'Amazon Associates', rel: 'sponsored nofollow', lastChecked: '2026-06-28' },
      { merchant: 'brand', label: 'Check price at Narwal', url: '#', network: 'FlexOffers', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }
    ],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'mammotion-luba-2-awd',
    brand: 'Mammotion',
    model: 'LUBA 2 AWD',
    category: 'robot-lawn-mower',
    status: 'in-stock',
    summary: 'A high-AOV wire-free robot mower candidate for larger US lawns, slopes, and buyers who want to avoid boundary wire installation.',
    price: { msrp: 2799, current: 2499, currency: 'USD', lastChecked: '2026-06-28' },
    image: '/images/blog/blog-4.webp',
    rating: { overall: 8.7, navigation: 8.9, maintenance: 8.1, smartHome: 7.8, privacy: 7.8, value: 8.2 },
    keySpecs: {
      'Robot type': 'Robot lawn mower',
      Navigation: 'RTK, wire-free',
      'Best fit': 'Medium to large lawns',
      Slopes: 'Model-dependent'
    },
    smartHome: { alexa: true, googleHome: true, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'Verify US warranty and parts support before purchase.',
    returnNotes: 'Large-item returns may be more restrictive than robot vacuums.',
    pros: ['Wire-free setup', 'High AOV', 'Strong fit for spring lawn content'],
    cons: ['Requires careful setup', 'RTK performance depends on yard conditions', 'Expensive'],
    bestFor: ['Suburban homeowners', 'Larger lawns', 'Buyers avoiding boundary wire'],
    avoidIf: ['Your yard has heavy tree cover', 'You need the lowest upfront cost'],
    affiliateLinks: [
      { merchant: 'brand', label: 'Check price at Mammotion', url: '#', network: 'In-house', rel: 'sponsored nofollow', lastChecked: '2026-06-28' },
      { merchant: 'amazon', label: 'Check price on Amazon', url: '#', network: 'Amazon Associates', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }
    ],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'beatbot-aquasense-2',
    brand: 'Beatbot',
    model: 'AquaSense 2',
    category: 'robot-pool-cleaner',
    status: 'in-stock',
    summary: 'A premium cordless robotic pool cleaner for US pool owners comparing Beatbot, Aiper, and Dolphin before summer purchases.',
    price: { msrp: 1499, current: 1299, currency: 'USD', lastChecked: '2026-06-28' },
    image: '/images/blog/blog-5.webp',
    rating: { overall: 8.6, cleaning: 8.7, navigation: 8.4, maintenance: 8.2, smartHome: 7.5, privacy: 8.1, value: 8.0 },
    keySpecs: {
      'Robot type': 'Cordless pool cleaner',
      Pool: 'In-ground pools',
      Cleaning: 'Floor, walls, waterline by model',
      'Best fit': 'Pool owners wanting cordless convenience'
    },
    smartHome: { alexa: false, googleHome: false, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'Verify US warranty and battery coverage.',
    returnNotes: 'Pool robots are seasonal purchases. Check return windows before opening pool season.',
    pros: ['Strong pool-cleaner AOV', 'Cordless convenience', 'Under-served affiliate niche'],
    cons: ['Battery products need warranty scrutiny', 'Pool shape can affect results', 'Premium pricing'],
    bestFor: ['In-ground pool owners', 'Summer deal shoppers', 'Buyers who dislike cords'],
    avoidIf: ['You want a budget cleaner', 'You prefer a proven corded Dolphin style cleaner'],
    affiliateLinks: [
      { merchant: 'brand', label: 'Check price at Beatbot', url: '#', network: 'In-house', rel: 'sponsored nofollow', lastChecked: '2026-06-28' },
      { merchant: 'amazon', label: 'Check price on Amazon', url: '#', network: 'Amazon Associates', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }
    ],
    updatedAt: '2026-06-28'
  },
  {
    slug: 'ecovacs-winbot-w2s-omni',
    brand: 'ECOVACS',
    model: 'WINBOT W2S Omni',
    category: 'robot-window-cleaner',
    status: 'in-stock',
    summary: 'A robotic window cleaner for buyers who want safer high-window cleaning and a less crowded alternative to vacuum-only robot content.',
    price: { msrp: 699, current: 599, currency: 'USD', lastChecked: '2026-06-28' },
    image: '/images/blog/blog-6.webp',
    rating: { overall: 8.1, cleaning: 8.0, navigation: 8.1, maintenance: 7.8, smartHome: 6.8, privacy: 8.0, value: 7.6 },
    keySpecs: {
      'Robot type': 'Window cleaner',
      Station: 'Portable station',
      Navigation: 'WIN-SLAM path planning',
      'Best fit': 'Large windows and hard-to-reach glass'
    },
    smartHome: { alexa: false, googleHome: false, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'Verify safety, warranty, and pad replacement terms.',
    returnNotes: 'Test on compatible window types only.',
    pros: ['Low-competition content angle', 'Solves safety concern', 'Strong category hub candidate'],
    cons: ['Not for every window type', 'Requires safety setup', 'Niche buyer base'],
    bestFor: ['Large windows', 'Sunrooms', 'Hard-to-reach glass'],
    avoidIf: ['You have incompatible windows', 'You expect fully unattended exterior cleaning'],
    affiliateLinks: [
      { merchant: 'amazon', label: 'Check price on Amazon', url: '#', network: 'Amazon Associates', rel: 'sponsored nofollow', lastChecked: '2026-06-28' },
      { merchant: 'brand', label: 'Check price at ECOVACS', url: '#', network: 'FlexOffers', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }
    ],
    updatedAt: '2026-06-28'
  },
  {
    slug: '1x-neo',
    brand: '1X',
    model: 'NEO',
    category: 'home-humanoid',
    status: 'preorder',
    summary: 'A home humanoid preorder to cover carefully as an emerging category, with strict US availability and shipping-status labels.',
    price: { msrp: 20000, current: 20000, currency: 'USD', lastChecked: '2026-06-28' },
    image: '/images/blog/blog-7.webp',
    rating: { overall: 7.2, smartHome: 6.5, privacy: 5.5, value: 5.8 },
    keySpecs: {
      'Robot type': 'Home humanoid',
      Status: 'Preorder',
      Price: '$20,000 or subscription option reported by 1X',
      'US delivery': 'Starts 2026 per 1X order page'
    },
    smartHome: { alexa: false, googleHome: false, appleHome: false, matter: false, homeAssistant: false },
    warranty: 'Verify preorder, cancellation, and service terms directly with 1X.',
    returnNotes: 'Do not treat preorder terms like normal Amazon returns.',
    pros: ['Authority-building category', 'High future AOV', 'Strong press and curiosity demand'],
    cons: ['Preorder status', 'Very expensive', 'Real-world household capability is still emerging', 'Privacy and teleoperation questions need scrutiny'],
    bestFor: ['Early adopters', 'Robotics watchers', 'Readers tracking what is actually shipping'],
    avoidIf: ['You want a proven household appliance today', 'You need mainstream support and returns'],
    affiliateLinks: [{ merchant: 'brand', label: 'Check preorder status at 1X', url: '#', network: 'In-house', rel: 'sponsored nofollow', lastChecked: '2026-06-28' }],
    updatedAt: '2026-06-28'
  }
]

export const categoryLabels: Record<ProductCategory, string> = {
  'robot-vacuum': 'Robot Vacuums',
  'robot-lawn-mower': 'Robot Lawn Mowers',
  'robot-pool-cleaner': 'Robot Pool Cleaners',
  'robot-window-cleaner': 'Robot Window Cleaners',
  'companion-robot': 'Companion Robots',
  'home-humanoid': 'Home Humanoids'
}

export function getProductBySlug(slug: string) {
  return products.find(product => product.slug === slug)
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter(product => product.category === category)
}

export function formatPrice(product: Product) {
  if (!product.price.current) return 'Check price'

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.price.currency,
    maximumFractionDigits: 0
  }).format(product.price.current)
}
