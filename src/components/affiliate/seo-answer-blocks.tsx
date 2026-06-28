import type { Product } from '@/assets/data/products'
import { productAvailabilityText, productPriceText } from '@/lib/seo'

export function buildProductFaqs(product: Product) {
  const name = `${product.brand} ${product.model}`

  return [
    {
      question: `Can you buy ${name} in the US?`,
      answer: productAvailabilityText(product)
    },
    {
      question: `How much does ${name} cost?`,
      answer: productPriceText(product)
    },
    {
      question: `Is ${name} a real home humanoid robot?`,
      answer:
        product.category === 'home-humanoid'
          ? `${name} is positioned as a home humanoid robot, but it should still be treated as an early product until independent household performance is proven.`
          : `${name} is important to track, but it is not best described as a finished consumer home humanoid today. Its current fit is ${product.marketStatus.toLowerCase()}.`
    },
    {
      question: `What should buyers verify before ordering ${name}?`,
      answer:
        'Verify the official seller, final checkout price, taxes, shipping, import fees, warranty, cancellation terms, privacy/teleoperation policy, and whether the robot can perform the specific household tasks you expect.'
    }
  ]
}

export function SeoAnswerBox({ product }: { product: Product }) {
  return (
    <div className='rounded-2xl border bg-muted/30 p-6'>
      <p className='text-muted-foreground text-sm font-medium'>Short answer</p>
      <h2 className='mt-2 text-2xl font-medium tracking-tight'>Can you buy {product.brand} {product.model}?</h2>
      <p className='text-muted-foreground mt-3'>{productAvailabilityText(product)}</p>
      <div className='mt-4 grid gap-3 text-sm sm:grid-cols-3'>
        <div className='rounded-xl border bg-background/70 p-3'>
          <div className='text-muted-foreground'>Availability</div>
          <div className='font-medium capitalize'>{product.status.replaceAll('-', ' ')}</div>
        </div>
        <div className='rounded-xl border bg-background/70 p-3'>
          <div className='text-muted-foreground'>Price</div>
          <div className='font-medium'>{productPriceText(product)}</div>
        </div>
        <div className='rounded-xl border bg-background/70 p-3'>
          <div className='text-muted-foreground'>Last checked</div>
          <div className='font-medium'>{product.updatedAt}</div>
        </div>
      </div>
    </div>
  )
}

export function ProductFaqBlock({ product }: { product: Product }) {
  const faqs = buildProductFaqs(product)

  return (
    <section className='space-y-4'>
      <h2 className='text-3xl font-medium tracking-tight'>Buyer questions answered</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        {faqs.map(faq => (
          <div key={faq.question} className='rounded-2xl border p-5'>
            <h3 className='font-medium'>{faq.question}</h3>
            <p className='text-muted-foreground mt-2 text-sm'>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
