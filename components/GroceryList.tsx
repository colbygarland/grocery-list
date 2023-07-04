'use client'

import { API, GroceryItem } from '@/utils/api'
import { Toggle } from './Toggle'
import { useLongPress } from 'use-long-press'
import { useState } from 'react'
import { Button } from './Button'

const ListItem = ({ id, children }: { id: string; children: any }) => {
  const [deleteItem, setDeleteItem] = useState(false)
  const [deleteText, setDeleteText] = useState('Delete item?')

  const bind = useLongPress(() => {
    setDeleteItem(true)
  })

  return (
    <li className="mb-3" {...bind()}>
      {deleteItem ? (
        <Button
          onClick={() => {
            API.deleteItem(id)
            setDeleteText('Deleting..')
            setTimeout(() => {
              setDeleteText('Deleted!')
            }, 1000)
            setTimeout(() => {
              window.location.reload()
            }, 2000)
          }}
        >
          {deleteText}
        </Button>
      ) : (
        children
      )}
    </li>
  )
}

export const GroceryList = ({ items }: { items?: GroceryItem[] }) => {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <ul className="grid grid-cols-2">
      {items.map(item => {
        return (
          <ListItem key={item.id} id={item.id}>
            <Toggle checked={Boolean(item.state)} id={item.id}>
              {item.name}
            </Toggle>
          </ListItem>
        )
      })}
    </ul>
  )
}
