import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/affiliate/product-card'
import { CompareTable } from '@/components/affiliate/compare-table'
import { products } from '@/assets/data/products'

const comparePages: Record<string, { title: string; description: string; productSlugs: string[] }> = {
  'roborock-vs-dreame': {
    title: 'Roborock vs Dreame: Which Robot Vacuum Should US Buyers Choose?',
    description: 'Compare Roborock and Dreame by price, dock automation, navigation, smart-home support, privacy, warranty, and affiliate availability.',
    productSlugs: ['roborock-saros-10r', 'dreame-x50-ultra']
  },
  'roborock-vs-narwal': {
    title: 'Roborock vs Narwal: Premium Robot Vacuum Comparison',
    description: 'Compare Roborock and Narwal for mopping, automation, app experience, price, and US buying options.',
    productSlugs: ['roborock-saros-10r', 'narwal-freo-z-ultra']
  },
  'aiper-vs-beatbot': {
    title: 'Aiper vs Beatbot: Cordless Pool Robot Buying Guide',
    description: 'Compare pool robot positioning, battery concerns, warranty notes, and US affiliate opportunities.',
    productSlugs: ['beatbot-aquasense-2']
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
          <Badge variant='outline'>Comparison</Badge>
          <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>{page.title}</h1>
          <p className='text-muted-foreground text-lg'>{page.description}</p>
        </div>
        <CompareTable products={pageProducts} />
        <div className='grid gap-6 md:grid-cols-2'>
          {pageProducts.map(product => product && <ProductCard key={product.slug} product={product} />)}
        </div>
      </div>
    </section>
  )
}
