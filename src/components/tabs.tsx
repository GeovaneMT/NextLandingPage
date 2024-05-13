'use client'

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactNode;
}

interface TabsJobsProps {
  title1: string
  title2: string
  title3: string
  content1: React.ReactNode
  content2: React.ReactNode
  content3: React.ReactNode
}

function TabsTrigger({ value, children }: TabsTriggerProps) {
  return (
    <Tabs.Trigger
      value={value} 
      className='flex flex-1 items-center justify-center text-[15px] leading-none px-5 h-[45px] select-none rounded-full data-[state=active]:bg-black dark:data-[state=active]:bg-white data-[state=active]:text-gray-gray1 dark:data-[state=active]:text-grayDark-gray1 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] outline-none cursor-default bg-transparent dark:bg-transparent hover:cursor-pointer dark:text-gray-gray1 text-grayDark-gray1'
    >
      {children}
    </Tabs.Trigger >
  )
}
function TabsList({ children }: TabsProps) {
  return (
    <Tabs.List
      aria-label="Manage your account"
      className="shrink-0 flex mx-auto p-2 w-min border-2 rounded-full border-gray-gray4" 
    >
      {children}
    </Tabs.List >
  )
}
function TabsContent({ children, value }: TabsTriggerProps) {
  return (
    <Tabs.Content
      value={value}
      className="grow min-h-[15vh] p-5  outline-none"
    >
      {children}
    </Tabs.Content >
  )
}
export const TabsJobs= ({title1, title2, title3, content1, content2, content3}: TabsJobsProps) => (
  <Tabs.Root
    className="flex flex-col"
    defaultValue={title2}
  >
    <TabsList>
      <TabsTrigger
        value={title1}
      >
        {title1}
      </TabsTrigger>
      <TabsTrigger
        value={title2}
      >
        {title2}
      </TabsTrigger>
      <TabsTrigger
        value={title3}
      >
        {title3}
      </TabsTrigger>
    </TabsList>
    <TabsContent
      value={title1}
    >
      {content1}
    </TabsContent>
    <TabsContent
      value={title2}
    >
      {content2}
    </TabsContent>
    <TabsContent
      value={title3}
    >
      {content3}
    </TabsContent>
  </Tabs.Root>
)