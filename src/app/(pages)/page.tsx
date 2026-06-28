import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'

import BlogCarousel from '@/components/blocks/blog-component/blog-component'
import { Badge } from '@/components/ui/badge'
import { MatterButton } from '@/components/ui/matter-button'
import { HumanoidHeroVisual } from '@/components/affiliate/humanoid-hero-visual'
import { ProductCard } from '@/components/affiliate/product-card'
import { getPosts } from '@/lib/posts'
import { getHumanoidProducts } from '@/assets/data/products'
import { categoryPages } from '@/assets/data/affiliate-pages'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}#website`,
      name: 'Home Robot Guide',
      description:
        'US buyer guides for home robots Americans can actually buy, with prices, availability, smart-home fit, privacy notes, warranties, and affiliate deal tracking.',
      url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`,
      inLanguage: 'en-US'
    }
  ]
}

const Home = async () => {
  const posts = await getPosts()
  const featuredPosts = posts.filter(post => post.featured)
  const featuredProducts = getHumanoidProducts().slice(0, 3)

  return (
    <>
      <section id='home' className='px-4 py-16 sm:px-6 lg:px-8 lg:py-28'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <Badge variant='outline'>US home humanoid robot tracker</Badge>
              <h1 className='max-w-4xl text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl'>
                Humanoid robots for the home, tracked by what is actually available
              </h1>
              <p className='text-muted-foreground max-w-2xl text-lg'>
                Compare 1X NEO, Unitree, Figure, Tesla Optimus, and other humanoid robots by price, preorder status, US delivery claims, real household capability, privacy, and whether you can actually buy them.
              </p>
            </div>
            <div className='flex flex-wrap gap-3'>
              <MatterButton asChild>
                <Link href='/home-humanoids'>
                  View humanoid tracker
                  <ArrowUpRightIcon />
                </Link>
              </MatterButton>
              <MatterButton asChild>
                <Link href='/reviews/1x-neo'>
                  Track 1X NEO
                  <ArrowUpRightIcon />
                </Link>
              </MatterButton>
            </div>
          </div>
          <HumanoidHeroVisual />
        </div>
      </section>

      <section className='px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl space-y-8'>
          <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
            <div>
              <Badge variant='outline'>Category hubs</Badge>
              <h2 className='mt-3 text-3xl font-medium tracking-tight sm:text-4xl'>Build authority across household robotics</h2>
            </div>
            <p className='text-muted-foreground max-w-xl text-sm'>Start broad enough for topical authority, then monetize high-intent review, best-of, comparison, and deal pages.</p>
          </div>
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-5'>
            {categoryPages.map(page => (
              <Link key={page.slug} href={`/${page.slug}`} className='group rounded-xl border p-5 transition-colors hover:bg-muted/40'>
                <Badge variant='outline'>{page.primaryKeyword}</Badge>
                <h3 className='mt-4 text-xl font-medium group-hover:underline'>{page.title}</h3>
                <p className='text-muted-foreground mt-3 line-clamp-3 text-sm'>{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl space-y-8'>
          <div>
            <Badge variant='outline'>First money pages</Badge>
            <h2 className='mt-3 text-3xl font-medium tracking-tight sm:text-4xl'>Humanoid robots to track first</h2>
          </div>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.slug} product={product} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <BlogCarousel blogPosts={featuredPosts} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </>
  )
}

export default Home
