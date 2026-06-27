'use client'

import { useEffect, useState } from 'react'

import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

import Link from 'next/link'

// Component Imports
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { MotionPreset } from '@/components/ui/motion-preset'
import { MatterButton } from '@/components/ui/matter-button'
import { TextShimmer } from '@/components/blocks/text-shimmer'

import type { PostMetadata } from '@/lib/posts'

const BlogCarousel = ({ blogPosts }: { blogPosts: PostMetadata[] }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!api) {
      return
    }

    const updateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    updateScrollState()
    api.on('select', updateScrollState)
    api.on('reInit', updateScrollState)

    return () => {
      api.off('select', updateScrollState)
      api.off('reInit', updateScrollState)
    }
  }, [api])

  return (
    <section id='blogs' className='py-8 sm:py-16 lg:py-24'>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start'
        }}
        className='space-y-10 md:space-y-12 lg:space-y-14'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Header Content */}
          <div className='flex flex-wrap items-end justify-between gap-4'>
            <div className='space-y-4'>
              <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
                <TextShimmer className='text-sm font-medium uppercase' duration={1.75}>
                  Blogs
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
                Discover updates
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-muted-foreground text-base md:text-lg'
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.7 }}
                delay={0.6}
              >
                Stay informed with the newest developments and advancements from our team.
              </MotionPreset>
            </div>
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.7 }}
              delay={0.6}
            >
              <div className='flex items-center gap-4'>
                <MatterButton
                  onClick={() => api?.scrollPrev()}
                  disabled={!canScrollPrev}
                  aria-label='Previous Button'
                  className='disabled:opacity-50 [&>button]:size-10 [&>button]:cursor-pointer [&>button]:px-0'
                >
                  <ArrowLeftIcon />
                </MatterButton>
                <MatterButton
                  onClick={() => api?.scrollNext()}
                  disabled={!canScrollNext}
                  aria-label='Next Button'
                  className='disabled:opacity-50 [&>button]:size-10 [&>button]:cursor-pointer [&>button]:px-0'
                >
                  <ArrowRightIcon />
                </MatterButton>
              </div>
            </MotionPreset>
          </div>
        </div>

        {/* Blog Carousel */}
        <MotionPreset
          fade
          blur
          slide={{ direction: 'down', offset: 50 }}
          delay={0.9}
          transition={{ duration: 0.7 }}
          className='h-full'
        >
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <CarouselContent className='-ml-4 lg:-ml-10'>
              {blogPosts.map((post, index) => (
                <CarouselItem key={index} className='pl-4 md:basis-1/2 lg:basis-1/2 lg:pl-10'>
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className='group rounded-none bg-transparent py-0 shadow-none ring-0'>
                      <CardContent className='px-0'>
                        <div className='relative overflow-hidden rounded-lg'>
                          <img
                            src={post.image}
                            alt={post.title}
                            className='h-71 w-full object-cover transition-all duration-300 group-hover:scale-105'
                          />
                          <MatterButton
                            aria-label='Blog Link Button'
                            className='absolute inset-e-3.5 bottom-3.5 **:data-[slot=button]:size-9 **:data-[slot=button]:px-0'
                            activateOnGroupHover={true}
                          >
                            <ArrowUpRightIcon />
                          </MatterButton>
                        </div>

                        <div className='flex flex-col justify-center gap-3.5 py-4'>
                          <div className='text-muted-foreground flex items-center gap-1.5 text-sm'>
                            <CalendarDaysIcon className='size-4.5' />
                            {new Date(post.publishedAt ?? '').toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: '2-digit'
                            })}
                          </div>

                          <h2 className='text-xl font-medium'>{post.title}</h2>

                          <p className='text-muted-foreground text-base'>{post.description}</p>

                          <p className='text-foreground text-sm'>
                            {post.author?.name} - {post.author?.designation}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </MotionPreset>
      </Carousel>
    </section>
  )
}

export default BlogCarousel
