import { Checkbox } from '@/components/Checkbox'
import { PageContainer } from '@/components/PageContainer'
import { H1, H2 } from '@/components/Typography'
import { List } from './List'

export default async function Todo() {
  const items = await []
  const completeItems = await []

  return (
    <PageContainer>
      <H1>To Do List</H1>
      <List items={items} />
      <H2>Complete</H2>
      <List items={completeItems} strikethrough checked />
    </PageContainer>
  )
}
