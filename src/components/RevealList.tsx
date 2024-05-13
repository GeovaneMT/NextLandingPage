'use client'
import { RevealList } from 'next-reveal'

export function RevealListWrapper({ children, ...props }: any) {
  return <RevealList {...props}>{children}</RevealList>
}
