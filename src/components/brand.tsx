'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function Brand({isIcon}: {isIcon: boolean}) {
  
  const [image, setImage] = useState<string | null>(null)
  const [icon, setIcon] = useState<string | null>(null)
  const { theme } = useTheme()
  const [parent] = useAutoAnimate()

  useEffect(() => {
    const ImageSrc = theme === 'dark' ? '/White-Logo.png' : '/Black-Logo.png'
    const IconSrc = theme === 'dark' ? '/icon-white.png' : '/icon-black.png'
    isIcon ? setIcon(IconSrc) : setImage(ImageSrc)
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
      {icon && (
        <Image
          className="object-contain h-6 object-left w-max"
          src={icon}
          alt="My image"
          width={300}
          height={300}
        />
      )}
    </div>
  )
}