import { ArrowUpRightIcon } from 'lucide-react'

import Link from 'next/link'

import FacebookIcon from '@/assets/svg/facebook-icon'
import InstagramIcon from '@/assets/svg/instagram-icon'
import LinkedinIcon from '@/assets/svg/linkedin-icon'

// Component Imports
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'
import { TextShimmer } from '@/components/blocks/text-shimmer'
import { MatterButton } from '@/components/ui/matter-button'
import { Separator } from '@/components/ui/separator'

export type TeamMember = {
  image: string
  name: string
  designation: string
  type: string
  facebookLink: string
  linkedinLink: string
  instagramLink: string
}

const TeamSection = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 flex flex-wrap items-end justify-between gap-x-16 gap-y-6 sm:mb-16 lg:mb-24'>
          <div className='space-y-4'>
            <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }}>
              <TextShimmer className='text-sm font-medium uppercase' duration={1.75}>
                Team
              </TextShimmer>
            </MotionPreset>
            <MotionPreset
              component='h2'
              className='text-2xl font-medium sm:text-3xl lg:text-4xl'
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.7 }}
              delay={0.3}
            >
              The People Behind Our Robotics
            </MotionPreset>
            <MotionPreset
              component='p'
              className='text-muted-foreground text-lg'
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.7 }}
              delay={0.6}
            >
              A focused team of leaders, engineers, and designers working together to build intelligent systems.
            </MotionPreset>
          </div>

          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }} delay={0.6}>
            <MatterButton asChild>
              <Link href='#'>
                View all team members
                <ArrowUpRightIcon />
              </Link>
            </MatterButton>
          </MotionPreset>
        </div>

        <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }} delay={0.9}>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {teamMembers.map((item, index) => (
              <Card key={index} className='group overflow-hidden py-0 shadow-none'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                />

                <CardContent className='-mt-13 flex h-full w-[calc(100%+2px)] flex-col items-center justify-center gap-3.5 bg-[linear-gradient(111deg,color-mix(in_oklab,var(--background)40%,transparent)_-8.95%,color-mix(in_oklab,var(--background)1%,transparent)_114%)] p-5 text-center backdrop-blur-[50px]'>
                  <div className='space-y-3'>
                    <h3 className='text-2xl font-medium'>{item.name}</h3>
                    <p className='text-muted-foreground text-base font-medium'>{item.designation}</p>
                  </div>
                  <Separator />
                  <div className='flex items-center justify-center gap-3'>
                    <Link href={item.facebookLink} aria-label='Facebook Link'>
                      <FacebookIcon className='size-5.5 shrink-0' />
                    </Link>
                    <Link href={item.linkedinLink} aria-label='LinkedIn Link'>
                      <LinkedinIcon className='size-5.5 shrink-0' />
                    </Link>
                    <Link href={item.instagramLink} aria-label='Instagram Link'>
                      <InstagramIcon className='size-5.5 shrink-0' />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default TeamSection
