import type { ReactNode } from 'react'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import type { Navigation } from '@/components/layout/header-navigation'
import { AffiliateDisclosureBanner } from '@/components/affiliate/disclosure-banner'

const navigationData: Navigation[] = [
  {
    title: 'Humanoids',
    href: '/home-humanoids'
  },
  {
    title: 'For Sale',
    href: '/humanoid-robots-for-sale'
  },
  {
    title: 'Preorders',
    href: '/preorder-tracker'
  },
  {
    title: '1X vs Unitree',
    href: '/compare/1x-neo-vs-unitree-g1'
  },
  {
    title: 'Best',
    href: '/best/best-home-humanoid-robots'
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
