'use client'

import { TabItem } from './tabItem'
import { Path, Tab } from './backlight'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface TabHook {
  currentTab: string
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>
}

export const useTabs = (): TabHook => {
  const [currentTab, setCurrentTab] = useState<string>('')
  return { currentTab, setCurrentTab }
}

interface TabClickHandlerProps {
  tab: Tab
  path: string
  index: number
  isSelected: boolean
  setCurrentTab: (tab: string) => void
}
interface MenuClickHandlerProps {
  tab: Tab
  path: string
  index: number
  isSelected: boolean
  className: string
  setCurrentTab: (tab: string) => void
}

export function MenuClickHandler({
  tab,
  path,
  setCurrentTab,
  isSelected,
  className,
}: MenuClickHandlerProps) {
  const router = useRouter()

  useEffect(() => {
    if (isSelected) {
      setCurrentTab(tab.title)
    }
  }, [isSelected, setCurrentTab, tab.title])

  function handleClick() {
    setCurrentTab(tab.title)
    router.push(path)
  }

  return (
    <div onClick={handleClick}>
      <DropdownMenu.Item className={className}>{tab.title}</DropdownMenu.Item>
    </div>
  )
}

export function TabClickHandler({
  tab,
  path,
  setCurrentTab,
  isSelected,
}: TabClickHandlerProps) {
  const router = useRouter()

  useEffect(() => {
    if (isSelected) {
      setCurrentTab(tab.title)
    }
  }, [isSelected, setCurrentTab, tab.title])

  function handleClick() {
    setCurrentTab(tab.title)
    router.push(path)
  }

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <TabItem value={tab.title} title={tab.title} isSelected={isSelected} />
      <div className="glow-overlay" />
    </div>
  )
}

interface SetTabFromURLProps {
  pathsArray: Path[]
  tabsArray: Tab[]
  setCurrentTab: (tab: string) => void
}

export function SetTabFromURL({
  pathsArray,
  tabsArray,
  setCurrentTab,
}: SetTabFromURLProps) {
  const pathname = usePathname()

  useEffect(() => {
    const matchingIndex = pathsArray.findIndex(
      (item) => '/' + item.path === pathname
    )
    const defaultIndex = pathsArray.findIndex((item) => item.path === '/')

    if (matchingIndex !== -1) {
      setCurrentTab(tabsArray[matchingIndex].title)
    } else if (defaultIndex !== -1) {
      setCurrentTab(tabsArray[defaultIndex].title)
    }
  }, [pathname, pathsArray, tabsArray, setCurrentTab])
}

export interface GlobalEffectHook {
  useGlowEffect: () => void
}

export function useGlowEffect() {
  const handleMouseMove = (event: MouseEvent, capture: HTMLDivElement) => {
    const { pageX, pageY } = event
    const x = pageX - capture.offsetLeft
    const y = pageY - capture.offsetTop
    const overlay = capture.querySelector('.glow-overlay') as HTMLElement

    overlay.style.setProperty('--glow-x', `${x}px`)
    overlay.style.setProperty('--glow-y', `${y}px`)
    overlay.style.setProperty('--glow-opacity', '1')
  }

  const handleMouseLeave = (capture: HTMLDivElement) => {
    const overlay = capture.querySelector('.glow-overlay') as HTMLElement
    overlay.style.setProperty('--glow-opacity', '0')
  }

  useEffect(() => {
    if (typeof document === 'undefined') return

    const html = document.querySelector('html') as HTMLElement

    const captures = document.querySelectorAll(
      '.glow-capture'
    ) as NodeListOf<HTMLDivElement>

    const defaultOverlay = document.querySelectorAll(
      '.glow-overlay'
    ) as NodeListOf<HTMLDivElement>

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const theme = html.classList.contains('dark') ? 'dark' : 'light'
          const glowColor = theme === 'light' ? 'black' : 'white'
          defaultOverlay.forEach((overlay) => {
            overlay.style.setProperty('--glow-color', glowColor)
          })
        }
      }
    })

    observer.observe(html, { attributes: true })

    captures.forEach((capture) => {
      const clonedChild = capture.children[0].cloneNode(true)

      const overlay = capture.querySelector('.glow-overlay') as HTMLElement

      overlay.appendChild(clonedChild)

      capture.addEventListener('mousemove', (event) =>
        handleMouseMove(event, capture)
      )

      capture.addEventListener('mouseleave', () => handleMouseLeave(capture))
    })

    return () => {
      observer.disconnect()
      captures.forEach((capture) => {
        capture.removeEventListener('mousemove', () => handleMouseMove)
        capture.removeEventListener('mouseleave', () => handleMouseLeave)
      })
    }
  }, [])
}
