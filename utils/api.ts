export type GroceryItem = {
  id: string
  name: string
  state: boolean
  section: 'costco' | 'non_costco'
}

export const API = {
  get: async (): Promise<GroceryItem[]> => {
    // todo: replace with actual API
    return [
      {
        id: 'milk',
        name: 'Milk',
        state: true,
        section: 'costco',
      },
      {
        id: 'eggs',
        name: 'Eggs',
        state: false,
        section: 'costco',
      },
      {
        id: 'fancy_cream',
        name: 'Fancy Cream',
        state: true,
        section: 'non_costco',
      },
    ]
  },
  setItemState: async (id: string, state: boolean) => {
    // todo
  },
}
