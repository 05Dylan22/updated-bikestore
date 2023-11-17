import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartContents: {}
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartContents[action.payload.name] = action.payload
    },
    removeFromCart: (state, action) => {
      delete state.cartContents[action.payload.name]
    }
  },
})

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer