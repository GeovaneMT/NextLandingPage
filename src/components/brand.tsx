'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function Brand() {
  
  const [image, setImage] = useState<string | null>(null)
  const { theme } = useTheme()
  const [parent] = useAutoAnimate()


  useEffect(() => {
    const logoSrc = theme === 'dark' ? '/White-Logo.png' : '/Black-Logo.png'
    setImage(logoSrc)
  }, [theme])

  return (
    <div ref={parent}>
      {image && (
        <Image
          className="object-contain h-3 object-left w-max"
          src={image}
          alt="My image"
          width={300}
          height={300}
        />
      )}
    </div>
  )
}