import type { Metadata } from 'next'

import { MessageSquareMoreIcon, MessagesSquareIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

import ScheduleDemo from '@/components/blocks/schedule-demo/schedule-demo'

export const metadata: Metadata = {
  title: 'Schedule a Demo',
  description: 'Schedule a demo with us to explore our solutions and see how we can help your business thrive.',
  keywords: ['schedule demo', 'product demo', 'business solutions'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/schedule-demo`
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
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}/schedule-demo#webpage`,
      name: 'Schedule a Demo',
      description: 'Schedule a demo with us to explore our solutions and see how we can help your business thrive.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}/schedule-demo`,
      isPartOf: {
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${process.env.NEXT_PUBLIC_APP_URL}/schedule-demo`]
      }
    }
  ]
}

const contactCards = [
  {
    icon: MessageSquareMoreIcon,
    title: 'Chat to Sales',
    description: 'Speak directly with our friendly sales team for product query.',
    ctaText: 'sales@gmail.com',
    ctaLink: 'mailto:sales@gmail.com'
  },
  {
    icon: MessagesSquareIcon,
    title: 'Chat to Support',
    description: 'Need technical help or product assistance? ',
    ctaText: 'johndoe@gmail.com',
    ctaLink: 'mailto:johndoe@gmail.com'
  },
  {
    icon: MapPinIcon,
    title: 'Visit Us',
    description: "Stop by our office - we'd love to meet you in person.",
    ctaText: 'View on maps',
    ctaLink: 'https://maps.google.com'
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    description: 'We are available in Mon to Fri, 8am to 5pm',
    ctaText: '+124-2589-7854',
    ctaLink: 'tel:+12425897854'
  }
]

const ScheduleDemoPage = () => {
  return (
    <>
      <ScheduleDemo contactCards={contactCards} />

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

export default ScheduleDemoPage
