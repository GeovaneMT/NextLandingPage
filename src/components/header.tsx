import Link from 'next/link'
import Image from 'next/image'
import { Suspense, useState, useEffect } from 'react'
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

  const { setTheme, resolvedTheme, systemTheme, theme } = useTheme();

  const [checked, setChecked] = useState(null);
  const [image, setImage] = useState(null);

  const handleCheckedChange = () => {
    setChecked(!checked);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };  

  useEffect(() => {
    setChecked(resolvedTheme !== systemTheme);
  }, [checked]);
  
  useEffect(() => {
    const logoSrc = theme === 'dark' ? WhiteLogo : BlackLogo;
    setImage(logoSrc);
  }, [theme]);
  

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
            <p className='text-black dark:text-white text-sm'>Carregando...</p>
          )
        }
          </Link>
        </div>
        <div className="items-center gap-4 md:flex hidden">
          <Backlight tabsArray={tabsArray} pathsArray={pathsArray} />
        </div>
        <div className="items-center gap-4 flex md:hidden">
          <Menu />
        </div>
        <SwitchMode
          checked={checked}
          onCheckedChange={handleCheckedChange}
        />

      </>
    </div>
  )
}
