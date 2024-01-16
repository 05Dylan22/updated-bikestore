import {useLocation} from "react-router-dom"
import ShoppingSectionHero from "../elements/shopSectionsHero"
import { useLayoutEffect } from "react"

const ShoppingCategory = () => {
  const location = useLocation()
  const {category} = location.state

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <ShoppingSectionHero/>
      {category}
    </div>
  )
}

export default ShoppingCategory