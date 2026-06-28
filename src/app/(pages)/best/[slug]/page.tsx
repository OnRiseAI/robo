import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/affiliate/product-card'
import { products } from '@/assets/data/products'

const bestPages: Record<string, { title: string; description: string; productSlugs: string[] }> = {
  'best-home-humanoid-robots': {
    title: 'Best Home Humanoid Robots to Track in 2026',
    description: 'A hype-checked shortlist of humanoid robots by US availability, preorder status, price, official source material, and real home readiness.',
    productSlugs: ['1x-neo', 'unitree-g1', 'unitree-r1', 'figure-03', 'tesla-optimus']
  },
  'humanoid-robots-for-sale': {
    title: 'Humanoid Robots for Sale or Preorder',
    description: 'Which humanoid robots can actually be ordered, preordered, or only tracked in 2026, with official links and buyer cautions.',
    productSlugs: ['1x-neo', 'unitree-g1', 'unitree-r1']
  },
  'humanoid-robots-under-30000': {
    title: 'Humanoid Robots Under $30,000',
    description: 'Compare the lower-cost humanoid robots and preorder options that sit below the $30,000 mark, including 1X and Unitree models.',
    productSlugs: ['unitree-r1', 'unitree-g1', '1x-neo']
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

  const pageProducts = page.productSlugs
    .map(productSlug => products.find(product => product.slug === productSlug))
    .filter((product): product is (typeof products)[number] => Boolean(product))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.title,
    itemListElement: pageProducts.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: `${product.brand} ${product.model}`,
        url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/reviews/${product.slug}`
      }
    }))
  }

  return (
    <>
      <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-7xl space-y-10'>
          <div className='max-w-3xl space-y-4'>
            <Badge variant='outline'>Humanoid buyer guide</Badge>
            <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>{page.title}</h1>
            <p className='text-muted-foreground text-lg'>{page.description}</p>
          </div>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {pageProducts.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </>
  )
}
