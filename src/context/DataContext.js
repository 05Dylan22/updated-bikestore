import { createContext, useReducer, useState } from "react";
import { imagesIcons } from "../App";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {open: false, currentOpen: null, displayIconEl: null, wishlist: {}})
  const [heartHover, setHeartHover] = useState(imagesIcons.heartOutline)

  function reducer (state, action) {
    if (action.type === "ADDWISHLISTITEM") {
      state.wishlist[action.payload.name] = action.payload
      return {...state, wishlist: state.wishlist}
    }
    if (action.type === "REMOVEWISHLISTITEM") {
      delete state.wishlist[action.payload.name]
      return {...state, wishlist: state.wishlist}
    }
    if (!state.open) {
      return {open: true, currentOpen: action.payload.identifier, displayIconEl: action.payload.component}
    }
    if (state.open && state.currentOpen === action.payload.identifier) {
      return {open: false, currentOpen: null, displayIconEl: null}
    }
    if (state.open && state.currentOpen !== action.payload.identifier) {
      return {...state, currentOpen: action.payload.identifier, displayIconEl: action.payload.component}
    }
  }

  function fillHeart () {
    setHeartHover(imagesIcons.solidHeart)
  }
  
  function emptyHeart () {
    setHeartHover(imagesIcons.heartOutline)
  }
  return (
    <DataContext.Provider value={{dispatch, state, fillHeart, emptyHeart, heartHover}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext