import Link from 'next/link'
import { Backlight } from '@/components/header/NavMenu/backlight'
import { Menu } from '@/components/header/NavMenu/menu'
import { Brand } from '@/components/brand'
import { SwitchTheme } from '../switch/switch'
import { tabsArray, pathsArray } from './nav-data'

export function Header() {
  return (
    <div className="relative px-8 py-4 grid grid-cols-6 items-center justify-between border-b-2 bg-gray-gray1 dark:bg-black border-gray-gray7 dark:border-grayDark-gray1 rounded-md w-full shadow-lg shadow-gray-gray7 dark:shadow-grayDark-gray1 ">
      <div className="items-center gap-4 flex md:hidden col-span-1">
        <Menu tabsArray={tabsArray} pathsArray={pathsArray} />
      </div>
      <div className="flex items-center gap-5 ml-2 p-2 w-full col-span-4 justify-center md:col-span-1">
        <Link href="/" className="text-2xl font-extrabold text-white">
          <Brand isIcon={false} />
        </Link>
      </div>
      <div className="items-center gap-4 hidden justify-center md:flex md:col-span-4">
        <Backlight tabsArray={tabsArray} pathsArray={pathsArray} />
      </div>
      <div className="col-span-1 flex justify-end">
        <SwitchTheme />
      </div>
    </div>
  )
}
