import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

// Component Imports
import { MotionPreset } from '@/components/ui/motion-preset'
import { TextShimmer } from '@/components/blocks/text-shimmer'
import { MatterButton } from '@/components/ui/matter-button'
import { NumberTicker } from '@/components/ui/number-ticker'

import { Timeline } from '@/components/about-us/timeline-section/timeline-animate'

export type Stat = {
  value: number
  description: string
}

export type TimelineEvent = {
  year: string
  title: string
  content: string
}

const TimelineSection = ({ stats, timelineEvents }: { stats: Stat[]; timelineEvents: TimelineEvent[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
          <TextShimmer className='text-sm font-medium uppercase' duration={1.75}>
            Timeline
          </TextShimmer>
        </MotionPreset>

        <div className='mt-4 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16'>
          {/* Left Column - Header & Stats */}
          <div className='flex flex-col justify-between gap-12 lg:gap-16'>
            {/* Header */}
            <div className='space-y-4'>
              <MotionPreset
                component='h2'
                className='text-2xl font-medium sm:text-3xl lg:text-4xl'
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.7 }}
                delay={0.3}
              >
                Backstory and timeline
              </MotionPreset>

              <MotionPreset
                className='text-muted-foreground space-y-1 text-lg'
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.7 }}
                delay={0.6}
              >
                <p className='text-foreground'>Our journey is rooted in a single goal:</p>
                <p>
                  To build intelligent machines that seamlessly support everyday life. Over the years, we&apos;ve
                  evolved from early experimentation into a robotics company.
                </p>
              </MotionPreset>

              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.7 }}
                delay={0.9}
              >
                <MatterButton asChild>
                  <Link href='#'>
                    Read more
                    <ArrowRightIcon />
                  </Link>
                </MatterButton>
              </MotionPreset>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-1 gap-4 max-sm:divide-y sm:grid-cols-3 sm:divide-x'>
              {stats.map((stat, index) => (
                <MotionPreset
                  className='flex flex-col gap-2 max-sm:pb-4'
                  fade
                  blur
                  slide={{ direction: 'down', offset: 50 }}
                  delay={0.7 + index * 0.2}
                  transition={{ duration: 0.7 }}
                  key={index}
                >
                  <div className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
                    <NumberTicker startValue={0} value={stat.value} delay={0.8 + index * 0.2} stiffness={170} />+
                  </div>
                  <p className='text-muted-foreground text-sm'>{stat.description}</p>
                </MotionPreset>
              ))}
            </div>
          </div>

          <MotionPreset
            className='relative h-fit'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.7 }}
            delay={0.3}
          >
            <div className='from-background absolute inset-x-0 top-0 z-1 h-5 bg-linear-to-b to-transparent' />

            <Timeline data={timelineEvents} />

            <div className='from-background absolute inset-x-0 bottom-0 h-10 bg-linear-to-t to-transparent' />
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
