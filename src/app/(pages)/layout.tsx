import type { ReactNode } from 'react'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import type { Navigation } from '@/components/layout/header-navigation'

const navigationData: Navigation[] = [
  {
    title: 'Features',
    href: '/#features'
  },
  {
    title: 'Use Cases',
    href: '/#use-cases'
  },
  {
    title: 'About Us',
    href: '/about-us'
  },
  {
    title: 'FAQs',
    href: '/faqs'
  },
  {
    title: 'Blog',
    href: '/blog'
  }
]

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className='flex flex-col'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col overflow-x-clip *:scroll-mt-24'>{children}</main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default PagesLayout
