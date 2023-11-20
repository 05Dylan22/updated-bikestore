import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartContents: {},
    quantities: {}
  },
  reducers: {
    increaseQuantity: (state, action) => {
      state.quantities[action.payload] += 1
      return
    },

    decrementQuantity: (state, action) => {
      if (state.quantities[action.payload] === 1) return
      state.quantities[action.payload] -= 1
      return
    },

    addToCart: (state, action) => {
      if (!state.quantities[action.payload.name]) {
        state.quantities[action.payload.name] = 1
        state.cartContents[action.payload.name] = action.payload
        return
      }

      if (state.quantities[action.payload.name]) {
        state.quantities[action.payload.name] += 1
        return
      }
    },

    removeFromCart: (state, action) => {
      delete state.cartContents[action.payload.name]
    }
  },
})

export const {addToCart, removeFromCart, increaseQuantity, decrementQuantity} = cartSlice.actions

export default cartSlice.reducer