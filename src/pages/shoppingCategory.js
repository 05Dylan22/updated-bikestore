import {useLocation} from "react-router-dom"
import ShoppingSectionHero from "../elements/shopSectionsHero"

const ShoppingCategory = () => {
  const location = useLocation()
  const {category} = location.state
  console.log(category)
  return (
    <div>
      <ShoppingSectionHero/>
      {category}
    </div>
  )
}

export default ShoppingCategory