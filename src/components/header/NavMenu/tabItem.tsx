import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className={`relative px-2 text-center rounded-md mr-0. w-full glow glow:ring-1 glow:border-glow glow:text-glow glow:ring-glow glow:border-glow/[15] glow:text-glow/[15] glow:bg-glow/[.01] dark:glow:bg-glow/[.08] text-gray-gray10 dark:text-grayDark-gray10 data-[state=active]:text-grayDark-gray1 dark:data-[state=active]:text-gray-gray1`}
    >
      <span>{title}</span>
      {isSelected && (
        <motion.div
          animate={{ transform: 'scale(1)' }}
          transition={{ delay: 0.2 }}
          layoutId="activeTabItem"
          className="absolute inset-x-0 h-[1.1px] dark:bg-gray-gray1 bg-grayDark-gray1 -bottom-5 rounded-full"
        />
      )}
    </Tabs.Trigger>
  )
}
