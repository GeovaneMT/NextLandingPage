'use client'

import * as Switch from '@radix-ui/react-switch'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { LuSunMoon } from "react-icons/lu";

export function SwitchRoot() {
  const { setTheme, resolvedTheme, systemTheme } = useTheme()
  const [checked, setChecked] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const toggleTheme = () => {
    setChecked((prevChecked) => !prevChecked)
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    setChecked(!!(resolvedTheme !== systemTheme))
    setIsLoading(false)
  }, [resolvedTheme, systemTheme])

  const switchRootClassNames =
    'w-[42px] h-[25px] rounded-full relative shadow-[0_2px_10px] shadow-blackA-blackA4 highlighted:shadow-blackA-blackA7 dark:shadow-grayDark-gray1 dark:highlighted:shadow-grayDark-gray4 data-[state=checked]:bg-orange-orange9 data-[state=unchecked]:bg-gray-gray10 outline-none cursor-default'
  const thumbClassNames =
    'block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 will-change-transform'

  return (
    <Switch.Root
      onCheckedChange={toggleTheme}
      checked={checked ?? false}
      className={`cursor-pointer ${switchRootClassNames}`}
      id="Theme-Switch"
      style={
        {
          '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        } as React.CSSProperties
      }
    >
      {!isLoading && (
        <Switch.Thumb
          className={`${thumbClassNames} flex items-center justify-center transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]`}
        >
          <LuSunMoon size={12} color='black' className='opacity-35'/>
        </Switch.Thumb>
      )}
      {isLoading && (
        <Switch.Thumb className={`${thumbClassNames} translate-x-[11px] flex items-center justify-center`} 
        >
          <LuSunMoon size={12} color='black' className='opacity-50'/>
        </Switch.Thumb>
      )}
    </Switch.Root>
  )
}
