'use client'

import { motion, Variants } from 'framer-motion';

const elementsVariants: Variants = {
  hide: {
      opacity: 0,
      scale: 0.99,
  },
  show: {
      opacity: 1,
      scale: 1,
      transition: {
          duration: 0.4,
          ease: 'easeOut'
      },
  },
}

export default function Template({ children }: { children: React.ReactNode }) {
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
