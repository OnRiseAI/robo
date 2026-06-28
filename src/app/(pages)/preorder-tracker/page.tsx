import type { Metadata } from 'next'

import { Badge } from '@/components/ui/badge'
import { HumanoidAvailabilityTracker } from '@/components/affiliate/humanoid-availability-tracker'

export const metadata: Metadata = {
  title: 'Humanoid Robot Preorder Tracker',
  description: 'Track which humanoid robots are available, preorder open, developer-only, enterprise-only, or not for sale in the US.'
}

export default function PreorderTrackerPage() {
  return (
    <section className='px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-10'>
        <div className='max-w-3xl space-y-4'>
          <Badge variant='outline'>Preorder tracker</Badge>
          <h1 className='text-4xl font-medium tracking-tight sm:text-5xl'>Humanoid robot preorder and availability tracker</h1>
          <p className='text-muted-foreground text-lg'>
            The humanoid market is moving fast. This page tracks official order pages, preorder claims, developer-only robots, enterprise deployments, and robots that are not yet for sale.
          </p>
        </div>
        <HumanoidAvailabilityTracker />
      </div>
    </section>
  )
}
