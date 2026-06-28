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
    '/deals',
    '/affiliate-disclosure',
    '/faqs',
    '/about-us',
    '/blog',
    '/best/best-robot-vacuum',
    '/best/best-robot-vacuum-for-pet-hair',
    '/best/best-robotic-pool-cleaner',
    '/best/best-robot-lawn-mower',
    '/compare/roborock-vs-dreame',
    '/compare/roborock-vs-narwal',
    '/compare/aiper-vs-beatbot',
    ...products.map(product => `/reviews/${product.slug}`),
    ...posts.map(post => `/blog/${post.slug}`)
  ]

  return routes.map(route => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}${route}`
  }))
}
