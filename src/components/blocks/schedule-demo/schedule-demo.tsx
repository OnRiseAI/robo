import type { ComponentType } from 'react'

import Link from 'next/link'

// Component Imports
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import ContactForm from '@/components/blocks/schedule-demo/contact-form'

type ContactCard = {
  icon: ComponentType
  title: string
  description: string
  ctaText: string
  ctaLink: string
}[]

const ScheduleDemo = ({ contactCards }: { contactCards: ContactCard }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 text-center sm:mb-16 lg:mb-24'>
          <h1 className='mb-4 text-2xl font-semibold sm:text-3xl lg:text-4xl'>Experience Robo in Action</h1>
          <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
            Book a personalized demo with our team and explore the technology behind Robo from real-time navigation to
            advanced automation features.
          </p>
        </div>

        <Card className='shadow-none'>
          <CardContent>
            {/* Contact Form */}
            <ContactForm />
          </CardContent>
        </Card>

        {/* Contact Cards */}
        <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {contactCards.map((contact, index) => (
            <Card
              key={index}
              className='hover:bg-primary hover:border-primary group shadow-none transition-all duration-300'
            >
              <CardContent className='flex flex-col gap-4'>
                <Avatar className='size-11.5 rounded-lg after:border-0'>
                  <AvatarFallback className='bg-primary/10 text-card-foreground group-hover:bg-primary-foreground group-hover:text-primary rounded-lg transition-all duration-300 [&>svg]:size-7'>
                    <contact.icon />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className='mb-2 space-y-0.5'>
                    <h3 className='group-hover:text-primary-foreground text-lg font-semibold transition-all duration-300'>
                      {contact.title}
                    </h3>
                    <p className='text-muted-foreground group-hover:text-primary-foreground text-base transition-all duration-300'>
                      {contact.description}
                    </p>
                  </div>
                  <Button
                    className='bg-primary/10 text-primary group-hover:bg-secondary group-hover:text-secondary-foreground hover:bg-primary/20 group-hover:hover:bg-secondary focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 w-full'
                    size='lg'
                  >
                    <Link href={contact.ctaLink} target='_blank'>
                      {contact.ctaText}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScheduleDemo
