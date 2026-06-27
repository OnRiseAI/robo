import { ArrowUpRightIcon } from 'lucide-react'

import Link from 'next/link'

// Component Imports
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'
import { TextShimmer } from '@/components/blocks/text-shimmer'
import { MatterButton } from '@/components/ui/matter-button'

type StatCardData = {
  value: string
  title: string
  description: string
}

type ImageCardData = {
  src: string
  alt: string
  buttonText: string
  buttonLink: string
}

export type AboutUsData = {
  leftImage: ImageCardData
  rightImage: ImageCardData
  stats: StatCardData[]
}

const MissionSection = ({ data }: { data: AboutUsData }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 max-w-5xl space-y-4 sm:mb-16 lg:mb-24'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
            <TextShimmer className='text-sm font-medium uppercase' duration={1.75}>
              Mission
            </TextShimmer>
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-medium sm:text-3xl lg:text-4xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.7 }}
            delay={0.3}
          >
            Simplifying Everyday Living with Robotics
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-lg'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.7 }}
            delay={0.6}
          >
            Our vision is to remove everyday household friction by building robots that handle routine tasks with
            precision, care, and reliability-so people can focus on what truly matters.
          </MotionPreset>
        </div>

        <MotionPreset
          className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
          fade
          blur
          slide={{ direction: 'down', offset: 50 }}
          transition={{ duration: 0.7 }}
          delay={0.9}
        >
          {/* Left Image */}
          <div className='group relative h-142 overflow-hidden rounded-xl'>
            <img
              src={data.leftImage.src}
              alt={data.leftImage.alt}
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute top-6 right-6 flex gap-3'>
              <Button variant='secondary' size='lg' className='hover:bg-secondary/90 rounded-full text-base' asChild>
                <Link href={data.leftImage.buttonLink}>{data.leftImage.buttonText}</Link>
              </Button>
              <MatterButton
                asChild
                className='**:data-[slot=button]:size-9 **:data-[slot=button]:px-0'
                activateOnGroupHover={true}
              >
                <Link aria-label='Link Button' href={data.leftImage.buttonLink}>
                  <ArrowUpRightIcon className='transition-all duration-300 group-hover:rotate-45' />
                </Link>
              </MatterButton>
            </div>
          </div>

          {/* Stats */}
          <div className='grid gap-6'>
            {data.stats.map((stat, index) => (
              <Card key={index} className='shadow-none'>
                <CardContent className='flex h-full flex-col items-center justify-center gap-2.5 text-center'>
                  <h3 className='text-3xl font-semibold lg:text-4xl'>{stat.value}</h3>
                  <div className='text-foreground text-2xl font-medium'>{stat.title}</div>
                  <div className='text-muted-foreground text-lg'>{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Image */}
          <div className='group relative h-142 overflow-hidden rounded-xl md:max-lg:col-span-2'>
            <img
              src={data.rightImage.src}
              alt={data.rightImage.alt}
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute right-6 bottom-6 flex gap-3'>
              <Button variant='secondary' size='lg' className='hover:bg-secondary/90 rounded-full text-base' asChild>
                <Link href={data.rightImage.buttonLink}>{data.rightImage.buttonText}</Link>
              </Button>
              <MatterButton
                asChild
                className='**:data-[slot=button]:size-9 **:data-[slot=button]:px-0'
                activateOnGroupHover={true}
              >
                <Link aria-label='Link Button' href={data.rightImage.buttonLink}>
                  <ArrowUpRightIcon className='transition-all duration-300 group-hover:rotate-45' />
                </Link>
              </MatterButton>
            </div>
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default MissionSection
