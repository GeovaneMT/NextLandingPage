import { Button } from '@/components/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'História',
}

export default function História() {
  return (
    <div className="">
      <Button variant="ghost" title="História" />
    </div>
  )
}
