import { configureStore } from '@reduxjs/toolkit'
import iconsReducer from "./handleIcons"

export default configureStore ({
  reducer: {handleIcons: iconsReducer},
})