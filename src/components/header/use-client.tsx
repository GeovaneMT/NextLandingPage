'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export function useClient() {
  const { setTheme, resolvedTheme, systemTheme, theme } = useTheme()

  const [checked, setChecked] = useState<boolean | null>(null)
  const [image, setImage] = useState<string | null>(null)

  const handleCheckedChange = () => {
    setChecked(!checked)
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(
    () => setChecked(!!(resolvedTheme !== systemTheme)),
    [resolvedTheme, systemTheme]
  )

  useEffect(() => {
    const logoSrc = theme === 'dark' ? '/White-Logo.png' : '/Black-Logo.png'
    setImage(logoSrc)
  }, [theme])

  return { checked, handleCheckedChange, image }
}
