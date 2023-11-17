import { useSelector } from "react-redux"
import WishlistItem from "./wishlistItem"
import useDetectOutsideClick from "../hooks/detectOutsideClick"
import { useRef } from "react"

const FilledWishlist = () => {
  const wishlistContents = useSelector((state) => state.handleWishlist.wishlistContents)
  const bikes = Object.keys(wishlistContents)
  const totalItems = bikes.length
  const popup = useRef(null)
  useDetectOutsideClick(popup)

  return (
    <div ref={popup} id="wishlist" className="icon-container">
      <p className="wishlist-title">My Wishlist</p>
      <p className="wishlist-subtitle">You Have {totalItems} Item(s) In Your Wishlist</p>
      {bikes.map(bike => <WishlistItem key={wishlistContents[bike].id} name={wishlistContents[bike].name} price={wishlistContents[bike].price} desc={wishlistContents[bike].description} img={wishlistContents[bike].images[0]} bike={wishlistContents[bike]}/>)}
    </div>
  )
}

export default FilledWishlist