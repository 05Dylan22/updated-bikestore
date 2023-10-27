import { useSelector } from "react-redux"
import WishlistItem from "./wishlistItem"

const FilledWishlist = () => {
  const wishlistContents = useSelector((state) => state.handleWishlist.wishlistContents)
  const bikes = Object.keys(wishlistContents)
  const totalItems = bikes.length

  return (
    <div className="icon-container">
      <p className="wishlist-title">My Wishlist</p>
      <p className="wishlist-subtitle">You Have {totalItems} Item(s) In Your Wishlist</p>
      {bikes.map(bike => <WishlistItem key={wishlistContents[bike].id} name={wishlistContents[bike].name} price={wishlistContents[bike].price} desc={wishlistContents[bike].description}/>)}
    </div>
  )
}

export default FilledWishlist