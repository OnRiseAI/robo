import Link from 'next/link'

import { ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

// Component Imports
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'
import { MatterButton } from '@/components/ui/matter-button'

import type { PostMetadata } from '@/lib/posts'

const HeroSection = ({ posts }: { posts: PostMetadata[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 max-w-3xl space-y-4 text-center sm:mb-16'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
            <Badge variant='outline' className='bg-background h-auto text-sm font-normal'>
              Trusted by 1,000,000+ professionals
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h1'
            className='text-2xl font-semibold sm:text-4xl lg:text-5xl lg:leading-[1.29167]'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.7 }}
            delay={0.2}
          >
            Building the Future of Helpful Home Robotics
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.7 }}
            delay={0.4}
          >
            Explore insights, updates, and stories from Matter as we design intelligent home robots that make everyday
            life simpler, safer, and more human.
          </MotionPreset>

          <MotionPreset
            className='flex items-center justify-center gap-3 max-sm:flex-col'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.7 }}
            delay={0.6}
          >
            <Input type='email' placeholder='Your email' className='h-10 w-72 rounded-full' required />
            <MatterButton className='shrink-0'>Subscribe</MatterButton>
          </MotionPreset>
        </div>

        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2'>
          {posts.map((post, index) => (
            <MotionPreset
              key={`${post.slug}-${index}`}
              fade
              slide={{ direction: 'down', offset: 50 }}
              blur
              transition={{ duration: 0.7 }}
              delay={0.8}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className='group h-full rounded-none bg-transparent py-0 shadow-none ring-0'>
                  <CardContent className='flex flex-1 flex-col gap-6 px-0 xl:grid xl:grid-cols-2'>
                    <div className='relative overflow-hidden rounded-lg'>
                      <img
                        src={post.image}
                        alt={post.title}
                        className='h-71 w-full object-cover transition-all duration-300 group-hover:scale-105'
                      />
                      <MatterButton
                        activateOnGroupHover={true}
                        className='absolute inset-e-3.5 bottom-3.5 **:data-[slot=button]:size-9 **:data-[slot=button]:px-0'
                      >
                        <ArrowUpRightIcon />
                      </MatterButton>
                    </div>
                    <div className='flex flex-1 flex-col justify-center gap-3 xl:py-1.5'>
                      <div className='text-muted-foreground flex items-center gap-1.5 text-sm'>
                        <CalendarDaysIcon className='size-4.5' />
                        {new Date(post.publishedAt ?? '').toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: '2-digit'
                        })}
                      </div>
                      <h2 className='text-2xl font-medium'>{post.title}</h2>
                      <p className='text-muted-foreground flex-1 text-base'>{post.description}</p>
                      <p className='text-foreground text-sm'>
                        {post.author?.name} - {post.author?.designation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
