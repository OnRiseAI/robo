import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CategoryLandingPage } from '@/components/affiliate/category-landing-page'
import { getCategoryPage } from '@/assets/data/affiliate-pages'

const slug = 'home-humanoids'

export const metadata: Metadata = {
  title: 'Home Humanoid Robots | US Availability Guide',
  description: 'Track home humanoid robots by preorder status, US delivery claims, real household capability, privacy questions, and pricing.'
}

export default function HomeHumanoidsPage() {
  const page = getCategoryPage(slug)

  if (!page) notFound()

  return <CategoryLandingPage page={page} />
}
