import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Pipers',
    default: 'Pipers',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={` ${inter.variable}`} lang="pt" suppressHydrationWarning>
      <body className="bg-gray-gray1 dark:bg-grayDark-gray1 dark:text-gray-gray10 text-grayDark-gray10 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
