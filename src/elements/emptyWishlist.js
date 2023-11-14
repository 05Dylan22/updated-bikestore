import useDetectOutsideClick from "../hooks/detectOutsideClick"
import { useRef } from "react"

const EmptyWishlist = () => {
  const popup = useRef(null)
  useDetectOutsideClick(popup)
  
  return (
    <div ref={popup} id="wishlist" className="icon-container">
      <p className="wishlist-title">My Wishlist</p>
      <p className="wishlist-subtitle">You Have 0 Items In Your Wishlist</p>
    </div>
  )
}

export default EmptyWishlist