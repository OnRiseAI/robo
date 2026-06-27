import type { Metadata } from 'next'

import HeroSection from '@/components/about-us/hero-section'
import MissionSection from '@/components/about-us/mission-section'
import TeamSection from '@/components/about-us/team-section'
import QuoteSection from '@/components/about-us/quote-section'
import TimelineSection from '@/components/about-us/timeline-section/timeline-section'
import CTA from '@/components/blocks/cta-section/cta-section'

import { teamMember } from '@/assets/data/team-members'
import { missionData } from '@/assets/data/mission-data'
import { statistics, timelineEvents } from '@/assets/data/timeline-events'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover our mission to help brands grow through innovative marketing strategies and creative digital solutions.',
  keywords: ['about us', 'team', 'company'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/about`
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
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}/about#webpage`,
      name: 'About Us',
      description:
        'Discover our mission to help brands grow through innovative marketing strategies and creative digital solutions.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
      isPartOf: {
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${process.env.NEXT_PUBLIC_APP_URL}/about`]
      }
    }
  ]
}

const AboutUsPage = () => {
  return (
    <>
      <HeroSection />

      <MissionSection data={missionData} />

      <TimelineSection stats={statistics} timelineEvents={timelineEvents} />

      <TeamSection teamMembers={teamMember} />

      <QuoteSection />

      <CTA
        title="Build What's Next in intelligent Robotics"
        description='Work alongside experts in AI, robotics, and design to create systems trusted in everyday environments. Together, we focus on thoughtful engineering and building technology that people can rely on.'
        buttonText='Join our Team'
        buttonLink='#'
        backgroundImage='/images/cta/cta-background-about-us.webp'
        backgroundImageDark='/images/cta/cta-background-about-us.webp'
        illustrationImage=''
        illustrationImageDark=''
      />

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

export default AboutUsPage
