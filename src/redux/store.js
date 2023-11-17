import { configureStore } from '@reduxjs/toolkit'
import iconsReducer from "./handleIcons"
import wishlistReducer from "./handleWishlist"
import heartsReducer from "./headerHearts"
import cartReducer from "./handleCart"

export default configureStore ({
  reducer: {
    handleIcons: iconsReducer,
    handleWishlist: wishlistReducer,
    handleHearts: heartsReducer,
    handleCart: cartReducer
  },
})