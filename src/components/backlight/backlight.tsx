import * as Tabs from '@radix-ui/react-tabs'

import { useEffect, useState } from 'react'
import { TabItem } from './tabItem'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Tab {
  title: string
}

interface BacklightProps {
  tabsArray: Tab[]
}

export function Backlight({ tabsArray }: BacklightProps) {
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

  const [currentTab, setCurrentTab] = useState('Home')
  const [parent] = useAutoAnimate()

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      className="relative glow-capture w-full"
    >
      <Tabs.List className="w-full flex justify-evenly gap-2 border-2 border-b-1 border-transparent">
        {tabsArray.map((tab) => (
          <TabItem
            key={tab.title}
            ref={parent}
            value={tab.title}
            title={tab.title}
            IsSelected={currentTab === tab.title}
          />
        ))}
      </Tabs.List>
      <Tabs.Content value="Home">
        <div className="glow-overlay ">ok</div>
      </Tabs.Content>
    </Tabs.Root>
  )
}
