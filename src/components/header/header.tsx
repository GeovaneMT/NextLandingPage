'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Backlight } from '@/components/backlight/backlight'
import { Menu } from '@/components/menu'
import { useClient } from './use-client'
import { SwitchMode } from '@/components/switch'

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

  const { checked, handleCheckedChange, image } = useClient()

  return (
    <div className="relative px-8 py-4 flex items-center justify-between border-b-2 bg-gray-gray1 dark:bg-black border-gray-gray7 dark:border-grayDark-gray1 rounded-md w-full shadow-lg shadow-gray-gray7 dark:shadow-grayDark-gray1 ">
      <>
        <div className="flex items-center gap-5 ml-2 p-2">
          <Link href="/" className="text-2xl font-extrabold text-white ">
            {image ? (
              <Image
                className="object-contain h-4 object-left w-max"
                src={image}
                alt="My image"
                width={300}
                height={300}
              />
            ) : (
              <p className="text-black dark:text-white text-sm">
                Carregando...
              </p>
            )}
          </Link>
        </div>
        <div className="items-center gap-4 md:flex hidden">
          <Backlight tabsArray={tabsArray} pathsArray={pathsArray} />
        </div>
        <div className="items-center gap-4 flex md:hidden">
          <Menu />
        </div>
        <SwitchMode
          checked={checked ?? false}
          onCheckedChange={handleCheckedChange}
        />
      </>
    </div>
  )
}
