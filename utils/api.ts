import { child, get, ref, set, update } from 'firebase/database'
import { firebaseDb } from './firebase'

const ITEMS_KEY = 'items'
const TODO_KEY = 'todo'

export type GroceryItem = {
  id: string
  name: string
  state: boolean
  section: 'costco' | 'non_costco'
}
export type TodoItem = {
  id: string
  name: string
  createdAt: Date
  completedAt: Date | null
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
  clearAllItems: async () => {
    const items = await API.get()
    Object.keys(items!).map(item => API.setItemState(item, false))
  },
  createItem: async (item: GroceryItem) => {
    set(ref(firebaseDb, `/${ITEMS_KEY}/${item.id}`), {
      name: item.name,
      id: item.id,
      state: false,
      section: item.section,
    })
  },
  getTodo: async (): Promise<TodoItem[] | null> => {
    const snapshot = await get(child(ref(firebaseDb), `/${TODO_KEY}/`))
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      return null
    }
  },
  createTodoItem: async (item: TodoItem) => {
    const id = Date.now()
    set(ref(firebaseDb, `/${TODO_KEY}/${id}`), {
      name: item.name,
      id: id,
      createdAt: Date.now(),
      completedAt: null,
    })
  },
  setTodoItemState: async (id: string, completed: boolean) => {
    update(ref(firebaseDb, `/${TODO_KEY}/${id}`), {
      completedAt: completed ? new Date() : null,
    })
  },
}
