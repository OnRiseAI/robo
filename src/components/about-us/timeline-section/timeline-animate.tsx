'use client'

import { useEffect, useRef } from 'react'

import { motion, useSpring, useTransform } from 'motion/react'

import { ScrollArea } from '@/components/ui/scroll-area'

type TimelineEntry = {
  year: string
  title: string
  content: string
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Smooth scroll progress
  const scrollProgress = useSpring(0, {
    stiffness: 400,
    damping: 40,
    mass: 0.5
  })

  useEffect(() => {
    // Check for viewport height
    const viewport = scrollAreaRef.current?.querySelector('[data-slot="scroll-area-viewport"]') as HTMLElement

    if (!viewport) return

    const handleTimelineScroll = () => {
      const scrollTop = viewport.scrollTop
      const scrollHeight = viewport.scrollHeight
      const clientHeight = viewport.clientHeight

      // Calculate scroll progress (0 to 1)
      const maxScroll = scrollHeight - clientHeight
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0

      scrollProgress.set(progress)
    }

    viewport.addEventListener('scroll', handleTimelineScroll, { passive: true })
    handleTimelineScroll() // Initial check

    return () => viewport.removeEventListener('scroll', handleTimelineScroll)
  }, [scrollProgress])

  // Transform scroll progress to line height
  const lineHeight = useTransform(scrollProgress, [0, 1], ['0%', '100%'])

  return (
    <ScrollArea ref={scrollAreaRef} className='h-108 *:data-[slot=scroll-area-scrollbar]:hidden'>
      <div className='relative space-y-11 pt-2'>
        {/* Timeline Line Container */}
        <div className='absolute top-2 left-2.75 h-full w-0.5'>
          <div className='from-foreground absolute inset-0 bg-linear-to-b to-transparent opacity-70' />

          {/* Animated Gradient Fill */}
          <motion.div
            className='bg-primary absolute top-0 left-0 w-full shadow-[0_0_20px_rgba(var(--primary),0.5)]'
            style={{
              height: lineHeight
            }}
          />
        </div>

        {data.map((item, index) => {
          // Calculate "active" based on scroll progress
          const eventTriggerPoint = index / Math.max(data.length - 1, 1)

          return (
            <TimelineItem
              key={index}
              item={item}
              scrollProgress={scrollProgress}
              eventTriggerPoint={eventTriggerPoint}
            />
          )
        })}
      </div>
    </ScrollArea>
  )
}

const TimelineItem = ({
  item,
  scrollProgress,
  eventTriggerPoint
}: {
  item: TimelineEntry
  scrollProgress: any
  eventTriggerPoint: number
}) => {
  // Transform scroll progress to opacity
  const opacity = useTransform(scrollProgress, [eventTriggerPoint - 0.15, eventTriggerPoint - 0.05], [0.7, 1])

  return (
    <motion.div className='flex gap-6 last:pb-4'>
      {/* Timeline Dot */}
      <motion.span className='bg-muted z-1 flex size-6 shrink-0 items-center justify-center rounded-full'>
        <motion.span
          className='size-3 rounded-full'
          style={{
            backgroundColor: useTransform(
              scrollProgress,
              [eventTriggerPoint - 0.15, eventTriggerPoint - 0.05],
              ['var(--muted-foreground)', 'var(--foreground)']
            )
          }}
        />
      </motion.span>

      {/* Content Section */}
      <motion.div className='w-full flex-1' style={{ opacity }}>
        <h3 className='mb-1.5 font-medium'>
          {item.year} - {item.title}
        </h3>
        <p className='text-muted-foreground'>{item.content}</p>
      </motion.div>
    </motion.div>
  )
}
