import type { Metadata } from 'next'

import { Badge } from '@/components/ui/badge'
import { HumanoidAvailabilityTracker } from '@/components/affiliate/humanoid-availability-tracker'
import { ProductCard } from '@/components/affiliate/product-card'
import { getHumanoidProducts } from '@/assets/data/products'
import { breadcrumbJsonLd, faqJsonLd, jsonLdGraph, productJsonLd, webPageJsonLd } from '@/lib/seo'

const faqs = [
  {
    question: 'What humanoid robots can you buy right now?',
    answer:
      'The clearest home-focused consumer preorder is 1X NEO. Unitree G1 and Unitree R1 are more buyable as developer or early-adopter humanoid platforms, not finished household helpers.'
  },
  {
    question: 'Are humanoid robots ready for normal home chores?',
    answer:
      'Not yet for most buyers. The market is early, so this guide separates home-focused preorders from developer platforms, enterprise robots, and products that are not for sale.'
  },
  {
    question: 'Which humanoid robots are not actually for sale?',
    answer:
      'Figure 03 and Tesla Optimus are important to track, but no verified normal consumer checkout was found. Apptronik Apollo and Agility Digit are enterprise/commercial robots, not retail home products.'
  }
]

export const metadata: Metadata = {
  title: 'Humanoid Robots for Sale in 2026: Prices, Preorders & Official Links',
  description:
    'Which humanoid robots can actually be ordered, preordered, or only tracked in 2026. US-focused availability, price, official links, videos, and buyer cautions.',
  keywords: ['humanoid robots for sale', 'home humanoid robot', 'humanoid robot preorder', '1X NEO price', 'Unitree G1 price', 'Tesla Optimus for sale'],
  alternates: {
    canonical: '/humanoid-robots-for-sale'
  }
}

export default function HumanoidRobotsForSalePage() {
  const products = getHumanoidProducts()

  const jsonLd = jsonLdGraph([
    webPageJsonLd({
      path: '/humanoid-robots-for-sale',
      name: 'Humanoid robots for sale in 2026',
      description: metadata.description as string
    }),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Humanoid robots for sale', path: '/humanoid-robots-for-sale' }
    ]),
    {
      '@type': 'ItemList',
      '@id': '/humanoid-robots-for-sale#itemlist',
      name: 'Humanoid robots for sale, preorder, or tracking',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: productJsonLd(product)
      }))
    },
    faqJsonLd(faqs)
  ])

  return (
    <>
      <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-7xl space-y-10'>
          <div className='max-w-3xl space-y-4'>
            <Badge variant='outline'>For sale or preorder</Badge>
            <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>Humanoid robots for sale, preorder, or tracking</h1>
            <p className='text-muted-foreground text-lg'>
              Short answer: only a small number of humanoid robots are truly orderable by US buyers today. 1X NEO is the clearest home-focused preorder, while Unitree G1/R1 are better framed as developer or early-adopter platforms.
            </p>
          </div>
          <div className='rounded-2xl border bg-muted/30 p-6'>
            <h2 className='text-2xl font-medium tracking-tight'>Quick answer for buyers</h2>
            <p className='text-muted-foreground mt-3'>
              If you want a home humanoid, start with 1X NEO. If you want a buyable robot platform for development, compare Unitree G1 and R1. If you are searching for Tesla Optimus, Figure 03, Apollo, or Digit, treat those as tracking pages rather than consumer checkout pages.
            </p>
          </div>
          <HumanoidAvailabilityTracker />
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {products.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <section className='space-y-4'>
            <h2 className='text-3xl font-medium tracking-tight'>Humanoid robot buying FAQs</h2>
            <div className='grid gap-4 md:grid-cols-3'>
              {faqs.map(faq => (
                <div key={faq.question} className='rounded-2xl border p-5'>
                  <h3 className='font-medium'>{faq.question}</h3>
                  <p className='text-muted-foreground mt-2 text-sm'>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </>
  )
}
