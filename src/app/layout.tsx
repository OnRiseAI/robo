import type { ReactNode } from 'react'

import { Geist, Geist_Mono, Orbitron } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: '%s | Home Robot Guide',
    default: 'Home Robot Guide | Humanoid Robot Availability Tracker'
  },
  description:
    'US humanoid robot availability tracker with prices, preorder status, official links, videos, source notes, privacy cautions, and buyer guides.',
  robots: 'index,follow',
  keywords: [
    'humanoid robots for sale',
    'humanoid robot preorder',
    'home humanoid robot',
    '1X NEO',
    'Unitree G1',
    'Tesla Optimus',
    'Figure 03'
  ],
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`),
  openGraph: {
    title: 'Home Robot Guide | Humanoid Robot Availability Tracker',
    description:
      'Compare humanoid robots by US availability, preorder status, price, official links, videos, source notes, and buyer risk.',
    type: 'website',
    siteName: 'Home Robot Guide',
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`,
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Home Robot Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Robot Guide | Humanoid Robot Availability Tracker',
    description: 'US humanoid robot tracker for preorders, prices, official links, and buyer cautions.'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(
        geistSans.variable,
        geistMono.variable,
        orbitron.variable,
        'flex min-h-full w-full scroll-smooth antialiased'
      )}
      data-scroll-behavior='smooth'
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false} disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
