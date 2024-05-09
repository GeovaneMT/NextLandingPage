
import { Metadata } from 'next'

import { HomeContent } from './homecontent'

export const metadata: Metadata = {
title: 'Home',
}

export default function Home() {
  return (
    <>
      <HomeContent />
    </>
  )
}
