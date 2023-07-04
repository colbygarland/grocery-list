import { GroceryItem } from '@/utils/api'
import { Toggle } from './Toggle'

const ListItem = ({ children }: { children: any }) => (
  <li className="mb-3">{children}</li>
)

export const GroceryList = ({ items }: { items?: GroceryItem[] }) => {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <ul className="grid grid-cols-2">
      {items.map(item => {
        return (
          <ListItem key={item.id}>
            <Toggle checked={Boolean(item.state)} id={item.id}>
              {item.name}
            </Toggle>
          </ListItem>
        )
      })}
    </ul>
  )
}
