'use client'

import Link from 'next/link'
import { Navigation } from './Navigation'

export const PageContainer = ({ children }: { children: any }) => {
  return (
    <>
      <main className="min-h-screen p-4 dark:bg-black">{children}</main>
      <Navigation />
    </>
  )
}
