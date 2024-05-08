import { Button } from '@/components/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marca',
}

export default function Marca() {
  return (
    <div className="">
      <Button variant="ghost" title="Marca" />
    </div>
  )
}
