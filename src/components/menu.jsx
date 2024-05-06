import { LuMenuSquare } from 'react-icons/lu'
import { useMenu } from '@/contexts/MenuProvider'

export const Menu = () => {
  const { toggleMenu } = useMenu()

  return (
    <div className="absolute inset-0 bg-black">
      <LuMenuSquare size={32} strokeWidth={1} onClick={toggleMenu} />
      <p>ok</p>
    </div>
  )
}
