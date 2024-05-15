'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './button'
import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'

interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  isSelectedTab?: boolean
}

interface TabsProps {
  children: React.ReactNode
}

interface TabsJobsProps {
  title1: string
  title2: string
  title3: string
  icon1: React.ReactNode
  icon2: React.ReactNode
  icon3: React.ReactNode
  content1: React.ReactNode
  content2: React.ReactNode
  content3: React.ReactNode
}

function TabsList({ children }: TabsProps) {
  return (
    <Tabs.List
      id='content'
      aria-label="Manage your account"
      className="w-max backdrop-blur-[.8px] text-xs md:text-base shrink-0 flex mx-auto p-2 md:w-max md:gap-4 border bg-gray-gray4/5 rounded-full border-gray-gray4 dark:border-grayDark-gray4"
    >
      {children}
    </Tabs.List>
  )
}

function TabsTrigger({
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
        <motion.section
          layoutId="activeTab"
          className="absolute -z-10 inset-0 bg-grayDark-gray1  dark:bg-gray-gray1 rounded-full"
        />
      )}
        <Link href='#content' className='h-full py-1 px-2 md:py-2 md:px-4 flex items-center justify-center gap-2 md:gap-4 w-full '>
          {children}
        </Link>
    </Tabs.Trigger>
  )
}

function TabsContent({ children, value }: TabsTriggerProps) {
  return (
    <Tabs.Content 
      value={value} 
      className="grow min-h-[50vh] p-5 mt-[18vh] border-2 border-gray-gray4 dark:border-grayDark-gray4 rounded-xl"
    > 
        <div className='flex flex-col gap-4 h-[calc(50vh-2rem)]'>
          <div className='h-full text-justify'>
            {children}
          </div>
          <Link href='https://wa.me/5511966019898' target='_blank' className='self-center'>
            <Button variant="outline" title="Entre em Contato" />
          </Link>
        </div>
    </Tabs.Content>
  )
}
export function TabsJobs({
  title1,
  title2,
  title3,
  icon1,
  icon2,
  icon3,
  content1,
  content2,
  content3,
}: TabsJobsProps) {
  const [IscurrentTab, setIsCurrentTab] = useState(title2)

  return (
    <Tabs.Root
      value={IscurrentTab}
      onValueChange={setIsCurrentTab}
      className="flex flex-col"
      defaultValue={title2}
    >
      <TabsList>
        <TabsTrigger value={title1} isSelectedTab={IscurrentTab === title1}>
          {title1}{icon1}
        </TabsTrigger>
        <TabsTrigger value={title2} isSelectedTab={IscurrentTab === title2}>
          {title2}{icon2}
        </TabsTrigger>
        <TabsTrigger value={title3} isSelectedTab={IscurrentTab === title3}>
          {title3}{icon3}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={title1}>{content1}</TabsContent>
      <TabsContent value={title2}>{content2}</TabsContent>
      <TabsContent value={title3}>{content3}</TabsContent>
    </Tabs.Root>
  )
}
