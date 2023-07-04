'use client'

import { PageContainer } from '@/components/PageContainer'
import { H1, H2 } from '@/components/Typography'
import { List } from './List'
import { API, TodoItem } from '@/utils/api'
import { useEffect, useState } from 'react'
import { Spinner } from '@/components/Spinner'

export default function Todo() {
  const [items, setItems] = useState<TodoItem[]>([])

  useEffect(() => {
    API.getTodo().then(values => {
      if (values) {
        setItems(Object.values(values))
      }
    })
  }, [])

  const incompleteItems = items
    .filter(item => !item.completedAt)
    .sort(function (a, b) {
      var keyA = new Date(a.createdAt!),
        keyB = new Date(b.createdAt!)
      if (keyA < keyB) return 1
      if (keyA > keyB) return -1
      return 0
    })
  const completeItems = items
    .filter(item => item.completedAt)
    .sort(function (a, b) {
      var keyA = new Date(a.completedAt!),
        keyB = new Date(b.completedAt!)
      if (keyA < keyB) return 1
      if (keyA > keyB) return -1
      return 0
    })

  return (
    <PageContainer>
      <H1>To Do List</H1>
      {items.length > 0 ? (
        <>
          <H2>To do</H2>
          <List items={incompleteItems} />
          <H2>Complete</H2>
          <List items={completeItems} />
        </>
      ) : (
        <Spinner />
      )}
    </PageContainer>
  )
}
