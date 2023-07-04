'use client'

import { ClearButton } from '@/components/ClearButton'
import { GroceryList } from '@/components/GroceryList'
import { PageContainer } from '@/components/PageContainer'
import { Spinner } from '@/components/Spinner'
import { H1, H2 } from '@/components/Typography'
import { API, GroceryItem } from '@/utils/api'
import { useEffect, useState } from 'react'

export default function Home() {
  const [list, setList] = useState<GroceryItem[]>([])

  useEffect(() => {
    API.get().then((values: GroceryItem[] | null) => {
      setList(Object.values(values!))
    })
  }, [])

  const costcoItems = list.filter(({ section }) => section === 'costco')
  const nonCostcoItems = list.filter(({ section }) => section !== 'costco')

  return (
    <PageContainer>
      <H1>Grocery List</H1>
      {list.length > 0 ? (
        <>
          <ClearButton />
          <H2>Costco</H2>
          <GroceryList items={costcoItems} />
          <H2>Non Costco</H2>
          <GroceryList items={nonCostcoItems} />
        </>
      ) : (
        <Spinner />
      )}
    </PageContainer>
  )
}

export const revalidate = 1
