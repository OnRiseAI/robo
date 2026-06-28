import type { Product } from '@/assets/data/products'

export function ProductVideo({ product }: { product: Product }) {
  if (!product.video) return null

  return (
    <div className='overflow-hidden rounded-2xl border bg-card'>
      <div className='aspect-video'>
        <iframe
          src={`https://www.youtube.com/embed/${product.video.youtubeId}`}
          title={product.video.title}
          className='size-full'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          loading='lazy'
        />
      </div>
      <div className='border-t p-4'>
        <p className='text-sm font-medium'>{product.video.title}</p>
        <p className='text-muted-foreground text-xs'>Source: {product.video.source}</p>
      </div>
    </div>
  )
}
