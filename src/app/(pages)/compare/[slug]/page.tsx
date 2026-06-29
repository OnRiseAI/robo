import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/affiliate/product-card'
import { CompareTable } from '@/components/affiliate/compare-table'
import { products } from '@/assets/data/products'

const comparePages: Record<string, { title: string; description: string; productSlugs: string[] }> = {
  '1x-neo-vs-unitree-g1': {
    title: '1X NEO vs Unitree G1: Home Humanoid or Developer Platform?',
    description: 'Compare the clearest home humanoid preorder against one of the most buyable developer humanoids by price, availability, use case, and buyer risk.',
    productSlugs: ['1x-neo', 'unitree-g1']
  },
  '1x-neo-vs-figure-03': {
    title: '1X NEO vs Figure 03: Which Home Humanoid Is Actually Orderable?',
    description: 'Compare 1X NEO and Figure 03 by home positioning, consumer order path, official videos, pricing visibility, and delivery claims.',
    productSlugs: ['1x-neo', 'figure-03']
  },
  'tesla-optimus-vs-figure-03': {
    title: 'Tesla Optimus vs Figure 03: Can You Buy Either One?',
    description: 'A hype-checked comparison for buyers asking whether Tesla Optimus or Figure 03 is actually available as a home robot.',
    productSlugs: ['tesla-optimus', 'figure-03']
  },
  'unitree-g1-vs-unitree-r1': {
    title: 'Unitree G1 vs Unitree R1: Which Affordable Humanoid Should You Track?',
    description: 'Compare Unitree humanoid options by price, availability, developer expectations, and home-readiness cautions.',
    productSlugs: ['unitree-g1', 'unitree-r1']
  }
}

export function generateStaticParams() {
  return Object.keys(comparePages).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = comparePages[slug]

  if (!page) return {}

  return {
    title: page.title,
    description: page.description
  }
}

export const dynamicParams = false

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = comparePages[slug]

  if (!page) notFound()

  const pageProducts = page.productSlugs
    .map(productSlug => products.find(product => product.slug === productSlug))
    .filter((product): product is (typeof products)[number] => Boolean(product))

  return (
    <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-10'>
        <div className='max-w-3xl space-y-4'>
          <Badge variant='outline'>Humanoid comparison</Badge>
          <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>{page.title}</h1>
          <p className='text-muted-foreground text-lg'>{page.description}</p>
        </div>
        <CompareTable products={pageProducts} />
        <div className='grid gap-6 md:grid-cols-2'>
          {pageProducts.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
