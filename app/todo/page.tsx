'use client'

import { PageContainer } from '@/components/PageContainer'
import { H1, H2 } from '@/components/Typography'
import { List } from './List'
import { API, TodoItem } from '@/utils/api'
import { useEffect, useState } from 'react'

export default function Todo() {
  const [items, setItems] = useState<TodoItem[]>([])

  useEffect(() => {
    API.getTodo().then(values => {
      setItems(Object.values(values!))
    })
  }, [])

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
