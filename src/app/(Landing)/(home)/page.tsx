
import { Metadata } from 'next'

import { HomeContent } from './homecontent'

export const metadata: Metadata = {
title: 'Home',
}

export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
    <div className='flex items-center'>
      <HomeContent />
    </div>
    </div>
  )
}
