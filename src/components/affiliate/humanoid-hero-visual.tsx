'use client'

import Spline from '@splinetool/react-spline'

import Robo from '@/assets/svg/robo'

export function HumanoidHeroVisual() {
  return (
    <div className='relative min-h-100 overflow-hidden rounded-3xl border bg-card shadow-2xl lg:min-h-150'>
      <Robo className='text-primary absolute -bottom-8 left-1/2 w-[140%] -translate-x-1/2 opacity-80' />
      <div className='absolute inset-0 bg-radial from-primary/20 via-transparent to-transparent' />
      <Spline scene='https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode' />
      <div className='from-background/90 absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent p-6'>
        <div className='rounded-2xl border bg-background/70 p-4 backdrop-blur-md'>
          <p className='text-sm font-medium'>Humanoid availability tracker</p>
          <p className='text-muted-foreground mt-1 text-xs'>Preorder, buyable, enterprise-only, or not for sale, checked before we call anything a home robot.</p>
        </div>
      </div>
    </div>
  )
}
