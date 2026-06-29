import type { Metadata } from 'next'

import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How this site uses affiliate links, sponsored nofollow attributes, and buyer-first rankings.'
}

export default function AffiliateDisclosurePage() {
  return (
    <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-3xl space-y-6'>
        <Badge variant='outline'>Disclosure</Badge>
        <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>Affiliate disclosure</h1>
        <p className='text-muted-foreground text-lg'>
          We may earn commissions when readers buy through links on this site. This includes Amazon Associates and brand-direct programs.
        </p>
        <p className='text-muted-foreground'>
          Affiliate links are marked with sponsored nofollow attributes where used. Commission potential does not decide rankings. Recommendations should be based on US availability, buyer fit, price, warranty support, smart-home compatibility, privacy notes, and product performance.
        </p>
        <p className='text-muted-foreground'>
          FTC guidance says material connections should be clear and conspicuous. The site includes a site-wide disclosure banner and inline disclosure near buying buttons.
        </p>
      </div>
    </section>
  )
}
