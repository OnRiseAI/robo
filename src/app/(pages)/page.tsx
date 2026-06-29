import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'

import BlogCarousel from '@/components/blocks/blog-component/blog-component'
import { Badge } from '@/components/ui/badge'
import { MatterButton } from '@/components/ui/matter-button'
import { HumanoidHeroVisual } from '@/components/affiliate/humanoid-hero-visual'
import { ProductCard } from '@/components/affiliate/product-card'
import { getPosts } from '@/lib/posts'
import { getHumanoidProducts } from '@/assets/data/products'
import { faqJsonLd, jsonLdGraph, productJsonLd, webPageJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Humanoid Robots for Sale: US Availability, Preorders & Prices',
  description:
    'A hype-checked humanoid robot availability tracker for US buyers comparing 1X NEO, Unitree G1, Unitree R1, Figure 03, Tesla Optimus, Apollo, and Digit.',
  keywords: ['humanoid robots for sale', 'home humanoid robot', '1X NEO preorder', 'Unitree G1 price', 'Tesla Optimus for sale', 'Figure 03 robot'],
  alternates: {
    canonical: '/'
  }
}

const faqs = [
  {
    question: 'Can you buy a humanoid robot for home use today?',
    answer:
      'There is only one clear home-focused humanoid preorder to track first: 1X NEO. Unitree G1 and R1 are more buyable as developer/early-adopter platforms than finished home assistants.'
  },
  {
    question: 'What does this site verify?',
    answer:
      'Home Robot Guide verifies official order pages, preorder claims, prices, source videos, buyer type, US availability, warranty notes, and whether a robot is actually consumer buyable.'
  },
  {
    question: 'Why include robots that are not for sale?',
    answer:
      'People search for Tesla Optimus, Figure 03, Apollo, and Digit before they are consumer products. We include them to answer availability questions clearly and point buyers toward actual order/preorder options.'
  }
]

const trackingRoutes = [
  {
    href: '/humanoid-robots-for-sale',
    label: 'Availability tracker',
    title: 'Humanoid robots for sale',
    description: 'A buyer-first status table separating orderable, preorder, developer-only, enterprise-only, and not-for-sale humanoids.'
  },
  {
    href: '/preorder-tracker',
    label: 'Preorder watchlist',
    title: 'Preorder tracker',
    description: 'Follow deposits, stated US delivery windows, official source links, and what needs re-checking before a buyer commits.'
  },
  {
    href: '/home-humanoids',
    label: 'Home-use guide',
    title: 'Home humanoid robots',
    description: 'Focus on real household readiness: chores, privacy, support, warranty, remote help, and whether normal consumers can order.'
  },
  {
    href: '/best/best-home-humanoid-robots',
    label: 'Best-of page',
    title: 'Best home humanoid robots',
    description: 'A conservative ranking that favors verified availability and home positioning over speculative demos.'
  }
]

const Home = async () => {
  const posts = await getPosts()
  const featuredPosts = posts.filter(post => post.featured)
  const featuredProducts = getHumanoidProducts().slice(0, 3)

  const jsonLd = jsonLdGraph([
    {
      '@type': 'WebSite',
      '@id': '#website',
      name: 'Home Robot Guide',
      description: metadata.description as string,
      url: '/',
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: '/humanoid-robots-for-sale?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    webPageJsonLd({ path: '/', name: metadata.title as string, description: metadata.description as string }),
    {
      '@type': 'ItemList',
      name: 'Top humanoid robots to track first',
      itemListElement: featuredProducts.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: productJsonLd(product)
      }))
    },
    faqJsonLd(faqs)
  ])

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

      <section className='px-4 pb-12 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-7xl gap-4 md:grid-cols-3'>
          <div className='rounded-2xl border bg-muted/30 p-5'>
            <p className='text-muted-foreground text-sm'>Short answer</p>
            <h2 className='mt-2 text-xl font-medium'>Only a few humanoids are truly orderable</h2>
            <p className='text-muted-foreground mt-2 text-sm'>1X NEO is the clearest home-focused preorder. Unitree G1/R1 are developer-focused. Figure, Tesla, Apollo, and Digit are tracking pages, not normal consumer checkouts.</p>
          </div>
          <div className='rounded-2xl border bg-muted/30 p-5'>
            <p className='text-muted-foreground text-sm'>AEO promise</p>
            <h2 className='mt-2 text-xl font-medium'>Answer-first pages</h2>
            <p className='text-muted-foreground mt-2 text-sm'>Each robot page answers whether you can buy it, how much it costs, whether it is for homes, and what to verify before ordering.</p>
          </div>
          <div className='rounded-2xl border bg-muted/30 p-5'>
            <p className='text-muted-foreground text-sm'>Freshness signal</p>
            <h2 className='mt-2 text-xl font-medium'>Official source tracking</h2>
            <p className='text-muted-foreground mt-2 text-sm'>Product pages include official links, videos, last-checked dates, source notes, and status labels for search engines and AI answer engines.</p>
          </div>
        </div>
      </section>

      <section className='px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl space-y-8'>
          <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
            <div>
              <Badge variant='outline'>Tracking hubs</Badge>
              <h2 className='mt-3 text-3xl font-medium tracking-tight sm:text-4xl'>Own the home humanoid decision path</h2>
            </div>
            <p className='text-muted-foreground max-w-xl text-sm'>The site should win by answering what people can actually buy, preorder, compare, or ignore — not by drifting into mature appliance affiliate pages.</p>
          </div>
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
            {trackingRoutes.map(route => (
              <Link key={route.href} href={route.href} className='group rounded-xl border p-5 transition-colors hover:bg-muted/40'>
                <Badge variant='outline'>{route.label}</Badge>
                <h3 className='mt-4 text-xl font-medium group-hover:underline'>{route.title}</h3>
                <p className='text-muted-foreground mt-3 line-clamp-3 text-sm'>{route.description}</p>
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
