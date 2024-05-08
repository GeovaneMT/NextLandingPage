'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { useGlowEffect, SetTabFromURL, useTabs, TabClickHandler } from './use-client'

export interface Tab {
  title: string
}

export interface Path {
  path: string
}

interface BacklightProps {
  tabsArray: Tab[]
  pathsArray: Path[]
}

export function Backlight({ tabsArray, pathsArray }: BacklightProps) {
  const { currentTab, setCurrentTab } = useTabs()

  useGlowEffect()
  SetTabFromURL({ pathsArray, tabsArray, setCurrentTab })

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      className="relative glow-capture w-max"
    >
      <Tabs.List className="w-full flex justify-evenly gap-2 border-2 border-b-1 border-transparent">
        {tabsArray.map((tab, index) => (
          <TabClickHandler
            key={tab.title}
            tab={tab}
            index={index}
            setCurrentTab={setCurrentTab}
            isSelected={tab.title === currentTab}
            path={pathsArray[index].path}
          />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}