import * as Tabs from '@radix-ui/react-tabs'

import { useEffect, useState } from 'react'
import { TabItem } from './tabItem'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation';


interface Tab {
  title: string
}

interface BacklightProps {
  tabsArray: Tab[]
}

export function Backlight({ tabsArray }: BacklightProps) {
  const router = useRouter()
  const [currentTab, setCurrentTab] = useState('')
  const [parent] = useAutoAnimate()

  function sanitizeTitle(title: string): string {
    const unaccentedTitle = title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    const regex = /[^\w\s]/g

    return unaccentedTitle.replace(regex, '')
  }

  const currentPath = usePathname();

  useEffect(() => {
    // Function to desanitize title from sanitized URL path
    const desanitizeTitle = (sanitizedTitle: string): string => {
      return sanitizedTitle.replace(/_/g, ' ').replace(/(\s+)/g, '-');
    };

    // Extract tab name from the sanitized URL path
    const tabFromPath = currentPath.substring(1); // Remove leading '/'
    const currentTab = desanitizeTitle(tabFromPath);

    // Set the current tab
    setCurrentTab(currentTab);

  }, [])


  function handleClick(tab: string) {
    let path = '/';
    if (tab !== 'Home') {
      const sanitizedTab = sanitizeTitle(tab);
      path = `/${sanitizedTab}`;
    }
    setCurrentTab(tab);
    router.push(path);
  }

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const captures = document.querySelectorAll('.glow-capture')

      captures.forEach((capture) => {
        const clonedChild = capture.children[0].cloneNode(true)
        const overlay = capture.querySelector('.glow-overlay')

        overlay.appendChild(clonedChild)

        capture.addEventListener('mousemove', (event) => {
          const x = event.pageX - capture.offsetLeft
          const y = event.pageY - capture.offsetTop

          overlay.style.setProperty('--glow-x', `${x}px`)
          overlay.style.setProperty('--glow-y', `${y}px`)
          overlay.style.setProperty('--glow-opacity', '1')
        })

        capture.addEventListener('mouseleave', () => {
          overlay.style.setProperty('--glow-opacity', '0')
        })
      })
    }
  }, [])
  
  return (
    <Tabs.Root
      ref={parent}
      value={currentTab}
      onValueChange={handleClick}
      className="relative glow-capture w-full"
    >
      <Tabs.List className="w-full flex justify-evenly gap-2 border-2 border-b-1 border-transparent">
        {tabsArray.map((tab) => (
          <>
            <TabItem
              key={tab.title}
              value={tab.title}
              title={tab.title}
              IsSelected={currentTab === tab.title}
            />
            <div className="glow-overlay " />
          </>
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
