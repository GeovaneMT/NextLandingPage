import { Brand } from './brand'
import Link from "next/link"

export function Footer() {
  return (
    <div className="relative text-xs min-h-[10vh] px-8 py-4 grid grid-cols-6 grid-rows-2 items-center justify-between border-t-2 bg-gray-gray1 dark:bg-black border-gray-gray7 dark:border-grayDark-gray3 rounded-md w-full">
      <div className="flex col-span-1 row-span-2 justify-center h-full w-full items-center">
        <Brand isIcon={true} />
      </div>
      <Link href="https://wa.me/5511966019898" className='w-full col-span-4 row-span-1 text-center text-gray-gray10'>
        Tel & WhatsApp: +55 (11) 9 6601 – 9898
      </Link>
      <p className="w-full col-span-4 row-span-1 text-center text-gray-gray10">
        © 2023 - Todos os direitos reservados
      </p>
    </div>
  )
}
