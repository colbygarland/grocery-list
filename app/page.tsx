import { Button } from '@/components/Button'
import { ClearButton } from '@/components/ClearButton'
import { GroceryList } from '@/components/GroceryList'
import { PageContainer } from '@/components/PageContainer'
import { H1, H2 } from '@/components/Typography'
import { API } from '@/utils/api'

export default async function Home() {
  const list = await API.get()

  const costcoItems = Object.values(list!).filter(
    ({ section }) => section === 'costco',
  )
  const nonCostcoItems = Object.values(list!).filter(
    ({ section }) => section !== 'costco',
  )

  return (
    <PageContainer>
      <H1>Grocery List</H1>
      <ClearButton />
      <H2>Costco</H2>
      <GroceryList items={costcoItems} />
      <H2>Non Costco</H2>
      <GroceryList items={nonCostcoItems} />
    </PageContainer>
  )
}

export const revalidate = 1
