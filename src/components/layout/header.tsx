'use client'

import { useState, useEffect } from 'react'

import { ArrowUpRightIcon } from 'lucide-react'

import Link from 'next/link'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { MatterButton } from '@/components/ui/matter-button'
import { MotionPreset } from '@/components/ui/motion-preset'

import { HeaderNavigation, HeaderNavigationSmallScreen } from '@/components/layout/header-navigation'
import type { Navigation } from '@/components/layout/header-navigation'

import { ModeToggle } from '@/components/layout/mode-toggle'
import Logo from '@/assets/svg/logo'

import { cn } from '@/lib/utils'

type HeaderProps = {
  navigationData: Navigation[]
  className?: string
  screenSize?: number
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <MotionPreset component='header' fade inView={false} className={cn('sticky top-0 z-50 h-24 w-full', className)}>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-center px-4 transition-all duration-500 sm:px-6 lg:px-8'>
        <div
          className={cn(
            'flex w-full items-center justify-between gap-4 rounded-full border-2 border-transparent py-2.5 transition-all duration-500',
            isScrolled &&
              'border-background outline-border before:bg-background/40 relative px-4 outline-1 before:absolute before:inset-0 before:-z-1 before:size-full before:rounded-full before:backdrop-blur-sm sm:px-6 xl:px-8'
          )}
        >
          {/* Logo */}
          <Link href='/#home'>
            <div className='flex items-center gap-3'>
              <Logo className='size-8' />
              <span className='text-foreground font-[Orbitron] text-[1.75rem] leading-6.5 font-extrabold max-[450px]:hidden'>
                Matter
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <HeaderNavigation navigationData={navigationData} className='max-lg:hidden' isScrolled={isScrolled} />

          {/* Navigation for small screens */}
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <ModeToggle />
              <MatterButton className='max-sm:hidden' asChild>
                <Link href='/preorder-tracker'>
                  Preorder tracker
                  <ArrowUpRightIcon />
                </Link>
              </MatterButton>
            </div>

            <Tooltip>
              <TooltipTrigger className='sm:hidden' asChild>
                <MatterButton asChild className='size-12 sm:hidden [&>a]:size-10 [&>a]:px-0'>
                  <Link href='/preorder-tracker'>
                    <ArrowUpRightIcon />
                    <span className='sr-only'>Preorder tracker</span>
                  </Link>
                </MatterButton>
              </TooltipTrigger>
              <TooltipContent>Preorder tracker</TooltipContent>
            </Tooltip>

            <HeaderNavigationSmallScreen
              triggerClassName='**:data-[slot=sheet-trigger]:size-10 **:data-[slot=sheet-trigger]:px-0'
              navigationData={navigationData}
            />
          </div>
        </div>
      </div>
    </MotionPreset>
  )
}

export default Header
