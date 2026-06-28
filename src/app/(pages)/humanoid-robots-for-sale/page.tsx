import type { Metadata } from 'next'

import { Badge } from '@/components/ui/badge'
import { HumanoidAvailabilityTracker } from '@/components/affiliate/humanoid-availability-tracker'
import { ProductCard } from '@/components/affiliate/product-card'
import { getHumanoidProducts } from '@/assets/data/products'

export const metadata: Metadata = {
  title: 'Humanoid Robots for Sale in 2026',
  description: 'A US-focused tracker for humanoid robots that can actually be ordered, preordered, or only monitored in 2026.'
}

export default function HumanoidRobotsForSalePage() {
  const products = getHumanoidProducts()

  return (
    <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-10'>
        <div className='max-w-3xl space-y-4'>
          <Badge variant='outline'>For sale or preorder</Badge>
          <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>Humanoid robots for sale, preorder, or tracking</h1>
          <p className='text-muted-foreground text-lg'>
            There are very few true home humanoids for consumers today. This page separates the orderable robots from developer platforms, enterprise robots, and not-yet-for-sale products.
          </p>
        </div>
        <HumanoidAvailabilityTracker />
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {products.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
