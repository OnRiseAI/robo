import { ArrowUpRightIcon } from 'lucide-react'

import Link from 'next/link'

// Component Imports
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { TextShimmer } from '@/components/blocks/text-shimmer'
import { MatterButton } from '@/components/ui/matter-button'
import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'

import Card3DEffect from '@/components/blocks/testimonials-component/card-3d-effect'

const TestimonialsComponent = () => {
  return (
    <section id='testimonials' className='relative overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 md:gap-16 lg:gap-24 lg:px-8'>
        {/* Header Content */}
        <div className='flex items-end justify-between gap-16 max-md:flex-col'>
          <div className='space-y-4'>
            <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
              <TextShimmer className='text-sm font-medium uppercase' duration={1.75}>
                Testimonials
              </TextShimmer>
            </MotionPreset>
            <MotionPreset
              component='h2'
              className='text-2xl font-medium sm:text-3xl lg:text-4xl'
              fade
              blur
              delay={0.3}
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              Chosen by Most Influential
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
              See how globally recognized personalities use robo to elevate their daily lives.
            </MotionPreset>
          </div>
          <MotionPreset fade blur delay={0.6} slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <MatterButton asChild>
              <Link href='#'>
                View all reviews <ArrowUpRightIcon />
              </Link>
            </MatterButton>
          </MotionPreset>
        </div>

        {/* Reviews */}
        <MotionPreset
          fade
          blur
          delay={0.9}
          slide={{ direction: 'down', offset: 50 }}
          transition={{ duration: 0.5 }}
          className='relative grid sm:grid-cols-2 lg:grid-cols-3'
        >
          <div className='from-background absolute top-0 z-1 h-13 w-full bg-linear-to-b to-transparent' />

          {/* First Column */}
          <Marquee vertical pauseOnHover delay={0.9} duration={70} gap={2} className='h-225 px-4'>
            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(/images/testimonial/image-1.webp)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-linear-to-t from-55% to-transparent px-6 pb-6'>
                  <img src='/images/brand-logo/twitter.webp' alt='twitter' className='w-5.5 rounded-sm' />
                  <p>
                    The level of precision and reliability is remarkable. It feels like having an intelligent partner
                    rather than a machine.
                  </p>
                  <span className='text-muted-foreground'>@mark</span>
                </div>
              </div>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='/images/testimonial/avatar-1.webp' alt='Chánh Đại' />
                        <AvatarFallback className='text-sm'>CD</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='text-base font-semibold'>Chánh Đại</h4>
                        <p className='text-muted-foreground text-base'>@iamncdai</p>
                      </div>
                    </div>
                  </div>
                  <img src='/images/brand-logo/thread.webp' alt='thread' className='w-5.5 rounded-sm' />
                </div>
                <CardContent className='flex flex-col gap-4 px-6'>
                  <p className='text-base'>
                    Robo is more than just a cleaning robot. It&apos;s a true helper. It has made home maintenance
                    easier, and I can rely on it for much more than I ever expected.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>Apr 20 2025</span>
                </CardContent>
              </Card>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(/images/testimonial/image-2.webp)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-linear-to-t from-55% to-transparent px-6 pb-6'>
                  <img src='/images/brand-logo/thread.webp' alt='thread' className='w-5.5 rounded-sm' />
                  <p>
                    It seamlessly adapts to my daily routine and anticipates needs. This is what smart home technology
                    should be.
                  </p>
                  <span className='text-muted-foreground'>@Zoya</span>
                </div>
              </div>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='/images/testimonial/avatar-2.webp' alt='Moumen Soliman' />
                        <AvatarFallback className='text-sm'>MS</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='text-base font-semibold'>Moumen Soliman</h4>
                        <p className='text-muted-foreground text-base'>@moumensoliman</p>
                      </div>
                    </div>
                  </div>
                  <img src='/images/brand-logo/reddit.webp' alt='reddit' className='w-5.5' />
                </div>
                <CardContent className='flex flex-col gap-4 px-6'>
                  <p className='text-base'>
                    Every feature works flawlessly and saves me hours each week. It&apos;s transformed how I manage my
                    home and exceeded all my expectations.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>Aug 15 2024</span>
                </CardContent>
              </Card>
            </Card3DEffect>
          </Marquee>

          {/* Second Column */}
          <Marquee vertical pauseOnHover delay={0.9} duration={70} gap={2} reverse className='h-225 px-4 max-sm:hidden'>
            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='/images/testimonial/avatar-3.webp' alt='Praveen' />
                        <AvatarFallback className='text-sm'>PJ</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='text-base font-semibold'>Praveen Juge</h4>
                        <p className='text-muted-foreground text-base'>@praveenjuge</p>
                      </div>
                    </div>
                  </div>
                  <img src='/images/brand-logo/reddit.webp' alt='reddit' className='w-5.5' />
                </div>
                <CardContent className='flex flex-col gap-4 px-6'>
                  <p className='text-base'>
                    I was skeptical at first, but Robo exceeded my expectations. It handles everything from cleaning the
                    floors to small repairs. My house has never been more organized.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>Mar 12 2025</span>
                </CardContent>
              </Card>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(/images/testimonial/image-3.webp)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-linear-to-t from-55% to-transparent px-6 pb-6'>
                  <img src='/images/brand-logo/thread.webp' alt='thread' className='w-5.5 rounded-sm' />
                  <p>
                    The level of precision and reliability is remarkable. It feels like having an intelligent partner
                    rather than a machine.
                  </p>
                  <span className='text-muted-foreground'>@jeffff</span>
                </div>
              </div>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='/images/testimonial/avatar-4.webp' alt='David Haz' />
                        <AvatarFallback className='text-sm'>DH</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='text-base font-semibold'>David Haz</h4>
                        <p className='text-muted-foreground text-base'>@davidhdev</p>
                      </div>
                    </div>
                  </div>
                  <img src='/images/brand-logo/twitter.webp' alt='twitter' className='w-5.5 rounded-sm' />
                </div>
                <CardContent className='flex flex-col gap-4 px-6'>
                  <p className='text-base'>
                    The automation capabilities are mind-blowing. It anticipates what I need before I even ask. This has
                    genuinely revolutionized my entire household experience.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>Dec 14 2025</span>
                </CardContent>
              </Card>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(/images/testimonial/image-4.webp)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-linear-to-t from-55% to-transparent px-6 pb-6'>
                  <img src='/images/brand-logo/thread.webp' alt='thread' className='w-5.5 rounded-sm' />
                  <p>
                    Robo has completely simplified my life. It&apos;s intuitive, efficient, and tackles both maintenance
                    and cleaning effortlessly.
                  </p>
                  <span className='text-muted-foreground'>@Tommy</span>
                </div>
              </div>
            </Card3DEffect>
          </Marquee>

          {/* Third Column */}
          <Marquee vertical pauseOnHover delay={0.9} duration={70} gap={2} className='h-225 px-4 max-lg:hidden'>
            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(/images/testimonial/image-5.webp)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-linear-to-t from-55% to-transparent px-6 pb-6'>
                  <img src='/images/brand-logo/twitter.webp' alt='twitter' className='w-5.5 rounded-sm' />
                  <p>
                    Robo is the future of home automation. It&apos;s intelligent, efficient, and makes daily tasks so
                    much easier.
                  </p>
                  <span className='text-muted-foreground'>@Elon</span>
                </div>
              </div>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='/images/testimonial/avatar-5.webp' alt='Julian' />
                        <AvatarFallback className='text-sm'>J</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='text-base font-semibold'>Julian</h4>
                        <p className='text-muted-foreground text-base'>@jlndev</p>
                      </div>
                    </div>
                  </div>
                  <img src='/images/brand-logo/twitter.webp' alt='twitter' className='w-5.5 rounded-sm' />
                </div>
                <CardContent className='flex flex-col gap-4 px-6'>
                  <p className='text-base'>
                    I&apos;ve never seen anything like Robo before. It&apos;s incredibly smart and handles everything
                    from fixing to cleaning with ease. I can&apos;t imagine life without it.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>SEP 01 2025</span>
                </CardContent>
              </Card>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(/images/testimonial/image-6.webp)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-linear-to-t from-55% to-transparent px-6 pb-6'>
                  <img src='/images/brand-logo/twitter.webp' alt='twitter' className='w-5.5 rounded-sm' />
                  <p>
                    This device fits into our daily rhythm effortlessly. It&apos;s intuitive, reliable, and has made
                    everyday tasks noticeably easier.
                  </p>
                  <span className='text-muted-foreground'>@Joe</span>
                </div>
              </div>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='/images/testimonial/avatar-6.webp' alt='Sahaj' />
                        <AvatarFallback className='text-sm'>S</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='text-base font-semibold'>Sahaj</h4>
                        <p className='text-muted-foreground text-base'>@iamsahaj_xyz</p>
                      </div>
                    </div>
                  </div>
                  <img src='/images/brand-logo/twitter.webp' alt='twitter' className='w-5.5 rounded-sm' />
                </div>
                <CardContent className='flex flex-col gap-4 px-6'>
                  <p className='text-base'>
                    I&apos;ve tried many helpers, but Robo truly stands out. It&apos;s remarkably intuitive and handles
                    repairs and cleaning with flawless consistency. I honestly don&apos;t know how I managed before it.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>Jan 01 2025</span>
                </CardContent>
              </Card>
            </Card3DEffect>
          </Marquee>

          <div className='from-background absolute bottom-0 z-1 h-13 w-full bg-linear-to-t to-transparent' />
        </MotionPreset>
      </div>
    </section>
  )
}

export default TestimonialsComponent
