import FilledWishlist from "./filledWishlist"
import EmptyWishlist from "./emptyWishlist"
import { useSelector } from "react-redux"

const Wishlist = () => {
  const wishlistContents = useSelector((state) => state.handleWishlist.wishlistContents)

  return (
    <>
      {Object.keys(wishlistContents).length > 0 ? <FilledWishlist/> : <EmptyWishlist/>}
    </>
  )
}

export default Wishlist