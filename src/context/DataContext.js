import { createContext, useReducer } from "react";

const DataContext = createContext({})

function reducer (state, action) {
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

export const DataProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {open: false, currentOpen: null, displayIconEl: null})

  return (
    <DataContext.Provider value={{dispatch, state}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext