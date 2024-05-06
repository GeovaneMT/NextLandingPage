'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  IsSelected?: boolean
}
export function TabItem({ value, title, IsSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-2 text-center rounded-md mr-0. w-full glow glow:ring-1 glow:border-glow glow:ring-glow glow:border-glow/[.15] glow:bg-glow/[.03] data-[state=active]:text-orange-600"
    >
      <span>{title}</span>
      {IsSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-x-0 h-0.5 bg-zinc-50 -bottom-5 rounded-full"
        />
      )}
    </Tabs.Trigger>
  )
}
