import FilledWishlist from "./filledWishlist"
import EmptyWishlist from "./emptyWishlist"
import DataContext from "../context/DataContext"
import { useContext } from "react"

const Wishlist = ({bikes}) => {
  const {state} = useContext(DataContext)
  console.log(state)
  return (
    <>
      {Object.keys(bikes).length > 0 ? <FilledWishlist items={bikes} /> : <EmptyWishlist/>}
    </>
  )
}

export default Wishlist