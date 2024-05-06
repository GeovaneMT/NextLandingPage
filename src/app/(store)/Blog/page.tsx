import { Button } from '@/components/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function Blog() {
  return (
    <div className="">
      <Button variant="ghost" title="Blog" />
    </div>
  )
}
