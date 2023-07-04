'use client'

import Link from 'next/link'
import { Navigation } from './Navigation'

export const PageContainer = ({ children }: { children: any }) => {
  return (
    <>
      <main className="p-4">{children}</main>
      <Navigation />
    </>
  )
}
