'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import Spline from '@splinetool/react-spline'

import { ArrowDownIcon, ArrowUpRightIcon, CpuIcon, WifiIcon } from 'lucide-react'

import { motion } from 'motion/react'

// Component Imports
import { MotionPreset } from '@/components/ui/motion-preset'
import { TextScramble } from '@/components/blocks/text-scramble'
import { SpinningText } from '@/components/blocks/spinning-text'
import { MatterButton } from '@/components/ui/matter-button'

import Robo from '@/assets/svg/robo'
import InfoSvg from '@/components/blocks/hero-section/info-svg'
import FeatureSection from '@/components/blocks/features-section/features-section'

import { cn } from '@/lib/utils'

const HeroSection = () => {
  const [hoveredDot1, setHoveredDot1] = useState<boolean>(false)
  const [hoveredDot2, setHoveredDot2] = useState<boolean>(false)
  const [hoveredDot3, setHoveredDot3] = useState<boolean>(false)
  const [hoveredDot4, setHoveredDot4] = useState<boolean>(false)
  const [showDots, setShowDots] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setHoveredDot1(true)
    }, 3100)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Show dots after scrolling down approximately 40% of the viewport height
      const scrollThreshold = window.innerHeight * 0.75

      setShowDots(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id='home' className='relative flex flex-1 flex-col pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pb-12'>
      <div className='z-2 lg:sticky lg:top-245 lg:left-1/2 lg:h-0 lg:w-full'>
        <div className='absolute left-1/2 aspect-[2.1] w-full max-w-400 -translate-x-1/2 max-lg:top-[13%] max-md:top-[14%] max-sm:top-[20%] max-sm:aspect-[1.9] lg:bottom-0 lg:aspect-[1.6] xl:aspect-2/1'>
          <Spline scene='https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode' />
          <div className='from-background absolute inset-x-0 -bottom-0.5 h-10 bg-linear-to-t to-transparent' />

          {showDots && (
            <MotionPreset
              fade
              delay={0.2}
              transition={{ duration: 0.5 }}
              inView={false}
              className='absolute top-32 left-1/2 -translate-x-1/2 hover:z-1 max-xl:hidden'
            >
              <div
                className={cn('group relative size-7.5 animate-pulse rounded-full bg-white/40 p-1', {
                  'animate-none': hoveredDot1
                })}
                onMouseEnter={() => {
                  setHoveredDot1(true)
                  setHoveredDot2(false)
                  setHoveredDot3(false)
                  setHoveredDot4(false)
                }}
                onMouseLeave={() => setHoveredDot1(false)}
              >
                <div className='size-5.5 rounded-full bg-white' />
                <div
                  className={cn(
                    'absolute top-4 left-4 -z-1',
                    hoveredDot1 ? 'inline-block' : 'hidden group-hover:inline-block'
                  )}
                >
                  <div className='relative'>
                    <InfoSvg className='text-border' isHovered={hoveredDot1} />
                    <motion.div
                      key={hoveredDot1 ? 'visible' : 'hidden'}
                      className='bg-background absolute top-25 right-5 w-full min-w-sm translate-x-full space-y-2.5 rounded-lg rounded-tl-4xl rounded-br-4xl border px-5 py-9 shadow-md [corner-bottom-right-shape:superellipse(0)] [corner-top-left-shape:superellipse(0)] before:absolute before:inset-0 before:bottom-1/4 before:left-1/6 before:-z-1 before:-translate-x-full before:-translate-y-[54%]'
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={hoveredDot1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: 'easeInOut'
                      }}
                    >
                      <h6 className='text-2xl font-medium'>Precision Optics</h6>
                      <p className='text-muted-foreground mb-6'>
                        Equipped with high-resolution cameras and advanced depth sensors, the robot captures its
                        surroundings with exceptional clarity, allowing it to navigate complex environments effectively.
                      </p>
                      <MatterButton asChild>
                        <Link href='#'>
                          Learn more
                          <ArrowUpRightIcon />
                        </Link>
                      </MatterButton>
                    </motion.div>
                  </div>
                </div>
              </div>
            </MotionPreset>
          )}

          {showDots && (
            <MotionPreset
              fade
              delay={0.4}
              transition={{ duration: 0.5 }}
              inView={false}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:z-1 max-xl:hidden'
            >
              <div
                className={cn('group relative size-7.5 animate-pulse rounded-full bg-white/40 p-1 delay-500', {
                  'animate-none': hoveredDot2
                })}
                onMouseEnter={() => {
                  setHoveredDot2(true)
                  setHoveredDot1(false)
                  setHoveredDot3(false)
                  setHoveredDot4(false)
                }}
                onMouseLeave={() => setHoveredDot2(false)}
              >
                <div className='size-5.5 rounded-full bg-white' />

                <div
                  className={cn(
                    'absolute bottom-10 left-0 -z-1',
                    hoveredDot2 ? 'inline-block' : 'hidden group-hover:inline-block'
                  )}
                >
                  <div className='relative'>
                    <InfoSvg className='text-border -rotate-60' isHovered={hoveredDot2} />
                    <motion.div
                      key={hoveredDot2 ? 'visible' : 'hidden'}
                      className='bg-background absolute -top-25 right-5 w-full min-w-sm translate-x-full space-y-2.5 rounded-lg rounded-tl-4xl rounded-br-4xl border px-5 py-9 shadow-md [corner-bottom-right-shape:superellipse(0)] [corner-top-left-shape:superellipse(0)] before:absolute before:inset-0 before:top-1/4 before:left-1/6 before:-z-1 before:-translate-x-full'
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={hoveredDot2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                        ease: 'easeInOut'
                      }}
                    >
                      <h6 className='text-2xl font-medium'>Intelligent Core</h6>
                      <p className='text-muted-foreground mb-6'>
                        The central processing unit powers the robot&apos;s decision-making, AI behaviour, and complex
                        task execution.
                      </p>
                      <MatterButton asChild>
                        <Link href='#'>
                          Learn more
                          <ArrowUpRightIcon />
                        </Link>
                      </MatterButton>
                    </motion.div>
                  </div>
                </div>
              </div>
            </MotionPreset>
          )}

          {showDots && (
            <MotionPreset
              fade
              delay={0.6}
              transition={{ duration: 0.5 }}
              inView={false}
              className='absolute top-[44%] left-[57%] -translate-x-1/2 -translate-y-1/2 hover:z-1 max-xl:hidden'
            >
              <div
                className={cn('group relative size-7.5 animate-pulse rounded-full bg-white/40 p-1 delay-700', {
                  'animate-none': hoveredDot3
                })}
                onMouseEnter={() => {
                  setHoveredDot3(true)
                  setHoveredDot1(false)
                  setHoveredDot2(false)
                  setHoveredDot4(false)
                }}
                onMouseLeave={() => setHoveredDot3(false)}
              >
                <div className='size-5.5 rounded-full bg-white' />

                <div
                  className={cn(
                    'absolute bottom-22.5 -left-15 -z-1',
                    hoveredDot3 ? 'inline-block' : 'hidden group-hover:inline-block'
                  )}
                >
                  <div className='relative'>
                    <InfoSvg className='text-border -rotate-90' isHovered={hoveredDot3} />
                    <motion.div
                      key={hoveredDot3 ? 'visible' : 'hidden'}
                      className='bg-background absolute top-20 right-20 w-full min-w-sm translate-x-full -translate-y-full space-y-2.5 rounded-lg rounded-tl-4xl rounded-br-4xl border px-5 py-9 shadow-md [corner-bottom-right-shape:superellipse(0)] [corner-top-left-shape:superellipse(0)] before:absolute before:inset-0 before:bottom-1/4 before:left-1/4 before:-z-1 before:-translate-x-full before:translate-y-full'
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={hoveredDot3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                        ease: 'easeInOut'
                      }}
                    >
                      <h6 className='text-2xl font-medium'>Adaptive Movement</h6>
                      <p className='text-muted-foreground mb-6'>
                        State-of-the-art actuators in the shoulder joints allow fluid, natural, and responsive motion.
                      </p>
                      <MatterButton asChild>
                        <Link href='#'>
                          Learn more
                          <ArrowUpRightIcon />
                        </Link>
                      </MatterButton>
                    </motion.div>
                  </div>
                </div>
              </div>
            </MotionPreset>
          )}

          {showDots && (
            <MotionPreset
              fade
              delay={0.8}
              transition={{ duration: 0.5 }}
              inView={false}
              className='absolute top-[77%] left-[54%] -translate-x-1/2 -translate-y-1/2 hover:z-1 max-xl:hidden'
            >
              <div
                className={cn('group size-7.5 animate-pulse rounded-full bg-white/40 p-1 delay-200', {
                  'animate-none': hoveredDot4
                })}
                onMouseEnter={() => {
                  setHoveredDot4(true)
                  setHoveredDot1(false)
                  setHoveredDot2(false)
                  setHoveredDot3(false)
                }}
                onMouseLeave={() => setHoveredDot4(false)}
              >
                <div className='size-5.5 rounded-full bg-white' />

                <div
                  className={cn(
                    'absolute -top-2 -left-10 -z-1',
                    hoveredDot4 ? 'inline-block' : 'hidden group-hover:inline-block'
                  )}
                >
                  <div className='relative'>
                    <InfoSvg className='text-border scale-60' isHovered={hoveredDot4} />
                    <motion.div
                      key={hoveredDot4 ? 'visible' : 'hidden'}
                      className='bg-background absolute -top-5 right-17 w-full min-w-sm translate-x-full space-y-2.5 rounded-lg rounded-tl-4xl rounded-br-4xl border px-5 py-9 shadow-md [corner-bottom-right-shape:superellipse(0)] [corner-top-left-shape:superellipse(0)] before:absolute before:inset-0 before:left-[30%] before:-z-1 before:-translate-x-full'
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={hoveredDot4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: 'easeIn'
                      }}
                    >
                      <h6 className='text-2xl font-medium'>Dynamic Balance</h6>
                      <ul className='text-muted-foreground mb-6 list-disc pl-6'>
                        <li>Distributes weight intelligently during motion.</li>
                        <li>Maintain stability on uneven or shifting surfaces.</li>
                      </ul>
                      <MatterButton asChild>
                        <Link href='#'>
                          Learn more
                          <ArrowUpRightIcon />
                        </Link>
                      </MatterButton>
                    </motion.div>
                  </div>
                </div>
              </div>
            </MotionPreset>
          )}
        </div>
      </div>

      <div className='mx-auto flex max-w-7xl flex-1 flex-col justify-between gap-24 px-4 sm:px-6 lg:gap-31 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8'>
          <MotionPreset
            component='h1'
            fade
            delay={3.9}
            transition={{ duration: 0.5 }}
            inView={false}
            className='line-clamp-3 text-2xl font-semibold sm:text-3xl lg:text-6xl'
          >
            <TextScramble delay={3.9}>Your Intelligent Home Companion</TextScramble>
          </MotionPreset>

          <MotionPreset
            component='p'
            fade
            delay={4.75}
            transition={{ duration: 0.5 }}
            inView={false}
            className='text-muted-foreground text-base lg:text-xl'
          >
            Built with next-gen adaptive intelligence and precision engineering, Robo learns your routines, anticipates
            your needs, and works seamlessly with your smart ecosystem.
          </MotionPreset>
        </div>

        <MotionPreset
          className='relative flex aspect-128/29 items-center'
          inView={false}
          motionProps={{
            initial: { opacity: 0 },
            animate: { opacity: [0, 1, 0.3, 1, 0.3, 1] },
            transition: { duration: 1.2, times: [0, 0.1, 0.3, 0.5, 0.7, 1], delay: 2.8 }
          }}
        >
          <Robo className='absolute inset-x-0 w-full' />
        </MotionPreset>

        <MotionPreset
          fade
          slide={{ direction: 'down' }}
          delay={5}
          transition={{ duration: 0.5 }}
          inView={false}
          className='flex items-start justify-between gap-6 overflow-hidden max-lg:z-2'
        >
          <div className='divide-border grid grid-cols-2 divide-x max-md:w-full'>
            <div className='space-y-5.5 p-4 pl-0 md:max-w-38'>
              <div className='space-y-1'>
                <h2>Connectivity</h2>
                <p className='text-muted-foreground text-sm font-light'>seamless integration across devices.</p>
              </div>
              <div className='flex items-center gap-2.5'>
                <WifiIcon className='size-6' />
                <span className='text-xl'>Wi-Fi 6</span>
              </div>
            </div>
            <div className='space-y-5.5 p-4 pr-0 md:max-w-38'>
              <div className='space-y-1'>
                <h2>Core Processor</h2>
                <p className='text-muted-foreground text-sm font-light'>Optimized for adaptive home AI.</p>
              </div>
              <div className='flex items-center gap-2.5'>
                <CpuIcon className='size-6' />
                <span className='text-xl'>A75 CPU</span>
              </div>
            </div>
          </div>

          <div className='border-foreground relative grid size-42.5 place-content-center rounded-full border max-md:hidden'>
            <div className='border-foreground grid size-26.25 place-content-center rounded-full border'>
              <ArrowDownIcon className='z-10 size-18.25 stroke-[1.5]' />
            </div>
            <div className='absolute inset-0 w-full translate-y-1/2'>
              <SpinningText className='z-10' radius={6.375}>
                Scroll down ✦ Scroll down ✦ Scroll down ✦
              </SpinningText>
            </div>
          </div>
        </MotionPreset>
      </div>

      <FeatureSection />
    </section>
  )
}

export default HeroSection
