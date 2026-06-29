import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { AffiliateButton } from '@/components/affiliate/affiliate-button'
import { RatingScore } from '@/components/affiliate/rating-score'
import { formatPrice, type Product } from '@/assets/data/products'

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const primaryLink = product.affiliateLinks[0]

  return (
    <Card className='h-full'>
      <div className='relative aspect-video overflow-hidden'>
        <img src={product.image} alt={`${product.brand} ${product.model}`} className='size-full object-cover' loading={priority ? 'eager' : 'lazy'} />
        <div className='absolute left-4 top-4 flex gap-2'>
          <Badge>{product.status.replaceAll('-', ' ')}</Badge>
          <Badge variant='outline'>{formatPrice(product)}</Badge>
        </div>
      </div>
      <CardHeader>
        <div className='text-muted-foreground text-sm'>{product.brand}</div>
        <CardTitle className='text-xl'>{product.model}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-1 flex-col gap-4'>
        <p className='text-muted-foreground'>{product.summary}</p>
        <RatingScore score={product.rating?.overall} />
        <div className='flex flex-wrap gap-2'>
          {product.bestFor.slice(0, 3).map(item => (
            <Badge key={item} variant='outline'>
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className='flex flex-col items-start gap-4'>
        {primaryLink && <AffiliateButton link={primaryLink} />}
        <Link href={`/reviews/${product.slug}`} className='inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground'>
          Read review <ArrowUpRightIcon className='size-4' />
        </Link>
      </CardFooter>
    </Card>
  )
}
