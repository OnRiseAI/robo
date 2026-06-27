import { ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

import Link from 'next/link'

// Component Imports
import { Card, CardContent } from '@/components/ui/card'
import { MatterButton } from '@/components/ui/matter-button'
import { MotionPreset } from '@/components/ui/motion-preset'
import { TextShimmer } from '@/components/blocks/text-shimmer'

import type { PostMetadata } from '@/lib/posts'

const RelatedBlogSection = ({ posts }: { posts: PostMetadata[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8'>
        {/* Header */}
        <div className='space-y-4'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
            <TextShimmer className='text-sm font-medium uppercase' duration={1.75}>
              Trending
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
            Related post
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
            Expand your knowledge with these hand-picked posts.
          </MotionPreset>
        </div>

        {/* Blog Grid */}
        <MotionPreset
          className='grid grid-cols-1 gap-10 sm:grid-cols-2'
          fade
          blur
          slide={{ direction: 'down', offset: 50 }}
          transition={{ duration: 0.7 }}
          delay={0.9}
        >
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className='group rounded-none border-none bg-transparent py-0 shadow-none ring-0'>
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
          ))}
        </MotionPreset>
      </div>
    </section>
  )
}

export default RelatedBlogSection
