import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CategoryLandingPage } from '@/components/affiliate/category-landing-page'
import { getCategoryPage } from '@/assets/data/affiliate-pages'

const slug = 'robot-pool-cleaners'

export const metadata: Metadata = {
  title: 'Robotic Pool Cleaners | US Buyer Guide',
  description: 'Compare robotic pool cleaners by pool type, cordless vs corded design, wall and waterline cleaning, battery warranty, and summer deals.'
}

export default function RobotPoolCleanersPage() {
  const page = getCategoryPage(slug)

  if (!page) notFound()

  return <CategoryLandingPage page={page} />
}
