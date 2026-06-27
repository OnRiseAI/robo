'use client'

import { useState } from 'react'

import { SearchIcon, CalendarDaysIcon, ArrowUpRightIcon } from 'lucide-react'

import Link from 'next/link'

// Component Imports
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MotionPreset } from '@/components/ui/motion-preset'
import { TextShimmer } from '@/components/blocks/text-shimmer'
import { MatterButton } from '@/components/ui/matter-button'

import type { PostMetadata } from '@/lib/posts'

const BlogGrid = ({ posts }: { posts: PostMetadata[] }) => {
  return (
    <div className='grid gap-8 sm:grid-cols-2 lg:gap-14'>
      {posts.map((post, index) => (
        <Card key={index} className='group rounded-none border-none bg-transparent py-0 shadow-none ring-0'>
          <CardContent className='px-0'>
            <Link href={`/blog/${post.slug}`}>
              <div className='relative overflow-hidden rounded-lg'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='h-71 w-full object-cover transition-all duration-300 group-hover:scale-105'
                />
                <MatterButton
                  className='absolute inset-e-3.5 bottom-3.5 **:data-[slot=button]:size-9 **:data-[slot=button]:px-0'
                  activateOnGroupHover={true}
                >
                  <ArrowUpRightIcon />
                </MatterButton>
              </div>
            </Link>

            <div className='flex flex-col justify-center gap-3.5 py-4'>
              <div className='text-muted-foreground flex items-center gap-1.5 text-sm'>
                <CalendarDaysIcon className='size-4.5' />
                {new Date(post.publishedAt ?? '').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
                })}
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className='text-xl font-medium'>{post.title}</h2>
              </Link>
              <p className='text-muted-foreground text-base'>{post.description}</p>
              <Link href={`/blog/${post.slug}`}>
                <p className='text-foreground text-sm'>
                  {post.author?.name} - {post.author?.designation}
                </p>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

const BlogSection = ({ posts }: { posts: PostMetadata[] }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(post => {
    // Search filter
    if (!searchQuery) return true

    const query = searchQuery.toLowerCase()

    const matchesSearch =
      post.title?.toLowerCase().includes(query) ||
      post.description?.toLowerCase().includes(query) ||
      post.author?.name.toLowerCase().includes(query)

    return matchesSearch
  })

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8'>
        {/* Header */}
        <div className='mb-8 space-y-4 lg:mb-16'>
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
            Build Better Products with Insights & Inspiration.
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
            Practical insights and real stories to guide your product from vision to reality.
          </MotionPreset>
        </div>

        <MotionPreset
          className='relative mb-4 max-w-72 sm:mb-6 lg:mb-8'
          fade
          blur
          slide={{ direction: 'down', offset: 50 }}
          transition={{ duration: 0.7 }}
          delay={0.9}
        >
          <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
            <SearchIcon className='size-4' />
            <span className='sr-only'>Search</span>
          </div>
          <Input
            type='search'
            placeholder='Search'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='peer h-10 rounded-full px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none'
          />
        </MotionPreset>

        {/* Tabs Content */}

        <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }} delay={1.2}>
          {filteredPosts.length > 0 ? (
            <BlogGrid posts={filteredPosts} />
          ) : (
            <div className='text-muted-foreground flex min-h-100 flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center'>
              <SearchIcon className='size-12 opacity-50' />
              <div className='space-y-2'>
                <h3 className='text-foreground text-lg font-medium'>No posts found</h3>
                <p className='text-sm'>{searchQuery && `No results found for "${searchQuery}".`}</p>
              </div>
              {searchQuery && (
                <Button variant='outline' size='sm' onClick={() => setSearchQuery('')}>
                  Clear search
                </Button>
              )}
            </div>
          )}
        </MotionPreset>
      </div>
    </section>
  )
}

export default BlogSection
