'use client'

import { useEffect, useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon, ArrowUpRightIcon } from 'lucide-react'

import Link from 'next/link'

// Component Imports
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { MatterButton } from '@/components/ui/matter-button'
import { MotionPreset } from '@/components/ui/motion-preset'
import { TextShimmer } from '@/components/blocks/text-shimmer'

import { cn } from '@/lib/utils'

type UseCase = {
  badge: string
  image: string
  quote: string
  link: string
}[]

const UseCases = ({ useCases }: { useCases: UseCase }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setTimeout(() => setCurrent(api.selectedScrollSnap()), 0)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <section id='use-cases' className='py-8 sm:py-16 lg:py-24'>
      <Carousel
        className='mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8 xl:gap-24'
        setApi={setApi}
        opts={{
          align: 'start',
          duration: 0
        }}
      >
        <div className='flex flex-col gap-9 md:py-8'>
          <div className='space-y-4'>
            <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
              <TextShimmer className='font-medium uppercase' duration={1.75}>
                Use Cases
              </TextShimmer>
            </MotionPreset>
            <MotionPreset
              component='h2'
              className='text-2xl font-medium sm:text-3xl lg:text-4xl'
              fade
              blur
              delay={0.3}
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.7 }}
            >
              Simplifying Household Chores with Robo
            </MotionPreset>
            <MotionPreset
              component='p'
              className='text-muted-foreground text-lg'
              fade
              blur
              delay={0.6}
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.7 }}
            >
              Let Robo take care of your everyday home tasks, from cleaning to organizing, so you can enjoy more time
              for yourself and your loved ones.
            </MotionPreset>
          </div>

          <div className='flex flex-wrap gap-3.5'>
            {useCases.map((item, index) => (
              <MotionPreset
                key={index}
                fade
                blur
                delay={0.7 + index * 0.05}
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.7 }}
              >
                <Badge
                  variant={current === index ? 'default' : 'outline'}
                  className='h-auto cursor-pointer px-3 py-1 transition-all'
                  onClick={() => scrollTo(index)}
                >
                  {item.badge}
                </Badge>
              </MotionPreset>
            ))}
          </div>

          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            className='flex flex-1 items-end gap-4'
            delay={1.2}
            transition={{ duration: 0.7 }}
          >
            <MatterButton
              onClick={() => api?.scrollPrev()}
              className='**:data-[slot=button]:size-10 **:data-[slot=button]:px-0'
              disabled={!api?.canScrollPrev()}
              aria-label='Previous Button'
            >
              <ChevronLeftIcon className='size-5' />
            </MatterButton>
            <MatterButton
              onClick={() => api?.scrollNext()}
              className='**:data-[slot=button]:size-10 **:data-[slot=button]:px-0'
              disabled={!api?.canScrollNext()}
              aria-label='Next Button'
            >
              <ChevronRightIcon className='size-5' />
            </MatterButton>
          </MotionPreset>
        </div>

        <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
          <CarouselContent className='sm:-ml-6'>
            {useCases.map((item, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  'transition-all duration-500 ease-in sm:pl-6 lg:basis-full',
                  current === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                )}
              >
                {/* Image */}
                <Link href={item.link} className='group relative block overflow-hidden rounded-t-2xl'>
                  <div className='h-100 md:h-150'>
                    <img src={item.image} alt={item.badge} className='size-full object-cover' />
                  </div>

                  <div className='from-background via-background/90 absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent p-8 pt-10'>
                    <div className='flex items-end justify-between gap-4'>
                      <p className='lg:text-lg'>{item.quote}</p>
                      <span aria-label='Learn more' className='transition-transform duration-300 group-hover:rotate-45'>
                        <ArrowUpRightIcon className='size-8' />
                      </span>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </MotionPreset>
      </Carousel>
    </section>
  )
}

export default UseCases
