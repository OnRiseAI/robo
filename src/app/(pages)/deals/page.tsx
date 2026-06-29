import type { Metadata } from 'next'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/affiliate/product-card'
import { products } from '@/assets/data/products'

export const metadata: Metadata = {
  title: 'Humanoid Robot Prices & Preorder Watchlist',
  description: 'Track humanoid robot prices, preorder deposits, official links, and last-checked availability for US buyers.'
}

export default function DealsPage() {
  return (
    <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-10'>
        <div className='max-w-3xl space-y-4'>
          <Badge variant='outline'>Price watchlist</Badge>
          <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>Humanoid robot prices, deposits, and preorder paths</h1>
          <p className='text-muted-foreground text-lg'>
            This page tracks official humanoid robot pricing signals, preorder deposits, source links, and last-checked dates. It is not a generic robot-appliance deals page.
          </p>
          <p className='text-muted-foreground text-sm'>
            Start with the{' '}
            <Link href='/humanoid-robots-for-sale' className='underline underline-offset-4'>humanoid robots for sale tracker</Link>{' '}
            to see which products are actually orderable, preorder-only, developer-focused, enterprise-only, or not for sale.
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
