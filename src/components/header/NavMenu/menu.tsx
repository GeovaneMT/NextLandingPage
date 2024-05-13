'use client'

import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import { SetTabFromURL, useTabs, MenuClickHandler } from './use-client'

export interface Tab {
  title: string
}

export interface Path {
  path: string
}
interface MenuProps {
  tabsArray: Tab[]
  pathsArray: Path[]
}
export const Menu = ({ tabsArray, pathsArray }: MenuProps) => {
  const { currentTab, setCurrentTab } = useTabs()
  SetTabFromURL({ pathsArray, tabsArray, setCurrentTab })

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[25px] h-[25px] inline-flex items-center justify-center dark:text-gray-gray4 text-grayDark-gray4 bg-gray-gray4 dark:bg-grayDark-gray4 shadow-[0_2px_10px] shadow-grayDark-gray11 dark:shadow-grayDark-gray6 outline-none hover:bg-gray-gray7 dark:hover:bg-grayDark-gray7"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-gray-gray4 dark:bg-grayDark-gray4 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          {tabsArray.map((tab, index) => (
            <>
              <MenuClickHandler
                className="group text-[13px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-gray-gray8 data-[disabled]:pointer-events-none data-[highlighted]:bg-grayDark-gray11 dark:data-[highlighted]:bg-gray-gray11"
                key={tab.title}
                tab={tab}
                index={index}
                setCurrentTab={setCurrentTab}
                isSelected={tab.title === currentTab}
                path={pathsArray[index].path}
              />
              <DropdownMenu.Separator className="h-[1px] bg-gray-gray7 dark:bg-grayDark-gray7 m-[5px]" />
            </>
          ))}

          <DropdownMenu.Arrow className="fill-gray-gray4 dark:fill-grayDark-gray4" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
