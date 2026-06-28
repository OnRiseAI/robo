import type { ReactNode } from 'react'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import type { Navigation } from '@/components/layout/header-navigation'
import { AffiliateDisclosureBanner } from '@/components/affiliate/disclosure-banner'

const navigationData: Navigation[] = [
  {
    title: 'Robot Vacuums',
    href: '/robot-vacuums'
  },
  {
    title: 'Lawn Mowers',
    href: '/robot-lawn-mowers'
  },
  {
    title: 'Pool Cleaners',
    href: '/robot-pool-cleaners'
  },
  {
    title: 'Humanoids',
    href: '/home-humanoids'
  },
  {
    title: 'Deals',
    href: '/deals'
  },
  {
    title: 'Blog',
    href: '/blog'
  }
]

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className='flex flex-col'>
      <AffiliateDisclosureBanner />
      <Header navigationData={navigationData} />
      <main className='flex flex-col overflow-x-clip *:scroll-mt-24'>{children}</main>
      <Footer />
    </div>
  )
}

export default PagesLayout
