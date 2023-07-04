import { child, get, ref, set, update } from 'firebase/database'
import { firebaseDb } from './firebase'

const ITEMS_KEY = 'items'

export type GroceryItem = {
  id: string
  name: string
  state: boolean
  section: 'costco' | 'non_costco'
}

export const API = {
  get: async (): Promise<GroceryItem[] | null> => {
    const snapshot = await get(child(ref(firebaseDb), `/${ITEMS_KEY}/`))
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      return null
    }
  },
  setItemState: async (id: string, state: boolean) => {
    update(ref(firebaseDb, `/${ITEMS_KEY}/${id}`), {
      state,
    })
  },
  createItem: async (item: GroceryItem) => {
    set(ref(firebaseDb, `/${ITEMS_KEY}/${item.id}`), {
      name: item.name,
      id: item.id,
      state: false,
      section: item.section,
    })
  },
}
