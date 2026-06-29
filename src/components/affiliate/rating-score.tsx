import { NumberTicker } from '@/components/ui/number-ticker'
import { cn } from '@/lib/utils'

export function RatingScore({ score, label = 'Overall score', className }: { score?: number; label?: string; className?: string }) {
  if (!score) return null

  return (
    <div className={cn('flex items-end gap-2', className)}>
      <div className='font-[Orbitron] text-4xl font-semibold tracking-tight'>
        <NumberTicker value={score} decimalPlaces={1} />
      </div>
      <div className='pb-1.5 text-sm text-muted-foreground'>/10 {label}</div>
    </div>
  )
}
