import { createSlice, type PayloadAction, createSelector } from '@reduxjs/toolkit'
import type { RootState } from './store'

export type CartLine = {
  id: number
  name: string
  price: number
  image: string
  qty: number
}
export type CartState = { lines: CartLine[] }

const initialState: CartState = { lines: [] }

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartLine, 'qty'> & { qty?: number }>) {
      const { id, name, price, image, qty = 1 } = action.payload
      const existing = state.lines.find(l => l.id === id)
      if (existing) existing.qty += qty
      else state.lines.push({ id, name, price, image, qty })
    },
    removeItem(state, action: PayloadAction<number>) {
      state.lines = state.lines.filter(l => l.id !== action.payload)
    },
    updateQuantity(state, action: PayloadAction<{ id: number; qty: number }>) {
      const line = state.lines.find(l => l.id === action.payload.id)
      if (line) {
        line.qty = Math.max(0, action.payload.qty)
        if (line.qty === 0) {
          state.lines = state.lines.filter(l => l.id !== action.payload.id)
        }
      }
    },
    clearCart(state) {
      state.lines = []
    }
  }
})

export const { addItem, removeItem, updateQuantity, clearCart } = slice.actions
export default slice.reducer

// Selectors
export const selectCartLines = (s: RootState) => s.cart.lines
export const selectCartCount = createSelector(selectCartLines, lines =>
  lines.reduce((sum, l) => sum + l.qty, 0)
)
export const selectCartSubtotal = createSelector(selectCartLines, lines =>
  lines.reduce((sum, l) => sum + l.qty * l.price, 0)
)
export const selectIsInCart = (id: number) =>
  createSelector(selectCartLines, lines => !!lines.find(l => l.id === id))