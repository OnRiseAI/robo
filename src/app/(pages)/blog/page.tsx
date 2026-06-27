import type { Metadata } from 'next'

import { getPosts } from '@/lib/posts'

// Section Imports
import BlogSection from '@/components/blog/blog-section'
import HeroSection from '@/components/blog/hero-section'
import CTA from '@/components/blocks/cta-section/cta-section'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Welcome to our blog. Stay updated with the latest news and articles.',
  keywords: ['blog', 'articles', 'news'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog`
  }
}

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
      name: 'Blog',
      description: 'Welcome to our blog. Stay updated with the latest news and articles.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
      isPartOf: {
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${process.env.NEXT_PUBLIC_APP_URL}/blog`]
      }
    }
  ]
}

const BlogPage = async () => {
  const posts = await getPosts()

  // Get only featured posts for the hero section (Currently set to 2, but can be adjusted as needed)
  const featuredPosts = posts.filter(post => post.featured).slice(0, 2)

  return (
    <>
      <HeroSection posts={featuredPosts} />

      <BlogSection posts={posts} />

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

export default BlogPage
