'use client'

import { MoonStarIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { MatterButton } from '@/components/ui/matter-button'

const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <MatterButton
      className='relative **:data-[slot=button]:size-10 **:data-[slot=button]:px-0'
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      <MoonStarIcon className='scale-100 dark:scale-0' />
      <SunIcon className='absolute scale-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </MatterButton>
  )
}

export { ModeToggle }
