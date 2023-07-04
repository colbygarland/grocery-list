'use client'

import { Checkbox } from '@/components/Checkbox'
import { API, TodoItem } from '@/utils/api'
import { useState } from 'react'

const Item = ({ item }: { item: TodoItem }) => {
  const [checked, setChecked] = useState(Boolean(item.completedAt))

  return (
    <li>
      <Checkbox
        label={item.name}
        id={item.id}
        strikethrough={checked}
        checked={checked}
        onChange={() => {
          API.setTodoItemState(item.id, !checked)
          setChecked(!checked)
        }}
      />
    </li>
  )
}

export const List = ({ items }: { items: TodoItem[] }) => {
  return (
    <ul>
      {items.map(item => {
        return <Item key={item.id} item={item} />
      })}
    </ul>
  )
}
