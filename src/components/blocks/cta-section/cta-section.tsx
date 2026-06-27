import { ArrowRightIcon } from 'lucide-react'

import Link from 'next/link'

// Component Imports
import { MatterButton } from '@/components/ui/matter-button'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

interface CTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  backgroundImage?: string
  backgroundImageDark?: string
  illustrationImage?: string
  illustrationImageDark?: string
}

const CTA = ({
  title = 'Ready to Revolutionize Your Home with Robo?',
  description = "Our advanced robot is here to transform the way you handle everyday tasks. From cleaning to fixing, it's the ultimate home assistant that makes life easier and more efficient.",
  buttonText = 'Schedule a Demo',
  buttonLink = '/schedule-demo',
  backgroundImage = '/images/cta/cta-bg.webp',
  backgroundImageDark = '/images/cta/cta-bg-dark.webp',
  illustrationImage = '/images/cta/cta-illustration.webp',
  illustrationImageDark = '/images/cta/cta-illustration-dark.webp'
}: CTAProps) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
          <Card className='group relative z-1 overflow-hidden rounded-2xl py-0 shadow-none ring-0'>
            <div className='absolute inset-0 -z-1'>
              <img
                src={backgroundImage}
                alt='background home assistant robot'
                className='h-full w-full object-cover dark:hidden'
              />
              <img
                src={backgroundImageDark}
                alt='background home assistant robot dark'
                className='hidden h-full w-full object-cover dark:block'
              />
            </div>
            <CardContent className='lg:px-14'>
              <div className='grid h-full min-h-108 grid-cols-1 items-end gap-5 lg:grid-cols-2 lg:gap-10'>
                {/* Left Column - Content */}
                <div className='flex h-full flex-col justify-center space-y-8 py-6 text-white'>
                  <h2 className='text-2xl font-medium sm:text-3xl lg:text-4xl'>{title}</h2>

                  <p className='text-base opacity-80 md:text-xl'>{description}</p>

                  <div>
                    <MatterButton asChild>
                      <Link href={buttonLink}>
                        {buttonText}
                        <ArrowRightIcon className='h-4 w-4 -rotate-45' />
                      </Link>
                    </MatterButton>
                  </div>
                </div>

                {/* Right Column - Image */}
                {(illustrationImage || illustrationImageDark) && (
                  <div className='relative pt-6'>
                    <img
                      src={illustrationImage}
                      alt='Robot with person'
                      className='w-full object-cover transition-transform duration-300 group-hover:scale-105 max-lg:mx-auto max-lg:max-w-100 dark:hidden'
                    />
                    <img
                      src={illustrationImageDark}
                      alt='Robot with person dark'
                      className='hidden w-full object-cover transition-transform duration-300 group-hover:scale-105 dark:block'
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </MotionPreset>
      </div>
    </section>
  )
}

export default CTA
