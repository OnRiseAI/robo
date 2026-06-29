import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'

import { MatterButton } from '@/components/ui/matter-button'
import type { AffiliateLink } from '@/assets/data/products'

export function AffiliateButton({ link }: { link: AffiliateLink }) {
  return (
    <div className='space-y-1.5'>
      <MatterButton asChild>
        <Link href={link.url} rel={link.rel} target={link.url === '#' ? undefined : '_blank'}>
          {link.label}
          <ArrowUpRightIcon />
        </Link>
      </MatterButton>
      <p className='text-muted-foreground text-xs'>Disclosure: we may earn a commission if you buy through this link.</p>
    </div>
  )
}
