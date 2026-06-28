import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/affiliate/product-card'
import { products } from '@/assets/data/products'

const bestPages: Record<string, { title: string; description: string; productSlugs: string[] }> = {
  'best-robot-vacuum': {
    title: 'Best Robot Vacuums for US Homes',
    description: 'A buyer-first shortlist of robot vacuums Americans can actually buy today, with price, smart-home, and warranty notes.',
    productSlugs: ['roborock-saros-10r', 'dreame-x50-ultra', 'narwal-freo-z-ultra']
  },
  'best-robot-vacuum-for-pet-hair': {
    title: 'Best Robot Vacuums for Pet Hair',
    description: 'Compare premium robot vacuums for pet hair pickup, obstacle avoidance, dock automation, and replacement-part availability.',
    productSlugs: ['roborock-saros-10r', 'dreame-x50-ultra', 'narwal-freo-z-ultra']
  },
  'best-robotic-pool-cleaner': {
    title: 'Best Robotic Pool Cleaners',
    description: 'A US-focused shortlist for cordless and premium pool robots, with battery, warranty, and pool-type notes.',
    productSlugs: ['beatbot-aquasense-2']
  },
  'best-robot-lawn-mower': {
    title: 'Best Robot Lawn Mowers',
    description: 'Compare high-AOV robot lawn mowers by wire-free setup, lawn size, RTK reliability, slope handling, and US support.',
    productSlugs: ['mammotion-luba-2-awd']
  }
}

export function generateStaticParams() {
  return Object.keys(bestPages).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = bestPages[slug]

  if (!page) return {}

  return {
    title: page.title,
    description: page.description
  }
}

export const dynamicParams = false

export default async function BestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = bestPages[slug]

  if (!page) notFound()

  const pageProducts = page.productSlugs.map(productSlug => products.find(product => product.slug === productSlug)).filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.title,
    itemListElement: pageProducts.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: `${product?.brand} ${product?.model}`,
        url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/reviews/${product?.slug}`
      }
    }))
  }

  return (
    <>
      <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-7xl space-y-10'>
          <div className='max-w-3xl space-y-4'>
            <Badge variant='outline'>Best-of guide</Badge>
            <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>{page.title}</h1>
            <p className='text-muted-foreground text-lg'>{page.description}</p>
          </div>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {pageProducts.map(product => product && <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </>
  )
}
