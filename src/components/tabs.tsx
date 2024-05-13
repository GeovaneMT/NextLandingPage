'use client'

import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { useState } from 'react'

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
  content1: React.ReactNode
  content2: React.ReactNode
  content3: React.ReactNode
}

function TabsTrigger({
  value,
  children,
  isSelectedTab = false,
}: TabsTriggerProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative transition-all p-2 w-24 select-none rounded-full cursor-pointer dark:data-[state=active]:text-grayDark-gray1 data-[state=active]:text-gray-gray1"
    >
      {isSelectedTab && (
        <motion.section
          layoutId="activeTab"
          className="absolute -z-10 inset-0 bg-gray-gray10 dark:bg-grayDark-gray10 rounded-full outline-none border-none shadow-none"
        />
      )}
      {children}
    </Tabs.Trigger>
  )
}
function TabsList({ children }: TabsProps) {
  return (
    <Tabs.List
      aria-label="Manage your account"
      className="shrink-0 flex mx-auto p-2 w-min border-2 rounded-full border-gray-gray4 dark:border-grayDark-gray4"
    >
      {children}
    </Tabs.List>
  )
}
function TabsContent({ children, value }: TabsTriggerProps) {
  return (
    <Tabs.Content value={value} className="grow min-h-[15vh] p-5  outline-none">
      {children}
    </Tabs.Content>
  )
}
export function TabsJobs({
  title1,
  title2,
  title3,
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
          {title1}
        </TabsTrigger>
        <TabsTrigger value={title2} isSelectedTab={IscurrentTab === title2}>
          {title2}
        </TabsTrigger>
        <TabsTrigger value={title3} isSelectedTab={IscurrentTab === title3}>
          {title3}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={title1}>{content1}</TabsContent>
      <TabsContent value={title2}>{content2}</TabsContent>
      <TabsContent value={title3}>{content3}</TabsContent>
    </Tabs.Root>
  )
}
