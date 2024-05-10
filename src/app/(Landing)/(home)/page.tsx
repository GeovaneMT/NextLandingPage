
import { Metadata } from 'next'

import { HomeContent } from './homecontent'

export const metadata: Metadata = {
title: 'Home',
}

export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
    <div className='h-[90vh]'>
      <h1 className=''>Brands, not Scars</h1>
    </div>
    <div className='h-[90vh]'>
      <HomeContent />
    </div>
    </div>
  )
}
