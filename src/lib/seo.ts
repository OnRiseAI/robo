import type { Product } from '@/assets/data/products'
import { formatPrice } from '@/assets/data/products'

export const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://home-robot-guide.com'
export const siteName = 'Home Robot Guide'

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function productAvailabilityText(product: Product) {
  switch (product.status) {
    case 'available':
      return `${product.brand} ${product.model} is listed as available/buyable, but buyers should confirm configuration, shipping, warranty, and support with the official seller before purchase.`
    case 'preorder':
      return `${product.brand} ${product.model} has an official preorder/order path, but it is still an early humanoid purchase and delivery/capability claims should be verified at checkout.`
    case 'developer-only':
      return `${product.brand} ${product.model} is better treated as a developer or research platform than a finished household helper.`
    case 'enterprise-only':
      return `${product.brand} ${product.model} is an enterprise/commercial humanoid, not a normal consumer home robot.`
    case 'not-for-sale':
      return `${product.brand} ${product.model} is not available through a verified normal consumer checkout right now.`
    default:
      return `${product.brand} ${product.model} has uncertain availability and should be tracked, not treated as a confirmed consumer purchase.`
  }
}

export function productPriceText(product: Product) {
  if (product.price.current) return `${formatPrice(product)} listed/verified as of ${product.price.lastChecked}.`
  if (product.price.subscription) return `${product.price.subscription} subscription option listed/verified as of ${product.price.lastChecked}.`

  return `Public consumer price was not verified as of ${product.price.lastChecked}.`
}

function schemaAvailability(product: Product) {
  switch (product.status) {
    case 'available':
      return 'https://schema.org/InStock'
    case 'preorder':
      return 'https://schema.org/PreOrder'
    case 'not-for-sale':
      return 'https://schema.org/OutOfStock'
    default:
      return 'https://schema.org/LimitedAvailability'
  }
}

export function productJsonLd(product: Product) {
  const url = absoluteUrl(`/reviews/${product.slug}`)

  const offer = product.price.current
    ? {
        '@type': 'Offer',
        price: product.price.current,
        priceCurrency: product.price.currency,
        availability: schemaAvailability(product),
        url: product.officialUrl,
        seller: {
          '@type': 'Organization',
          name: product.brand
        },
        priceValidUntil: `${Number(product.price.lastChecked.slice(0, 4)) + 1}${product.price.lastChecked.slice(4)}`
      }
    : undefined

  return {
    '@type': 'Product',
    '@id': `${url}#product`,
    name: `${product.brand} ${product.model}`,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    description: product.summary,
    image: product.image,
    url,
    sameAs: product.officialUrl,
    category: 'Humanoid robot',
    ...(offer ? { offers: offer } : {}),
    ...(product.rating?.overall
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating.overall,
            bestRating: 10,
            worstRating: 1,
            ratingCount: 1
          }
        }
      : {}),
    ...(product.video
      ? {
          video: {
            '@type': 'VideoObject',
            name: product.video.title,
            description: `${product.video.title} from ${product.video.source}`,
            thumbnailUrl: product.image,
            uploadDate: `${product.updatedAt}T00:00:00Z`,
            embedUrl: `https://www.youtube.com/embed/${product.video.youtubeId}`
          }
        }
      : {}),
    additionalProperty: Object.entries(product.keySpecs).map(([name, value]) => ({
      '@type': 'PropertyValue',
      name,
      value: String(value)
    }))
  }
}

export function reviewJsonLd(product: Product) {
  return {
    '@type': 'Review',
    '@id': `${absoluteUrl(`/reviews/${product.slug}`)}#review`,
    itemReviewed: {
      '@id': `${absoluteUrl(`/reviews/${product.slug}`)}#product`
    },
    name: `${product.brand} ${product.model} availability review`,
    reviewBody: product.summary,
    author: {
      '@type': 'Organization',
      name: siteName
    },
    publisher: {
      '@type': 'Organization',
      name: siteName
    },
    dateModified: product.updatedAt,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: product.rating?.overall ?? 0,
      bestRating: 10,
      worstRating: 1
    }
  }
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  }
}

export function webPageJsonLd({ path, name, description }: { path: string; name: string; description: string }) {
  return {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl
    }
  }
}

export function jsonLdGraph(nodes: Array<Record<string, unknown>>) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes
  }
}
