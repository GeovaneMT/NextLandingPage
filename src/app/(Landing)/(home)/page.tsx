import { Metadata } from 'next'

import { HomeContent } from './homecontent'
import { ImageSlider } from '@/components/slider'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="h-[100vh] flex items-center overflow-x-hidden">
        <HomeContent />
      </div>
    </div>
  )
}
