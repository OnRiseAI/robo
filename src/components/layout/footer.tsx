import Link from 'next/link'

import { ArrowRightIcon } from 'lucide-react'

import GithubIcon from '@/assets/svg/github-icon'
import InstagramIcon from '@/assets/svg/instagram-icon'
import TwitchIcon from '@/assets/svg/twitch-icon'
import YoutubeIcon from '@/assets/svg/youtube-icon'

import { Input } from '@/components/ui/input'
import Logo from '@/assets/svg/logo'
import { MatterButton } from '@/components/ui/matter-button'

const Footer = () => {
  return (
    <footer>
      <div className='relative mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between gap-8 py-8 max-lg:flex-col sm:py-16 lg:py-24 lg:max-xl:gap-10'>
          <div className='max-w-95.5 space-y-8 max-lg:space-y-6'>
            <Link href='/#home' className='inline-flex items-center gap-3'>
              <Logo className='size-8' />
              <span className='font-[Orbitron] text-[1.75rem] leading-6.5 font-semibold'>Matter</span>
            </Link>

            <div className='flex flex-col gap-8 max-lg:gap-4'>
              <div>
                <p className='text-lg font-medium'>Subscribe to newsletter</p>
                <p className='text-muted-foreground'>
                  Have questions or need assistance? Get in touch with our team for personalised support.
                </p>
              </div>

              <div className='flex w-full items-center gap-3'>
                <Input type='email' placeholder='Your email...' className='h-10 rounded-full' />
                <MatterButton className='size-10 [&>button]:size-8 [&>button]:px-0' aria-label='Submit button'>
                  <ArrowRightIcon />
                </MatterButton>
              </div>

              <div className='flex items-center gap-4'>
                <Link href='#' target='#' aria-label='Github Link'>
                  <GithubIcon className='text-muted-foreground hover:text-primary size-5' />
                </Link>
                <Link href='#' target='#' aria-label='Instagram Link'>
                  <InstagramIcon className='text-muted-foreground hover:text-primary size-5' />
                </Link>
                <Link href='#' target='#' aria-label='Twitch Link'>
                  <TwitchIcon className='text-muted-foreground hover:text-primary size-5' />
                </Link>
                <Link href='#' target='#' aria-label='Youtube Link'>
                  <YoutubeIcon className='text-muted-foreground hover:text-primary size-5' />
                </Link>
              </div>
            </div>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:max-xl:gap-6 xl:min-w-172'>
            <div className='flex flex-col gap-8'>
              <span className='text-muted-foreground pl-18 max-lg:pl-18 md:text-lg lg:text-xl'>Useful links</span>
              <ul className='space-y-8'>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>01</span>
                  <Link href='#' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    Career
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>02</span>
                  <Link href='#' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    Help
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>03</span>
                  <Link href='#' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    Works
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>04</span>
                  <Link href='#' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    News
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>05</span>
                  <Link href='#' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    Partners
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>06</span>
                  <Link href='#' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    Community
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>07</span>
                  <Link href='#' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-8'>
              <span className='text-muted-foreground pl-18 max-lg:pl-18 md:text-lg lg:text-xl'>Pages</span>
              <ul className='space-y-8'>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>01</span>
                  <Link href='/#features' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    Features
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>02</span>
                  <Link href='/#use-cases' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    Use cases
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>04</span>
                  <Link href='/#testimonials' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    Testimonials
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>03</span>
                  <Link href='/about-us' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    About us
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>05</span>
                  <Link href='/blog' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    Blogs
                  </Link>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>06</span>
                  <Link href='/faqs' className='link-animated text-2xl sm:text-3xl lg:text-4xl'>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='text-muted-foreground flex flex-wrap items-center gap-6 py-6 text-nowrap md:justify-end'>
          <Link href='#' className='hover:text-foreground font-light underline transition-colors duration-300'>
            Terms & condition
          </Link>
          <Link href='#' className='hover:text-foreground font-light underline transition-colors duration-300'>
            Privacy policy
          </Link>
          <Link href='#' className='hover:text-foreground font-light underline transition-colors duration-300'>
            Accessibility statement
          </Link>
          <Link href='/' className='hover:text-foreground font-light'>
            © Matter {new Date().getFullYear()}
          </Link>
        </div>

        <img
          src='/images/footer-illustration.webp'
          alt='robot'
          className='absolute -bottom-16 left-15.5 w-95 rotate-15 max-lg:hidden xl:w-105'
        />
      </div>
    </footer>
  )
}

export default Footer
