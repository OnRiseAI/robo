import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CategoryLandingPage } from '@/components/affiliate/category-landing-page'
import { getCategoryPage } from '@/assets/data/affiliate-pages'

const slug = 'robot-window-cleaners'

export const metadata: Metadata = {
  title: 'Robot Window Cleaners | US Buyer Guide',
  description: 'Compare robot window cleaners by safety setup, glass compatibility, suction reliability, pad maintenance, and US availability.'
}

export default function RobotWindowCleanersPage() {
  const page = getCategoryPage(slug)

  if (!page) notFound()

  return <CategoryLandingPage page={page} />
}
