import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import WhiteLogo from '../../public/White-Logo.png'
import BlackLogo from '../../public/Black-Logo.png'
import { Backlight } from '@/components/backlight/backlight'
import { Menu } from '@/components/menu'
import { useTheme } from 'next-themes'
import { SwitchMode } from './switch'

export function Header() {
  const tabsArray = [
    { title: 'Home' },
    { title: 'História' },
    { title: 'Marca' },
    { title: 'Portfólio' },
    { title: 'Blog' },
    { title: 'Contato' },
  ]
  const pathsArray = [
    { path: '/' },
    { path: 'Historia' },
    { path: 'Marca' },
    { path: 'Portfolio' },
    { path: 'Blog' },
    { path: 'Contato' },
  ]
  const { resolvedTheme, setTheme } = useTheme()

  // Determine which logo to display based on the current theme
  const logoSrc = resolvedTheme === 'dark' ? WhiteLogo.src : BlackLogo.src

  return (
    <div className="relative px-8 py-4 flex items-center justify-between border-b-2 bg-gray-gray1 dark:bg-black border-gray-gray7 dark:border-grayDark-gray1 rounded-md w-full shadow-lg shadow-gray-gray7 dark:shadow-grayDark-gray1 ">
      <>
        <div className="flex items-center gap-5 ml-2 p-2">
          <Link href="/" className="text-2xl font-extrabold text-white ">
            <Suspense fallback={<p>Carregando...</p>}>
              <Image
                className="object-contain h-4 object-left w-max"
                src={logoSrc}
                alt="My image"
                width={300}
                height={300}
              />
            </Suspense>
          </Link>
        </div>
        <div className="items-center gap-4 md:flex hidden">
          <Backlight tabsArray={tabsArray} pathsArray={pathsArray} />
        </div>
        <div className="items-center gap-4 flex md:hidden">
          <Menu />
        </div>
        <SwitchMode
          onCheckedChange={(checked: boolean) => {
            setTheme(
              checked ? (resolvedTheme === 'dark' ? 'light' : 'dark') : 'system'
            )
          }}
        />
      </>
    </div>
  )
}
