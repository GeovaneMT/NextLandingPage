'use client'

import * as Switch from '@radix-ui/react-switch'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export function SwitchRoot() {

  const { setTheme, resolvedTheme, systemTheme } = useTheme()
  const [checked, setChecked] = useState<boolean | null>(null)

  const toggleTheme = () => {
    setChecked(!checked)
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => setChecked(!!(resolvedTheme !== systemTheme)),
  [resolvedTheme, systemTheme])

  return(
    <Switch.Root
      onCheckedChange={toggleTheme}
      checked={checked ?? false}
      className="w-[42px] h-[25px] rounded-full relative shadow-[0_2px_10px] shadow-blackA-blackA4 highlighted:shadow-blackA-blackA7 dark:shadow-grayDark-gray1 dark:highlighted:shadow-grayDark-gray4 data-[state=checked]:bg-orange-orange9 data-[state=unchecked]:bg-gray-gray10 outline-none cursor-default"
      id="Theme-Switch"
      style={
        {
          '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)'
        } as React.CSSProperties
      }
    >
      <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full cursor-pointer  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
    </Switch.Root>
  )
}