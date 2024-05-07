import * as Tabs from '@radix-ui/react-tabs'
import { useEffect, useState } from 'react'
import { TabItem } from './tabItem'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

interface Tab {
  title: string
}

interface Path {
  path: string
}

interface BacklightProps {
  tabsArray: Tab[]
  pathsArray: Path[]
}

export function Backlight({ tabsArray, pathsArray }: BacklightProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [currentTab, setCurrentTab] = useState('')

  function handleClick(tab: Tab, index: number) {
    setCurrentTab(tab.title)
    router.push(pathsArray[index].path)
  }

  useEffect(() => {
    pathsArray.forEach((item, index) => {
      if ('/' + item.path === pathname) {
        setCurrentTab(tabsArray[index].title)
      }
      if (item.path === '/') {
        setCurrentTab(tabsArray[0].title)
      }
    })
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return;
  
    const html = document.querySelector('html');
    const captures = document.querySelectorAll('.glow-capture');
    const defaultOverlay = document.querySelectorAll('.glow-overlay');
  
    const observer = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const theme = html.classList.contains('dark') ? 'dark' : 'light';
          const glowColor = theme === 'light' ? 'black' : 'white';
          defaultOverlay.forEach(overlay => {
            overlay.style.setProperty('--glow-color', glowColor);
          });
        }
      }
    });
  
    observer.observe(html, { attributes: true });
  
    captures.forEach(capture => {
      const clonedChild = capture.children[0].cloneNode(true);
      const overlay = capture.querySelector('.glow-overlay');
  
      overlay.appendChild(clonedChild);
  
      capture.addEventListener('mousemove', event => {
        const { pageX, pageY } = event;
        const x = pageX - capture.offsetLeft;
        const y = pageY - capture.offsetTop;
  
        overlay.style.setProperty('--glow-x', `${x}px`);
        overlay.style.setProperty('--glow-y', `${y}px`);
        overlay.style.setProperty('--glow-opacity', '1');
      });
  
      capture.addEventListener('mouseleave', () => {
        overlay.style.setProperty('--glow-opacity', '0');
      });
    });
  }, []);
  

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={(value) => setCurrentTab(value)}
      className="relative glow-capture w-full"
    >
      <Tabs.List className="w-full flex justify-evenly gap-2 border-2 border-b-1 border-transparent">
        {tabsArray.map((tab, index) => (
          <div key={tab.title} onClick={() => handleClick(tab, index)}>
            <TabItem
              value={tab.title}
              title={tab.title}
              IsSelected={currentTab === tab.title}
            />
            <div className="glow-overlay" />
          </div>
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
