'use client'

import { useEffect, useState } from 'react'

// Component Imports
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

export type FaqItem = {
  question: string
  answer: string
}

export type FaqCategory = {
  id: string
  title: string
  questions: FaqItem[]
}

const FaqSection = ({ faqData }: { faqData: FaqCategory[] }) => {
  const [activeCategory, setActiveCategory] = useState<string>(faqData[0]?.id || '')

  useEffect(() => {
    const handleScroll = () => {
      const categoryIds = faqData.map(category => category.id)
      const offset = 200

      // Get all category elements
      const categoryElements = categoryIds
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)

      if (categoryElements.length === 0) return

      // Find which category is currently in view
      const scrollPosition = window.scrollY + offset

      // Check each category from bottom to top
      for (let i = categoryElements.length - 1; i >= 0; i--) {
        const element = categoryElements[i]
        const rect = element.getBoundingClientRect()
        const elementTop = window.scrollY + rect.top

        if (scrollPosition >= elementTop) {
          setActiveCategory(categoryIds[i])

          return
        }
      }

      // If we haven't found any category yet, default to first
      setActiveCategory(categoryIds[0])
    }

    // Initial check
    handleScroll()

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [faqData])

  // In the component
  const handleCategoryClick = (categoryId: string) => {
    document.getElementById(categoryId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className='bg-background py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* FAQ Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            className='text-2xl font-semibold sm:text-3xl lg:text-4xl'
            component='h1'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.7 }}
          >
            Common Questions We Get
          </MotionPreset>

          <MotionPreset
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.7 }}
            delay={0.3}
          >
            Here are some frequently asked questions about how AI can enhance user experience.
          </MotionPreset>
        </div>

        <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.7 }} delay={0.6}>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4'>
            {/* Left Sidebar - Sticky Category Navigation */}
            <aside>
              <div className='sticky top-40 space-y-2'>
                {faqData.map(category => {
                  const isActive = activeCategory === category.id

                  return (
                    <Button
                      key={category.id}
                      size='lg'
                      onClick={() => handleCategoryClick(category.id)}
                      className={cn(
                        'text-primary focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 w-full justify-start rounded-lg text-base',
                        isActive ? 'bg-primary/10 hover:bg-primary/10' : 'hover:bg-primary/5 bg-transparent'
                      )}
                    >
                      {category.title}
                    </Button>
                  )
                })}
              </div>
            </aside>

            {/* Right Content - FAQ Accordions */}
            <div className='md:col-span-2 lg:col-span-3'>
              <div className='space-y-8'>
                {faqData.map(category => {
                  return (
                    <div
                      key={category.id}
                      id={category.id}
                      className='scroll-mt-40 transition-opacity duration-300'
                      onClick={() => {
                        setActiveCategory(category.id)
                      }}
                    >
                      <Accordion type='single' collapsible className='bg-muted w-full rounded-lg' defaultValue='item-1'>
                        {category.questions.map(({ question, answer }, index) => (
                          <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className='px-5 text-base'>{question}</AccordionTrigger>
                            <AccordionContent className='text-muted-foreground px-5 pt-4 text-base'>
                              {answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default FaqSection
