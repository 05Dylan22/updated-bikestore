import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlistContents: {}
  },
  reducers: {
    addItem: (state, action) => {
      state.wishlistContents[action.payload.name] = action.payload
    },
    removeItem: (state, action) => {
      delete state.wishlistContents[action.payload.name]
    }
  },
})

export const {addItem, removeItem} = wishlistSlice.actions

export default wishlistSlice.reducer