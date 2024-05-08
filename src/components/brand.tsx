'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
export function Brand() {
  
  const [image, setImage] = useState<string | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const logoSrc = theme === 'dark' ? '/White-Logo.png' : '/Black-Logo.png'
    setImage(logoSrc)
  }, [theme])

  return (
    <>
      {image ? (
        <Image
          className="object-contain h-4 object-left w-max"
          src={image}
          alt="My image"
          width={300}
          height={300}
        />
      ) : (
        <img src="/Gray-Logo.png" alt="Gray Logo" className='object-contain h-4 object-left w-max' />
        
      )}
    </>
  )
}