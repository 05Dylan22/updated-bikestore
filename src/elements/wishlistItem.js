import { useDispatch } from "react-redux"
import { removeItem } from "../redux/handleWishlist"

const WishlistItem = ({ name, price, desc, img, bike }) => {
  //ADD WISHLIST HEART TOP RIGHT TO REMOVE FROM WISHLIST
  const dispatch = useDispatch()
  return (
    <div className="wishlist-item">
      <img loading="lazy" className="wishlist-item-img" src={img} alt="temp" />
      <div className="item-info">
        <p className="wishlist-item-title">{name}</p>
        <p className="wishlist-item-desc">{desc}</p>
        <div className="bottom-wishlist-item">
          <p className="wishlist-item-price">{price}</p>
          <button onClick={() => dispatch(removeItem(bike))} className="wishlist-add-to-cart">Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default WishlistItem