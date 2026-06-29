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
    slug: 'home-humanoids',
    category: 'home-humanoid',
    title: 'Home Humanoid Robots You Can Actually Track in the US',
    eyebrow: 'Hype-checked humanoid robot guide',
    description:
      'Track home humanoids by preorder status, US delivery claims, real household capability, privacy concerns, and whether consumers can actually buy them.',
    primaryKeyword: 'home humanoid robot',
    buyerAngle: 'This is the authority wedge: separate real home-focused preorder options from developer kits, enterprise humanoids, and not-for-sale hype.'
  }
]

export function getCategoryPage(slug: string) {
  return categoryPages.find(page => page.slug === slug)
}
