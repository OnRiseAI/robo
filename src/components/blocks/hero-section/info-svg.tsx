'use client'

import { motion } from 'motion/react'

const InfoSvg = ({ className, isHovered }: { className?: string; isHovered?: boolean }) => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='267'
      height='117'
      viewBox='0 0 267 117'
      fill='none'
      className={className}
      initial='hidden'
      animate={isHovered ? 'visible' : 'hidden'}
    >
      <motion.path
        d='M0.0585938 0.998291L184.007 11.7286L265.251 115.966'
        stroke='currentColor'
        strokeWidth='2'
        variants={{
          hidden: {
            pathLength: 0,
            opacity: 0
          },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: 'easeInOut'
            }
          }
        }}
      />
    </motion.svg>
  )
}

export default InfoSvg
