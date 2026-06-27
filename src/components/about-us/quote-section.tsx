// Component Imports
import { TextReveal } from '@/components/ui/text-reveal'

const QuoteSection = () => {
  return (
    <TextReveal>
      We build intelligent systems{' '}
      <img src='/images/quote-image-1.webp' alt='avatar 1' className='h-9 rounded-full sm:h-10 lg:h-15 xl:h-18' />{' '}
      grounded in trust and{' '}
      <img src='/images/quote-image-2.webp' alt='avatar 2' className='h-9 rounded-full sm:h-10 lg:h-15 xl:h-18' />{' '}
      thoughtful innovation designed to work in everyday life.
    </TextReveal>
  )
}

export default QuoteSection
