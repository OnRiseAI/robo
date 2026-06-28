import Link from 'next/link'

export function AffiliateDisclosureBanner() {
  return (
    <div className='border-b bg-muted/40 px-4 py-2 text-center text-xs text-muted-foreground'>
      We may earn a commission from links on this site. Rankings stay buyer-first and affiliate links use sponsored nofollow attributes.{' '}
      <Link href='/affiliate-disclosure' className='underline underline-offset-4'>
        Read our disclosure
      </Link>
      .
    </div>
  )
}
