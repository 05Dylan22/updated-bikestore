import { useDispatch } from "react-redux"
import { removeItem } from "../redux/handleWishlist"
import { imagesIcons } from "../App"
import { useRef } from "react"

const WishlistItem = ({ name, price, desc, img, bike }) => {
  const dispatch = useDispatch()
  const WishlistItem = useRef(null)

  function removeWishlistItem(e) {
    WishlistItem.current.classList.add("wishlist-item-leaving")
    setTimeout(() => {
      dispatch(removeItem(bike))
    },550)
  }
  return (
    <div ref={WishlistItem} className="wishlist-item">
      <img onClick={(e) => removeWishlistItem(e)} className="wishlist-item-heart" src={imagesIcons.solidHeart} alt="solid heart" />
      <img loading="lazy" className="wishlist-item-img" src={img} alt="temp" />
      <div className="item-info">
        <p className="wishlist-item-title">{name}</p>
        <p className="wishlist-item-desc">{desc}</p>
        <div className="bottom-wishlist-item">
          <p className="wishlist-item-price">{price}</p>
          <button onClick={(e) => removeWishlistItem(e)} className="wishlist-add-to-cart">Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default WishlistItem