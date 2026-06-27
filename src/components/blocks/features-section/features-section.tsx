import Spline from '@splinetool/react-spline'

// Component Imports
import { MotionPreset } from '@/components/ui/motion-preset'
import { NumberTicker } from '@/components/ui/number-ticker'
import { TextScramble } from '@/components/blocks/text-scramble'

const Features = () => {
  return (
    <section
      id='features'
      className='relative mx-auto flex h-full min-h-200 w-full max-w-7xl items-center overflow-hidden lg:items-end lg:pb-8 xl:pb-20'
    >
      <div className='divide-border flex flex-col divide-y max-sm:w-full lg:z-2'>
        {/* Height */}
        <MotionPreset fade slide transition={{ duration: 0.8 }} className='px-8 py-3 md:pe-16 lg:pe-24'>
          <div className='space-y-1'>
            <h3 className='text-muted-foreground text-xl'>Height</h3>
            <p className='text-4xl font-semibold'>
              <NumberTicker startValue={0} value={5} delay={0.2} />
              &rsquo;
              <NumberTicker startValue={0} value={8} delay={0.2} />
            </p>
          </div>
        </MotionPreset>

        {/* Weight */}
        <MotionPreset fade slide transition={{ duration: 0.8 }} className='px-8 py-3 md:pe-16 lg:pe-24'>
          <div className='space-y-1'>
            <h3 className='text-muted-foreground text-xl'>Weight</h3>
            <p className='text-4xl font-semibold'>
              <NumberTicker startValue={0} value={48} />
              KG
            </p>
          </div>
        </MotionPreset>

        {/* Payload */}
        <MotionPreset fade slide transition={{ duration: 0.8 }} className='px-8 py-3 md:pe-16 lg:pe-24'>
          <div className='space-y-1'>
            <h3 className='text-muted-foreground text-xl'>Payload</h3>
            <p className='text-4xl font-semibold'>
              <NumberTicker startValue={0} value={18} />
              KG
            </p>
          </div>
        </MotionPreset>

        {/* Speed */}
        <MotionPreset fade slide transition={{ duration: 0.8 }} className='px-8 py-3 md:pe-16 lg:pe-24'>
          <div className='space-y-1'>
            <h3 className='text-muted-foreground text-xl'>Battery life</h3>
            <p className='text-4xl font-semibold'>
              <NumberTicker startValue={0} value={12} />
              HR
            </p>
          </div>
        </MotionPreset>

        {/* Speed */}
        <MotionPreset fade slide transition={{ duration: 0.8 }} className='px-8 py-3 md:pe-16 lg:pe-24'>
          <div className='space-y-1'>
            <h3 className='text-muted-foreground text-xl'>Speed</h3>
            <p className='text-4xl font-semibold'>
              <NumberTicker startValue={0} value={1.2} decimalPlaces={2} />
              M/S
            </p>
          </div>
        </MotionPreset>

        {/* System */}
        <MotionPreset fade slide transition={{ duration: 0.8 }} className='px-8 py-3 md:pe-16 lg:pe-24'>
          <div className='space-y-1'>
            <h3 className='text-muted-foreground text-xl'>System</h3>
            <TextScramble className='text-4xl font-semibold uppercase' delay={1}>
              Electric
            </TextScramble>
          </div>
        </MotionPreset>
      </div>

      <div className='absolute inset-0 h-[90%] max-lg:-right-1/2 max-sm:-right-full lg:hidden'>
        <Spline scene='https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode' />
        <div className='from-background absolute inset-x-0 -bottom-0.5 h-10 bg-linear-to-t to-transparent' />
      </div>
    </section>
  )
}

export default Features
