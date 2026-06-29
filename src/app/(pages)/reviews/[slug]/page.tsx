import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AffiliateButton } from '@/components/affiliate/affiliate-button'
import { CompareTable } from '@/components/affiliate/compare-table'
import { ProductVideo } from '@/components/affiliate/product-video'
import { ProsCons } from '@/components/affiliate/pros-cons'
import { RatingScore } from '@/components/affiliate/rating-score'
import { ProductFaqBlock, SeoAnswerBox, buildProductFaqs } from '@/components/affiliate/seo-answer-blocks'
import { getProductBySlug, products } from '@/assets/data/products'
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd, jsonLdGraph, productJsonLd, reviewJsonLd, webPageJsonLd } from '@/lib/seo'

export function generateStaticParams() {
  return products.map(product => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) return {}

  return {
    title: `${product.brand} ${product.model} Review: Availability, Price & Official Links`,
    description: `Can you buy ${product.brand} ${product.model}? ${product.summary}`,
    keywords: [
      `${product.brand} ${product.model}`,
      `${product.brand} ${product.model} price`,
      `${product.brand} ${product.model} preorder`,
      `${product.brand} ${product.model} review`,
      'humanoid robot for sale',
      'home humanoid robot'
    ],
    alternates: {
      canonical: `/reviews/${product.slug}`
    },
    openGraph: {
      title: `${product.brand} ${product.model} availability review`,
      description: product.summary,
      url: absoluteUrl(`/reviews/${product.slug}`),
      type: 'article',
      images: [{ url: product.image, alt: `${product.brand} ${product.model}` }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.brand} ${product.model} review`,
      description: product.summary,
      images: [product.image]
    }
  }
}

export const dynamicParams = false

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const related = products.filter(item => item.category === product.category && item.slug !== product.slug).slice(0, 2)

  const faqs = buildProductFaqs(product)

  const jsonLd = jsonLdGraph([
    webPageJsonLd({
      path: `/reviews/${product.slug}`,
      name: `${product.brand} ${product.model} review`,
      description: product.summary
    }),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Humanoid robots for sale', path: '/humanoid-robots-for-sale' },
      { name: `${product.brand} ${product.model}`, path: `/reviews/${product.slug}` }
    ]),
    productJsonLd(product),
    reviewJsonLd(product),
    faqJsonLd(faqs)
  ])

  return (
    <>
      <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
          <div className='overflow-hidden rounded-2xl border'>
            <img src={product.image} alt={`${product.brand} ${product.model}`} className='aspect-video w-full object-cover lg:aspect-square' />
          </div>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-2'>
                <Badge>{product.status.replaceAll('-', ' ')}</Badge>
                <Badge variant='outline'>Price checked {product.price.lastChecked}</Badge>
              </div>
              <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>
                {product.brand} {product.model} review
              </h1>
              <p className='text-muted-foreground text-lg'>{product.summary}</p>
            </div>
            <RatingScore score={product.rating?.overall} />
            <div className='flex flex-wrap gap-3'>
              {product.affiliateLinks.map(link => (
                <AffiliateButton key={link.label} link={link} />
              ))}
            </div>
            <p className='text-muted-foreground text-sm'>
              This page is built for US affiliate review content. Replace placeholder links after program approval and refresh price, warranty, and availability before publication.
            </p>
          </div>
        </div>
      </section>

      <section className='px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl space-y-8'>
          <SeoAnswerBox product={product} />
          <ProsCons pros={product.pros} cons={product.cons} />
          <ProductVideo product={product} />
          <Card>
            <CardHeader>
              <CardTitle>Specs that matter for US buyers</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className='grid gap-4 sm:grid-cols-2'>
                {Object.entries(product.keySpecs).map(([key, value]) => (
                  <div key={key} className='rounded-lg border p-4'>
                    <dt className='text-muted-foreground text-sm'>{key}</dt>
                    <dd className='mt-1 font-medium'>{String(value)}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Source notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-3 text-sm text-muted-foreground'>
                {product.sourceNotes.map(note => (
                  <li key={note}>• {note}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {related.length > 0 && (
            <div className='space-y-4'>
              <h2 className='text-3xl font-medium tracking-tight'>Compare alternatives</h2>
              <CompareTable products={[product, ...related]} />
            </div>
          )}

          <ProductFaqBlock product={product} />

          <div className='text-sm text-muted-foreground'>
            Need the category context? Go back to{' '}
            <Link href='/home-humanoids' className='underline underline-offset-4'>
              the humanoid robot tracker
            </Link>
            .
          </div>
        </div>
      </section>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </>
  )
}
