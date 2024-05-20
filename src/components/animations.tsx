'use client'

import { motion, Variants } from 'framer-motion';

const elementsVariants: Variants = {
  hide: {
      opacity: 0,
      scale: 0.9,
  },
  show: {
      opacity: 1,
      scale: 1,
      transition: {
          delay: 0.2,
          duration: 0.4,
          ease: 'easeOut',
          
      },
  },
}

export function Animations({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={elementsVariants}
    >
      {children}
    </motion.main>
  )
}
