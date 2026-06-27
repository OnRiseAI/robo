'use client'

import { ArrowUpRightIcon } from 'lucide-react'

import Link from 'next/link'

// Component Imports
import { MatterButton } from '@/components/ui/matter-button'
import { MotionPreset } from '@/components/ui/motion-preset'
import { TextScramble } from '@/components/blocks/text-scramble'

const HeroSection = () => {
  return (
    <section className='relative flex flex-1 flex-col py-8 sm:py-16 lg:py-24'>
      <div className='relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='space-y-16'>
          <div className='max-w-2xl space-y-4'>
            <MotionPreset
              component='h1'
              fade
              transition={{ duration: 0.5 }}
              inView={false}
              className='text-2xl font-semibold sm:line-clamp-2 sm:text-3xl lg:text-6xl'
            >
              <TextScramble>Designing Robots That Care for Everyday Life</TextScramble>
            </MotionPreset>

            <MotionPreset
              component='p'
              fade
              blur
              transition={{ duration: 0.7 }}
              delay={0.2}
              className='text-muted-foreground text-xl'
            >
              Built on adaptive intelligence and precision engineering, we create home robots that understand routines,
              anticipate needs, and quietly make life easier—every single day.
            </MotionPreset>

            <MotionPreset fade blur transition={{ duration: 0.7 }} delay={0.2}>
              <MatterButton asChild>
                <Link href='#'>
                  Learn more
                  <ArrowUpRightIcon />
                </Link>
              </MatterButton>
            </MotionPreset>
          </div>

          <MotionPreset
            className='flex flex-wrap gap-y-5'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.7 }}
            delay={0.3}
          >
            <div className='relative flex w-full max-w-60 flex-col items-center gap-1.5 text-center'>
              <p className='font-medium'>Global Innovation</p>
              <p className='text-muted-foreground text-xs'>Recognised in 2024 for redefining intelligent household </p>
              <img src='/images/award.webp' alt='Award' className='-mt-9 object-contain dark:hidden' />
              <img
                src='/images/award-dark.webp'
                alt='Award'
                className='-mt-9 hidden object-contain dark:inline-block'
              />
            </div>
            <div className='relative flex w-full max-w-60 flex-col items-center gap-1.5 text-center'>
              <p className='font-medium'>Consumer AI Design</p>
              <p className='text-muted-foreground text-xs'>Awarded for seamless integration of adaptive intelligence</p>
              <img src='/images/award.webp' alt='Award' className='-mt-9 object-contain dark:hidden' />
              <img
                src='/images/award-dark.webp'
                alt='Award'
                className='-mt-9 hidden object-contain dark:inline-block'
              />
            </div>
          </MotionPreset>
        </div>

        <MotionPreset
          className='absolute right-0 bottom-0 -z-1 max-lg:hidden lg:pe-8 lg:max-xl:max-w-lg xl:max-w-170'
          fade
          blur
          transition={{ duration: 0.9 }}
          delay={0.3}
        >
          <div className='relative'>
            <img src='/images/about-us-hero-illustration.webp' alt='About us hero illustration' />
            <div className='from-background absolute inset-x-0 bottom-0 h-25 bg-linear-to-t to-transparent' />
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
