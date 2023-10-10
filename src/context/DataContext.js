import { createContext, useContext, useReducer } from "react";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
  return (
    <DataContext.Provider value={{}}>
      {children}
    </DataContext.Provider>
  )
}