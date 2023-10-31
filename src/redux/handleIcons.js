import { createSlice } from "@reduxjs/toolkit";
import Profile from "../elements/profile";
import SearchPage from "../elements/searchPage";
import Wishlist from "../elements/wishlist";
import Cart from "../elements/cart";
import HamburgerMenus from "../elements/hamburgerMenus";

function giveComponent(componentName) {
  switch (componentName) {
    case "SEARCH":
      return <SearchPage/>
    case "PROFILE":
      return <Profile/>
    case "WISHLIST":
      return <Wishlist/>
    case "CART":
      return <Cart/>
    case "HAMBURGER":
      return <HamburgerMenus/>
    default:
      throw new Error("Action not Found")
  }
}

export const iconSlice = createSlice({
  name: "icons",
  initialState: {
    open: false,
    currentOpen: null,
    displayIconEl: null
  },
  reducers: {
    handleIcons: (state, action) => {
      if (action.payload.type === "close") {
        return {open: false, currentOpen: null, displayIconEl: null}
      }
      if (!state.open) {
        return {open: true, currentOpen: action.payload.identifier, displayIconEl: giveComponent(action.payload.identifier)}
      }
      if (state.open && state.currentOpen === action.payload.identifier) {
        return {open: false, currentOpen: null, displayIconEl: null}
      }
      if (state.open && state.currentOpen !== action.payload.identifier) {
        return {...state, currentOpen: action.payload.identifier, displayIconEl: giveComponent(action.payload.identifier)}
      }
    }
  }
})

export const {handleIcons} = iconSlice.actions

export default iconSlice.reducer