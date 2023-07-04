import { GroceryItem } from '@/utils/api'
import { Toggle } from './Toggle'
import { useLongPress } from 'use-long-press'

const ListItem = ({ id, children }: { id: string; children: any }) => {
  const bind = useLongPress(() => {
    console.log('long press', id)
  })
  return (
    <li className="mb-3" {...bind()}>
      {children}
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
