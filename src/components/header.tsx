import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import WhiteLogo from '../../public/White-Logo.png'
import BlackLogo from '../../public/Black-Logo.png'
import { Backlight } from '@/components/backlight/backlight'
import { LuMenuSquare } from 'react-icons/lu'
import { useMenu } from '@/contexts/MenuProvider'
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
  const { toggleMenu, isMenuOpen } = useMenu()
  const { resolvedTheme, setTheme } = useTheme()

  // Determine which logo to display based on the current theme
  const logoSrc = resolvedTheme === 'dark' ? WhiteLogo.src : BlackLogo.src

  return (
    <div className="relative px-8 py-4 flex items-center justify-between border-2 bg-zinc-950 border-zinc-950 rounded-md w-full shadow-lg shadow-black/80">
      {isMenuOpen ? (
        <Menu />
      ) : (
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
            <Backlight tabsArray={tabsArray} />
          </div>
          <div className="items-center gap-4 flex md:hidden">
            <LuMenuSquare size={32} strokeWidth={1} onClick={toggleMenu} />
          </div>
          <button
            onClick={() => {
              setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
            }}
            type="button"
          >
            <SwitchMode />
          </button>
        </>
      )}
    </div>
  )
}
