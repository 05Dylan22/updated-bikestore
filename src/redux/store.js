import { configureStore } from '@reduxjs/toolkit'
import iconsReducer from "./handleIcons"
import wishlistReducer from "./handleWishlist"

export default configureStore ({
  reducer: {
    handleIcons: iconsReducer,
    handleWishlist: wishlistReducer
  },
})