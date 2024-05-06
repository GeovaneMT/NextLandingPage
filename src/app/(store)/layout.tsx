'use client'
import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MenuProvider } from '@/contexts/MenuProvider'

export default function LandingPageLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <MenuProvider>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <main className="mx-auto grid max-w-[1600px] grid-rows-app gap-5 px-8 py-8 flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </MenuProvider>
  )
}
