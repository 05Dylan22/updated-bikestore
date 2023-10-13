import {useLocation} from "react-router-dom"

const ShoppingCategory = () => {
  const location = useLocation()
  const {category} = location.state
  console.log(category)
  return (
    <div>
      {category}
    </div>
  )
}

export default ShoppingCategory