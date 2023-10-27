import { createSlice } from "@reduxjs/toolkit";

const hearts = {
  heartOutline: require("../images+icons/heart.png"),
  solidHeart: require("../images+icons/like-solid-heart-black-symbol-for-interface.png")
}

export const heartSlice = createSlice({
  name: "hearts",
  initialState: {
    heart: hearts.heartOutline,
    wishlistOpen: false,
    hovering: false
  },
  reducers: {
    clickedHeart: (state) => {
      if (state.wishlistOpen) {
        state.wishlistOpen = !state.wishlistOpen
        state.heart = hearts.heartOutline
        return
      }

      if (!state.wishlistOpen) {
        state.wishlistOpen = !state.wishlistOpen
        state.heart = hearts.solidHeart
        return
      }
    },

    overHeart: (state) => {
      if (state.wishlistOpen) return
      state.hovering = true
      state.heart = hearts.solidHeart
    },

    leftHeart: (state) => {
      if (state.wishlistOpen) return
      state.hovering = false
      state.heart = hearts.heartOutline
    }
  }
})

export const {clickedHeart, overHeart, leftHeart} = heartSlice.actions
export default heartSlice.reducer