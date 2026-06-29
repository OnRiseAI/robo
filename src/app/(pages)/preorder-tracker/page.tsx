import type { Metadata } from 'next'

import { Badge } from '@/components/ui/badge'
import { HumanoidAvailabilityTracker } from '@/components/affiliate/humanoid-availability-tracker'
import { breadcrumbJsonLd, faqJsonLd, jsonLdGraph, webPageJsonLd } from '@/lib/seo'

const faqs = [
  {
    question: 'Which humanoid robot preorders are open?',
    answer:
      '1X NEO is the clearest home-focused preorder/order path currently tracked. Unitree humanoids appear more like buyable developer platforms than normal home preorders.'
  },
  {
    question: 'Is Tesla Optimus available for preorder?',
    answer: 'No verified Tesla Optimus consumer preorder or normal checkout path is tracked on this site. Treat Optimus as not for sale until Tesla opens an official order page.'
  },
  {
    question: 'How is availability verified?',
    answer:
      'Availability is based on official product pages, official shop/order pages, official videos, and public manufacturer statements. Every product page includes source notes and a last-checked date.'
  }
]

export const metadata: Metadata = {
  title: 'Humanoid Robot Preorder Tracker: Available, Preorder, Not for Sale',
  description:
    'Track which humanoid robots are preorder open, available, developer-only, enterprise-only, or not for sale in the US, with official source checks.',
  keywords: ['humanoid robot preorder', '1X NEO preorder', 'Tesla Optimus preorder', 'Figure 03 preorder', 'humanoid robot availability tracker'],
  alternates: {
    canonical: '/preorder-tracker'
  }
}

export default function PreorderTrackerPage() {
  const jsonLd = jsonLdGraph([
    webPageJsonLd({
      path: '/preorder-tracker',
      name: 'Humanoid robot preorder tracker',
      description: metadata.description as string
    }),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Preorder tracker', path: '/preorder-tracker' }
    ]),
    faqJsonLd(faqs)
  ])

  return (
    <>
      <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-7xl space-y-10'>
          <div className='max-w-3xl space-y-4'>
            <Badge variant='outline'>Preorder tracker</Badge>
            <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>Humanoid robot preorder and availability tracker</h1>
            <p className='text-muted-foreground text-lg'>
              The humanoid market is moving fast. This page tracks official order pages, preorder claims, developer-only robots, enterprise deployments, and robots that are not yet for sale.
            </p>
          </div>
          <div className='rounded-2xl border bg-muted/30 p-6'>
            <h2 className='text-2xl font-medium tracking-tight'>Fast answer</h2>
            <p className='text-muted-foreground mt-3'>
              1X NEO is the main home-focused preorder to watch. Unitree G1/R1 are more buyable developer humanoids. Tesla Optimus and Figure 03 are not confirmed consumer checkout products yet.
            </p>
          </div>
          <HumanoidAvailabilityTracker />
          <section className='space-y-4'>
            <h2 className='text-3xl font-medium tracking-tight'>Preorder questions answered</h2>
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
