import { Button } from '@/components/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="">
      <p className="dark:bg-red-500">teste</p>
      <Button variant="ghost" title="example" />
    </div>
  )
}
