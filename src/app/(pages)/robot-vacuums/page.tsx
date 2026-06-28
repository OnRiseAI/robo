import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CategoryLandingPage } from '@/components/affiliate/category-landing-page'
import { getCategoryPage } from '@/assets/data/affiliate-pages'

const slug = 'robot-vacuums'

export const metadata: Metadata = {
  title: 'Robot Vacuums | US Buyer Guide',
  description: 'Compare robot vacuums by US availability, pet hair performance, smart-home compatibility, privacy notes, price, and warranty.'
}

export default function RobotVacuumsPage() {
  const page = getCategoryPage(slug)

  if (!page) notFound()

  return <CategoryLandingPage page={page} />
}
