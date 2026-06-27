import AboutUs from '@/components/blocks/about-us-section/about-us-section'
import BlogCarousel from '@/components/blocks/blog-component/blog-component'
import CTA from '@/components/blocks/cta-section/cta-section'
import HeroSection from '@/components/blocks/hero-section/hero-section'
import TestimonialsComponent from '@/components/blocks/testimonials-component/testimonials-component'
import UseCases from '@/components/blocks/use-cases/use-cases'

import { aboutUsData } from '@/assets/data/about-us-data'
import { useCasesData } from '@/assets/data/use-cases'
import { getPosts } from '@/lib/posts'

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
    }
  ]
}

const Home = async () => {
  const posts = await getPosts()

  const featuredPosts = posts.filter(post => post.featured)

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* <Use Cases /> */}
      <UseCases useCases={useCasesData} />

      {/* About Us Section */}
      <AboutUs aboutUsData={aboutUsData} />

      {/* Testimonials Section */}
      <TestimonialsComponent />

      {/* Blog Carousel Section */}
      <BlogCarousel blogPosts={featuredPosts} />

      {/* CTA Section */}
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

export default Home
