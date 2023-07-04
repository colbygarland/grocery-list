import { Toggle } from '@/components/Toggle'
import { API, GroceryItem } from '@/utils/api'
import { useState } from 'react'

const H1 = ({ children }: { children: any }) => (
  <h1 className="text-3xl font-bold mb-6">{children}</h1>
)

const H2 = ({ children }: { children: any }) => (
  <h2 className="text-xl mb-4">{children}</h2>
)

const ListItem = ({ children }: { children: any }) => (
  <li className="mb-3">{children}</li>
)

const GroceryList = ({ items }: { items: GroceryItem[] }) => {
  return (
    <ul>
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

export default async function Home() {
  const list = await API.get()
  const costcoItems = list.filter(({ section }) => section === 'costco')
  const nonCostcoItems = list.filter(({ section }) => section !== 'costco')

  return (
    <main className="min-h-screen p-4">
      <H1>Grocery List</H1>
      <H2>Costco</H2>
      <GroceryList items={costcoItems} />
      <H2>Non Costco</H2>
      <GroceryList items={nonCostcoItems} />
    </main>
  )
}
