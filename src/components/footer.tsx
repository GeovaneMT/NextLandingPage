import { Brand } from './brand'

export function Footer() {
  return (
    <div className='relative px-8 py-4 grid grid-cols-6 items-center justify-between border-t-2 bg-gray-gray1 dark:bg-black border-gray-gray7 dark:border-grayDark-gray2 rounded-md w-full'>
      <div className='col-span-1 justify-self-center'>
        <Brand isIcon={true}/>
      </div>
      <p className='w-full col-span-4 text-center text-gray-gray10'>© 2023 - Todos os direitos reservados</p>
    </div>
  )
}
