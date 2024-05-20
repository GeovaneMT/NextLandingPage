'use client'

import React from 'react'
import { useState } from 'react'
import { TabsList, TabsTrigger, TabsContent } from './tabs-structure'
import * as Tabs from '@radix-ui/react-tabs'

interface TabsInfoProps {
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

export function TabsInfo({
  title1,
  title2,
  title3,
  icon1,
  icon2,
  icon3,
  content1,
  content2,
  content3,
}: TabsInfoProps) {
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

      <TabsContent value={title1}> {content1} </TabsContent>
      <TabsContent value={title2}> {content2} </TabsContent>
      <TabsContent value={title3}> {content3} </TabsContent>

    </Tabs.Root>
  )
}
