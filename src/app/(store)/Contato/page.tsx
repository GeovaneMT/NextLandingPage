import { Button } from '@/components/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
}

export default function Contato() {
  return (
    <div className="">
      <Button variant="ghost" title="Contato" />
    </div>
  )
}
