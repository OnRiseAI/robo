'use client'

import { useState } from 'react'

import { ChevronDownIcon } from 'lucide-react'

// Component Imports
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const ContactForm = () => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <form className='grid gap-6 md:grid-cols-2' onSubmit={e => e.preventDefault()}>
      <div className='space-y-6'>
        {/* Name & Date */}
        <div className='flex items-center gap-6'>
          <div className='w-full space-y-2'>
            <Label htmlFor='name'>Name</Label>
            <Input type='text' id='name' className='h-10' placeholder='Enter your name here...' />
          </div>

          <div className='w-full space-y-2'>
            <Label htmlFor='date' className='px-1'>
              Choose a Date
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant='outline' id='date' className='w-full justify-between font-normal'>
                  {date ? date.toLocaleDateString() : 'MM/DD/YYYY'}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={date => {
                    setDate(date)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Email */}
        <div className='w-full space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' className='h-10' placeholder='Enter your Email here...' />
        </div>

        {/* Message */}
        <div className='w-full space-y-2'>
          <Label htmlFor='message'>Message</Label>
          <Textarea id='message' className='h-28 resize-none' placeholder='Share what you need...' />
        </div>

        {/* What Would You Like to See? */}
        <div>
          <p className='mb-4 text-base font-medium'>What Would You Like to See?</p>
          <div className='grid gap-x-10 gap-y-4 sm:grid-cols-2'>
            <div className='flex items-center gap-3'>
              <Checkbox className='size-6' id='robo-setup' />
              <Label htmlFor='robo-setup' className='text-sm'>
                Robo Setup & Installation
              </Label>
            </div>
            <div className='flex items-center gap-3'>
              <Checkbox className='size-6' id='technical-capabilities' />
              <Label htmlFor='technical-capabilities' className='text-sm'>
                Technical Capabilities
              </Label>
            </div>
            <div className='flex items-center gap-3'>
              <Checkbox className='size-6' id='smart-diagnostics' />
              <Label htmlFor='smart-diagnostics' className='text-sm'>
                Smart Diagnostics
              </Label>
            </div>
            <div className='flex items-center gap-3'>
              <Checkbox className='size-6' id='feature-walkthrough' />
              <Label htmlFor='feature-walkthrough' className='text-sm'>
                Feature Walkthrough
              </Label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button type='submit' className='w-full text-base' size='lg' variant='outline'>
          Schedule a demo
        </Button>
      </div>

      {/* Map Section */}
      <div className='flex flex-col gap-2.5'>
        <p className='text-sm font-medium'>Choose Your location</p>
        <iframe
          className='size-full min-h-100 rounded-md dark:grayscale'
          src='https://maps.google.com/maps?hl=en&amp;q=%20new%20york+(New%20york)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          title='Google Maps'
        />
      </div>
    </form>
  )
}

export default ContactForm
