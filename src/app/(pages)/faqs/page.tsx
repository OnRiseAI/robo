import type { Metadata } from 'next'

// Component Imports
import FaqSection from '@/components/blocks/faq-section/faq-section'
import CTA from '@/components/blocks/cta-section/cta-section'

// Data Imports
import { faqData } from '@/assets/data/faq-data'

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Find answers to common questions about our product, features, pricing, and support. Get the information you need to make informed decisions.',
  keywords: ['FAQ', 'Frequently Asked Questions', 'Support', 'Help', 'Product Information'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/faqs`
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'Matter',
      description:
        'Meet Robo, the intelligent home companion designed to simplify household chores with precision AI, smart automation, and sleek humanoid design.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en-US'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}/faqs#webpage`,
      name: 'FAQs',
      description:
        'Find answers to common questions about our product, features, pricing, and support. Get the information you need to make informed decisions.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}/faqs`,
      isPartOf: {
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${process.env.NEXT_PUBLIC_APP_URL}/faqs`]
      }
    }
  ]
}

const FaqPage = () => {
  return (
    <>
      <FaqSection faqData={faqData} />

      <CTA />

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default FaqPage
