import Link from 'next/link'
import Image from 'next/image'
import WhiteLogo from '../../public/White-Logo.png'
import BlackLogo from '../../public/Black-Logo.png'

export function Footer() {
  return (
    <div className="flex items-center gap-5 col-span-4 ml-2">
      <Link href="/" className="text-2xl font-extrabold text-white">
          <picture>
            <source
              srcSet={WhiteLogo.src}
              media="(prefers-color-scheme: dark)"
            />
            <Image
              className="object-contain h-4 object-left w-max"
              src={BlackLogo.src}
              alt="My image"
              width={300}
              height={300}
            />
          </picture>
      </Link>
    </div>
  )
}
