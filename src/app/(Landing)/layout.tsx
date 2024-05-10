import { ReactNode } from 'react'
import { Header } from '@/components/header/header'
import { Footer } from '@/components/footer'

export default function LandingPageLayout({
  children,
}: {
  children: ReactNode
}) {


  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="max-w-[1600px] grid grid-cols-1 gap-5 px-8 py-8 flex-1 items-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
