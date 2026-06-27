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
    template: 'Demo: %s - Matter | Shadcn Studio',
    default: 'Demo: Matter - Physical Product Landing Page | Shadcn Studio'
  },
  description:
    'Meet Robo, the intelligent home companion designed to simplify household chores with precision AI, smart automation, and sleek humanoid design.',
  robots: 'index,follow',
  keywords: [
    'intelligent home robot',
    'smart home robot',
    'humanoid home companion',
    'household robot',
    'personal home robot',
    'robot'
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
    title: {
      template: 'Demo: %s - Matter | Shadcn Studio',
      default: 'Demo: Matter - Physical Product Landing Page | Shadcn Studio'
    },
    description:
      'Meet Robo, the intelligent home companion designed to simplify household chores with precision AI, smart automation, and sleek humanoid design.',
    type: 'website',
    siteName: 'Matter',
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`,
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Matter - Physical Product Landing Page'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: 'Demo: %s - Matter | Shadcn Studio',
      default: 'Demo: Matter - Physical Product Landing Page | Shadcn Studio'
    },
    description:
      'Meet Robo, the intelligent home companion designed to simplify household chores with precision AI, smart automation, and sleek humanoid design.'
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
