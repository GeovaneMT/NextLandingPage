import { Button } from '@/components/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
}

export default function Portfolio() {
  return (
    <div className="">
      <Button variant="ghost" title="Portfolio" />
    </div>
  )
}
