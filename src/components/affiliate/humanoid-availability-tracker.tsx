import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AffiliateButton } from '@/components/affiliate/affiliate-button'
import { formatPrice, getHumanoidProducts } from '@/assets/data/products'

const statusLabels: Record<string, string> = {
  available: 'Available',
  preorder: 'Preorder',
  'enterprise-only': 'Enterprise only',
  'developer-only': 'Developer only',
  'not-for-sale': 'Not for sale',
  unverified: 'Unverified'
}

export function HumanoidAvailabilityTracker() {
  const products = getHumanoidProducts()

  return (
    <Card>
      <CardHeader>
        <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
          <div>
            <Badge variant='outline'>Availability tracker</Badge>
            <CardTitle className='mt-3 text-2xl sm:text-3xl'>Humanoid robots by buying status</CardTitle>
          </div>
          <p className='text-muted-foreground max-w-xl text-sm'>
            This tracker separates robots you can order, preorder, develop with, or only watch from the sidelines.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className='overflow-x-auto'>
          <table className='w-full min-w-250 text-left text-sm'>
            <thead className='bg-muted/50'>
              <tr>
                <th className='p-4 font-medium'>Robot</th>
                <th className='p-4 font-medium'>Status</th>
                <th className='p-4 font-medium'>Price</th>
                <th className='p-4 font-medium'>Market note</th>
                <th className='p-4 font-medium'>Official source</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.slug} className='border-t align-top'>
                  <td className='p-4'>
                    <Link href={`/reviews/${product.slug}`} className='font-medium hover:underline'>
                      {product.brand} {product.model}
                    </Link>
                  </td>
                  <td className='p-4'>
                    <Badge variant={product.status === 'available' || product.status === 'preorder' ? 'default' : 'outline'}>
                      {statusLabels[product.status]}
                    </Badge>
                  </td>
                  <td className='p-4 text-muted-foreground'>{formatPrice(product)}</td>
                  <td className='p-4 text-muted-foreground'>{product.marketStatus}</td>
                  <td className='p-4'>
                    {product.affiliateLinks[0] ? <AffiliateButton link={product.affiliateLinks[0]} /> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
