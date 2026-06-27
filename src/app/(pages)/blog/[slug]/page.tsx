import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import MDXContent from '@/components/mdx-content'
import { getPostBySlug, getPosts } from '@/lib/posts'

// Section Imports
import RelatedBlogSection from '@/components/blog/related-blog-section'
import CTA from '@/components/blocks/cta-section/cta-section'

// Component Imports
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    return {}
  }

  const { metadata } = post

  return {
    title: `Blog: ${metadata.title}`,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${metadata.slug}`
    }
  }
}

export const dynamicParams = false

const BlogDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const posts = await getPosts()

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post

  // Sort posts by published date
  const allPosts = posts.sort(
    (a, b) => new Date(a.publishedAt ?? '').getTime() - new Date(b.publishedAt ?? '').getTime()
  )

  // Find the current post index
  const currentPostIndex = allPosts.findIndex(p => p.slug === slug)
  const previousPost = currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null
  const nextPost = currentPostIndex < allPosts.length - 1 ? allPosts[currentPostIndex + 1] : null

  const relatedPosts = allPosts
    .filter(p => p.slug !== slug)
    .slice(-2)
    .reverse()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
        name: 'Matter',
        description:
          'Meet Robo, the intelligent home companion designed to simplify household chores with precision AI, smart automation, and sleek humanoid design.',
        url: `${process.env.NEXT_PUBLIC_APP_URL}`,
        inLanguage: 'en-US'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#webpage`,
        name: `Blog: ${metadata.title}`,
        description: metadata.description,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${metadata.slug}`,
        isPartOf: {
          '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
        },
        potentialAction: {
          '@type': 'ReadAction',
          target: [`${process.env.NEXT_PUBLIC_APP_URL}/blog/${metadata.slug}`]
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${process.env.NEXT_PUBLIC_APP_URL}`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${process.env.NEXT_PUBLIC_APP_URL}/blog`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: metadata.title,
            item: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${metadata.slug}`
          }
        ]
      }
    ]
  }

  return (
    <>
      <section className='py-8 sm:py-16 lg:py-24'>
        <div className='mx-auto max-w-5xl space-y-8 px-4 sm:space-y-16 sm:px-6 lg:px-8'>
          <div className='space-y-6'>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href='/'>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href='/blog'>Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{metadata.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <h1 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{metadata.title}</h1>

            <div className='flex items-center gap-2'>
              <Avatar className='size-11.5'>
                <AvatarImage src={metadata.author?.picture} alt={metadata.author?.name} />
                <AvatarFallback className='text-lg'>{metadata.author?.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className='flex flex-col gap-1'>
                <span className='text-sm font-medium'>
                  {metadata.author?.name} - {metadata.author?.designation}
                </span>
                <span className='text-muted-foreground text-sm'>
                  {new Date(metadata.publishedAt ?? '').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </div>

          <img src={metadata.image} alt={metadata.title} className='max-h-122 w-full rounded-lg' />

          <div>
            <MDXContent source={content} />
          </div>

          <div className='flex items-center justify-between gap-4'>
            {previousPost ? (
              <Button size='lg' variant='outline' className='group gap-2 rounded-full' asChild>
                <Link href={`/blog/${previousPost.slug}`}>
                  <ChevronLeftIcon className='transition-transform duration-300 group-hover:-translate-x-1' />
                  Previous Post
                </Link>
              </Button>
            ) : (
              <Button size='lg' variant='outline' className='group gap-2 rounded-full' disabled>
                <ChevronLeftIcon className='transition-transform duration-300 group-hover:-translate-x-1' />
                Previous Post
              </Button>
            )}
            {nextPost ? (
              <Button size='lg' variant='outline' className='group gap-2 rounded-full' asChild>
                <Link href={`/blog/${nextPost.slug}`}>
                  Next Post
                  <ChevronRightIcon className='transition-transform duration-300 group-hover:translate-x-1' />
                </Link>
              </Button>
            ) : (
              <Button size='lg' variant='outline' className='gap-2 rounded-full' disabled>
                Next Post
                <ChevronRightIcon />
              </Button>
            )}
          </div>
        </div>
      </section>

      <RelatedBlogSection posts={relatedPosts} />

      <CTA />

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default BlogDetailsPage
