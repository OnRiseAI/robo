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
    default: 'Home Robot Guide | US Buyer Guides for Household Robots'
  },
  description:
    'US buyer guides for home robots Americans can actually buy, with prices, availability, smart-home fit, privacy notes, warranties, and affiliate deal tracking.',
  robots: 'index,follow',
  keywords: [
    'best robot vacuum',
    'robot lawn mower',
    'robotic pool cleaner',
    'robot window cleaner',
    'home humanoid robot',
    'home robots'
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
    title: 'Home Robot Guide | US Buyer Guides for Household Robots',
    description:
      'Compare home robots by US availability, price, smart-home fit, privacy, warranty, and deal timing.',
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
    title: 'Home Robot Guide | US Buyer Guides for Household Robots',
    description: 'US buyer guides for home robots Americans can actually buy.'
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
