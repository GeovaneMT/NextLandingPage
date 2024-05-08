import Link from 'next/link';
import { Backlight } from '@/components/backlight/backlight';
import { Menu } from '@/components/menu';
import { Brand } from '@/components/brand';
import { SwitchTheme } from '../switch/switch';
import { tabsArray, pathsArray } from './nav-data';

export function Header() {

  return (
    <div className="relative px-8 py-4 flex items-center justify-between border-b-2 bg-gray-gray1 dark:bg-black border-gray-gray7 dark:border-grayDark-gray1 rounded-md w-full shadow-lg shadow-gray-gray7 dark:shadow-grayDark-gray1 ">
      <>
        <div className="flex items-center gap-5 ml-2 p-2">
          <Link href="/" className="text-2xl font-extrabold text-white ">
          <Brand />
          </Link>
        </div>
        <div className="items-center gap-4 md:flex hidden">
          <Backlight tabsArray={tabsArray} pathsArray={pathsArray} />
        </div>
        <div className="items-center gap-4 flex md:hidden">
          <Menu />
        </div>
        <SwitchTheme />
      </>
    </div>
  );
}
