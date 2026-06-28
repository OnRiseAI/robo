import type { ProductCategory } from '@/assets/data/products'

export type CategoryPage = {
  slug: string
  category: ProductCategory
  title: string
  eyebrow: string
  description: string
  primaryKeyword: string
  buyerAngle: string
}

export const categoryPages: CategoryPage[] = [
  {
    slug: 'robot-vacuums',
    category: 'robot-vacuum',
    title: 'Best Robot Vacuums Americans Can Actually Buy',
    eyebrow: 'US robot vacuum buyer guide',
    description:
      'Compare robot vacuums and vacuum-mop combos by real US availability, price, pet-hair performance, smart-home fit, privacy notes, and warranty support.',
    primaryKeyword: 'robot vacuums',
    buyerAngle: 'Start here if you want the fastest path from research to purchase. Robot vacuums bring the traffic, the strongest Amazon conversion, and the clearest direct affiliate programs.'
  },
  {
    slug: 'robot-lawn-mowers',
    category: 'robot-lawn-mower',
    title: 'Robot Lawn Mowers for US Yards',
    eyebrow: 'Wire-free and RTK mower guide',
    description:
      'Find robot lawn mowers by lawn size, slope, boundary setup, RTK reliability, dealer support, and US warranty terms.',
    primaryKeyword: 'robot lawn mowers',
    buyerAngle: 'High-AOV spring and suburban-homeowner content with less competition than robot vacuum reviews.'
  },
  {
    slug: 'robot-pool-cleaners',
    category: 'robot-pool-cleaner',
    title: 'Robotic Pool Cleaners for US Pool Owners',
    eyebrow: 'Cordless and corded pool robot guide',
    description:
      'Compare robotic pool cleaners by pool type, wall and waterline cleaning, battery warranty, filter maintenance, and summer deal timing.',
    primaryKeyword: 'robotic pool cleaner',
    buyerAngle: 'Seasonal high-intent pages for US pool owners, especially in sunbelt states before and during summer.'
  },
  {
    slug: 'robot-window-cleaners',
    category: 'robot-window-cleaner',
    title: 'Robot Window Cleaners That Are Actually Sold in the US',
    eyebrow: 'Window robot safety and buying guide',
    description:
      'Compare robot window cleaners by safety setup, compatible glass types, suction reliability, pad maintenance, and US retailer availability.',
    primaryKeyword: 'robot window cleaner',
    buyerAngle: 'A lower-competition category with practical safety questions that generic review sites under-answer.'
  },
  {
    slug: 'home-humanoids',
    category: 'home-humanoid',
    title: 'Home Humanoid Robots You Can Actually Track in the US',
    eyebrow: 'Hype-checked humanoid robot guide',
    description:
      'Track home humanoids by preorder status, US delivery claims, real household capability, privacy concerns, and whether consumers can actually buy them.',
    primaryKeyword: 'home humanoid robot',
    buyerAngle: 'Not the fastest affiliate revenue today, but a strong authority wedge for links, curiosity, and future high-ticket programs.'
  }
]

export function getCategoryPage(slug: string) {
  return categoryPages.find(page => page.slug === slug)
}
