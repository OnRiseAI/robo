import { CheckIcon, XIcon } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className='grid gap-4 md:grid-cols-2'>
      <Card>
        <CardHeader>
          <CardTitle>Pros</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='space-y-3'>
            {pros.map(item => (
              <li key={item} className='flex gap-2 text-sm'>
                <CheckIcon className='mt-0.5 size-4 shrink-0 text-emerald-500' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cons</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='space-y-3'>
            {cons.map(item => (
              <li key={item} className='flex gap-2 text-sm'>
                <XIcon className='mt-0.5 size-4 shrink-0 text-rose-500' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
