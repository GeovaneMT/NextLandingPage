'use client'

import { motion } from 'framer-motion'

export function TabsMotion() {
  return (
    <motion.section
    layoutId="activeTab"
    className="absolute -z-10 inset-0 bg-grayDark-gray1  dark:bg-gray-gray1 rounded-full"
    />
  )
}