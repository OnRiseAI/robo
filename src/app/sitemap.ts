import type { MetadataRoute } from 'next'

import { getPosts } from '@/lib/posts'
import { products } from '@/assets/data/products'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  const routes = [
    '',
    '/robot-vacuums',
    '/robot-lawn-mowers',
    '/robot-pool-cleaners',
    '/robot-window-cleaners',
    '/home-humanoids',
    '/humanoid-robots-for-sale',
    '/preorder-tracker',
    '/1x-neo',
    '/unitree-g1',
    '/figure-03',
    '/tesla-optimus',
    '/deals',
    '/affiliate-disclosure',
    '/faqs',
    '/about-us',
    '/blog',
    '/best/best-home-humanoid-robots',
    '/best/humanoid-robots-for-sale',
    '/best/humanoid-robots-under-30000',
    '/compare/1x-neo-vs-unitree-g1',
    '/compare/1x-neo-vs-figure-03',
    '/compare/tesla-optimus-vs-figure-03',
    '/compare/unitree-g1-vs-unitree-r1',
    ...products.map(product => `/reviews/${product.slug}`),
    ...posts.map(post => `/blog/${post.slug}`)
  ]

  return routes.map(route => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}${route}`
  }))
}
