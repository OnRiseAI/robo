import type { AboutUsData } from '@/components/about-us/mission-section'

export const missionData: AboutUsData = {
  leftImage: {
    src: '/images/mission-image-1.webp',
    alt: 'Team collaboration',
    buttonText: 'Our Journey',
    buttonLink: '#'
  },
  rightImage: {
    src: '/images/mission-image-2.webp',
    alt: 'Office workspace',
    buttonText: 'Our Commitment',
    buttonLink: '#'
  },
  stats: [
    {
      value: '10K+',
      title: 'Homes Assisted',
      description: 'A growing community that trusts our robots to handle daily tasks '
    },
    {
      value: '15K+',
      title: 'Happy Families',
      description: 'Proof that thoughtful engineering and human-centric design can enhance everyday living experiences.'
    }
  ]
}
