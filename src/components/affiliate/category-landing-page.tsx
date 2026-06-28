import Link from 'next/link'
import { ArrowUpRightIcon, ShieldCheckIcon, SparklesIcon, TagIcon, type LucideIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MatterButton } from '@/components/ui/matter-button'
import { ProductCard } from '@/components/affiliate/product-card'
import { CompareTable } from '@/components/affiliate/compare-table'
import { getProductsByCategory, type ProductCategory } from '@/assets/data/products'
import type { CategoryPage } from '@/assets/data/affiliate-pages'

export function CategoryLandingPage({ page }: { page: CategoryPage }) {
  const products = getProductsByCategory(page.category as ProductCategory)

  const trustCards: { title: string; body: string; Icon: LucideIcon }[] = [
    {
      title: 'US availability checked',
      body: 'We label in-stock, preorder, limited, and not-US-available robots before making purchase claims.',
      Icon: ShieldCheckIcon
    },
    {
      title: 'Affiliate ready',
      body: 'Pages support Amazon and brand-direct CTAs with sponsored nofollow attributes and inline disclosure.',
      Icon: TagIcon
    },
    {
      title: 'Smart-home fit',
      body: 'Robots are compared across Alexa, Google Home, Apple Home, Matter, and privacy-sensitive features.',
      Icon: SparklesIcon
    }
  ]

  return (
    <>
      <section className='relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <Badge variant='outline'>{page.eyebrow}</Badge>
              <h1 className='max-w-4xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl'>{page.title}</h1>
              <p className='text-muted-foreground max-w-2xl text-lg'>{page.description}</p>
            </div>
            <div className='flex flex-wrap gap-3'>
              <MatterButton asChild>
                <Link href='#top-picks'>
                  See top picks
                  <ArrowUpRightIcon />
                </Link>
              </MatterButton>
              <MatterButton asChild>
                <Link href='/deals'>
                  Check robot deals
                  <TagIcon />
                </Link>
              </MatterButton>
            </div>
            <p className='text-muted-foreground max-w-2xl text-sm'>{page.buyerAngle}</p>
          </div>
          <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
            {trustCards.map(({ title, body, Icon }) => (
              <Card key={title}>
                <CardHeader>
                  <Icon className='size-5 text-primary' />
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground text-sm'>{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id='top-picks' className='px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl space-y-8'>
          <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
            <div>
              <Badge variant='outline'>Top picks</Badge>
              <h2 className='mt-3 text-3xl font-medium tracking-tight sm:text-4xl'>Recommended products</h2>
            </div>
            <p className='text-muted-foreground max-w-xl text-sm'>Prices and availability use sample data for the first build sprint. Replace placeholder affiliate URLs after program approvals.</p>
          </div>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {products.length > 1 && (
        <section className='px-4 py-12 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl space-y-6'>
            <div>
              <Badge variant='outline'>Specs</Badge>
              <h2 className='mt-3 text-3xl font-medium tracking-tight sm:text-4xl'>Compare the shortlist</h2>
            </div>
            <CompareTable products={products.slice(0, 3)} />
          </div>
        </section>
      )}
    </>
  )
}
