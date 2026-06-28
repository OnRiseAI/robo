import type { Metadata } from 'next'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/affiliate/product-card'
import { products } from '@/assets/data/products'

export const metadata: Metadata = {
  title: 'Home Robot Deals | US Price Tracker',
  description: 'Track US deals on robot vacuums, robot lawn mowers, robotic pool cleaners, window cleaners, and home humanoids.'
}

export default function DealsPage() {
  return (
    <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-10'>
        <div className='max-w-3xl space-y-4'>
          <Badge variant='outline'>Deals hub</Badge>
          <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>Home robot deals, checked for US buyers</h1>
          <p className='text-muted-foreground text-lg'>
            This page is ready for live Amazon and brand-direct pricing. For now it uses the first product data set with last-checked dates so we can wire affiliate programs safely.
          </p>
          <p className='text-muted-foreground text-sm'>
            Next major US deal cycle: Black Friday 2026 on Nov 27 and Cyber Monday 2026 on Nov 30. See the full category hubs starting with{' '}
            <Link href='/robot-vacuums' className='underline underline-offset-4'>robot vacuums</Link>.
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {products.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
