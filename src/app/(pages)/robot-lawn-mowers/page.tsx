import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CategoryLandingPage } from '@/components/affiliate/category-landing-page'
import { getCategoryPage } from '@/assets/data/affiliate-pages'

const slug = 'robot-lawn-mowers'

export const metadata: Metadata = {
  title: 'Robot Lawn Mowers | US Buyer Guide',
  description: 'Compare robot lawn mowers by lawn size, RTK setup, boundary wire needs, slope handling, US warranty, and price.'
}

export default function RobotLawnMowersPage() {
  const page = getCategoryPage(slug)

  if (!page) notFound()

  return <CategoryLandingPage page={page} />
}
