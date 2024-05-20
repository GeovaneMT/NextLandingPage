import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/button'
import { Animations } from '@/components/animations'
import { TabsMotion } from './tabs-motion'
import * as Tabs from '@radix-ui/react-tabs'

interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  isSelectedTab?: boolean
}

interface TabsProps {
  children: React.ReactNode
}

export function TabsList({ children }: TabsProps) {
  return (
    <Tabs.List
      aria-label="Manage your account"
      className="mb-[24vh] w-max backdrop-blur-[.8px] text-xs md:text-base shrink-0 flex mx-auto p-2 md:w-max md:gap-4 border bg-gray-gray4/5 rounded-full border-gray-gray4 dark:border-grayDark-gray4"
    >
        {children}
    </Tabs.List>
  )
}

export function TabsTrigger({
  value,
  children,
  isSelectedTab = false,
}: TabsTriggerProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative select-none rounded-full dark:data-[state=active]:text-grayDark-gray1 data-[state=active]:text-gray-gray1"
    >
      {isSelectedTab && (
        <TabsMotion />
      )}
        <Link href='#content' className='h-full py-1 px-2 md:py-2 md:px-4 flex items-center justify-center gap-2 md:gap-4 w-full '>
          {children}
        </Link>
    </Tabs.Trigger>
  )
}

export function TabsContent({ children, value }: TabsTriggerProps) {
  return (
    <Animations>
      <Tabs.Content 
        value={value} 
        className="grow min-h-[calc(70vh-4rem)] p-5 border-2 border-gray-gray4 dark:border-grayDark-gray4 rounded-xl"
      > 
          <div className='flex flex-col gap-4 h-[calc(70vh-4rem)]'>
            <div className='flex flex-col justify-evenly h-full text-justify'>
              {children}
            </div>
            <Link href='https://wa.me/5511966019898' target='_blank' className='self-center'>
              <Button variant="outline" title="Entre em Contato" />
            </Link>
          </div>
      </Tabs.Content>
    </Animations>
  )
}