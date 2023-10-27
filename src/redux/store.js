import { configureStore } from '@reduxjs/toolkit'
import iconsReducer from "./handleIcons"
import wishlistReducer from "./handleWishlist"
import heartsReducer from "./headerHearts"

export default configureStore ({
  reducer: {
    handleIcons: iconsReducer,
    handleWishlist: wishlistReducer,
    handleHearts: heartsReducer
  },
})