import { Checkbox } from '@/components/Checkbox'
import { PageContainer } from '@/components/PageContainer'
import { H1, H2 } from '@/components/Typography'
import { List } from './List'
import { API } from '@/utils/api'

export default async function Todo() {
  let items = await API.getTodo()
  items = Object.values(items!)

  const incompleteItems = items.filter(item => !item.state)
  const completeItems = items.filter(item => item.state)

  return (
    <PageContainer>
      <H1>To Do List</H1>
      <H2>To do</H2>
      <List items={incompleteItems} />
      <H2>Complete</H2>
      <List items={completeItems} />
    </PageContainer>
  )
}
